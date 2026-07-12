import { pillars } from "@/content/manifesto";
import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

const pillarGradients = [
  "from-hyped-cyan/20 to-transparent",
  "from-accent-trade/20 to-transparent",
  "from-accent-launch/20 to-transparent",
  "from-accent-bet/20 to-transparent",
  "from-accent-max/20 to-transparent",
];

const pillarColors = [
  "text-hyped-cyan",
  "text-accent-trade",
  "text-accent-launch",
  "text-accent-bet",
  "text-accent-max",
];

export function TheCulture() {
  return (
    <section id="culture" className="relative bg-hyped-carbon py-24 md:py-40 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full opacity-10 blur-[150px]"
        style={{ background: "radial-gradient(circle, #9D6BFF 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
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

          <p className="mt-4 max-w-lg text-sm text-hyped-muted md:text-base">
            The principles that separate the locked-in from the left-behind.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.id}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-hyped-muted/10 bg-hyped-black p-6 transition-colors hover:border-hyped-cyan/20">
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillarGradients[i]}`} />

                <span className={`font-mono text-xs ${pillarColors[i]}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 font-display text-xl font-extrabold uppercase tracking-tight md:text-2xl">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-hyped-muted">
                  {pillar.line}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <a
            href="/manifesto"
            className="inline-flex items-center gap-2 rounded-xl border border-hyped-muted/20 px-6 py-3 text-sm font-semibold text-hyped-cyan uppercase tracking-wide transition-colors hover:border-hyped-cyan/40 hover:bg-hyped-cyan/5"
          >
            Read the full manifesto
            <span aria-hidden="true">&rarr;</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
