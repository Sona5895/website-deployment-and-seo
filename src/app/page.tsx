import Link from "next/link";
import HomeFeed from "@/components/HomeFeed";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🧩</span>
            <span className="text-lg font-bold">DevTestHubKasora</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <Link href="/search" className="hover:text-purple-300">Axtarış</Link>
            <Link href="/jobs" className="hover:text-purple-300">İş Təklifləri</Link>
            <Link href="/portfolio" className="hover:text-purple-300">Portfolio</Link>
            <Link href="/notifications" className="hover:text-purple-300">Bildirişlər</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/auth/login" className="text-sm hover:text-purple-300">Giriş</Link>
            <Link href="/auth/register" className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-700">
              Qeydiyyat
            </Link>
          </div>
        </div>
      </nav>

      <HomeFeed />
    </main>
  );
}
