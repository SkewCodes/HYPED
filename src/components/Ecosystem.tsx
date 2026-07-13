import { builtOn, partners } from "@/content/ecosystem";
import { site } from "@/content/site";
import { Bolt } from "./Bolt";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="px-6 py-[100px] md:px-10 md:py-[140px]" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
      <div className="mx-auto max-w-[1200px]">
        <h2 className="font-display font-[800] uppercase text-[clamp(28px,4vw,64px)] leading-[.92]">
          Ecosystem
        </h2>

        {/* Built On */}
        <div className="mt-16">
          <h3 className="font-mono text-[11px] tracking-[.26em] text-hyped-muted">BUILT ON</h3>
          <div className="mt-6 flex flex-wrap items-center gap-8">
            {builtOn.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 py-4 transition-colors"
                style={{ borderBottom: "1px solid rgba(255,255,255,.06)" }}
              >
                <Bolt width={14} height={20} />
                <span className="font-display font-[700] text-[22px] uppercase tracking-[.02em] text-hyped-white transition-colors group-hover:text-[var(--accent)]">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            {builtOn.map((partner) => (
              <p key={partner.name} className="text-[15px] text-hyped-muted">{partner.description}</p>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mt-16">
          <h3 className="font-mono text-[11px] tracking-[.26em] text-hyped-muted">PARTNERS</h3>
          {partners.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 transition-[border-color] duration-300 hover:border-[var(--accent)]"
                  style={{ border: "1px solid rgba(255,255,255,.08)" }}
                >
                  <span className="font-display font-[700] text-[22px] uppercase tracking-[.02em] text-hyped-white transition-colors group-hover:text-[var(--accent)]">
                    {partner.name}
                  </span>
                  <p className="mt-2 text-[15px] leading-[1.6] text-hyped-muted">{partner.description}</p>
                </a>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-[17px] leading-[1.6] text-hyped-muted">
              Building with teams across DeFi infrastructure, agent systems, and on-chain culture.
            </p>
          )}
          <a
            href={site.social.x}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block font-mono text-[12px] tracking-[.18em] text-[var(--accent)] transition-colors hover:text-hyped-white"
          >
            Partner with us →
          </a>
        </div>
      </div>
    </section>
  );
}
