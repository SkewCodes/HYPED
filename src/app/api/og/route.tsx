import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1A0A2E 0%, #0A0A12 50%, #1A0A2E 100%)",
        }}
      >
        <svg viewBox="0 0 100 140" width="48" height="67">
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

        <span style={{ marginTop: 20, fontSize: 14, color: "#00F0FF", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "monospace" }}>
          THE BRAND FOR MAXXING CULTURE
        </span>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 20 }}>
          <span style={{ fontSize: 80, fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 0.85 }}>
            BE HYPED.
          </span>
          <span style={{ fontSize: 80, fontWeight: 900, color: "#00F0FF", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 0.85, marginTop: 12 }}>
            DREAM BIG.
          </span>
        </div>

        <span style={{ marginTop: 32, fontSize: 18, color: "#A0A0B0", letterSpacing: "0.08em", fontFamily: "monospace" }}>
          For the ones who wake up and lock in.
        </span>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
