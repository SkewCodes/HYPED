import { site } from "@/content/site";
import { Slash } from "./Slash";

export function Footer() {
  return (
    <footer className="bg-hyped-carbon py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Slash size="sm" />
              <span className="font-display text-lg font-bold uppercase tracking-tight">
                Hyped
              </span>
            </div>
            <p className="mt-4 text-sm text-hyped-muted">
              Everything. Maxxed.
            </p>
            <p className="mt-2 text-xs text-hyped-muted">
              Built by{" "}
              <a
                href={site.team[0].x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-hyped-white transition-colors hover:text-hyped-cyan"
              >
                {site.team[0].name}
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-hyped-muted">
              Community
            </h4>
            <ul className="mt-4 space-y-2">
              {site.footer.community.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-hyped-white transition-colors hover:text-hyped-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-end sm:justify-end">
            <p className="text-xs text-hyped-muted">{site.footer.legal}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
