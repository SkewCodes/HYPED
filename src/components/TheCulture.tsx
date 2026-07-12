import { pillars } from "@/content/manifesto";
import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

export function TheCulture() {
  return (
    <section id="culture" className="bg-hyped-carbon py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <Slash size="sm" />
            <span className="text-xs font-semibold uppercase tracking-widest text-hyped-cyan">
              The Culture
            </span>
          </div>

          <h2 className="mt-8 font-display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase tracking-tight">
            Five Ways to Maxx
          </h2>
        </Reveal>

        <div className="mt-12 space-y-8 md:space-y-12">
          {pillars.map((pillar) => (
            <Reveal key={pillar.id}>
              <div className="flex items-start gap-4">
                <Slash size="md" className="mt-2 shrink-0" />
                <div>
                  <h3 className="font-display text-[clamp(1.5rem,4vw,3rem)] font-extrabold uppercase tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-hyped-muted">{pillar.line}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <a
            href="/manifesto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-hyped-cyan uppercase tracking-wide transition-opacity hover:opacity-80"
          >
            Read the full manifesto
            <span aria-hidden="true">&rarr;</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
