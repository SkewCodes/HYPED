import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050309",
          borderRadius: "6px",
        }}
      >
        <svg viewBox="0 0 100 140" width="22" height="28">
          <defs>
            <linearGradient id="ag" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#4FFFB0" />
            </linearGradient>
          </defs>
          <path
            d="M10,0 H34 L32,42 L58,26 L45,68 L71,50 L74,0 H98 L90,140 H66 L69,86 L55,102 L63,64 L29,86 L26,140 H2 Z"
            fill="url(#ag)"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
