import { site } from "@/content/site";

const receipts = [
  {
    title: "Built in public",
    link: { text: "by @Skew ↗", href: site.founder.x },
  },
  {
    title: "Shipped, not promised",
    link: { text: "hyped.trade is live ↗", href: "https://hyped.trade" },
  },
  {
    title: "Community-built",
    text: "Culture first. Product second. Exit never.",
  },
];

export function Receipts() {
  return (
    <section
      id="receipts"
      className="px-6 py-[100px] md:px-10 md:py-[130px]"
      style={{ borderTop: "1px solid rgba(244,242,247,.07)" }}
    >
      <div className="mx-auto grid max-w-[1360px] gap-10 md:grid-cols-[minmax(280px,5fr)_7fr] md:gap-16">
        <div>
          <span className="font-mono text-xs tracking-[.28em] text-[var(--accent)]">03 — RECEIPTS</span>
          <h2 className="mt-[18px] font-display font-[800] uppercase text-[clamp(48px,6.5vw,110px)] leading-[.85]">
            No VC.
            <br />
            No shortcuts.
          </h2>
        </div>

        <div>
          {receipts.map((r, i) => (
            <div
              key={r.title}
              className="flex flex-wrap items-baseline justify-between gap-4 py-5 sm:gap-6 sm:py-[26px]"
              style={{
                borderTop: "1px solid rgba(244,242,247,.1)",
                ...(i === receipts.length - 1 ? { borderBottom: "1px solid rgba(244,242,247,.1)" } : {}),
              }}
            >
              <span className="text-[17px] font-medium sm:text-[19px]">{r.title}</span>
              {"link" in r && r.link ? (
                <a
                  href={r.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[13px] tracking-[.08em] text-[var(--accent)] transition-colors hover:text-hyped-white"
                >
                  {r.link.text}
                </a>
              ) : (
                <span className="font-mono text-[13px] tracking-[.08em] text-hyped-muted">{r.text}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
