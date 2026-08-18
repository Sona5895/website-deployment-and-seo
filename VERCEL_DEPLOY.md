# Vercel Deploy Təlimatı

Bu təlimat TexnoPlatform-u Vercel üzərindən 5 dəqiqə ərzində deploy etməyi öyrədir.

---

## 🚀 Addım-Addım Deploy

### 1. GitHub Repository Yaradın

```bash
# Layihəni git-ə əlavə edin
git init
git add .
git commit -m "Initial commit - TexnoPlatform"
git branch -M main
```

### 2. GitHub-a Push Edin

```bash
# GitHub repository yaradın (https://github.com/new)
# Sonra:
git remote add origin https://github.com/YOUR_USERNAME/texnoplatform.git
git push -u origin main
```

### 3. Vercel Hesabı Yaradın

1. https://vercel.com saytına daxil olun
2. "Sign Up" düyməsini basın
3. "Continue with GitHub" seçin
4. GitHub hesabınızla giriş edin

### 4. Project Import Edin

1. Vercel dashboard-da "Add New..." > "Project" seçin
2. GitHub repository-ni seçin (texnoplatform)
3. "Import" düyməsini basın

### 5. Konfiqurasiya

**Framework Preset:**
- Next.js (avtomatik tanınacaq)

**Build Settings:**
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**Environment Variables:**
```
DATABASE_URL=postgresql://user:password@host:5432/database
```

⚠️ **MÖHÜM**: DATABASE_URL əlavə edin!

### 6. Deploy Edin

"Deploy" düyməsini basın!

Vercel avtomatik:
- Dependency-ləri quraşdıracaq
- Build edəcək
- Deploy edəcək

---

## 🌐 Domain Əlavə Edin

### 1. Vercel Dashboard
1. Project Settings > Domains
2. Domain əlavə edin (texnoplatform.az)

### 2. DNS Qeydləri

**A Record:**
```
@    76.76.21.21
```

**CNAME Record:**
```
www    cname.vercel-dns.com
```

### 3. Gözləyin
DNS propagasiyası 5-60 dəqiqə çəkə bilər.

---

## 🔐 SSL Sertifikatı

Vercel avtomatik SSL sertifikatı təmin edir!

- HTTPS avtomatik aktivdir
- Sertifikat avtomatik yenilənir
- Heç bir əlavə konfiqurasiya tələb olunmur

---

## 🔄 Avtomatik Deploy

### Push Etdikdən Sonra

```bash
# Dəyişiklik etdikdən sonra
git add .
git commit -m "feat: yeni xüsusiyyət"
git push origin main
```

Vercel avtomatik:
1. Yeni commit-i aşkarlayır
2. Build edir
3. Deploy edir
4. Canlıya çıxarır

### Preview Deploy

```bash
# Feature branch yaradın
git checkout -b feature/new-feature

# Push edin
git push origin feature/new-feature
```

Vercel preview link yaradır:
```
https://new-feature-texnoplatform.vercel.app
```

---

## 📊 Analytics

### Vercel Analytics

1. Vercel Dashboard > Analytics
2. "Enable" düyməsini basın

**Ölçülən:**
- Ziyarətçi sayı
- Səhifə görüntüləmə
- Geolocation
- Cihazlar
- Referrer-lər

---

## 🐛 Troubleshooting

### Build Failures

**Problem**: Build xətası
**Həlli**:
1. Vercel Dashboard > Deployments
2. Failed deployment-a klikləyin
3. Build logs-u yoxlayın
4. Xətanı düzəldin və push edin

### Database Connection Error

**Problem**: DATABASE_URL error
**Həlli**:
1. Settings > Environment Variables
2. DATABASE_URL əlavə edin
3. Deploy yenidən başlayın

### 500 Error

**Problem**: Server xətası
**Həlli**:
1. Vercel Functions > Logs
2. Runtime logs-u yoxlayın
3. Xətanı düzəldin

---

## 💰 Maliyyət

### Hobby Plan (Pulsuz)
- ✅ Unlimited projects
- ✅ Unlimited updates
- ✅ Automatic deployments
- ✅ SSL certificates
- ✅ Analytics
- ✅ 100GB bandwidth/ay

### Pro Plan ($20/ay)
- ✅ Daha çox bandwidth
- ✅ Daha çox funksiyalar
- ✅ Prioritet dəstək

---

## 🚀 Optimizasiya

### Image Optimizasiya
```tsx
import Image from 'next/image';

<Image src="/image.jpg" alt="Description" width={500} height={300} />
```

### Static Generation
```tsx
export const revalidate = 3600; // 1 saat
```

### Lazy Loading
```tsx
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <p>Loading...</p>
});
```

---

## 📞 Dəstək

### Vercel Dəstək
- https://vercel.com/support
- Discord community
- Documentation

### TexnoPlatform Dəstək
- GitHub Issues
- Email: support@texnoplatform.az

---

## ✅ Yoxlama Siyahısı

- [ ] GitHub repository yaradıldı
- [ ] Kod push edildi
- [ ] Vercel hesabı yaradıldı
- [ ] Project import edildi
- [ ] Environment variables əlavə edildi
- [ ] Deploy uğurla tamamlandı
- [ ] Domain əlavə edildi (opsional)
- [ ] DNS qeydləri tənzimləndi
- [ ] SSL aktivdir
- [ ] Analytics aktivdir

---

**Hazır!** Saytınız canlıdır! 🎉

Link: `https://texnoplatform.vercel.app`
