import type { GameArchiveInput } from "../../archive-types";

type LevelOptions = {
  training?: boolean;
  bonus?: boolean;
  note?: string;
  ptNote?: string;
};

const level = (
  order: number,
  name: string,
  region: string,
  description: string,
  ptRegion: string,
  ptDescription: string,
  secrets: number,
  options: LevelOptions = {}
): GameArchiveInput["levels"][number] => ({
  order,
  name,
  region,
  description,
  secrets,
  training: options.training ?? false,
  bonus: options.bonus ?? false,
  status: "CONFIRMED",
  note: options.note,
  translations: {
    pt: {
      name,
      region: ptRegion,
      description: ptDescription,
      note: options.ptNote
    }
  }
});

const character = (
  slug: string,
  name: string,
  description: string,
  ptName: string,
  ptDescription: string,
  role: GameArchiveInput["characters"][number]["role"],
  order: number,
  note?: string
): GameArchiveInput["characters"][number] => ({
  slug,
  name,
  description,
  role,
  order,
  status: "CONFIRMED",
  note,
  translations: {
    pt: { name: ptName, description: ptDescription }
  }
});

const location = (
  slug: string,
  name: string,
  description: string,
  ptName: string,
  ptDescription: string,
  kind: GameArchiveInput["locations"][number]["kind"],
  order: number,
  note?: string
): GameArchiveInput["locations"][number] => ({
  slug,
  name,
  description,
  kind,
  order,
  status: "CONFIRMED",
  note,
  translations: {
    pt: { name: ptName, description: ptDescription }
  }
});

const artifact = (
  slug: string,
  name: string,
  description: string,
  ptName: string,
  ptDescription: string,
  role: string,
  order: number,
  note?: string
): GameArchiveInput["artifacts"][number] => ({
  slug,
  name,
  description,
  role,
  order,
  status: "CONFIRMED",
  note,
  translations: {
    pt: { name: ptName, description: ptDescription }
  }
});

const weapon = (
  slug: string,
  name: string,
  description: string,
  ptName: string,
  ptDescription: string,
  ammunitionType: GameArchiveInput["weapons"][number]["ammunitionType"],
  ammunitionNote: string,
  order: number
): GameArchiveInput["weapons"][number] => ({
  slug,
  name,
  description,
  ammunitionType,
  ammunitionNote,
  order,
  status: "CONFIRMED",
  translations: {
    pt: { name: ptName, description: ptDescription }
  }
});

const enemy = (
  slug: string,
  name: string,
  description: string,
  ptName: string,
  ptDescription: string,
  category: GameArchiveInput["enemies"][number]["category"],
  order: number
): GameArchiveInput["enemies"][number] => ({
  slug,
  name,
  description,
  category,
  order,
  status: "CONFIRMED",
  translations: {
    pt: { name: ptName, description: ptDescription }
  }
});

