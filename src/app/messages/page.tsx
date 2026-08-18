"use client";

import { useState } from "react";

type Msg = { id: number; fromMe: boolean; text: string; time: string };

export default function MessagesPage() {
  const users = [
    { id: 1, name: "Aysel Məmmədova", avatar: "A", last: "Elan barədə danışaq", online: true, unread: 2 },
    { id: 2, name: "Rauf Həsənli", avatar: "R", last: "CV-ni göndərdim", online: false, unread: 0 },
    { id: 3, name: "Nigar Əliyeva", avatar: "N", last: "Sabah call edə bilərik?", online: true, unread: 1 },
  ];

  const [messages, setMessages] = useState<Msg[]>([
    { id: 1, fromMe: false, text: "Salam, elanınız barədə danışmaq istəyirəm.", time: "10:30" },
    { id: 2, fromMe: true, text: "Salam, buyurun. Nə barədə sualınız var?", time: "10:31" },
  ]);
  const [text, setText] = useState("");
  const [recording, setRecording] = useState(false);
  const [voiceNotes, setVoiceNotes] = useState<string[]>([]);

  const send = () => {
    const v = text.trim();
    if (!v) return;
    setMessages((prev) => [...prev, { id: prev.length + 1, fromMe: true, text: v, time: "indi" }]);
    setText("");
  };

  const toggleRecord = () => {
    if (!recording) {
      setRecording(true);
      return;
    }
    setRecording(false);
    setVoiceNotes((prev) => [`Səs qeydi ${prev.length + 1} (${new Date().toLocaleTimeString("az-AZ")})`, ...prev]);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold">Mesajlar</h1>

        <div className="grid h-[75vh] gap-4 lg:grid-cols-[320px_1fr]">
          <aside className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <div className="border-b border-slate-800 p-3">
              <input placeholder="Axtarış..." className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none" />
            </div>
            <div className="divide-y divide-slate-800">
              {users.map((u) => (
                <div key={u.id} className="cursor-pointer p-3 hover:bg-slate-800/60">
                  <div className="flex items-start gap-3">
                    <div className="relative grid h-10 w-10 place-items-center rounded-full bg-purple-700 font-bold">
                      {u.avatar}
                      {u.online ? <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-400" /> : null}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="truncate font-medium">{u.name}</p>
                        {u.unread > 0 ? <span className="rounded-full bg-purple-600 px-2 text-xs">{u.unread}</span> : null}
                      </div>
                      <p className="truncate text-xs text-slate-400">{u.last}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <section className="flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
            <header className="flex items-center justify-between border-b border-slate-800 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-purple-700 font-bold">A</div>
                <div>
                  <p className="font-medium">Aysel Məmmədova</p>
                  <p className="text-xs text-slate-400">online</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <button className="rounded-lg border border-slate-700 px-3 py-2 hover:bg-slate-800">📞 Zəng et</button>
                <button className="rounded-lg border border-slate-700 px-3 py-2 hover:bg-slate-800">📹 Video zəng</button>
                <details className="relative">
                  <summary className="cursor-pointer list-none rounded-lg border border-slate-700 px-3 py-2 hover:bg-slate-800">⋯</summary>
                  <div className="absolute right-0 mt-2 w-44 rounded-lg border border-slate-700 bg-slate-950 p-1 text-sm shadow-xl">
                    <button className="block w-full rounded px-3 py-2 text-left hover:bg-slate-800">👤 Profilə bax</button>
                    <button className="block w-full rounded px-3 py-2 text-left hover:bg-slate-800">🚫 Blok et</button>
                    <button className="block w-full rounded px-3 py-2 text-left text-red-300 hover:bg-slate-800">⚠️ Şikayət et</button>
                  </div>
                </details>
              </div>
            </header>

            <div className="flex-1 space-y-4 overflow-auto p-4 text-sm">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`max-w-[70%] rounded-lg p-3 ${
                    m.fromMe ? "ml-auto rounded-tr-none bg-purple-700" : "rounded-tl-none bg-slate-800 text-slate-200"
                  }`}
                >
                  <p>{m.text}</p>
                  <p className="mt-1 text-[11px] text-slate-300/80">{m.time}</p>
                </div>
              ))}

              {voiceNotes.length > 0 ? (
                <div className="rounded-lg border border-slate-700 bg-slate-950 p-3">
                  <p className="mb-2 text-xs text-slate-400">Səs qeydləri</p>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {voiceNotes.map((v) => (
                      <li key={v}>🎤 {v}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <footer className="border-t border-slate-800 p-3">
              <div className="mb-2 flex items-center gap-2">
                <button
                  onClick={toggleRecord}
                  className={`rounded-lg px-3 py-2 text-sm ${recording ? "bg-red-600 hover:bg-red-700" : "border border-slate-700 hover:bg-slate-800"}`}
                >
                  {recording ? "⏹️ Səsi dayandır" : "🎙️ Səs göndər"}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Mesaj yazın..."
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none"
                />
                <button onClick={send} className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-700">Göndər</button>
              </div>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
