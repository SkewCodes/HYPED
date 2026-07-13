import { site } from "@/content/site";
import { Bolt } from "./Bolt";

export function Footer() {
  return (
    <footer
      className="px-6 pb-8 pt-16 md:px-10 md:pt-20"
      style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-2.5">
              <Bolt width={14} height={20} />
              <span className="font-display text-[20px] font-[800] tracking-[.05em]">HYPED</span>
            </a>
            <p className="mt-3 font-mono text-[12px] tracking-[.08em] text-hyped-muted">
              {site.anchor}
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 font-mono text-[11px] tracking-[.26em] text-hyped-muted">PRODUCTS</h4>
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

          {/* Links */}
          <div>
            <h4 className="mb-4 font-mono text-[11px] tracking-[.26em] text-hyped-muted">LINKS</h4>
            <div className="flex flex-col gap-2.5">
              {site.footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-hyped-white transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-4 font-mono text-[11px] tracking-[.26em] text-hyped-muted">SOCIALS</h4>
            <div className="flex flex-col gap-2.5">
              {site.footer.socials.map((link) => (
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-hyped-white transition-colors hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} className="text-sm text-hyped-muted">
                    {link.label}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-wrap justify-between gap-4 pt-5 md:mt-16"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <span className="font-mono text-[11px] tracking-[.08em] text-hyped-muted">{site.footer.legal}</span>
        </div>
      </div>
    </footer>
  );
}
