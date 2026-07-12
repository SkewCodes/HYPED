import type { Metadata } from "next";
import { pillars, manifestoIntro, manifestoOutro } from "@/content/manifesto";
import { Slash } from "@/components/Slash";
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
        className="mb-12 inline-flex items-center gap-2 text-sm text-hyped-muted transition-colors hover:text-hyped-white"
      >
        &larr; Back
      </a>

      <h1 className="font-display text-[clamp(2.5rem,8vw,5rem)] uppercase leading-[0.85] tracking-tight">
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
            <Slash size="md" className="mt-2 shrink-0" />
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-hyped-cyan">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-1 font-display text-[clamp(1.5rem,4vw,3rem)] uppercase leading-[0.85] tracking-tight">
                {pillar.title}
              </h2>
              <p className="mt-2 text-lg text-hyped-muted">{pillar.line}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 border-t border-hyped-white/5 pt-12">
        <p className="text-lg font-medium leading-relaxed text-hyped-white">
          {manifestoOutro}
        </p>
      </div>
    </main>
  );
}
