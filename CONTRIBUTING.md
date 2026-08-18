# Contributing Təlimatı

TexnoPlatform-a töhfə vermək istədiyiniz üçün təşəkkür edirik! 🎉

## Necə Töhfə Verə Bilərsiniz?

### 1. Bug Report (Xəta Bildirişi)

Xəta tapdınız? GitHub Issues-də bildirə bilərsiniz:

```markdown
**Xətanın təsviri**
Xətanı qısa və aydın şəkildə təsvir edin.

**Addımlar**
1. Bu səhifəyə get
2. Bu düyməni bas
3. Xətanı görürsən

**Gözlənilən davranış**
Nə olmalı idi?

**Screenshots**
Əgər mümkündürsə, ekran görüntüsü əlavə edin.

**Environment**
- OS: Windows/Mac/Linux
- Browser: Chrome/Firefox/Safari
- Version: 1.0.0
```

### 2. Feature Request (Xüsusiyyət Təklifi)

Yeni xüsusiyyət təklifiniz var?

```markdown
**Problem**
Bu xüsusiyyət hansı problemi həll edir?

**Həll yolu**
Nə olmalıdır?

**Alternativlər**
Başqa həll yolları düşündünüzmü?

**Əlavə məlumat**
Digər məlumatlar?
```

### 3. Code Contribution (Kod Töhfəsi)

#### Pull Request Prosessi

1. **Fork edin** - Repository-ni fork edin
2. **Clone edin** - Lokala yükləyin
   ```bash
   git clone https://github.com/YOUR_USERNAME/repo-name.git
   cd repo-name
   ```
3. **Branch yaradın**
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Dəyişikliklər edin**
5. **Test edin**
   ```bash
   npm run build
   npm run typecheck
   ```
6. **Commit edin**
   ```bash
   git commit -m 'Add: amazing feature'
   ```
7. **Push edin**
   ```bash
   git push origin feature/amazing-feature
   ```
8. **Pull Request açın**

#### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: Yeni xüsusiyyət
- `fix`: Bug fix
- `docs`: Sənədləşdirmə
- `style`: Stil dəyişiklikləri
- `refactor`: Refactoring
- `test`: Test əlavələri
- `chore`: Build process dəyişiklikləri

**Nümunə:**
```
feat(auth): İstifadəçi qeydiyyat sistemi əlavə edildi

Yeni qeydiyyat və giriş sistemi əlavə edildi.
- Email ilə qeydiyyat
- Social login
- Password reset

Closes #123
```

### 4. Documentation (Sənədləşdirmə)

Sənədləşdirməyə töhfə:
- README.md yeniləmə
- API dokumentasiyası
- Təlimatların tərcüməsi
- Nümunə kodlar

### 5. Translation (Tərcümə)

Dil dəstəyi əlavə etmək:
- az (Azərbaycan) - Ana dil
- en (English)
- ru (Русский)

## Kod Standartları

### TypeScript

```typescript
// ✅ Good
interface User {
  id: number;
  name: string;
  email: string;
}

// ❌ Bad
const user = {
  id: 1,
  name: "John",
  email: "john@example.com"
}
```

### Component Structure

```typescript
// ✅ Good - Separate files
// components/Button.tsx
export function Button({ children }: { children: ReactNode }) {
  return <button>{children}</button>;
}

// ❌ Bad - All in one file
```

### Naming Conventions

- Components: PascalCase (`UserProfile`)
- Files: kebab-case (`user-profile.tsx`)
- Variables: camelCase (`userName`)
- Constants: UPPER_SNAKE_CASE (`API_URL`)
- Types/Interfaces: PascalCase (`UserType`)

## Testing

Əsas funksionallıqlar üçün testlər:

```bash
# Unit test-lər
npm run test

# E2E test-lər
npm run test:e2e

# Coverage report
npm run test:coverage
```

## Code Review

Pull Request-lər:
- Ən azı 1 review tələb olunur
- Bütün CI check-lər keçməlidir
- Dəyişikliklər aydın təsvir olunmalıdır

## İndirilmə

1. Node.js 18+ quraşdırın
2. PostgreSQL quraşdırın
3. Dependency-ləri quraşdırın: `npm install`
4. Database setup: `npx drizzle-kit push`
5. Development: `npm run dev`

## Suallar?

- GitHub Discussions
- Email: dev@texnoplatform.az

## License

Töhfəniz MIT lisenziyası altında licensiyanlaşdırılacaq.

---

Təşəkkür edirik! 🙏
