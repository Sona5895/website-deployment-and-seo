@echo off
REM TexnoPlatform Setup Script (Windows)

echo.
echo 🚀 TexnoPlatform Setup Script
echo ==============================
echo.

REM Dependency quraşdırma
echo 📦 1. Dependency-ləri quraşdırılır...
call npm install

echo.
echo 🗄️  2. Məlumat bazası sxemi yoxlanılır...
REM DATABASE_URL yoxlanışı
if exist .env (
    findstr /C:"DATABASE_URL" .env >nul
    if %ERRORLEVEL% EQU 0 (
        echo ✅ DATABASE_URL tapıldı
    ) else (
        echo ⚠️  DATABASE_URL .env faylında tapılmadı
    )
) else (
    echo ⚠️  .env faylı tapılmadı
)

echo.
echo 🔧 3. Drizzle schema push...
call npx drizzle-kit push

echo.
echo 🌱 4. Database seed...
call npx tsx src/db/seed.ts

echo.
echo ✅ Setup tamamlandı!
echo.
echo İstifadə üçün:
echo   - İnkişaf: npm run dev
echo   - Build: npm run build
echo   - Start: npm run start
echo.
echo 📚 Sənədləşdirmə: README.md və DEPLOYMENT.md

pause
