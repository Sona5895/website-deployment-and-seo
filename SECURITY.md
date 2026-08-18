# Təhlükəsizlik Siyasəti

TexnoPlatform təhlükəsizliyi ciddi qəbul edir. Təhlükəsizlik problemi tapdığınız halda, lütfən, aşağıdakı yönləndirmələrə əməl edin.

## Bildiriş Üsulları

Təhlükəsizlik xətası tapdığınız halda:

1. **GitHub Security Advisory** istifadə edin:
   - Repository-də "Security" tab-a klikləyin
   - "Create new advisory" seçin
   - Problemi təsvir edin

2. **Email ilə**:
   - security@texnoplatform.az

## Bizim Təhlükəsizlik Tədbirləri

### Data Qorunması
- 🔒 Bütün məlumatlar şifrələnir
- 🔐 HTTPS/SSL sertifikatı
- 🛡️ SQL Injection qorunması (Drizzle ORM)
- 🚫 XSS qorunması
- 📝 CSRF token-lər

### API Təhlükəsizliyi
- ✅ Input validasiya
- ✅ Rate limiting
- ✅ Authentication
- ✅ Authorization

### Database
- ✅ PostgreSQL təhlükəsizlik parametrləri
- ✅ Encrypted connections
- ✅ Regular backups
- ✅ Access control

## Tövsiyə Olunan Praktikalar

### İstifadəçilər Üçün
- Güclü şifrələrdən istifadə edin
- 2FA aktiv edin
- Şifrənizi başqaları ilə paylaşmayın
- Şübhəli link-lərə klikləməyin

### Developerlər Üçən
- Dependency-ləri yeniləyin
- Secrets-i kodda saxlamayın
- Environment variables istifadə edin
- Code review edin
- Test yazın

## Vulnerability Disclosure Process

1. **Bildiriş**: Təhlükəsizlik problemi bildirilir
2. **Təsdiq**: Problemin təhlükəsizlik riski olduğu təsdiqlənir
3. **Tədqiqat**: Problemin kök səbəbi araşdırılır
4. **Düzəliş**: Fix hazırlanır və test edilir
5. **Yayım**: Fix deploy edilir
6. **Bildiriş**: İstifadəçilərə məlumat verilir

## Response Time

- **Critical**: 24 saat ərzində
- **High**: 72 saat ərzində
- **Medium**: 1 həftə ərzində
- **Low**: 2 həftə ərzində

## Bug Bounty

TexnoPlatform hazırda bug bounty proqramı təklif etmir, lakin məsul disclosure dəstəklənir.

## Təşəkkür

Təhlükəsizliyə töhfə verən hər kəsə təşəkkür edirik! Təşəkkürlər:

- Təhlükəsizlik araşdırıcıları
- Open source contributor-lar
- İstifadəçilər

## Təhlükəsizlik Audit-ları

- Mütəmadi kod review
- Dependency vulnerability scanning
- Security best practices tətbiqi

## Əlaqə

Təhlükəsizlik sualları üçün:
- Email: security@texnoplatform.az
- GitHub Issues (private)

---

**Son yeniləmə**: 2024-01-15
