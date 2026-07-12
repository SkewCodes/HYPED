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
          background: "linear-gradient(135deg, #1A0A2E 0%, #0B0512 50%, #1A0A2E 100%)",
        }}
      >
        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            color: "#00F0FF",
            fontSize: 48,
            fontWeight: 700,
            fontFamily: "monospace",
            letterSpacing: "0.05em",
          }}
        >
          //
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#F4F2F7",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 0.85,
            }}
          >
            EVERYTHING.
          </span>
          <span
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: "#00F0FF",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 0.85,
              marginTop: 12,
            }}
          >
            MAXXED.
          </span>
        </div>

        <span
          style={{
            marginTop: 40,
            fontSize: 18,
            color: "#9A93A8",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Trade everything. Bet anything. Build infinitely.
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
