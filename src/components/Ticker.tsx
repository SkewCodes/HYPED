import { Bolt } from "./Bolt";

const items = ["TRADE MAXXING", "TRENCH MAXXING", "BET MAXXING", "LIFE MAXXING"];

function TickerHalf() {
  return (
    <div className="flex items-center gap-9 pr-9">
      {items.map((item) => (
        <span key={item} className="contents">
          <span className="font-display text-[22px] font-bold tracking-[.08em] text-hyped-white whitespace-nowrap">
            {item}
          </span>
          <Bolt width={12} height={17} />
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div
      className="overflow-hidden py-[13px]"
      style={{
        borderTop: "1px solid rgba(244,242,247,.08)",
        borderBottom: "1px solid rgba(244,242,247,.08)",
        background: "#050309",
      }}
    >
      <div className="flex w-max animate-marquee">
        <TickerHalf />
        <TickerHalf />
      </div>
    </div>
  );
}
