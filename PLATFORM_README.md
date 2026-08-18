# TestHub - Proqramçı & Tester Platforması

**Proqramçılar və testerlər üçün tam funksional onlayn platforma**

---

## 🎯 Platforma Haqqında

TestHub, proqramçıların tester tapmasına və testerlərin iş elanlarında iş tapmasına imkan verən onlayn platformadır. Platforma həmçinin CV şablonları, portfolio idarəetməsi, mesajlaşma və xarici iş elanları inteqrasiyası təqdim edir.

---

## ✨ Əsas Xüsusiyyətlər

### 1. 📋 İş Elanları
- Proqramçılar tester elanları yaradır
- Testerlər iş elanlarına baxır və müraciət edir
- Filtrləmə: tip, kateqoriya, büdcə, yerləşmə
- Axtarış sistemi
- Xarici platformalardan avtomatik elanlar (Upwork, Freelancer)

### 2. 📄 CV Şablonları
- 6+ müasir CV şablonu
- Onlayn CV yaradıcı
- PDF export
- Portfolio ilə inteqrasiya
- Premium və pulsuz şablonlar

### 3. 💬 Mesajlaşma Sistemi
- Birbaşa mesajlaşma
- Video zəng dəstəyi
- Səsli zəng
- Fayl göndərmə
- Oxunub-oxunmama statusu

### 4. 👤 İstifadəçi Profili
- Google ilə qeydiyyat
- Portfolio idarəetməsi
- Sosial media inteqrasiyası (GitHub, LinkedIn, Instagram, Facebook)
- Reytinq və rəylər
- Sertifikatlar

### 5. 🔍 Axtarış Sistemi
- Elanlarda axtarış
- İstifadəçilərdə axtarış
- Xarici elanlarda axtarış
- Filterlər və sortlaşdırma

### 6. 📊 Dashboard
- Statistikalar
- Müraciətlər
- Mesajlar
- Bildirişlər

---

## 🗄️ Məlumat Bazası Sxemləri

### users (İstifadəçilər)
- id, name, email, google_id, avatar
- role (developer/tester/admin)
- bio, location, website
- github, linkedin, instagram, facebook, twitter
- skills, experience, hourly_rate
- is_verified, is_active

### cv_templates (CV Şablonları)
- id, name, description, thumbnail
- preview_url, category, price
- downloads, rating, is_active

### user_cvs (İstifadəçi CV-ləri)
- id, user_id, template_id
- title, data (JSON)
- is_public, views

### portfolios (Portfolio)
- id, user_id, title, description
- image_url, project_url, github_url
- category, tags, is_featured
- views, likes

### posts (Elanlar/Postlar)
- id, user_id, title, description
- type (job/project/tester/freelance)
- category, budget, deadline
- skills, location, remote
- status, views, applications
- is_featured, is_urgent

### applications (Müraciətlər)
- id, post_id, user_id
- cover_letter, cv_id, price, timeline
- status (pending/accepted/rejected)

### messages (Mesajlar)
- id, sender_id, receiver_id, post_id
- content, is_read

### conversations (Konversasiyalar)
- id, user_id_1, user_id_2
- last_message, last_message_at

### notifications (Bildirişlər)
- id, user_id, type
- title, content, link
- is_read

### reviews (Rəylər)
- id, reviewer_id, reviewee_id, post_id
- rating, comment

### external_jobs (Xarici Elanlar)
- id, source, external_id
- title, description, url
- budget, skills, posted_at
- source_data

---

## 🔌 API Endpoint-lər

### Elanlar (Posts)
```
GET    /api/posts              - Bütün elanları al
POST   /api/posts              - Yeni elan yarat
GET    /api/posts/:id          - Elan detalları
PUT    /api/posts/:id          - Elanı yenilə
DELETE /api/posts/:id          - Elanı sil
```

### CV Şablonları
```
GET    /api/cv-templates       - Bütün şablonları al
GET    /api/cv-templates/:id   - Şablon detalları
```

### Mesajlar
```
GET    /api/messages           - Mesajları al
POST   /api/messages           - Mesaj göndər
PUT    /api/messages/:id/read  - Mesajı oxundu işarələ
```

### İstifadəçilər
```
GET    /api/users              - Bütün istifadəçilər
GET    /api/users/:id          - İstifadəçi profili
PUT    /api/users/:id          - Profili yenilə
```

### Müraciətlər
```
POST   /api/applications       - Müraciət et
GET    /api/applications/:postId - Müraciətləri al
PUT    /api/applications/:id   - Statusu yenilə
```

---

## 🚀 Quraşdırma

```bash
# 1. Dependency-ləri quraşdır
npm install

# 2. Environment faylını kopyala
cp .env.example .env

# 3. DATABASE_URL təyin et
# .env faylını redaktə et

# 4. Database schema tətbiq et
npx drizzle-kit push

# 5. Seed data
npm run db:seed

# 6. Development server
npm run dev
```

---

## 🌐 Google Axtarışı Üçün

İstifadəçilər platformanı tapmaq üçün bunları axtara bilər:

```
proqramçı tester platforma
iş elanları Azərbaycan
tester iş axtarış
CV şablonları pulsuz
proqramçı iş elanları
freelance işlər Azərbaycan
Upwork elanları
Freelancer işlər
```

---

## 📦 GitHub-a Yükləmə

```bash
git init
git add .
git commit -m "Initial commit - TestHub Platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/testhub.git
git push -u origin main
```

---

## 🚀 Deploy

### Vercel
1. GitHub repository yaradın
2. Vercel-ə daxil olun
3. Repository import edin
4. DATABASE_URL əlavə edin
5. Deploy edin

### Google Auth Konfiqurasiyası
1. Google Cloud Console-a daxil olun
2. Yeni layihə yaradın
3. OAuth 2.0 Credentials yaradın
4. Client ID və Secret əlavə edin

---

## 💰 Gəlir Modelləri

### 1. Premium Abunə
- Premium CV şablonları
- Əlavə portfolio item-ləri
- Öncəli dəstək
- Reklam olmadan

### 2. İş Elanları
- İş elanları üçün komissiya
- Featured elanlar
- Premium profil

### 3. CV Şablonları
- Premium şablonlar satışı
- Custom CV dizaynı

---

## 📊 Statistikalar

- İstifadəçi sayı
- Aktiv elanlar
- Müraciət sayı
- CV yükləmələr
- Mesajlaşma aktivliyi

---

## 🔐 Təhlükəsizlik

- Google OAuth 2.0
- HTTPS/SSL
- SQL Injection qorunması
- XSS qorunması
- Rate limiting
- Input validasiya

---

## 📱 Responsive Dizayn

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

---

## 🎨 Dizayn Sistemi

### Rənglər
- Primary: Purple (#9333ea)
- Secondary: Pink (#ec4899)
- Background: Slate-900
- Text: White/Slate-100

### Font-lar
- Başlıqlar: Inter Bold
- Mətn: Inter Regular

---

## 📞 Dəstək

- Email: support@testhub.az
- Telegram: @testhub_support
- WhatsApp: +994 XX XXX XX XX

---

## 📄 Lisenziya

MIT License - Bütün hüquqlar qorunur © 2024 TestHub

---

## 🙏 Təşəkkürlər

Bütün istifadəçilərə və contributor-lərə təşəkkür edirik!
