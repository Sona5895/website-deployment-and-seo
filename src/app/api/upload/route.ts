import { mkdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

const allowedMimeTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return Response.json({ error: "No file uploaded" }, { status: 400 });
  }

  if (!allowedMimeTypes.has(file.type)) {
    return Response.json({ error: "Unsupported file type. Use JPG, PNG, WEBP or GIF." }, { status: 400 });
  }

  const extension = extname(file.name) || ".png";
  const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}${extension}`;
  const uploadDir = join(process.cwd(), "public", "uploads");

  await mkdir(uploadDir, { recursive: true });

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const targetPath = join(uploadDir, safeName);

  await writeFile(targetPath, buffer);

  return Response.json({
    success: true,
    url: `/uploads/${safeName}`,
  });
}
