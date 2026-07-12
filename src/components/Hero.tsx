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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <VideoLoop asset={heroAsset} playMode="always" dim={50} className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <h1 className="font-display text-[clamp(2.5rem,8vw,7rem)] font-bold uppercase leading-none tracking-tight">
          Everything.
          <br />
          Maxxed.
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-hyped-muted">
          A culture, a community, and an ecosystem for those who refuse to settle.
        </p>

        <div className="mt-10">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-lg bg-hyped-cyan px-10 py-4 text-sm font-bold text-hyped-black uppercase tracking-wide transition-opacity hover:opacity-90"
          >
            Lock In
          </a>
        </div>

        <div className="mt-16 flex justify-center animate-pulse">
          <Slash size="lg" />
        </div>
      </div>
    </section>
  );
}
