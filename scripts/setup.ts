/**
 * TexnoPlatform Setup Script
 * Bu script layihəni ilk dəfə qurmaq üçün istifadə olunur
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

function log(message: string, color: string = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

async function setup() {
  log('\n🚀 TexnoPlatform Setup Script', colors.cyan);
  log('==============================\n', colors.cyan);

  try {
    // 1. Dependency quraşdırma
    log('📦 1. Dependency-ləri quraşdırılır...', colors.blue);
    execSync('npm install', { stdio: 'inherit' });
    log('✅ Dependency-lər quraşdırıldı\n', colors.green);

    // 2. .env faylı yoxlanışı
    log('🗄️  2. .env faylı yoxlanılır...', colors.blue);
    const envPath = path.join(process.cwd(), '.env');
    const envExamplePath = path.join(process.cwd(), '.env.example');
    
    if (!fs.existsSync(envPath)) {
      if (fs.existsSync(envExamplePath)) {
        fs.copyFileSync(envExamplePath, envPath);
        log('⚠️  .env faylı yaradıldı (.env.example-dən)', colors.yellow);
      } else {
        log('⚠️  .env faylı tapılmadı və .env.example yoxdur', colors.yellow);
      }
    } else {
      log('✅ .env faylı mövcuddur', colors.green);
    }

    // 3. Drizzle schema push
    log('\n🔧 3. Məlumat bazası sxemi tətbiq edilir...', colors.blue);
    execSync('npx drizzle-kit push', { stdio: 'inherit' });
    log('✅ Schema tətbiq edildi\n', colors.green);

    // 4. Database seed
    log('🌱 4. Database seed...', colors.blue);
    execSync('npm run db:seed', { stdio: 'inherit' });
    log('✅ Seed tamamlandı\n', colors.green);

    // Başarı mesajı
    log('========================================', colors.green);
    log('✅ Setup tamamlandı!', colors.green);
    log('========================================\n', colors.green);
    
    log('İstifadə üçün:', colors.cyan);
    log('  - İnkişaf: npm run dev', colors.white);
    log('  - Build: npm run build', colors.white);
    log('  - Start: npm run start', colors.white);
    log('  - DB Studio: npm run db:studio', colors.white);
    log('\n📚 Sənədləşdirmə: README.md və DEPLOYMENT.md', colors.cyan);
    log('');

  } catch (error) {
    log('\n❌ Setup xətası:', colors.red);
    console.error(error);
    process.exit(1);
  }
}

setup();
