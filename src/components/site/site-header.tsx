"use client";

import Image from "next/image";

import { DesktopNavigation } from "./desktop-navigation";
import { LanguageSwitcher } from "./language-switcher";
import type { NavItem } from "./nav-data";
import { RelicMobileMenu } from "./relic-mobile-menu";

type SiteHeaderProps = {
  items: NavItem[];
  homeHref: string;
  labels: {
    navigation: string;
    menuOpen: string;
    menuClose: string;
  };
  languageLabels: {
    ariaLabel: string;
    english: string;
    portuguese: string;
  };
};

export function SiteHeader({
  items,
  homeHref,
  labels,
  languageLabels
}: SiteHeaderProps) {
  return (
    <header className="site-header-stone">
      <div className="site-header-dust" aria-hidden="true" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          className="group relative z-10 block w-28 shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 sm:w-36"
          href={homeHref}
          aria-label="Lara Croft Fans"
        >
          <Image
            alt="Lara Croft Fans"
            className="h-auto w-full drop-shadow-[0_10px_24px_rgba(0,0,0,0.72)] transition-transform duration-200 group-hover:-translate-y-0.5"
            height={1024}
            priority
            src="/images/lara-croft-fans-logo.png"
            width={1536}
          />
        </a>

        <DesktopNavigation items={items} ariaLabel={labels.navigation} />

        <div className="relative z-10 hidden items-center gap-3 lg:flex">
          <LanguageSwitcher labels={languageLabels} />
        </div>

        <RelicMobileMenu
          items={items}
          labels={labels}
          languageLabels={languageLabels}
        />
      </div>
    </header>
  );
}
