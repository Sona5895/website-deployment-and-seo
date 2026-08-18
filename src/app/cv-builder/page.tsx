import { Suspense } from "react";
import CVBuilderClient from "@/components/CVBuilderClient";

export default function CVBuilderPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-950 text-slate-100 grid place-items-center">Yüklənir...</main>}>
      <CVBuilderClient />
    </Suspense>
  );
}
