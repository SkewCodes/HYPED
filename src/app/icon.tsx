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
            d="M4,0 H28 V46 L52,34 L44,64 L72,50 V0 H96 V140 H72 V88 L48,100 L56,72 L28,82 V140 H4 Z"
            fill="url(#ag)"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
