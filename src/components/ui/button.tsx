import type { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-amber-300 text-stone-950 shadow-[0_0_28px_rgba(251,191,36,0.24)] hover:bg-amber-200",
        ghost:
          "border border-amber-200/35 bg-stone-950/30 text-amber-100 hover:border-amber-200/60 hover:bg-amber-200/10"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

export function Button({
  className,
  variant,
  ...props
}: ComponentPropsWithoutRef<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props} />
  );
}
