import type { GameArchiveInput } from "../../archive-types";

const level = (
  order: number,
  name: string,
  region: string,
  description: string,
  ptRegion: string,
  ptDescription: string,
  secrets: number,
  training = false
): GameArchiveInput["levels"][number] => ({
  order,
  name,
  region,
  description,
  secrets,
  training,
  status: "CONFIRMED",
  translations: {
    pt: {
      name,
      region: ptRegion,
      description: ptDescription
    }
  }
});

export const gameArchive = {
  scope:
    "Original Tomb Raider II released in 1997. The 1998 Macintosh port, The Golden Mask expansion, later mobile ports, and the 2024 remaster are identified separately.",
  developer: "Core Design Ltd.",
  originalPublisher: "Eidos Interactive Limited",
  genre: "Action-adventure / 3D platformer",
  perspective: "Third-person",
  gameMode: "Single-player",
  engine: "Enhanced proprietary Core Design 3D engine",
  images: {
    overview: "",
    story: "",
    gameplay: "",
    development: "",
    legacy: ""
  },
  counts: {
    campaignLevels: 18,
    trainingLevels: 1,
    secrets: 48,
    weapons: 7
  },
  releases: [
    {
      platform: "Windows",
      region: "North America",
      date: "1997-11-24",
      status: "CONFIRMED",
      note: "A contemporary Eidos press release dated November 24 states that the PC edition was now shipping. Some later databases use November 21."
    },
    {
      platform: "PlayStation",
      region: "North America",
      date: "1997-11-24",
      status: "CONFIRMED",
      note: "A contemporary Eidos press release dated November 24 states that the PlayStation edition was now shipping. Some later databases use November 21."
    },
    {
      platform: "Windows",
      region: "Europe",
      date: "1997-11-21",
      status: "DOCUMENTED_SECONDARY",
      note: "Regional date retained as specialist release-database evidence."
    },
    {
      platform: "PlayStation",
      region: "Europe",
      date: "1997-11-21",
      status: "DOCUMENTED_SECONDARY",
      note: "Regional date retained as specialist release-database evidence."
    },
    {
      platform: "PlayStation",
      region: "Japan",
      date: "1998-01-22",
      regionalTitle: "Tomb Raider 2",
      status: "DOCUMENTED_SECONDARY"
    }
  ],
  levels: [
    level(
      0,
      "Lara's Home",
      "Training — Croft Manor",
      "Optional expanded tutorial with an outdoor assault course, hedge maze, treasure room, and Winston following Lara.",
      "Treinamento — Mansão Croft",
      "Tutorial opcional ampliado, com pista de obstáculos externa, labirinto, sala do tesouro e Winston seguindo Lara.",
      0,
      true
    ),
    level(
      1,
      "The Great Wall",
      "China",
      "Lara reaches the sealed Temple of Xian, crosses a trap gauntlet, and learns that Marco Bartoli is also seeking the Dagger.",
      "China",
      "Lara chega ao Templo de Xian selado, atravessa uma sequência de armadilhas e descobre que Marco Bartoli também procura o Punhal.",
      3
    ),
    level(
      2,
      "Venice",
      "Venice, Italy",
      "A motorboat route through canals, boathouses, timed gates, and Fiamma Nera territory.",
      "Veneza, Itália",
      "Um percurso de lancha por canais, casas de barcos, portões cronometrados e território da Fiamma Nera.",
      3
    ),
    level(
      3,
      "Bartoli's Hideout",
      "Venice, Italy",
      "Lara enters Bartoli's mansion and crosses ruined interiors, chandeliers, and a demolition site.",
      "Veneza, Itália",
      "Lara entra na mansão de Bartoli e atravessa interiores em ruínas, lustres e uma área de demolição.",
      3
    ),
    level(
      4,
      "Opera House",
      "Venice, Italy",
      "A derelict opera house filled with rigging, sandbags, broken scenery, and armed cultists leads to Bartoli's seaplane.",
      "Veneza, Itália",
      "Uma casa de ópera abandonada, repleta de estruturas de palco, sacos de areia, cenários quebrados e cultistas armados, leva ao hidroavião de Bartoli.",
      3
    ),
    level(
      5,
      "Offshore Rig",
      "Adriatic Sea",
      "Lara escapes confinement without her weapons and explores the industrial rig above the Maria Doria wreck.",
      "Mar Adriático",
      "Lara escapa do confinamento sem suas armas e explora a plataforma industrial sobre o naufrágio do Maria Doria.",
      3
    ),
    level(
      6,
      "Diving Area",
      "Adriatic Sea",
      "The rig's diving complex reveals Brother Chan, the Seraph, and the Fiamma Nera salvage operation.",
      "Mar Adriático",
      "O complexo de mergulho da plataforma revela Brother Chan, o Serafim e a operação de salvamento da Fiamma Nera.",
      3
    ),
    level(
      7,
      "40 Fathoms",
      "Maria Doria wreck",
      "After a minisub crash, Lara swims through shark-filled water to reach the inverted ocean liner before her air runs out.",
      "Naufrágio do Maria Doria",
      "Após a queda de um minissubmarino, Lara atravessa águas com tubarões para alcançar o transatlântico virado antes que o ar acabe.",
      3
    ),
    level(
      8,
      "Wreck of the Maria Doria",
      "Maria Doria wreck",
      "Flooded corridors, a ballroom, and shattered decks establish the scale and inverted geometry of the wreck.",
      "Naufrágio do Maria Doria",
      "Corredores inundados, um salão de baile e conveses destruídos estabelecem a escala e a geometria invertida do naufrágio.",
      3
    ),
    level(
      9,
      "Living Quarters",
      "Maria Doria wreck",
      "Lara restores water flow through boilers and crew areas while continuing toward the Seraph.",
      "Naufrágio do Maria Doria",
      "Lara restabelece o fluxo de água por caldeiras e áreas da tripulação enquanto continua em direção ao Serafim.",
      3
    ),
    level(
      10,
      "The Deck",
      "Maria Doria wreck",
      "The shipwreck chapter ends across exposed hull sections and immense caverns containing the Seraph.",
      "Naufrágio do Maria Doria",
      "O capítulo do naufrágio termina entre partes expostas do casco e cavernas imensas que guardam o Serafim.",
      3
    ),
    level(
      11,
      "Tibetan Foothills",
      "Tibet",
      "Lara crosses snowy passes by foot and snowmobile while Fiamma Nera riders pursue the route to Barkhang.",
      "Tibete",
      "Lara atravessa passagens nevadas a pé e de snowmobile enquanto pilotos da Fiamma Nera perseguem a rota até Barkhang.",
      3
    ),
    level(
      12,
      "Barkhang Monastery",
      "Tibet",
      "Warrior monks defend their monastery from Bartoli's forces; they remain friendly unless Lara attacks them.",
      "Tibete",
      "Monges guerreiros defendem o monastério das forças de Bartoli; eles permanecem aliados a menos que Lara os ataque.",
      3
    ),
    level(
      13,
      "Catacombs of the Talion",
      "Tibet",
      "Ancient catacombs beneath Barkhang lead toward the Talion through traps, dark chambers, and yeti cages.",
      "Tibete",
      "Catacumbas antigas sob Barkhang conduzem ao Talion por armadilhas, câmaras escuras e jaulas de yetis.",
      3
    ),
    level(
      14,
      "Ice Palace",
      "Tibet",
      "Bells, launch pads, and an ice cavern guard the Talion and its supernatural protector.",
      "Tibete",
      "Sinos, plataformas de impulso e uma caverna de gelo protegem o Talion e seu guardião sobrenatural.",
      3
    ),
    level(
      15,
      "Temple of Xian",
      "China",
      "The opened temple becomes an extended descent through lava, water, blades, collapsing floors, and dragon-themed mechanisms.",
      "China",
      "O templo aberto se torna uma longa descida por lava, água, lâminas, pisos que desabam e mecanismos com tema de dragão.",
      3
    ),
    level(
      16,
      "Floating Islands",
      "Realm beyond the Temple of Xian",
      "Lara pursues Bartoli across impossible jade islands inhabited by animated stone warriors.",
      "Reino além do Templo de Xian",
      "Lara persegue Bartoli por ilhas impossíveis de jade, habitadas por guerreiros de pedra animados.",
      3
    ),
    level(
      17,
      "The Dragon's Lair",
      "Temple of Xian",
      "Lara fights Marco Bartoli's dragon form and must remove the Dagger from his body to end the transformation.",
      "Templo de Xian",
      "Lara enfrenta a forma de dragão de Marco Bartoli e precisa retirar o Punhal de seu corpo para encerrar a transformação.",
      0
    ),
    level(
      18,
      "Home Sweet Home",
      "Croft Manor, England",
      "A short playable epilogue in which surviving Fiamma Nera members attack Lara at home.",
      "Mansão Croft, Inglaterra",
      "Um epílogo jogável curto no qual membros sobreviventes da Fiamma Nera atacam Lara em casa.",
      0
    )
  ],
  characters: [
    {
      slug: "lara-croft",
      name: "Lara Croft",
      description:
        "British adventurer pursuing the Dagger of Xian before it can be used by the Fiamma Nera.",
      role: "PROTAGONIST",
      order: 1,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Lara Croft",
          description:
            "Aventureira britânica que procura o Punhal de Xian antes que ele seja usado pela Fiamma Nera."
        }
      }
    },
    {
      slug: "marco-bartoli",
      name: "Marco Bartoli",
      description:
        "Leader of the Fiamma Nera and principal antagonist, determined to complete his father Gianni's search for the Dagger.",
      role: "ANTAGONIST",
      order: 2,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Marco Bartoli",
          description:
            "Líder da Fiamma Nera e principal antagonista, decidido a concluir a busca de seu pai Gianni pelo Punhal."
        }
      }
    },
    {
      slug: "brother-chan",
      name: "Brother Chan Barkhang",
      description:
        "Warrior monk captured on the offshore rig who explains the Seraph's connection to Barkhang Monastery and the Talion.",
      role: "SUPPORTING",
      order: 3,
      status: "CONFIRMED",
      note: "The original English credits identify the role as Chan Barkhang; dialogue introduces him as Brother Chan Barkhang.",
      translations: {
        pt: {
          name: "Brother Chan Barkhang",
          description:
            "Monge guerreiro capturado na plataforma petrolífera que explica a ligação do Serafim com o Monastério Barkhang e o Talion."
        }
      }
    },
    {
      slug: "winston-smith",
      name: "Winston",
      description:
        "Lara's elderly butler, introduced in the expanded Croft Manor training level and programmed to follow her with a tea tray.",
      role: "SUPPORTING",
      order: 4,
      status: "CONFIRMED",
      note: "The shipped game and credits use Winston. The surname Smith comes from later material and is not used here.",
      translations: {
        pt: {
          name: "Winston",
          description:
            "Mordomo idoso de Lara, apresentado no treinamento ampliado da Mansão Croft e programado para segui-la com uma bandeja de chá."
        }
      }
    },
    {
      slug: "claudio-fiamma-nera",
      name: "Claudio",
      description:
        "Fiamma Nera cultist confronted at the Temple of Xian doors; his notebook directs Lara to Via Caravelli in Venice.",
      role: "MERCENARY",
      order: 5,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Claudio",
          description:
            "Cultista da Fiamma Nera enfrentado diante das portas do Templo de Xian; seu notebook direciona Lara à Via Caravelli, em Veneza."
        }
      }
    },
    {
      slug: "fabio-fiamma-nera",
      name: "Fabio",
      description:
        "Bartoli's talkative seaplane co-pilot, heard questioning the search for Gianni's wreck before discovering Lara aboard.",
      role: "MERCENARY",
      order: 6,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Fabio",
          description:
            "Copiloto falante do hidroavião de Bartoli, ouvido questionando a busca pelo naufrágio de Gianni antes de descobrir Lara a bordo."
        }
      }
    },
    {
      slug: "eros-fiamma-nera",
      name: "Eros",
      description:
        "Fiamma Nera mechanic aboard Bartoli's seaplane who strikes Lara with a spanner after she is discovered in the cargo hold.",
      role: "MERCENARY",
      order: 7,
      status: "CONFIRMED",
      note: "Eros is named in the shipped scene transcript but is not assigned a separate performer in the preserved English voice credits.",
      translations: {
        pt: {
          name: "Eros",
          description:
            "Mecânico da Fiamma Nera no hidroavião de Bartoli que atinge Lara com uma chave depois que ela é descoberta no compartimento de carga."
        }
      }
    },
    {
      slug: "gianni-bartoli",
      name: "Gianni Bartoli",
      description:
        "Marco's deceased father and former Fiamma Nera leader, whose ship Maria Doria sank with the Seraph aboard.",
      role: "HISTORICAL",
      order: 8,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Gianni Bartoli",
          description:
            "Pai falecido de Marco e antigo líder da Fiamma Nera, cujo navio Maria Doria afundou com o Serafim a bordo."
        }
      }
    },
    {
      slug: "dragon-emperor",
      name: "Dragon Emperor",
      description:
        "Ancient Chinese ruler transformed by the Dagger of Xian and defeated when a warrior monk removed it from his body.",
      role: "HISTORICAL",
      order: 9,
      status: "QUALIFIED",
      note: "The shipped cinematic does not speak his name. A preserved Core Design transcript identifies him as Qin Shi Huang; current official lore uses Dragon Emperor.",
      translations: {
        pt: {
          name: "Imperador Dragão",
          description:
            "Antigo governante chinês transformado pelo Punhal de Xian e derrotado quando um monge guerreiro retirou a arma de seu corpo."
        }
      }
    }
  ],
  locations: [
    {
      slug: "croft-manor-england",
      name: "Croft Manor",
      description:
        "Lara's English home, used both as the optional training area and as the setting of the playable epilogue.",
      kind: "TRAINING",
      order: 1,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Mansão Croft",
          description:
            "Residência inglesa de Lara, usada tanto como área opcional de treinamento quanto como cenário do epílogo jogável."
        }
      }
    },
    {
      slug: "great-wall-temple-of-xian",
      name: "Great Wall and Temple of Xian",
      description:
        "The Chinese stronghold where the Dagger was sealed and where Lara's journey begins and returns for its climax.",
      kind: "CAMPAIGN_REGION",
      order: 2,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Grande Muralha e Templo de Xian",
          description:
            "Fortaleza chinesa onde o Punhal foi selado e à qual a jornada de Lara retorna para o clímax."
        }
      }
    },
    {
      slug: "venice-via-caravelli",
      name: "Venice and Via Caravelli",
      description:
        "Canals, Bartoli's hideout, and an abandoned opera house controlled by the Fiamma Nera.",
      kind: "CAMPAIGN_REGION",
      order: 3,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Veneza e Via Caravelli",
          description:
            "Canais, o esconderijo de Bartoli e uma casa de ópera abandonada sob controle da Fiamma Nera."
        }
      }
    },
    {
      slug: "offshore-rig-adriatic",
      name: "Offshore rig",
      description:
        "Fiamma Nera industrial base above the Maria Doria wreck and staging point for the cult's salvage operation.",
      kind: "CAMPAIGN_REGION",
      order: 4,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Plataforma petrolífera",
          description:
            "Base industrial da Fiamma Nera sobre o naufrágio do Maria Doria e ponto de apoio da operação de salvamento do culto."
        }
      }
    },
    {
      slug: "maria-doria-wreck",
      name: "Maria Doria wreck",
      description:
        "Sunken ocean liner carrying Gianni Bartoli's remains and the Seraph, explored through four connected levels.",
      kind: "CAMPAIGN_REGION",
      order: 5,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Naufrágio do Maria Doria",
          description:
            "Transatlântico afundado que guarda os restos de Gianni Bartoli e o Serafim, explorado em quatro níveis conectados."
        }
      }
    },
    {
      slug: "tibetan-foothills",
      name: "Tibetan Foothills",
      description:
        "Snowbound route between Lara's crashed seaplane and Barkhang Monastery.",
      kind: "CAMPAIGN_REGION",
      order: 6,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Colinas Tibetanas",
          description:
            "Rota nevada entre o hidroavião acidentado de Lara e o Monastério Barkhang."
        }
      }
    },
    {
      slug: "barkhang-monastery",
      name: "Barkhang Monastery",
      description:
        "Tibetan monastery whose warrior monks protect the catacombs leading to the Talion.",
      kind: "CAMPAIGN_REGION",
      order: 7,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Monastério Barkhang",
          description:
            "Monastério tibetano cujos monges guerreiros protegem as catacumbas que levam ao Talion."
        }
      }
    },
    {
      slug: "floating-islands-xian",
      name: "Floating Islands",
      description:
        "A supernatural jade realm beyond the Temple of Xian, inspired by Chinese myths and mirage-like islands.",
      kind: "CAMPAIGN_REGION",
      order: 8,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Ilhas Flutuantes",
          description:
            "Um reino sobrenatural de jade além do Templo de Xian, inspirado em mitos chineses e ilhas semelhantes a miragens."
        }
      }
    }
  ],
  artifacts: [
    {
      slug: "dagger-of-xian",
      name: "Dagger of Xian",
      description:
        "Ancient Chinese blade that transforms a believer who plunges it into their heart into a dragon.",
      role: "Central artifact and source of the dragon transformation",
      order: 1,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Punhal de Xian",
          description:
            "Lâmina chinesa antiga que transforma em dragão quem acredita em seu poder e a crava no próprio coração."
        }
      }
    },
    {
      slug: "seraph-tr2",
      name: "Seraph",
      description:
        "Ornate key recovered from the Maria Doria that opens the sealed catacombs beneath Barkhang Monastery.",
      role: "Key to the Catacombs of the Talion",
      order: 2,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Serafim",
          description:
            "Chave ornamentada recuperada do Maria Doria que abre as catacumbas seladas sob o Monastério Barkhang."
        }
      }
    },
    {
      slug: "talion-tr2",
      name: "Talion",
      description:
        "Sacred key guarded beneath Barkhang and used to open the entrance to the Temple of Xian.",
      role: "Key to the Temple of Xian",
      order: 3,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Talion",
          description:
            "Chave sagrada protegida sob Barkhang e usada para abrir a entrada do Templo de Xian."
        }
      }
    }
  ],
  weapons: [
    {
      slug: "dual-pistols",
      name: "Dual pistols",
      description: "Lara's standard paired sidearms and default weapon.",
      ammunitionType: "UNLIMITED",
      ammunitionNote: "Unlimited ammunition",
      order: 1,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Pistolas duplas",
          description: "Armas duplas padrão de Lara e armamento inicial."
        }
      }
    },
    {
      slug: "shotgun",
      name: "Shotgun",
      description: "Powerful close-range firearm using individual shells.",
      ammunitionType: "FINITE",
      ammunitionNote: "Finite shells",
      order: 2,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Escopeta",
          description: "Arma potente de curto alcance que usa cartuchos."
        }
      }
    },
    {
      slug: "automatic-pistols",
      name: "Automatic Pistols",
      description:
        "Paired rapid-fire handguns that replace the Magnums from the first game.",
      ammunitionType: "FINITE",
      ammunitionNote: "Finite clips",
      order: 3,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Pistolas automáticas",
          description:
            "Pistolas duplas de tiro rápido que substituem as Magnums do primeiro jogo."
        }
      }
    },
    {
      slug: "dual-uzis",
      name: "Dual Uzis",
      description: "Paired submachine guns with a high rate of fire.",
      ammunitionType: "FINITE",
      ammunitionNote: "Finite clips",
      order: 4,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Uzis duplas",
          description: "Submetralhadoras duplas com alta cadência de tiro."
        }
      }
    },
    {
      slug: "harpoon-gun",
      name: "Harpoon Gun",
      description:
        "Underwater weapon used against divers and aquatic predators.",
      ammunitionType: "FINITE",
      ammunitionNote:
        "Finite harpoons; the weapon must be reloaded after four shots",
      order: 5,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Arpão",
          description:
            "Arma subaquática usada contra mergulhadores e predadores aquáticos."
        }
      }
    },
    {
      slug: "m16",
      name: "M16",
      description:
        "Two-handed rifle effective at longer ranges when Lara is stationary.",
      ammunitionType: "FINITE",
      ammunitionNote: "Finite clips",
      order: 6,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "M16",
          description:
            "Rifle de duas mãos eficiente a longa distância quando Lara está parada."
        }
      }
    },
    {
      slug: "grenade-launcher",
      name: "Grenade Launcher",
      description:
        "Explosive heavy weapon with a slow projectile and wide blast.",
      ammunitionType: "FINITE",
      ammunitionNote: "Finite grenades",
      order: 7,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Lançador de granadas",
          description:
            "Arma explosiva pesada, com projétil lento e ampla área de impacto."
        }
      }
    }
  ],
  enemies: [
    [
      "tigers",
      "Tigers",
      "Tigres",
      "Predators encountered in China.",
      "Predadores encontrados na China.",
      "WILDLIFE"
    ],
    [
      "ravens",
      "Ravens",
      "Corvos",
      "Aggressive birds found around the Great Wall.",
      "Aves agressivas encontradas na Grande Muralha.",
      "WILDLIFE"
    ],
    [
      "spiders",
      "Spiders",
      "Aranhas",
      "Small venomous enemies in caves and ruins.",
      "Pequenos inimigos venenosos em cavernas e ruínas.",
      "WILDLIFE"
    ],
    [
      "giant-spiders",
      "Giant spiders",
      "Aranhas gigantes",
      "Oversized spiders found near the Temple of Xian.",
      "Aranhas enormes encontradas perto do Templo de Xian.",
      "SUPERNATURAL"
    ],
    [
      "tyrannosaur-tr2",
      "Tyrannosaur",
      "Tiranossauro",
      "Hidden dinosaur encountered in the Great Wall caves.",
      "Dinossauro oculto encontrado nas cavernas da Grande Muralha.",
      "DINOSAUR"
    ],
    [
      "dobermanns",
      "Dobermanns",
      "Dobermanns",
      "Guard dogs used by the Fiamma Nera.",
      "Cães de guarda usados pela Fiamma Nera.",
      "WILDLIFE"
    ],
    [
      "rats-tr2",
      "Rats",
      "Ratos",
      "Vermin found in Venice and the shipwreck.",
      "Animais encontrados em Veneza e no naufrágio.",
      "WILDLIFE"
    ],
    [
      "fiamma-nera-members",
      "Fiamma Nera members",
      "Membros da Fiamma Nera",
      "Armed cultists using clubs, knives, pistols, shotguns, automatic weapons, and flamethrowers.",
      "Cultistas armados com bastões, facas, pistolas, escopetas, armas automáticas e lança-chamas.",
      "HUMAN"
    ],
    [
      "scuba-divers",
      "Scuba divers",
      "Mergulhadores",
      "Armed Fiamma Nera divers operating around the rig and wreck.",
      "Mergulhadores armados da Fiamma Nera que operam perto da plataforma e do naufrágio.",
      "HUMAN"
    ],
    [
      "barracudas",
      "Barracudas",
      "Barracudas",
      "Fast aquatic predators found near the wreck.",
      "Predadores aquáticos rápidos encontrados perto do naufrágio.",
      "WILDLIFE"
    ],
    [
      "great-white-sharks",
      "Great white sharks",
      "Tubarões-brancos",
      "Large aquatic predators in the Adriatic section.",
      "Grandes predadores aquáticos na seção do Adriático.",
      "WILDLIFE"
    ],
    [
      "moray-eels",
      "Moray eels",
      "Moreias",
      "Stationary aquatic predators attacking from holes in the wreck.",
      "Predadores aquáticos estacionários que atacam de buracos no naufrágio.",
      "WILDLIFE"
    ],
    [
      "eagles-tr2",
      "Eagles",
      "Águias",
      "Birds attacking across the Tibetan foothills.",
      "Aves que atacam nas colinas tibetanas.",
      "WILDLIFE"
    ],
    [
      "snow-leopards",
      "Snow leopards",
      "Leopardos-das-neves",
      "Feline predators in Tibet.",
      "Predadores felinos no Tibete.",
      "WILDLIFE"
    ],
    [
      "snowmobile-riders",
      "Snowmobile riders",
      "Pilotos de snowmobile",
      "Armed Fiamma Nera riders pursuing Lara in Tibet.",
      "Pilotos armados da Fiamma Nera que perseguem Lara no Tibete.",
      "HUMAN"
    ],
    [
      "yetis",
      "Yetis",
      "Yetis",
      "Powerful humanoid creatures imprisoned beneath Barkhang.",
      "Criaturas humanoides poderosas aprisionadas sob Barkhang.",
      "SUPERNATURAL"
    ],
    [
      "white-tigers",
      "White tigers",
      "Tigres brancos",
      "Rare pale tigers found in the Tibetan chapter.",
      "Tigres claros raros encontrados no capítulo tibetano.",
      "WILDLIFE"
    ],
    [
      "guardian-of-talion",
      "Guardian of the Talion",
      "Guardião do Talion",
      "Giant bird-like guardian fought in the Ice Palace.",
      "Guardião gigante semelhante a uma ave enfrentado no Ice Palace.",
      "BOSS"
    ],
    [
      "xian-stone-warriors",
      "Xian stone warriors",
      "Guerreiros de pedra de Xian",
      "Animated sword- and spear-bearing statues of the Floating Islands.",
      "Estátuas animadas, armadas com espadas e lanças, nas Ilhas Flutuantes.",
      "SUPERNATURAL"
    ],
    [
      "marco-bartoli-dragon",
      "Marco Bartoli — dragon form",
      "Marco Bartoli — forma de dragão",
      "Final transformed opponent; removing the Dagger prevents his revival and ends the battle.",
      "Adversário final transformado; retirar o Punhal impede que ele reviva e encerra a batalha.",
      "BOSS"
    ]
  ].map(
    ([slug, name, ptName, description, ptDescription, category], order) => ({
      slug,
      name,
      description,
      category: category as GameArchiveInput["enemies"][number]["category"],
      order: order + 1,
      status: "CONFIRMED" as const,
      translations: {
        pt: { name: ptName, description: ptDescription }
      }
    })
  ),
  credits: [
    { role: "Lead Programmer", names: ["Gavin Rummery"] },
    { role: "Programmers", names: ["Andrew Howe", "Jason Gosling"] },
    { role: "Animators", names: ["Stewart Atkinson", "Joss Charmet"] },
    { role: "Level Designers", names: ["Neal Boyd", "Heather Gibson"] },
    { role: "FMV Sequences", names: ["Peter Barnard", "David Reading"] },
    {
      role: "Additional Artwork",
      names: [
        "Peter Duncan",
        "Richard Morton",
        "Lee Pullen",
        "Andy Sandham",
        "Christian Russel"
      ]
    },
    { role: "Music & Sound Effects", names: ["Nathan McCree"] },
    { role: "Script", names: ["Vicky Arnold"] },
    { role: "Special Thanks", names: ["Judith Gibbins"] },
    { role: "Producer", names: ["Troy Horton"] },
    { role: "Executive Producer", names: ["Jeremy H. Smith"] },
    {
      role: "English Voice Actors",
      names: [
        "Judith Gibbins — Lara Croft",
        "Simon Greenall — Marco Bartoli",
        "Massimo Marinoni — Chan Barkhang, Fabio and Claudio",
        "Nathan McCree — Winston"
      ]
    }
  ],
  contentRatings: [
    {
      board: "ESRB",
      rating: "T",
      descriptors: ["Animated Blood", "Animated Violence"],
      status: "CONFIRMED",
      note: "Descriptors follow the current official franchise product page."
    }
  ],
  sources: [
    {
      key: "official-game-page",
      title: "Tomb Raider II — official franchise product page",
      url: "https://www.tombraider.com/products/games/tomb-raider-ii",
      type: "OFFICIAL"
    },
    {
      key: "original-pc-manual",
      title: "Tomb Raider II PC Manual",
      url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/225300/manuals/manual.pdf?t=1729010173",
      type: "PRIMARY_DOCUMENT"
    },
    {
      key: "eidos-shipping-release",
      title:
        "Eidos press release — Tomb Raider II now shipping (November 24, 1997)",
      url: "https://core-design.com/article48.html",
      type: "PRESERVED_PRIMARY_MATERIAL"
    },
    {
      key: "core-transcript-credits",
      title: "Core Design archive — Tomb Raider II transcripts and credits",
      url: "https://core-design.com/goodies_tr2_transcripts.html",
      type: "PRESERVED_PRIMARY_MATERIAL"
    },
    {
      key: "official-dagger-lore",
      title: "Tomb Raider Remastered Lore: The Dagger of Xian",
      url: "https://www.tombraider.com/news/video-games/tomb-raider-remastered-lore-the-dagger-of-xian",
      type: "OFFICIAL_RETROSPECTIVE"
    },
    {
      key: "official-fiamma-lore",
      title: "Tomb Raider I-III Remastered Lore: Fiamma Nera",
      url: "https://www.tombraider.com/news/video-games/tomb-raider-i-iii-remastered-lore-fiamma-nera",
      type: "OFFICIAL_RETROSPECTIVE"
    },
    {
      key: "official-classic-mechanics",
      title:
        "10 Things You Need to Know Before Playing Classic Era Tomb Raider",
      url: "https://www.tombraider.com/news/video-games/10-things-you-need-to-know-before-playing-classic-era-tomb-raider",
      type: "OFFICIAL_RETROSPECTIVE"
    },
    {
      key: "official-bonus-levels",
      title: "Tomb Raider I-III Remastered: Bonus Levels",
      url: "https://www.tombraider.com/news/video-games/tomb-raider-i-iii-remastered-bonus-levels",
      type: "OFFICIAL_RETROSPECTIVE"
    },
    {
      key: "official-women-of-core",
      title: "Celebrating Vicky Arnold, Heather Stevens, and Susie Hamilton",
      url: "https://www.tombraider.com/news/community/celebrating-vicky-arnold-heather-stevens-and-susie-hamilton",
      type: "OFFICIAL_RETROSPECTIVE"
    },
    {
      key: "core-team-interview",
      title: "Tomb Raider II — Team Interview (1997)",
      url: "https://core-design.com/interview4.html",
      type: "DEVELOPER_INTERVIEW"
    },
    {
      key: "heather-gibson-interview",
      title: "Interview with Tomb Raider level designer Heather Gibson",
      url: "https://core-design.com/interview3.html",
      type: "DEVELOPER_INTERVIEW"
    },
    {
      key: "development-build-analysis",
      title: "TRII/TRIII Source Code: In-Depth Development Build Analysis",
      url: "https://core-design.com/article84.html",
      type: "PRIMARY_DRAFT_DOCUMENT"
    },
    {
      key: "sony-exclusivity-release",
      title:
        "Sony and Eidos console exclusivity press release (September 18, 1997)",
      url: "https://core-design.com/article45.html",
      type: "PRESERVED_PRIMARY_MATERIAL"
    },
    {
      key: "stella-walkthrough",
      title: "Tomb Raider II game info and walkthrough — Stella's Site",
      url: "https://tombraiders.net/stella/tomb2.html",
      type: "VERIFIED_COMMUNITY_REFERENCE"
    },
    {
      key: "wikiraider-reference",
      title: "Tomb Raider II — WikiRaider",
      url: "https://tombraiderwiki.org/index.php/Tomb_Raider_2",
      type: "SECONDARY_REFERENCE"
    },
    {
      key: "square-enix-sales",
      title:
        "Square Enix Corporate Strategy Meeting — Eidos integration (2009)",
      url: "https://www.hd.square-enix.com/eng/ir/pdf/20090422_02en.pdf",
      type: "PRIMARY_DOCUMENT"
    }
  ],
  facts: [
    {
      slug: "original-year",
      order: 1,
      status: "CONFIRMED",
      claim: "The original Tomb Raider II was released in 1997.",
      verdict:
        "Confirmed. Core Design developed it for Windows PC and PlayStation; Macintosh and later ports followed separately.",
      sourceKeys: [
        "official-game-page",
        "eidos-shipping-release",
        "original-pc-manual"
      ],
      translations: {
        pt: {
          claim: "O Tomb Raider II original foi lançado em 1997.",
          verdict:
            "Confirmado. A Core Design o desenvolveu para PC Windows e PlayStation; Macintosh e portes posteriores vieram separadamente."
        }
      }
    },
    {
      slug: "release-date-conflict",
      order: 2,
      status: "SOURCE_CONFLICT",
      claim:
        "November 21, 1997 is the single uncontested worldwide release date.",
      verdict:
        "Source conflict. Several specialist databases use November 21, while the current official page and a contemporary Eidos shipping release use November 24. This archive uses November 24 as the canonical date and preserves regional dates separately.",
      sourceKeys: [
        "official-game-page",
        "eidos-shipping-release",
        "wikiraider-reference"
      ],
      translations: {
        pt: {
          claim:
            "21 de novembro de 1997 é a única data mundial de lançamento, sem contestação.",
          verdict:
            "Conflito entre fontes. Diversas bases especializadas usam 21 de novembro, enquanto a página oficial atual e um comunicado contemporâneo da Eidos usam 24 de novembro. O arquivo adota 24 de novembro como data canônica e preserva datas regionais separadamente."
        }
      }
    },
    {
      slug: "level-and-secret-count",
      order: 3,
      status: "CONFIRMED",
      claim:
        "The game contains 18 story levels, one training level, and 48 secrets.",
      verdict:
        "Confirmed. The first 16 campaign levels contain three dragon statuettes each. The Dragon's Lair and Home Sweet Home contain no secrets; Lara's Home is separate training.",
      sourceKeys: ["stella-walkthrough", "wikiraider-reference"],
      translations: {
        pt: {
          claim:
            "O jogo contém 18 níveis de história, um nível de treinamento e 48 segredos.",
          verdict:
            "Confirmado. Os primeiros 16 níveis da campanha têm três estatuetas de dragão cada. The Dragon's Lair e Home Sweet Home não têm segredos; Lara's Home é um treinamento separado."
        }
      }
    },
    {
      slug: "all-secrets-reward",
      order: 4,
      status: "MYTH",
      claim:
        "Collecting all 48 secrets unlocks a bonus level in the original campaign.",
      verdict:
        "False. Collecting all three dragons in a level grants supplies, but the base game has no all-secrets bonus level. The Golden Mask expansion uses its own twelve secrets to unlock Nightmare in Vegas.",
      sourceKeys: ["stella-walkthrough", "official-bonus-levels"],
      translations: {
        pt: {
          claim:
            "Coletar os 48 segredos libera um nível bônus na campanha original.",
          verdict:
            "Falso. Coletar os três dragões de um nível concede suprimentos, mas o jogo-base não tem fase bônus por todos os segredos. A expansão The Golden Mask usa seus próprios doze segredos para liberar Nightmare in Vegas."
        }
      }
    },
    {
      slug: "golden-mask-level-count",
      order: 5,
      status: "CONFIRMED",
      claim: "The Golden Mask has only four playable levels.",
      verdict:
        "Incomplete. It has four main levels plus the unlockable Nightmare in Vegas, for five playable levels in total.",
      sourceKeys: ["official-bonus-levels", "stella-walkthrough"],
      translations: {
        pt: {
          claim: "The Golden Mask tem apenas quatro níveis jogáveis.",
          verdict:
            "Incompleto. São quatro níveis principais mais Nightmare in Vegas, liberado por segredos, totalizando cinco níveis jogáveis."
        }
      }
    },
    {
      slug: "retail-rocket-launcher",
      order: 6,
      status: "DRAFT_ONLY",
      claim: "The released Tomb Raider II arsenal includes a rocket launcher.",
      verdict:
        "False for the retail game. Rocket-launcher strings survive in development material and some promotional copy, but the shipped heavy weapon is the grenade launcher. The retail game has seven weapons.",
      sourceKeys: [
        "development-build-analysis",
        "original-pc-manual",
        "wikiraider-reference"
      ],
      translations: {
        pt: {
          claim:
            "O arsenal lançado de Tomb Raider II inclui um lança-foguetes.",
          verdict:
            "Falso no jogo de varejo. Referências ao lança-foguetes sobrevivem em material de desenvolvimento e em alguns textos promocionais, mas a arma pesada lançada é o lançador de granadas. O jogo final tem sete armas."
        }
      }
    },
    {
      slug: "save-crystals",
      order: 7,
      status: "DRAFT_ONLY",
      claim: "The original PlayStation release requires save crystals.",
      verdict:
        "False for the shipped game. Save-crystal strings appear in a development build; the released Tomb Raider II allows manual saving without collectible crystals.",
      sourceKeys: [
        "development-build-analysis",
        "official-classic-mechanics",
        "stella-walkthrough"
      ],
      translations: {
        pt: {
          claim: "A versão original de PlayStation exige cristais para salvar.",
          verdict:
            "Falso no jogo lançado. Textos de cristais aparecem em uma versão de desenvolvimento; Tomb Raider II final permite salvamento manual sem cristais colecionáveis."
        }
      }
    },
    {
      slug: "winston-freezer-intent",
      order: 8,
      status: "MYTH",
      claim:
        "Locking Winston in the freezer was a designed joke with a special frozen reaction.",
      verdict:
        "False. Players can trap him, but level designer Heather Gibson said she had not anticipated it and would have added a special reaction if she had.",
      sourceKeys: ["heather-gibson-interview"],
      translations: {
        pt: {
          claim:
            "Trancar Winston na câmara fria foi uma piada planejada, com uma reação especial de congelamento.",
          verdict:
            "Falso. Os jogadores conseguem prendê-lo, mas a designer Heather Gibson disse que não havia previsto isso e teria acrescentado uma reação especial se tivesse previsto."
        }
      }
    },
    {
      slug: "barkhang-monks",
      order: 9,
      status: "CONFIRMED",
      claim: "The Barkhang monks are ordinary enemies who always attack Lara.",
      verdict:
        "False. They fight the Fiamma Nera and remain friendly to Lara unless the player attacks a monk, after which the monks retaliate.",
      sourceKeys: ["heather-gibson-interview", "stella-walkthrough"],
      translations: {
        pt: {
          claim:
            "Os monges de Barkhang são inimigos comuns que sempre atacam Lara.",
          verdict:
            "Falso. Eles combatem a Fiamma Nera e permanecem amigáveis com Lara, salvo se o jogador atacar um monge; nesse caso, os demais revidam."
        }
      }
    },
    {
      slug: "vehicles-first-appearance",
      order: 10,
      status: "CONFIRMED",
      claim:
        "Tomb Raider II is the first released series game with player-controlled vehicles.",
      verdict:
        "Confirmed. Lara drives a motorboat in Venice and snowmobiles in Tibet; vehicles were a stated new feature of the sequel.",
      sourceKeys: [
        "original-pc-manual",
        "core-team-interview",
        "stella-walkthrough"
      ],
      translations: {
        pt: {
          claim:
            "Tomb Raider II é o primeiro jogo lançado da série com veículos controlados pelo jogador.",
          verdict:
            "Confirmado. Lara pilota uma lancha em Veneza e snowmobiles no Tibete; os veículos foram apresentados como novidade da sequência."
        }
      }
    },
    {
      slug: "playable-ponytail",
      order: 11,
      status: "CONFIRMED",
      claim:
        "Tomb Raider II introduced Lara's animated ponytail during gameplay.",
      verdict:
        "Confirmed. The 1997 team described it among the sequel's visible technical improvements; the first game's playable model did not include it.",
      sourceKeys: [
        "eidos-shipping-release",
        "core-team-interview",
        "heather-gibson-interview"
      ],
      translations: {
        pt: {
          claim:
            "Tomb Raider II introduziu o rabo-de-cavalo animado de Lara durante o jogo.",
          verdict:
            "Confirmado. A equipe de 1997 o descreveu entre as melhorias técnicas visíveis da sequência; o modelo jogável do primeiro jogo não o possuía."
        }
      }
    },
    {
      slug: "dragon-defeat-condition",
      order: 12,
      status: "CONFIRMED",
      claim:
        "Shooting the dragon until it falls is enough to finish the final battle.",
      verdict:
        "False. Lara must approach the fallen dragon and remove the Dagger of Xian; otherwise it revives and the fight continues.",
      sourceKeys: ["core-transcript-credits", "stella-walkthrough"],
      translations: {
        pt: {
          claim:
            "Atirar no dragão até ele cair é suficiente para concluir a batalha final.",
          verdict:
            "Falso. Lara precisa se aproximar do dragão caído e retirar o Punhal de Xian; caso contrário, ele revive e a luta continua."
        }
      }
    },
    {
      slug: "emperor-name",
      order: 13,
      status: "QUALIFIED",
      claim:
        "The shipped game explicitly names the ancient ruler Qin Shi Huang.",
      verdict:
        "Not in spoken dialogue. A preserved Core Design transcript labels him Qin Shi Huang, while current official lore calls him the Dragon Emperor. The archive keeps the attribution qualified.",
      sourceKeys: ["core-transcript-credits", "official-dagger-lore"],
      translations: {
        pt: {
          claim:
            "O jogo lançado identifica explicitamente o antigo governante como Qin Shi Huang.",
          verdict:
            "Não nos diálogos falados. Uma transcrição preservada da Core Design o identifica como Qin Shi Huang, enquanto o material oficial atual usa Imperador Dragão. O arquivo mantém essa atribuição qualificada."
        }
      }
    },
    {
      slug: "fiamma-nera-meaning",
      order: 14,
      status: "CONFIRMED",
      claim: "Fiamma Nera is an Italian name meaning Black Flame.",
      verdict:
        "Confirmed. It is the secret society led first by Gianni Bartoli and then by Marco Bartoli.",
      sourceKeys: ["official-fiamma-lore"],
      translations: {
        pt: {
          claim: "Fiamma Nera é um nome italiano que significa Chama Negra.",
          verdict:
            "Confirmado. É a sociedade secreta liderada primeiro por Gianni Bartoli e depois por Marco Bartoli."
        }
      }
    },
    {
      slug: "console-exclusivity",
      order: 15,
      status: "CONFIRMED",
      claim:
        "Tomb Raider II was commercially released for Sega Saturn alongside PlayStation.",
      verdict:
        "False. In September 1997 Sony and Eidos announced that PlayStation would be the only console for Tomb Raider releases; Tomb Raider II shipped on PlayStation and Windows, not Saturn.",
      sourceKeys: ["sony-exclusivity-release", "eidos-shipping-release"],
      translations: {
        pt: {
          claim:
            "Tomb Raider II foi lançado comercialmente para Sega Saturn junto com o PlayStation.",
          verdict:
            "Falso. Em setembro de 1997, Sony e Eidos anunciaram que o PlayStation seria o único console dos lançamentos de Tomb Raider; Tomb Raider II saiu para PlayStation e Windows, não para Saturn."
        }
      }
    },
    {
      slug: "sales-total",
      order: 16,
      status: "QUALIFIED",
      claim: "Tomb Raider II sold exactly 6.8 million copies worldwide.",
      verdict:
        "Qualified. A 2009 Square Enix corporate chart places the title close to 7 million units, supporting the widely reported 6.8 million figure, but the chart is rounded and should not be presented as a precise audited final total.",
      sourceKeys: ["square-enix-sales"],
      translations: {
        pt: {
          claim:
            "Tomb Raider II vendeu exatamente 6,8 milhões de cópias no mundo.",
          verdict:
            "Qualificado. Um gráfico corporativo da Square Enix de 2009 coloca o título perto de 7 milhões, sustentando o número amplamente informado de 6,8 milhões, mas o gráfico é arredondado e não deve ser apresentado como total final auditado e exato."
        }
      }
    }
  ],
  relatedReleases: [
    {
      title: "Tomb Raider II Gold: The Golden Mask",
      year: 1999,
      relationship:
        "PC and Macintosh expansion with four main levels and the unlockable Nightmare in Vegas bonus level",
      order: 1,
      translations: {
        pt: {
          relationship:
            "Expansão para PC e Macintosh com quatro níveis principais e a fase bônus desbloqueável Nightmare in Vegas"
        }
      }
    },
    {
      title: "Tomb Raider III: Adventures of Lara Croft",
      year: 1998,
      relationship: "Direct Core Design sequel released the following year",
      order: 2,
      translations: {
        pt: {
          relationship:
            "Sequência direta da Core Design lançada no ano seguinte"
        }
      }
    },
    {
      title: "Tomb Raider I-III Remastered Starring Lara Croft",
      year: 2024,
      relationship:
        "Remastered collection containing Tomb Raider II and The Golden Mask",
      order: 3,
      translations: {
        pt: {
          relationship:
            "Coletânea remasterizada contendo Tomb Raider II e The Golden Mask"
        }
      }
    }
  ]
} satisfies GameArchiveInput;
