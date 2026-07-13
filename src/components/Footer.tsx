import { site } from "@/content/site";
import { Bolt } from "./Bolt";

export function Footer() {
  return (
    <footer
      className="px-6 pb-8 pt-16 md:px-10 md:pt-20"
      style={{ borderTop: "1px solid rgba(244,242,247,.07)" }}
    >
      <div className="mx-auto max-w-[1360px]">
        {/* 3-column grid */}
        <div className="grid gap-10 sm:grid-cols-[2fr_1fr_1fr] md:gap-12">
          <div>
            <a href="/" className="inline-flex items-center gap-2.5">
              <Bolt width={14} height={20} />
              <span className="font-display text-[22px] font-[800] tracking-[.05em]">HYPED</span>
            </a>
            <p className="mt-3.5 font-mono text-xs tracking-[.1em] text-hyped-muted">LOCK IN MAXXING</p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] tracking-[.26em] text-hyped-muted sm:mb-[18px]">PRODUCTS</h4>
            <div className="flex flex-col gap-2.5">
              {site.footer.products.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-hyped-white transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[11px] tracking-[.26em] text-hyped-muted sm:mb-[18px]">COMMUNITY</h4>
            <div className="flex flex-col gap-2.5">
              {site.footer.community.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-hyped-white transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-wrap justify-between gap-4 pt-5 md:mt-16 md:pt-[22px]"
          style={{ borderTop: "1px solid rgba(244,242,247,.07)" }}
        >
          <span className="font-mono text-[11px] tracking-[.12em] text-hyped-muted">{site.footer.legal}</span>
          <span className="font-mono text-[11px] tracking-[.12em] text-hyped-muted">STAY LOCKED IN</span>
        </div>
      </div>
    </footer>
  );
}
