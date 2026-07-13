export interface EcosystemPartner {
  name: string;
  description: string;
  href: string;
  logo?: string;
}

export const builtOn: EcosystemPartner[] = [
  {
    name: "Hyperliquid",
    description: "The on-chain order book powering hyped.trade.",
    href: "https://hyperliquid.xyz",
  },
];

export const partners: EcosystemPartner[] = [
  {
    name: "TrueNorth",
    description: "The world's first agentic brokerage — AI trading intelligence for the masses.",
    href: "https://truenorth.xyz",
  },
];
