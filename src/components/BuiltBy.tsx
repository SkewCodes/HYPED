"use client";

import { site } from "@/content/site";
import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

export function BuiltBy() {
  const member = site.team[0];

  return (
    <section className="bg-hyped-carbon py-24 md:py-40">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            <Slash size="sm" />
            <span className="text-xs font-semibold uppercase tracking-widest text-hyped-cyan">
              Built By
            </span>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-8 rounded-2xl border border-hyped-muted/10 bg-hyped-black p-8 sm:flex-row sm:items-start sm:p-10">
            {/* SVG avatar */}
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-hyped-cyan/20 bg-hyped-carbon">
              <svg viewBox="0 0 112 112" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="avatar-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1A0A2E" />
                    <stop offset="100%" stopColor="#0B0414" />
                  </linearGradient>
                  <linearGradient id="avatar-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#9D6BFF" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <rect width="112" height="112" fill="url(#avatar-bg)" />
                {/* Geometric anonymous figure */}
                <circle cx="56" cy="38" r="14" fill="url(#avatar-glow)" opacity="0.8" />
                <path d="M56 56 L76 90 L36 90 Z" fill="url(#avatar-glow)" opacity="0.6" />
                {/* // brand mark overlay */}
                <text x="56" y="78" textAnchor="middle" fill="#00F0FF" fontSize="14" fontFamily="monospace" opacity="0.3">//</text>
              </svg>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-display text-3xl font-bold uppercase tracking-tight">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-hyped-cyan">
                {member.role}
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-hyped-muted">
                {member.bio}
              </p>
              <a
                href={member.x}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-hyped-muted/20 px-4 py-2 text-sm font-semibold text-hyped-white transition-colors hover:border-hyped-cyan/40 hover:text-hyped-cyan"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @{member.x.split("/").pop()}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Partners */}
        {site.partners.length > 0 && (
          <Reveal className="mt-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-hyped-muted">
              Partners
            </p>
            <div className="flex flex-wrap gap-4">
              {site.partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-hyped-muted/10 bg-hyped-black px-6 py-4 transition-colors hover:border-hyped-cyan/30"
                >
                  <TrueNorthLogo className="h-5 w-auto text-hyped-muted transition-colors group-hover:text-hyped-white" />
                  <span className="text-sm font-semibold text-hyped-white transition-colors group-hover:text-hyped-cyan">
                    {partner.name}
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

function TrueNorthLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Compass arrow icon */}
      <path d="M12 2L8 12L12 22L16 12L12 2ZM12 6L14.5 12L12 18L9.5 12L12 6Z" fillRule="evenodd" />
      {/* Text: TRUENORTH */}
      <text x="26" y="16" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="700" letterSpacing="0.05em">TRUENORTH</text>
    </svg>
  );
}
