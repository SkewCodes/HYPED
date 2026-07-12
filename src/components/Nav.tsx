"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Slash } from "./Slash";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-hyped-black/80 backdrop-blur-xl border-b border-hyped-muted/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5">
        <a
          href="/"
          className="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight uppercase"
        >
          <Slash size="sm" />
          Hyped
        </a>

        <div className="flex items-center gap-8">
          {site.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="hidden text-sm font-medium text-hyped-muted transition-colors hover:text-hyped-white sm:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.nav.cta.href}
            className="hidden items-center gap-1.5 rounded-lg bg-hyped-cyan px-5 py-2.5 text-sm font-bold text-hyped-black uppercase tracking-wide transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {site.nav.cta.label}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`h-0.5 w-5 bg-hyped-white transition-all duration-200 ${
                menuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-hyped-white transition-all duration-200 ${
                menuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="border-t border-hyped-muted/10 px-6 pb-8 pt-6 sm:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex flex-col gap-5">
            {site.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-base font-medium text-hyped-white transition-colors hover:text-hyped-cyan"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.nav.cta.href}
              className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-hyped-cyan px-4 py-3.5 text-sm font-bold text-hyped-black uppercase tracking-wide"
            >
              {site.nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
