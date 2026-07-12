"use client";

import { site } from "@/content/site";
import { Slash } from "./Slash";
import { Reveal } from "./Reveal";

export function BuiltBy() {
  const member = site.team[0];

  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-extrabold uppercase tracking-tight">
            Built By
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-6 rounded-xl border border-hyped-muted/10 bg-hyped-carbon p-8 sm:flex-row sm:items-start sm:gap-8">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-hyped-cyan/30 bg-hyped-black">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Slash size="md" />
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-hyped-cyan">
                {member.role}
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-hyped-muted">
                {member.bio}
              </p>
              <a
                href={member.x}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-hyped-white transition-colors hover:text-hyped-cyan"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @{member.x.split("/").pop()}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
