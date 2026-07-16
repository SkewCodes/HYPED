import { Hero } from "@/components/Hero";
import { Waitlist } from "@/components/Waitlist";
import { fetchChannelStreams } from "@/lib/youtube";

const maxxingDomains = [
  { label: "GYM", description: "PRs, streaks, never missing a session." },
  { label: "TRADING", description: "Skill, edge, and daily reps. Markets as a craft." },
  { label: "BUILDING", description: "Shipping code, content, brands — in public." },
  { label: "FOCUS", description: "Deep work, dopamine control, daily discipline." },
  { label: "LOOKS", description: "Skincare, style, aesthetics — levelling up." },
  { label: "MONEY", description: "Income stacking, saving, investing with intent." },
  { label: "LIFE", description: "All of the above. The whole arc." },
] as const;

export default async function Home() {
  const { live, streams } = await fetchChannelStreams(3);
  const latestVideo = live || streams[0];

  return (
    <main>
      <Hero />

      {/* Manifesto excerpt */}
      <section className="reveal px-6 py-[120px] md:px-10 md:py-[160px]">
        <div className="divider mb-[120px] md:mb-[160px]" />
        <div className="mx-auto max-w-[1200px]">
          <p className="max-w-[720px] text-[clamp(20px,2.8vw,28px)] leading-[1.5] text-hyped-white font-display font-[700]">
            There&apos;s a type of person the internet was supposed to be
            built for but never was.
          </p>
          <p className="mt-6 max-w-[600px] text-[16px] leading-[1.8] text-hyped-bright md:text-[17px]">
            The one who wakes up and locks in. Who tracks the progress,
            sharpens the edge, and shows up again tomorrow whether
            anyone&apos;s watching or not.
          </p>
          <a
            href="/story"
            className="group mt-8 inline-flex items-center gap-2 font-mono text-[12px] tracking-[.18em] text-[var(--accent)] transition-colors hover:text-hyped-white"
          >
            Read the Manifesto
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
              <path d="M1 5h11M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </section>

      {/* What is maxxing? */}
      <section className="reveal section-purple px-6 py-[100px] md:px-10 md:py-[140px]">
        <div className="divider mb-[100px] md:mb-[140px]" />
        <div className="mx-auto max-w-[1200px]">
          <p className="font-mono text-[11px] tracking-[.26em] text-[var(--accent)]">
            WHAT IS MAXXING?
          </p>
          <h2 className="mt-6 font-display font-[800] uppercase text-[clamp(24px,3.5vw,40px)] leading-[.92]">
            The daily commitment to getting better at the things that matter
            to you.
          </h2>
          <p className="mt-6 max-w-[560px] text-[16px] leading-[1.8] text-hyped-bright md:text-[17px]">
            Not self-improvement books you forget. Not hustle culture that
            burns out. Maxxing is measurable, specific, and it compounds.
          </p>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {maxxingDomains.map((domain) => (
              <div key={domain.label} className="glass p-6">
                <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent)]">
                  {domain.label}
                </span>
                <p className="mt-2 text-[14px] leading-[1.6] text-hyped-muted">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* hyped.max teaser */}
      <section className="reveal px-6 py-[120px] md:px-10 md:py-[160px]">
        <div className="divider mb-[120px] md:mb-[160px]" />
        <div className="mx-auto max-w-[1200px]">
          <div className="glass-accent p-8 sm:p-10 md:p-12">
            <span className="font-mono text-[11px] tracking-[.24em] text-[var(--accent-secondary)]">
              COMING SOON
            </span>
            <h2 className="mt-5 font-display font-[900] uppercase text-[clamp(28px,4vw,48px)] leading-[.9]">
              hyped.max
            </h2>
            <p className="mt-2 font-display font-[800] uppercase text-[clamp(16px,2vw,22px)] leading-[.95] text-[var(--accent)]">
              Track your arc.
            </p>
            <p className="mt-6 max-w-[500px] text-[16px] leading-[1.8] text-hyped-bright md:text-[17px]">
              The daily lock-in across every domain you&apos;re maxxing. Gym,
              trading, building, content, life — stack streaks, stay
              accountable, watch the growth compound.
            </p>
            <a
              href="#waitlist"
              className="cta-pulse mt-8 inline-block font-mono text-[11px] font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void px-6 py-3.5 rounded-lg transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-0.5"
            >
              JOIN THE WAITLIST
            </a>
          </div>
        </div>
      </section>

      {/* Hyped TV embed */}
      <section className="reveal section-purple px-6 py-[100px] md:px-10 md:py-[140px]">
        <div className="divider mb-[100px] md:mb-[140px]" />
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="font-mono text-[11px] tracking-[.26em] text-[var(--accent)]">
                HYPED TV
              </p>
              <h2 className="mt-4 font-display font-[800] uppercase text-[clamp(24px,3.5vw,40px)] leading-[.92]">
                The grind, live.
              </h2>
            </div>
            <a
              href="/tv"
              className="group font-mono text-[12px] tracking-[.18em] text-hyped-muted transition-colors hover:text-[var(--accent)]"
            >
              View all
              <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {latestVideo ? (
            <div className="mt-10">
              <a
                href={`https://youtube.com/watch?v=${latestVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-hyped-surface">
                  {latestVideo.thumbnail ? (
                    <img
                      src={latestVideo.thumbnail}
                      alt={latestVideo.title}
                      width={480}
                      height={360}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="h-full w-full bg-hyped-surface" />
                  )}
                  <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)] transition-transform group-hover:scale-110 sm:h-20 sm:w-20">
                      <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                        <path d="M4 2l18 12L4 26V2z" fill="#0A0A12" />
                      </svg>
                    </div>
                  </div>
                  {latestVideo.isLive && (
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hyped-rekt opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-hyped-rekt" />
                      </span>
                      <span className="font-mono text-[11px] font-bold tracking-[.18em] text-hyped-rekt">LIVE</span>
                    </div>
                  )}
                </div>
                <h3 className="mt-4 font-display font-[800] uppercase text-[clamp(18px,2vw,24px)] leading-[.95] transition-colors group-hover:text-[var(--accent)]">
                  {latestVideo.title}
                </h3>
              </a>
            </div>
          ) : (
            <div className="mt-10 glass p-8 sm:p-10">
              <p className="text-[15px] text-hyped-bright">
                Streams coming soon. Subscribe on{" "}
                <a href="https://www.youtube.com/@52kskew" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-hyped-white transition-colors">
                  YouTube
                </a>{" "}
                to catch every session.
              </p>
            </div>
          )}
        </div>
      </section>

      <Waitlist />
    </main>
  );
}
