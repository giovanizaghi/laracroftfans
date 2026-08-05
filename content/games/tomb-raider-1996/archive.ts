import type { GameArchiveInput } from "../../archive-types";

export const gameArchive = {
  scope:
    "Original Tomb Raider released in 1996. Later ports, expansions, remakes, remasters, and continuity additions are identified separately.",
  developer: "Core Design Ltd.",
  originalPublisher: "Eidos Interactive Limited",
  genre: "Action-adventure / 3D platformer",
  perspective: "Third-person",
  gameMode: "Single-player",
  engine: "Custom proprietary Core Design 3D engine",
  images: {
    overview: "/images/midas-palace.png",
    story: "/images/lara-hero.png",
    gameplay: "/images/midas-palace.png",
    development: "",
    legacy: ""
  },
  counts: {
    campaignLevels: 15,
    trainingLevels: 1,
    secrets: 45,
    weapons: 4
  },
  releases: [
    {
      platform: "Sega Saturn",
      region: "Europe",
      date: "1996-10-25",
      status: "CONFIRMED"
    },
    {
      platform: "Sega Saturn",
      region: "North America",
      date: "1996-11-14",
      status: "DOCUMENTED_SECONDARY"
    },
    {
      platform: "PlayStation",
      region: "North America",
      date: "1996-11-14",
      status: "DOCUMENTED_SECONDARY"
    },
    {
      platform: "MS-DOS",
      region: "North America",
      date: "1996-11-14",
      status: "DOCUMENTED_SECONDARY"
    },
    {
      platform: "PlayStation",
      region: "Europe",
      date: "1996-11-22",
      status: "DOCUMENTED_SECONDARY"
    },
    {
      platform: "MS-DOS",
      region: "Europe",
      date: "1996-11-22",
      status: "DOCUMENTED_SECONDARY"
    },
    {
      platform: "Sega Saturn",
      region: "Japan",
      date: "1997-01-24",
      regionalTitle: "Tomb Raiders",
      status: "DOCUMENTED_SECONDARY"
    },
    {
      platform: "PlayStation",
      region: "Japan",
      date: "1997-02-14",
      regionalTitle: "Tomb Raiders",
      status: "DOCUMENTED_SECONDARY"
    }
  ],
  levels: [
    {
      order: 0,
      name: "Lara's Home",
      region: "Training",
      description:
        "Optional tutorial in Croft Manor introducing movement, vaulting, jumping, and swimming.",
      secrets: 0,
      training: true,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Lara's Home",
          region: "Treinamento",
          description:
            "Tutorial opcional na Mansão Croft que apresenta movimento, escalada, saltos e natação."
        }
      }
    },
    {
      order: 1,
      name: "Caves",
      region: "Peru",
      description:
        "Lara enters the mountain caves beyond the sealed Peruvian doorway.",
      secrets: 3,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Caves",
          region: "Peru",
          description:
            "Lara entra nas cavernas da montanha além da porta peruana selada."
        }
      }
    },
    {
      order: 2,
      name: "City of Vilcabamba",
      region: "Peru",
      description:
        "An underground settlement with pools, huts, gates, and a temple passage.",
      secrets: 3,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "City of Vilcabamba",
          region: "Peru",
          description:
            "Um assentamento subterrâneo com piscinas, cabanas, portões e uma passagem de templo."
        }
      }
    },
    {
      order: 3,
      name: "Lost Valley",
      region: "Peru",
      description:
        "A hidden valley inhabited by raptors and a Tyrannosaurus rex, centered on three machine cogs.",
      secrets: 5,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Lost Valley",
          region: "Peru",
          description:
            "Um vale oculto habitado por raptores e um Tyrannosaurus rex, estruturado em torno de três engrenagens."
        }
      }
    },
    {
      order: 4,
      name: "Tomb of Qualopec",
      region: "Peru",
      description:
        "Qualopec's tomb contains the first piece of the Atlantean Scion.",
      secrets: 3,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Tomb of Qualopec",
          region: "Peru",
          description:
            "A tumba de Qualopec contém a primeira parte do Scion atlante."
        }
      }
    },
    {
      order: 5,
      name: "St. Francis' Folly",
      region: "Greece",
      description:
        "A vertical monastery ruin leads to challenge rooms dedicated to four classical deities.",
      secrets: 4,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "St. Francis' Folly",
          region: "Grécia",
          description:
            "Uma ruína monástica vertical leva a salas de desafio dedicadas a quatro divindades clássicas."
        }
      }
    },
    {
      order: 6,
      name: "Colosseum",
      region: "Greece",
      description:
        "Lara crosses an underground arena complex occupied by lions, gorillas, and Pierre.",
      secrets: 3,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Colosseum",
          region: "Grécia",
          description:
            "Lara atravessa um complexo de arena subterrâneo ocupado por leões, gorilas e Pierre."
        }
      }
    },
    {
      order: 7,
      name: "Palace Midas",
      region: "Greece",
      description:
        "The ruined palace uses five lead bars, a lethal golden hand, fire trials, and timed doors.",
      imageUrl: "/images/midas-palace.png",
      secrets: 3,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Palace Midas",
          region: "Grécia",
          description:
            "O palácio em ruínas usa cinco barras de chumbo, uma mão dourada letal, provas de fogo e portas cronometradas."
        }
      }
    },
    {
      order: 8,
      name: "The Cistern",
      region: "Greece",
      description:
        "A flooded reservoir changes navigable routes as Lara raises and lowers the water level.",
      secrets: 3,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "The Cistern",
          region: "Grécia",
          description:
            "Um reservatório inundado muda as rotas navegáveis enquanto Lara eleva e reduz o nível da água."
        }
      }
    },
    {
      order: 9,
      name: "Tomb of Tihocan",
      region: "Greece",
      description:
        "The Greek expedition ends at Tihocan's tomb and the second Scion fragment.",
      secrets: 2,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Tomb of Tihocan",
          region: "Grécia",
          description:
            "A expedição grega termina na tumba de Tihocan e no segundo fragmento do Scion."
        }
      }
    },
    {
      order: 10,
      name: "City of Khamoon",
      region: "Egypt",
      description:
        "Lara enters the buried city of Khamoon while pursuing Natla's remaining team.",
      secrets: 3,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "City of Khamoon",
          region: "Egito",
          description:
            "Lara entra na cidade soterrada de Khamoon enquanto persegue a equipe restante de Natla."
        }
      }
    },
    {
      order: 11,
      name: "Obelisk of Khamoon",
      region: "Egypt",
      description:
        "Four ceremonial artifacts unlock the route deeper into the Egyptian ruins.",
      secrets: 3,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Obelisk of Khamoon",
          region: "Egito",
          description:
            "Quatro artefatos cerimoniais liberam a rota para as partes mais profundas das ruínas egípcias."
        }
      }
    },
    {
      order: 12,
      name: "Sanctuary of the Scion",
      region: "Egypt",
      description:
        "The final Scion fragment is recovered after the sphinx and sanctuary ascent.",
      secrets: 1,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Sanctuary of the Scion",
          region: "Egito",
          description:
            "O fragmento final do Scion é recuperado após a esfinge e a subida pelo santuário."
        }
      }
    },
    {
      order: 13,
      name: "Natla's Mines",
      region: "Lost island",
      description:
        "Disarmed after Natla steals the Scion, Lara crosses the mines and defeats three mercenaries.",
      secrets: 3,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Natla's Mines",
          region: "Ilha perdida",
          description:
            "Desarmada após Natla roubar o Scion, Lara atravessa as minas e derrota três mercenários."
        }
      }
    },
    {
      order: 14,
      name: "Atlantis",
      region: "Great Pyramid",
      description:
        "Lara ascends the organic interior of the Great Pyramid and confronts her Atlantean double.",
      secrets: 3,
      training: false,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Atlantis",
          region: "Grande Pirâmide",
          description:
            "Lara sobe pelo interior orgânico da Grande Pirâmide e enfrenta sua cópia atlante."
        }
      }
    },
    {
      order: 15,
      name: "The Great Pyramid",
      region: "Great Pyramid",
      description:
        "Lara defeats Natla's Creation and Natla, destroys the Scion, and escapes the collapsing pyramid.",
      secrets: 3,
      training: false,
      status: "CONFIRMED",
      note: "The third secret may fail to register in some original versions.",
      translations: {
        pt: {
          name: "The Great Pyramid",
          region: "Grande Pirâmide",
          description:
            "Lara derrota a Criação de Natla e a própria Natla, destrói o Scion e escapa da pirâmide em colapso.",
          note: "O terceiro segredo pode não ser registrado em algumas versões originais."
        }
      }
    }
  ],
  characters: [
    {
      slug: "lara-croft",
      name: "Lara Croft",
      description:
        "British adventurer hired to recover the three pieces of the Atlantean Scion.",
      imageUrl: "/images/lara-hero.png",
      role: "PROTAGONIST",
      order: 1,
      status: "CONFIRMED",
      note: "The manual supplies her pre-game biography; the campaign gives no exact age or birth date.",
      translations: {
        pt: {
          name: "Lara Croft",
          description:
            "Aventureira britânica contratada para recuperar as três partes do Scion atlante."
        }
      }
    },
    {
      slug: "jacqueline-natla",
      name: "Jacqueline Natla",
      description:
        "Ancient Atlantean ruler, head of Natla Technologies, and architect of the Scion expedition.",
      role: "ANTAGONIST",
      order: 2,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Jacqueline Natla",
          description:
            "Antiga governante atlante, chefe da Natla Technologies e arquiteta da expedição pelo Scion."
        }
      }
    },
    {
      slug: "larson",
      name: "Larson",
      description:
        "Natla's American mercenary and Lara's prior acquaintance, encountered in Calcutta, Peru, and Egypt.",
      role: "MERCENARY",
      order: 3,
      status: "CONFIRMED",
      note: "The surname Conway is not used in the 1996 English game.",
      translations: {
        pt: {
          name: "Larson",
          description:
            "Mercenário americano de Natla e conhecido anterior de Lara, encontrado em Calcutá, no Peru e no Egito."
        }
      }
    },
    {
      slug: "pierre-dupont",
      name: "Pierre DuPont",
      description:
        "French rival raider hired by Natla to recover Tihocan's Scion fragment.",
      role: "RIVAL",
      order: 4,
      status: "CONFIRMED",
      note: "His full surname is spoken by Larson in the original dialogue.",
      translations: {
        pt: {
          name: "Pierre DuPont",
          description:
            "Explorador francês rival contratado por Natla para recuperar o fragmento do Scion de Tihocan."
        }
      }
    },
    {
      slug: "qualopec",
      name: "Qualopec",
      description:
        "One of Atlantis's three rulers and guardian of the Scion fragment hidden in Peru.",
      role: "HISTORICAL",
      order: 5,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Qualopec",
          description:
            "Um dos três governantes de Atlântida e guardião do fragmento do Scion oculto no Peru."
        }
      }
    },
    {
      slug: "tihocan",
      name: "Tihocan",
      description:
        "One of Atlantis's three rulers, entombed beneath St. Francis' Folly with a Scion fragment.",
      role: "HISTORICAL",
      order: 6,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Tihocan",
          description:
            "Um dos três governantes de Atlântida, sepultado sob St. Francis' Folly com um fragmento do Scion."
        }
      }
    },
    {
      slug: "brother-herbert",
      name: "Brother Herbert",
      description:
        "Monk whose 1573 diary identifies Tihocan's tomb; heard through Lara's reading.",
      role: "HISTORICAL",
      order: 7,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Irmão Herbert",
          description:
            "Monge cujo diário de 1573 identifica a tumba de Tihocan; é ouvido na leitura feita por Lara."
        }
      }
    },
    {
      slug: "peruvian-guide",
      name: "Peruvian guide",
      description:
        "Guide who brings Lara to the Peruvian cave entrance and is killed by wolves.",
      role: "SUPPORTING",
      order: 8,
      status: "CONFIRMED",
      note: "The surviving script calls him Carlos, but the released scene never speaks his name.",
      translations: {
        pt: {
          name: "Guia peruano",
          description:
            "Guia que conduz Lara à entrada das cavernas peruanas e é morto por lobos."
        }
      }
    },
    {
      slug: "cowboy",
      name: "Cowboy",
      description:
        "One of Natla's three armed followers confronted in the mines.",
      role: "MERCENARY",
      order: 9,
      status: "QUALIFIED",
      note: "Descriptive original-era name; later material adds other names.",
      translations: {
        pt: {
          name: "Cowboy",
          description:
            "Um dos três seguidores armados de Natla enfrentados nas minas."
        }
      }
    },
    {
      slug: "bald-man",
      name: "Bald Man",
      description:
        "One of Natla's three armed followers confronted in the mines.",
      role: "MERCENARY",
      order: 10,
      status: "QUALIFIED",
      note: "Descriptive original-era name; later material adds other names.",
      translations: {
        pt: {
          name: "Bald Man",
          description:
            "Um dos três seguidores armados de Natla enfrentados nas minas."
        }
      }
    },
    {
      slug: "skateboard-kid",
      name: "Skateboard Kid",
      description:
        "One of Natla's armed followers, fought while riding a skateboard in the mines.",
      role: "MERCENARY",
      order: 11,
      status: "QUALIFIED",
      note: "Descriptive original-era name; later material adds other names.",
      translations: {
        pt: {
          name: "Skateboard Kid",
          description:
            "Um dos seguidores armados de Natla, enfrentado sobre um skate nas minas."
        }
      }
    },
    {
      slug: "atlantean-doppelganger",
      name: "Atlantean Doppelgänger",
      description:
        "Skinless Atlantean creature that mirrors Lara's movements inside the Great Pyramid.",
      role: "CREATURE",
      order: 12,
      status: "CONFIRMED",
      note: "Bacon Lara is a fan nickname, not its original in-game name.",
      translations: {
        pt: {
          name: "Doppelgänger atlante",
          description:
            "Criatura atlante sem pele que imita os movimentos de Lara dentro da Grande Pirâmide."
        }
      }
    },
    {
      slug: "natlas-creation",
      name: "Natla's Creation",
      description:
        "Giant legless Atlantean mutant fought at the beginning of the final level.",
      role: "CREATURE",
      order: 13,
      status: "QUALIFIED",
      note: "Descriptive reference name for the giant mutant.",
      translations: {
        pt: {
          name: "Criação de Natla",
          description:
            "Mutante atlante gigante e sem pernas enfrentado no início do nível final."
        }
      }
    }
  ],
  locations: [
    {
      slug: "laras-home",
      name: "Lara's Home",
      description: "Croft Manor training area, separate from the campaign.",
      kind: "TRAINING",
      order: 1,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Casa de Lara",
          description:
            "Área de treinamento da Mansão Croft, separada da campanha."
        }
      }
    },
    {
      slug: "calcutta",
      name: "Calcutta",
      description:
        "Hotel setting where Larson introduces Natla's contract to Lara.",
      kind: "CINEMATIC",
      order: 2,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Calcutá",
          description:
            "Hotel onde Larson apresenta a Lara o contrato oferecido por Natla."
        }
      }
    },
    {
      slug: "seattle",
      name: "Seattle",
      description: "Location of Natla Technologies in the 1996 story.",
      kind: "CINEMATIC",
      order: 3,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Seattle",
          description: "Localização da Natla Technologies na história de 1996."
        }
      }
    },
    {
      slug: "peru",
      name: "Peru",
      description:
        "Campaign region containing the mountain caves, Vilcabamba, Lost Valley, and Qualopec's tomb.",
      kind: "CAMPAIGN_REGION",
      order: 4,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Peru",
          description:
            "Região da campanha com as cavernas, Vilcabamba, Lost Valley e a tumba de Qualopec."
        }
      }
    },
    {
      slug: "greece",
      name: "Greece",
      description:
        "Campaign region extending from St. Francis' Folly to Tihocan's tomb.",
      imageUrl: "/images/midas-palace.png",
      kind: "CAMPAIGN_REGION",
      order: 5,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Grécia",
          description:
            "Região da campanha que se estende de St. Francis' Folly até a tumba de Tihocan."
        }
      }
    },
    {
      slug: "egypt",
      name: "Egypt",
      description:
        "Campaign region containing Khamoon and the sanctuary of the final Scion fragment.",
      kind: "CAMPAIGN_REGION",
      order: 6,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Egito",
          description:
            "Região da campanha com Khamoon e o santuário do fragmento final do Scion."
        }
      }
    },
    {
      slug: "lost-island-great-pyramid",
      name: "Lost island and Great Pyramid",
      description:
        "Final campaign region containing Natla's mines and the Atlantean pyramid.",
      kind: "CAMPAIGN_REGION",
      order: 7,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Ilha perdida e Grande Pirâmide",
          description:
            "Região final da campanha com as minas de Natla e a pirâmide atlante."
        }
      }
    }
  ],
  artifacts: [
    {
      slug: "atlantean-scion",
      name: "Atlantean Scion",
      description:
        "Three-part Atlantean artifact that stores knowledge and powers the Great Pyramid.",
      role: "Central quest artifact and power source",
      order: 1,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Scion atlante",
          description:
            "Artefato atlante dividido em três partes que armazena conhecimento e alimenta a Grande Pirâmide."
        }
      }
    }
  ],
  weapons: [
    {
      slug: "dual-pistols",
      name: "Dual pistols",
      description: "Lara's starting sidearms.",
      ammunitionType: "UNLIMITED",
      ammunitionNote: "Unlimited ammunition",
      order: 1,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Pistolas duplas",
          description: "Armas iniciais de Lara."
        }
      }
    },
    {
      slug: "shotgun",
      name: "Shotgun",
      description: "Close-range firearm found during the expedition.",
      ammunitionType: "FINITE",
      ammunitionNote: "Finite shells",
      order: 2,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Escopeta",
          description: "Arma de curto alcance encontrada durante a expedição."
        }
      }
    },
    {
      slug: "dual-magnums",
      name: "Dual Magnums",
      description: "More powerful paired handguns with finite ammunition.",
      ammunitionType: "FINITE",
      ammunitionNote: "Finite clips",
      order: 3,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Magnums duplas",
          description: "Pistolas duplas mais potentes com munição limitada."
        }
      }
    },
    {
      slug: "dual-uzis",
      name: "Dual Uzis",
      description: "Rapid-fire paired submachine guns with finite ammunition.",
      ammunitionType: "FINITE",
      ammunitionNote: "Finite clips",
      order: 4,
      status: "CONFIRMED",
      translations: {
        pt: {
          name: "Uzis duplas",
          description:
            "Submetralhadoras duplas de tiro rápido com munição limitada."
        }
      }
    }
  ],
  enemies: [
    [
      "bats",
      "Bats",
      "Morcegos",
      "Flying wildlife found in ruins.",
      "Fauna voadora encontrada nas ruínas.",
      "WILDLIFE"
    ],
    [
      "wolves",
      "Wolves",
      "Lobos",
      "Pack predators encountered in Peru.",
      "Predadores em matilha encontrados no Peru.",
      "WILDLIFE"
    ],
    [
      "bears",
      "Bears",
      "Ursos",
      "Large predators encountered in Peru.",
      "Grandes predadores encontrados no Peru.",
      "WILDLIFE"
    ],
    [
      "rats",
      "Rats",
      "Ratos",
      "Small vermin found around water and ruins.",
      "Pequenos animais encontrados perto da água e das ruínas.",
      "WILDLIFE"
    ],
    [
      "crocodiles",
      "Crocodiles",
      "Crocodilos",
      "Aquatic and land predators.",
      "Predadores aquáticos e terrestres.",
      "WILDLIFE"
    ],
    [
      "lions",
      "Lions and lionesses",
      "Leões e leoas",
      "Felines occupying the Greek ruins.",
      "Felinos que ocupam as ruínas gregas.",
      "WILDLIFE"
    ],
    [
      "gorillas",
      "Gorillas",
      "Gorilas",
      "Powerful primates found in Greece.",
      "Primatas poderosos encontrados na Grécia.",
      "WILDLIFE"
    ],
    [
      "raptors",
      "Raptors",
      "Raptores",
      "Dinosaurs inhabiting Peru's Lost Valley.",
      "Dinossauros que habitam Lost Valley, no Peru.",
      "DINOSAUR"
    ],
    [
      "tyrannosaurus-rex",
      "Tyrannosaurus rex",
      "Tyrannosaurus rex",
      "Large dinosaur in Lost Valley; it can be killed with any weapon.",
      "Grande dinossauro de Lost Valley; pode ser morto com qualquer arma.",
      "DINOSAUR"
    ],
    [
      "atlantean-mutants",
      "Atlantean mummies and mutants",
      "Múmias e mutantes atlantes",
      "Organic guardians encountered in Egypt and Atlantis.",
      "Guardiões orgânicos encontrados no Egito e em Atlântida.",
      "ATLANTEAN"
    ],
    [
      "atlantean-centaurs",
      "Atlantean centaurs",
      "Centauros atlantes",
      "Projectile-firing Atlantean guardians.",
      "Guardiões atlantes que disparam projéteis.",
      "ATLANTEAN"
    ],
    [
      "atlantean-doppelganger",
      "Atlantean Doppelgänger",
      "Doppelgänger atlante",
      "A creature that mirrors Lara's movements.",
      "Criatura que imita os movimentos de Lara.",
      "ATLANTEAN"
    ],
    [
      "natla-mercenaries",
      "Natla's mercenaries",
      "Mercenários de Natla",
      "Larson, Pierre, and the armed followers working for Natla.",
      "Larson, Pierre e os seguidores armados que trabalham para Natla.",
      "HUMAN"
    ],
    [
      "natlas-creation",
      "Natla's Creation",
      "Criação de Natla",
      "Giant legless mutant in the final level.",
      "Mutante gigante e sem pernas do nível final.",
      "BOSS"
    ],
    [
      "jacqueline-natla",
      "Jacqueline Natla",
      "Jacqueline Natla",
      "Final armed and winged opponent after the Scion is destroyed.",
      "Adversária final armada e alada após a destruição do Scion.",
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
    { role: "Lead Programmer", names: ["Paul Douglas"] },
    { role: "Lead Graphic Artist", names: ["Toby Gard"] },
    { role: "Programmers", names: ["Jason Gosling", "Gavin Rummery"] },
    { role: "Graphic Artists", names: ["Heather Gibson", "Neal Boyd"] },
    {
      role: "Additional Programming",
      names: ["Derek Leigh-Gilchrist", "Andrew Howe", "Mansoor Nusrat"]
    },
    {
      role: "Additional Artwork",
      names: ["Lee Pullen", "Peter Barnard", "Stuart Atkinson", "Dave Pate"]
    },
    { role: "Music", names: ["Nathan McCree"] },
    { role: "Sound Effects", names: ["Martin Iveson"] },
    { role: "Script", names: ["Vicky Arnold"] },
    { role: "Original Concept", names: ["Toby Gard"] },
    { role: "Executive Producer", names: ["Jeremy H. Smith"] },
    { role: "English Voice — Lara Croft", names: ["Shelley Blond"] },
    { role: "English Voice — Brother Herbert", names: ["Nathan McCree"] }
  ],
  contentRatings: [
    {
      board: "ESRB",
      rating: "T",
      descriptors: ["Animated Blood", "Violence"],
      status: "CONFIRMED",
      note: "Descriptors follow the current official product listing."
    }
  ],
  sources: [
    {
      key: "official-game-page",
      title: "Tomb Raider (1996) — official franchise product page",
      url: "https://www.tombraider.com/products/games/tomb-raider-1996",
      type: "OFFICIAL"
    },
    {
      key: "original-pc-manual",
      title: "Tomb Raider PC Manual",
      url: "https://www.tombraiderchronicles.com/tr1/tomb-raider-i-pc-manual.pdf",
      type: "PRIMARY_DOCUMENT"
    },
    {
      key: "design-document-1-8",
      title: "Tomb Raider Game Design Document, version 1.8 (May 9, 1996)",
      url: "https://www.tombraiderchronicles.com/tr1/tomb-raider-game-design-document-1_8-1996.pdf",
      type: "PRIMARY_DRAFT_DOCUMENT"
    },
    {
      key: "core-transcript-credits",
      title: "Core Design archive — Tomb Raider transcripts and credits",
      url: "https://core-design.com/goodies_tr1_transcripts.html",
      type: "PRESERVED_PRIMARY_MATERIAL"
    },
    {
      key: "official-women-of-core",
      title: "Celebrating Vicky Arnold, Heather Stevens, and Susie Hamilton",
      url: "https://www.tombraider.com/news/community/celebrating-vicky-arnold-heather-stevens-and-susie-hamilton",
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
      key: "official-natla-technologies",
      title: "Tomb Raider Remastered Lore: Natla Technologies",
      url: "https://www.tombraider.com/news/video-games/tomb-raider-remastered-lore-natla-technologies",
      type: "OFFICIAL_RETROSPECTIVE"
    },
    {
      key: "official-atlantean-rulers",
      title: "Tomb Raider I-III Remastered Lore: The Three Rulers of Atlantis",
      url: "https://www.tombraider.com/news/video-games/tomb-raider-i-iii-remastered-lore-the-three-rulers-of-atlantis",
      type: "OFFICIAL_RETROSPECTIVE"
    },
    {
      key: "toby-gard-1998",
      title: "Interview with Toby Gard",
      url: "https://www.gamedeveloper.com/design/interview-with-toby-gard",
      type: "DEVELOPER_INTERVIEW"
    },
    {
      key: "stella-walkthrough",
      title: "Tomb Raider game info and walkthrough — Stella's Site",
      url: "https://tombraiders.net/stella/tomb1.html",
      type: "VERIFIED_COMMUNITY_REFERENCE"
    },
    {
      key: "release-dates-reference",
      title: "Tomb Raider release dates — WikiRaider",
      url: "https://tombraiderwiki.org/index.php/Tomb_Raider_Release_Dates",
      type: "SECONDARY_REFERENCE"
    },
    {
      key: "gamespot-review",
      title: "Tomb Raider Review",
      url: "https://www.gamespot.com/reviews/tomb-raider-review/1900-2549874/",
      type: "CONTEMPORARY_REVIEW"
    },
    {
      key: "metacritic",
      title: "Tomb Raider critic reviews",
      url: "https://www.metacritic.com/game/1300000022/",
      type: "REVIEW_AGGREGATE"
    }
  ],
  facts: [
    {
      slug: "original-title",
      order: 1,
      status: "CONFIRMED",
      claim: "The original retail title was Tomb Raider, not Tomb Raider I.",
      verdict:
        "Confirmed. Tomb Raider I and TR1 are later shorthand used to distinguish the game from sequels and the 2013 reboot.",
      sourceKeys: ["official-game-page", "original-pc-manual"],
      translations: {
        pt: {
          claim:
            "O título original de varejo era Tomb Raider, não Tomb Raider I.",
          verdict:
            "Confirmado. Tomb Raider I e TR1 são abreviações posteriores usadas para distingui-lo das sequências e do reboot de 2013."
        }
      }
    },
    {
      slug: "first-commercial-release",
      order: 2,
      status: "CONFIRMED",
      claim:
        "The first commercial release was the European Sega Saturn edition.",
      verdict:
        "Confirmed for October 25, 1996. PlayStation and MS-DOS editions followed in November.",
      sourceKeys: ["official-game-page", "release-dates-reference"],
      translations: {
        pt: {
          claim:
            "O primeiro lançamento comercial foi a edição europeia para Sega Saturn.",
          verdict:
            "Confirmado em 25 de outubro de 1996. As edições para PlayStation e MS-DOS vieram em novembro."
        }
      }
    },
    {
      slug: "level-and-secret-count",
      order: 3,
      status: "CONFIRMED",
      claim:
        "The game has 15 campaign levels, one training level, and 45 campaign secrets.",
      verdict:
        "Confirmed. Lara's Home is a separate training area and is not a sixteenth campaign level.",
      sourceKeys: ["stella-walkthrough"],
      translations: {
        pt: {
          claim:
            "O jogo tem 15 níveis de campanha, um nível de treinamento e 45 segredos na campanha.",
          verdict:
            "Confirmado. Lara's Home é uma área de treinamento separada, não o décimo sexto nível da campanha."
        }
      }
    },
    {
      slug: "t-rex-killable",
      order: 4,
      status: "CONFIRMED",
      claim: "The Tyrannosaurus rex can be killed in the original game.",
      verdict:
        "Confirmed. Lara's pistols have unlimited ammunition; avoiding the creature is a player choice.",
      sourceKeys: ["official-classic-mechanics", "stella-walkthrough"],
      translations: {
        pt: {
          claim: "O Tyrannosaurus rex pode ser morto no jogo original.",
          verdict:
            "Confirmado. As pistolas de Lara têm munição ilimitada; evitar a criatura é uma escolha do jogador."
        }
      }
    },
    {
      slug: "laras-age",
      order: 5,
      status: "QUALIFIED",
      claim: "Lara is 21 years old during the Scion expedition.",
      verdict:
        "Not supported. The manual gives no birth date; 21 is the age at which it says she left finishing school, followed by eight years of travel.",
      sourceKeys: ["original-pc-manual"],
      translations: {
        pt: {
          claim: "Lara tem 21 anos durante a expedição do Scion.",
          verdict:
            "Sem sustentação. O manual não dá data de nascimento; 21 é a idade em que ela deixou a finishing school, seguida por oito anos de viagens."
        }
      }
    },
    {
      slug: "lara-or-laura-cruz",
      order: 6,
      status: "SOURCE_CONFLICT",
      claim: "The prototype character was definitively named Laura Cruz.",
      verdict:
        "Source conflict. Core Design's May 1996 document says Lara Cruz, while a 2024 official retrospective says Laura Cruz. The early surname Cruz is certain.",
      sourceKeys: ["design-document-1-8", "official-women-of-core"],
      translations: {
        pt: {
          claim:
            "A personagem protótipo se chamava definitivamente Laura Cruz.",
          verdict:
            "Conflito entre fontes. O documento da Core Design de maio de 1996 usa Lara Cruz, enquanto uma retrospectiva oficial de 2024 usa Laura Cruz. O sobrenome inicial Cruz é certo."
        }
      }
    },
    {
      slug: "bust-mouse-slip",
      order: 7,
      status: "MYTH",
      claim: "A mouse slip accidentally increased Lara's bust by 150 percent.",
      verdict:
        "Myth. Toby Gard described the claim as a joke, not the production history of the model.",
      sourceKeys: ["toby-gard-1998"],
      translations: {
        pt: {
          claim:
            "Um movimento acidental do mouse aumentou o busto de Lara em 150%.",
          verdict:
            "Mito. Toby Gard descreveu a alegação como uma piada, não como a história de produção do modelo."
        }
      }
    },
    {
      slug: "playable-braid",
      order: 8,
      status: "CONFIRMED",
      claim: "The playable 1996 Lara model has an animated braid or ponytail.",
      verdict:
        "False for gameplay. The hairstyle appears in cinematics and artwork; an animated ponytail was implemented in Tomb Raider II.",
      sourceKeys: ["official-classic-mechanics", "official-women-of-core"],
      translations: {
        pt: {
          claim:
            "O modelo jogável de Lara em 1996 tem trança ou rabo-de-cavalo animado.",
          verdict:
            "Falso durante o jogo. O penteado aparece em cenas e ilustrações; o rabo-de-cavalo animado foi implementado em Tomb Raider II."
        }
      }
    },
    {
      slug: "character-surnames",
      order: 9,
      status: "CONFIRMED",
      claim:
        "Pierre's and Larson's expanded surnames both originate in later material.",
      verdict:
        "False. Pierre DuPont appears in original dialogue. Larson Conway does not; Conway is a later addition.",
      sourceKeys: ["core-transcript-credits"],
      translations: {
        pt: {
          claim:
            "Os sobrenomes expandidos de Pierre e Larson surgiram ambos em materiais posteriores.",
          verdict:
            "Falso. Pierre DuPont aparece no diálogo original. Larson Conway não; Conway é uma adição posterior."
        }
      }
    },
    {
      slug: "bacon-lara-name",
      order: 10,
      status: "FAN_TERM",
      claim:
        "Bacon Lara is the original in-game name of the Atlantean Doppelgänger.",
      verdict:
        "False. Bacon Lara is a fan nickname for the mirror-movement Atlantean creature.",
      sourceKeys: ["stella-walkthrough"],
      translations: {
        pt: {
          claim:
            "Bacon Lara é o nome original no jogo da Doppelgänger atlante.",
          verdict:
            "Falso. Bacon Lara é um apelido criado por fãs para a criatura atlante que imita movimentos."
        }
      }
    },
    {
      slug: "natla-release",
      order: 11,
      status: "CONFIRMED",
      claim:
        "The 1996 game leaves Natla's twentieth-century release unexplained.",
      verdict:
        "False. The opening shows the Trinity nuclear test releasing her from Atlantean imprisonment.",
      sourceKeys: ["core-transcript-credits", "official-natla-technologies"],
      translations: {
        pt: {
          claim:
            "O jogo de 1996 não explica a libertação de Natla no século XX.",
          verdict:
            "Falso. A abertura mostra o teste nuclear Trinity libertando-a de sua prisão atlante."
        }
      }
    },
    {
      slug: "natla-survives-ending",
      order: 12,
      status: "UNSUPPORTED",
      claim: "The original ending implies that Natla survives.",
      verdict:
        "Unsupported. Her later return belongs to the separate Legend, Anniversary, and Underworld continuity.",
      sourceKeys: ["core-transcript-credits", "official-natla-technologies"],
      translations: {
        pt: {
          claim: "O final original indica que Natla sobrevive.",
          verdict:
            "Sem sustentação. Seu retorno posterior pertence à continuidade separada de Legend, Anniversary e Underworld."
        }
      }
    },
    {
      slug: "design-document-canon",
      order: 13,
      status: "DRAFT_ONLY",
      claim:
        "Every enemy, biography, room, and line in the design documents is canon.",
      verdict:
        "False. Unused design-document material is production history unless it appears in the shipped game or manual.",
      sourceKeys: ["design-document-1-8", "original-pc-manual"],
      translations: {
        pt: {
          claim:
            "Todo inimigo, biografia, sala e diálogo dos documentos de design é cânone.",
          verdict:
            "Falso. Material não utilizado dos documentos é história de produção, salvo quando aparece no jogo lançado ou no manual."
        }
      }
    },
    {
      slug: "seven-million-sales",
      order: 14,
      status: "QUALIFIED",
      claim:
        "More than seven million copies is an audited original Eidos sales figure.",
      verdict:
        "Qualified. It is a widely repeated lifetime total, but should remain a later reported figure until an original audited statement is cited.",
      sourceKeys: ["official-game-page", "stella-walkthrough"],
      translations: {
        pt: {
          claim:
            "Mais de sete milhões de cópias é um número original auditado pela Eidos.",
          verdict:
            "Qualificado. É um total vitalício amplamente repetido, mas deve permanecer como número informado posteriormente até que haja uma fonte auditada original."
        }
      }
    }
  ],
  relatedReleases: [
    {
      title: "Tomb Raider: Unfinished Business",
      year: 1997,
      relationship: "Four-level PC expansion to the original game",
      order: 1,
      translations: {
        pt: { relationship: "Expansão de quatro níveis para PC" }
      }
    },
    {
      title: "Tomb Raider: Anniversary",
      year: 2007,
      relationship: "Reimagining in a separate continuity",
      order: 2,
      translations: {
        pt: { relationship: "Releitura em uma continuidade separada" }
      }
    },
    {
      title: "Tomb Raider I-III Remastered Starring Lara Croft",
      year: 2024,
      relationship:
        "Remastered collection containing Tomb Raider and Unfinished Business",
      order: 3,
      translations: {
        pt: {
          relationship:
            "Coletânea remasterizada contendo Tomb Raider e Unfinished Business"
        }
      }
    }
  ]
} satisfies GameArchiveInput;
