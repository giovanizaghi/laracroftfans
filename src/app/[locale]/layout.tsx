import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { buildLocalizedNavItems, type NavItemId } from "@/components/site/nav-data";
import { routing } from "@/lib/i18n/routing";
import { getBaseUrl } from "@/lib/seo";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "Lara Croft Fans",
    template: "%s | Lara Croft Fans"
  },
  description: "A fan-made Tomb Raider portal.",
  openGraph: {
    images: [
      {
        url: "/images/lara-croft-fans-logo.png",
        width: 1536,
        height: 1024,
        alt: "Lara Croft Fans"
      }
    ]
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48 32x32" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    shortcut: ["/favicon/favicon.ico"]
  },
  appleWebApp: {
    title: "Lara Croft Fans"
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "site" });
  const navItems = buildLocalizedNavItems(
    locale,
    t.raw("navigation.items") as Array<{ id: NavItemId; label: string }>
  );

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <SiteHeader
            homeHref={`/${locale}`}
            items={navItems}
            labels={{
              navigation: t("navigation.ariaLabel"),
              menuOpen: t("navigation.menuOpen"),
              menuClose: t("navigation.menuClose")
            }}
            languageLabels={{
              ariaLabel: t("language.ariaLabel"),
              english: t("language.english"),
              portuguese: t("language.portuguese")
            }}
          />
          {children}
          <SiteFooter
            navItems={navItems}
            instagramUrl={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#"}
            youtubeUrl={process.env.NEXT_PUBLIC_YOUTUBE_URL || "#"}
            instagramLabel={t("social.instagram")}
            youtubeLabel={t("social.youtube")}
            languageLabels={{
              ariaLabel: t("language.ariaLabel"),
              english: t("language.english"),
              portuguese: t("language.portuguese")
            }}
            navigationLabel={t("footer.navigationLabel")}
            disclaimer={t("footer.disclaimer")}
            copyright={t("footer.copyright")}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
