import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type AncientButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "gold" | "stone";
};

export function AncientButton({
  className,
  children,
  href,
  variant = "gold",
  ...props
}: AncientButtonProps) {
  return (
    <Link
      className={cn("ancient-button", `ancient-button-${variant}`, className)}
      href={href}
      prefetch={false}
      {...props}
    >
      {children}
    </Link>
  );
}
