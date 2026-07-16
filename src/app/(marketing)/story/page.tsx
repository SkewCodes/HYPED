import type { Metadata } from "next";
import { site } from "@/content/site";
import { manifesto } from "@/content/story";

export const metadata: Metadata = {
  title: "Manifesto — HYPED",
  description:
    "The daily, measurable commitment to getting better at the things that matter to you. This is what maxxing means. This is why Hyped exists.",
  openGraph: {
    title: "Manifesto — HYPED",
    description:
      "The daily, measurable commitment to getting better at the things that matter to you. This is what maxxing means. This is why Hyped exists.",
    url: `${site.url}/story`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manifesto — HYPED",
    description:
      "Whatever you're maxxing — this is the home for it.",
  },
};

export default function StoryPage() {
  return (
    <main className="pt-20">
      <article className="px-6 md:px-10">
        <div className="mx-auto max-w-[720px]">
          <div className="pt-16 pb-8">
            <a
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-[.1em] text-hyped-muted transition-colors hover:text-hyped-white"
            >
              <span className="transition-transform group-hover:-translate-x-0.5">&larr;</span> Back
            </a>
          </div>

          <header className="glass-static !rounded-2xl p-8 sm:p-10 md:p-12 mt-4 mb-12">
            <p className="font-mono text-[11px] tracking-[.26em] text-[var(--accent)]">THE HYPED MANIFESTO</p>
            <h1 className="mt-6 font-display font-[900] uppercase text-[clamp(32px,5vw,56px)] leading-[.9] tracking-[.01em]">
              Whatever you&apos;re maxxing.
            </h1>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-hyped-bright">
              The brand for the daily grind, the locked-in energy,
              and the people who refuse to settle.
            </p>
          </header>

          <div className="pb-[80px] md:pb-[120px]">
            {manifesto.map((section, i) => {
              if (section.type === "divider") {
                return (
                  <div key={i} className="my-[48px] md:my-[64px] divider" />
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

              if (section.type === "anchor") {
                return (
                  <div
                    key={i}
                    className="mt-[64px] pt-[48px] text-center md:mt-[80px] md:pt-[64px]"
                  >
                    <div className="divider mb-[48px] md:mb-[64px]" />
                    <p className="font-display font-[900] uppercase text-[clamp(28px,4vw,48px)] leading-[.9] text-hyped-white">
                      {section.text}
                    </p>
                  </div>
                );
              }

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
    </main>
  );
}
