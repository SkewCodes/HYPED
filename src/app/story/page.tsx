import type { Metadata } from "next";
import { storyPositioning, storyTaglines, storyCulture, storyAnchor } from "@/content/story";
import { Bolt } from "@/components/Bolt";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Story — HYPED",
  description: "Where markets meet culture. The Hyped story.",
  openGraph: {
    title: "Story — HYPED",
    description: "Where markets meet culture. The Hyped story.",
    url: `${site.url}/story`,
    siteName: site.name,
    type: "website",
  },
};

export default function StoryPage() {
  return (
    <main className="mx-auto max-w-[800px] px-6 py-32 md:py-40">
      <a
        href="/"
        className="mb-12 inline-flex items-center gap-2 font-mono text-xs tracking-[.1em] text-hyped-muted transition-colors hover:text-hyped-white"
      >
        &larr; Back
      </a>

      <h1 className="font-display font-[800] uppercase text-[clamp(2.5rem,8vw,5rem)] leading-[.88]">
        {storyPositioning.headline}
      </h1>

      <p className="mt-8 text-lg leading-[1.7] text-hyped-muted">
        {storyPositioning.body}
      </p>

      <div className="mt-16 space-y-6">
        {storyTaglines.map(({ verb, label }) => (
          <div key={label} className="flex items-baseline justify-between gap-4" style={{ borderBottom: "1px solid rgba(255,255,255,.08)" }}>
            <span className="font-display font-[800] uppercase text-[clamp(1.5rem,4vw,3rem)] leading-[.9] pb-3">
              {verb}
            </span>
            <span className="font-mono text-xs tracking-[.24em] text-[var(--accent)] shrink-0">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-16">
        {storyCulture.split("\n\n").map((para, i) => (
          <p key={i} className={`text-lg leading-[1.8] ${i === 0 ? "font-medium text-hyped-white" : "mt-6 text-hyped-muted"}`}>
            {para}
          </p>
        ))}
      </div>

      <div className="mt-20 pt-12 text-center" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
        <p className="font-display font-[800] uppercase text-[clamp(1.5rem,5vw,3rem)] leading-[.88]">
          {storyAnchor}
        </p>
      </div>
    </main>
  );
}
