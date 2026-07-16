import { CSSProperties } from "react";

interface BoltProps {
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

export function Bolt({ className = "", width = 22, height = 22, style }: BoltProps) {
  return (
    <img
      src="/logo.png"
      alt=""
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "contain", ...style }}
      aria-hidden="true"
      draggable={false}
    />
  );
}
