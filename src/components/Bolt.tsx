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
        d="M4,0 H28 V46 L52,34 L44,64 L72,50 V0 H96 V140 H72 V88 L48,100 L56,72 L28,82 V140 H4 Z"
        fill={`url(#${gid})`}
      />
    </svg>
  );
}
