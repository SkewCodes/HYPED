const siteUrl = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyped-max.vercel.app";

export const site = {
  name: "Hyped",
  url: siteUrl,
  title: "HYPED — Everything. Maxxed.",
  description:
    "Trade everything. Bet anything. Build infinitely. The maxxing ecosystem.",
  ogImage: "/api/og",
  nav: {
    links: [
      { label: "Manifesto", href: "#manifesto", external: false },
      { label: "Ecosystem", href: "#ecosystem", external: false },
      { label: "Receipts", href: "#receipts", external: false },
    ],
    cta: { label: "Launch Terminal", href: "https://hyped.trade" },
  },
  footer: {
    products: [
      { label: "hyped.trade", href: "https://hyped.trade" },
      { label: "hyped.launch", href: "#lockin" },
      { label: "hyped.bet", href: "#lockin" },
      { label: "hyped.max", href: "#lockin" },
    ],
    community: [
      { label: "Discord", href: "https://discord.gg/hyped" },
      { label: "X / Twitter", href: "https://x.com/hypedtrade" },
      { label: "YouTube", href: "https://youtube.com/@hypedtrade" },
      { label: "Manifesto", href: "/manifesto" },
    ],
    legal: "© 2026 Hyped. All rights reserved.",
  },
  social: {
    x: "https://x.com/hypedtrade",
    youtube: "https://youtube.com/@hypedtrade",
    discord: "https://discord.gg/hyped",
  },
  plausibleDomain: new URL(siteUrl).hostname,
  founder: {
    name: "Skew",
    x: "https://x.com/52kskew",
  },
} as const;

export type SiteConfig = typeof site;
