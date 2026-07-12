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
      { label: "Apps", href: "#products", external: false },
      { label: "Ecosystem", href: "#ecosystem", external: false },
      { label: "Manifesto", href: "/manifesto", external: false },
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
    ecosystem: [
      { label: "Discord", href: "https://discord.gg/hyped" },
      { label: "X / Twitter", href: "https://x.com/hypedtrade" },
      { label: "YouTube", href: "https://youtube.com/@hypedtrade" },
    ],
    legal: "© 2026 Hyped. All rights reserved.",
  },
  social: {
    x: "https://x.com/hypedtrade",
    youtube: "https://youtube.com/@hypedtrade",
    discord: "https://discord.gg/hyped",
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
  team: [
    {
      name: "Skew",
      role: "Founder",
      bio: "Trader. Builder. Shipping the Hyped ecosystem.",
      x: "https://x.com/52kskew",
      image: "/media/skew.webp",
    },
  ],
  partners: [
    {
      name: "TrueNorth",
      href: "https://truenorth.com",
      logo: "/media/partners/truenorth.svg",
    },
  ],
  ecosystem: [
    {
      name: "Discord",
      href: "https://discord.gg/hyped",
      description: "Join the community",
      icon: "discord" as const,
    },
    {
      name: "X / Twitter",
      href: "https://x.com/hypedtrade",
      description: "Follow the build",
      icon: "x" as const,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@hypedtrade",
      description: "Watch Hyped TV",
      icon: "youtube" as const,
    },
  ],
} as const;

export type SiteConfig = typeof site;
