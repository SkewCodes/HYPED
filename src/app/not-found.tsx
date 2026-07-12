"use client";

import { Slash } from "@/components/Slash";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <img
        src="/media/maxx-rekt.webp"
        alt="Maxx the Bull — Rekt"
        className="h-32 w-auto"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="mt-6 flex items-center gap-2">
        <Slash size="sm" />
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] uppercase leading-[0.85] tracking-tight">
          Rekt.
        </h1>
      </div>
      <p className="mt-4 text-hyped-muted">
        This page doesn&apos;t exist.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-hyped-cyan transition-opacity hover:opacity-80"
      >
        Back to the grind →
      </a>
    </div>
  );
}
