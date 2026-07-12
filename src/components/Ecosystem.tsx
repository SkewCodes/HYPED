"use client";

import { site } from "@/content/site";
import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const iconMap = {
  discord: DiscordIcon,
  x: XIcon,
  youtube: YouTubeIcon,
};

export function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-hyped-carbon py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Partners */}
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase tracking-tight">
            Partners
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="flex flex-wrap gap-6">
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
                  className="h-8 w-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="font-display text-sm font-bold uppercase tracking-tight text-hyped-white transition-colors group-hover:text-hyped-cyan">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Ecosystem */}
        <Reveal className="mt-20">
          <div className="flex items-center gap-3">
            <Slash size="md" />
            <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-extrabold uppercase tracking-tight">
              Ecosystem
            </h3>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {site.ecosystem.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-hyped-muted/10 bg-hyped-black p-5 transition-colors hover:border-hyped-cyan/30"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-hyped-carbon">
                    <Icon className="h-5 w-5 text-hyped-muted transition-colors group-hover:text-hyped-cyan" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-hyped-white transition-colors group-hover:text-hyped-cyan">
                      {item.name}
                    </p>
                    <p className="text-xs text-hyped-muted">{item.description}</p>
                  </div>
                  <span className="ml-auto text-hyped-muted transition-colors group-hover:text-hyped-cyan" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
