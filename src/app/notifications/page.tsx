import { notificationsMock } from "@/lib/mock-data";

export default function NotificationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Bildirişlər</h1>
          <button className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900">Hamısını oxundu et</button>
        </div>

        <div className="space-y-3">
          {notificationsMock.map((n) => (
            <article
              key={n.id}
              className={`rounded-xl border p-4 ${n.unread ? "border-purple-500/40 bg-purple-500/10" : "border-slate-800 bg-slate-900"}`}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">{n.title}</h2>
                <span className="text-xs text-slate-400">{n.time}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{n.text}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
