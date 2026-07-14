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
          <section className="py-[80px] md:py-[120px]">
            <h1 className="font-display font-[900] uppercase text-[clamp(44px,8vw,120px)] leading-[.85] tracking-[.01em]">
              {storyIdentity}
            </h1>
          </section>

          {/* Block 2 — The Definition */}
          <section
            className="py-[80px] md:py-[120px]"
            style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
          >
            <h2 className="font-display font-[800] uppercase text-[clamp(32px,5vw,64px)] leading-[.9]">
              {storyDefinition.headline}
            </h2>
            <p className="mt-10 max-w-[640px] text-[17px] leading-[1.8] text-hyped-muted md:text-[19px]">
              {storyDefinition.body}
            </p>
            <p className="mt-12 font-mono text-[14px] tracking-[.06em] leading-[2.2] text-hyped-white md:text-[16px]">
              {storyDefinition.mantra.split(". ").map((word, i, arr) => (
                <span key={i}>
                  {word}{i < arr.length - 1 ? "." : ""}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </p>
            <p className="mt-10 text-[17px] leading-[1.8] text-hyped-muted md:text-[19px]">
              {storyDefinition.closer}
            </p>
          </section>

          {/* Block 3 — The Mission */}
          <section
            className="py-[80px] md:py-[120px]"
            style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
          >
            {storyMission.body.split("\n\n").map((para, i) => (
              <p
                key={i}
                className={`max-w-[640px] text-[17px] leading-[1.8] md:text-[19px] ${
                  i === 0
                    ? "font-display font-[800] uppercase text-[clamp(24px,3.5vw,40px)] leading-[1.1] text-hyped-white"
                    : "mt-8 text-hyped-muted"
                }`}
              >
                {para}
              </p>
            ))}
            <p
              className="mt-12 max-w-[640px] font-mono text-[13px] tracking-[.04em] leading-[1.8] text-hyped-muted/60"
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
            className="py-[80px] md:py-[120px]"
            style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
          >
            <h2 className="font-display font-[800] uppercase text-[clamp(32px,5vw,64px)] leading-[.9]">
              {storyCommunity.transition}
            </h2>

            <div
              className="mt-16 p-8 sm:p-10 md:p-12"
              style={{
                border: "1px solid rgba(0,240,255,.15)",
                background: "radial-gradient(ellipse 80% 70% at 50% 100%,rgba(0,240,255,.04),transparent 70%)",
              }}
            >
              <h3 className="font-display font-[800] uppercase text-[clamp(24px,3.5vw,44px)] leading-[.92] text-[var(--accent)]">
                {storyCommunity.headline}
              </h3>
              <p className="mt-6 max-w-[580px] text-[17px] leading-[1.8] text-hyped-muted md:text-[18px]">
                {storyCommunity.body}
              </p>
              <p className="mt-8 max-w-[580px] text-[17px] leading-[1.8] text-hyped-white font-medium md:text-[18px]">
                {storyCommunity.differentiator}
              </p>
            </div>
          </section>

          {/* Block 5 — The Expansion */}
          <section
            className="py-[80px] md:py-[120px]"
            style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
          >
            <h2 className="font-display font-[800] uppercase text-[clamp(32px,5vw,64px)] leading-[.9]">
              {storyExpansion.transition}
            </h2>
            <p className="mt-8 max-w-[540px] text-[17px] leading-[1.8] text-hyped-muted md:text-[19px]">
              {storyExpansion.intro}
            </p>

            <div className="mt-16 space-y-0">
              {storyExpansion.products.map((product, i) => (
                <div
                  key={product.label}
                  className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-8"
                  style={{
                    borderTop: "1px solid rgba(255,255,255,.08)",
                    ...(i === storyExpansion.products.length - 1
                      ? { borderBottom: "1px solid rgba(255,255,255,.08)" }
                      : {}),
                  }}
                >
                  <div>
                    <span className="font-display font-[800] uppercase text-[clamp(24px,3.5vw,44px)] leading-[.92]">
                      {product.verb}
                    </span>
                    <p className="mt-2 text-[15px] leading-[1.6] text-hyped-muted">
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
            className="py-[100px] md:py-[160px]"
            style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
          >
            <div className="mx-auto max-w-[800px] text-center">
              <p className="text-[17px] leading-[1.8] text-hyped-muted md:text-[19px]">
                {storyAnchor.lead}
              </p>
              <p className="mt-12 font-display font-[900] uppercase text-[clamp(36px,6vw,80px)] leading-[.88] text-hyped-white">
                {storyAnchor.closer}
              </p>
            </div>
          </section>
        </div>
      </article>
    </PageLayout>
  );
}
