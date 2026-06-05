import { Instagram, Youtube } from "lucide-react";

import type { NavItem } from "@/components/site/nav-data";

import { LanguageSwitcher } from "./language-switcher";

type SiteFooterProps = {
  navItems: NavItem[];
  instagramUrl: string;
  youtubeUrl: string;
  instagramLabel: string;
  youtubeLabel: string;
  languageLabels: {
    ariaLabel: string;
    english: string;
    portuguese: string;
  };
  navigationLabel: string;
  disclaimer: string;
  copyright: string;
};

export function SiteFooter({
  navItems,
  instagramUrl,
  youtubeUrl,
  instagramLabel,
  youtubeLabel,
  languageLabels,
  navigationLabel,
  disclaimer,
  copyright
}: SiteFooterProps) {
  return (
    <footer className="excavation-footer px-5 py-12 text-stone-200 sm:px-8 lg:px-10">
      <div className="stone-divider mx-auto mb-10 max-w-7xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-xl font-black uppercase text-amber-50">
            Lara Croft Fans
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">
            {disclaimer}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:justify-items-end">
          <nav aria-label={navigationLabel}>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a className="footer-link w-full" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-3">
            <a
              className="footer-link"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={instagramLabel}
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              {instagramLabel}
            </a>
            <a
              className="footer-link"
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={youtubeLabel}
            >
              <Youtube className="h-4 w-4" aria-hidden="true" />
              {youtubeLabel}
            </a>
            <LanguageSwitcher labels={languageLabels} />
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-xs text-stone-500">
        {copyright}
      </p>
    </footer>
  );
}
