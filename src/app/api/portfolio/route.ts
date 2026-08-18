import { getServerSession } from "next-auth";
import { and, desc, eq } from "drizzle-orm";

import { db } from "@/db";
import { portfolios } from "@/db/schema";
import { authOptions } from "@/lib/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userOnly = searchParams.get("mine") === "true";
  const session = await getServerSession(authOptions);

  if (userOnly && !session?.user?.email) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const rows = await db
    .select()
    .from(portfolios)
    .where(userOnly && session?.user?.id ? eq(portfolios.userId, Number(session.user.id)) : undefined)
    .orderBy(desc(portfolios.createdAt));

  return Response.json({ items: rows, success: true });
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;

  const created = await db
    .insert(portfolios)
    .values({
      userId: Number(session.user.id),
      title: typeof body.title === "string" ? body.title : "Untitled project",
      description: typeof body.description === "string" ? body.description : "",
      imageUrl: typeof body.imageUrl === "string" ? body.imageUrl : null,
      projectUrl: typeof body.projectUrl === "string" ? body.projectUrl : null,
      githubUrl: typeof body.githubUrl === "string" ? body.githubUrl : null,
      category: typeof body.category === "string" ? body.category : "General",
      tags: Array.isArray(body.tags) ? body.tags : [],
      isFeatured: Boolean(body.isFeatured),
    })
    .returning();

  return Response.json({ item: created[0], success: true }, { status: 201 });
}
