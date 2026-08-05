import Image from "next/image";

import { cn } from "@/lib/utils";

import { StonePanel } from "./stone-panel";

type EditorialContentBlockProps = {
  content: string;
  imageUrl?: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

export function ArchiveProse({ content }: { content: string }) {
  return (
    <div className="space-y-5 text-base leading-8 text-stone-300">
      {content.split(/\n{2,}/).map((block, index) => {
        const lines = block.split("\n").filter(Boolean);
        const isList =
          lines.length > 0 && lines.every((line) => line.startsWith("- "));

        if (isList) {
          return (
            <ul
              className="list-disc space-y-2 pl-6"
              key={`${index}-${block.slice(0, 24)}`}
            >
              {lines.map((line) => (
                <li key={line}>{line.slice(2)}</li>
              ))}
            </ul>
          );
        }

        return (
          <p
            className="whitespace-pre-line"
            key={`${index}-${block.slice(0, 24)}`}
          >
            {block}
          </p>
        );
      })}
    </div>
  );
}

export function EditorialContentBlock({
  content,
  imageUrl,
  imageAlt,
  imagePosition = "left"
}: EditorialContentBlockProps) {
  if (!imageUrl) {
    return (
      <StonePanel>
        <ArchiveProse content={content} />
      </StonePanel>
    );
  }

  return (
    <StonePanel className="overflow-hidden p-0">
      <div
        className={cn(
          "editorial-content-block",
          imagePosition === "right" && "editorial-content-block-reverse"
        )}
      >
        <div className="editorial-content-image">
          <Image
            alt={imageAlt}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            src={imageUrl}
          />
        </div>
        <div className="p-6 sm:p-8">
          <ArchiveProse content={content} />
        </div>
      </div>
    </StonePanel>
  );
}
