export type Game = {
  id: string;
  slug: string;
  title: string;
  releaseYear: number;
  releaseDate: string;
  description: string;
  platforms: string[];
  coverImage: string;
  coverTone: "sand" | "jade" | "bronze" | "obsidian" | "river";
  overview: string;
  story: string;
  development: string;
  trivia: string[];
  gallery: string[];
};

export const games: Game[] = [
  {
    id: "tr-1996",
    slug: "tomb-raider-1996",
    title: "Tomb Raider",
    releaseYear: 1996,
    releaseDate: "October 25, 1996",
    description:
      "Lara Croft's first expedition through lost cities, ancient tombs, and the mystery of the Scion.",
    platforms: ["PC", "PlayStation", "Sega Saturn"],
    coverImage: "/images/midas-palace.png",
    coverTone: "sand",
    overview:
      "The original adventure established the lonely, dangerous rhythm of Tomb Raider: exploration, platforming, puzzle rooms, and ancient secrets.",
    story:
      "Lara is hired to recover a fragment of the Scion, only to uncover a deeper Atlantean conspiracy buried beneath forgotten ruins.",
    development:
      "Core Design shaped the game around 3D movement, precise traversal, and monumental spaces that felt like architectural puzzles.",
    trivia: [
      "The game introduced Lara Croft as one of gaming's defining adventure icons.",
      "Its tomb spaces used silence and scale as much as action.",
      "The Scion became one of the franchise's most recognizable artifacts."
    ],
    gallery: ["Peru expedition", "Midas Palace", "Atlantis chamber"]
  },
  {
    id: "tr-2",
    slug: "tomb-raider-ii",
    title: "Tomb Raider II",
    releaseYear: 1997,
    releaseDate: "October 31, 1997",
    description:
      "A race for the Dagger of Xian across Venice, offshore wrecks, monasteries, and hidden Chinese temples.",
    platforms: ["PC", "PlayStation"],
    coverImage: "/images/midas-palace.png",
    coverTone: "jade",
    overview:
      "The sequel expanded Lara's world with larger set pieces, vehicles, and a broader sense of global pursuit.",
    story:
      "Lara tracks the Dagger of Xian while a cult attempts to use its power for transformation and conquest.",
    development:
      "The design leaned into cinematic variety while keeping the series' puzzle chambers and lethal traversal.",
    trivia: [
      "Vehicles became a signature addition.",
      "The Great Wall opening set a faster pace than the first game.",
      "Venice gave the series one of its most memorable urban expeditions."
    ],
    gallery: ["Venice canals", "Maria Doria", "Temple of Xian"]
  },
  {
    id: "tr-3",
    slug: "tomb-raider-iii",
    title: "Tomb Raider III",
    releaseYear: 1998,
    releaseDate: "November 20, 1998",
    description:
      "A hunt for meteorite artifacts through India, London, Nevada, the South Pacific, and Antarctica.",
    platforms: ["PC", "PlayStation"],
    coverImage: "/images/midas-palace.png",
    coverTone: "obsidian",
    overview:
      "Tomb Raider III became a sprawling expedition with branching routes and harsher survival challenges.",
    story:
      "Lara follows artifacts forged from an ancient meteorite, each piece tied to mutation, power, and lost history.",
    development:
      "The team emphasized denser levels, alternate paths, and a more punishing sense of discovery.",
    trivia: [
      "Players could choose the order of several expeditions.",
      "The game is known for its difficulty and hidden routes.",
      "Its locations pushed the classic formula into unusual terrain."
    ],
    gallery: ["Jungle ruins", "London rooftops", "Antarctic dig site"]
  },
  {
    id: "last-revelation",
    slug: "tomb-raider-the-last-revelation",
    title: "Tomb Raider: The Last Revelation",
    releaseYear: 1999,
    releaseDate: "November 22, 1999",
    description:
      "An Egyptian journey through temples, tombs, and the unleashed danger of Set.",
    platforms: ["PC", "PlayStation", "Dreamcast"],
    coverImage: "/images/midas-palace.png",
    coverTone: "bronze",
    overview:
      "The Last Revelation refocused Tomb Raider around ancient Egyptian sites and a more connected adventure structure.",
    story:
      "After disturbing the tomb of Set, Lara must navigate sacred sites and stop an ancient force from escaping fully.",
    development:
      "The game experimented with hub-like progression and a darker mythological tone.",
    trivia: [
      "Much of the game is set in Egypt.",
      "Young Lara sequences expanded her backstory.",
      "The ending became one of the series' most discussed moments."
    ],
    gallery: ["Karnak temple", "Alexandria ruins", "Giza chamber"]
  },
  {
    id: "chronicles",
    slug: "tomb-raider-chronicles",
    title: "Tomb Raider Chronicles",
    releaseYear: 2000,
    releaseDate: "November 17, 2000",
    description:
      "A set of remembered expeditions told by Lara's allies after her disappearance.",
    platforms: ["PC", "PlayStation", "Dreamcast"],
    coverImage: "/images/midas-palace.png",
    coverTone: "river",
    overview:
      "Chronicles presents smaller, varied stories that feel like recovered field notes from Lara's career.",
    story:
      "Friends gather at Croft Manor and recount missions involving Rome, Russia, Ireland, and a high-tech tower.",
    development:
      "The format allowed the classic engine to visit disconnected tones and mission types.",
    trivia: [
      "The game is structured as flashbacks.",
      "It includes a young Lara supernatural episode.",
      "It bridged the classic era toward a planned reinvention."
    ],
    gallery: ["Rome streets", "Russian submarine", "Black Isle"]
  },
  {
    id: "angel-of-darkness",
    slug: "tomb-raider-the-angel-of-darkness",
    title: "Tomb Raider: The Angel of Darkness",
    releaseYear: 2003,
    releaseDate: "June 20, 2003",
    description:
      "A darker investigation through Paris and Prague, with Lara framed and hunted.",
    platforms: ["PC", "PlayStation 2"],
    coverImage: "/images/midas-palace.png",
    coverTone: "obsidian",
    overview:
      "Angel of Darkness attempted a heavier narrative direction with urban mystery, dialogue choices, and a noir mood.",
    story:
      "Lara investigates the Monstrum killings and the Obscura paintings while confronting secret societies and betrayal.",
    development:
      "The project aimed to modernize Tomb Raider for a new hardware generation with ambitious systems and darker storytelling.",
    trivia: [
      "Kurtis Trent became a playable character.",
      "The game remains one of the franchise's most debated entries.",
      "Its gothic tone still has a strong fan following."
    ],
    gallery: ["Paris backstreets", "Louvre dig", "Prague lab"]
  },
  {
    id: "legend",
    slug: "tomb-raider-legend",
    title: "Tomb Raider: Legend",
    releaseYear: 2006,
    releaseDate: "April 7, 2006",
    description:
      "A fast-moving search for Excalibur fragments and the mystery of Lara's mother.",
    platforms: ["PC", "PlayStation 2", "Xbox", "Xbox 360", "GameCube", "PSP"],
    coverImage: "/images/midas-palace.png",
    coverTone: "jade",
    overview:
      "Legend reintroduced Lara with responsive movement, cinematic pacing, and a renewed focus on globe-trotting adventure.",
    story:
      "Lara follows Arthurian relics and personal clues tied to the disappearance that shaped her childhood.",
    development:
      "Crystal Dynamics rebuilt the series around more fluid traversal, readable spaces, and character-driven stakes.",
    trivia: [
      "Legend marked Crystal Dynamics' first main Tomb Raider game.",
      "Zip and Alister provided radio support during expeditions.",
      "The grapple became a central traversal tool."
    ],
    gallery: ["Bolivia cliffs", "Japan tower", "Ghana temple"]
  },
  {
    id: "anniversary",
    slug: "tomb-raider-anniversary",
    title: "Tomb Raider: Anniversary",
    releaseYear: 2007,
    releaseDate: "June 1, 2007",
    description:
      "A reimagining of Lara's original Scion expedition with modern traversal and expanded mythology.",
    platforms: ["PC", "PlayStation 2", "Xbox 360", "Wii", "PSP"],
    coverImage: "/images/midas-palace.png",
    coverTone: "sand",
    overview:
      "Anniversary revisits the 1996 adventure as a more cinematic and mechanically modern tomb expedition.",
    story:
      "Lara pursues the Scion across Peru, Greece, Egypt, and Atlantis while learning the cost of obsession.",
    development:
      "The game rebuilt classic rooms around Legend-era movement while preserving the feeling of monumental ruins.",
    trivia: [
      "Many famous rooms were reinterpreted rather than copied.",
      "The game deepened Lara's conflict with Natla.",
      "It became a bridge between classic Tomb Raider and the Legend trilogy."
    ],
    gallery: ["Lost Valley", "Greece folly", "Natla's mines"]
  },
  {
    id: "underworld",
    slug: "tomb-raider-underworld",
    title: "Tomb Raider: Underworld",
    releaseYear: 2008,
    releaseDate: "November 18, 2008",
    description:
      "A mythic descent through Norse ruins, ancient machinery, and the truth behind Lara's family mystery.",
    platforms: ["PC", "PlayStation 3", "Xbox 360", "Wii", "PlayStation 2"],
    coverImage: "/images/midas-palace.png",
    coverTone: "river",
    overview:
      "Underworld emphasized grand ancient spaces, physical puzzles, and darker mythological atmosphere.",
    story:
      "Lara searches for Avalon and confronts Norse legends, doppelgangers, and the legacy of Natla.",
    development:
      "The team focused on larger environments, motion capture, and puzzles that felt rooted in place.",
    trivia: [
      "Thailand is one of the franchise's most praised visual locations.",
      "The game concludes major threads from Legend and Anniversary.",
      "Lara's manor becomes part of the unfolding mystery."
    ],
    gallery: ["Thailand coast", "Mexico underworld", "Arctic machine"]
  },
  {
    id: "tr-2013",
    slug: "tomb-raider-2013",
    title: "Tomb Raider",
    releaseYear: 2013,
    releaseDate: "March 5, 2013",
    description:
      "A survival origin story on Yamatai, where Lara becomes the explorer fans know.",
    platforms: ["PC", "PlayStation 3", "Xbox 360", "PlayStation 4", "Xbox One"],
    coverImage: "/images/midas-palace.png",
    coverTone: "obsidian",
    overview:
      "The 2013 reboot recast Tomb Raider as an intense survival expedition with cinematic combat and exploration.",
    story:
      "Shipwrecked on Yamatai, Lara faces cultists, storms, and the legacy of Himiko while fighting to save her crew.",
    development:
      "Crystal Dynamics rebuilt Lara's origin around vulnerability, resilience, and a more grounded adventure language.",
    trivia: [
      "The game launched the Survivor trilogy.",
      "Yamatai mixed archaeology with survival horror atmosphere.",
      "Optional tombs returned as compact puzzle spaces."
    ],
    gallery: ["Yamatai cliffs", "Mountain village", "Stormguard tomb"]
  },
  {
    id: "rise",
    slug: "rise-of-the-tomb-raider",
    title: "Rise of the Tomb Raider",
    releaseYear: 2015,
    releaseDate: "November 10, 2015",
    description:
      "Lara searches Siberia for the Divine Source and the lost city of Kitezh.",
    platforms: ["PC", "Xbox 360", "Xbox One", "PlayStation 4"],
    coverImage: "/images/midas-palace.png",
    coverTone: "jade",
    overview:
      "Rise expanded exploration hubs, challenge tombs, and survival systems while leaning harder into archaeology.",
    story:
      "Lara follows her father's research into immortality, clashing with Trinity in the frozen wilderness.",
    development:
      "The game broadened optional tombs and gave players more reasons to revisit spaces as tools improved.",
    trivia: [
      "Kitezh drew from legends of a hidden city.",
      "Challenge tombs became larger and more elaborate.",
      "The manor story content later expanded Lara's personal archive."
    ],
    gallery: ["Siberian wilderness", "Prophet's tomb", "Kitezh ruins"]
  },
  {
    id: "shadow",
    slug: "shadow-of-the-tomb-raider",
    title: "Shadow of the Tomb Raider",
    releaseYear: 2018,
    releaseDate: "September 14, 2018",
    description:
      "A journey through Mesoamerican ruins, hidden cities, and the consequences of Lara's obsession.",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    coverImage: "/images/midas-palace.png",
    coverTone: "bronze",
    overview:
      "Shadow completed the Survivor trilogy with denser tombs, jungle exploration, and a reflective tone.",
    story:
      "Lara triggers a Mayan apocalypse and searches for a way to stop it while confronting Trinity and herself.",
    development:
      "Eidos-Montreal led development, emphasizing underwater traversal, stealth, and elaborate challenge tombs.",
    trivia: [
      "Paititi became one of the largest social hubs in the series.",
      "The game added expanded difficulty controls.",
      "Its tombs leaned closer to ancient mechanical spaces."
    ],
    gallery: ["Cozumel temple", "Peruvian jungle", "Paititi"]
  },
  {
    id: "remastered",
    slug: "tomb-raider-i-iii-remastered",
    title: "Tomb Raider I-III Remastered",
    releaseYear: 2024,
    releaseDate: "February 14, 2024",
    description:
      "The first three adventures preserved with modern presentation options and classic structure.",
    platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox", "Nintendo Switch"],
    coverImage: "/images/midas-palace.png",
    coverTone: "sand",
    overview:
      "The remastered collection preserves the classic trilogy and its expansions for modern platforms.",
    story:
      "Players revisit the Scion, the Dagger of Xian, and meteorite artifact expeditions with updated visuals.",
    development:
      "The collection was built around preservation, optional modern controls, and the ability to switch visual styles.",
    trivia: [
      "Players can toggle between classic and remastered graphics.",
      "The collection includes expansion content.",
      "It reintroduced classic Lara to a broad modern audience."
    ],
    gallery: ["Classic Peru", "Venice revisited", "India ruins"]
  }
];

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}
