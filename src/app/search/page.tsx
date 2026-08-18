"use client";

import Link from "next/link";
import { useState } from "react";

type SearchJob = {
  id: string;
  title: string;
  company: string;
  source: string;
  location: string;
  budget: string;
  url?: string;
};

export default function SearchPage() {
  const [q, setQ] = useState("qa");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchJob[]>([]);
  const [error, setError] = useState("");

  const runSearch = async (query: string) => {
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      if (!res.ok) {
        setError("Axtarış zamanı xəta baş verdi.");
        setResults([]);
        return;
      }
      const data = (await res.json()) as { success: boolean; data: SearchJob[] };
      setResults(data.data || []);
    } catch {
      setError("Şəbəkə xətası. Yenidən cəhd edin.");
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Axtarış və Kəşf</h1>
          <Link href="/" className="text-sm text-purple-300 hover:text-purple-200">← Ana səhifə</Link>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            runSearch(q.trim());
          }}
          className="mb-6 rounded-xl border border-slate-800 bg-slate-900 p-4"
        >
          <label className="mb-2 block text-sm text-slate-300">Real iş axtarışı (daxili + xarici platformalar)</label>
          <div className="flex gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="məs: qa, tester, developer, react, remote..."
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-sm outline-none focus:border-purple-500"
            />
            <button
              type="button"
              onClick={() => void runSearch(q.trim() || "qa")}
              className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-700"
              disabled={loading}
            >
              {loading ? "Axtarılır..." : "Axtar"}
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-400">
            Nəticələr: DevTestHubKasora + Remotive + Arbeitnow
          </p>
        </form>

        {error ? <div className="mb-4 rounded-lg border border-red-700/40 bg-red-900/20 p-3 text-sm text-red-300">{error}</div> : null}

        <div className="mb-4 text-sm text-slate-400">Nəticə: {results.length}</div>
        <div className="space-y-3">
          {results.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="mt-1 text-sm text-slate-400">{item.company} • {item.location}</p>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">{item.source}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
                <p>Büdcə: {item.budget}</p>
                {item.url ? (
                  <a href={item.url} target="_blank" rel="noreferrer" className="text-purple-300 hover:text-purple-200">
                    Elanı aç →
                  </a>
                ) : null}
              </div>
            </article>
          ))}

          {!loading && results.length === 0 ? (
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-sm text-slate-400">
              Nəticə tapılmadı. Başqa açar sözlə yenidən axtarın.
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
