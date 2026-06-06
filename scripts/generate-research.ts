import * as fs from "node:fs";
import * as path from "node:path";

const GAMES_JSON = path.resolve(__dirname, "../games.json");
const RESEARCH_DIR = path.resolve(__dirname, "../research/games");

// --- Types ---

interface GameSeed {
  slug: string;
  title: string;
  releaseDate: string;
  developer: string | null;
  publisher: string | null;
  engine: string | null;
  director: string | null;
  producer: string | null;
  platforms: string[];
  genre: string[];
  knownFacts: string[];
}

// --- Formatters ---

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}

function field(label: string, value: string | null | undefined, fallback = "<!-- TODO: research -->"): string {
  return `| ${label} | ${value ?? fallback} |`;
}

function buildResearchFile(game: GameSeed): string {
  const lines: string[] = [];

  // Header
  lines.push(`# Research: ${game.title}`);
  lines.push("");
  lines.push(
    "> **DRAFT — requires human review before copying into `game.en.md` or `game.pt.md`.**"
  );
  lines.push("");
  lines.push("---");
  lines.push("");

  // Release Information
  lines.push("## Release Information");
  lines.push("");
  lines.push("| Field | Value |");
  lines.push("| ----- | ----- |");
  lines.push(field("Title", game.title));
  lines.push(field("Release Date", game.releaseDate ? formatDate(game.releaseDate) : null));
  lines.push(field("Developer", game.developer));
  lines.push(field("Publisher", game.publisher));
  lines.push(field("Director", game.director));
  lines.push(field("Producer", game.producer));
  lines.push(field("Engine", game.engine));
  lines.push(field("Genre", game.genre.length > 0 ? game.genre.join(", ") : null));
  lines.push("");

  // Platforms
  lines.push("## Platforms");
  lines.push("");
  if (game.platforms.length > 0) {
    for (const platform of game.platforms) {
      lines.push(`- ${platform}`);
    }
  } else {
    lines.push("<!-- TODO: list all platforms with release dates -->");
  }
  lines.push("");
  lines.push("### Platform Notes");
  lines.push("");
  lines.push("<!-- TODO: note any platform-specific differences, exclusive content, or release timing -->");
  lines.push("");

  // Development History
  lines.push("## Development History");
  lines.push("");
  lines.push("### Origins");
  lines.push("");
  lines.push("<!-- TODO: how did this project start? Who pitched it? What was the original concept? -->");
  lines.push("");
  lines.push("### Team & Studio");
  lines.push("");
  lines.push(`<!-- TODO: key development team members, studio size, outsource partners -->`);
  lines.push("");
  lines.push("### Design Goals");
  lines.push("");
  lines.push("<!-- TODO: what were the stated design goals? What did the team want to improve or change? -->");
  lines.push("");
  lines.push("### Development Challenges");
  lines.push("");
  lines.push("<!-- TODO: delays, scope changes, technical difficulties, cancelled features -->");
  lines.push("");
  lines.push("### Marketing & Promotion");
  lines.push("");
  lines.push("<!-- TODO: key trailers, demo releases, preview coverage, promotional campaigns -->");
  lines.push("");

  // Reception
  lines.push("## Reception");
  lines.push("");
  lines.push("### Critical Reception");
  lines.push("");
  lines.push("<!-- TODO: Metacritic / OpenCritic scores, key review outlets and scores -->");
  lines.push("");
  lines.push("| Outlet | Score | Notes |");
  lines.push("| ------ | ----- | ----- |");
  lines.push("| <!-- outlet --> | <!-- score --> | <!-- notes --> |");
  lines.push("");
  lines.push("### Commercial Performance");
  lines.push("");
  lines.push("<!-- TODO: launch sales, lifetime units, financial performance relative to expectations -->");
  lines.push("");
  lines.push("### Community & Fan Response");
  lines.push("");
  lines.push("<!-- TODO: fan reaction at launch, how perception has evolved over time -->");
  lines.push("");

  // Legacy
  lines.push("## Legacy");
  lines.push("");
  lines.push("### Influence on the Series");
  lines.push("");
  lines.push("<!-- TODO: what mechanics, characters, or systems from this game persisted into sequels? -->");
  lines.push("");
  lines.push("### Cultural Impact");
  lines.push("");
  lines.push("<!-- TODO: influence beyond games — film, media, merchandise, academic discussion -->");
  lines.push("");
  lines.push("### Remasters / Re-releases");
  lines.push("");
  lines.push("<!-- TODO: any re-releases, HD remasters, or inclusions in compilations -->");
  lines.push("");

  // Notable Facts
  lines.push("## Notable Facts");
  lines.push("");
  if (game.knownFacts.length > 0) {
    lines.push("<!-- Seeded from games.json — verify accuracy before use in content -->");
    lines.push("");
    for (const fact of game.knownFacts) {
      lines.push(`- ${fact}`);
    }
  } else {
    lines.push("<!-- TODO: collect notable production facts, records, trivia -->");
  }
  lines.push("");
  lines.push("### Additional Research Needed");
  lines.push("");
  lines.push("<!-- TODO: list any specific questions or gaps identified during review -->");
  lines.push("");

  // Sources
  lines.push("## Sources");
  lines.push("");
  lines.push("<!-- TODO: list references used to write this research file -->");
  lines.push("");
  lines.push("| Source | URL | Notes |");
  lines.push("| ------ | --- | ----- |");
  lines.push("| <!-- source name --> | <!-- url --> | <!-- notes --> |");
  lines.push("");

  // Footer
  lines.push("---");
  lines.push("");
  lines.push(
    `*Generated from \`games.json\` on ${new Date().toISOString().split("T")[0]}. Do not commit auto-generated content into \`content/games/\` without editorial review.*`
  );
  lines.push("");

  return lines.join("\n");
}

