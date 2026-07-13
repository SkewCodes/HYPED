import { Bolt } from "./Bolt";
import TokenRain from "./TokenRain";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(244,242,247,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(244,242,247,.04) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 80% at 62% 40%,black 30%,transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 62% 40%,black 30%,transparent 78%)",
        }}
      />
      {/* Atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 55% 60% at 72% 42%,rgba(0,240,255,.10),transparent 65%),radial-gradient(ellipse 70% 60% at 25% 30%,rgba(26,10,46,.9),transparent 75%)",
        }}
      />
      {/* Token rain */}
      <div className="absolute inset-0">
        <TokenRain />
      </div>
      {/* Bottom fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg,rgba(5,3,9,.25) 0%,transparent 40%,rgba(5,3,9,.9) 84%,#050309 100%)",
        }}
      />

      <div className="relative z-[2] w-full px-6 pb-14 pt-[150px] md:px-10">
        {/* Kicker row */}
        <div className="mb-7 flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-2 font-mono text-xs tracking-[.28em] text-[var(--accent)]">
            <Bolt width={9} height={13} />
            HYP-001
          </span>
          <span className="hidden h-px w-16 sm:block" style={{ background: "rgba(244,242,247,.25)" }} />
          <span className="font-mono text-xs tracking-[.28em] text-hyped-muted">
            LOCK IN MAXXING
          </span>
        </div>

        {/* H1 */}
        <h1 className="m-0 font-display font-[800] uppercase text-[clamp(64px,13.5vw,224px)] leading-[.84] tracking-[.005em]">
          <span className="block">Everything.</span>
          <span className="hero-outline block">
            Maxxed.
          </span>
        </h1>

        {/* Bottom row */}
        <div className="mt-11 flex flex-wrap items-end justify-between gap-8">
          <p className="m-0 max-w-[360px] text-[17px] leading-[1.55] text-hyped-muted">
            Trade everything. Bet anything. Build infinitely.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#lockin"
              className="font-mono text-xs font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void px-[30px] py-[17px] transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-0.5"
            >
              JOIN WAITLIST
            </a>
            <a
              href="#lockin"
              className="font-mono text-xs font-bold tracking-[.18em] text-hyped-white px-[30px] py-[16px] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{ border: "1px solid rgba(244,242,247,.25)" }}
            >
              LOCK IN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
