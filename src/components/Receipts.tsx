import { Reveal } from "./Reveal";
import { site } from "@/content/site";

const receipts = [
  {
    title: "Built in public",
    body: `by @${site.founder.name}`,
    href: site.founder.x,
  },
  {
    title: "Shipped, not promised",
    body: "hyped.trade is live.",
    href: "https://hyped.trade",
  },
  {
    title: "Community-built",
    body: "Culture first. Product second. Exit never.",
  },
];

export function Receipts() {
  return (
    <section id="receipts" className="bg-hyped-purple py-24 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.85] tracking-tight">
            No VC. No Shortcuts.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {receipts.map((receipt) => (
            <Reveal key={receipt.title}>
              <div className="rounded-[12px] border border-hyped-white/5 bg-hyped-purple p-6">
                <h3 className="text-lg font-medium text-hyped-white">
                  {receipt.title}
                </h3>
                <p className="mt-2 text-sm text-hyped-muted">
                  {receipt.href ? (
                    <a
                      href={receipt.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-hyped-cyan transition-opacity hover:opacity-80"
                    >
                      {receipt.body}
                    </a>
                  ) : (
                    receipt.body
                  )}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
