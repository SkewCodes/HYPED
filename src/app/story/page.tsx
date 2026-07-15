import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageLayout } from "@/components/PageLayout";
import { manifesto } from "@/content/story";

export const metadata: Metadata = {
  title: "Manifesto — HYPED",
  description: "There's a type of person the internet was supposed to be built for but never was. Hyped exists for them.",
  openGraph: {
    title: "Manifesto — HYPED",
    description: "There's a type of person the internet was supposed to be built for but never was. Hyped exists for them.",
    url: `${site.url}/story`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifesto — HYPED",
    description: "The brand for maxxing culture. For the ones who wake up and lock in.",
  },
};

export default function StoryPage() {
  return (
    <PageLayout>
      <article className="px-6 md:px-10">
        <div className="mx-auto max-w-[720px]">
          <div className="pt-16 pb-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[.1em] text-hyped-muted transition-colors hover:text-hyped-white"
            >
              &larr; Back
            </a>
          </div>

          {/* Title */}
          <header className="pt-[60px] pb-[80px] md:pt-[80px] md:pb-[100px]">
            <p className="font-mono text-[11px] tracking-[.26em] text-[var(--accent)]">THE HYPED MANIFESTO</p>
            <h1 className="mt-6 font-display font-[900] uppercase text-[clamp(32px,5vw,56px)] leading-[.9] tracking-[.01em]">
              The brand for maxxing culture.
            </h1>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-hyped-muted">
              There&apos;s a type of person the internet was supposed to be
              built for but never was. This is for them.
            </p>
          </header>

          {/* Manifesto body */}
          <div className="pb-[80px] md:pb-[120px]">
            {manifesto.map((section, i) => {
              if (section.type === "divider") {
                return (
                  <div
                    key={i}
                    className="my-[48px] md:my-[64px]"
                    style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
                  />
                );
              }

              if (section.type === "display") {
                return (
                  <p
                    key={i}
                    className="my-[40px] font-display font-[800] uppercase text-[clamp(22px,3vw,32px)] leading-[1.1] text-hyped-white md:my-[48px]"
                  >
                    {section.text}
                  </p>
                );
              }

              if (section.type === "products" && section.items) {
                return (
                  <div key={i} className="my-[32px] space-y-0">
                    {section.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-baseline justify-between gap-6 py-4"
                        style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}
                      >
                        <span className="font-display font-[800] uppercase text-[clamp(18px,2.5vw,24px)] leading-[.95]">
                          {item.line}
                        </span>
                        <span className="shrink-0 font-mono text-[10px] tracking-[.24em] text-[var(--accent)]">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              }

              if (section.type === "anchor") {
                return (
                  <div
                    key={i}
                    className="mt-[64px] pt-[48px] text-center md:mt-[80px] md:pt-[64px]"
                    style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}
                  >
                    <p className="font-display font-[900] uppercase text-[clamp(28px,4vw,48px)] leading-[.9] text-hyped-white">
                      {section.text}
                    </p>
                  </div>
                );
              }

              // body
              return (
                <p
                  key={i}
                  className="my-[20px] text-[16px] leading-[1.85] text-hyped-muted md:text-[17px] md:my-[24px]"
                >
                  {section.text}
                </p>
              );
            })}
          </div>
        </div>
      </article>
    </PageLayout>
  );
}
