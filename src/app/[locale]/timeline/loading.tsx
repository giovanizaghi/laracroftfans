import { Skeleton } from "@/components/archive/skeleton";
import { StonePanel } from "@/components/archive/stone-panel";

export default function Loading() {
  return (
    <main aria-busy="true" className="min-h-screen bg-stone-950 text-stone-100">
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="mt-3 h-9 w-2/3" />
          <Skeleton className="mt-4 h-5 w-full max-w-xl" />
        </div>
        <StonePanel className="mb-8 mt-10">
          <Skeleton className="h-4 w-full max-w-lg" />
        </StonePanel>
        <div className="space-y-6">
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="flex gap-4" key={index}>
              <Skeleton className="h-4 w-4 shrink-0 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
