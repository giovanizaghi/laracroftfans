import { cn } from "@/lib/utils";

type DustParticlesProps = {
  className?: string;
};

export function DustParticles({ className }: DustParticlesProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="dust-field opacity-20" />
    </div>
  );
}
