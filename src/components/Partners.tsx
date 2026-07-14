import { builtOn, partners } from "@/content/ecosystem";
import { site } from "@/content/site";
import { Bolt } from "./Bolt";

export function PartnersContent() {
  return (
    <article className="px-6 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="pt-16 pb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[.1em] text-hyped-muted transition-colors hover:text-hyped-white"
          >
            &larr; Back
          </a>
        </div>

        {/* Header */}
        <section className="py-[80px] md:py-[120px]">
          <h1 className="font-display font-[900] uppercase text-[clamp(44px,8vw,120px)] leading-[.85] tracking-[.01em]">
            The Network.
          </h1>
          <p className="mt-8 max-w-[580px] text-[17px] leading-[1.7] text-hyped-muted md:text-[19px]">
            Built on the strongest foundation in DeFi. Growing with the people who show up.
          </p>
        </section>

        {/* Section 1 — Built On */}
        <section
          className="py-[80px] md:py-[120px]"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <h2 className="font-mono text-[12px] tracking-[.26em] text-[var(--accent)]">BUILT ON</h2>

          <div className="mt-12 space-y-5">
            {builtOn.map((entry) => (
              <a
                key={entry.name}
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 sm:p-10 md:p-12 transition-[border-color] duration-300 hover:border-[var(--accent)]"
                style={{
                  border: "1px solid rgba(255,255,255,.08)",
                  background: "rgba(15,10,28,.4)",
                }}
              >
                <div className="flex items-center gap-3">
                  <Bolt width={18} height={24} />
                  <span className="font-display font-[900] text-[clamp(32px,4vw,56px)] uppercase tracking-[.02em] text-hyped-white transition-colors group-hover:text-[var(--accent)]">
                    {entry.name}
                  </span>
                </div>
                <p className="mt-6 max-w-[540px] text-[17px] leading-[1.8] text-hyped-muted md:text-[18px]">
                  {entry.description}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] tracking-[.14em] text-hyped-muted transition-colors group-hover:text-[var(--accent)]">
                  Explore {entry.name}
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M1 5h11M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Section 2 — Partners */}
        <section
          className="py-[80px] md:py-[120px]"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <h2 className="font-mono text-[12px] tracking-[.26em] text-[var(--accent)]">PARTNERS</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {partners.map((entry) => (
              <a
                key={entry.name}
                href={entry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 sm:p-10 transition-[border-color] duration-300 hover:border-[var(--accent)]"
                style={{
                  border: "1px solid rgba(255,255,255,.08)",
                  background: "rgba(15,10,28,.4)",
                }}
              >
                <span className="font-display font-[800] text-[28px] uppercase tracking-[.02em] text-hyped-white transition-colors group-hover:text-[var(--accent)] sm:text-[32px]">
                  {entry.name}
                </span>
                <p className="mt-4 text-[16px] leading-[1.7] text-hyped-muted">
                  {entry.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] tracking-[.14em] text-hyped-muted transition-colors group-hover:text-[var(--accent)]">
                  Learn more
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M1 5h11M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Section 3 — Open Invitation */}
        <section
          className="py-[80px] md:py-[120px]"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <p className="text-[17px] leading-[1.8] text-hyped-muted md:text-[19px]">
            Building something that aligns with maxxing culture?
          </p>
          <a
            href={site.social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] tracking-[.18em] text-[var(--accent)] transition-colors hover:text-hyped-white"
          >
            Partner with us →
          </a>
        </section>
      </div>
    </article>
  );
}
