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
        <div className="mt-10 grid gap-8">
          {Array.from({ length: 3 }).map((_, categoryIndex) => (
            <StonePanel as="section" key={categoryIndex}>
              <div className="grid gap-6 lg:grid-cols-[0.45fr_1fr]">
                <div>
                  <Skeleton className="h-3 w-6" />
                  <Skeleton className="mt-2 h-6 w-2/3" />
                  <Skeleton className="mt-3 h-4 w-full" />
                  <Skeleton className="mt-2 h-4 w-5/6" />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, itemIndex) => (
                    <div key={itemIndex}>
                      <Skeleton className="aspect-[4/3] w-full rounded-xl" />
                      <Skeleton className="mt-3 h-3 w-1/2" />
                      <Skeleton className="mt-1 h-4 w-3/4" />
                    </div>
                  ))}
                </div>
              </div>
            </StonePanel>
          ))}
        </div>
      </div>
    </main>
  );
}
