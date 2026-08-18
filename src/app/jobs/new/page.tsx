import Link from "next/link";

export default function NewJobPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/95 sticky top-0 z-50 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl">🔍</div>
              <div className="text-lg font-bold text-white">TestHub</div>
            </Link>
            <Link href="/jobs" className="text-sm text-slate-300 hover:text-white transition-colors">← Geri</Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Yeni Elan Yarat</h1>

        <form className="space-y-6">
          {/* Elan Tipi */}
          <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Elan Tipi</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 p-4 rounded-lg bg-slate-700 border border-slate-600 cursor-pointer hover:border-purple-500 transition-colors">
                <input type="radio" name="type" defaultChecked className="w-4 h-4" />
                <div>
                  <div className="font-medium text-white">Tester Axtarıram</div>
                  <div className="text-sm text-slate-400">Proqramım üçün tester tapmaq istəyirəm</div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-4 rounded-lg bg-slate-700 border border-slate-600 cursor-pointer hover:border-purple-500 transition-colors">
                <input type="radio" name="type" className="w-4 h-4" />
                <div>
                  <div className="font-medium text-white">Developer Axtarıram</div>
                  <div className="text-sm text-slate-400">Proqramçı tapmaq istəyirəm</div>
                </div>
              </label>
            </div>
          </div>

          {/* Başlıq */}
          <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
            <label className="block text-lg font-semibold text-white mb-2">Elan Başlığı</label>
            <input
              type="text"
              placeholder="Məs: Web Sayt Test Edilməsi"
              className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Təsvir */}
          <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
            <label className="block text-lg font-semibold text-white mb-2">Təsvir</label>
            <textarea
              rows={6}
              placeholder="Elanınız haqqında ətraflı məlumat verin..."
              className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 resize-none"
            />
          </div>

          {/* Büdcə */}
          <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
            <label className="block text-lg font-semibold text-white mb-2">Büdcə</label>
            <input
              type="text"
              placeholder="500 - 1000"
              className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Yerləşmə */}
          <div className="p-6 rounded-xl bg-slate-800 border border-slate-700">
            <label className="block text-lg font-semibold text-white mb-2">Yerləşmə</label>
            <input
              type="text"
              placeholder="Bakı, Remote, və s."
              className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              className="px-6 py-3 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Təmənnə
            </button>
            <button
              type="submit"
              className="px-8 py-3 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Elanı Yayımla
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
