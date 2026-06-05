import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { DustParticles } from "./dust-particles";

type TombSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  variant?: "dark" | "deep" | "map";
};

export function TombSection({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  variant = "dark"
}: TombSectionProps) {
  return (
    <section
      className={cn("tomb-section scroll-mt-28", `tomb-section-${variant}`, className)}
      id={id}
    >
      <DustParticles />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-black uppercase text-amber-200/75">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-black uppercase text-amber-50 sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-stone-300 sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
