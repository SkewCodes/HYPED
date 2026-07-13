import type { Metadata } from "next";
import { pillars, manifestoIntro, manifestoOutro } from "@/content/manifesto";
import { Bolt } from "@/components/Bolt";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Manifesto — HYPED",
  description: "The maxxing manifesto. Five pillars of the Hyped culture.",
  openGraph: {
    title: "Manifesto — HYPED",
    description: "The maxxing manifesto. Five pillars of the Hyped culture.",
    url: `${site.url}/manifesto`,
    siteName: site.name,
    type: "website",
  },
};

export default function ManifestoPage() {
  return (
    <main className="mx-auto max-w-[800px] px-6 py-32 md:py-40">
      <a
        href="/"
        className="mb-12 inline-flex items-center gap-2 font-mono text-xs tracking-[.1em] text-hyped-muted transition-colors hover:text-hyped-white"
      >
        &larr; Back
      </a>

      <h1 className="font-display font-[800] uppercase text-[clamp(2.5rem,8vw,5rem)] leading-[.85]">
        The Maxxing
        <br />
        Manifesto
      </h1>

      <p className="mt-8 text-lg leading-relaxed text-hyped-muted">
        {manifestoIntro}
      </p>

      <div className="mt-16 space-y-12">
        {pillars.map((pillar, i) => (
          <article key={pillar.id} className="flex items-start gap-4">
            <Bolt width={12} height={17} className="mt-2 shrink-0" />
            <div>
              <span className="font-mono text-xs tracking-[.28em] text-[var(--accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-1 font-display font-[800] uppercase text-[clamp(1.5rem,4vw,3rem)] leading-[.88]">
                {pillar.title}
              </h2>
              <p className="mt-2 text-lg text-hyped-muted">{pillar.line}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 pt-12" style={{ borderTop: "1px solid rgba(244,242,247,.07)" }}>
        <p className="text-lg font-medium leading-relaxed text-hyped-white">
          {manifestoOutro}
        </p>
      </div>
    </main>
  );
}
