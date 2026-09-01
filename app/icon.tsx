import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080808",
          color: "#f2eee7",
          fontFamily: "serif",
          fontSize: 340,
          fontWeight: 600,
        }}
      >
        B
      </div>
    ),
    { ...size },
  );
}
