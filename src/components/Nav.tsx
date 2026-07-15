"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Bolt } from "./Bolt";

interface NavProps {
  variant?: "marketing" | "app";
}

export function Nav({ variant = "marketing" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isApp = variant === "app";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-10 ${scrolled ? "py-3" : ""}`}
      style={{
        background: scrolled ? "rgba(10,10,18,.92)" : "rgba(10,10,18,.5)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,.08)" : "1px solid rgba(255,255,255,.03)",
      }}
    >
      {/* Left: Logo + Brand links */}
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-2.5 text-hyped-white">
          <Bolt width={16} height={22} />
          <span className="font-display text-xl font-[800] uppercase tracking-[.05em] leading-none sm:text-2xl">
            HYPED
          </span>
        </a>

        {/* Brand links — always visible on desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {site.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] tracking-[.18em] text-hyped-muted transition-colors hover:text-hyped-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Right: App links (when authenticated) + CTA */}
      <div className="flex items-center gap-6">
        {isApp && (
          <div className="hidden items-center gap-5 md:flex">
            <a
              href="/dashboard"
              className="font-mono text-[11px] tracking-[.18em] text-hyped-muted transition-colors hover:text-hyped-white"
            >
              DASHBOARD
            </a>
          </div>
        )}

        <a
          href={site.nav.cta.href}
          className="hidden font-mono text-[11px] font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void px-5 py-[11px] transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-px sm:inline-block"
        >
          {site.nav.cta.label}
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`h-0.5 w-5 bg-hyped-white transition-all duration-200 origin-center ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-hyped-white transition-all duration-200 origin-center ${menuOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 px-6 pb-6 pt-4 sm:hidden"
          style={{
            background: "rgba(10,10,18,.95)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            borderBottom: "1px solid rgba(255,255,255,.06)",
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex flex-col gap-5">
            {site.nav.links.map((link) => (
              <a key={link.label} href={link.href} className="font-mono text-[12px] tracking-[.2em] text-hyped-white">
                {link.label}
              </a>
            ))}
            {isApp && (
              <a href="/dashboard" className="font-mono text-[12px] tracking-[.2em] text-hyped-white">
                DASHBOARD
              </a>
            )}
            <a href={site.nav.cta.href} className="mt-1 block bg-[var(--accent)] px-5 py-3.5 text-center font-mono text-[11px] font-bold tracking-[.18em] text-hyped-void">
              {site.nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
