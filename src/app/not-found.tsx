"use client";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="aurora-text font-display font-[900] uppercase text-[clamp(2.5rem,6vw,5rem)] leading-[.88]">
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
