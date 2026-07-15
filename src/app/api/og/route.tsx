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
          <polygon points="58,4 14,78 44,78 34,136 88,54 54,54" fill="#00F0FF" />
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
