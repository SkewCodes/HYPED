import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

export function WhatIsHyped() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <Slash size="sm" />
            <span className="text-xs font-semibold uppercase tracking-widest text-hyped-cyan">
              What is Hyped
            </span>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="mt-8 font-display text-[clamp(2rem,6vw,5rem)] font-bold uppercase leading-tight tracking-tight">
            Not a product.
            <br />
            A posture.
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-hyped-muted md:text-xl">
            Hyped is a culture-first ecosystem where markets meet community.
            We build tools for people who lock in, grind, and refuse default
            settings. The products are coming. The culture is already here.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
