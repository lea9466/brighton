import { ImageResponse } from "next/og";
import { siteContent } from "@/data/site-content";

export const alt = `${siteContent.brand.name} — ${siteContent.hero.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080808",
          color: "#f2eee7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 44,
            letterSpacing: 14,
            textTransform: "uppercase",
            color: "#c8c4bd",
          }}
        >
          {siteContent.statement.signature}
        </div>
        <div style={{ fontSize: 132, fontWeight: 600, letterSpacing: 10, marginTop: 28 }}>
          {siteContent.brand.name}
        </div>
        <div style={{ width: 96, height: 2, background: "#ec167f", margin: "44px 0" }} />
        <div style={{ fontSize: 46, letterSpacing: 3, color: "#f2eee7" }}>
          {siteContent.hero.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
