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
  const hasContent = live || streams.length > 0;
  const heroVideo = live || streams[0];
  const gridVideos = streams.slice(live ? 0 : 1);

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
            <h1 className="font-display font-[900] uppercase text-[clamp(32px,5vw,56px)] leading-[.9] tracking-[.01em]">
              The grind, live.
            </h1>
            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.7] text-hyped-bright md:text-[17px]">
              Sessions, streams, and the daily lock-in — unfiltered.
              Real work. No scripts.
            </p>
          </section>

          {hasContent ? (
            <>
              {heroVideo && (
                <section className="py-[60px] md:py-[100px]">
                  <div className="divider mb-[60px] md:mb-[100px]" />
                  {heroVideo.isLive && (
                    <div className="mb-5 flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hyped-rekt opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-hyped-rekt" />
                      </span>
                      <span className="font-mono text-[11px] font-bold tracking-[.18em] text-hyped-rekt">LIVE NOW</span>
                    </div>
                  )}

                  <div className="rounded-xl overflow-hidden">
                    <VideoPlayer
                      videoId={heroVideo.id}
                      title={heroVideo.title}
                      thumbnail={heroVideo.thumbnail}
                    />
                  </div>

                  <div className="mt-5">
                    <h2 className="font-display font-[800] uppercase text-[clamp(20px,2.5vw,28px)] leading-[.95]">
                      {heroVideo.title}
                    </h2>
                    {heroVideo.show !== heroVideo.title && (
                      <p className="mt-1.5 text-[14px] text-hyped-muted">
                        {heroVideo.show}
                      </p>
                    )}
                    <time className="mt-2 block font-mono text-[11px] tracking-[.06em] text-hyped-dim">
                      {heroVideo.isLive ? "Streaming now" : formatDate(heroVideo.publishedAt)}
                    </time>
                  </div>
                </section>
              )}

              {gridVideos.length > 0 && (
                <section className="py-[60px] md:py-[100px]">
                  <div className="divider mb-[60px] md:mb-[100px]" />
                  <h3 className="mb-8 font-mono text-[11px] tracking-[.26em] text-[var(--accent)]">LATEST</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {gridVideos.map((video) => (
                      <a
                        key={video.id}
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
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            <section className="py-[60px] md:py-[100px]">
              <div className="divider mb-[60px] md:mb-[100px]" />
              <div className="glass p-7 sm:p-9">
                <p className="font-display font-[800] uppercase text-[24px] leading-[.92] text-hyped-muted sm:text-[28px]">
                  Hyped TV — Coming Soon
                </p>
                <p className="mt-4 max-w-[420px] text-[15px] leading-[1.6] text-hyped-muted">
                  Subscribe to catch every stream.
                </p>
              </div>
            </section>
          )}

          <section className="py-[60px] md:py-[100px]">
            <div className="divider mb-[60px] md:mb-[100px]" />
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
