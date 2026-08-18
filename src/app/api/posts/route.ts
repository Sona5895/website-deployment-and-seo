import { db } from "@/db";
import { posts } from "@/db/schema";
import { desc, eq, and, like, count } from "drizzle-orm";

export const dynamic = "force-dynamic";

// GET - Bütün elanları almaq
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const limit = parseInt(searchParams.get("limit") || "20");
    const page = parseInt(searchParams.get("page") || "1");
    const offset = (page - 1) * limit;

    let whereConditions = [];

    if (type) {
      whereConditions.push(eq(posts.type, type));
    }
    if (category) {
      whereConditions.push(eq(posts.category, category));
    }
    if (search) {
      whereConditions.push(
        like(posts.title, `%${search}%`)
      );
    }

    let allPosts;
    if (whereConditions.length > 0) {
      allPosts = await db
        .select()
        .from(posts)
        .where(and(...whereConditions))
        .orderBy(desc(posts.createdAt))
        .limit(limit)
        .offset(offset);
    } else {
      allPosts = await db
        .select()
        .from(posts)
        .orderBy(desc(posts.createdAt))
        .limit(limit)
        .offset(offset);
    }

    const totalResult = await db
      .select({ total: count() })
      .from(posts);

    const total = Number(totalResult[0]?.total ?? 0);

    return Response.json({
      success: true,
      data: allPosts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.max(1, Math.ceil(total / limit)),
      },
    });
  } catch (error) {
    console.error("Get posts error:", error);
    return Response.json(
      { error: "Server xətası baş verdi" },
      { status: 500 }
    );
  }
}

// POST - Yeni elan yaratmaq
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, title, description, type, category, budget, skills, location, remote } = body;

    if (!userId || !title || !description) {
      return Response.json(
        { error: "Zəruri məlumatlar tam deyil" },
        { status: 400 }
      );
    }

    const result = await db
      .insert(posts)
      .values({
        userId,
        title,
        description,
        type,
        category,
        budget,
        skills: skills || [],
        location,
        remote,
      })
      .returning();

    return Response.json({
      success: true,
      message: "Elan uğurla yaradıldı",
      data: result[0],
    });
  } catch (error) {
    console.error("Create post error:", error);
    return Response.json(
      { error: "Server xətası baş verdi" },
      { status: 500 }
    );
  }
}
