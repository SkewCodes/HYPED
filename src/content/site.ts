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
      { label: "MANIFESTO", href: "#manifesto" },
      { label: "ECOSYSTEM", href: "#ecosystem" },
      { label: "RECEIPTS", href: "#receipts" },
    ],
    cta: { label: "JOIN WAITLIST", href: "#lockin" },
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
    legal: "© 2026 HYPED. ALL RIGHTS RESERVED.",
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
