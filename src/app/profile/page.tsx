"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { connectedAccounts, followingPosts } from "@/lib/mock-data";

type SocialAccount = {
  name: string;
  icon: string;
  connected: boolean;
  username: string;
};

export default function ProfilePage() {
  const [avatarFile, setAvatarFile] = useState<string | null>(null);
  const [bio, setBio] = useState(
    "Mən QA və məhsul testləri üzrə ixtisaslaşmışam. DevTestHubKasora üzərindən layihələr götürür və komanda üzvləri tapıram."
  );
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState(followingPosts);
  const [accounts, setAccounts] = useState<SocialAccount[]>(connectedAccounts);
  const [showAddSocial, setShowAddSocial] = useState(false);
  const [socialPlatform, setSocialPlatform] = useState("Instagram");
  const [socialUsername, setSocialUsername] = useState("");

  const avatarLabel = useMemo(() => (avatarFile ? "" : "D"), [avatarFile]);

  const [hasHydratedProfile, setHasHydratedProfile] = useState(false);

  useEffect(() => {
    const hydrate = () => {
      const savedAvatar = window.localStorage.getItem("profile_avatar_base64");
      const savedBio = window.localStorage.getItem("profile_bio");
      const savedPosts = window.localStorage.getItem("profile_posts");
      const savedAccounts = window.localStorage.getItem("profile_accounts");

      if (savedAvatar) {
        setAvatarFile(savedAvatar);
      }
      if (savedBio) {
        setBio(savedBio);
      }
      if (savedPosts) {
        try {
          setPosts(JSON.parse(savedPosts));
        } catch {
          // noop
        }
      }
      if (savedAccounts) {
        try {
          setAccounts(JSON.parse(savedAccounts));
        } catch {
          // noop
        }
      }
      setHasHydratedProfile(true);
    };

    const timer = window.setTimeout(hydrate, 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (!hasHydratedProfile) {
    return null;
  }

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : null;
      if (!result) return;
      setAvatarFile(result);
      localStorage.setItem("profile_avatar_base64", result);
    };
    reader.readAsDataURL(file);
  };

  const removeAvatar = () => {
    setAvatarFile(null);
    localStorage.removeItem("profile_avatar_base64");
  };

  const saveBio = () => {
    localStorage.setItem("profile_bio", bio);
  };

  const submitPost = () => {
    const content = postText.trim();
    if (!content) return;

    const newPost = {
      id: Date.now(),
      author: "Dev Kasora",
      role: "QA + Fullstack",
      avatar: "D",
      content,
      createdAt: "indi",
      likes: 0,
      comments: 0,
    };

    const nextPosts = [newPost, ...posts];
    setPosts(nextPosts);
    localStorage.setItem("profile_posts", JSON.stringify(nextPosts));
    setPostText("");
  };

  const addSocialAccount = () => {
    const username = socialUsername.trim();
    if (!username) return;

    const iconMap: Record<string, string> = {
      Instagram: "📸",
      YouTube: "▶️",
      Telegram: "✈️",
      Facebook: "📘",
      LinkedIn: "💼",
      X: "𝕏",
    };

    const next = [...accounts];
    const idx = next.findIndex((a) => a.name === socialPlatform);
    if (idx >= 0) {
      next[idx] = {
        ...next[idx],
        connected: true,
        username,
        icon: iconMap[socialPlatform] || next[idx].icon,
      };
    } else {
      next.push({
        name: socialPlatform,
        icon: iconMap[socialPlatform] || "🔗",
        connected: true,
        username,
      });
    }

    setAccounts(next);
    localStorage.setItem("profile_accounts", JSON.stringify(next));
    setSocialUsername("");
    setShowAddSocial(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {showAddSocial ? (
          <div className="mb-4 rounded-xl border border-slate-700 bg-slate-900 p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-semibold">Sosial hesab əlavə et</p>
              <button onClick={() => setShowAddSocial(false)} className="rounded px-2 py-1 hover:bg-slate-800">✕</button>
            </div>
            <div className="grid gap-2 md:grid-cols-[180px_1fr_auto]">
              <select
                value={socialPlatform}
                onChange={(e) => setSocialPlatform(e.target.value)}
                className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
              >
                {[
                  "Instagram",
                  "YouTube",
                  "Telegram",
                  "Facebook",
                  "LinkedIn",
                  "X",
                ].map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              <input
                value={socialUsername}
                onChange={(e) => setSocialUsername(e.target.value)}
                placeholder="username və ya link"
                className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm"
              />
              <button onClick={addSocialAccount} className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-700">
                Əlavə et
              </button>
            </div>
          </div>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-4">
            <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full bg-purple-700">
                {avatarFile ? (
                  <Image src={avatarFile} alt="avatar" width={96} height={96} className="h-full w-full object-cover" />
                ) : (
                  <div className="grid h-full w-full place-items-center text-3xl font-bold">{avatarLabel}</div>
                )}
              </div>
              <h1 className="mt-4 text-center text-xl font-bold">Dev Kasora</h1>
              <p className="text-center text-sm text-slate-400">QA + Fullstack</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <label className="cursor-pointer rounded-lg border border-slate-700 px-3 py-2 text-xs hover:bg-slate-800">
                  Şəkil yüklə
                  <input type="file" accept="image/*" className="hidden" onChange={onUpload} />
                </label>
                <button
                  onClick={removeAvatar}
                  className="rounded-lg border border-red-700/50 px-3 py-2 text-xs text-red-300 hover:bg-red-900/20"
                >
                  Şəkli sil
                </button>
              </div>
            </section>

            <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="font-semibold">Sosial hesablar</h2>
                <button
                  onClick={() => setShowAddSocial(true)}
                  className="rounded-lg border border-slate-700 px-3 py-1 text-xs hover:bg-slate-800"
                >
                  + Hesab əlavə et
                </button>
              </div>
              <div className="space-y-2 text-sm">
                {accounts.map((a) => (
                  <a
                    key={a.name}
                    href={a.connected ? `https://${a.name.toLowerCase().replace(/\s+/g, "")}.com/${a.username.replace(/^@/, "")}` : "#"}
                    target={a.connected ? "_blank" : undefined}
                    rel={a.connected ? "noreferrer" : undefined}
                    className="flex items-center justify-between rounded-lg bg-slate-950 px-3 py-2 hover:bg-slate-800"
                    aria-disabled={!a.connected}
                    onClick={(event) => {
                      if (!a.connected) {
                        event.preventDefault();
                      }
                    }}
                  >
                    <span>{a.icon} {a.name}</span>
                    <span className={a.connected ? "text-green-300" : "text-slate-500"}>
                      {a.connected ? a.username : "Bağlı deyil"}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          </aside>

          <section className="space-y-4">
            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Bio / Haqqımda</h2>
                <button onClick={saveBio} className="rounded-lg bg-slate-800 px-3 py-1 text-xs hover:bg-slate-700">Yadda saxla</button>
              </div>
              <textarea
                rows={4}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-sm outline-none focus:border-purple-500"
              />
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="mb-2 text-lg font-semibold">Əlaqə</h2>
              <div className="grid gap-3 md:grid-cols-2">
                <input defaultValue="dev@kasora.com" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none" />
                <input defaultValue="+994 50 555 44 33" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none" />
                <input defaultValue="Bakı, Azərbaycan" className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none md:col-span-2" />
              </div>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Yeni post paylaş</h2>
                <button className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:bg-slate-800">📷 Kamera</button>
              </div>
              <textarea
                rows={3}
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="Yeni elan və ya yenilik paylaşın..."
                className="w-full rounded-lg border border-slate-700 bg-slate-950 p-3 text-sm outline-none focus:border-purple-500"
              />
              <div className="mt-3 flex justify-end">
                <button onClick={submitPost} className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-700">Paylaş</button>
              </div>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="mb-4 text-lg font-semibold">Paylaşımlar</h2>
              <div className="space-y-3">
                {posts.map((post) => (
                  <div key={post.id} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                    <p className="text-sm font-medium">{post.author} <span className="text-xs text-slate-400">• {post.createdAt}</span></p>
                    <p className="mt-1 text-sm text-slate-300">{post.content}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
