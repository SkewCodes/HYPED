export function CultureTicker() {
  const items = [
    "LOCK IN",
    "STAY HYPED",
    "NO SHORTCUTS",
    "SHIP > TALK",
    "GRIND MODE",
    "FULL SEND",
    "MAXX EVERYTHING",
    "CULTURE IS THE EDGE",
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-hyped-muted/10 bg-hyped-carbon py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-3 font-display text-sm font-bold uppercase tracking-widest text-hyped-muted/40"
          >
            <span className="text-hyped-cyan">//</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
