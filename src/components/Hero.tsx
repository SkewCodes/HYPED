import { VideoLoop } from "./VideoLoop";
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
        <VideoLoop asset={heroAsset} playMode="always" dim={55} className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <h1 className="font-display text-[clamp(4rem,14vw,12rem)] uppercase leading-[0.85] tracking-tight">
          Everything.
          <br />
          Maxxed.
        </h1>

        <p className="mx-auto mt-8 max-w-lg text-hyped-muted">
          Trade everything. Bet anything. Build infinitely.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://hyped.trade"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded bg-hyped-cyan px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-hyped-void sm:w-auto"
          >
            Launch Terminal
          </a>
          <a
            href="#lockin"
            className="w-full rounded border border-hyped-white/20 px-8 py-3.5 text-sm font-medium uppercase tracking-wide text-hyped-white transition-colors hover:border-hyped-cyan/40 hover:text-hyped-cyan sm:w-auto"
          >
            Lock In
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-hyped-void to-transparent" />
    </section>
  );
}
