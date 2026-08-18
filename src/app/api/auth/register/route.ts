import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, role } = body;

    // Validasiya
    if (!name || !email || !password || !role) {
      return Response.json(
        { error: "Bütün xanaları doldurun" },
        { status: 400 }
      );
    }

    // Email yoxlanışı
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (existingUser && existingUser.length > 0) {
      return Response.json(
        { error: "Bu email artıq qeydiyyatdan keçib" },
        { status: 400 }
      );
    }

    // Şifrə hash
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni istifadəçi yarat
    const newUser = await db
      .insert(users)
      .values({
        name,
        email,
        password: hashedPassword,
        role: role as "developer" | "tester" | "admin",
        isVerified: true, // Qeydiyyatdan dərhal təsdiqlə
      } as any)
      .returning();

    return Response.json({
      success: true,
      message: "Qeydiyyat uğurla tamamlandı",
      data: {
        id: newUser[0].id,
        name: newUser[0].name,
        email: newUser[0].email,
        role: newUser[0].role,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return Response.json(
      { error: "Server xətası baş verdi" },
      { status: 500 }
    );
  }
}
