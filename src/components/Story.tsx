"use client";

import { storyPositioning, storyTaglines, storyCulture, storyAnchor } from "@/content/story";

export function Story() {
  return (
    <section id="story" className="px-6 py-[100px] md:px-10 md:py-[140px]">
      <div className="mx-auto max-w-[1200px]">
        {/* Block 1 — Positioning */}
        <h2 className="font-display font-[800] uppercase text-[clamp(28px,4vw,64px)] leading-[.92]">
          {storyPositioning.headline}
        </h2>
        <p className="mt-6 max-w-[560px] text-[16px] leading-[1.7] text-hyped-muted md:text-[17px]">
          {storyPositioning.body}
        </p>

        {/* Block 2 — Tagline / four maxxing modes */}
        <div className="mt-20 space-y-0 md:mt-28">
          {storyTaglines.map(({ verb, label }, i) => (
            <div
              key={label}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-5"
              style={{
                borderTop: "1px solid rgba(255,255,255,.08)",
                ...(i === storyTaglines.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,.08)" } : {}),
              }}
            >
              <span className="font-display font-[800] uppercase text-[clamp(24px,3.2vw,44px)] leading-[.92]">
                {verb}
              </span>
              <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Block 3 — Culture */}
        <div className="mt-20 max-w-[560px] md:mt-28">
          {storyCulture.split("\n\n").map((para, i) => (
            <p
              key={i}
              className={`text-[16px] leading-[1.8] md:text-[17px] ${i === 0 ? "font-medium text-hyped-white" : "mt-5 text-hyped-muted"}`}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Block 4 — Anchor */}
        <div className="mt-20 md:mt-28">
          <p className="font-display font-[800] uppercase text-[clamp(24px,3.5vw,48px)] leading-[.92] text-hyped-white">
            {storyAnchor}
          </p>
        </div>
      </div>
    </section>
  );
}
