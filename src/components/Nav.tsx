"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Bolt } from "./Bolt";

interface NavProps {
  variant?: "marketing" | "app";
}

export function Nav({ variant = "marketing" }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    let wasScrolled = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > 80;
        if (scrolled !== wasScrolled) {
          wasScrolled = scrolled;
          const el = navRef.current;
          if (el) {
            el.style.background = scrolled ? "rgba(14,14,22,.92)" : "rgba(14,14,22,.85)";
            el.style.borderColor = scrolled ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.06)";
            el.style.boxShadow = scrolled ? "0 8px 32px rgba(0,0,0,.25)" : "none";
            el.style.paddingTop = scrolled ? "12px" : "14px";
            el.style.paddingBottom = scrolled ? "12px" : "14px";
          }
        }
        ticking = false;
      });
    };

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
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[100] mx-3 mt-3 flex items-center justify-between px-6 py-3.5 rounded-2xl transition-[background,border-color,box-shadow] duration-300 md:mx-5 md:px-8"
      style={{
        background: "rgba(14,14,22,.85)",
        border: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-2.5 text-hyped-white">
          <Bolt width={26} height={26} />
          <span className="font-display text-xl font-[800] uppercase tracking-[.05em] leading-none sm:text-2xl">
            HYPED
          </span>
        </a>

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
          className="hidden font-mono text-[11px] font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void px-5 py-[11px] rounded-lg transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-px sm:inline-block"
        >
          {site.nav.cta.label}
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`h-0.5 w-5 bg-hyped-white transition-all duration-200 origin-center ${menuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-hyped-white transition-all duration-200 origin-center ${menuOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="absolute top-[calc(100%+8px)] left-0 right-0 mx-1 rounded-2xl px-6 pb-6 pt-4 sm:hidden"
          style={{
            background: "rgba(14,14,22,.92)",
            border: "1px solid rgba(255,255,255,.1)",
            boxShadow: "0 12px 40px rgba(0,0,0,.35)",
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
            <a href={site.nav.cta.href} className="mt-1 block bg-[var(--accent)] rounded-lg px-5 py-3.5 text-center font-mono text-[11px] font-bold tracking-[.18em] text-hyped-void">
              {site.nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
