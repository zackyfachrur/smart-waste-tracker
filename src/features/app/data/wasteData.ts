import type {
  RankItem,
  WasteType,
  EduItem,
  TimelineItem,
  TrendData,
  MetricCard,
} from "../types/waste";

export const METRICS: MetricCard[] = [
  {
    label: "Daily Waste",
    value: "175,000",
    unit: "tons/day",
    delta: "↑ 5% from 2023",
    deltaType: "up",
  },
  {
    label: "Ocean Leakage / Year",
    value: "620,000",
    unit: "tons of plastic",
    delta: "↑ Ranked #2 globally",
    deltaType: "up",
  },
  {
    label: "Polluted Rivers",
    value: "4,000+",
    unit: "rivers in Indonesia",
    delta: "↑ Needs urgent attention",
    deltaType: "up",
  },
  {
    label: "Recycling Rate",
    value: "7.5%",
    unit: "of total waste",
    delta: "Target: 30% by 2030",
    deltaType: "down",
  },
];

export const BEACHES: RankItem[] = [
  {
    name: "Kuta Beach, Bali",
    sub: "Denpasar, Bali",
    val: 64,
    unit: "tons/day",
    color: "#E24B4A",
  },
  {
    name: "Ancol Beach, Jakarta",
    sub: "North Jakarta",
    val: 51,
    unit: "tons/day",
    color: "#BA7517",
  },
  {
    name: "Losari Beach, Makassar",
    sub: "South Sulawesi",
    val: 38,
    unit: "tons/day",
    color: "#378ADD",
  },
  {
    name: "Padang Beach",
    sub: "West Sumatra",
    val: 27,
    unit: "tons/day",
    color: "#639922",
  },
  {
    name: "Ambon Beach",
    sub: "Maluku",
    val: 22,
    unit: "tons/day",
    color: "#888780",
  },
];

export const RIVERS: RankItem[] = [
  {
    name: "Citarum River",
    sub: "West Java — one of the most polluted in the world",
    val: 35000,
    unit: "tons/year",
    color: "#E24B4A",
  },
  {
    name: "Ciliwung River",
    sub: "Jakarta — flows through the city center",
    val: 18000,
    unit: "tons/year",
    color: "#D85A30",
  },
  {
    name: "Brantas River",
    sub: "East Java",
    val: 12000,
    unit: "tons/year",
    color: "#BA7517",
  },
  {
    name: "Musi River",
    sub: "South Sumatra",
    val: 9500,
    unit: "tons/year",
    color: "#534AB7",
  },
  {
    name: "Bengawan Solo River",
    sub: "Central & East Java",
    val: 8200,
    unit: "tons/year",
    color: "#888780",
  },
];

export const CITIES: RankItem[] = [
  {
    name: "Jakarta",
    sub: "DKI Jakarta",
    val: 7500,
    unit: "tons/day",
    color: "#E24B4A",
  },
  {
    name: "Surabaya",
    sub: "East Java",
    val: 2600,
    unit: "tons/day",
    color: "#D85A30",
  },
  {
    name: "Bandung",
    sub: "West Java",
    val: 1800,
    unit: "tons/day",
    color: "#BA7517",
  },
  {
    name: "Medan",
    sub: "North Sumatra",
    val: 1600,
    unit: "tons/day",
    color: "#534AB7",
  },
  {
    name: "Makassar",
    sub: "South Sulawesi",
    val: 900,
    unit: "tons/day",
    color: "#888780",
  },
];

export const WASTE_TYPES: WasteType[] = [
  {
    icon: "🥬",
    name: "Organic / Food Waste",
    pct: 39,
    color: "#3B6D11",
    src: "Households",
  },
  {
    icon: "🧴",
    name: "Plastic",
    pct: 19,
    color: "#E24B4A",
    src: "Packaging & bags",
  },
  {
    icon: "📄",
    name: "Paper & Cardboard",
    pct: 13,
    color: "#BA7517",
    src: "Offices & retail",
  },
  {
    icon: "🪵",
    name: "Wood & Branches",
    pct: 11,
    color: "#639922",
    src: "Gardens & construction",
  },
  {
    icon: "🪨",
    name: "Rubber & Leather",
    pct: 6,
    color: "#888780",
    src: "Industry",
  },
  {
    icon: "🔩",
    name: "Metal",
    pct: 4,
    color: "#534AB7",
    src: "Electronics & vehicles",
  },
  {
    icon: "🍶",
    name: "Glass",
    pct: 3,
    color: "#185FA5",
    src: "Bottles & packaging",
  },
  {
    icon: "🔋",
    name: "Hazardous & Others",
    pct: 5,
    color: "#993C1D",
    src: "Electronics & medical",
  },
];

export const EDU_ITEMS: EduItem[] = [
  {
    icon: "✂️",
    bg: "#FAECE7",
    title: "Sort Waste into 3 Categories",
    desc: "Separate organic (green), inorganic (yellow), and hazardous (red). Reduce landfill waste by up to 40%.",
    tag: "Easiest",
    tagType: "success",
  },
  {
    icon: "🌿",
    bg: "#EAF3DE",
    title: "Compost Organic Waste",
    desc: "Kitchen waste (vegetables, fruits, rice) can be turned into compost within 3–4 weeks.",
    tag: "Cost Saving",
    tagType: "success",
  },
  {
    icon: "♻️",
    bg: "#E6F1FB",
    title: "Waste Banks",
    desc: "Collect plastic, paper, and metal at waste banks and exchange them for money or goods.",
    tag: "Earn Money",
    tagType: "warning",
  },
  {
    icon: "🚫",
    bg: "#FCEBEB",
    title: "Dangers of Dumping Waste into Rivers",
    desc: "River pollution harms ecosystems, causes flooding, and contaminates drinking water for millions.",
    tag: "Important",
    tagType: "danger",
  },
  {
    icon: "🛍️",
    bg: "#FAEEDA",
    title: "Reduce Single-Use Plastic",
    desc: "Bring your own shopping bag, bottle, and lunch box. One person can reduce up to 150 plastic bottles/year.",
    tag: "Zero Waste",
    tagType: "success",
  },
  {
    icon: "🔥",
    bg: "#FAECE7",
    title: "Do Not Burn Waste",
    desc: "Burning waste produces dioxins and furans, up to 40× more dangerous than vehicle emissions.",
    tag: "Dangerous",
    tagType: "danger",
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2008",
    text: "Law No. 18/2008 on Waste Management enacted",
    color: "#378ADD",
  },
  {
    year: "2017",
    text: "Presidential Regulation No. 97/2017: 30% national waste reduction target",
    color: "#3B6D11",
  },
  {
    year: "2019",
    text: "Single-use plastic ban implemented in Jakarta",
    color: "#639922",
  },
  {
    year: "2021",
    text: "Citarum Harum program expanded",
    color: "#185FA5",
  },
  {
    year: "2023",
    text: "Indonesia ratified the global UN plastic agreement",
    color: "#534AB7",
  },
  {
    year: "2025",
    text: "Target: 70% waste managed, 30% reduced at source",
    color: "#0F6E56",
  },
];

export const TREND_DATA: TrendData[] = [
  { year: "2018", value: 480 },
  { year: "2019", value: 510 },
  { year: "2020", value: 495 },
  { year: "2021", value: 530 },
  { year: "2022", value: 575 },
  { year: "2023", value: 600 },
  { year: "2024", value: 620 },
];