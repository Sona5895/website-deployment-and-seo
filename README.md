# 🚀 TexnoPlatform - Müasir Veb Tətbiq

**Next.js, PostgreSQL və Drizzle ORM ilə qurulmuş peşəkar veb tətbiq platforması.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14-blue?logo=postgresql)](https://www.postgresql.org/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-blue)](https://orm.drizzle.team/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## 📋 İçindəkilər

- [Xüsusiyyətlər](#-xüsusiyyətlər)
- [Texnologiyalar](#-texnologiyalar)
- [Sürətli Başlanğıc](#-sürətli-başlanğıc)
- [Proje Struktur](#-proje-struktur)
- [API Dokumentasiya](#-api-dokumentasiya)
- [Deploy](#-deploy)
- [Sənədləşdirmə](#-sənədləşdirmə)
- [Lisenziya](#-lisenziya)

---

## ✨ Xüsusiyyətlər

### Frontend
- 🎨 **Müasir Dizayn** - Gözəl və responsiv UI
- 📱 **Mobil Uyğun** - Bütün cihazlarda işləyir
- ⚡ **Yüksək Performans** - Optimallaşdırılmış kod
- 🌙 **Qaranlıq Mod** - Göz yormayan dizayn
- ♿ **Əlçatanlıq** - WCAG standartlarına uyğun

### Backend
- 🗄️ **PostgreSQL** - Güclü məlumat bazası
- 🔒 **Təhlükəsizlik** - SQL injection qorunması
- 🚀 **API Routes** - REST API endpoint-lər
- 📊 **Admin Panel** - Məlumatları idarə edin
- 🔍 **Validasiya** - Input yoxlanışı

### SEO
- 🔍 **Meta Tag-lar** - Google optimallaşdırma
- 📄 **Sitemap** - Axtarış robotları üçün
- 🤖 **Robots.txt** - Crawling qaydaları
- 📱 **PWA** - Progressive Web App

---

## 🛠️ Texnologiyalar

| Texnologiya | Versiya | Təsvir |
|-------------|---------|--------|
| Next.js | 16.2.6 | React Framework (App Router) |
| React | 19.2.6 | UI Library |
| TypeScript | 5.9.3 | Tip Təhlükəsizliyi |
| PostgreSQL | 14+ | Məlumat Bazası |
| Drizzle ORM | 0.45.2 | Database ORM |
| Tailwind CSS | 4.1.17 | Stil Çərçivəsi |
| Node.js | 18+ | Runtime |

---

## 🚀 Sürətli Başlanğıc

### Tələblər

- Node.js 18+
- PostgreSQL 14+
- npm və ya yarn

### Quraşdırma

```bash
# 1. Repository-ni clone edin
git clone https://github.com/YOUR_USERNAME/texnoplatform.git
cd texnoplatform

# 2. Dependency-ləri quraşdırın
npm install

# 3. Environment faylını kopyalayın
cp .env.example .env

# 4. DATABASE_URL düzəldin
# .env faylını redaktə edin

# 5. Məlumat bazası setup
npx drizzle-kit push

# 6. Seed data (opsional)
npm run db:seed

# 7. İnkişaf serverini başlatın
npm run dev
```

### Nəticə

```
http://localhost:3000
```

---

## 📁 Proje Struktur

```
texnoplatform/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD pipeline
├── public/
│   ├── icon.svg                # Favicon
│   ├── manifest.json           # PWA manifest
│   ├── robots.txt              # SEO robots
│   └── sitemap.xml             # SEO sitemap
├── scripts/
│   ├── setup.ts                # Setup script
│   ├── setup.sh                # Linux/Mac setup
│   └── setup.bat               # Windows setup
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── page.tsx        # Admin panel
│   │   ├── api/
│   │   │   ├── admin/
│   │   │   │   └── messages/
│   │   │   │       └── route.ts # Admin API
│   │   │   ├── contact/
│   │   │   │   └── route.ts    # Contact API
│   │   │   └── health/
│   │   │       └── route.ts    # Health check
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Ana səhifə
│   └── db/
│       ├── index.ts            # DB connection
│       ├── schema.ts           # Database schema
│       └── seed.ts             # Seed data
├── .env.example                # Environment template
├── .gitignore                  # Git ignore
├── CHANGELOG.md                # Versiya tarixçəsi
├── CONTRIBUTING.md             # Töhfə vermə
├── DEPLOYMENT.md               # Deploy təlimatı
├── LICENSE                     # MIT lisenziyası
├── package.json                # Dependency-lər
├── README.md                   # Bu fayl
├── SECURITY.md                 # Təhlükəsizlik
└── SUMMARY.md                  # Xülasə
```

---

## 🗄️ Məlumat Bazası Sxemləri

### users (İstifadəçilər)
| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary Key |
| name | VARCHAR(255) | İstifadəçi adı |
| email | VARCHAR(255) | Email (unique) |
| created_at | TIMESTAMP | Yaratma tarixi |

### contact_messages (Əlaqə Mesajları)
| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary Key |
| name | VARCHAR(255) | Göndərən adı |
| email | VARCHAR(255) | Göndərən email |
| message | TEXT | Mesaj məzmunu |
| created_at | TIMESTAMP | Yaratma tarixi |

### services (Xidmətlər)
| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary Key |
| title | VARCHAR(255) | Xidmət adı |
| description | TEXT | Təsvir |
| icon | VARCHAR(100) | İkon emoji |
| is_active | VARCHAR(10) | Aktivlik statusu |
| created_at | TIMESTAMP | Yaratma tarixi |

---

## 🔌 API Dokumentasiya

### POST /api/contact

Əlaqə forması mesajı göndərmək.

**Request:**
```json
{
  "name": "Ad Soyad",
  "email": "email@nümunə.com",
  "message": "Mesaj məzmunu"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mesajınız uğurla göndərildi",
  "data": {
    "id": 1,
    "name": "Ad Soyad",
    "email": "email@nümunə.com",
    "message": "Mesaj məzmunu",
    "created_at": "2024-01-15T10:00:00Z"
  }
}
```

### GET /api/admin/messages

Bütün mesajları almaq (admin).

**Response:**
```json
{
  "success": true,
  "data": [...],
  "pagination": {
    "total": 10,
    "page": 1,
    "limit": 50,
    "totalPages": 1
  }
}
```

### GET /api/health

Sistem sağlamlıq yoxlaması.

**Response:**
```json
{
  "ok": true
}
```

---

## 🌐 Deploy

### Vercel (Tövsiyə)

```bash
# 1. GitHub-a push
git add .
git commit -m "Deploy hazırdır"
git push origin main

# 2. Vercel-də import
# https://vercel.com/new
```

**Tam təlimat:** [DEPLOYMENT.md](DEPLOYMENT.md) və ya [VERCEL_DEPLOY.md](VERCEL_DEPLOY.md)

### Digər Platformalar

- **Railway**: Həm hosting həm database
- **Render**: Pulsuz plan mövcud
- **Netlify**: Frontend hosting
- **AWS**: Enterprise həllər

---

## 📚 Sənədləşdirmə

| Fayl | Təsvir |
|------|--------|
| [README.md](README.md) | Bu fayl - Ümumi məlumat |
| [QUICKSTART.md](QUICKSTART.md) | Sürətli başlanğıc |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Deploy təlimatı |
| [VERCEL_DEPLOY.md](VERCEL_DEPLOY.md) | Vercel deploy |
| [CHANGELOG.md](CHANGELOG.md) | Versiya tarixçəsi |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Töhfə vermə |
| [SECURITY.md](SECURITY.md) | Təhlükəsizlik |
| [SUMMARY.md](SUMMARY.md) | Tam xülasə |

---

## 🛠️ NPM Script-lər

```bash
# İnkişaf
npm run dev              # Development server

# Build
npm run build            # Production build
npm run start            # Production server
npm run typecheck        # TypeScript check
npm run lint             # ESLint check

# Database
npm run db:push          # Push schema to DB
npm run db:studio        # Drizzle Studio
npm run db:seed          # Seed data

# Setup
npm run setup            # Tam setup
```

---

## 🎨 Səhifələri Dəyiş

### Ana Səhifə
```bash
# src/app/page.tsx faylını redaktə edin
code src/app/page.tsx
```

### Rənglər
```css
/* src/app/globals.css */
/* Tailwind CSS class-lərindən istifadə edin */
```

### Meta Tag-lar
```typescript
// src/app/layout.tsx
export const metadata = {
  title: "Yeni Başlıq",
  description: "Yeni təsvir",
};
```

---

## 📞 Əlaqə

### Dəstək
- **Email**: support@texnoplatform.az
- **GitHub**: [Issues](https://github.com/YOUR_USERNAME/texnoplatform/issues)
- **Discord**: [Link](https://discord.gg/your-invite)

### Satış
- **Email**: sales@texnoplatform.az
- **Telefon**: +994 XX XXX XX XX

---

## 🤝 Töhfə Vermə

Contributions welcome! Baxın: [CONTRIBUTING.md](CONTRIBUTING.md)

1. Fork edin
2. Branch yaradın (`git checkout -b feature/amazing`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing`)
5. Pull Request açın

---

## 📄 Lisenziya

Bu layihə [MIT Lisenziyası](LICENSE) altında licensiyanlaşdırılıb.

---

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=YOUR_USERNAME/texnoplatform&type=Date)](https://star-history.com/#YOUR_USERNAME/texnoplatform&Date)

---

## 🙏 Təşəkkürlər

- [Next.js Team](https://nextjs.org/)
- [Drizzle Team](https://orm.drizzle.team/)
- [Tailwind Labs](https://tailwindcss.com/)
- Bütün contributor-lərə

---

**Made with ❤️ by TexnoPlatform Team**
