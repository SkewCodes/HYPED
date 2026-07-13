import { partners } from "@/content/ecosystem";
import { site } from "@/content/site";

export function PartnersContent() {
  return (
    <section className="px-6 py-[80px] md:px-10 md:py-[120px]">
      <div className="mx-auto max-w-[1200px]">
        <a
          href="/"
          className="mb-12 inline-flex items-center gap-2 font-mono text-xs tracking-[.1em] text-hyped-muted transition-colors hover:text-hyped-white"
        >
          &larr; Back
        </a>

        <h1 className="font-display font-[800] uppercase text-[clamp(36px,6vw,80px)] leading-[.88]">
          Partners
        </h1>
        <p className="mt-6 max-w-[560px] text-[17px] leading-[1.7] text-hyped-muted md:text-[19px]">
          People and brands partnered with Hyped. Growing together with the ambitious.
        </p>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 md:mt-20">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 transition-[border-color] duration-300 hover:border-[var(--accent)]"
              style={{ border: "1px solid rgba(255,255,255,.08)", background: "rgba(15,10,28,.4)" }}
            >
              <span className="font-display font-[800] text-[28px] uppercase tracking-[.02em] text-hyped-white transition-colors group-hover:text-[var(--accent)] sm:text-[32px]">
                {partner.name}
              </span>
              <p className="mt-4 text-[16px] leading-[1.7] text-hyped-muted">
                {partner.description}
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

        <div className="mt-16 md:mt-20">
          <a
            href={site.social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[.18em] text-[var(--accent)] transition-colors hover:text-hyped-white"
          >
            Partner with us →
          </a>
        </div>
      </div>
    </section>
  );
}
