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
    tagline: "The home for locking in.",
    description: "Track the grind across every domain — gym, trading, building, life. Stack streaks. Stay accountable. Join the community of people who show up every day.",
    href: "#waitlist",
    cta: "Coming Soon — Join Waitlist",
    status: "soon",
  },
  {
    id: "trade",
    name: "hyped.trade",
    label: "TRADE MAXXING",
    tagline: "The perps terminal for on-chain conviction.",
    description: "300+ markets on Hyperliquid. Crypto, equities, and commodities — all on one on-chain order book, 24/7.",
    href: "#waitlist",
    cta: "Coming Soon",
    status: "soon",
  },
  {
    id: "launch",
    name: "hyped.launch",
    label: "CODE MAXXING",
    tagline: "Ship tokens from code to liquid.",
    description: "Fair-launch infra for builders who ship.",
    href: "#waitlist",
    cta: "Coming Soon",
    status: "soon",
  },
  {
    id: "bet",
    name: "hyped.bet",
    label: "BET MAXXING",
    tagline: "Predict everything. Settle on-chain.",
    description: "Prediction markets for anything with an outcome.",
    href: "#waitlist",
    cta: "Coming Soon",
    status: "soon",
  },
];
