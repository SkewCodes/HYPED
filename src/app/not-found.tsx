"use client";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="aurora-text font-display text-5xl font-[900] uppercase">H</span>
      <h1 className="mt-6 font-display font-[800] uppercase text-[clamp(2rem,5vw,4rem)] leading-[.88]">
        Rekt.
      </h1>
      <p className="mt-4 text-hyped-muted">
        This page doesn&apos;t exist.
      </p>
      <a
        href="/"
        className="mt-8 font-mono text-xs tracking-[.18em] text-[var(--accent)] transition-colors hover:text-hyped-white"
      >
        Back to the grind →
      </a>
    </div>
  );
}
