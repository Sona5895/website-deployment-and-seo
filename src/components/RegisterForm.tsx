"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

const isGoogleAuthEnabled = process.env.NEXT_PUBLIC_GOOGLE_AUTH_ENABLED === "true";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"tester" | "developer">("tester");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Şifrələr uyğun deyil");
      return;
    }

    if (password.length < 6) {
      setError("Şifrə ən azı 6 simvol olmalıdır");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Xəta baş verdi");
        return;
      }

      // Uğurlu qeydiyyatdan sonra girişə yönləndir
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      window.location.href = "/dashboard";
    } catch (error) {
      setError("Xəta baş verdi. Yenidən cəhd edin.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="space-y-6">
      {/* Google Register */}
      {isGoogleAuthEnabled ? (
        <button
          onClick={handleGoogleRegister}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors font-medium"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google ilə Qeydiyyat
        </button>
      ) : (
        <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-sm text-center">
          Google qeydiyyatı hazırda deaktivdir. Admin paneldən açın.
        </div>
      )}

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-slate-900 text-slate-400">və ya email ilə</span>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Register Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Ad Soyad
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ad Soyad"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@nümunə.com"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Rol
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="relative">
              <input
                type="radio"
                checked={role === "tester"}
                onChange={() => setRole("tester")}
                className="peer sr-only"
              />
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 peer-checked:border-purple-500 peer-checked:bg-purple-500/20 cursor-pointer transition-all">
                <div className="text-2xl mb-2">🧪</div>
                <div className="font-medium text-white text-sm">Tester</div>
              </div>
            </label>
            <label className="relative">
              <input
                type="radio"
                checked={role === "developer"}
                onChange={() => setRole("developer")}
                className="peer sr-only"
              />
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 peer-checked:border-purple-500 peer-checked:bg-purple-500/20 cursor-pointer transition-all">
                <div className="text-2xl mb-2">💻</div>
                <div className="font-medium text-white text-sm">Developer</div>
              </div>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Şifrə
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Şifrə Təsdiqi
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            required
          />
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" required className="mt-1 rounded bg-white/5 border-white/10" />
          <span className="text-sm text-slate-400">
            <a href="#" className="text-purple-400 hover:text-purple-300">İstifadə Şərtləri</a> və{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300">Məxfilik Siyasətini</a> qəbul edirəm
          </span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-3 text-base font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Yüklənir..." : "Qeydiyyatdan Keç"}
        </button>
      </form>

      {/* Login Link */}
      <p className="text-center text-slate-400">
        Artıq hesabınız var?{' '}
        <a href="/auth/login" className="text-purple-400 hover:text-purple-300 font-medium">
          Giriş edin
        </a>
      </p>
    </div>
  );
}
