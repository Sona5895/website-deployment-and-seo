import { db } from "@/db";
import { cvTemplates, users } from "./schema";

/**
 * Database Seed Script
 * İlk yükləmə üçün nümunə məlumatlar
 */

async function seed() {
  console.log("🌱 Database seed başladı...");

  try {
    // CV Şablonları
    const templateData = [
      {
        name: "Minimalist Professional",
        description: "Sadə və professional CV şablonu",
        thumbnail: "/templates/minimalist.png",
        previewUrl: "/templates/minimalist-preview.pdf",
        category: "Professional",
        price: "free",
        downloads: 0,
        rating: "4.8",
        isActive: true,
      },
      {
        name: "Creative Designer",
        description: "Yaradıcı dizaynerlər üçün CV",
        thumbnail: "/templates/creative.png",
        previewUrl: "/templates/creative-preview.pdf",
        category: "Creative",
        price: "free",
        downloads: 0,
        rating: "4.9",
        isActive: true,
      },
      {
        name: "Tech Developer",
        description: "Proqramçılar üçün texniki CV",
        thumbnail: "/templates/developer.png",
        previewUrl: "/templates/developer-preview.pdf",
        category: "Technology",
        price: "free",
        downloads: 0,
        rating: "4.7",
        isActive: true,
      },
      {
        name: "Modern Tester",
        description: "Testerlər üçün müasir CV",
        thumbnail: "/templates/tester.png",
        previewUrl: "/templates/tester-preview.pdf",
        category: "Testing",
        price: "free",
        downloads: 0,
        rating: "4.9",
        isActive: true,
      },
      {
        name: "Executive Premium",
        description: "Rəhbər vəzifələr üçün premium CV",
        thumbnail: "/templates/executive.png",
        previewUrl: "/templates/executive-preview.pdf",
        category: "Executive",
        price: "premium",
        downloads: 0,
        rating: "5.0",
        isActive: true,
      },
    ];

    for (const template of templateData) {
      await db.insert(cvTemplates).values(template);
      console.log(`✅ CV Şablonu əlavə edildi: ${template.name}`);
    }

    console.log("✅ Database seed uğurla tamamlandı!");
    console.log(`📊 Cəmi ${templateData.length} CV şablonu əlavə edildi`);
  } catch (error) {
    console.error("❌ Seed xətası:", error);
    throw error;
  }
}

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
