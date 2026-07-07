"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Reveal } from "./Reveal";

export function HypedTV() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="bg-hyped-carbon py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase tracking-tight">
            Hyped TV
          </h2>
          <p className="mt-4 max-w-md text-hyped-muted">
            Culture, alpha, and building in public.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-hyped-muted/10 bg-hyped-black">
            {!loaded ? (
              <button
                onClick={() => setLoaded(true)}
                className="group relative flex h-full w-full items-center justify-center"
                aria-label={`Play: ${site.hypedTv.title}`}
              >
                <img
                  src={site.hypedTv.poster}
                  alt={site.hypedTv.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-hyped-black/40" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-hyped-cyan transition-transform group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-1 h-6 w-6 text-hyped-black"
                  >
                    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
                  </svg>
                </div>
              </button>
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${site.hypedTv.videoId}?autoplay=1&rel=0`}
                title={site.hypedTv.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            )}
          </div>
        </Reveal>

        <Reveal className="mt-8 flex gap-6">
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-hyped-muted transition-colors hover:text-hyped-white"
          >
            YouTube &rarr;
          </a>
          <a
            href={site.social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-hyped-muted transition-colors hover:text-hyped-white"
          >
            X / Twitter &rarr;
          </a>
        </Reveal>
      </div>
    </section>
  );
}
