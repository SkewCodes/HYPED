import { Bolt } from "./Bolt";
import { tickerItems } from "@/content/ticker";

function TickerHalf() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {tickerItems.map((item) => (
        <span key={item} className="contents">
          <span className="font-mono text-[13px] tracking-[.12em] text-hyped-muted whitespace-nowrap sm:text-[15px]">
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
    <div
      className="overflow-hidden py-3 sm:py-[14px]"
      style={{
        borderTop: "1px solid rgba(255,255,255,.06)",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <div className="flex w-max animate-marquee">
        <TickerHalf />
        <TickerHalf />
        <TickerHalf />
        <TickerHalf />
      </div>
    </div>
  );
}
