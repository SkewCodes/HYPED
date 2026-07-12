import { pillars } from "@/content/manifesto";
import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

export function TheCulture() {
  return (
    <section id="culture" className="bg-hyped-carbon py-24 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <Slash size="sm" />
            <span className="text-xs font-semibold uppercase tracking-widest text-hyped-cyan">
              The Culture
            </span>
          </div>

          <h2 className="mt-10 font-display text-[clamp(2.5rem,6vw,5rem)] font-extrabold uppercase tracking-tight">
            Five Ways to Maxx
          </h2>
        </Reveal>

        <div className="mt-16 space-y-0">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.id}>
              <div className="group flex items-start gap-5 border-b border-hyped-muted/10 py-8 md:items-center md:gap-8 md:py-10">
                <span className="font-mono text-xs text-hyped-muted/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Slash size="md" className="mt-1 shrink-0 md:mt-0" />
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
                  <h3 className="font-display text-[clamp(1.5rem,4vw,3rem)] font-extrabold uppercase tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-hyped-muted md:text-base">{pillar.line}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <a
            href="/manifesto"
            className="inline-flex items-center gap-2 rounded-xl border border-hyped-muted/20 px-6 py-3 text-sm font-semibold text-hyped-cyan uppercase tracking-wide transition-colors hover:border-hyped-cyan/40"
          >
            Read the full manifesto
            <span aria-hidden="true">&rarr;</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
