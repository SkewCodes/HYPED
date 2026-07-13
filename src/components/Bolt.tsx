import { CSSProperties } from "react";

interface BoltProps {
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

export function Bolt({ className = "", width = 16, height = 22, style }: BoltProps) {
  return (
    <svg
      viewBox="0 0 100 140"
      width={width}
      height={height}
      className={className}
      style={style}
      aria-hidden="true"
    >
      <polygon
        points="58,4 14,78 44,78 34,136 88,54 54,54"
        fill="var(--accent)"
      />
    </svg>
  );
}
