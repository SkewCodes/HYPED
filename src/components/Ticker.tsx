import { Bolt } from "./Bolt";
import { tickerItems } from "@/content/ticker";

function TickerHalf() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {tickerItems.map((item) => (
        <span key={item} className="contents">
          <span className="font-mono text-[13px] tracking-[.12em] text-hyped-muted whitespace-nowrap transition-colors duration-200 hover:text-[var(--accent)] sm:text-[15px]">
            {item}
          </span>
          <Bolt width={10} height={14} className="shrink-0 opacity-40" />
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="ticker-mask overflow-hidden py-3 sm:py-[14px]">
      <div className="divider-subtle" />
      <div className="flex w-max animate-marquee py-3 sm:py-[14px]">
        <TickerHalf />
        <TickerHalf />
        <TickerHalf />
        <TickerHalf />
      </div>
      <div className="divider-subtle" />
    </div>
  );
}
