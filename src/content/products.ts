export interface MediaAsset {
  mp4: string;
  webm: string;
  poster: string;
  aspect: `${number}/${number}`;
}

export interface Product {
  id: "trade" | "launch" | "bet" | "max";
  name: string;
  tagline: string;
  description: string;
  href: string;
  status: "live" | "soon";
  video: MediaAsset;
  accentLabel: string;
  cta: string;
}

export const products: Product[] = [
  {
    id: "trade",
    name: "hyped.trade",
    tagline: "Execute at the edge",
    description:
      "The perps terminal for traders who refuse CEX latency.",
    href: "https://hyped.trade",
    status: "live",
    video: {
      mp4: "/media/trade-loop.mp4",
      webm: "/media/trade-loop.webm",
      poster: "/media/trade-loop-poster.webp",
      aspect: "4/5",
    },
    accentLabel: "TRADE MAXXING",
    cta: "Launch →",
  },
  {
    id: "launch",
    name: "hyped.launch",
    tagline: "Graduate tokens faster",
    description:
      "From deploy to liquid in one flow. Fair-launch infrastructure for the trenches.",
    href: "#lockin",
    status: "soon",
    video: {
      mp4: "/media/launch-loop.mp4",
      webm: "/media/launch-loop.webm",
      poster: "/media/launch-loop-poster.webp",
      aspect: "4/5",
    },
    accentLabel: "TRENCH MAXXING",
    cta: "Coming Soon",
  },
  {
    id: "bet",
    name: "hyped.bet",
    tagline: "Predict everything",
    description:
      "Markets for crypto, culture, and chaos. Permissionless, instant settlement.",
    href: "#lockin",
    status: "soon",
    video: {
      mp4: "/media/bet-loop.mp4",
      webm: "/media/bet-loop.webm",
      poster: "/media/bet-loop-poster.webp",
      aspect: "4/5",
    },
    accentLabel: "BET MAXXING",
    cta: "Coming Soon",
  },
  {
    id: "max",
    name: "hyped.max",
    tagline: "Maxx every arena",
    description:
      "The cultural home of maxxing — trade, build, life, stack. Streaks, leagues, and receipts for the grind.",
    href: "#lockin",
    status: "soon",
    video: {
      mp4: "/media/max-loop.mp4",
      webm: "/media/max-loop.webm",
      poster: "/media/max-loop-poster.webp",
      aspect: "4/5",
    },
    accentLabel: "LIFE MAXXING",
    cta: "Coming Soon",
  },
];
