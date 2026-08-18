import Link from "next/link";

export default function AuthErrorPage() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 rounded-xl bg-slate-800 border border-slate-700 text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h1 className="text-2xl font-bold text-white mb-2">Giriş Xətası</h1>
        <p className="text-slate-400 mb-6">
          Giriş zamanı problem yarandı. Zəhmət olmasa yenidən cəhd edin.
        </p>
        <div className="flex flex-col gap-3">
          <Link
            href="/auth/login"
            className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Giriş Səhifəsinə Qayıt
          </Link>
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-slate-300 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
          >
            Ana Səhifə
          </Link>
        </div>
      </div>
    </main>
  );
}
