const siteUrl = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyped-max.vercel.app";

export const site = {
  name: "Hyped",
  url: siteUrl,
  title: "HYPED — Everything. Maxxed.",
  description:
    "A culture, a community, and an ecosystem for those who refuse to settle. Lock in.",
  ogImage: "/api/og",
  nav: {
    links: [
      { label: "Culture", href: "#culture", external: false },
      { label: "Apps", href: "#apps", external: false },
      { label: "Community", href: "#community", external: false },
    ],
    cta: { label: "Lock In", href: "#waitlist" },
  },
  footer: {
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
