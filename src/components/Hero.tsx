import { VideoLoop } from "./VideoLoop";
import { Slash } from "./Slash";
import type { MediaAsset } from "@/content/products";

const heroAsset: MediaAsset = {
  mp4: "/media/hero-loop.mp4",
  webm: "/media/hero-loop.webm",
  poster: "/media/hero-loop-poster.webp",
  aspect: "16/9",
};

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <VideoLoop asset={heroAsset} playMode="always" dim={45} className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-hyped-cyan/20 bg-hyped-carbon/60 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-hyped-cyan animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-widest text-hyped-cyan">
            The ecosystem is coming
          </span>
        </div>

        <h1 className="mt-8 font-display text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-[0.9] tracking-tight">
          Everything.
          <br />
          Maxxed.
        </h1>

        <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-hyped-muted sm:text-lg">
          A culture, a community, and an ecosystem for those who refuse to settle.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#waitlist"
            className="w-full rounded-xl bg-hyped-cyan px-10 py-4 text-sm font-bold text-hyped-black uppercase tracking-wide transition-opacity hover:opacity-90 sm:w-auto"
          >
            Lock In
          </a>
          <a
            href="#culture"
            className="w-full rounded-xl border border-hyped-muted/20 px-10 py-4 text-sm font-semibold text-hyped-white uppercase tracking-wide transition-colors hover:border-hyped-cyan/40 hover:text-hyped-cyan sm:w-auto"
          >
            Explore
          </a>
        </div>

        <div className="mt-20 flex justify-center">
          <Slash size="lg" className="animate-pulse" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-hyped-black to-transparent" />
    </section>
  );
}
