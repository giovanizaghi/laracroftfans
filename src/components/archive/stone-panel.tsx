import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type StonePanelProps = ComponentPropsWithoutRef<"div"> & {
  as?: "div" | "section" | "article";
};

export function StonePanel({
  as: Component = "div",
  className,
  ...props
}: StonePanelProps) {
  return <Component className={cn("archive-stone-panel", className)} {...props} />;
}
