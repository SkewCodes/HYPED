"use client";

import { useEffect, useRef } from "react";
import Aurora from "./Aurora";
import { Ticker } from "./Ticker";
import { site } from "@/content/site";

export function Hero() {
  const glowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        const glow = Math.min(1, Math.max(0, window.scrollY / (vh * 0.6)));

        const el = glowRef.current;
        if (el) {
          const blur1 = 8 + glow * 20;
          const blur2 = 24 + glow * 50;
          const alpha1 = 0.4 + glow * 0.5;
          const alpha2 = 0.15 + glow * 0.35;
          const fillAlpha = glow * 0.9;
          const strokeWidth = 2 - glow * 0.5;

          el.style.color = `rgba(0,240,255,${fillAlpha})`;
          el.style.webkitTextStroke = `${strokeWidth}px var(--accent)`;
          el.style.filter = `drop-shadow(0 0 ${blur1}px rgba(0,240,255,${alpha1})) drop-shadow(0 0 ${blur2}px rgba(0,240,255,${alpha2}))`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <Aurora />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg,rgba(10,10,18,.25) 0%,transparent 40%,rgba(10,10,18,.9) 84%,#0A0A12 100%)",
        }}
      />

      <div className="relative z-[2] w-full max-w-[1200px] px-6 pb-16 pt-[150px] md:px-10">
        <p className="hero-stagger-1 font-mono text-[11px] tracking-[.26em] text-[var(--accent)]">
          THE BRAND FOR MAXXING CULTURE
        </p>

        <h1 className="mt-6 m-0 font-display font-[800] uppercase text-[clamp(40px,7vw,88px)] leading-[.88] tracking-[.01em]">
          <span className="hero-stagger-2 block">Be Hyped.</span>
          <span
            ref={glowRef}
            className="hero-stagger-3 block"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px var(--accent)",
              filter: "drop-shadow(0 0 8px rgba(0,240,255,.4)) drop-shadow(0 0 24px rgba(0,240,255,.15))",
              transition: "color .1s, filter .1s",
            }}
          >
            Dream Big.
          </span>
        </h1>

        <p className="hero-stagger-4 mt-6 max-w-[500px] text-[17px] leading-[1.6] text-hyped-bright md:text-[19px]">
          For the ones who wake up and lock in. Who track the progress,
          sharpen the edge, and show up again tomorrow.
        </p>

        <p className="hero-stagger-5 mt-4 font-mono text-sm tracking-[.08em] text-[var(--accent)]">
          {site.mantra}
        </p>
      </div>

      <div className="relative z-[2]">
        <Ticker />
      </div>

      <div className="hero-stagger-5 relative z-[2] flex justify-center pb-6 pt-4">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[.2em] text-hyped-dim">SCROLL</span>
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" className="animate-[scrollDown_2s_ease-in-out_infinite]">
            <path d="M7 0v14M1 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" className="text-hyped-dim" />
          </svg>
        </div>
      </div>
    </section>
  );
}
