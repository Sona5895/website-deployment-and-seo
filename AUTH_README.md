# 🔐 TestHub - Autentifikasiya Sistemi

## ✅ Tamamlanan Autentifikasiya

### 🎯 Xüsusiyyətlər

1. **Google OAuth 2.0**
   - Bir kliklə Google ilə qeydiyyat
   - Google ilə giriş
   - Profil məlumatları avtomatik yüklənir

2. **Email/Şifrə**
   - Email ilə qeydiyyat
   - Şifrə hash (bcrypt)
   - Rol seçimi (Tester/Developer)

3. **Sessiya İdarəetməsi**
   - JWT token-lər
   - Secure session
   - Automatic redirect

---

## 🔧 Quraşdırma

### 1. Environment Variables

`.env` faylına əlavə edin:

```env
# Database
DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db

# NextAuth
NEXTAUTH_SECRET=testhub-secret-key-2024-super-secure
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (Gələcəkdə)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 2. Google OAuth Quraşdırma (Opsional)

#### Google Cloud Console:
1. https://console.cloud.google.com
2. Yeni layihə yaradın
3. OAuth 2.0 Credentials
4. Authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
   - `https://your-domain.com/api/auth/callback/google`
5. Client ID və Secret kopyalayın
6. `.env` faylına əlavə edin

---

## 📁 Yaradılan Fayllar

### API Routes:
```
src/app/api/auth/
├── [...nextauth]/
│   └── route.ts          # NextAuth handler
└── register/
    └── route.ts          # Qeydiyyat API
```

### Components:
```
src/components/
├── LoginForm.tsx         # Giriş formu komponenti
└── RegisterForm.tsx      # Qeydiyyat formu komponenti
```

### Providers:
```
src/app/
└── providers.tsx         # SessionProvider
```

### Database Schema:
```
users table:
- id, name, email, password (hash)
- google_id, avatar
- role (developer/tester/admin)
```

---

## 🎯 İstifadə

### Giriş Et
```typescript
import { signIn } from "next-auth/react";

// Google ilə
signIn("google");

// Email ilə
signIn("credentials", {
  email: "user@example.com",
  password: "password123",
});
```

### İstifadəçi Məlumatı
```typescript
import { useSession } from "next-auth/react";

const { data: session } = useSession();

if (session) {
  console.log(session.user.email);
  console.log(session.user.name);
}
```

### Çıxış Et
```typescript
import { signOut } from "next-auth/react";

signOut();
```

---

## 🔒 Təhlükəsizlik

### Şifrə Hash
- bcryptjs ilə şifrələr hash olunur
- 10 rounds hashing

### JWT Tokens
- Secure JWT token-lər
- Session-based authentication

### Input Validasiya
- Email formatı yoxlanışı
- Şifrə tələbləri (6+ simvol)

---

## 🚀 Test

### Email ilə Qeydiyyat
1. `/auth/register` səhifəsinə daxil olun
2. Məlumatları doldurun
3. Rol seçin (Tester/Developer)
4. "Qeydiyyatdan Keç" düyməsini basın

### Google ilə Giriş
1. `/auth/login` səhifəsinə daxil olun
2. "Google ilə Davam Et" düyməsini basın
3. Google hesabınızla giriş edin

---

## 📊 API Endpoint-lər

### Qeydiyyat
```
POST /api/auth/register

Body:
{
  "name": "Ad Soyad",
  "email": "email@example.com",
  "password": "password123",
  "role": "tester" | "developer"
}

Response:
{
  "success": true,
  "message": "Qeydiyyat uğurla tamamlandı",
  "data": { "id": 1, "name": "Ad", "email": "email@example.com" }
}
```

### Giriş
```
POST /api/auth/signin

Body:
{
  "email": "email@example.com",
  "password": "password123"
}
```

### Sessiya
```
GET /api/auth/session
```

---

## 🐛 Troubleshooting

### Problem: "Email və ya şifrə yanlışdır"
- Email düzgün olduğundan əmin olun
- Şifrənin ən azı 6 simvol olduğundan əmin olun
- Database-də istifadəçi mövcud olduğundan əmin olun

### Problem: Google OAuth işləmir
- `.env` faylında GOOGLE_CLIENT_ID və GOOGLE_CLIENT_SECRET əlavə edin
- Google Cloud Console-da redirect URI-ləri yenidən yoxlayın
- NEXTAUTH_SECRET təyin edin

### Problem: Database schema error
```bash
npx drizzle-kit push
```

---

## 🎉 Hazır!

Autentifikasiya sistemi tam işlək vəziyyətdədir!

**İndi yoxlayın:**
```
https://testhub.vercel.app/auth/register
https://testhub.vercel.app/auth/login
```
