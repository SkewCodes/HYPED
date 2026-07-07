"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Slash } from "./Slash";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-hyped-carbon/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight uppercase">
          <Slash size="sm" />
          Hyped
        </a>

        <div className="flex items-center gap-6">
          {site.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="hidden text-sm text-hyped-muted transition-colors hover:text-hyped-white sm:block"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.nav.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded bg-hyped-cyan px-4 py-2 text-sm font-semibold text-hyped-black transition-opacity hover:opacity-90"
          >
            <Slash size="sm" className="[&_path]:text-hyped-black" />
            {site.nav.cta.label}
          </a>
        </div>
      </div>
    </nav>
  );
}
