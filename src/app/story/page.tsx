import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageLayout } from "@/components/PageLayout";
import {
  storyIdentity,
  storyDefinition,
  storyMission,
  storyCommunity,
  storyExpansion,
  storyAnchor,
} from "@/content/story";

export const metadata: Metadata = {
  title: "Story — HYPED",
  description: "The brand for maxxing culture. The home for locking in — peak fitness, peak net worth, peak performance, peak anything.",
  openGraph: {
    title: "Story — HYPED",
    description: "The brand for maxxing culture. The home for locking in — peak fitness, peak net worth, peak anything.",
    url: `${site.url}/story`,
    siteName: site.name,
    type: "website",
  },
};

export default function StoryPage() {
  return (
    <PageLayout>
      <article className="px-6 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="pt-16 pb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[.1em] text-hyped-muted transition-colors hover:text-hyped-white"
            >
              &larr; Back
            </a>
          </div>

          {/* Block 1 — The Identity */}
          <section className="py-[60px] md:py-[100px]">
            <h1 className="font-display font-[900] uppercase text-[clamp(32px,5vw,56px)] leading-[.9] tracking-[.01em]">
              {storyIdentity}
            </h1>
          </section>

          {/* Block 2 — The Definition */}
          <section
            className="py-[60px] md:py-[100px]"
            style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
          >
            <h2 className="font-display font-[800] uppercase text-[clamp(24px,3.5vw,36px)] leading-[.92]">
              {storyDefinition.headline}
            </h2>
            <p className="mt-8 max-w-[600px] text-[16px] leading-[1.8] text-hyped-muted md:text-[17px]">
              {storyDefinition.body}
            </p>
            <p className="mt-10 font-mono text-[13px] tracking-[.04em] leading-[2.2] text-hyped-white md:text-[14px]">
              {storyDefinition.mantra.split(". ").map((word, i, arr) => (
                <span key={i}>
                  {word}{i < arr.length - 1 ? "." : ""}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
            <p className="mt-8 text-[16px] leading-[1.8] text-hyped-muted md:text-[17px]">
              {storyDefinition.closer}
            </p>
          </section>

          {/* Block 3 — The Mission */}
          <section
            className="py-[60px] md:py-[100px]"
            style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
          >
            {storyMission.body.split("\n\n").map((para, i) => (
              <p
                key={i}
                className={`max-w-[600px] ${
                  i === 0
                    ? "font-display font-[800] uppercase text-[clamp(20px,2.5vw,28px)] leading-[1.15] text-hyped-white"
                    : "mt-6 text-[16px] leading-[1.8] text-hyped-muted md:text-[17px]"
                }`}
              >
                {para}
              </p>
            ))}
            <p
              className="mt-10 max-w-[600px] font-mono text-[12px] tracking-[.04em] leading-[1.8] text-hyped-muted/60"
              style={{
                borderLeft: "2px solid rgba(0,240,255,.3)",
                paddingLeft: "20px",
              }}
            >
              {storyMission.credibility}
            </p>
          </section>

          {/* Block 4 — The Community */}
          <section
            className="py-[60px] md:py-[100px]"
            style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
          >
            <h2 className="font-display font-[800] uppercase text-[clamp(24px,3.5vw,36px)] leading-[.92]">
              {storyCommunity.transition}
            </h2>

            <div
              className="mt-12 p-7 sm:p-9 md:p-10"
              style={{
                border: "1px solid rgba(0,240,255,.15)",
                background: "radial-gradient(ellipse 80% 70% at 50% 100%,rgba(0,240,255,.04),transparent 70%)",
              }}
            >
              <h3 className="font-display font-[800] uppercase text-[clamp(20px,2.5vw,28px)] leading-[.95] text-[var(--accent)]">
                {storyCommunity.headline}
              </h3>
              <p className="mt-5 max-w-[540px] text-[16px] leading-[1.8] text-hyped-muted md:text-[17px]">
                {storyCommunity.body}
              </p>
              <p className="mt-6 max-w-[540px] text-[16px] leading-[1.8] text-hyped-white font-medium md:text-[17px]">
                {storyCommunity.differentiator}
              </p>
            </div>
          </section>

          {/* Block 5 — The Expansion */}
          <section
            className="py-[60px] md:py-[100px]"
            style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
          >
            <h2 className="font-display font-[800] uppercase text-[clamp(24px,3.5vw,36px)] leading-[.92]">
              {storyExpansion.transition}
            </h2>
            <p className="mt-6 max-w-[500px] text-[16px] leading-[1.8] text-hyped-muted md:text-[17px]">
              {storyExpansion.intro}
            </p>

            <div className="mt-12 space-y-0">
              {storyExpansion.products.map((product, i) => (
                <div
                  key={product.label}
                  className="flex flex-col gap-1.5 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-6"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,.08)",
                    ...(i === storyExpansion.products.length - 1
                      ? { borderBottom: "1px solid rgba(255,255,255,.08)" }
                      : {}),
                  }}
                >
                  <div>
                    <span className="font-display font-[800] uppercase text-[clamp(20px,2.5vw,28px)] leading-[.95]">
                      {product.verb}
                    </span>
                    <p className="mt-1.5 text-[14px] leading-[1.6] text-hyped-muted">
                      {product.description}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">
                    {product.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Block 6 — The Anchor */}
          <section
            className="py-[80px] md:py-[120px]"
            style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
          >
            <div className="mx-auto max-w-[700px] text-center">
              <p className="text-[16px] leading-[1.8] text-hyped-muted md:text-[17px]">
                {storyAnchor.lead}
              </p>
              <p className="mt-10 font-display font-[900] uppercase text-[clamp(28px,4vw,48px)] leading-[.9] text-hyped-white">
                {storyAnchor.closer}
              </p>
            </div>
          </section>
        </div>
      </article>
    </PageLayout>
  );
}