export const gameArchive = {
  scope:
    "Original Tomb Raider III: Adventures of Lara Croft released in 1998. The 1999 Macintosh port, the 2000 The Lost Artifact expansion, digital reissues, and the 2024 remaster are identified separately.",
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
    campaignLevels: 19,
    trainingLevels: 1,
    bonusLevels: 1,
    secrets: 59,
    weapons: 8
  },
  releases: [
    {
      platform: "Windows",
      region: "Europe",
      date: "1998-11-20",
      status: "DOCUMENTED_SECONDARY",
      note: "Widely documented European retail date; the current official franchise page instead presents November 23 without a region split."
    },
    {
      platform: "PlayStation",
      region: "Europe",
      date: "1998-11-20",
      status: "DOCUMENTED_SECONDARY",
      note: "Widely documented European retail date; the current official franchise page instead presents November 23 without a region split."
    },
    {
      platform: "Windows",
      region: "North America",
      date: "1998-11-23",
      status: "CONFIRMED",
      note: "Canonical site date follows the current official product page. Specialist databases frequently place the North American release on November 24."
    },
    {
      platform: "PlayStation",
      region: "North America",
      date: "1998-11-23",
      status: "CONFIRMED",
      note: "Canonical site date follows the current official product page. Specialist databases frequently place the North American release on November 24."
    },
    {
      platform: "PlayStation",
      region: "Japan",
      date: "1999-03-04",
      regionalTitle: "Tomb Raider III",
      status: "DOCUMENTED_SECONDARY"
    },
    {
      platform: "Macintosh",
      region: "North America",
      date: "1999-10-22",
      status: "DOCUMENTED_SECONDARY",
      note: "Later conversion developed by Westlake Interactive and published by Aspyr; not one of the two original 1998 platforms."
    }
  ],
  characters: [
    character(
      "lara-croft",
      "Lara Croft",
      "British adventurer who begins by seeking the Infada Stone and then crosses three continents to recover the four meteorite artifacts before Willard can exploit them.",
      "Lara Croft",
      "Aventureira britânica que começa procurando a Pedra Infada e depois cruza três continentes para recuperar os quatro artefatos do meteorito antes que Willard possa explorá-los.",
      "PROTAGONIST",
      1
    ),
    character(
      "mark-willard",
      "Dr. Mark Willard",
      "Scottish scientist and head of RX-Tech who recruits Lara to recover the artifacts while concealing his plan to use the meteorite crater as a laboratory for accelerated evolution.",
      "Dr. Mark Willard",
      "Cientista escocês e chefe da RX-Tech que recruta Lara para recuperar os artefatos enquanto esconde seu plano de usar a cratera do meteorito como laboratório de evolução acelerada.",
      "ANTAGONIST",
      2
    ),
    character(
      "tony-rx-tech",
      "Tony",
      "RX-Tech researcher driven unstable near the Infada Stone; he embeds it in his chest and gains levitation and energy attacks before Lara defeats him in India.",
      "Tony",
      "Pesquisador da RX-Tech cuja mente se desestabiliza perto da Pedra Infada; ele a crava no peito e ganha levitação e ataques de energia antes de ser derrotado por Lara na Índia.",
      "ANTAGONIST",
      3
    ),
    character(
      "sophia-leigh",
      "Sophia Leigh",
      "Owner of SLinc who uses the Eye of Isis in experiments aimed at eternal beauty and immortality, discarding the disfigured survivors who become the Damned.",
      "Sophia Leigh",
      "Dona da SLinc que usa o Olho de Ísis em experimentos voltados à beleza eterna e à imortalidade, descartando os sobreviventes desfigurados que formam os Damned.",
      "ANTAGONIST",
      4
    ),
    character(
      "puna",
      "Puna",
      "South Pacific tribal leader who reclaimed the Ora Dagger and uses its energy shield, lightning, and creature-summoning powers against Lara.",
      "Puna",
      "Líder tribal do Pacífico Sul que recuperou o Punhal de Ora e usa seus poderes de escudo energético, raios e invocação de criaturas contra Lara.",
      "ANTAGONIST",
      5
    ),
    character(
      "bob-the-damned",
      "Bob",
      "Leader of the Damned and former SLinc laboratory assistant. Sophia's experiments left him disfigured and apparently unable to die; he helps Lara in exchange for embalming fluid.",
      "Bob",
      "Líder dos Damned e ex-assistente de laboratório da SLinc. Os experimentos de Sophia o deixaram desfigurado e aparentemente incapaz de morrer; ele ajuda Lara em troca de fluido de embalsamamento.",
      "SUPPORTING",
      6,
      "The preserved descriptive transcript identifies the gang leader as Robert Smith; current official lore calls him Geordie Bob. The shipped dialogue uses Bob."
    ),
    character(
      "john-sophia-mercenary",
      "John",
      "Mercenary employed by Sophia who ambushes Lara at St Paul's, reveals his employer under interrogation, and is knocked away by the cathedral bell.",
      "John",
      "Mercenário empregado por Sophia que embosca Lara em São Paulo, revela sua contratante durante o interrogatório e é lançado para longe pelo sino da catedral.",
      "MERCENARY",
      7
    ),
    character(
      "wounded-australian-commander",
      "Wounded Australian Commander",
      "Unnamed survivor held by the South Pacific tribe. He explains the aircraft crash, warns of disappearances in the jungle, and gives Lara the map needed to cross the swamp.",
      "Comandante australiano ferido",
      "Sobrevivente sem nome mantido pela tribo do Pacífico Sul. Ele explica a queda da aeronave, alerta sobre desaparecimentos na selva e entrega a Lara o mapa necessário para cruzar o pântano.",
      "SUPPORTING",
      8,
      "He is not Commander Bishop: Bishop's named key is found on a corpse in Crash Site."
    ),
    character(
      "randy-rx-tech",
      "Randy",
      "Member of Willard's three-person field team in India, mentioned by Tony and found dead with Rory inside the temple ruins.",
      "Randy",
      "Integrante da equipe de campo de três pessoas enviada por Willard à Índia, citado por Tony e encontrado morto com Rory dentro das ruínas do templo.",
      "SUPPORTING",
      9
    ),
    character(
      "rory-rx-tech",
      "Rory",
      "Member of Willard's Indian expedition, mentioned in Tony's camp dialogue and discovered dead alongside Randy in the temple.",
      "Rory",
      "Integrante da expedição de Willard à Índia, citado no diálogo do acampamento de Tony e encontrado morto ao lado de Randy no templo.",
      "SUPPORTING",
      10
    ),
    character(
      "billy-rx-tech",
      "Billy",
      "RX-Tech worker who appears briefly during the modern Antarctic excavation shown in the introductory cinematic.",
      "Billy",
      "Funcionário da RX-Tech que aparece brevemente durante a escavação moderna na Antártida mostrada na abertura.",
      "SUPPORTING",
      11
    ),
    character(
      "winston-smith",
      "Winston",
      "Lara's butler in the Croft Manor tutorial. He follows the assault course and wears protective gear when Lara enters the shooting range.",
      "Winston",
      "Mordomo de Lara no tutorial da Mansão Croft. Ele acompanha a pista de obstáculos e usa equipamento de proteção quando Lara entra no estande de tiro.",
      "SUPPORTING",
      12,
      "The shipped credits and dialogue use Winston; the surname Smith comes from later material and is not asserted here."
    ),
    character(
      "stephen-barr",
      "Stephen Barr",
      "Only surviving member of the five Beagle sailors in the official retrospective. He returned to London and sold the Eye of Isis out of superstition.",
      "Stephen Barr",
      "Único sobrevivente dos cinco marinheiros do Beagle segundo o retrospecto oficial. Ele voltou a Londres e vendeu o Olho de Ísis por superstição.",
      "HISTORICAL",
      13
    ),
    character(
      "paul-caulfield",
      "Paul Caulfield",
      "Beagle sailor killed while escaping Tinnos in 1834. RX-Tech later finds his grave near the Antarctic impact site.",
      "Paul Caulfield",
      "Marinheiro do Beagle morto ao escapar de Tinnos em 1834. A RX-Tech mais tarde encontra sua sepultura perto do local de impacto na Antártida.",
      "HISTORICAL",
      14
    ),
    character(
      "smythe-beagle",
      "Smythe",
      "Beagle sailor killed at Kuru after the villagers recognize the stolen artifacts; his Ora Dagger remains in the South Pacific.",
      "Smythe",
      "Marinheiro do Beagle morto em Kuru depois que os habitantes reconhecem os artefatos roubados; seu Punhal de Ora permanece no Pacífico Sul.",
      "HISTORICAL",
      15
    ),
    character(
      "henderson-beagle",
      "Henderson",
      "One of the five Beagle sailors who remove the four artifacts from Tinnos in the 1834 opening history.",
      "Henderson",
      "Um dos cinco marinheiros do Beagle que retiram os quatro artefatos de Tinnos na história de abertura de 1834.",
      "HISTORICAL",
      16
    ),
    character(
      "jonson-beagle",
      "Jonson",
      "One of the five Beagle sailors associated with the theft and later dispersal of the meteorite artifacts.",
      "Jonson",
      "Um dos cinco marinheiros do Beagle associados ao roubo e à posterior dispersão dos artefatos do meteorito.",
      "HISTORICAL",
      17,
      "The official retrospective spells the name Jonson. It is retained rather than silently changed to Johnson."
    ),
    character(
      "commander-bishop",
      "Commander Bishop",
      "Deceased Australian officer identified by the key found near the crashed aircraft; his key is required to activate the plane's turret.",
      "Comandante Bishop",
      "Oficial australiano morto identificado pela chave encontrada perto da aeronave; sua chave é necessária para ativar a torre do avião.",
      "SUPPORTING",
      18
    ),
    character(
      "lieutenant-tuckerman",
      "Lieutenant Tuckerman",
      "Deceased Australian officer whose named key is recovered at Crash Site and used with Bishop's key to operate the aircraft turret.",
      "Tenente Tuckerman",
      "Oficial australiano morto cuja chave identificada é recuperada em Crash Site e usada com a de Bishop para operar a torre da aeronave.",
      "SUPPORTING",
      19
    ),
    character(
      "charles-darwin",
      "Charles Darwin",
      "Historical naturalist referenced by the game: the five sailors served aboard HMS Beagle and collected specimens for his expedition, but Darwin does not appear on screen.",
      "Charles Darwin",
      "Naturalista histórico citado pelo jogo: os cinco marinheiros serviam no HMS Beagle e coletavam espécimes para sua expedição, mas Darwin não aparece em cena.",
      "HISTORICAL",
      20
    )
  ],
  locations: [
    location(
      "croft-manor-surrey",
      "Croft Manor",
      "Lara's estate near Wimbledon in Surrey, expanded into an assault course, firing range, quad-bike track, aquarium, and trophy room for the optional tutorial.",
      "Mansão Croft",
      "Propriedade de Lara perto de Wimbledon, em Surrey, ampliada com pista de obstáculos, estande de tiro, circuito de quadriciclo, aquário e sala de troféus para o tutorial opcional.",
      "TRAINING",
      1
    ),
    location(
      "uttar-pradesh-india",
      "Uttar Pradesh, India",
      "Jungle, Hindu temple ruins, the River Ganges, and the Caves of Kaliya form the fixed opening expedition for the Infada Stone.",
      "Uttar Pradesh, Índia",
      "Selva, ruínas de um templo hindu, o rio Ganges e as Cavernas de Kaliya formam a expedição inicial obrigatória pela Pedra Infada.",
      "CAMPAIGN_REGION",
      2
    ),
    location(
      "groom-lake-nevada",
      "Groom Lake and the Nevada Desert",
      "Canyons and industrial fencing conceal the military route that ends with Lara's capture and entry into the Area 51 complex.",
      "Groom Lake e o deserto de Nevada",
      "Cânions e cercas industriais escondem a rota militar que termina com a captura de Lara e sua entrada no complexo da Área 51.",
      "CAMPAIGN_REGION",
      3
    ),
    location(
      "high-security-compound",
      "High Security Compound",
      "Military prison where Lara begins without weapons and can release inmates who attack the guards.",
      "Complexo de alta segurança",
      "Prisão militar onde Lara começa sem armas e pode libertar detentos que atacam os guardas.",
      "CAMPAIGN_REGION",
      4
    ),
    location(
      "area-51",
      "Area 51",
      "Secret Nevada installation containing missiles, hangars, alien specimens, a UFO, and Element 115.",
      "Área 51",
      "Instalação secreta em Nevada com mísseis, hangares, espécimes alienígenas, um OVNI e o Elemento 115.",
      "CAMPAIGN_REGION",
      5
    ),
    location(
      "kuru-south-pacific",
      "Kuru, South Pacific Islands",
      "Remote island region containing a coastal settlement, swamps, dinosaurs, Madubu Gorge, and Puna's temple.",
      "Kuru, Ilhas do Pacífico Sul",
      "Região insular remota com aldeia costeira, pântanos, dinossauros, o desfiladeiro Madubu e o templo de Puna.",
      "CAMPAIGN_REGION",
      6,
      "Core Design's level overview uses Kuru. A current official retrospective spells the settlement Kuro; the source difference is preserved."
    ),
    location(
      "south-pacific-crash-site",
      "Australian Aircraft Crash Site",
      "Jungle wreck where surviving soldiers and dinosaurs fight around the aircraft, keys, and its operable rear cannon.",
      "Local da queda da aeronave australiana",
      "Destroços na selva onde soldados sobreviventes e dinossauros lutam ao redor da aeronave, das chaves e de seu canhão traseiro operacional.",
      "CAMPAIGN_REGION",
      7
    ),
    location(
      "london-tr3",
      "London",
      "Rainy rooftops, St Paul's, Aldwych station, sewers, the Natural History Museum, and modern offices form the Eye of Isis expedition.",
      "Londres",
      "Telhados sob chuva, São Paulo, a estação Aldwych, esgotos, o Museu de História Natural e escritórios modernos formam a expedição pelo Olho de Ísis.",
      "CAMPAIGN_REGION",
      8
    ),
    location(
      "slinc-headquarters",
      "SLinc Headquarters",
      "Sophia Leigh's cosmetics company and laboratory, reached after Lara deals with the Damned and crosses the museum route.",
      "Sede da SLinc",
      "Empresa de cosméticos e laboratório de Sophia Leigh, alcançados depois que Lara negocia com os Damned e atravessa a rota do museu.",
      "CAMPAIGN_REGION",
      9
    ),
    location(
      "rx-tech-antarctica",
      "RX-Tech Antarctic Site",
      "Willard's base, ship, mine network, and laboratories around the ancient meteorite impact zone.",
      "Instalação antártica da RX-Tech",
      "Base, navio, rede de minas e laboratórios de Willard ao redor da antiga zona de impacto do meteorito.",
      "CAMPAIGN_REGION",
      10
    ),
    location(
      "lost-city-of-tinnos",
      "Lost City of Tinnos",
      "Ancient Polynesian settlement beneath Antarctica, built around the meteorite crater and abandoned after mutations and violent storms.",
      "Cidade Perdida de Tinnos",
      "Antigo assentamento polinésio sob a Antártida, construído ao redor da cratera do meteorito e abandonado após mutações e tempestades violentas.",
      "CAMPAIGN_REGION",
      11
    )
  ],
  artifacts: [
    artifact(
      "infada-stone",
      "Infada Stone",
      "Meteorite artifact kept in an Indian temple and later embedded in Tony's chest, granting levitation and energy projection.",
      "Pedra Infada",
      "Artefato do meteorito mantido em um templo indiano e depois cravado no peito de Tony, concedendo levitação e projeção de energia.",
      "First artifact recovered; India",
      1
    ),
    artifact(
      "element-115",
      "Element 115",
      "Meteorite artifact stored in Area 51 and used as a power source for the UFO hidden inside the installation.",
      "Elemento 115",
      "Artefato do meteorito armazenado na Área 51 e usado como fonte de energia do OVNI escondido na instalação.",
      "Selectable middle expedition; Nevada",
      2,
      "Some original versions interchange the inventory labels Element 115 and Ora Dagger; placement and current official lore identify the Area 51 object as Element 115."
    ),
    artifact(
      "ora-dagger",
      "Ora Dagger",
      "Artifact reclaimed by Puna in the South Pacific, capable of creating an energy shield, firing lightning, and summoning creatures.",
      "Punhal de Ora",
      "Artefato recuperado por Puna no Pacífico Sul, capaz de criar escudo energético, disparar raios e invocar criaturas.",
      "Selectable middle expedition; South Pacific",
      3,
      "Some original versions interchange its inventory label with Element 115; placement and current official lore identify Puna's artifact as the Ora Dagger."
    ),
    artifact(
      "eye-of-isis",
      "Eye of Isis",
      "Artifact owned by Sophia Leigh and mounted on a staff, powering her energy shield and supporting SLinc's immortality experiments.",
      "Olho de Ísis",
      "Artefato pertencente a Sophia Leigh e montado em um cajado, alimentando seu escudo de energia e os experimentos de imortalidade da SLinc.",
      "Selectable middle expedition; London",
      4
    )
  ],
  weapons: [
    weapon(
      "dual-pistols",
      "Dual Pistols",
      "Lara's standard paired pistols: reliable, automatically aimed, and available with unlimited ammunition.",
      "Pistolas duplas",
      "As pistolas duplas padrão de Lara: confiáveis, com mira automática e munição ilimitada.",
      "UNLIMITED",
      "Unlimited ammunition",
      1
    ),
    weapon(
      "shotgun",
      "Shotgun",
      "Close-range firearm that trades firing speed for heavy damage per shell.",
      "Espingarda",
      "Arma de curto alcance que troca velocidade de disparo por grande dano por cartucho.",
      "FINITE",
      "Uses shotgun shells",
      2
    ),
    weapon(
      "desert-eagle",
      "Desert Eagle",
      "Powerful semi-automatic handgun introduced in Tomb Raider III, effective at long range and capable of manual aiming in selected situations.",
      "Desert Eagle",
      "Pistola semiautomática poderosa introduzida em Tomb Raider III, eficaz a longa distância e capaz de mira manual em situações específicas.",
      "FINITE",
      "Uses Desert Eagle clips",
      3
    ),
    weapon(
      "dual-uzis",
      "Dual Uzis",
      "Paired rapid-fire submachine guns with high ammunition consumption.",
      "Uzis duplas",
      "Submetralhadoras duplas de tiro rápido e alto consumo de munição.",
      "FINITE",
      "Uses Uzi clips",
      4
    ),
    weapon(
      "mp5",
      "MP5",
      "Accurate automatic weapon that replaces Tomb Raider II's M16 and can be aimed manually for some encounters.",
      "MP5",
      "Arma automática precisa que substitui o M16 de Tomb Raider II e pode ser apontada manualmente em alguns confrontos.",
      "FINITE",
      "Uses MP5 clips",
      5
    ),
    weapon(
      "rocket-launcher",
      "Rocket Launcher",
      "Heavy explosive weapon introduced in the third game, firing scarce rockets with a wide damage radius.",
      "Lança-foguetes",
      "Arma explosiva pesada introduzida no terceiro jogo, que dispara foguetes escassos com grande área de dano.",
      "FINITE",
      "Uses rockets",
      6
    ),
    weapon(
      "grenade-launcher",
      "Grenade Launcher",
      "Arcing explosive launcher carried over from Tomb Raider II and useful against groups or targets behind cover.",
      "Lançador de granadas",
      "Lançador de explosivos em arco herdado de Tomb Raider II, útil contra grupos ou alvos atrás de cobertura.",
      "FINITE",
      "Uses grenades",
      7
    ),
    weapon(
      "harpoon-gun",
      "Harpoon Gun",
      "Underwater firearm used against aquatic threats; it can also be fired on land but is comparatively weak.",
      "Arpão",
      "Arma subaquática usada contra ameaças aquáticas; também pode disparar em terra, mas é relativamente fraca.",
      "FINITE",
      "Uses harpoons; four shots are loaded at a time",
      8
    )
  ],
  enemies: [
    enemy(
      "baboons-tr3",
      "Baboons",
      "Aggressive primates encountered throughout the Indian ruins and Ganges route.",
      "Babuínos",
      "Primatas agressivos encontrados nas ruínas indianas e na rota do Ganges.",
      "WILDLIFE",
      1
    ),
    enemy(
      "bengal-tigers",
      "Bengal Tigers",
      "Large predators that stalk Lara in the Indian jungle.",
      "Tigres-de-bengala",
      "Grandes predadores que perseguem Lara na selva indiana.",
      "WILDLIFE",
      2
    ),
    enemy(
      "cobras-tr3",
      "Cobras",
      "Venomous snakes whose bites can poison Lara until a medipack is used.",
      "Cobras",
      "Serpentes venenosas cujas mordidas envenenam Lara até o uso de um kit médico.",
      "WILDLIFE",
      3
    ),
    enemy(
      "vultures-tr3",
      "Vultures",
      "Flying scavengers that attack around the Ganges and Nevada canyons.",
      "Abutres",
      "Aves necrófagas que atacam ao redor do Ganges e dos cânions de Nevada.",
      "WILDLIFE",
      4
    ),
    enemy(
      "shiva-statues",
      "Animated Shiva Statues",
      "Four-armed stone guardians that animate and attack with scimitars inside Temple Ruins.",
      "Estátuas de Shiva animadas",
      "Guardiões de pedra com quatro braços que ganham vida e atacam com cimitarras em Temple Ruins.",
      "SUPERNATURAL",
      5
    ),
    enemy(
      "rattlesnakes-tr3",
      "Rattlesnakes",
      "Venomous snakes concealed among the rocks of the Nevada Desert.",
      "Cascavéis",
      "Serpentes venenosas escondidas entre as rochas do deserto de Nevada.",
      "WILDLIFE",
      6
    ),
    enemy(
      "nevada-workers",
      "Nevada Workers",
      "Armed and unarmed personnel guarding the industrial approach to the high-security facility.",
      "Trabalhadores de Nevada",
      "Funcionários armados e desarmados que protegem a passagem industrial até a instalação de alta segurança.",
      "HUMAN",
      7
    ),
    enemy(
      "military-police-tr3",
      "Military Police",
      "Club- and pistol-equipped guards in the High Security Compound and Area 51.",
      "Polícia militar",
      "Guardas com cassetetes e pistolas no complexo de alta segurança e na Área 51.",
      "HUMAN",
      8
    ),
    enemy(
      "area-51-turrets",
      "Automated Turrets",
      "Fixed gun emplacements protecting the Nevada military facilities.",
      "Torres automáticas",
      "Posições fixas de armas que protegem as instalações militares de Nevada.",
      "MECHANICAL",
      9
    ),
    enemy(
      "german-shepherds-tr3",
      "German Shepherds",
      "Guard dogs deployed in Nevada and the All Hallows bonus level.",
      "Pastores-alemães",
      "Cães de guarda usados em Nevada e no nível bônus All Hallows.",
      "WILDLIFE",
      10
    ),
    enemy(
      "tribesmen-axes",
      "Tribesmen with Axes",
      "Close-range warriors defending the South Pacific settlement.",
      "Guerreiros tribais com machados",
      "Guerreiros de curto alcance que defendem o assentamento do Pacífico Sul.",
      "HUMAN",
      11
    ),
    enemy(
      "tribesmen-blowpipes",
      "Tribesmen with Blowpipes",
      "Ranged warriors whose darts can poison Lara.",
      "Guerreiros tribais com zarabatanas",
      "Guerreiros de longo alcance cujos dardos podem envenenar Lara.",
      "HUMAN",
      12
    ),
    enemy(
      "crocodiles-tr3",
      "Crocodiles",
      "Aquatic predators appearing in the South Pacific and flooded London passages.",
      "Crocodilos",
      "Predadores aquáticos presentes no Pacífico Sul e nas passagens inundadas de Londres.",
      "WILDLIFE",
      13
    ),
    enemy(
      "velociraptors-tr3",
      "Velociraptors",
      "Fast pack-hunting dinosaurs surrounding the Australian crash site.",
      "Velociraptores",
      "Dinossauros velozes que caçam em grupo ao redor do local da queda australiana.",
      "DINOSAUR",
      14
    ),
    enemy(
      "compsognathus-tr3",
      "Compsognathus",
      "Small dinosaurs that swarm corpses and the crash-site paths.",
      "Compsognatos",
      "Pequenos dinossauros que cercam cadáveres e os caminhos do local da queda.",
      "DINOSAUR",
      15
    ),
    enemy(
      "tyrannosaurus-tr3",
      "Tyrannosaurus Rex",
      "A large dinosaur guarding Commander Bishop's key near the wreck.",
      "Tiranossauro Rex",
      "Grande dinossauro que protege a chave do comandante Bishop perto dos destroços.",
      "DINOSAUR",
      16
    ),
    enemy(
      "lizardmen-tr3",
      "Lizardmen",
      "Humanoid creatures in Madubu Gorge and Puna's temple that spit poison and fight at close range.",
      "Homens-lagarto",
      "Criaturas humanoides em Madubu Gorge e no templo de Puna que cospem veneno e lutam de perto.",
      "SUPERNATURAL",
      17
    ),
    enemy(
      "sophia-mercenaries",
      "Sophia's Mercenaries",
      "Armed personnel patrolling London's rooftops and industrial spaces for SLinc.",
      "Mercenários de Sophia",
      "Homens armados que patrulham os telhados e espaços industriais de Londres para a SLinc.",
      "HUMAN",
      18
    ),
    enemy(
      "london-security-guards",
      "London Security Guards",
      "Guards stationed around warehouses, the museum route, and Sophia's operations.",
      "Seguranças de Londres",
      "Guardas posicionados em armazéns, na rota do museu e nas operações de Sophia.",
      "HUMAN",
      19
    ),
    enemy(
      "damned-gang-members",
      "The Damned",
      "Disfigured survivors of SLinc experiments who inhabit Aldwych and the sewers; most encountered members are hostile.",
      "Os Damned",
      "Sobreviventes desfigurados dos experimentos da SLinc que habitam Aldwych e os esgotos; a maioria dos membros encontrados é hostil.",
      "MUTANT",
      20
    ),
    enemy(
      "london-rats",
      "Rats",
      "Sewer and Underground vermin that attack in groups.",
      "Ratos",
      "Vermes dos esgotos e do metrô que atacam em grupos.",
      "WILDLIFE",
      21
    ),
    enemy(
      "london-crows",
      "Crows",
      "Aggressive birds on London's exposed rooftops.",
      "Corvos",
      "Aves agressivas nos telhados expostos de Londres.",
      "WILDLIFE",
      22
    ),
    enemy(
      "london-dogs",
      "Guard Dogs",
      "Attack dogs used by hostile groups in Aldwych and other London spaces.",
      "Cães de guarda",
      "Cães de ataque usados por grupos hostis em Aldwych e outros espaços de Londres.",
      "WILDLIFE",
      23
    ),
    enemy(
      "scuba-divers-tr3",
      "Scuba Divers",
      "Armed underwater guards in the flooded museum and sewer route.",
      "Mergulhadores",
      "Guardas armados subaquáticos na rota inundada do museu e dos esgotos.",
      "HUMAN",
      24
    ),
    enemy(
      "rx-tech-guards",
      "RX-Tech Guards",
      "Armed personnel defending the Antarctic base and its surrounding facilities.",
      "Guardas da RX-Tech",
      "Funcionários armados que defendem a base antártica e suas instalações.",
      "HUMAN",
      25
    ),
    enemy(
      "antarctic-huskies",
      "Huskies",
      "Sled dogs turned hostile around the Antarctic installation.",
      "Huskies",
      "Cães de trenó hostis ao redor da instalação antártica.",
      "WILDLIFE",
      26
    ),
    enemy(
      "rx-tech-flamethrowers",
      "RX-Tech Flamethrower Operators",
      "Protective crews whose flame weapons contain mutants but also threaten Lara.",
      "Operadores de lança-chamas da RX-Tech",
      "Equipes de proteção cujas armas de fogo contêm mutantes, mas também ameaçam Lara.",
      "HUMAN",
      27
    ),
    enemy(
      "tinnos-mutants",
      "Tinnos Mutants",
      "RX-Tech personnel and creatures altered by exposure to meteorite material, appearing in several stages of mutation.",
      "Mutantes de Tinnos",
      "Funcionários da RX-Tech e criaturas alterados pela exposição ao material do meteorito, em vários estágios de mutação.",
      "MUTANT",
      28
    ),
    enemy(
      "tinnos-wasps",
      "Tinnos Wasps",
      "Large flying insects that continually emerge from nests in the Lost City of Tinnos.",
      "Vespas de Tinnos",
      "Grandes insetos voadores que emergem continuamente de ninhos na Cidade Perdida de Tinnos.",
      "MUTANT",
      29
    ),
    enemy(
      "tony-boss",
      "Tony — Infada Form",
      "Tony empowered by the Infada Stone, levitating above the cavern floor and throwing energy projectiles.",
      "Tony — forma Infada",
      "Tony fortalecido pela Pedra Infada, levitando sobre a caverna e lançando projéteis de energia.",
      "BOSS",
      30
    ),
    enemy(
      "puna-boss",
      "Puna",
      "Artifact-powered boss protected by an energy barrier and capable of summoning lizardmen.",
      "Puna",
      "Chefe fortalecido pelo artefato, protegido por uma barreira de energia e capaz de invocar homens-lagarto.",
      "BOSS",
      31
    ),
    enemy(
      "sophia-leigh-boss",
      "Sophia Leigh",
      "Eye of Isis wielder whose shield prevents direct gunfire from killing her; the arena's electrical system must be used instead.",
      "Sophia Leigh",
      "Portadora do Olho de Ísis cujo escudo impede que tiros diretos a matem; o sistema elétrico da arena deve ser usado.",
      "BOSS",
      32
    ),
    enemy(
      "willard-mutant-boss",
      "Mutated Dr. Willard",
      "Giant spider-like final form created in the meteorite pit; he becomes vulnerable only while Lara removes the four artifacts from their pedestals.",
      "Dr. Willard mutante",
      "Forma final aracnídea gigante criada no poço do meteorito; ele só fica vulnerável enquanto Lara retira os quatro artefatos dos pedestais.",
      "BOSS",
      33
    )
  ],
  credits: [
    { role: "PC Programmer", names: ["Richard Flower"] },
    { role: "Programmers", names: ["Chris Coupe", "Martin Gibbins"] },
    { role: "AI Programming", names: ["Tom Scutt"] },
    { role: "Additional Programming", names: ["Jurjen Katsman"] },
    {
      role: "Animators",
      names: ["Phil Chapman", "Jer O'Carroll", "Darren Wakeman"]
    },
    {
      role: "Level Designers",
      names: ["Pete Duncan", "Jamie Morton", "Richard Morton", "Andy Sandham"]
    },
    { role: "FMV Sequences", names: ["Peter Barnard", "David Reading"] },
    {
      role: "Additional Artwork",
      names: ["Matt Charlesworth", "Mark Hazleton"]
    },
    { role: "Music", names: ["Nathan McCree"] },
    { role: "Sound Effects", names: ["Martin Iveson"] },
    {
      role: "Additional Sound Effects",
      names: ["Matthew Kemp", "Peter Connelly"]
    },
    { role: "Script", names: ["Vicky Arnold"] },
    { role: "Special Thanks", names: ["Judith Gibbins"] },
    { role: "Producer", names: ["Troy Horton"] },
    {
      role: "Game Testers",
      names: [
        "Tiziano Sirillo",
        "Hayos Fatunmbi",
        "Paul Field",
        "Darren Price",
        "Steve Wakeman",
        "Dave Ward"
      ]
    },
    {
      role: "Executive Producers",
      names: ["Jeremy H. Smith", "Adrian Smith"]
    },
    {
      role: "English Voice Actors",
      names: [
        "Judith Gibbins — Lara Croft and Sophia Leigh",
        "Simon Greenall — Bob",
        "Nathan McCree — Winston"
      ]
    }
  ],
  contentRatings: [
    {
      board: "ESRB",
      rating: "T",
      descriptors: ["Animated Blood", "Violence"],
      status: "CONFIRMED",
      note: "The dedicated ESRB record uses Animated Blood and Violence. The current franchise product page displays Animated Blood and Animated Violence; the wording difference is preserved in the fact record."
    }
  ],
  sources: [
    {
      key: "official-game-page",
      title:
        "Tomb Raider III: Adventures of Lara Croft — official franchise product page",
      url: "https://www.tombraider.com/products/games/tomb-raider-iii-adventures-of-lara-croft",
      type: "OFFICIAL"
    },
    {
      key: "original-pc-manual",
      title: "Tomb Raider III PC Manual",
      url: "https://tombraiders.net/stella/files/manuals/TR3/Tomb_Raider_3_PC.pdf",
      type: "PRIMARY_DOCUMENT"
    },
    {
      key: "core-transcript-credits",
      title: "Core Design archive — Tomb Raider III transcripts and credits",
      url: "https://core-design.com/goodies_tr3_transcripts.html",
      type: "PRESERVED_PRIMARY_MATERIAL"
    },
    {
      key: "core-level-overview",
      title: "Core Design archive — Tomb Raider III levels overview",
      url: "https://core-design.com/goodies_tr3_levelsoverview.html",
      type: "PRESERVED_PRIMARY_MATERIAL"
    },
    {
      key: "official-artifacts-lore",
      title: "Tomb Raider I-III Remastered Lore: The Five Meteorite Artifacts",
      url: "https://www.tombraider.com/news/video-games/tomb-raider-i-iii-remastered-lore-the-five-meteorite-artifacts",
      type: "OFFICIAL_RETROSPECTIVE"
    },
    {
      key: "official-slinc-lore",
      title: "Tomb Raider I-III Remastered Lore: SLinc and the Damned",
      url: "https://www.tombraider.com/news/video-games/tomb-raider-i-iii-remastered-lore-slinc-and-the-damned",
      type: "OFFICIAL_RETROSPECTIVE"
    },
    {
      key: "official-willard-lore",
      title: "Tomb Raider I-III Remastered Lore: Dr. Willard and RX TECH",
      url: "https://www.tombraider.com/news/video-games/tomb-raider-i-iii-remastered-lore-dr-willard-and-rx-tech",
      type: "OFFICIAL_RETROSPECTIVE"
    },
    {
      key: "official-bonus-levels",
      title: "Tomb Raider I-III Remastered: Bonus Levels",
      url: "https://www.tombraider.com/news/video-games/tomb-raider-i-iii-remastered-bonus-levels",
      type: "OFFICIAL_RETROSPECTIVE"
    },
    {
      key: "core-1998-preview-interview",
      title: "Tomb Raider III — Exclusive Developer Interview (1998)",
      url: "https://core-design.com/interview7.html",
      type: "DEVELOPER_INTERVIEW"
    },
    {
      key: "core-programming-interview",
      title: "The Team Speak Out Part 1 (1998)",
      url: "https://core-design.com/interview15.html",
      type: "DEVELOPER_INTERVIEW"
    },
    {
      key: "andy-sandham-interview",
      title: "Interview with Andy Sandham — Part II",
      url: "https://core-design.com/interview2.html",
      type: "DEVELOPER_INTERVIEW"
    },
    {
      key: "subtitle-interview",
      title: "Core Design interview on Tomb Raider: The Last Revelation (1999)",
      url: "https://core-design.com/interview8.html",
      type: "DEVELOPER_INTERVIEW"
    },
    {
      key: "stella-game-record",
      title: "Tomb Raider 3 Classic and Remastered — Stella's Site",
      url: "https://tombraiders.net/stella/tomb3.html",
      type: "VERIFIED_COMMUNITY_REFERENCE"
    },
    {
      key: "stella-coastal-village",
      title: "Tomb Raider III Coastal Village walkthrough — Stella's Site",
      url: "https://www.vps.tombraiders.net/stella/walks/TR3walk/P1-coastal-village.html",
      type: "VERIFIED_COMMUNITY_REFERENCE"
    },
    {
      key: "wikiraider-record",
      title: "Tomb Raider III — WikiRaider",
      url: "https://tombraiderwiki.org/index.php/Tomb_Raider_III",
      type: "SECONDARY_REFERENCE"
    },
    {
      key: "mobygames-release-record",
      title: "Tomb Raider III: Adventures of Lara Croft — MobyGames",
      url: "https://www.mobygames.com/game/1428/tomb-raider-iii-adventures-of-lara-croft/",
      type: "SECONDARY_REFERENCE"
    },
    {
      key: "esrb-record",
      title: "Tomb Raider III: Adventures of Lara Croft — ESRB",
      url: "https://www.esrb.org/ratings/39288/tomb-raider-iii-adventures-of-lara-croft/",
      type: "OFFICIAL"
    },
    {
      key: "square-enix-sales",
      title:
        "Square Enix Corporate Strategy Meeting — Eidos integration (2009)",
      url: "https://www.hd.square-enix.com/eng/ir/pdf/20090422_02en.pdf",
      type: "PRIMARY_DOCUMENT"
    },
    {
      key: "lost-artifact-release-record",
      title: "Tomb Raider: The Lost Artifact — release record",
      url: "https://gamefaqs.gamespot.com/pc/199050-tomb-raider-the-lost-artifact/data",
      type: "SECONDARY_REFERENCE"
    },
    {
      key: "official-remaster-page",
      title: "Tomb Raider I-III Remastered Starring Lara Croft — official page",
      url: "https://www.tombraider.com/products/games/tomb-raider-i-iii-remastered",
      type: "OFFICIAL"
    }
  ],
  facts: [
    {
      slug: "original-year-and-platforms",
      order: 1,
      status: "CONFIRMED",
      claim:
        "The original Tomb Raider III was released in 1998 for Windows PC and PlayStation.",
      verdict:
        "Confirmed. Core Design developed the 1998 Windows and PlayStation editions. The Macintosh conversion followed in 1999 and is recorded separately.",
      sourceKeys: [
        "official-game-page",
        "original-pc-manual",
        "stella-game-record"
      ],
      translations: {
        pt: {
          claim:
            "O Tomb Raider III original foi lançado em 1998 para PC Windows e PlayStation.",
          verdict:
            "Confirmado. A Core Design desenvolveu as edições de 1998 para Windows e PlayStation. A conversão para Macintosh veio em 1999 e está registrada separadamente."
        }
      }
    },
    {
      slug: "release-date-conflict",
      order: 2,
      status: "SOURCE_CONFLICT",
      claim: "November 20, 1998 is the uncontested worldwide release date.",
      verdict:
        "Source conflict. November 20 is widely documented for Europe, November 24 for North America, while the current official franchise page gives November 23 without a regional split. The site uses the official November 23 date and keeps the regional evidence in release records.",
      sourceKeys: [
        "official-game-page",
        "mobygames-release-record",
        "wikiraider-record"
      ],
      translations: {
        pt: {
          claim:
            "20 de novembro de 1998 é a data mundial de lançamento sem contestação.",
          verdict:
            "Conflito entre fontes. 20 de novembro é amplamente documentado para a Europa, 24 de novembro para a América do Norte, enquanto a página oficial atual informa 23 de novembro sem divisão regional. O site usa a data oficial de 23 de novembro e mantém as evidências regionais nos registros de lançamento."
        }
      }
    },
    {
      slug: "campaign-level-structure",
      order: 3,
      status: "CONFIRMED",
      claim:
        "The base game has 19 story levels, one training level, and the unlockable All Hallows bonus level.",
      verdict:
        "Confirmed. Lara's Home is optional training; levels 1–19 form the story campaign; All Hallows is a separate post-campaign reward and is not counted as a twentieth story level.",
      sourceKeys: [
        "core-level-overview",
        "official-bonus-levels",
        "stella-game-record"
      ],
      translations: {
        pt: {
          claim:
            "O jogo-base tem 19 níveis de história, um nível de treinamento e o bônus desbloqueável All Hallows.",
          verdict:
            "Confirmado. Lara's Home é um treinamento opcional; os níveis 1 a 19 formam a campanha; All Hallows é uma recompensa separada após a campanha e não conta como vigésimo nível da história."
        }
      }
    },
    {
      slug: "secret-counter-59-or-60",
      order: 4,
      status: "QUALIFIED",
      claim: "Tomb Raider III contains exactly 59 secret locations.",
      verdict:
        "Qualified. The classic game expects 59 for its counter and to unlock All Hallows, but 60 secret triggers can be reached. Coastal Village reports three while a fourth can be collected by combining alternate routes. The remaster formally counts all 60.",
      sourceKeys: [
        "core-level-overview",
        "stella-game-record",
        "stella-coastal-village"
      ],
      translations: {
        pt: {
          claim: "Tomb Raider III contém exatamente 59 locais de segredo.",
          verdict:
            "Qualificado. O jogo clássico espera 59 em seu contador e para liberar All Hallows, mas é possível ativar 60 segredos. Coastal Village informa três, embora um quarto possa ser coletado ao combinar rotas alternativas. O remaster contabiliza formalmente os 60."
        }
      }
    },
    {
      slug: "region-order",
      order: 5,
      status: "CONFIRMED",
      claim:
        "After India, Nevada, the South Pacific, and London can be completed in any order; Antarctica remains the finale.",
      verdict:
        "Confirmed. India is the fixed opening chapter. The globe then offers the three middle expeditions in a player-selected order, and Antarctica unlocks after all four artifacts have been recovered.",
      sourceKeys: [
        "original-pc-manual",
        "core-1998-preview-interview",
        "stella-game-record"
      ],
      translations: {
        pt: {
          claim:
            "Após a Índia, Nevada, Pacífico Sul e Londres podem ser concluídos em qualquer ordem; a Antártida permanece como final.",
          verdict:
            "Confirmado. A Índia é o capítulo inicial obrigatório. Depois, o globo oferece as três expedições intermediárias na ordem escolhida pelo jogador, e a Antártida é liberada após a recuperação dos quatro artefatos."
        }
      }
    },
    {
      slug: "save-system-platform-difference",
      order: 6,
      status: "MYTH",
      claim:
        "The original PC and PlayStation editions use the same save-crystal system.",
      verdict:
        "False. PlayStation consumes collected crystals to save. Windows and Macintosh allow unlimited saving anywhere; their crystals restore a small amount of health instead.",
      sourceKeys: ["original-pc-manual", "stella-game-record"],
      translations: {
        pt: {
          claim:
            "As edições originais de PC e PlayStation usam o mesmo sistema de cristais de salvamento.",
          verdict:
            "Falso. No PlayStation, cristais coletados são consumidos para salvar. Windows e Macintosh permitem salvamento ilimitado em qualquer lugar; nesses sistemas, os cristais restauram uma pequena quantidade de vida."
        }
      }
    },
    {
      slug: "four-base-artifacts",
      order: 7,
      status: "CONFIRMED",
      claim:
        "The 1998 campaign revolves around four artifacts: Infada Stone, Element 115, Ora Dagger, and Eye of Isis.",
      verdict:
        "Confirmed. They were carved from the Antarctic meteorite, removed from Tinnos by Beagle sailors, dispersed around the world, and reunited by Lara for Willard.",
      sourceKeys: [
        "official-artifacts-lore",
        "core-transcript-credits",
        "core-level-overview"
      ],
      translations: {
        pt: {
          claim:
            "A campanha de 1998 gira em torno de quatro artefatos: Pedra Infada, Elemento 115, Punhal de Ora e Olho de Ísis.",
          verdict:
            "Confirmado. Eles foram esculpidos do meteorito antártico, retirados de Tinnos por marinheiros do Beagle, espalhados pelo mundo e reunidos por Lara para Willard."
        }
      }
    },
    {
      slug: "element-115-ora-label-swap",
      order: 8,
      status: "SOURCE_CONFLICT",
      claim:
        "Every original regional version labels the Nevada and South Pacific artifacts identically.",
      verdict:
        "False. Some original versions interchange the inventory names Element 115 and Ora Dagger. Story placement and current official lore identify Element 115 with Area 51 and the Ora Dagger with Puna in the South Pacific.",
      sourceKeys: ["official-artifacts-lore", "wikiraider-record"],
      translations: {
        pt: {
          claim:
            "Todas as versões regionais originais nomeiam de forma idêntica os artefatos de Nevada e do Pacífico Sul.",
          verdict:
            "Falso. Algumas versões originais trocam no inventário os nomes Elemento 115 e Punhal de Ora. A posição na história e o material oficial atual associam o Elemento 115 à Área 51 e o Punhal de Ora a Puna no Pacífico Sul."
        }
      }
    },
    {
      slug: "hand-of-rathmore-scope",
      order: 9,
      status: "LATER_CONTINUITY",
      claim:
        "The Hand of Rathmore is a collectible fifth artifact in the original 1998 campaign.",
      verdict:
        "False for the base game. The Hand of Rathmore is introduced after Tomb Raider III in the 2000 expansion The Lost Artifact. It is related continuity, not part of the four-artifact 1998 quest.",
      sourceKeys: ["official-artifacts-lore", "lost-artifact-release-record"],
      translations: {
        pt: {
          claim:
            "A Mão de Rathmore é um quinto artefato coletável na campanha original de 1998.",
          verdict:
            "Falso para o jogo-base. A Mão de Rathmore é apresentada depois de Tomb Raider III, na expansão The Lost Artifact de 2000. É continuidade relacionada, não parte da busca de 1998 pelos quatro artefatos."
        }
      }
    },
    {
      slug: "all-hallows-origin",
      order: 10,
      status: "CONFIRMED",
      claim:
        "All Hallows began as part of the London chapter before becoming a secret bonus level.",
      verdict:
        "Confirmed. It was intended to follow Thames Wharf inside St Paul's. Creator Andy Sandham recalled memory pressure and extreme difficulty; the shipped game preserves it as the all-secrets reward.",
      sourceKeys: ["official-bonus-levels", "andy-sandham-interview"],
      translations: {
        pt: {
          claim:
            "All Hallows começou como parte do capítulo de Londres antes de se tornar um nível bônus secreto.",
          verdict:
            "Confirmado. Ele deveria vir depois de Thames Wharf, dentro de São Paulo. O criador Andy Sandham recordou limitações de memória e dificuldade extrema; o jogo lançado o preserva como recompensa por todos os segredos."
        }
      }
    },
    {
      slug: "subtitle-meaning",
      order: 11,
      status: "CONFIRMED",
      claim:
        "The subtitle Adventures of Lara Croft refers to the game's five separate adventures.",
      verdict:
        "Confirmed by Core Design in 1999: India, the three selectable middle expeditions, and Antarctica make up the five-adventure structure reflected in the subtitle.",
      sourceKeys: ["subtitle-interview", "core-1998-preview-interview"],
      translations: {
        pt: {
          claim:
            "O subtítulo Adventures of Lara Croft se refere às cinco aventuras separadas do jogo.",
          verdict:
            "Confirmado pela Core Design em 1999: Índia, as três expedições intermediárias selecionáveis e Antártida formam a estrutura de cinco aventuras refletida no subtítulo."
        }
      }
    },
    {
      slug: "new-moves",
      order: 12,
      status: "CONFIRMED",
      claim:
        "Tomb Raider III adds sprinting, crouching, crawling, and monkey-swing traversal to Lara's playable move set.",
      verdict:
        "Confirmed by the original manual and the released levels. These moves support low tunnels, stamina-limited sprints, and overhead traversal.",
      sourceKeys: ["original-pc-manual", "stella-game-record"],
      translations: {
        pt: {
          claim:
            "Tomb Raider III adiciona corrida acelerada, agachamento, rastejamento e travessia suspensa ao conjunto de movimentos jogáveis de Lara.",
          verdict:
            "Confirmado pelo manual original e pelos níveis lançados. Esses movimentos sustentam túneis baixos, corridas limitadas por fôlego e travessias pelo teto."
        }
      }
    },
    {
      slug: "vehicle-roster",
      order: 13,
      status: "CONFIRMED",
      claim: "The released game includes five controllable vehicle types.",
      verdict:
        "Confirmed: quad bike, kayak, underwater propulsion unit, inflatable motor boat, and mine cart. They are integrated into level routes rather than presented as separate modes.",
      sourceKeys: [
        "original-pc-manual",
        "core-1998-preview-interview",
        "stella-game-record"
      ],
      translations: {
        pt: {
          claim: "O jogo lançado inclui cinco tipos de veículos controláveis.",
          verdict:
            "Confirmado: quadriciclo, caiaque, unidade de propulsão subaquática, bote inflável a motor e vagonete de mina. Eles fazem parte das rotas dos níveis, não de modos separados."
        }
      }
    },
    {
      slug: "retail-weapon-count",
      order: 14,
      status: "CONFIRMED",
      claim: "The original retail arsenal contains eight weapons.",
      verdict:
        "Confirmed: dual pistols, shotgun, Desert Eagle, dual Uzis, MP5, rocket launcher, grenade launcher, and harpoon gun. Only the pistols have unlimited ammunition.",
      sourceKeys: [
        "original-pc-manual",
        "core-1998-preview-interview",
        "stella-game-record"
      ],
      translations: {
        pt: {
          claim: "O arsenal original de varejo contém oito armas.",
          verdict:
            "Confirmado: pistolas duplas, espingarda, Desert Eagle, Uzis duplas, MP5, lança-foguetes, lançador de granadas e arpão. Apenas as pistolas têm munição ilimitada."
        }
      }
    },
    {
      slug: "wounded-soldier-identity",
      order: 15,
      status: "MYTH",
      claim:
        "The wounded commander who gives Lara the swamp map is Commander Bishop.",
      verdict:
        "False. The speaking survivor is unnamed in the transcript. Commander Bishop and Lieutenant Tuckerman are dead officers identified through the two keys Lara retrieves at Crash Site.",
      sourceKeys: ["core-transcript-credits", "core-level-overview"],
      translations: {
        pt: {
          claim:
            "O comandante ferido que entrega o mapa do pântano a Lara é o comandante Bishop.",
          verdict:
            "Falso. O sobrevivente que fala não recebe nome na transcrição. O comandante Bishop e o tenente Tuckerman são oficiais mortos identificados pelas duas chaves recuperadas por Lara em Crash Site."
        }
      }
    },
    {
      slug: "kuru-kuro-spelling",
      order: 16,
      status: "SOURCE_CONFLICT",
      claim:
        "The South Pacific settlement has one spelling across every official and archival source.",
      verdict:
        "Source conflict. Core Design's level overview uses Kuru, while the current official meteorite-artifact retrospective uses Kuro. This archive keeps Kuru for the shipped-level location and documents the alternative.",
      sourceKeys: ["core-level-overview", "official-artifacts-lore"],
      translations: {
        pt: {
          claim:
            "O assentamento do Pacífico Sul tem uma única grafia em todas as fontes oficiais e de arquivo.",
          verdict:
            "Conflito entre fontes. A visão geral de níveis da Core Design usa Kuru, enquanto o retrospecto oficial atual dos artefatos usa Kuro. Este arquivo mantém Kuru para o local do nível lançado e documenta a alternativa."
        }
      }
    },
    {
      slug: "playstation-led-development",
      order: 17,
      status: "CONFIRMED",
      claim:
        "Tomb Raider III was led on PlayStation and built in roughly eleven months by its main programming team.",
      verdict:
        "Confirmed by the 1998 programming interview. Work began on a new game in October 1997, became TR3 in December, and took about eleven months; levels were authored on PC and downloaded to PlayStation for testing.",
      sourceKeys: ["core-programming-interview"],
      translations: {
        pt: {
          claim:
            "Tomb Raider III teve o PlayStation como plataforma principal e foi construído em cerca de onze meses pela equipe central de programação.",
          verdict:
            "Confirmado pela entrevista de programação de 1998. O trabalho em um novo jogo começou em outubro de 1997, tornou-se TR3 em dezembro e levou cerca de onze meses; os níveis eram criados no PC e transferidos ao PlayStation para testes."
        }
      }
    },
    {
      slug: "engine-rewrite",
      order: 18,
      status: "MYTH",
      claim:
        "Tomb Raider III uses a completely new engine written from scratch.",
      verdict:
        "False. The team explicitly described incorporating new systems into the existing engine. Major upgrades included triangular geometry, colored lighting, transparency, weather, reflective water, and more complex AI.",
      sourceKeys: ["core-1998-preview-interview", "core-programming-interview"],
      translations: {
        pt: {
          claim:
            "Tomb Raider III usa um motor completamente novo escrito do zero.",
          verdict:
            "Falso. A equipe descreveu explicitamente a incorporação de novos sistemas ao motor existente. As principais melhorias incluíram geometria triangular, iluminação colorida, transparência, clima, água reflexiva e IA mais complexa."
        }
      }
    },
    {
      slug: "peru-retail-region",
      order: 19,
      status: "DRAFT_ONLY",
      claim: "Peru is a playable region in the shipped 1998 game.",
      verdict:
        "False for retail. Peru appears on some beta globe material and preview discussion, but the shipped opening is India. Andy Sandham did not confirm a completed Peru campaign.",
      sourceKeys: ["andy-sandham-interview", "core-level-overview"],
      translations: {
        pt: {
          claim: "O Peru é uma região jogável no jogo lançado em 1998.",
          verdict:
            "Falso no varejo. O Peru aparece em alguns materiais beta do globo e em discussões de prévia, mas a abertura lançada é a Índia. Andy Sandham não confirmou uma campanha peruana concluída."
        }
      }
    },
    {
      slug: "sophia-survival",
      order: 20,
      status: "LATER_CONTINUITY",
      claim:
        "The 1998 London ending clearly shows Sophia Leigh alive after the City battle.",
      verdict:
        "Not in the base game. City ends with Sophia falling and Lara recovering the Eye of Isis. The Lost Artifact later brings Sophia back; that survival belongs to the expansion's continuity.",
      sourceKeys: ["core-transcript-credits", "lost-artifact-release-record"],
      translations: {
        pt: {
          claim:
            "O final londrino de 1998 mostra claramente Sophia Leigh viva após a batalha em City.",
          verdict:
            "Não no jogo-base. City termina com a queda de Sophia e Lara recuperando o Olho de Ísis. The Lost Artifact mais tarde traz Sophia de volta; essa sobrevivência pertence à continuidade da expansão."
        }
      }
    },
    {
      slug: "difficulty-to-sell-guides",
      order: 21,
      status: "UNSUPPORTED",
      claim:
        "Core Design deliberately made Tomb Raider III difficult chiefly to sell strategy guides.",
      verdict:
        "Unsupported. The available developer accounts discuss time pressure, ambitious routes, technical additions, and an era with little onboarding. They do not establish strategy-guide sales as the design motive.",
      sourceKeys: [
        "core-1998-preview-interview",
        "core-programming-interview",
        "andy-sandham-interview"
      ],
      translations: {
        pt: {
          claim:
            "A Core Design tornou Tomb Raider III difícil principalmente para vender guias de estratégia.",
          verdict:
            "Sem sustentação. Os relatos disponíveis dos desenvolvedores falam de pressão de prazo, rotas ambiciosas, adições técnicas e uma época com pouca introdução ao jogador. Eles não estabelecem a venda de guias como motivação de design."
        }
      }
    },
    {
      slug: "sales-total",
      order: 22,
      status: "QUALIFIED",
      claim: "Tomb Raider III sold exactly 5.9 million audited copies.",
      verdict:
        "Qualified. A 2009 Square Enix corporate chart places the title at about 5.9 million units, but the graphic is rounded and should not be presented as a precise audited lifetime total.",
      sourceKeys: ["square-enix-sales"],
      translations: {
        pt: {
          claim:
            "Tomb Raider III vendeu exatamente 5,9 milhões de cópias auditadas.",
          verdict:
            "Qualificado. Um gráfico corporativo da Square Enix de 2009 coloca o título em cerca de 5,9 milhões de unidades, mas o gráfico é arredondado e não deve ser apresentado como total vitalício auditado e exato."
        }
      }
    },
    {
      slug: "esrb-descriptor-wording",
      order: 23,
      status: "SOURCE_CONFLICT",
      claim:
        "Every current official database uses exactly the same ESRB descriptor wording for Tomb Raider III.",
      verdict:
        "Minor source conflict. The ESRB record lists Animated Blood and Violence, while the current franchise product page displays Animated Blood and Animated Violence. Both agree on the T rating and violent-content classification.",
      sourceKeys: ["esrb-record", "official-game-page"],
      translations: {
        pt: {
          claim:
            "Todas as bases oficiais atuais usam exatamente a mesma redação dos descritores ESRB de Tomb Raider III.",
          verdict:
            "Pequeno conflito entre fontes. O registro da ESRB lista Animated Blood e Violence, enquanto a página oficial atual exibe Animated Blood e Animated Violence. Ambas concordam com a classificação T e com o conteúdo violento."
        }
      }
    }
  ],
  relatedReleases: [
    {
      title: "Tomb Raider III: The Lost Artifact",
      year: 2000,
      relationship:
        "Standalone six-level Windows and Macintosh expansion that continues the meteorite story with the Hand of Rathmore; not part of the 1998 campaign",
      order: 1,
      translations: {
        pt: {
          relationship:
            "Expansão independente de seis níveis para Windows e Macintosh que continua a história do meteorito com a Mão de Rathmore; não faz parte da campanha de 1998"
        }
      }
    },
    {
      title: "Tomb Raider: The Last Revelation",
      year: 1999,
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
        "Remastered collection containing Tomb Raider III and The Lost Artifact, with the classic and modern presentations kept separate from the 1998 record",
      order: 3,
      translations: {
        pt: {
          relationship:
            "Coletânea remasterizada com Tomb Raider III e The Lost Artifact, mantendo as apresentações clássica e moderna separadas do registro de 1998"
        }
      }
    }
  ],
  levels: [
    level(
      0,
      "Lara's Home",
      "Training — Croft Manor, Surrey",
      "Optional tutorial with Lara's expanded assault course, pistol range, quad-bike racetrack, aquarium, treasure room, and Winston in protective gear.",
      "Treinamento — Mansão Croft, Surrey",
      "Tutorial opcional com a pista de obstáculos ampliada, estande de tiro, circuito de quadriciclo, aquário, sala de troféus e Winston usando equipamento de proteção.",
      0,
      { training: true }
    ),
    level(
      1,
      "Jungle",
      "Uttar Pradesh, India",
      "Lara descends a vast jungle slope toward the Temple of Shiva while tracking the Infada Stone and RX-Tech researcher Tony.",
      "Uttar Pradesh, Índia",
      "Lara desce uma vasta encosta na selva rumo ao Templo de Shiva enquanto procura a Pedra Infada e o pesquisador Tony, da RX-Tech.",
      6
    ),
    level(
      2,
      "Temple Ruins",
      "Uttar Pradesh, India",
      "Ruined courtyards, flooded chambers, traps, cobras, and animated Shiva statues guard the route through the temple.",
      "Uttar Pradesh, Índia",
      "Pátios em ruínas, câmaras inundadas, armadilhas, cobras e estátuas de Shiva animadas protegem a rota pelo templo.",
      4
    ),
    level(
      3,
      "The River Ganges",
      "Uttar Pradesh, India",
      "A quad-bike pursuit follows the Ganges across ravines and alternate routes as Lara closes in on Tony.",
      "Uttar Pradesh, Índia",
      "Uma perseguição de quadriciclo acompanha o Ganges por desfiladeiros e rotas alternativas enquanto Lara se aproxima de Tony.",
      5
    ),
    level(
      4,
      "Caves of Kaliya",
      "Uttar Pradesh, India",
      "A compact maze leads to Tony, transformed by the Infada Stone into a levitating, energy-projecting boss.",
      "Uttar Pradesh, Índia",
      "Um labirinto compacto conduz a Tony, transformado pela Pedra Infada em um chefe capaz de levitar e disparar energia.",
      0
    ),
    level(
      5,
      "Nevada Desert",
      "Groom Lake, Nevada, United States",
      "Lara crosses canyons, rapids, fences, and an industrial compound by foot and quad bike before a crash leaves her captured.",
      "Groom Lake, Nevada, Estados Unidos",
      "Lara atravessa cânions, corredeiras, cercas e uma instalação industrial a pé e de quadriciclo antes de uma queda resultar em sua captura.",
      3
    ),
    level(
      6,
      "High Security Compound",
      "Nevada, United States",
      "Disarmed and imprisoned, Lara uses stealth, switches, and prisoner assistance to recover equipment and escape the military complex.",
      "Nevada, Estados Unidos",
      "Desarmada e presa, Lara usa furtividade, mecanismos e a ajuda de detentos para recuperar equipamentos e escapar do complexo militar.",
      2
    ),
    level(
      7,
      "Area 51",
      "Nevada, United States",
      "Lara infiltrates Area 51, interrupts a missile launch, enters a UFO larger inside than outside, and retrieves Element 115.",
      "Nevada, Estados Unidos",
      "Lara se infiltra na Área 51, interrompe o lançamento de um míssil, entra em um OVNI maior por dentro e recupera o Elemento 115.",
      3
    ),
    level(
      8,
      "Coastal Village",
      "Kuru, South Pacific Islands",
      "A beach and tribal village offer several intersecting routes before Lara meets a wounded Australian commander and receives a swamp map.",
      "Kuru, Ilhas do Pacífico Sul",
      "Uma praia e uma aldeia tribal oferecem várias rotas interligadas antes de Lara encontrar um comandante australiano ferido e receber um mapa do pântano.",
      3,
      {
        note: "The classic statistics screen counts three secrets, but a fourth physical secret can be reached by combining the level's alternate routes.",
        ptNote:
          "A tela de estatísticas clássica contabiliza três segredos, mas um quarto segredo físico pode ser alcançado combinando as rotas alternativas do nível."
      }
    ),
    level(
      9,
      "Crash Site",
      "Kuru, South Pacific Islands",
      "Lara reaches a crashed Australian aircraft, cooperates with surviving soldiers, fights dinosaurs, and uses the plane's turret to open the route onward.",
      "Kuru, Ilhas do Pacífico Sul",
      "Lara chega a uma aeronave australiana acidentada, coopera com soldados sobreviventes, enfrenta dinossauros e usa a torre do avião para abrir a passagem.",
      3
    ),
    level(
      10,
      "Madubu Gorge",
      "Kuru, South Pacific Islands",
      "A dangerous white-water route uses a kayak to navigate rapids, waterfalls, currents, and poison-spitting lizardmen.",
      "Kuru, Ilhas do Pacífico Sul",
      "Uma perigosa rota de águas brancas usa um caiaque para atravessar corredeiras, cachoeiras, correntes e homens-lagarto que cospem veneno.",
      3
    ),
    level(
      11,
      "Temple of Puna",
      "Kuru, South Pacific Islands",
      "Deadly mechanisms and rolling blades lead to tribal leader Puna, who uses the Ora Dagger's powers in battle.",
      "Kuru, Ilhas do Pacífico Sul",
      "Mecanismos mortais e lâminas rolantes conduzem ao líder tribal Puna, que usa os poderes do Punhal de Ora em combate.",
      1
    ),
    level(
      12,
      "Thames Wharf",
      "London, England",
      "Lara crosses rain-soaked rooftops, industrial interiors, and the vicinity of St Paul's Cathedral while pursuing Sophia Leigh's network.",
      "Londres, Inglaterra",
      "Lara atravessa telhados sob chuva, interiores industriais e os arredores da Catedral de São Paulo enquanto persegue a rede de Sophia Leigh.",
      5
    ),
    level(
      13,
      "Aldwych",
      "London Underground, England",
      "The abandoned Aldwych station combines trains, maintenance tunnels, ticket machinery, a Masonic chamber, and the Damned gang.",
      "Metrô de Londres, Inglaterra",
      "A estação abandonada de Aldwych combina trens, túneis de manutenção, máquinas de bilhetes, uma câmara maçônica e a gangue dos Damned.",
      5
    ),
    level(
      14,
      "Lud's Gate",
      "London, England",
      "Lara retrieves embalming fluid from the Natural History Museum and continues through extensive underwater passages toward SLinc.",
      "Londres, Inglaterra",
      "Lara recupera fluido de embalsamamento no Museu de História Natural e segue por extensas passagens subaquáticas rumo à SLinc.",
      6
    ),
    level(
      15,
      "City",
      "London, England",
      "A rooftop confrontation with Sophia Leigh turns the Eye of Isis into a shield and energy weapon until Lara overloads the arena's electrical system.",
      "Londres, Inglaterra",
      "Um confronto nos telhados com Sophia Leigh transforma o Olho de Ísis em escudo e arma de energia até Lara sobrecarregar o sistema elétrico da arena.",
      1
    ),
    level(
      16,
      "Antarctica",
      "Antarctica",
      "After a helicopter crash, Lara crosses ice, freezing water, an abandoned ship, and the RX-Tech perimeter to reach Willard.",
      "Antártida",
      "Após a queda de um helicóptero, Lara atravessa gelo, água congelante, um navio abandonado e o perímetro da RX-Tech para chegar a Willard.",
      3
    ),
    level(
      17,
      "RX-Tech Mines",
      "Antarctica",
      "Mine carts connect hazardous excavation shafts where Willard's exposed personnel have begun mutating and flamethrower crews contain the outbreak.",
      "Antártida",
      "Vagonetes conectam poços de escavação perigosos onde funcionários expostos de Willard começaram a sofrer mutações e equipes com lança-chamas contêm o surto.",
      3
    ),
    level(
      18,
      "Lost City of Tinnos",
      "Beneath Antarctica",
      "The ancient Polynesian city surrounds four elemental trials, Oceanic Masks, mutants, and swarms of Tinnos wasps.",
      "Sob a Antártida",
      "A antiga cidade polinésia reúne quatro provas elementais, Máscaras Oceânicas, mutantes e enxames de vespas de Tinnos.",
      3
    ),
    level(
      19,
      "Meteorite Cavern",
      "Beneath Antarctica",
      "Willard activates the four artifacts, enters the meteorite pit, and returns as a giant spider-like mutant; Lara must remove every artifact to make him vulnerable.",
      "Sob a Antártida",
      "Willard ativa os quatro artefatos, entra no poço do meteorito e retorna como um mutante aracnídeo gigante; Lara precisa retirar todos os artefatos para torná-lo vulnerável.",
      0
    ),
    level(
      20,
      "All Hallows",
      "Bonus — London, England",
      "Unlockable bonus level set in and beneath a London cathedral, preserved after being removed from the main London sequence.",
      "Bônus — Londres, Inglaterra",
      "Nível bônus desbloqueável ambientado dentro e sob uma catedral de Londres, preservado após ser retirado da sequência principal londrina.",
      0,
      {
        bonus: true,
        note: "The original game unlocks it after the campaign when its 59-secret counter is satisfied; it is not one of the 19 story levels.",
        ptNote:
          "O jogo original o libera após a campanha quando seu contador de 59 segredos é satisfeito; ele não faz parte dos 19 níveis da história."
      }
    )
  ]
} satisfies GameArchiveInput;
