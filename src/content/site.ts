const siteUrl = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyped-max.vercel.app";

export const site = {
  name: "Hyped",
  url: siteUrl,
  title: "HYPED — Everything. Maxxed.",
  description:
    "Where markets meet culture & brands. Trade everything. Bet anything. Build infinitely. Stay locked in.",
  ogImage: "/media/og.png",
  nav: {
    links: [
      { label: "Products", href: "#products", external: false },
      { label: "Manifesto", href: "/manifesto", external: false },
      { label: "X", href: "https://x.com/hypedtrade", external: true },
    ],
    cta: { label: "Launch Terminal", href: "https://hyped.trade" },
  },
  footer: {
    products: [
      { label: "hyped.trade", href: "https://hyped.trade" },
      { label: "hyped.launch", href: "/#products" },
      { label: "hyped.bet", href: "/#products" },
      { label: "hyped.max", href: "/#products" },
    ],
    links: [
      { label: "Manifesto", href: "/manifesto" },
      { label: "X / Twitter", href: "https://x.com/hypedtrade" },
      { label: "YouTube", href: "https://youtube.com/@hypedtrade" },
    ],
    legal: "© 2026 Hyped. All rights reserved.",
  },
  social: {
    x: "https://x.com/hypedtrade",
    youtube: "https://youtube.com/@hypedtrade",
  },
  stats: [
    { label: "Products", value: "4", suffix: "" },
    { label: "Markets", value: "140", suffix: "+" },
    { label: "Community", value: "12", suffix: "K+" },
  ],
  statsAsOf: "2026-07",
  plausibleDomain: new URL(siteUrl).hostname,
  hypedTv: {
    videoId: "dQw4w9WgXcQ",
    title: "HYPED — The Vision",
    poster: "/media/hyped-tv-poster.webp",
  },
} as const;

export type SiteConfig = typeof site;
