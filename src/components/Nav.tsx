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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-hyped-void/90 backdrop-blur-md border-b border-hyped-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a
          href="/"
          className="flex items-center gap-2 font-display text-xl uppercase tracking-tight"
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
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded bg-hyped-cyan px-5 py-2.5 text-sm font-medium uppercase tracking-wide text-hyped-void sm:inline-block"
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
          className="border-t border-hyped-white/5 px-6 pb-6 pt-4 sm:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex flex-col gap-4">
            {site.nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-hyped-white transition-colors hover:text-hyped-cyan"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.nav.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center rounded bg-hyped-cyan px-4 py-3 text-sm font-medium uppercase tracking-wide text-hyped-void"
            >
              {site.nav.cta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
