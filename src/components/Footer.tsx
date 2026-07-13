import { site } from "@/content/site";
import { Bolt } from "./Bolt";

const chargeDelays = [".1s", ".19s", ".28s", ".37s", ".46s"];

export function Footer() {
  return (
    <footer
      className="overflow-hidden px-6 pb-8 pt-20 md:px-10"
      style={{ borderTop: "1px solid rgba(244,242,247,.07)" }}
    >
      <div className="mx-auto max-w-[1360px]">
        {/* 3-column grid */}
        <div className="mb-20 grid gap-12 sm:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Bolt width={14} height={20} />
              <span className="font-display text-[22px] font-[800] tracking-[.05em]">HYPED</span>
            </div>
            <p className="mt-3.5 font-mono text-xs tracking-[.1em] text-hyped-muted">LOCK IN MAXXING</p>
          </div>

          <div>
            <h4 className="mb-[18px] font-mono text-[11px] tracking-[.26em] text-hyped-muted">PRODUCTS</h4>
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
            <h4 className="mb-[18px] font-mono text-[11px] tracking-[.26em] text-hyped-muted">COMMUNITY</h4>
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

        {/* Giant electrified wordmark */}
        <div className="flex items-end gap-[2vw] leading-[.78]" style={{ marginBottom: "-2.5vw" }}>
          <Bolt
            width={96}
            height={134}
            className="flex-none"
            style={{
              width: "clamp(52px,6.5vw,96px)",
              height: "auto",
              marginBottom: "1.6vw",
              filter: "drop-shadow(0 0 24px rgba(0,240,255,.45))",
            }}
          />
          <div className="flex font-display font-[900] uppercase text-[clamp(120px,17.5vw,290px)] tracking-[.01em]">
            {"HYPED".split("").map((char, i) => (
              <span
                key={i}
                className="animate-[charge_3.6s_infinite]"
                style={{ color: "#2E2839", animationDelay: chargeDelays[i] }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-wrap justify-between gap-6 pt-[22px]"
          style={{ borderTop: "1px solid rgba(244,242,247,.07)" }}
        >
          <span className="font-mono text-[11px] tracking-[.12em] text-hyped-muted">{site.footer.legal}</span>
          <span className="font-mono text-[11px] tracking-[.12em] text-hyped-muted">STAY LOCKED IN</span>
        </div>
      </div>
    </footer>
  );
}
