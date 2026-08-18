import { db } from "@/db";
import { cvTemplates } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

// GET - Bütün CV şablonlarını almaq
export async function GET() {
  try {
    const templates = await db
      .select()
      .from(cvTemplates)
      .where(eq(cvTemplates.isActive, true))
      .orderBy(desc(cvTemplates.downloads));

    return Response.json({
      success: true,
      data: templates,
    });
  } catch (error) {
    console.error("Get CV templates error:", error);
    return Response.json(
      { error: "Server xətası baş verdi" },
      { status: 500 }
    );
  }
}
