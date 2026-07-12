import { Slash } from "./Slash";
import { Reveal } from "./Reveal";
import { NetworkGraph } from "./NetworkGraph";

export function WhatIsHyped() {
  return (
    <section className="py-24 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-3">
                <Slash size="sm" />
                <span className="text-xs font-semibold uppercase tracking-widest text-hyped-cyan">
                  What is Hyped
                </span>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="mt-10 font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.95] tracking-tight">
                Not a product.
                <br />
                A posture.
              </h2>
            </Reveal>

            <Reveal>
              <div className="mt-8">
                <p className="text-lg leading-relaxed text-hyped-muted md:text-xl md:leading-relaxed">
                  Hyped is a culture-first ecosystem where markets meet community.
                  We build tools for people who lock in, grind, and refuse default
                  settings.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-hyped-muted md:text-xl md:leading-relaxed">
                  The products are coming.
                  <span className="text-hyped-white font-semibold"> The culture is already here.</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Code-generated network visualization */}
          <Reveal>
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-hyped-muted/10 bg-hyped-carbon">
              <NetworkGraph />
              <div className="absolute inset-0 flex items-center justify-center">
                <Slash size="lg" className="!h-16 !w-12 opacity-20" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-hyped-carbon via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
