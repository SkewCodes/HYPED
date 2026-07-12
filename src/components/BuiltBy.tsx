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
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-hyped-cyan/20 bg-hyped-carbon">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Slash size="lg" className="opacity-20" />
              </div>
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
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-6 w-auto"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
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
