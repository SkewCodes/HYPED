const siteUrl = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyped-max.vercel.app";

export const site = {
  name: "Hyped",
  url: siteUrl,
  title: "HYPED — Be Hyped, Dream Big.",
  description:
    "The home for people who lock in. Culture that compounds. Products that earn.",
  ogImage: "/api/og",
  northStar: "Be Hyped, Dream Big.",
  positioning: "The home for people who lock in.",
  mantra: "Lock in. Stay hyped.",
  nav: {
    links: [
      { label: "MANIFESTO", href: "/story" },
      { label: "ECOSYSTEM", href: "/products" },
      { label: "NETWORK", href: "/partners" },
      { label: "HYPED TV", href: "/tv" },
    ],
    cta: { label: "LOCK IN", href: "/#waitlist" },
  },
  footer: {
    links: [
      { label: "Manifesto", href: "/story" },
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
} as const;

export type SiteConfig = typeof site;
