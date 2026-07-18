import type { Metadata } from "next";
import { site } from "@/content/site";
import { fetchChannelStreams } from "@/lib/youtube";
import { VideoPlayer } from "@/components/VideoPlayer";

export const metadata: Metadata = {
  title: "Hyped TV — HYPED",
  description: "The grind, live. Sessions, streams, and the daily lock-in — unfiltered.",
  openGraph: {
    title: "Hyped TV — HYPED",
    description: "The grind, live. Sessions, streams, and the daily lock-in — unfiltered.",
    url: `${site.url}/tv`,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyped TV — HYPED",
    description: "The grind, live. Sessions, streams, and the daily lock-in — unfiltered.",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function TVPage() {
  const { live, streams } = await fetchChannelStreams();

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

          {/* Hero Player Area */}
          <section className="py-[40px] md:py-[60px]">
            <h1 className="font-display font-[900] uppercase text-[clamp(32px,5vw,56px)] leading-[.9] tracking-[.01em]">
              Hyped TV
            </h1>
            <p className="mt-4 max-w-[480px] text-[15px] leading-[1.7] text-hyped-muted">
              The grind, live. Sessions, streams, and the daily lock-in — unfiltered.
            </p>

            <div className="mt-10">
            {live ? (
              <>
                <div className="mb-5 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hyped-rekt opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-hyped-rekt" />
                  </span>
                  <span className="font-mono text-[12px] font-bold tracking-[.18em] text-hyped-rekt">LIVE NOW</span>
                </div>
                <div className="rounded-xl overflow-hidden">
                  <div className="relative aspect-video w-full overflow-hidden bg-hyped-void">
                    <iframe
                      src={`https://www.youtube.com/embed/${live.id}?autoplay=1&mute=1&rel=0`}
                      title={live.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <h1 className="font-display font-[800] uppercase text-[clamp(20px,2.5vw,28px)] leading-[.95]">
                    {live.title}
                  </h1>
                  <p className="mt-2 font-mono text-[11px] tracking-[.06em] text-hyped-dim">
                    Streaming now
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-hyped-surface">
                  {/* Offline branded slate */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <div className="absolute inset-0 opacity-[.04]" style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
                      backgroundSize: "48px 48px",
                    }} />
                    <div className="relative">
                      <p className="font-mono text-[10px] tracking-[.3em] text-hyped-dim">HYPED TV</p>
                      <h1 className="mt-4 font-display font-[900] uppercase text-[clamp(28px,4vw,48px)] leading-[.88] text-hyped-white">
                        Offline
                      </h1>
                      <p className="mt-4 font-mono text-[12px] tracking-[.1em] text-hyped-muted">
                        Sessions stream daily. Subscribe to get notified.
                      </p>
                      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <a
                          href={site.social.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg font-mono text-[10px] font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void px-5 py-2.5 transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-0.5"
                        >
                          SUBSCRIBE
                        </a>
                        <a
                          href={site.social.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg font-mono text-[10px] tracking-[.18em] text-hyped-dim border border-hyped-dim/30 px-5 py-2.5 transition-colors hover:text-[var(--accent)] hover:border-[var(--accent)]/30"
                        >
                          FOLLOW @52kskew
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            </div>
          </section>

          {/* Replay Library */}
          {streams.length > 0 && (
            <section className="py-[60px] md:py-[80px]">
              <div className="divider mb-[40px] md:mb-[60px]" />
              <div className="flex items-end justify-between gap-6 mb-8">
                <div>
                  <h2 className="font-mono text-[11px] tracking-[.26em] text-[var(--accent)]">REPLAYS</h2>
                  <p className="mt-2 text-[14px] text-hyped-muted">
                    Full sessions. Uncut.
                  </p>
                </div>
                <a
                  href={`${site.social.youtube}/streams`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group font-mono text-[11px] tracking-[.18em] text-hyped-dim transition-colors hover:text-[var(--accent)]"
                >
                  View all
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {streams.map((video) => (
                  <ReplayCard key={video.id} video={video} />
                ))}
              </div>
            </section>
          )}

          {/* Subscribe CTA */}
          <section className="py-[60px] md:py-[80px]">
            <div className="divider mb-[40px] md:mb-[60px]" />
            <p className="font-display font-[800] uppercase text-[clamp(20px,2.5vw,28px)] leading-[.95] text-hyped-white">
              Never miss a session.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pulse inline-block rounded-lg font-mono text-[11px] font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void px-6 py-3.5 transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-0.5"
              >
                Subscribe on YouTube →
              </a>
              <a
                href={site.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-static inline-block !rounded-lg font-mono text-[11px] tracking-[.18em] text-hyped-muted transition-colors hover:text-[var(--accent)]"
                style={{ padding: "14px 24px" }}
              >
                Follow on X →
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

function ReplayCard({ video }: { video: { id: string; title: string; show: string; thumbnail: string; publishedAt: string } }) {
  return (
    <a
      href={`https://youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="glass group !p-0 overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden">
        {video.thumbnail ? (
          <img
            src={video.thumbnail}
            alt={video.title}
            width={480}
            height={360}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full bg-hyped-surface" />
        )}
        <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)]">
            <svg width="16" height="18" viewBox="0 0 24 28" fill="none">
              <path d="M4 2l18 12L4 26V2z" fill="#0A0A12" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-[14px] font-medium leading-[1.4] text-hyped-white line-clamp-2 group-hover:text-[var(--accent)] transition-colors">
          {video.title}
        </h4>
        {video.show !== video.title && (
          <p className="mt-1 text-[12px] text-hyped-muted">
            {video.show}
          </p>
        )}
        <time className="mt-1.5 block font-mono text-[10px] tracking-[.06em] text-hyped-dim">
          {formatDate(video.publishedAt)}
        </time>
      </div>
    </a>
  );
}
