import { ImageOff } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type PhotoPlaceholderProps = {
  label: string;
  className?: string;
};

export function PhotoPlaceholder({ label, className }: PhotoPlaceholderProps) {
  return (
    <div className={cn("archive-photo-placeholder", className)}>
      <ImageOff aria-hidden="true" className="h-8 w-8" />
      <span>{label}</span>
    </div>
  );
}

type ArchiveRecordCardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  eyebrow?: string;
  meta?: string;
  note?: string;
  emptyPhotoLabel: string;
  imageFit?: "cover" | "contain";
};

export function ArchiveRecordCard({
  title,
  description,
  imageUrl,
  imageAlt = title,
  eyebrow,
  meta,
  note,
  emptyPhotoLabel,
  imageFit = "cover"
}: ArchiveRecordCardProps) {
  return (
    <article className="archive-record-card">
      <div className="archive-record-image">
        {imageUrl ? (
          <Image
            alt={imageAlt}
            className={cn(
              imageFit === "contain" ? "object-contain p-3" : "object-cover"
            )}
            fill
            sizes="(min-width: 768px) 21rem, 82vw"
            src={imageUrl}
          />
        ) : (
          <PhotoPlaceholder label={emptyPhotoLabel} />
        )}
      </div>
      <div className="p-5">
        {eyebrow ? (
          <p className="text-xs font-black uppercase tracking-wide text-amber-200/70">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="mt-2 text-xl font-black uppercase text-amber-50">
          {title}
        </h3>
        {meta ? <p className="mt-2 text-sm text-stone-400">{meta}</p> : null}
        <p className="mt-4 text-sm leading-6 text-stone-300">{description}</p>
        {note ? (
          <p className="mt-4 border-t border-amber-200/10 pt-4 text-xs leading-5 text-stone-400">
            {note}
          </p>
        ) : null}
      </div>
    </article>
  );
}
