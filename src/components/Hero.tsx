import { Slash } from "./Slash";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-hyped-carbon via-hyped-black to-hyped-black" />

      {/* Radial glow behind the brand mark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #00F0FF 0%, transparent 70%)" }}
      />

      {/* Animated particle grid */}
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-hyped-cyan/20 bg-hyped-carbon/60 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-hyped-cyan animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-widest text-hyped-cyan">
            The ecosystem is coming
          </span>
        </div>

        {/* Giant brand mark */}
        <div className="mt-12 flex justify-center">
          <Slash size="lg" className="!h-20 !w-14 md:!h-28 md:!w-20 drop-shadow-[0_0_30px_rgba(0,240,255,0.3)]" />
        </div>

        <h1 className="mt-8 font-display text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight">
          Everything.
          <br />
          <span className="bg-gradient-to-r from-hyped-cyan to-accent-trade bg-clip-text text-transparent">
            Maxxed.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-hyped-muted sm:text-lg">
          A culture, a community, and an ecosystem for those who refuse to settle.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#waitlist"
            className="group relative w-full overflow-hidden rounded-xl bg-hyped-cyan px-10 py-4 text-sm font-bold text-hyped-black uppercase tracking-wide sm:w-auto"
          >
            <span className="relative z-10">Lock In</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          </a>
          <a
            href="#culture"
            className="w-full rounded-xl border border-hyped-muted/20 px-10 py-4 text-sm font-semibold text-hyped-white uppercase tracking-wide transition-colors hover:border-hyped-cyan/40 hover:text-hyped-cyan sm:w-auto"
          >
            Explore
          </a>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-hyped-black to-transparent" />
    </section>
  );
}
