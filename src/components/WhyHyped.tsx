import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

const valueProps = [
  {
    title: "One ecosystem, not 10 tabs",
    description: "Trade, launch, bet, and streak from one platform. Every app built to compound your edge.",
  },
  {
    title: "Built for the trenches",
    description: "By traders, for traders. No VC playbook, no tourist features. Just tools that perform.",
  },
  {
    title: "Culture is the edge",
    description: "Community-first, grind-coded, zero shortcuts. The culture is the moat.",
  },
];

export function WhyHyped() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase tracking-tight">
            Why Hyped
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {valueProps.map((prop) => (
            <Reveal key={prop.title}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Slash size="sm" />
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                    {prop.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-hyped-muted">
                  {prop.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
