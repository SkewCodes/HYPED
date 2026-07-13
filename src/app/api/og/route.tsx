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
          background: "linear-gradient(135deg, #0C0616 0%, #050309 50%, #0C0616 100%)",
        }}
      >
        {/* Bolt mark */}
        <svg viewBox="0 0 100 140" width="48" height="67">
          <polygon points="58,4 14,78 44,78 34,136 88,54 54,54" fill="#00F0FF" />
        </svg>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 24 }}>
          <span style={{ fontSize: 80, fontWeight: 900, color: "#F4F2F7", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 0.85 }}>
            EVERYTHING.
          </span>
          <span style={{ fontSize: 80, fontWeight: 900, color: "#00F0FF", textTransform: "uppercase", letterSpacing: "-0.02em", lineHeight: 0.85, marginTop: 12 }}>
            MAXXED.
          </span>
        </div>

        <span style={{ marginTop: 40, fontSize: 16, color: "#9A93A8", letterSpacing: "0.28em", textTransform: "uppercase", fontFamily: "monospace" }}>
          LOCK IN MAXXING
        </span>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
