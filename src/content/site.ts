const siteUrl = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyped-max.vercel.app";

export const site = {
  name: "Hyped",
  url: siteUrl,
  title: "HYPED — Everything. Maxxed.",
  description:
    "The brand for maxxing culture. Whatever you're maxxing — stay hyped.",
  ogImage: "/api/og",
  nav: {
    links: [
      { label: "STORY", href: "/story" },
      { label: "ECOSYSTEM", href: "/products" },
      { label: "NETWORK", href: "/partners" },
      { label: "HYPED TV", href: "/tv" },
    ],
    cta: { label: "LOCK IN", href: "/#waitlist" },
  },
  footer: {
    links: [
      { label: "Story", href: "/story" },
      { label: "Ecosystem", href: "/products" },
      { label: "Network", href: "/partners" },
      { label: "Hyped TV", href: "/tv" },
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
