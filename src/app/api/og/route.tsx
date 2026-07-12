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
          background: "linear-gradient(135deg, #1A0A2E 0%, #0B0414 50%, #1A0A2E 100%)",
          position: "relative",
        }}
      >
        {/* Cyan glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0, 240, 255, 0.15) 0%, transparent 70%)",
          }}
        />

        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.05,
          }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: i * 60,
                top: 0,
                width: 1,
                height: "100%",
                background: "#00F0FF",
              }}
            />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <div
              key={`h${i}`}
              style={{
                position: "absolute",
                top: i * 60,
                left: 0,
                height: 1,
                width: "100%",
                background: "#00F0FF",
              }}
            />
          ))}
        </div>

        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#00F0FF",
            fontSize: 48,
            fontWeight: 700,
            fontFamily: "monospace",
            letterSpacing: "0.05em",
          }}
        >
          //
        </div>

        {/* Headline */}
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
              fontSize: 72,
              fontWeight: 900,
              color: "#F4F4F6",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            EVERYTHING.
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 900,
              background: "linear-gradient(90deg, #00F0FF, #9D6BFF)",
              backgroundClip: "text",
              color: "transparent",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              marginTop: 8,
            }}
          >
            MAXXED.
          </span>
        </div>

        {/* Tagline */}
        <span
          style={{
            marginTop: 32,
            fontSize: 20,
            color: "#9B8FAD",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          HYPED
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
