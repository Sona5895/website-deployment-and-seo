"use client";

import Link from "next/link";
import { useState } from "react";
import { dailyJobs, discoverPosts, followingPosts } from "@/lib/mock-data";

type FeedPost = {
  id: number;
  author: string;
  role: string;
  avatar: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: number;
};

export default function HomeFeed() {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState<FeedPost[]>(discoverPosts);

  const [hasHydratedPosts, setHasHydratedPosts] = useState(false);

  if (!hasHydratedPosts) {
    const timer = setTimeout(() => {
      if (typeof window === "undefined") {
        return;
      }

      const stored = window.localStorage.getItem("home_discover_posts");
      if (stored) {
        try {
          setPosts(JSON.parse(stored));
        } catch {
          // noop
        }
      }
      setHasHydratedPosts(true);
    }, 0);

    if (typeof window !== "undefined") {
      window.clearTimeout(timer);
    }
  }

  const publishPost = () => {
    const content = newPost.trim();
    if (!content) return;

    const post: FeedPost = {
      id: Date.now(),
      author: "Dev Kasora",
      role: "QA + Fullstack",
      avatar: "D",
      content,
      createdAt: "indi",
      likes: 0,
      comments: 0,
    };

    const next = [post, ...posts];
    setPosts(next);
    localStorage.setItem("home_discover_posts", JSON.stringify(next));
    setNewPost("");
  };

  return (
    <>
      <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-7xl px-4 pt-8">
          <form action="/search" className="mx-auto mb-8 max-w-3xl rounded-xl border border-slate-800 bg-slate-900 p-3">
            <div className="flex gap-2">
              <input
                name="q"
                placeholder="İş, tester, developer, upwork, linkedin..."
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none focus:border-purple-500"
              />
              <button className="rounded-lg bg-purple-600 px-5 py-3 text-sm font-medium hover:bg-purple-700">Axtar</button>
            </div>
          </form>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Proqramçı və testerlər üçün
              <span className="block text-purple-400">tam professional platforma</span>
            </h1>
            <p className="mt-4 max-w-2xl text-slate-300">
              İş təklifləri, müasir CV builder, portfolio, mesajlaşma, zəng, bildirişlər, sosial hesab bağlantıları və xarici
              platforma elanları bir yerdə.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/jobs" className="rounded-lg bg-purple-600 px-5 py-3 text-sm font-semibold hover:bg-purple-700">İş Tap</Link>
              <Link href="/cv-builder" className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold hover:bg-slate-900">CV Hazırla</Link>
              <Link href="/profile" className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold hover:bg-slate-900">Profilim</Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold">Yeni post paylaş</h2>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">Kəşf</span>
            </div>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              rows={3}
              placeholder="Bu gün nə üzərində işləyirsən? Tester və ya developer ehtiyacı paylaş."
              className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-sm text-slate-300 outline-none focus:border-purple-500"
            />
            <div className="mt-3 flex items-center gap-3 text-sm">
              <button className="rounded-lg border border-slate-700 px-3 py-2 hover:bg-slate-800">📷 Kamera</button>
              <button className="rounded-lg border border-slate-700 px-3 py-2 hover:bg-slate-800">🖼️ Media</button>
              <button onClick={publishPost} className="rounded-lg bg-purple-600 px-3 py-2 font-medium hover:bg-purple-700">Paylaş</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-8">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">Bağlı sosial platformalar</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              { label: "Instagram", href: "https://instagram.com", icon: "📸" },
              { label: "YouTube", href: "https://youtube.com", icon: "▶️" },
              { label: "Telegram", href: "https://t.me", icon: "✈️" },
              { label: "Facebook", href: "https://facebook.com", icon: "📘" },
              { label: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-purple-500 hover:text-purple-200"
              >
                {item.icon} {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold">Gündəlik elanlar</h2>
            <Link href="/jobs" className="text-sm text-purple-300 hover:text-purple-200">hamısına bax →</Link>
          </div>
          <div className="space-y-4">
            {dailyJobs.map((job) => (
              <article key={job.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{job.company} • {job.location}</p>
                  </div>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">{job.source}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                  {job.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-700 px-2 py-1">{tag}</span>
                  ))}
                </div>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
                  <span>{job.budget}</span>
                  <span>{job.postedAt}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Kəşf bölməsi</h3>
              <Link href="/search" className="text-xs text-purple-300">xarici elanlar daxil</Link>
            </div>
            <div className="space-y-4">
              {posts.map((post) => (
                <article key={post.id} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-purple-700 font-bold">{post.avatar}</span>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-xs text-slate-400">{post.role} • {post.createdAt}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{post.content}</p>
                  <div className="mt-2 text-xs text-slate-400">❤️ {post.likes} • 💬 {post.comments}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h3 className="mb-4 font-semibold">Takib etdiklərinin paylaşımları</h3>
            <div className="space-y-3">
              {followingPosts.map((post) => (
                <article key={post.id} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                  <p className="text-sm font-medium">{post.author} <span className="text-xs text-slate-400">({post.createdAt})</span></p>
                  <p className="mt-1 text-sm text-slate-300">{post.content}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <h3 className="mb-3 font-semibold">Reels / Qısa videolar</h3>
            <div className="grid grid-cols-3 gap-2">
              {["🎬", "📱", "🧪", "💻", "🚀", "📊"].map((i, idx) => (
                <div key={idx} className="grid h-24 place-items-center rounded-lg border border-slate-800 bg-slate-950 text-2xl">
                  {i}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
