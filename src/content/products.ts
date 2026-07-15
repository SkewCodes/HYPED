export interface Product {
  id: "max" | "trade" | "launch" | "bet";
  name: string;
  label: string;
  tagline: string;
  description: string;
  detail?: string;
  href: string;
  cta: string;
  status: "live" | "soon";
}

export const products: Product[] = [
  {
    id: "max",
    name: "hyped.max",
    label: "LIFE MAXXING",
    tagline: "Track your arc.",
    description: "For the person who locks in across every domain. Gym, trading, building, life — stack streaks, stay accountable, watch the growth compound.",
    href: "#waitlist",
    cta: "Coming Soon — Join Waitlist",
    status: "soon",
  },
  {
    id: "trade",
    name: "hyped.trade",
    label: "TRADE MAXXING",
    tagline: "For the person who treats markets as a craft, not a casino.",
    description: "On-chain conviction across 300+ markets. Crypto, equities, and commodities — one order book, 24/7, on Hyperliquid.",
    href: "#waitlist",
    cta: "Coming Soon",
    status: "soon",
  },
  {
    id: "launch",
    name: "hyped.launch",
    label: "BUILD MAXXING",
    tagline: "For the builder who ships, not the spectator who speculates.",
    description: "Fair-launch infrastructure for builders who treat shipping as a craft.",
    href: "#waitlist",
    cta: "Coming Soon",
    status: "soon",
  },
  {
    id: "bet",
    name: "hyped.bet",
    label: "BET MAXXING",
    tagline: "For conviction with skin in the game.",
    description: "Prediction markets for anything with an outcome. Put your edge where your mouth is.",
    href: "#waitlist",
    cta: "Coming Soon",
    status: "soon",
  },
];
