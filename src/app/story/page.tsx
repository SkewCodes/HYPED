import type { Metadata } from "next";
import { storyPositioning, storyTaglines, storyCulture, storyAnchor } from "@/content/story";
import { site } from "@/content/site";
import { PageLayout } from "@/components/PageLayout";

export const metadata: Metadata = {
  title: "Story — HYPED",
  description: "The brand for maxxing culture. Whatever you're maxxing — stay hyped.",
  openGraph: {
    title: "Story — HYPED",
    description: "The brand for maxxing culture. Whatever you're maxxing — stay hyped.",
    url: `${site.url}/story`,
    siteName: site.name,
    type: "website",
  },
};

export default function StoryPage() {
  return (
    <PageLayout>
      <section className="px-6 py-[80px] md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1200px]">
          <a
            href="/"
            className="mb-12 inline-flex items-center gap-2 font-mono text-xs tracking-[.1em] text-hyped-muted transition-colors hover:text-hyped-white"
          >
            &larr; Back
          </a>

          <h1 className="font-display font-[800] uppercase text-[clamp(36px,6vw,80px)] leading-[.88]">
            {storyPositioning.headline}
          </h1>

          <p className="mt-8 max-w-[620px] text-[17px] leading-[1.7] text-hyped-muted md:text-[19px]">
            {storyPositioning.body}
          </p>

          <div className="mt-20 md:mt-28">
            {storyTaglines.map(({ verb, label }, i) => (
              <div
                key={label}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-6"
                style={{
                  borderTop: "1px solid rgba(255,255,255,.08)",
                  ...(i === storyTaglines.length - 1 ? { borderBottom: "1px solid rgba(255,255,255,.08)" } : {}),
                }}
              >
                <span className="font-display font-[800] uppercase text-[clamp(28px,4vw,52px)] leading-[.92]">
                  {verb}
                </span>
                <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-[620px] md:mt-28">
            {storyCulture.split("\n\n").map((para, i) => (
              <p
                key={i}
                className={`text-[17px] leading-[1.8] md:text-[18px] ${i === 0 ? "font-medium text-hyped-white" : "mt-6 text-hyped-muted"}`}
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-24 md:mt-32">
            <p className="font-display font-[800] uppercase text-[clamp(28px,4.5vw,56px)] leading-[.92] text-hyped-white">
              {storyAnchor}
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
