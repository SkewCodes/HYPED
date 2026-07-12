"use client";

import { pillars } from "@/content/manifesto";
import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

export function ManifestoWall() {
  return (
    <section id="manifesto" className="py-24 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="space-y-16 md:space-y-24">
          {pillars.map((pillar) => (
            <Reveal key={pillar.id}>
              <div className="flex items-start gap-4 md:gap-6">
                <Slash size="md" className="mt-2 shrink-0 origin-left transition-transform duration-700" />
                <div>
                  <h2 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.85] tracking-tight">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-hyped-muted">
                    {pillar.line}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 md:mt-24">
          <a
            href="/manifesto"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-hyped-cyan transition-opacity hover:opacity-80"
          >
            Read the full manifesto →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
