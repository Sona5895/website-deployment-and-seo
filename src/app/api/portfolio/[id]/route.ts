import { getServerSession } from "next-auth";
import { and, eq } from "drizzle-orm";

import { db } from "@/db";
import { portfolios } from "@/db/schema";
import { authOptions } from "@/lib/auth";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getServerSession(authOptions);
  const { id } = await params;

  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;

  const updated = await db
    .update(portfolios)
    .set({
      title: typeof body.title === "string" ? body.title : undefined,
      description: typeof body.description === "string" ? body.description : undefined,
      imageUrl: typeof body.imageUrl === "string" ? body.imageUrl : undefined,
      projectUrl: typeof body.projectUrl === "string" ? body.projectUrl : undefined,
      githubUrl: typeof body.githubUrl === "string" ? body.githubUrl : undefined,
      category: typeof body.category === "string" ? body.category : undefined,
      tags: Array.isArray(body.tags) ? body.tags : undefined,
      isFeatured: typeof body.isFeatured === "boolean" ? body.isFeatured : undefined,
      updatedAt: new Date(),
    })
    .where(and(eq(portfolios.id, Number(id)), eq(portfolios.userId, Number(session.user.id))))
    .returning();

  if (!updated[0]) {
    return Response.json({ error: "Project not found" }, { status: 404 });
  }

  return Response.json({ item: updated[0], success: true });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await getServerSession(authOptions);
  const { id } = await params;

  if (!session?.user?.id) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const deleted = await db
    .delete(portfolios)
    .where(and(eq(portfolios.id, Number(id)), eq(portfolios.userId, Number(session.user.id))))
    .returning();

  if (!deleted[0]) {
    return Response.json({ error: "Project not found" }, { status: 404 });
  }

  return Response.json({ success: true, deleted: deleted[0] });
}
