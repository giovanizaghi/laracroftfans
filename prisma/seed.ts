import { MediaType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const imagePlaceholder = "/images/midas-palace.png";

// Portuguese translations for selected games (validates the i18n architecture)
const ptGameTranslations: Record<
  string,
  {
    title: string;
    shortDescription: string;
    fullDescription: string;
    story: string;
    development: string;
    trivia: string[];
  }
> = {
  "tomb-raider-1996": {
    title: "Tomb Raider",
    shortDescription:
      "A primeira expedição de Lara Croft por cidades perdidas, tumbas antigas e o mistério do Scion.",
    fullDescription:
      "A aventura original estabeleceu o ritmo solitário e perigoso de Tomb Raider: exploração, plataformas, salas de enigmas e segredos milenares.",
    story:
      "Lara é contratada para recuperar um fragmento do Scion, mas descobre uma conspiração Atlante mais profunda, enterrada sob ruínas esquecidas.",
    development:
      "A Core Design construiu o jogo em torno de movimento 3D, travessia precisa e espaços monumentais que funcionavam como quebra-cabeças arquitetônicos.",
    trivia: [
      "O jogo apresentou Lara Croft como um dos ícones definitivos dos jogos de aventura.",
      "Seus espaços de tumba usavam o silêncio e a escala tanto quanto a ação.",
      "O Scion se tornou um dos artefatos mais reconhecíveis da franquia."
    ]
  },
  "tomb-raider-ii": {
    title: "Tomb Raider II",
    shortDescription:
      "Uma corrida pelo Punhal de Xian através de Veneza, naufrágios, monastérios e templos chineses escondidos.",
    fullDescription:
      "A sequência expandiu o mundo de Lara com set pieces maiores, veículos e uma sensação mais ampla de perseguição global.",
    story:
      "Lara rastreia o Punhal de Xian enquanto um culto tenta usar seu poder para transformação e conquista.",
    development:
      "O design apostou na variedade cinematográfica, mantendo as câmaras de enigmas e a travessia letal da série.",
    trivia: [
      "Os veículos se tornaram uma adição marcante da sequência.",
      "A abertura na Grande Muralha estabeleceu um ritmo mais acelerado que o primeiro jogo.",
      "Veneza deu à série uma das expedições urbanas mais memoráveis."
    ]
  },
  "tomb-raider-legend": {
    title: "Tomb Raider: Legend",
    shortDescription:
      "Uma busca veloz por fragmentos de Excalibur e o mistério do desaparecimento da mãe de Lara.",
    fullDescription:
      "Legend reintroduziu Lara com movimentos responsivos, ritmo cinematográfico e um foco renovado em aventuras ao redor do mundo.",
    story:
      "Lara segue relíquias artúrias e pistas pessoais ligadas ao desaparecimento que moldou sua infância.",
    development:
      "A Crystal Dynamics reconstruiu a série com uma travessia mais fluida, espaços legíveis e apostas narrativas com personagens marcantes.",
    trivia: [
      "Legend marcou o primeiro jogo principal de Tomb Raider pela Crystal Dynamics.",
      "Zip e Alister forneciam suporte via rádio durante as expedições.",
      "O gancho se tornou uma ferramenta central de travessia."
    ]
  },
  "tomb-raider-2013": {
    title: "Tomb Raider",
    shortDescription:
      "Uma história de origem sobre sobrevivência em Yamatai, onde Lara se torna a exploradora que os fãs conhecem.",
    fullDescription:
      "O reboot de 2013 reformulou Tomb Raider como uma expedição de sobrevivência intensa, com combate cinematográfico e exploração.",
    story:
      "Naufragada em Yamatai, Lara enfrenta cultistas, tempestades e o legado de Himiko enquanto luta para salvar sua equipe.",
    development:
      "A Crystal Dynamics reconstruiu a origem de Lara em torno de vulnerabilidade, resiliência e uma linguagem de aventura mais fundamentada.",
    trivia: [
      "O jogo iniciou a trilogia Survivor.",
      "Yamatai misturou arqueologia com atmosfera de horror de sobrevivência.",
      "As tumbas opcionais retornaram como espaços de enigmas compactos."
    ]
  }
};

// Portuguese translations for key timeline milestone events
const ptTimelineMilestones: Record<string, { title: string; description: string }> = {
  "Lara Croft enters gaming history": {
    title: "Lara Croft entra para a história dos videogames",
    description:
      "O primeiro Tomb Raider estabelece exploração, isolamento e ruínas antigas como pilares da franquia."
  },
  "Crystal Dynamics era begins": {
    title: "A era Crystal Dynamics começa",
    description:
      "Tomb Raider: Legend reintroduz Lara com uma nova linguagem de movimento e ritmo cinematográfico."
  },
  "Survivor trilogy begins": {
    title: "A trilogia Survivor começa",
    description:
      "O reboot apresenta a origem de Lara através de sobrevivência, arqueologia e resiliência pessoal."
  },
  "Classic preservation returns": {
    title: "A preservação dos clássicos retorna",
    description:
      "A trilogia clássica remasterizada traz as primeiras aventuras de volta ao foco do público."
  }
};

const platforms = [
  "PC",
  "PlayStation",
  "PlayStation 2",
  "PlayStation 3",
  "PlayStation 4",
  "PlayStation 5",
  "Xbox",
  "Xbox 360",
  "Xbox One",
  "Dreamcast",
  "Sega Saturn",
  "GameCube",
  "Wii",
  "PSP",
  "Nintendo Switch"
].map((name) => ({
  name,
  slug: name.toLowerCase().replaceAll(" ", "-")
}));

const games = [
  {
    slug: "tomb-raider-1996",
    title: "Tomb Raider",
    releaseDate: "1996-10-25T00:00:00.000Z",
    platforms: ["PC", "PlayStation", "Sega Saturn"],
    shortDescription:
      "Lara Croft's first expedition through lost cities, ancient tombs, and the mystery of the Scion.",
    fullDescription:
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
    slug: "tomb-raider-ii",
    title: "Tomb Raider II",
    releaseDate: "1997-10-31T00:00:00.000Z",
    platforms: ["PC", "PlayStation"],
    shortDescription:
      "A race for the Dagger of Xian across Venice, offshore wrecks, monasteries, and hidden Chinese temples.",
    fullDescription:
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
    slug: "tomb-raider-iii",
    title: "Tomb Raider III",
    releaseDate: "1998-11-20T00:00:00.000Z",
    platforms: ["PC", "PlayStation"],
    shortDescription:
      "A hunt for meteorite artifacts through India, London, Nevada, the South Pacific, and Antarctica.",
    fullDescription:
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
    slug: "tomb-raider-the-last-revelation",
    title: "Tomb Raider: The Last Revelation",
    releaseDate: "1999-11-22T00:00:00.000Z",
    platforms: ["PC", "PlayStation", "Dreamcast"],
    shortDescription:
      "An Egyptian journey through temples, tombs, and the unleashed danger of Set.",
    fullDescription:
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
    slug: "tomb-raider-chronicles",
    title: "Tomb Raider Chronicles",
    releaseDate: "2000-11-17T00:00:00.000Z",
    platforms: ["PC", "PlayStation", "Dreamcast"],
    shortDescription:
      "A set of remembered expeditions told by Lara's allies after her disappearance.",
    fullDescription:
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
    slug: "tomb-raider-the-angel-of-darkness",
    title: "Tomb Raider: The Angel of Darkness",
    releaseDate: "2003-06-20T00:00:00.000Z",
    platforms: ["PC", "PlayStation 2"],
    shortDescription:
      "A darker investigation through Paris and Prague, with Lara framed and hunted.",
    fullDescription:
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
    slug: "tomb-raider-legend",
    title: "Tomb Raider: Legend",
    releaseDate: "2006-04-07T00:00:00.000Z",
    platforms: ["PC", "PlayStation 2", "Xbox", "Xbox 360", "GameCube", "PSP"],
    shortDescription:
      "A fast-moving search for Excalibur fragments and the mystery of Lara's mother.",
    fullDescription:
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
    slug: "tomb-raider-anniversary",
    title: "Tomb Raider: Anniversary",
    releaseDate: "2007-06-01T00:00:00.000Z",
    platforms: ["PC", "PlayStation 2", "Xbox 360", "Wii", "PSP"],
    shortDescription:
      "A reimagining of Lara's original Scion expedition with modern traversal and expanded mythology.",
    fullDescription:
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
    slug: "tomb-raider-underworld",
    title: "Tomb Raider: Underworld",
    releaseDate: "2008-11-18T00:00:00.000Z",
    platforms: ["PC", "PlayStation 3", "Xbox 360", "Wii", "PlayStation 2"],
    shortDescription:
      "A mythic descent through Norse ruins, ancient machinery, and the truth behind Lara's family mystery.",
    fullDescription:
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
    slug: "tomb-raider-2013",
    title: "Tomb Raider",
    releaseDate: "2013-03-05T00:00:00.000Z",
    platforms: ["PC", "PlayStation 3", "Xbox 360", "PlayStation 4", "Xbox One"],
    shortDescription:
      "A survival origin story on Yamatai, where Lara becomes the explorer fans know.",
    fullDescription:
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
    slug: "rise-of-the-tomb-raider",
    title: "Rise of the Tomb Raider",
    releaseDate: "2015-11-10T00:00:00.000Z",
    platforms: ["PC", "Xbox 360", "Xbox One", "PlayStation 4"],
    shortDescription:
      "Lara searches Siberia for the Divine Source and the lost city of Kitezh.",
    fullDescription:
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
    slug: "shadow-of-the-tomb-raider",
    title: "Shadow of the Tomb Raider",
    releaseDate: "2018-09-14T00:00:00.000Z",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    shortDescription:
      "A journey through Mesoamerican ruins, hidden cities, and the consequences of Lara's obsession.",
    fullDescription:
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
  }
];

const characters = [
  {
    slug: "lara-croft",
    name: "Lara Croft",
    description:
      "Archaeologist, adventurer, and the central explorer of the Tomb Raider franchise.",
    imageUrl: imagePlaceholder
  },
  {
    slug: "winston",
    name: "Winston",
    description:
      "Croft Manor's loyal butler, remembered across the classic era by many fans.",
    imageUrl: imagePlaceholder
  },
  {
    slug: "amanda-evert",
    name: "Amanda Evert",
    description:
      "A former friend of Lara whose path becomes tied to ancient powers and unresolved history.",
    imageUrl: imagePlaceholder
  },
  {
    slug: "jonah-maiava",
    name: "Jonah Maiava",
    description:
      "A close ally whose loyalty anchors Lara throughout the Survivor trilogy.",
    imageUrl: imagePlaceholder
  }
];

const locations = [
  {
    slug: "peru",
    name: "Peru",
    description:
      "A recurring expedition setting associated with mountains, lost valleys, and ancient ruins.",
    imageUrl: imagePlaceholder
  },
  {
    slug: "egypt",
    name: "Egypt",
    description:
      "A major Tomb Raider setting of temples, tombs, sacred mythology, and archaeological danger.",
    imageUrl: imagePlaceholder
  },
  {
    slug: "tibet",
    name: "Tibet",
    description:
      "A remote region tied to monasteries, mountain traversal, and the Dagger of Xian expedition.",
    imageUrl: imagePlaceholder
  },
  {
    slug: "croft-manor",
    name: "Croft Manor",
    description:
      "Lara's ancestral home, training ground, archive, and recurring piece of franchise history.",
    imageUrl: imagePlaceholder
  }
];

const globalMedia = [
  {
    title: "Lost Valley Vista",
    description: "A placeholder wallpaper plate for the future visual archive.",
    type: MediaType.WALLPAPER
  },
  {
    title: "Temple Torchlight",
    description: "A mobile-format wall study inspired by ancient chambers.",
    type: MediaType.WALLPAPER
  },
  {
    title: "Scion Chamber",
    description: "Concept-style archive artwork for an ancient artifact room.",
    type: MediaType.ARTWORK
  },
  {
    title: "Explorer Silhouette",
    description: "Character artwork placeholder for future visual records.",
    type: MediaType.CONCEPT_ART
  },
  {
    title: "Bridge Approach",
    description: "Screenshot placeholder for traversal and environment studies.",
    type: MediaType.SCREENSHOT
  },
  {
    title: "Puzzle Room",
    description: "Screenshot placeholder for future chamber documentation.",
    type: MediaType.SCREENSHOT
  },
  {
    title: "Launch Poster",
    description: "Promotional placeholder for historical campaign material.",
    type: MediaType.PROMOTIONAL
  },
  {
    title: "Magazine Feature",
    description: "Promotional placeholder for press and marketing archive entries.",
    type: MediaType.PROMOTIONAL
  }
];

async function main() {
  await prisma.timelineEvent.deleteMany();
  await prisma.mediaAsset.deleteMany();
  await prisma.gamePlatform.deleteMany();
  await prisma.game.deleteMany();
  await prisma.platform.deleteMany();
  await prisma.character.deleteMany();
  await prisma.location.deleteMany();

  const platformRecords = new Map<string, { id: string }>();

  for (const platform of platforms) {
    const record = await prisma.platform.create({ data: platform });
    platformRecords.set(platform.name, { id: record.id });
  }

  const gameRecords = new Map<string, { id: string; title: string; releaseDate: Date }>();

  for (const game of games) {
    const record = await prisma.game.create({
      data: {
        slug: game.slug,
        title: game.title,
        shortDescription: game.shortDescription,
        fullDescription: game.fullDescription,
        story: game.story,
        development: game.development,
        trivia: game.trivia,
        releaseDate: new Date(game.releaseDate),
        coverImage: imagePlaceholder,
        heroImage: imagePlaceholder,
        platforms: {
          create: game.platforms.map((platformName) => {
            const platform = platformRecords.get(platformName);

            if (!platform) {
              throw new Error(`Missing platform ${platformName}`);
            }

            return {
              platform: {
                connect: {
                  id: platform.id
                }
              }
            };
          })
        },
        mediaAssets: {
          create: [
            {
              title: `${game.title} cover archive`,
              description: `Placeholder cover record for ${game.title}.`,
              type: MediaType.COVER,
              imageUrl: imagePlaceholder,
              thumbnailUrl: imagePlaceholder
            },
            ...game.gallery.map((title) => ({
              title,
              description: `Gallery placeholder for ${game.title}: ${title}.`,
              type: MediaType.SCREENSHOT,
              imageUrl: imagePlaceholder,
              thumbnailUrl: imagePlaceholder
            }))
          ]
        }
      }
    });

    gameRecords.set(game.slug, {
      id: record.id,
      title: record.title,
      releaseDate: record.releaseDate
    });
  }

  // Seed game translations (EN mirrors parent fields; PT where defined)
  for (const game of games) {
    const record = gameRecords.get(game.slug);

    if (!record) {
      throw new Error(`Missing game record for ${game.slug}`);
    }

    await prisma.gameTranslation.create({
      data: {
        gameId: record.id,
        locale: "en",
        title: game.title,
        shortDescription: game.shortDescription,
        fullDescription: game.fullDescription,
        story: game.story,
        development: game.development,
        trivia: game.trivia
      }
    });

    const pt = ptGameTranslations[game.slug];

    if (pt) {
      await prisma.gameTranslation.create({
        data: {
          gameId: record.id,
          locale: "pt",
          ...pt
        }
      });
    }
  }

  // slug-keyed so "Tomb Raider" (1996) and "Tomb Raider" (2013) don't collide
  const gameEventRecords = new Map<string, { id: string; title: string; description: string }>();

  for (const game of games) {
    const record = gameRecords.get(game.slug);

    if (!record) {
      throw new Error(`Missing game ${game.slug}`);
    }

    const event = await prisma.timelineEvent.create({
      data: {
        year: record.releaseDate.getUTCFullYear(),
        title: `${game.title} release`,
        description: game.shortDescription,
        eventDate: record.releaseDate,
        gameId: record.id
      }
    });

    gameEventRecords.set(game.slug, {
      id: event.id,
      title: event.title,
      description: game.shortDescription
    });
  }

  const milestones = [
    {
      year: 1996,
      title: "Lara Croft enters gaming history",
      description:
        "The first Tomb Raider establishes exploration, isolation, and ancient ruins as franchise pillars.",
      eventDate: new Date("1996-10-25T00:00:00.000Z")
    },
    {
      year: 2006,
      title: "Crystal Dynamics era begins",
      description:
        "Tomb Raider: Legend reintroduces Lara with a new movement language and cinematic pace.",
      eventDate: new Date("2006-04-07T00:00:00.000Z")
    },
    {
      year: 2013,
      title: "Survivor trilogy begins",
      description:
        "The reboot presents Lara's origin through survival, archaeology, and personal resilience.",
      eventDate: new Date("2013-03-05T00:00:00.000Z")
    },
    {
      year: 2024,
      title: "Classic preservation returns",
      description:
        "The remastered classic trilogy brings the earliest adventures back into public focus.",
      eventDate: new Date("2024-02-14T00:00:00.000Z")
    }
  ];

  const milestoneEventRecords: Array<{ id: string; title: string; description: string }> = [];

  for (const milestone of milestones) {
    const event = await prisma.timelineEvent.create({ data: milestone });

    milestoneEventRecords.push({
      id: event.id,
      title: event.title,
      description: event.description
    });
  }

  // Seed EN translations for all game release events (slug-keyed, no collision)
  for (const [, entry] of gameEventRecords.entries()) {
    await prisma.timelineEventTranslation.create({
      data: {
        eventId: entry.id,
        locale: "en",
        title: entry.title,
        description: entry.description
      }
    });
  }

  // Seed EN + PT translations for milestone events
  for (const entry of milestoneEventRecords) {
    await prisma.timelineEventTranslation.create({
      data: {
        eventId: entry.id,
        locale: "en",
        title: entry.title,
        description: entry.description
      }
    });

    const pt = ptTimelineMilestones[entry.title];

    if (pt) {
      await prisma.timelineEventTranslation.create({
        data: {
          eventId: entry.id,
          locale: "pt",
          ...pt
        }
      });
    }
  }

  await prisma.mediaAsset.createMany({
    data: globalMedia.map((asset) => ({
      ...asset,
      imageUrl: imagePlaceholder,
      thumbnailUrl: imagePlaceholder
    }))
  });

  await prisma.character.createMany({ data: characters });
  await prisma.location.createMany({ data: locations });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
