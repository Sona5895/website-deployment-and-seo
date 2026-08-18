const templates = [
  {
    id: "professional",
    name: "Professional ATS CV",
    category: "QA / Tech",
    summary: "ATS uyğun, real iş təcrübəsi və ölçülə bilən nailiyyət formatı.",
    sections: ["Summary", "Experience", "Education", "Skills", "Certificates", "Languages"],
  },
  {
    id: "modern",
    name: "Modern Two-Column CV",
    category: "Product / Design",
    summary: "İki sütunlu müasir görünüş, profil + əsas təcrübə balansı.",
    sections: ["Profile", "Experience", "Projects", "Education", "Tools", "Contact"],
  },
  {
    id: "executive",
    name: "Executive Leadership CV",
    category: "Senior",
    summary: "Rəhbər və senior rollar üçün nəticə yönümlü təqdimat.",
    sections: ["Executive Summary", "Impact", "Leadership", "Work History", "Education"],
  },
];

export default function CVTemplatesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Real CV Şablonları</h1>
            <p className="mt-1 text-sm text-slate-400">Yarımçıq deyil — real iş müraciətinə uyğun tam struktur</p>
          </div>
          <a href="/cv-builder" className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-700">CV Builder aç</a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <article key={t.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">{t.category}</span>
              <h2 className="mt-3 text-lg font-semibold">{t.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{t.summary}</p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                {t.sections.map((s) => (
                  <span key={s} className="rounded-full border border-slate-700 px-2 py-1">{s}</span>
                ))}
              </div>

              <a
                href={`/cv-builder?template=${t.id}`}
                className="mt-4 inline-block w-full rounded-lg bg-purple-600 px-4 py-2 text-center text-sm font-medium hover:bg-purple-700"
              >
                İstifadə et
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
