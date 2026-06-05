"use client";

import { motion } from "framer-motion";
import { Landmark } from "lucide-react";

import type { Game } from "@/data/games";

type ExpeditionTimelineProps = {
  basePath: string;
  games: Game[];
};

export function ExpeditionTimeline({ basePath, games }: ExpeditionTimelineProps) {
  return (
    <div className="expedition-timeline" aria-label="Tomb Raider timeline">
      <div className="timeline-route" aria-hidden="true" />
      {games.map((game, index) => (
        <motion.a
          className="timeline-marker group"
          href={`${basePath}/games/${game.slug}`}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.34, delay: Math.min(index * 0.035, 0.28) }}
          whileHover={{ y: -6 }}
          key={game.id}
        >
          <span className="timeline-icon" aria-hidden="true">
            <Landmark className="h-4 w-4" />
          </span>
          <span className="text-xs font-black uppercase text-amber-200/75">
            {game.releaseYear}
          </span>
          <strong className="mt-2 block text-base uppercase text-amber-50">
            {game.title}
          </strong>
          <span className="mt-3 block text-sm leading-6 text-stone-300">
            {game.description}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
