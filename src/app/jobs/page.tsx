import Link from "next/link";
import { dailyJobs } from "@/lib/mock-data";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold">İş Təklifləri</h1>
            <p className="text-sm text-slate-400">Yeni paylaşılan və ümumi elanlar • daxili + xarici platformalar</p>
          </div>
          <div className="flex gap-2">
            <Link href="/search" className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:bg-slate-900">Kəşf / Axtarış</Link>
            <Link href="/jobs/new" className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium hover:bg-purple-700">+ Elan yarat</Link>
          </div>
        </div>

        <div className="mb-6 grid gap-3 md:grid-cols-4">
          <input placeholder="Axtarış (title, company)" className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none md:col-span-2" />
          <select className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm">
            <option>Bütün tiplər</option>
            <option>Tester</option>
            <option>Developer</option>
          </select>
          <select className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm">
            <option>Bütün mənbələr</option>
            <option>TestHub</option>
            <option>Upwork</option>
            <option>LinkedIn</option>
            <option>Freelancer</option>
          </select>
        </div>

        <div className="space-y-4">
          {dailyJobs.map((job) => (
            <article key={job.id} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-semibold text-lg">{job.title}</h2>
                  <p className="text-sm text-slate-400">{job.company} • {job.location} • {job.type}</p>
                </div>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">{job.source}</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {job.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700 px-2 py-1 text-slate-300">{tag}</span>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm text-slate-300">{job.budget} • {job.postedAt}</span>
                <div className="flex gap-2">
                  <button className="rounded-lg border border-slate-700 px-3 py-2 text-sm hover:bg-slate-800">💬 Mesaj</button>
                  <button className="rounded-lg bg-purple-600 px-3 py-2 text-sm font-medium hover:bg-purple-700">Müraciət et</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
