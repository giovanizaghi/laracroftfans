import { Instagram, Youtube } from "lucide-react";

type SiteFooterProps = {
  instagramUrl: string;
  youtubeUrl: string;
  instagramLabel: string;
  youtubeLabel: string;
  languagePlaceholder: string;
  disclaimer: string;
  copyright: string;
};

export function SiteFooter({
  instagramUrl,
  youtubeUrl,
  instagramLabel,
  youtubeLabel,
  languagePlaceholder,
  disclaimer,
  copyright
}: SiteFooterProps) {
  return (
    <footer className="excavation-footer px-5 py-12 text-stone-200 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xl font-black uppercase text-amber-50">
            Lara Croft Fans
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">
            {disclaimer}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
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
          <button className="footer-link" type="button" aria-disabled="true">
            {languagePlaceholder}
          </button>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-xs text-stone-500">
        {copyright}
      </p>
    </footer>
  );
}
