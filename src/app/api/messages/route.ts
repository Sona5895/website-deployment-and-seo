import { db } from "@/db";
import { messages, conversations } from "@/db/schema";
import { eq, and, or } from "drizzle-orm";

export const dynamic = "force-dynamic";

// GET - Mesajları almaq
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId1 = parseInt(searchParams.get("userId1") || "0");
    const userId2 = parseInt(searchParams.get("userId2") || "0");

    if (!userId1 || !userId2) {
      return Response.json({
        success: true,
        data: [],
      });
    }

    const userMessages = await db
      .select()
      .from(messages)
      .where(
        and(
          or(
            and(eq(messages.senderId, userId1), eq(messages.receiverId, userId2)),
            and(eq(messages.senderId, userId2), eq(messages.receiverId, userId1))
          )
        )
      )
      .orderBy(messages.createdAt);

    return Response.json({
      success: true,
      data: userMessages,
    });
  } catch (error) {
    console.error("Get messages error:", error);
    return Response.json(
      { error: "Server xətası baş verdi" },
      { status: 500 }
    );
  }
}

// POST - Yeni mesaj göndərmək
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { senderId, receiverId, postId, content } = body;

    if (!senderId || !receiverId || !content) {
      return Response.json(
        { error: "Zəruri məlumatlar tam deyil" },
        { status: 400 }
      );
    }

    const result = await db
      .insert(messages)
      .values({
        senderId,
        receiverId,
        postId,
        content,
      })
      .returning();

    // Konversasiyanı yenilə və ya yarat
    const normalizedUserId1 = Math.min(senderId, receiverId);
    const normalizedUserId2 = Math.max(senderId, receiverId);

    const existingConversation = await db
      .select()
      .from(conversations)
      .where(
        and(
          eq(conversations.userId1, normalizedUserId1),
          eq(conversations.userId2, normalizedUserId2)
        )
      )
      .limit(1);

    if (existingConversation.length > 0) {
      await db
        .update(conversations)
        .set({
          lastMessage: content,
          lastMessageAt: new Date(),
        })
        .where(eq(conversations.id, existingConversation[0].id));
    } else {
      await db.insert(conversations).values({
        userId1: normalizedUserId1,
        userId2: normalizedUserId2,
        lastMessage: content,
        lastMessageAt: new Date(),
      });
    }

    return Response.json({
      success: true,
      message: "Mesaj göndərildi",
      data: result[0],
    });
  } catch (error) {
    console.error("Send message error:", error);
    return Response.json(
      { error: "Server xətası baş verdi" },
      { status: 500 }
    );
  }
}
