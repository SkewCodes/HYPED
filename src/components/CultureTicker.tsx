export function CultureTicker() {
  const items = [
    "12K+ degens locked in",
    "4 products shipping",
    "140+ markets live",
    "24/7 grind mode",
    "No VC. No shortcuts.",
    "Community-built alpha",
  ];

  const repeated = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-hyped-muted/10 bg-hyped-carbon/50 py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-hyped-muted"
          >
            <span className="h-1 w-1 rounded-full bg-hyped-cyan" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