// --- Main ---

function main() {
  console.log("🔬 Research Generator: Starting...\n");

  if (!fs.existsSync(GAMES_JSON)) {
    console.error(`❌ games.json not found at: ${GAMES_JSON}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(GAMES_JSON, "utf-8");
  let games: GameSeed[];
  try {
    games = JSON.parse(raw) as GameSeed[];
  } catch (e) {
    console.error(`❌ Failed to parse games.json: ${(e as Error).message}`);
    process.exit(1);
  }

  if (!Array.isArray(games) || games.length === 0) {
    console.error("❌ games.json must be a non-empty array");
    process.exit(1);
  }

  // Validate required fields
  const errors: string[] = [];
  for (const game of games) {
    if (!game.slug) errors.push(`Missing 'slug' in entry: ${JSON.stringify(game).slice(0, 60)}`);
    if (!game.title) errors.push(`[${game.slug}] Missing 'title'`);
    if (!game.releaseDate) errors.push(`[${game.slug}] Missing 'releaseDate'`);
  }
  if (errors.length > 0) {
    for (const err of errors) console.error(`❌ ${err}`);
    process.exit(1);
  }

  let generated = 0;
  let skipped = 0;

  for (const game of games) {
    const gameDir = path.join(RESEARCH_DIR, game.slug);
    const outFile = path.join(gameDir, "research.md");

    fs.mkdirSync(gameDir, { recursive: true });

    // Never overwrite an existing file — protect manual edits
    if (fs.existsSync(outFile)) {
      console.log(`⏭  ${game.slug} — already exists, skipping`);
      skipped++;
      continue;
    }

    const content = buildResearchFile(game);
    fs.writeFileSync(outFile, content, "utf-8");
    console.log(`✅ ${game.slug}`);
    generated++;
  }

  console.log(
    `\n🔬 Done: ${generated} generated, ${skipped} skipped (existing files are never overwritten).`
  );
  console.log(`   Output: research/games/`);
}

main();
