"use client";

import { pillars, manifestoOutro } from "@/content/manifesto";

export function ManifestoWall() {
  return (
    <section id="manifesto" className="px-6 py-[130px] md:px-10 md:pt-[150px]">
      <div className="mx-auto max-w-[1360px]">
        {/* Header row */}
        <div className="mb-14 flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs tracking-[.28em] text-[var(--accent)]">
            01 — THE MAXXING MANIFESTO
          </span>
          <span className="font-mono text-xs tracking-[.28em] text-hyped-muted">
            NOT A PRODUCT. A POSTURE.
          </span>
        </div>

        {/* Pillar rows */}
        {pillars.map((pillar, i) => (
          <div
            key={pillar.id}
            className="group grid items-baseline gap-x-6 py-[30px] transition-transform duration-[350ms] hover:translate-x-[18px]"
            style={{
              gridTemplateColumns: "90px 1fr auto",
              borderTop: "1px solid rgba(244,242,247,.1)",
              ...(i === pillars.length - 1 ? { borderBottom: "1px solid rgba(244,242,247,.1)" } : {}),
            }}
          >
            <span className="font-mono text-[13px] text-hyped-muted">
              /{String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display font-[800] uppercase text-[clamp(54px,6.8vw,116px)] leading-[.88] transition-colors duration-300 group-hover:text-[var(--accent)]">
              {pillar.title}
            </span>
            <span className="hidden font-mono text-[13px] text-hyped-muted text-right md:block">
              {pillar.line}
            </span>
            {/* Mobile: line below title */}
            <span className="col-span-3 mt-2 font-mono text-[13px] text-hyped-muted md:hidden">
              {pillar.line}
            </span>
          </div>
        ))}

        {/* Outro */}
        <p className="mt-11 max-w-[560px] font-mono text-[13px] leading-[1.7] tracking-[.06em] text-hyped-muted">
          {manifestoOutro}{" "}
          <a href="/manifesto" className="text-[var(--accent)] transition-colors hover:text-hyped-white">
            Read the full manifesto →
          </a>
        </p>
      </div>
    </section>
  );
}
