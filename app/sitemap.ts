import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import { siteContent } from "@/data/site-content";

// Bump this when page content meaningfully changes, rather than on every deploy —
// a date that moves every build is a weak (and slightly noisy) signal to crawlers.
const lastModified = "2026-09-01";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        absoluteUrl(siteContent.hero.image.src),
        absoluteUrl(siteContent.editorialFeature.image.src),
      ],
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [absoluteUrl(siteContent.about.portraitImage.src)],
    },
  ];
}
