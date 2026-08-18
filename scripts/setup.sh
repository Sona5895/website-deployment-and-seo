#!/bin/bash

# TexnoPlatform Setup Script
# Bu script layihəni ilk dəfə qurmaq üçün istifadə olunur

echo "🚀 TexnoPlatform Setup Script"
echo "=============================="
echo ""

# Rəy almaq
read -p "Davam etmək istəyirsiniz? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Setup ləğv edildi"
    exit 1
fi

echo ""
echo "📦 1. Dependency-ləri quraşdırılır..."
npm install

echo ""
echo "🗄️  2. Məlumat bazası sxemi yoxlanılır..."
# DATABASE_URL yoxlanışı
if [ -f .env ]; then
    if grep -q "DATABASE_URL" .env; then
        echo "✅ DATABASE_URL tapıldı"
    else
        echo "⚠️  DATABASE_URL .env faylında tapılmadı"
        echo "Lütfən .env faylını redaktə edin və DATABASE_URL əlavə edin"
    fi
else
    echo "⚠️  .env faylı tapılmadı"
    echo "Lütfən .env.example faylını .env kimi kopyalayın"
fi

echo ""
echo "🔧 3. Drizzle schema push..."
npx drizzle-kit push

echo ""
echo "🌱 4. Database seed..."
npx tsx src/db/seed.ts

echo ""
echo "✅ Setup tamamlandı!"
echo ""
echo "İstifadə üçün:"
echo "  - İnkişaf: npm run dev"
echo "  - Build: npm run build"
echo "  - Start: npm run start"
echo ""
echo "📚 Sənədləşdirmə: README.md və DEPLOYMENT.md"
