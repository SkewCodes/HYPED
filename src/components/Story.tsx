"use client";

import { storyPositioning, storyTaglines, storyCulture, storyAnchor } from "@/content/story";

export function Story() {
  return (
    <section id="story" className="px-6 py-[100px] md:px-10 md:py-[140px]">
      <div className="mx-auto max-w-[1000px]">
        {/* Block 1 — Positioning */}
        <h2 className="font-display font-[800] uppercase text-[clamp(40px,7vw,110px)] leading-[.88]">
          {storyPositioning.headline}
        </h2>
        <p className="mt-8 max-w-[640px] text-[17px] leading-[1.7] text-hyped-muted md:text-[19px]">
          {storyPositioning.body}
        </p>

        {/* Block 2 — Tagline / four maxxing modes */}
        <div className="mt-24 space-y-4 md:mt-32 md:space-y-5">
          {storyTaglines.map(({ verb, label }, i) => (
            <div
              key={label}
              className="flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-4"
              style={{
                borderTop: "1px solid rgba(255,255,255,.08)",
                ...(i === storyTaglines.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,.08)" } : {}),
              }}
            >
              <span className="font-display font-[800] uppercase text-[clamp(32px,5vw,72px)] leading-[.9]">
                {verb}
              </span>
              <span className="font-mono text-[12px] tracking-[.24em] text-[var(--accent)]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Block 3 — Culture */}
        <div className="mt-24 max-w-[640px] md:mt-32">
          {storyCulture.split("\n\n").map((para, i) => (
            <p
              key={i}
              className={`text-[17px] leading-[1.8] md:text-[19px] ${i === 0 ? "font-medium text-hyped-white" : "mt-6 text-hyped-muted"}`}
            >
              {para}
            </p>
          ))}
        </div>

        {/* Block 4 — Anchor */}
        <div className="mt-24 text-center md:mt-32">
          <p className="font-display font-[800] uppercase text-[clamp(36px,6vw,88px)] leading-[.88] text-hyped-white">
            {storyAnchor}
          </p>
        </div>
      </div>
    </section>
  );
}
