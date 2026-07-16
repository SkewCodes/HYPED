import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "hyped.max — HYPED",
  description: "Track your arc. The daily lock-in app for everything you're maxxing — gym, trading, building, content, life.",
  openGraph: {
    title: "hyped.max — HYPED",
    description: "Track your arc. The daily lock-in app for everything you're maxxing.",
    url: `${site.url}/max`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "hyped.max — HYPED",
    description: "Track your arc. The daily lock-in app for everything you're maxxing.",
  },
};

const domains = [
  { icon: "🏋️", label: "GYM", line: "Track lifts, streaks, and PRs." },
  { icon: "📈", label: "TRADING", line: "Log trades, track P&L, sharpen edge." },
  { icon: "🛠️", label: "BUILDING", line: "Ship logs, build streaks, stay accountable." },
  { icon: "🧠", label: "FOCUS", line: "Deep work blocks, screen time, discipline." },
  { icon: "💰", label: "MONEY", line: "Income, savings, investments — all tracked." },
  { icon: "✨", label: "LOOKS", line: "Skincare, style, the full glow-up." },
  { icon: "🔥", label: "LIFE", line: "All of the above. The whole arc." },
] as const;

export default function MaxPage() {
  return (
    <main className="pt-20">
      <article className="px-6 md:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="pt-16 pb-8">
            <a
              href="/"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-[.1em] text-hyped-muted transition-colors hover:text-hyped-white"
            >
              <span className="transition-transform group-hover:-translate-x-0.5">&larr;</span> Back
            </a>
          </div>

          <section className="py-[60px] md:py-[100px]">
            <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent-secondary)]">
              COMING SOON
            </span>
            <h1 className="mt-6 font-display font-[900] uppercase text-[clamp(36px,5.5vw,64px)] leading-[.9] tracking-[.01em]">
              hyped.max
            </h1>
            <p className="mt-3 font-display font-[800] uppercase text-[clamp(18px,2.5vw,28px)] leading-[.95] text-[var(--accent)]">
              Track your arc.
            </p>
            <p className="mt-6 max-w-[540px] text-[16px] leading-[1.8] text-hyped-bright md:text-[17px]">
              The daily lock-in app for everything you&apos;re maxxing. Stack
              streaks across every domain. Stay accountable. Watch the growth
              compound — because the person who tracks the work is the person
              who does the work.
            </p>
          </section>

          <section className="py-[60px] md:py-[100px]">
            <div className="divider mb-[60px] md:mb-[100px]" />
            <p className="font-mono text-[11px] tracking-[.26em] text-[var(--accent)]">
              EVERY DOMAIN. ONE APP.
            </p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {domains.map((d) => (
                <div key={d.label} className="glass p-7">
                  <div className="flex items-center gap-3">
                    <span className="text-[18px]">{d.icon}</span>
                    <span className="font-mono text-[11px] tracking-[.24em] text-hyped-white">
                      {d.label}
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] leading-[1.6] text-hyped-muted">
                    {d.line}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="py-[60px] md:py-[100px]">
            <div className="divider mb-[60px] md:mb-[100px]" />
            <h2 className="font-display font-[800] uppercase text-[clamp(24px,3.5vw,36px)] leading-[.92]">
              Lock in. Track. Compound.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="glass p-7">
                <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">01</span>
                <h3 className="mt-3 font-display font-[800] uppercase text-[18px] leading-[.95]">
                  Set your domains
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-hyped-muted">
                  Pick what you&apos;re maxxing. Gym, trading, code, content —
                  whatever your arc looks like.
                </p>
              </div>
              <div className="glass p-7">
                <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">02</span>
                <h3 className="mt-3 font-display font-[800] uppercase text-[18px] leading-[.95]">
                  Log daily
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-hyped-muted">
                  Check in. Stack streaks. Every session logged is proof the
                  work is getting done.
                </p>
              </div>
              <div className="glass p-7">
                <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">03</span>
                <h3 className="mt-3 font-display font-[800] uppercase text-[18px] leading-[.95]">
                  Watch it compound
                </h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-hyped-muted">
                  See progress across every domain. The arc is the proof.
                  Growth you can measure.
                </p>
              </div>
            </div>
          </section>

          <section className="py-[60px] md:py-[100px]">
            <div className="divider mb-[60px] md:mb-[100px]" />
            <div className="glass-accent p-8 sm:p-10 md:p-12">
              <p className="font-mono text-[11px] tracking-[.26em] text-[var(--accent-secondary)]">
                HYPED AGENTS
              </p>
              <h2 className="mt-6 font-display font-[800] uppercase text-[clamp(24px,3.5vw,36px)] leading-[.92]">
                Start your trade maxxing arc.
              </h2>
              <p className="mt-6 max-w-[520px] text-[16px] leading-[1.8] text-hyped-bright md:text-[17px]">
                AI-powered trading intelligence that helps you build edge, not
                just execute trades. Powered by TrueNorth — the first live
                product in the Hyped ecosystem.
              </p>
              <a
                href="https://truenorth.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 font-mono text-[12px] tracking-[.18em] text-[var(--accent)] transition-colors hover:text-hyped-white"
              >
                Explore HYPED Agents
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </section>

          <section className="py-[60px] md:py-[100px]">
            <div className="divider mb-[60px] md:mb-[100px]" />
            <p className="max-w-[480px] text-[16px] leading-[1.8] text-hyped-bright md:text-[17px]">
              hyped.max is the beginning. More products are coming — each one
              built from the culture, for the person who locks in.
            </p>
            <a
              href="/#waitlist"
              className="group mt-6 inline-flex items-center gap-2 font-mono text-[12px] tracking-[.18em] text-[var(--accent)] transition-colors hover:text-hyped-white"
            >
              Join the waitlist
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </section>
        </div>
      </article>
    </main>
  );
}
