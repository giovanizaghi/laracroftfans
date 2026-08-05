import { Skeleton } from "@/components/archive/skeleton";
import { StonePanel } from "@/components/archive/stone-panel";

export default function Loading() {
  return (
    <main aria-busy="true" className="min-h-screen bg-stone-950 text-stone-100">
      <section className="game-detail-hero">
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1fr] lg:px-10">
          <Skeleton className="h-64 w-full rounded-3xl lg:h-full" />
          <div className="self-center">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-4 h-10 w-3/4" />
            <Skeleton className="mt-5 h-5 w-full max-w-2xl" />
            <Skeleton className="mt-2 h-5 w-2/3 max-w-xl" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <StonePanel>
                <Skeleton className="h-3 w-20" />
                <Skeleton className="mt-3 h-5 w-24" />
              </StonePanel>
              <StonePanel>
                <Skeleton className="h-3 w-20" />
                <Skeleton className="mt-3 h-5 w-32" />
              </StonePanel>
            </div>
            <Skeleton className="mt-8 h-11 w-32 rounded-full" />
          </div>
        </div>
      </section>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <Skeleton className="h-8 w-48" />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Skeleton className="h-56 w-full rounded-2xl" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
      </div>
    </main>
  );
}
