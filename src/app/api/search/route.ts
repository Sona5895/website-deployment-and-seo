import { dailyJobs } from "@/lib/mock-data";

export const dynamic = "force-dynamic";

type UnifiedJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  budget: string;
  source: string;
  url?: string;
};

async function fetchRemotiveJobs(query: string): Promise<UnifiedJob[]> {
  try {
    const url = `https://remotive.com/api/remote-jobs?search=${encodeURIComponent(query)}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return [];
    const data = (await res.json()) as {
      jobs?: Array<{
        id: number;
        title: string;
        company_name: string;
        candidate_required_location?: string;
        salary?: string;
        url?: string;
      }>;
    };

    return (data.jobs || []).slice(0, 20).map((job) => ({
      id: `remotive-${job.id}`,
      title: job.title,
      company: job.company_name || "Unknown Company",
      location: job.candidate_required_location || "Remote",
      budget: job.salary || "N/A",
      source: "Remotive",
      url: job.url,
    }));
  } catch {
    return [];
  }
}

async function fetchArbeitnowJobs(query: string): Promise<UnifiedJob[]> {
  try {
    const res = await fetch("https://www.arbeitnow.com/api/job-board-api", { cache: "no-store" });
    if (!res.ok) return [];

    const data = (await res.json()) as {
      data?: Array<{
        slug: string;
        title: string;
        company_name: string;
        location?: string;
        remote?: boolean;
        url?: string;
      }>;
    };

    const q = query.toLowerCase();
    const filtered = (data.data || []).filter(
      (job) =>
        job.title.toLowerCase().includes(q) ||
        job.company_name.toLowerCase().includes(q) ||
        (job.location || "").toLowerCase().includes(q)
    );

    return filtered.slice(0, 20).map((job) => ({
      id: `arbeit-${job.slug}`,
      title: job.title,
      company: job.company_name,
      location: job.remote ? "Remote" : job.location || "N/A",
      budget: "N/A",
      source: "Arbeitnow",
      url: job.url,
    }));
  } catch {
    return [];
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") || "").trim();

  const internal: UnifiedJob[] = dailyJobs.map((job) => ({
    id: `internal-${job.id}`,
    title: job.title,
    company: job.company,
    location: job.location,
    budget: job.budget,
    source: job.source,
  }));

  if (!q) {
    return Response.json({
      success: true,
      data: internal,
      total: internal.length,
    });
  }

  const internalFiltered = internal.filter(
    (item) =>
      item.title.toLowerCase().includes(q.toLowerCase()) ||
      item.company.toLowerCase().includes(q.toLowerCase()) ||
      item.source.toLowerCase().includes(q.toLowerCase())
  );

  const [remotive, arbeit] = await Promise.all([fetchRemotiveJobs(q), fetchArbeitnowJobs(q)]);

  const merged = [...internalFiltered, ...remotive, ...arbeit];

  return Response.json({
    success: true,
    data: merged,
    total: merged.length,
  });
}
