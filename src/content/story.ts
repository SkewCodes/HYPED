export interface ManifestoSection {
  type: "display" | "body" | "divider" | "products" | "anchor";
  text?: string;
  items?: { line: string; label: string }[];
}

export const manifesto: ManifestoSection[] = [
  // The Person
  {
    type: "body",
    text: "There's a type of person the internet was supposed to be built for but never was.",
  },
  {
    type: "body",
    text: "The person who wakes up and locks in. Who tracks their progress, sharpens their edge, and shows up again tomorrow whether anyone's watching or not. The person who treats trading like a craft, building like a calling, their body like a machine, and their net worth like a score that only goes up if they do the work.",
  },
  {
    type: "body",
    text: "This person exists everywhere. The dropshipper who outgrew arbitrage and started building a real brand. The gamer who stopped watching and started competing. The creator who got tired of renting someone else's platform. The trader who survived three cycles and is still here. The builder who ships in public because accountability is the point.",
  },
  {
    type: "body",
    text: "They don't have a home. They have a dozen apps, a scattered identity, and a culture that celebrates overnight wins while ignoring the daily grind that actually compounds.",
  },
  {
    type: "display",
    text: "Hyped exists for them.",
  },
  { type: "divider" },

  // The Failure
  {
    type: "body",
    text: "Every industry that mattered in the last decade was built for a version of this person — and failed them.",
  },
  {
    type: "body",
    text: "Dropshipping gave them arbitrage but not a brand. The hustler who wanted to build something real had to leave the model behind. Ecommerce gave them a storefront but not an identity — every purchase was a transaction, never a statement about who they were becoming. Esports gave them a spectacle but never a stake. Six hundred million people watch competitive gaming. Almost none of them earn, own, or shape the ecosystem they pour hours into. Media gave them a stage but not ownership. Two hundred million creators worldwide, and most don't own the platforms they depend on, the audiences they build, or the businesses their content sustains. Crypto gave them financial sovereignty and then drowned it in noise, rugs, and airdrops designed to extract attention, not reward commitment.",
  },
  {
    type: "display",
    text: "Different industries. Same failure. They were all built to serve transactions, not the people making them.",
  },
  { type: "divider" },

  // The Shift
  {
    type: "display",
    text: "The companies that define the next decade won't start with the product. They'll start with the person.",
  },
  {
    type: "body",
    text: "This is the shift that's already happening and most people are narrating it wrong. They call it \"community-led growth\" or \"culture-first branding\" and they mean: build an audience, then sell them something. That's not what's happening. What's happening is that identity is becoming the foundation. Not community as a marketing channel. Not culture as a brand wrapper. Identity — who you are, what you're pursuing, how you show up — as the thing everything else is built on.",
  },
  {
    type: "body",
    text: "Pudgy Penguins understood a version of this. Culture first. Community second. Products third. The order matters. But Hyped is building something different. Pudgy hides the financial rails behind the culture — you buy a toy, and somewhere in the background there's a blockchain. Hyped doesn't hide anything. The financial activity is part of the identity. Trading, betting, launching, stacking — these aren't backend infrastructure. They're how this person expresses who they are. The grind is the culture. The results are the proof.",
  },
  { type: "divider" },

  // The Word
  {
    type: "display",
    text: "Maxxing is the word for it because nothing else fits.",
  },
  {
    type: "body",
    text: "It's not self-improvement — that's a book you read and forget. It's not hustle culture — that burned out in 2019. Maxxing is the daily, measurable, public commitment to getting better at the things that matter to you. It compounds. It's specific. And it connects people who would otherwise never find each other.",
  },
  {
    type: "products",
    items: [
      { line: "Trade maxxing.", label: "TRADE" },
      { line: "Build maxxing.", label: "BUILD" },
      { line: "Life maxxing.", label: "LIFE" },
      { line: "Stack maxxing.", label: "STACK" },
    ],
  },
  {
    type: "body",
    text: "Four vectors. One identity. The person who locks in across all of them is the same person — and right now, they're scattered across platforms that serve one piece of who they are while ignoring the rest.",
  },
  { type: "divider" },

  // What's Next
  {
    type: "body",
    text: "What's next for dropshipping isn't a better supplier network. It's the builder who treats their brand like a craft — tracking, optimizing, compounding — inside a community of people doing the same.",
  },
  {
    type: "body",
    text: "What's next for ecommerce isn't a better checkout flow. It's identity that grows with every interaction, not just every purchase.",
  },
  {
    type: "body",
    text: "What's next for esports isn't bigger prize pools. It's giving six hundred million viewers a stake — not just a seat.",
  },
  {
    type: "body",
    text: "What's next for digital business isn't more SaaS. It's builders who own the infrastructure they create on and earn from what they ship.",
  },
  {
    type: "body",
    text: "What's next for media isn't more content. It's creators who own the culture they produce and the audience they built.",
  },
  {
    type: "body",
    text: "What's next for crypto isn't another protocol. It's a reason to stay — not just a reason to show up for the airdrop and leave.",
  },
  {
    type: "display",
    text: "The answer is the same across all of them. It's the person.",
  },
  { type: "divider" },

  // The Products
  {
    type: "body",
    text: "hyped.trade is for the person who treats markets as a craft, not a casino.",
  },
  {
    type: "body",
    text: "hyped.launch is for the builder who ships, not the spectator who speculates.",
  },
  {
    type: "body",
    text: "hyped.bet is for conviction with skin in the game.",
  },
  {
    type: "body",
    text: "hyped.max is for the daily lock-in that makes everything else compound.",
  },
  {
    type: "display",
    text: "These aren't four products. They're four expressions of one identity.",
  },
  { type: "divider" },

  // The Foundation
  {
    type: "body",
    text: "Community without revenue dies from good intentions. Products without community die from churn. Both fail the same person for the same reason — they got the sequence wrong.",
  },
  {
    type: "body",
    text: "Hyped builds on a different foundation. The community is financially native — not because we hid crypto rails behind a toy, but because the people who show up are already doing the work. Every trade, every build, every bet, every streak is real activity generating real value. The products don't extract from the culture. They emerge from it.",
  },
  {
    type: "body",
    text: "Every maxxing streak shared is distribution. Every leaderboard climbed is retention. Every builder who ships on the platform is a moat that widens. This isn't a growth hack. It's what happens when you build for a person instead of a transaction.",
  },
  { type: "divider" },

  // The Bet
  {
    type: "display",
    text: "The bet is that identity scales further than product.",
  },
  {
    type: "body",
    text: "That the person who locks in — across their trades, their builds, their body, their net worth — is an underserved market hiding in plain sight across a dozen industries. That serving them fully, in one place, with products that respect who they are and what they're building, creates something no single-vertical platform can replicate.",
  },
  {
    type: "body",
    text: "We're not building what's trending. We're building what's next.",
  },
  {
    type: "body",
    text: "And what's next has always been the same thing: a home for the people who refuse to settle for where they are today.",
  },
  {
    type: "anchor",
    text: "Lock in. Stay hyped.",
  },
];
