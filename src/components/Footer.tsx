import { site } from "@/content/site";
import { Bolt } from "./Bolt";

export function Footer() {
  return (
    <footer className="px-6 pb-8 pt-14 md:px-10 md:pt-16">
      <div className="divider" />
      <div className="mx-auto max-w-[1200px] pt-14 md:pt-16">
        <div className="grid gap-10 sm:grid-cols-3 md:gap-12">
          <div>
            <a href="/" className="inline-flex items-center gap-2.5">
              <Bolt width={14} height={20} />
              <span className="font-display text-[18px] font-[800] tracking-[.05em]">HYPED</span>
            </a>
            <p className="mt-3 font-mono text-[11px] tracking-[.06em] text-hyped-dim">
              {site.northStar}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[10px] tracking-[.26em] text-hyped-dim">LINKS</h4>
            <div className="flex flex-col gap-2">
              {site.footer.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-hyped-muted transition-colors hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-[10px] tracking-[.26em] text-hyped-dim">SOCIALS</h4>
            <div className="flex flex-col gap-2">
              {site.footer.socials.map((link) => (
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-hyped-muted transition-colors hover:text-[var(--accent)]"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span key={link.label} className="text-[13px] text-hyped-dim">
                    {link.label}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-5">
          <div className="divider-subtle" />
          <div className="flex flex-wrap items-center justify-between gap-4 pt-5">
            <span className="font-mono text-[10px] tracking-[.06em] text-hyped-dim">{site.footer.legal}</span>
            <span className="font-mono text-[10px] tracking-[.12em] text-[var(--accent-warm)]">{site.mantra}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
