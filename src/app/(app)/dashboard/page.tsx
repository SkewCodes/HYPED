import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — HYPED",
  robots: "noindex",
};

export default function DashboardPage() {
  return (
    <div className="px-6 py-[120px] md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <p className="font-mono text-[11px] tracking-[.26em] text-[var(--accent)]">
          COMING SOON
        </p>
        <h1 className="mt-6 font-display font-[800] uppercase text-[clamp(28px,4vw,44px)] leading-[.9]">
          Your dashboard.
        </h1>
        <p className="mt-6 max-w-[480px] text-[16px] leading-[1.7] text-hyped-muted">
          Track your arc, manage your streaks, and see your growth — all in
          one place. Coming with hyped.max.
        </p>
        <a
          href="/#waitlist"
          className="mt-8 inline-block font-mono text-[11px] font-bold tracking-[.18em] bg-[var(--accent)] text-white dark:text-hyped-void px-6 py-3.5 rounded-lg transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-0.5"
        >
          JOIN THE WAITLIST
        </a>
      </div>
    </div>
  );
}
