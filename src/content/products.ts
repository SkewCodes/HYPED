export interface Product {
  id: "trade" | "launch" | "bet" | "max";
  name: string;
  label: string;
  tagline: string;
  description: string;
  href: string;
  cta: string;
  status: "live" | "soon";
}

export const products: Product[] = [
  {
    id: "trade",
    name: "hyped.trade",
    label: "TRADE MAXXING",
    tagline: "Execute at the edge",
    description: "The perps terminal for on-chain conviction.",
    href: "https://hyped.trade",
    cta: "Launch Terminal →",
    status: "live",
  },
  {
    id: "launch",
    name: "hyped.launch",
    label: "CODE MAXXING",
    tagline: "Ship tokens from code to liquid",
    description: "Ship tokens from code to liquid.",
    href: "#waitlist",
    cta: "Coming Soon",
    status: "soon",
  },
  {
    id: "bet",
    name: "hyped.bet",
    label: "BET MAXXING",
    tagline: "Predict everything",
    description: "Predict everything. Settle on-chain.",
    href: "#waitlist",
    cta: "Coming Soon",
    status: "soon",
  },
  {
    id: "max",
    name: "hyped.max",
    label: "LIFE MAXXING",
    tagline: "Stack streaks",
    description: "Stack streaks. Stay locked in.",
    href: "#waitlist",
    cta: "Coming Soon",
    status: "soon",
  },
];
