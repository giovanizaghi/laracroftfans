export { MediaType } from "@prisma/client";

export type CoverTone = "sand" | "jade" | "bronze" | "obsidian" | "river";

export type ArchiveGame = {
  id: string;
  slug: string;
  title: string;
  releaseYear: number;
  releaseDate: string;
  description: string;
  platforms: string[];
  coverImage: string;
  heroImage: string;
  coverTone: CoverTone;
  overview: string;
  story: string;
  development: string;
  trivia: string[];
  gallery: string[];
};

export type TimelineMilestone = {
  id: string;
  year: number;
  title: string;
  description: string;
  gameSlug?: string;
};
