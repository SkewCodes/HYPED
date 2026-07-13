import { tvReady } from "@/content/tv";
import { site } from "@/content/site";

export function HypedTV() {
  return (
    <section id="hyped-tv" className="px-6 py-[100px] md:px-10 md:py-[140px]" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display font-[800] uppercase text-[clamp(28px,4vw,64px)] leading-[.92]">
          The culture, live.
        </h2>
        <p className="mt-4 max-w-[520px] text-[17px] leading-[1.6] text-hyped-muted">
          Alpha, building in public, and maxxing culture — on stream and on demand.
        </p>

        {!tvReady ? (
          <div className="mt-12 py-16" style={{ border: "1px solid rgba(255,255,255,.06)", paddingLeft: "2rem" }}>
            <p className="font-display font-[800] uppercase text-[28px] leading-[.9] text-hyped-muted sm:text-[36px]">
              Hyped TV — Coming Soon
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
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
        ) : null}
      </div>
    </section>
  );
}
