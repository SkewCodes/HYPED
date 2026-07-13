import { Bolt } from "./Bolt";
import TokenRain from "./TokenRain";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse 90% 80% at 62% 40%,black 30%,transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 62% 40%,black 30%,transparent 78%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 55% 60% at 72% 42%,rgba(0,240,255,.08),transparent 65%),radial-gradient(ellipse 70% 60% at 25% 30%,rgba(26,10,46,.7),transparent 75%)",
        }}
      />
      <div className="absolute inset-0">
        <TokenRain />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg,rgba(10,10,18,.25) 0%,transparent 40%,rgba(10,10,18,.9) 84%,#0A0A12 100%)",
        }}
      />

      <div className="relative z-[2] w-full px-6 pb-20 pt-[150px] md:px-10">
        <h1 className="m-0 font-display font-[800] uppercase text-[clamp(48px,8vw,128px)] leading-[.88] tracking-[.01em]">
          <span className="block">Everything.</span>
          <span className="hero-outline block">Maxxed.</span>
        </h1>

        <p className="mt-6 max-w-[540px] text-[17px] leading-[1.6] text-hyped-muted md:text-[19px]">
          The crypto-native culture and product ecosystem for degens who show up.
        </p>

        <p className="mt-4 font-mono text-sm tracking-[.08em] text-[var(--accent)]">
          {site.anchor}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-[2] -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[.2em] text-hyped-muted">SCROLL</span>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" className="animate-[scrollDown_2s_ease-in-out_infinite]">
            <path d="M7 0v14M1 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" className="text-hyped-muted" />
          </svg>
        </div>
      </div>
    </section>
  );
}
