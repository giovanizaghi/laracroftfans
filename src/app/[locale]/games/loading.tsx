import { Skeleton } from "@/components/archive/skeleton";

export default function Loading() {
  return (
    <main aria-busy="true" className="min-h-screen bg-stone-950 text-stone-100">
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="mt-3 h-9 w-2/3" />
          <Skeleton className="mt-4 h-5 w-full max-w-xl" />
        </div>
        <div className="expedition-board mt-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <div className="mb-4 break-inside-avoid" key={index}>
              <Skeleton className="h-44 w-full rounded-t-2xl rounded-b-none" />
              <div className="rounded-b-2xl bg-stone-900/60 p-5">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="mt-3 h-6 w-3/4" />
                <Skeleton className="mt-3 h-4 w-1/2" />
                <Skeleton className="mt-4 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-5/6" />
                <Skeleton className="mt-5 h-10 w-full rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
