import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-1 text-slate-400">Platformanın bütün əsas bölmələri</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/cv-builder" className="rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-purple-500/40">
            <p className="text-2xl">📄</p>
            <h2 className="mt-2 font-semibold">Müasir CV Hazırla</h2>
            <p className="mt-1 text-sm text-slate-400">Professional şablonlarla CV builder</p>
          </Link>
          <Link href="/portfolio" className="rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-purple-500/40">
            <p className="text-2xl">🧰</p>
            <h2 className="mt-2 font-semibold">Portfolio</h2>
            <p className="mt-1 text-sm text-slate-400">Layihələrini nümayiş et və izlənməni artır</p>
          </Link>
          <Link href="/messages" className="rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-purple-500/40">
            <p className="text-2xl">💬</p>
            <h2 className="mt-2 font-semibold">Mesajlar və Zəng</h2>
            <p className="mt-1 text-sm text-slate-400">Chat, profil bax, blok/sikayət, audio/video zəng</p>
          </Link>
          <Link href="/jobs" className="rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-purple-500/40">
            <p className="text-2xl">📌</p>
            <h2 className="mt-2 font-semibold">İş Təklifləri</h2>
            <p className="mt-1 text-sm text-slate-400">Yeni və ümumi elanlar</p>
          </Link>
          <Link href="/search" className="rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-purple-500/40">
            <p className="text-2xl">🔎</p>
            <h2 className="mt-2 font-semibold">Axtarış / Kəşf</h2>
            <p className="mt-1 text-sm text-slate-400">Daxili + xarici platforma elanları</p>
          </Link>
          <Link href="/notifications" className="rounded-xl border border-slate-800 bg-slate-900 p-5 hover:border-purple-500/40">
            <p className="text-2xl">🔔</p>
            <h2 className="mt-2 font-semibold">Bildirişlər</h2>
            <p className="mt-1 text-sm text-slate-400">Mesaj, müraciət və aktivlik xəbərdarlıqları</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
