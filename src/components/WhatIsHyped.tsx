import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

export function WhatIsHyped() {
  return (
    <section className="py-24 md:py-40">
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
          <h2 className="mt-10 font-display text-[clamp(2.5rem,7vw,6rem)] font-bold uppercase leading-[0.95] tracking-tight">
            Not a product.
            <br />
            A posture.
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-10 max-w-2xl">
            <p className="text-lg leading-relaxed text-hyped-muted md:text-xl md:leading-relaxed">
              Hyped is a culture-first ecosystem where markets meet community.
              We build tools for people who lock in, grind, and refuse default
              settings.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-hyped-muted md:text-xl md:leading-relaxed">
              The products are coming.
              <span className="text-hyped-white"> The culture is already here.</span>
            </p>
          </div>
        </Reveal>

        {/* Brand image placeholder */}
        <Reveal className="mt-16">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-hyped-muted/10 bg-hyped-carbon">
            <img
              src="/media/hero-loop-poster.webp"
              alt="Hyped brand"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Slash size="lg" className="opacity-30" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
