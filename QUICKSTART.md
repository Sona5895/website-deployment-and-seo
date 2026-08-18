# TexnoPlatform - Sürətli Başlanğıc

Bu sənəd layihəni 5 dəqiqə ərzində işə salmağınıza kömək edəcək.

---

## 🚀 5 Dəqiqədə Başla

### Addım 1: Dependency-ləri Quraşdır
```bash
npm install
```

### Addım 2: Məlumat Bazasını Setup Et
```bash
npx drizzle-kit push
```

### Addım 3: Serveri Başlat
```bash
npm run dev
```

### Addım 4: Brauzerdə Aç
```
http://localhost:3000
```

---

## 📝 Faylların Təsviri

### Əsas Fayllar
| Fayl | Təsvir |
|------|--------|
| `src/app/page.tsx` | Ana səhifə dizaynı |
| `src/app/layout.tsx` | Ümumi layout və SEO |
| `src/db/schema.ts` | Məlumat bazası cədvəlləri |
| `src/app/api/contact/route.ts` | Əlaqə forması API |

### Sənədlər
| Fayl | Təsvir |
|------|--------|
| `README.md` | Tam təlimat |
| `DEPLOYMENT.md` | Deploy təlimatı |
| `CHANGELOG.md` | Versiya tarixçəsi |
| `SUMMARY.md` | Ümumi xülasə |

### Konfiqurasiya
| Fayl | Təsvir |
|------|--------|
| `.env` | Məlumat bazası connection |
| `package.json` | Dependency-lər və script-lər |
| `tsconfig.json` | TypeScript konfiqurasiyası |

---

## 🎨 Səhifələri Dəyiş

### Ana Səhifə
```bash
# src/app/page.tsx faylını redaktə edin
nano src/app/page.tsx
# və ya
code src/app/page.tsx
```

### Rəngləri Dəyiş
```css
/* src/app/globals.css */
/* Rənglər: slate-900, purple-600, pink-600 */
```

### Mətnləri Tərcümə Et
```typescript
// src/app/page.tsx - Bütün mətnləri Azərbaycan dilində yazın
```

---

## 📱 Mobil Test

```bash
# Telefonunuzla test edin
# 1. Telefon və kompyuter eyni WiFi-də olmalıdır
# 2. npm run dev
# 3. http://YOUR_IP:3000
```

---

## 🐛 Problemlər və Həlli

### Problem: Port 3000 işğal olunub
```bash
# Başqa portda başlat
PORT=3001 npm run dev
```

### Problem: Database connection error
```bash
# .env faylını yoxlayın
cat .env

# DATABASE_URL düzgün olmalıdır
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db
```

### Problem: TypeScript error
```bash
# Type check
npm run typecheck

# Build
npm run build
```

---

## 🎯 Əsas Nöqtələr

### Ana Səhifə
- Hero bölməsi
- Xüsusiyyətlər grid
- Statistikalar
- Əlaqə forması
- Footer

### Admin Panel
- Mesajları göstər
- Xidmətləri göstər
- Statistikalar

### API Endpoint-lər
- `POST /api/contact` - Mesaj göndər
- `GET /api/contact` - Mesajları al
- `GET /api/health` - Sağlamlıq yoxlaması

---

## 📚 Əlavə Məlumat

### Tailwind CSS
```html
<!-- Rənglər -->
bg-purple-600    <!-- Bənövşəyi -->
bg-pink-600      <!-- Çəhrayı -->
bg-slate-900     <!-- Tünd -->
text-white       <!-- Ağ -->

<!-- Spacing -->
p-4              <!-- Padding: 1rem -->
m-4              <!-- Margin: 1rem -->
px-6             <!-- Padding X: 1.5rem -->
py-8             <!-- Padding Y: 2rem -->

<!-- Size -->
w-full           <!-- Genişlik: 100% -->
h-screen         <!-- Hündürlük: 100vh -->
text-xl          <!-- Font size: 1.25rem -->
```

### Drizzle ORM
```typescript
import { db } from "@/db";
import { users } from "@/db/schema";

// SELECT
const allUsers = await db.select().from(users);

// INSERT
await db.insert(users).values({ name: "Ad", email: "email@test.com" });

// UPDATE
await db.update(users).set({ name: "Yeni Ad" }).where(...);

// DELETE
await db.delete(users).where(...);
```

---

## 🎉 Hazır!

İndi saytınız işləyir! Daha ətraflı məlumat üçün:
- `README.md` - Tam təlimat
- `DEPLOYMENT.md` - Deploy təlimatı
