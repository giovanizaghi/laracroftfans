"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  labels: {
    ariaLabel: string;
    english: string;
    portuguese: string;
  };
  className?: string;
};

const locales = [
  { code: "en", labelKey: "english" },
  { code: "pt", labelKey: "portuguese" }
] as const;

export function LanguageSwitcher({ labels, className }: LanguageSwitcherProps) {
  const activeLocale = useLocale();
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    function updateHash() {
      setHash(window.location.hash);
    }

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const pathWithoutLocale =
    pathname.replace(/^\/(en|pt)(?=\/|$)/, "") || "/";

  return (
    <nav
      aria-label={labels.ariaLabel}
      className={cn("language-switcher", className)}
    >
      {locales.map(({ code, labelKey }) => {
        const isActive = activeLocale === code;
        const href = `/${code}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}${hash}`;

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={cn("language-switcher-link", isActive && "is-active")}
            href={href}
            key={code}
            locale={code}
          >
            {labels[labelKey]}
          </Link>
        );
      })}
    </nav>
  );
}
