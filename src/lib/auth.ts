import type { DefaultSession, NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

import { db } from "@/db";
import { users } from "@/db/schema";

type GoogleProfileLike = {
  email?: string | null;
  name?: string | null;
  sub?: string | null;
  picture?: string | null;
};

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const googleConfigured =
  !!googleClientId &&
  !!googleClientSecret &&
  !googleClientId.includes("your-google-client-id") &&
  !googleClientSecret.includes("your-google-client-secret");

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      image?: string | null;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    sub?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    ...(googleConfigured
      ? [
          GoogleProvider({
            clientId: googleClientId as string,
            clientSecret: googleClientSecret as string,
          }),
        ]
      : []),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email?.toString().trim().toLowerCase();
        const password = credentials?.password?.toString();

        if (!email || !password) {
          return null;
        }

        const matches = await db.select().from(users).where(eq(users.email, email)).limit(1);
        const existingUser = matches[0];

        if (!existingUser || !existingUser.password) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: existingUser.id.toString(),
          email: existingUser.email,
          name: existingUser.name,
          image: existingUser.avatar ?? null,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        try {
          const googleProfile = profile as GoogleProfileLike | undefined;
          const email = googleProfile?.email ?? "";
          if (!email) {
            return false;
          }

          const existingUser = await db
            .select()
            .from(users)
            .where(eq(users.email, email))
            .limit(1);

          if (existingUser.length === 0) {
            await db.insert(users).values({
              name: googleProfile?.name ?? "Google User",
              email,
              googleId: googleProfile?.sub ?? null,
              avatar: googleProfile?.picture ?? null,
              isVerified: true,
            });
          } else if (!existingUser[0].googleId) {
            await db
              .update(users)
              .set({
                googleId: googleProfile?.sub ?? existingUser[0].googleId,
                avatar: googleProfile?.picture ?? existingUser[0].avatar,
                isVerified: true,
              })
              .where(eq(users.email, email));
          }
        } catch (error) {
          console.error("Google sign-in error:", error);
          return false;
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "devtesthub-secret-2026",
};
