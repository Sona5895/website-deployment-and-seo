import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600 mb-4">
            <span className="text-3xl">🔍</span>
          </div>
          <h1 className="text-3xl font-bold text-white">DevTestHubKasora</h1>
          <p className="mt-2 text-slate-400">Proqramçı & Tester Platforması</p>
        </div>

        {/* Login Form */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Giriş Edin</h2>
          <LoginForm />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p>© 2024 TestHub. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </main>
  );
}
