const FALLBACK_LOCALE = "en";

type TranslationRow = Record<string, unknown> & { locale: string };

export function resolveTranslation<TBase extends Record<string, unknown>>(
  base: TBase,
  translations: TranslationRow[],
  locale: string
): TBase {
  const exact = translations.find((t) => t.locale === locale);

  if (exact) {
    return mergeTranslation(base, exact);
  }

  if (locale !== FALLBACK_LOCALE) {
    const fallback = translations.find((t) => t.locale === FALLBACK_LOCALE);

    if (fallback) {
      return mergeTranslation(base, fallback);
    }
  }

  return base;
}

function mergeTranslation<TBase extends Record<string, unknown>>(
  base: TBase,
  translation: TranslationRow
): TBase {
  const merged = { ...base };

  for (const key of Object.keys(translation)) {
    if (key === "locale" || key === "id" || key === "createdAt" || key === "updatedAt") {
      continue;
    }

    const value = translation[key];

    if (value !== null && value !== undefined && key in base) {
      (merged as Record<string, unknown>)[key] = value;
    }
  }

  return merged;
}
