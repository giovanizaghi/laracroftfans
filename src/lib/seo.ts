export function getBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;

  if (!url) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required for metadata generation. Set it in your environment."
    );
  }

  return url.replace(/\/$/, "");
}

export function buildCanonical(locale: string, path: string): string {
  return `${getBaseUrl()}/${locale}${path}`;
}

export function buildAlternates(locale: string, path: string) {
  const base = getBaseUrl();

  return {
    canonical: `${base}/${locale}${path}`,
    languages: {
      en: `${base}/en${path}`,
      pt: `${base}/pt${path}`
    }
  };
}
