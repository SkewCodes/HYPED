import { CSSProperties, useId } from "react";

interface BoltProps {
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

export function Bolt({ className = "", width = 16, height = 22, style }: BoltProps) {
  const uid = useId();
  const gid = `hg${uid}`;

  return (
    <svg
      viewBox="0 0 100 140"
      width={width}
      height={height}
      className={className}
      style={style}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="100%" stopColor="#4FFFB0" />
        </linearGradient>
      </defs>
      <path
        d="M10,0 H34 L32,42 L58,26 L45,68 L71,50 L74,0 H98 L90,140 H66 L69,86 L55,102 L63,64 L29,86 L26,140 H2 Z"
        fill={`url(#${gid})`}
      />
    </svg>
  );
}
