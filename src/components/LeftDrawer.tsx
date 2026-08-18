"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "Ana səhifə", icon: "🏠" },
  { href: "/search", label: "Axtarış", icon: "🔎" },
  { href: "/jobs", label: "İş elanları", icon: "📌" },
  { href: "/messages", label: "Mesajlar", icon: "💬" },
  { href: "/notifications", label: "Bildirişlər", icon: "🔔" },
  { href: "/cv-builder", label: "CV hazırla", icon: "📄" },
  { href: "/cv-templates", label: "CV şablonları", icon: "🧾" },
  { href: "/portfolio", label: "Portfolio", icon: "🧰" },
  { href: "/profile", label: "Profil", icon: "👤" },
];

const socialItems = [
  { label: "Instagram", href: "https://instagram.com", icon: "📸" },
  { label: "YouTube", href: "https://youtube.com", icon: "▶️" },
  { label: "Telegram", href: "https://t.me", icon: "✈️" },
  { label: "Facebook", href: "https://facebook.com", icon: "📘" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
];

export default function LeftDrawer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        aria-label="Menyu"
        onClick={() => setOpen(true)}
        className="fixed left-3 top-3 z-[70] rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-2 text-slate-100 shadow-lg backdrop-blur hover:bg-slate-800"
      >
        ☰
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] bg-black/50" onClick={() => setOpen(false)}>
          <aside
            className="h-full w-[300px] overflow-auto border-r border-slate-800 bg-slate-950 p-4 text-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="font-bold">DevTestHubKasora</p>
              <button onClick={() => setOpen(false)} className="rounded px-2 py-1 hover:bg-slate-800">
                ✕
              </button>
            </div>

            <nav className="space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                    pathname === item.href ? "bg-purple-600/30 text-purple-200" : "hover:bg-slate-800"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-3">
              <p className="mb-2 text-xs uppercase tracking-wide text-slate-400">Sosial bağlantılar</p>
              <div className="space-y-1 text-sm">
                {socialItems.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-md px-2 py-1 text-slate-200 hover:bg-slate-800"
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
