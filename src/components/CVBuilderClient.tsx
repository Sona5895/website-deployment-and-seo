"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type Experience = { company: string; role: string; period: string; bullets: string[] };

export default function CVBuilderClient() {
  const params = useSearchParams();
  const initialTemplate = params.get("template") || "professional";

  const [template, setTemplate] = useState(initialTemplate);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [name, setName] = useState("Aysel Məmmədova");
  const [title, setTitle] = useState("Senior QA Engineer");
  const [email, setEmail] = useState("aysel.qa@mail.com");
  const [phone, setPhone] = useState("+994 50 444 22 11");
  const [location, setLocation] = useState("Bakı, Azərbaycan");
  const [summary, setSummary] = useState(
    "7+ il təcrübəli QA Engineer. Web, mobile və API testləri üzrə ixtisaslaşıb. Release riskini azaltmaq üçün avtomatlaşdırma və test strategiyası qururam."
  );
  const [skills, setSkills] = useState(
    "Manual Testing, API Testing, Postman, Cypress, Playwright, SQL, Jira, TestRail, CI/CD"
  );
  const [education, setEducation] = useState("Azərbaycan Texniki Universiteti — İnformasiya Texnologiyaları (2013-2017)");
  const [certs, setCerts] = useState("ISTQB Foundation, Google UX Design, Scrum Fundamentals");
  const [languages, setLanguages] = useState("Azərbaycan dili (Ana), English (C1), Türk dili (C1)");

  const [exp] = useState<Experience[]>([
    {
      company: "Kasora Digital",
      role: "Senior QA Engineer",
      period: "2021 - Hazırda",
      bullets: [
        "Regression test planı quraraq release bug-larını 34% azaltdım.",
        "API automation suite ilə test müddətini 40% qısaltdım.",
      ],
    },
    {
      company: "FinCore Systems",
      role: "QA Engineer",
      period: "2018 - 2021",
      bullets: [
        "Payment flow üçün risk əsaslı test strategiyası hazırladım.",
        "Cross-browser test keyfiyyətini artıraraq support ticket-ləri azaltdım.",
      ],
    },
  ]);

  const previewClass = useMemo(() => {
    if (template === "modern") return "grid grid-cols-[1fr_2fr] gap-4";
    if (template === "creative") return "grid grid-cols-[1.1fr_2fr] gap-4";
    return "space-y-4";
  }, [template]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : null;
      if (result) {
        setProfileImage(result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 print:bg-white print:text-black">
      <div className="mx-auto max-w-7xl px-4 py-8 print:max-w-none print:px-0">
        <div className="mb-6 flex items-center justify-between print:hidden">
          <h1 className="text-3xl font-bold">Real CV Builder</h1>
          <div className="flex gap-2">
            <Link href="/cv-templates" className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900">Şablonlara qayıt</Link>
            <button onClick={() => window.print()} className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium hover:bg-green-700">PDF yüklə</button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 print:grid-cols-1">
          <section className="space-y-4 print:hidden">
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <label className="mb-2 block text-sm text-slate-300">Şablon</label>
              <div className="grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
                {[
                  ["professional", "Professional"],
                  ["modern", "Modern"],
                  ["executive", "Executive"],
                  ["creative", "Creative"],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => setTemplate(id)}
                    className={`rounded-lg border px-3 py-2 ${template === id ? "border-purple-500 bg-purple-600/20" : "border-slate-700 hover:bg-slate-800"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-full border border-slate-700 bg-slate-950 text-xs text-slate-300">
                  {profileImage ? (
                    <Image src={profileImage} alt="CV profile" width={56} height={56} className="h-full w-full object-cover" />
                  ) : (
                    "Foto"
                  )}
                </div>
                <label className="cursor-pointer rounded-lg border border-slate-700 px-3 py-2 text-xs text-slate-200 hover:bg-slate-800">
                  Şəkil yüklə
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                </label>
              </div>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Ad Soyad" />
              <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Vəzifə" />
              <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Email" />
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Telefon" />
              <input value={location} onChange={(e) => setLocation(e.target.value)} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Lokasiya" />
              <textarea value={summary} onChange={(e) => setSummary(e.target.value)} rows={4} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Summary" />
              <textarea value={skills} onChange={(e) => setSkills(e.target.value)} rows={3} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Skills" />
              <textarea value={education} onChange={(e) => setEducation(e.target.value)} rows={2} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Education" />
              <textarea value={certs} onChange={(e) => setCerts(e.target.value)} rows={2} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Certificates" />
              <textarea value={languages} onChange={(e) => setLanguages(e.target.value)} rows={2} className="w-full rounded border border-slate-700 bg-slate-950 px-3 py-2 text-sm" placeholder="Languages" />
            </div>
          </section>

          <section
            className={`rounded-xl border p-6 text-slate-900 print:border-0 print:p-0 ${
              template === "creative"
                ? "border-fuchsia-300 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50"
                : "border-slate-300 bg-white"
            }`}
          >
            <div className={previewClass}>
              <div className={template === "modern" ? "border-r border-slate-200 pr-4" : ""}>
                <div className="mb-3 flex items-center gap-3">
                  {profileImage ? (
                    <Image src={profileImage} alt="Profile" width={56} height={56} className="h-14 w-14 rounded-full object-cover ring-2 ring-purple-200" />
                  ) : null}
                  <div>
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className="text-sm text-slate-600">{title}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm">📧 {email}</p>
                <p className="text-sm">📱 {phone}</p>
                <p className="text-sm">📍 {location}</p>

                {template === "modern" || template === "creative" ? (
                  <>
                    <h3 className="mt-4 border-b border-slate-200 pb-1 text-sm font-bold uppercase">Skills</h3>
                    <p className="mt-2 text-sm text-slate-700">{skills}</p>
                    <h3 className="mt-4 border-b border-slate-200 pb-1 text-sm font-bold uppercase">Certificates</h3>
                    <p className="mt-2 text-sm text-slate-700">{certs}</p>
                    <h3 className="mt-4 border-b border-slate-200 pb-1 text-sm font-bold uppercase">Languages</h3>
                    <p className="mt-2 text-sm text-slate-700">{languages}</p>
                  </>
                ) : null}
              </div>

              <div>
                <h3 className="mt-4 border-b border-slate-200 pb-1 text-sm font-bold uppercase">Professional Summary</h3>
                <p className="mt-2 text-sm text-slate-700">{summary}</p>

                <h3 className="mt-4 border-b border-slate-200 pb-1 text-sm font-bold uppercase">Experience</h3>
                <div className="mt-2 space-y-3">
                  {exp.map((e, idx) => (
                    <div key={idx}>
                      <p className="font-semibold">{e.role} — {e.company}</p>
                      <p className="text-xs text-slate-500">{e.period}</p>
                      <ul className="mt-1 list-disc pl-5 text-sm text-slate-700">
                        {e.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <h3 className="mt-4 border-b border-slate-200 pb-1 text-sm font-bold uppercase">Education</h3>
                <p className="mt-2 text-sm text-slate-700">{education}</p>

                {template !== "modern" ? (
                  <>
                    <h3 className="mt-4 border-b border-slate-200 pb-1 text-sm font-bold uppercase">Skills</h3>
                    <p className="mt-2 text-sm text-slate-700">{skills}</p>
                    <h3 className="mt-4 border-b border-slate-200 pb-1 text-sm font-bold uppercase">Certificates</h3>
                    <p className="mt-2 text-sm text-slate-700">{certs}</p>
                    <h3 className="mt-4 border-b border-slate-200 pb-1 text-sm font-bold uppercase">Languages</h3>
                    <p className="mt-2 text-sm text-slate-700">{languages}</p>
                  </>
                ) : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
