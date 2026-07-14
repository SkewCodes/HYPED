export interface NetworkEntry {
  name: string;
  description: string;
  href: string;
}

export const builtOn: NetworkEntry[] = [
  {
    name: "Hyperliquid",
    description: "The fastest on-chain order book. Hyped's financial products are planned to ship on Hyperliquid — the infrastructure layer for a new generation of on-chain markets.",
    href: "https://hyperliquid.xyz",
  },
];

export const partners: NetworkEntry[] = [
  {
    name: "TrueNorth",
    description: "AI trading intelligence powering the next generation of on-chain execution. Partnered via Hyped Agents.",
    href: "https://truenorth.xyz",
  },
];
