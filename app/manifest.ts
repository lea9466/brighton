import type { MetadataRoute } from "next";
import { siteContent } from "@/data/site-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteContent.seo.title,
    short_name: siteContent.brand.name,
    description: siteContent.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#080808",
    categories: ["shopping", "lifestyle"],
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
