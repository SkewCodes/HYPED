"use client";

import { pillars, manifestoOutro } from "@/content/manifesto";

export function ManifestoWall() {
  return (
    <section id="manifesto" className="px-6 py-[100px] md:px-10 md:py-[130px] md:pt-[150px]">
      <div className="mx-auto max-w-[1360px]">
        {/* Header row */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 md:mb-14">
          <span className="font-mono text-xs tracking-[.28em] text-[var(--accent)]">
            01 — THE MAXXING MANIFESTO
          </span>
          <span className="hidden font-mono text-xs tracking-[.28em] text-hyped-muted sm:block">
            NOT A PRODUCT. A POSTURE.
          </span>
        </div>

        {/* Pillar rows */}
        {pillars.map((pillar, i) => (
          <div
            key={pillar.id}
            className="group flex flex-col gap-2 py-6 transition-transform duration-[350ms] md:grid md:items-baseline md:gap-x-6 md:py-[30px] md:hover:translate-x-[18px]"
            style={{
              gridTemplateColumns: "90px 1fr auto",
              borderTop: "1px solid rgba(244,242,247,.1)",
              ...(i === pillars.length - 1 ? { borderBottom: "1px solid rgba(244,242,247,.1)" } : {}),
            }}
          >
            <span className="font-mono text-[13px] text-hyped-muted">
              /{String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display font-[800] uppercase text-[clamp(40px,6.8vw,116px)] leading-[.88] transition-colors duration-300 group-hover:text-[var(--accent)]">
              {pillar.title}
            </span>
            <span className="font-mono text-[13px] leading-[1.6] text-hyped-muted md:text-right">
              {pillar.line}
            </span>
          </div>
        ))}

        {/* Outro */}
        <p className="mt-8 max-w-[560px] font-mono text-[13px] leading-[1.7] tracking-[.06em] text-hyped-muted md:mt-11">
          {manifestoOutro}{" "}
          <a href="/manifesto" className="text-[var(--accent)] transition-colors hover:text-hyped-white">
            Read the full manifesto →
          </a>
        </p>
      </div>
    </section>
  );
}
