import Link from "next/link";
import { portfolioItems } from "@/lib/mock-data";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <Link href="/profile" className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-700">+ Yeni iş əlavə et</Link>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm text-slate-400">Ümumi layihə</p>
            <p className="text-2xl font-bold">{portfolioItems.length}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm text-slate-400">Toplam görüntülənmə</p>
            <p className="text-2xl font-bold">{portfolioItems.reduce((a, b) => a + b.views, 0)}</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm text-slate-400">Reytinq</p>
            <p className="text-2xl font-bold">4.9</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <article key={item.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-full bg-slate-800 px-2 py-1 text-xs">{item.category}</span>
                <span className="text-xs text-slate-400">👁️ {item.views}</span>
              </div>
              <h2 className="font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                {item.stack.map((s) => (
                  <span key={s} className="rounded-full border border-slate-700 px-2 py-1">{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
