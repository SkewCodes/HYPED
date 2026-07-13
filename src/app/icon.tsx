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
          <polygon
            points="58,4 14,78 44,78 34,136 88,54 54,54"
            fill="#00F0FF"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
