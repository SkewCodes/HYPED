const siteUrl = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyped-max.vercel.app";

export const site = {
  name: "Hyped",
  url: siteUrl,
  title: "HYPED — Everything. Maxxed.",
  description:
    "The crypto-native culture and product ecosystem for the ambitious who show up. Trade, predict, launch, and lock in.",
  ogImage: "/api/og",
  nav: {
    links: [
      { label: "PRODUCTS", href: "#products" },
      { label: "HYPED TV", href: "#hyped-tv" },
      { label: "STORY", href: "#story" },
      { label: "ECOSYSTEM", href: "#ecosystem" },
    ],
    cta: { label: "EXPLORE PRODUCTS", href: "#products" },
  },
  footer: {
    products: [
      { label: "hyped.trade", href: "https://hyped.trade" },
      { label: "hyped.launch", href: "#waitlist" },
      { label: "hyped.bet", href: "#waitlist" },
      { label: "hyped.max", href: "#waitlist" },
    ],
    links: [
      { label: "Story", href: "#story" },
      { label: "Hyped TV", href: "#hyped-tv" },
    ],
    socials: [
      { label: "X", href: "https://x.com/52kskew" },
      { label: "YouTube", href: "https://www.youtube.com/@52kskew" },
      { label: "Discord — Soon", href: "" },
    ],
    legal: "© 2026 Hyped. All rights reserved.",
  },
  social: {
    x: "https://x.com/52kskew",
    youtube: "https://www.youtube.com/@52kskew",
    discord: "https://discord.gg/hyped",
  },
  plausibleDomain: new URL(siteUrl).hostname,
  founder: {
    name: "Skew",
    x: "https://x.com/52kskew",
  },
  anchor: "Lock in & stay hyped.",
} as const;

export type SiteConfig = typeof site;
