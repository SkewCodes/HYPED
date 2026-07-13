"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Bolt } from "./Bolt";

export function Nav() {
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

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 transition-colors duration-300 md:px-10"
      style={{
        background: "rgba(5,3,9,.7)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(244,242,247,.07)",
      }}
    >
      <a href="/" className="flex items-center gap-2.5 text-hyped-white">
        <Bolt width={16} height={22} />
        <span className="font-display text-2xl font-[800] uppercase tracking-[.05em] leading-none">
          HYPED
        </span>
      </a>

      <div className="flex items-center gap-9">
        {site.nav.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="hidden font-mono text-[11px] tracking-[.2em] text-hyped-muted transition-colors hover:text-hyped-white sm:block"
          >
            {link.label}
          </a>
        ))}
        <a
          href={site.nav.cta.href}
          className="hidden font-mono text-[11px] font-bold tracking-[.18em] bg-[var(--accent)] text-hyped-void px-5 py-[11px] transition-[filter,transform] hover:brightness-[1.12] hover:-translate-y-px sm:inline-block"
        >
          {site.nav.cta.label}
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`h-0.5 w-5 bg-hyped-white transition-all duration-200 ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-hyped-white transition-all duration-200 ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 px-6 pb-6 pt-4 sm:hidden"
          style={{ background: "rgba(5,3,9,.95)", borderBottom: "1px solid rgba(244,242,247,.07)" }}
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex flex-col gap-4">
            {site.nav.links.map((link) => (
              <a key={link.label} href={link.href} className="font-mono text-[11px] tracking-[.2em] text-hyped-white">
                {link.label}
              </a>
            ))}
            <a href={site.nav.cta.href} className="mt-2 block bg-[var(--accent)] px-5 py-3 text-center font-mono text-[11px] font-bold tracking-[.18em] text-hyped-void">
              {site.nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
