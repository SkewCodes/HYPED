import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageLayout } from "@/components/PageLayout";
import { fetchChannelStreams } from "@/lib/youtube";
import { VideoPlayer } from "@/components/VideoPlayer";

export const metadata: Metadata = {
  title: "Hyped TV — HYPED",
  description: "Alpha, building in public, and maxxing culture — on stream and on demand.",
  openGraph: {
    title: "Hyped TV — HYPED",
    description: "Alpha, building in public, and maxxing culture — on stream and on demand.",
    url: `${site.url}/tv`,
    siteName: site.name,
    type: "website",
  },
};

export default async function TVPage() {
  const { live, streams } = await fetchChannelStreams();
  const hasContent = live || streams.length > 0;

  return (
    <PageLayout>
      <section className="px-6 py-[80px] md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1200px]">
          <a
            href="/"
            className="mb-12 inline-flex items-center gap-2 font-mono text-xs tracking-[.1em] text-hyped-muted transition-colors hover:text-hyped-white"
          >
            &larr; Back
          </a>

          <h1 className="font-display font-[800] uppercase text-[clamp(36px,6vw,80px)] leading-[.88]">
            The culture, live.
          </h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-hyped-muted md:text-[19px]">
            Alpha, building in public, and maxxing culture — on stream and on demand.
          </p>

          {hasContent ? (
            <div className="mt-16 md:mt-20">
              {/* Live stream or latest stream as hero */}
              {(live || streams[0]) && (
                <div>
                  {live && (
                    <div className="mb-4 flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hyped-rekt opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-hyped-rekt" />
                      </span>
                      <span className="font-mono text-[12px] font-bold tracking-[.18em] text-hyped-rekt">LIVE NOW</span>
                    </div>
                  )}
                  <VideoPlayer
                    videoId={(live || streams[0]).id}
                    title={(live || streams[0]).title}
                    thumbnail={(live || streams[0]).thumbnail}
                  />
                  <h2 className="mt-5 font-display font-[800] uppercase text-[22px] leading-[.92] sm:text-[28px]">
                    {(live || streams[0]).title}
                  </h2>
                </div>
              )}

              {/* Past streams grid */}
              {streams.length > (live ? 0 : 1) && (
                <div className="mt-16">
                  <h3 className="mb-8 font-mono text-[11px] tracking-[.26em] text-hyped-muted">PAST STREAMS</h3>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {streams.slice(live ? 0 : 1).map((stream) => (
                      <div key={stream.id} className="group">
                        <VideoPlayer
                          videoId={stream.id}
                          title={stream.title}
                          thumbnail={stream.thumbnail}
                        />
                        <h4 className="mt-3 text-[14px] leading-[1.4] text-hyped-white line-clamp-2">
                          {stream.title}
                        </h4>
                        <time className="mt-1 block font-mono text-[11px] tracking-[.08em] text-hyped-muted">
                          {new Date(stream.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div
              className="mt-16 p-8 sm:p-12"
              style={{ border: "1px solid rgba(255,255,255,.06)" }}
            >
              <p className="font-display font-[800] uppercase text-[28px] leading-[.9] text-hyped-muted sm:text-[36px]">
                Hyped TV — Coming Soon
              </p>
              <p className="mt-4 max-w-[420px] text-[15px] leading-[1.6] text-hyped-muted">
                Stream content is loading, or no YouTube API key is configured. Subscribe to catch every stream.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <a
                  href={site.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] tracking-[.18em] text-[var(--accent)] transition-colors hover:text-hyped-white"
                >
                  Subscribe on YouTube →
                </a>
                <a
                  href={site.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] tracking-[.18em] text-[var(--accent)] transition-colors hover:text-hyped-white"
                >
                  Follow on X →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
