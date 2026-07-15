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

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 24 }}>
          <span style={{ fontSize: 80, fontWeight: 900, color: "#FFFFFF", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 0.85 }}>
            EVERYTHING.
          </span>
          <span style={{ fontSize: 80, fontWeight: 900, color: "#00F0FF", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 0.85, marginTop: 12 }}>
            MAXXED.
          </span>
        </div>

        <span style={{ marginTop: 32, fontSize: 18, color: "#A0A0B0", letterSpacing: "0.12em", fontFamily: "monospace" }}>
          The home for people who lock in.
        </span>

        <span style={{ marginTop: 16, fontSize: 14, color: "#00F0FF", letterSpacing: "0.24em", textTransform: "uppercase", fontFamily: "monospace" }}>
          LOCK IN. STAY HYPED.
        </span>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
