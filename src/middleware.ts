import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";

import { routing } from "@/lib/i18n/routing";

const intlMiddleware = createMiddleware(routing);
const portugueseCountryCodes = new Set([
  "AO",
  "BR",
  "CV",
  "GW",
  "GQ",
  "MO",
  "MZ",
  "PT",
  "ST",
  "TL"
]);

function getCountryCode(request: NextRequest) {
  const countryHeaders = [
    "x-vercel-ip-country",
    "cf-ipcountry",
    "cloudfront-viewer-country",
    "x-country-code",
    "x-country"
  ];

  for (const header of countryHeaders) {
    const value = request.headers.get(header);

    if (value) {
      return value.toUpperCase();
    }
  }
}

function getLocaleFromRequest(request: NextRequest) {
  const countryCode = getCountryCode(request);

  if (countryCode && portugueseCountryCodes.has(countryCode)) {
    return "pt";
  }

  if (!countryCode) {
    const acceptLanguage = request.headers.get("accept-language") || "";

    if (acceptLanguage.toLowerCase().includes("pt")) {
      return "pt";
    }
  }

  return routing.defaultLocale;
}

function hasLocalePrefix(pathname: string) {
  return routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!hasLocalePrefix(pathname)) {
    const locale = getLocaleFromRequest(request);
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
