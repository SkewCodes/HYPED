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
}

export const products: Product[] = [
  {
    id: "trade",
    name: "hyped.trade",
    tagline: "Execute at the edge",
    description:
      "The fastest perps terminal built for on-chain degens who refuse to settle for CEX latency.",
    href: "https://hyped.trade",
    status: "live",
    video: {
      mp4: "/media/trade-loop.mp4",
      webm: "/media/trade-loop.webm",
      poster: "/media/trade-loop-poster.webp",
      aspect: "4/5",
    },
    accentLabel: "TRADE MAXXING",
  },
  {
    id: "launch",
    name: "hyped.launch",
    tagline: "Graduate tokens faster",
    description:
      "Fair-launch infrastructure that takes projects from deploy to liquid in one seamless flow.",
    href: "https://hyped.launch",
    status: "soon",
    video: {
      mp4: "/media/launch-loop.mp4",
      webm: "/media/launch-loop.webm",
      poster: "/media/launch-loop-poster.webp",
      aspect: "4/5",
    },
    accentLabel: "LAUNCH MAXXING",
  },
  {
    id: "bet",
    name: "hyped.bet",
    tagline: "Predict everything on-chain",
    description:
      "Prediction markets for crypto, culture, and chaos — permissionless and instant settlement.",
    href: "https://hyped.bet",
    status: "soon",
    video: {
      mp4: "/media/bet-loop.mp4",
      webm: "/media/bet-loop.webm",
      poster: "/media/bet-loop-poster.webp",
      aspect: "4/5",
    },
    accentLabel: "BET MAXXING",
  },
  {
    id: "max",
    name: "hyped.max",
    tagline: "Stack streaks, earn more",
    description:
      "Gamified loyalty that rewards the grind — trade more, streak more, unlock more.",
    href: "https://hyped.max",
    status: "soon",
    video: {
      mp4: "/media/max-loop.mp4",
      webm: "/media/max-loop.webm",
      poster: "/media/max-loop-poster.webp",
      aspect: "4/5",
    },
    accentLabel: "STREAK MAXXING",
  },
];
