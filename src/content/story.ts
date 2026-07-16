export interface ManifestoSection {
  type: "display" | "body" | "divider" | "anchor";
  text?: string;
}

export const manifesto: ManifestoSection[] = [
  // The Hook
  {
    type: "body",
    text: "There's a type of person the internet was supposed to be built for but never was.",
  },
  {
    type: "body",
    text: "The one who wakes up and locks in. Who tracks the progress, sharpens the edge, and shows up again tomorrow whether anyone's watching or not.",
  },
  {
    type: "display",
    text: "Hyped exists for them.",
  },
  { type: "divider" },

  // The Problem
  {
    type: "body",
    text: "The world celebrates the overnight win. The viral moment. The shortcut. It puts the result on a pedestal and hides the ten thousand hours that built it.",
  },
  {
    type: "body",
    text: "Nobody built a home for the person in the middle of the grind. The one still awake at 2am because they're not done yet. The one who doesn't post the win — they post the work.",
  },
  {
    type: "display",
    text: "That person has been scattered across a dozen apps with no identity, no community, and no culture that actually gets it.",
  },
  { type: "divider" },

  // The Word
  {
    type: "display",
    text: "Maxxing is the word for it because nothing else fits.",
  },
  {
    type: "body",
    text: "It's not self-improvement. That's a book you read and forget. It's not hustle culture. That burned out years ago. Maxxing is the daily, measurable, public commitment to getting better at the things that matter to you.",
  },
  {
    type: "body",
    text: "It compounds. It's specific. And it connects people who would otherwise never find each other.",
  },
  {
    type: "body",
    text: "Whatever you're maxxing — your craft, your body, your mind, your income, your skill, your discipline — the energy is the same. The person is the same.",
  },
  { type: "divider" },

  // The Home
  {
    type: "body",
    text: "Hyped is the home for that energy. Not a tool. Not a feed. A place where locking in is the culture, not the exception.",
  },
  {
    type: "body",
    text: "Where the person who shows up every single day has a name for what they're doing and a community that speaks the same language.",
  },
  {
    type: "display",
    text: "We don't build for transactions. We build for the people making them.",
  },
  { type: "divider" },

  // The Bet
  {
    type: "body",
    text: "The bet is simple. Identity scales further than any product. The person who locks in across everything they care about is an underserved market hiding in plain sight — and serving them fully, in one place, creates something no single-purpose app can replicate.",
  },
  {
    type: "body",
    text: "We're not building what's trending. We're building what's next. And what's next has always been the same thing — a home for the people who refuse to settle for where they are today.",
  },

  // Anchor
  {
    type: "anchor",
    text: "Lock in. Stay hyped.",
  },
];
