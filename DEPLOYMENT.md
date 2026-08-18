# Deployement Təlimatı

## Vercel Üzərindən Deploy

### 1. GitHub-a Yükləyin

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USER/REPO_NAME.git
git push -u origin main
```

### 2. Vercel Hesabı Yaradın

- https://vercel.com saytına daxil olun
- GitHub hesabınızla giriş edin

### 3. Project Import Edin

- Vercel dashboard-da "Add New Project" seçin
- GitHub repository-ni seçin
- Framework Preset: **Next.js**
- Build Command: `npm run build`
- Output Directory: `.next`

### 4. Environment Variables

Vercel dashboard-da Settings > Environment Variables:

```
DATABASE_URL=postgresql://user:password@host:5432/database
```

### 5. Deploy

"Deploy" düyməsini basın. Vercel avtomatik build edəcək və deploy edəcək.

## PostgreSQL Məlumat Bazası

### Neon (Tövsiyə Olunur)
- https://neon.tech - Pulsuz PostgreSQL
- GitHub ilə asan quraşdırma
- Avtomatik scale

### Supabase
- https://supabase.com - PostgreSQL + Realtime
- Pulsuz plan mövcud

### Railway
- https://railway.app - Həm hosting həm DB
- $5 pulsuz kredit

## Railway Üzərindən Deploy

### 1. Railway Hesabı
- https://railway.app
- GitHub ilə giriş

### 2. Yeni Project
- "New Project" > "Deploy from GitHub repo"
- Repository seçin

### 3. PostgreSQL Əlavə Edin
- "New" > "Database" > "PostgreSQL"
- Avtomatik qurulacaq

### 4. Environment Variables
Railway dashboard-da variables əlavə edin:
```
DATABASE_URL=${{Postgres.DATABASE_URL}}
```

### 5. Deploy
Avtomatik deploy ediləcək.

## Render Üzərindən Deploy

### 1. Render Hesabı
- https://render.com
- GitHub ilə giriş

### 2. Yeni Web Service
- "New" > "Web Service"
- Repository seçin

### 3. Konfiqurasiya
- Build Command: `npm run build`
- Start Command: `npm run start`
- Node Version: 18

### 4. PostgreSQL
- "New" > "PostgreSQL"
- Connection string-i environment variable olaraq əlavə edin

## Lokal Test

```bash
# Build yoxlanışı
npm run build

# Lokal start
npm run start

# Port 3000-da çalışacaq
```

## Domain Əlavə Edin

### Vercel
1. Settings > Domains
2. Domain əlavə edin
3. DNS qeydlərini tənzimləyin

### Render
1. Settings > Custom Domain
2. Domain əlavə edin
3. DNS tənzimləyin

## SSL Sertifikatı

Vercel və Render avtomatik SSL təmin edir.

## Monitoring

### Vercel Analytics
- Dashboard > Analytics
- Ziyarətçi statistikası

### Database Monitoring
- Neon/Supabase dashboard
- Query logları

## Backup

### Database Backup
```bash
# PostgreSQL dump
pg_dump $DATABASE_URL > backup.sql

# Restore
psql $DATABASE_URL < backup.sql
```

### Code Backup
- GitHub repository
- Mütəmadi commit-lər

## Troubleshooting

### Build Failures
- Node version yoxlayın (18+)
- Dependencies yeniləyin
- Build log-larını yoxlayın

### Database Connection
- DATABASE_URL düzgünlüyü
- Firewall qaydaları
- SSL tənzimləmələri

### Environment Variables
- Bütün variables-lar təyin olunub?
- Düzgün formatda?

## Maliyyət

### Vercel
- Hobby: Pulsuz
- Pro: $20/ay

### Neon PostgreSQL
- Free: Pulsuz (0.5GB)
- Pro: $20/ay

### Railway
- Free: $5 kredit
- Usage-based

### Render
- Free: Pulsuz (limitli)
- Starter: $7/ay

## Tövsiyələr

1. **Development**: Vercel Hobby + Neon Free
2. **Production**: Vercel Pro + Neon Pro
3. **Budget**: Railway (hər şey daxil)
4. **Enterprise**: AWS RDS + EC2/Vercel

## Support

Problem halında:
- GitHub Issues
- Vercel Documentation
- Stack Overflow
