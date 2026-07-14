import { site } from "@/content/site";
import { Bolt } from "./Bolt";

export function Footer() {
  return (
    <footer
      className="px-6 pb-8 pt-14 md:px-10 md:pt-16"
      style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 sm:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center gap-2.5">
              <Bolt width={14} height={20} />
              <span className="font-display text-[18px] font-[800] tracking-[.05em]">HYPED</span>
            </a>
            <p className="mt-3 font-mono text-[11px] tracking-[.06em] text-hyped-muted">
              {site.anchor}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-mono text-[10px] tracking-[.26em] text-hyped-muted">LINKS</h4>
            <div className="flex flex-col gap-2">
              {site.footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-hyped-white transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-4 font-mono text-[10px] tracking-[.26em] text-hyped-muted">SOCIALS</h4>
            <div className="flex flex-col gap-2">
              {site.footer.socials.map((link) => (
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-hyped-white transition-colors hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} className="text-[13px] text-hyped-muted">
                    {link.label}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-5 md:mt-12"
          style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}
        >
          <span className="font-mono text-[10px] tracking-[.06em] text-hyped-muted">{site.footer.legal}</span>
        </div>
      </div>
    </footer>
  );
}
