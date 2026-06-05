"use client";

import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

import { AncientButton } from "./ancient-button";

type ArtifactCardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
  eyebrow?: string;
  meta?: string;
  coverTone?: "sand" | "jade" | "bronze" | "obsidian" | "river";
};

export function ArtifactCard({
  title,
  description,
  href,
  cta,
  eyebrow,
  meta,
  coverTone = "sand"
}: ArtifactCardProps) {
  return (
    <motion.article
      className="artifact-card group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -7 }}
    >
      <div className={`artifact-cover artifact-cover-${coverTone}`}>
        <div className="artifact-cover-glyph" aria-hidden="true">
          <ScrollText className="h-8 w-8" />
        </div>
      </div>
      <div className="relative p-5">
        {eyebrow ? (
          <p className="text-xs font-black uppercase text-amber-200/70">
            {eyebrow}
          </p>
        ) : null}
        <h3 className="mt-2 text-xl font-black uppercase text-amber-50">
          {title}
        </h3>
        {meta ? <p className="mt-2 text-sm text-stone-400">{meta}</p> : null}
        <p className="mt-4 text-sm leading-6 text-stone-300">{description}</p>
        <AncientButton className="mt-5 w-full" href={href} variant="stone">
          {cta}
        </AncientButton>
      </div>
    </motion.article>
  );
}
