import { siteContent } from "@/data/site-content";

/**
 * Canonical production origin — used for `metadataBase`, canonical URLs,
 * the sitemap, robots.txt, the web manifest and JSON-LD.
 *
 * Update this one constant if the site ships on a different domain.
 */
export const SITE_URL = "https://brighton-style.com";

/**
 * Google Search Console verification token.
 *
 * Get it from Search Console → add a `brighton-style.com` property →
 * "HTML tag" method → copy the `content` value of the meta tag here.
 * Leave empty and no verification tag is emitted.
 */
export const GOOGLE_SITE_VERIFICATION = "";

/** Resolve a site-relative path to an absolute URL on {@link SITE_URL}. */
export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}

const contactEmail = siteContent.contact.socialLinks
  .find((link) => link.href.startsWith("mailto:"))
  ?.href.replace("mailto:", "");

/** Real, profile-level social URLs — bare domains (e.g. instagram.com/) are ignored. */
const socialProfiles = siteContent.contact.socialLinks
  .map((link) => link.href)
  .filter((href) => {
    if (!href.startsWith("http")) return false;
    try {
      return new URL(href).pathname.replace(/\/+$/, "") !== "";
    } catch {
      return false;
    }
  });

type JsonLd = Record<string, unknown>;

/** Logo as a reusable ImageObject node. */
function logoImage(): JsonLd {
  return {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: absoluteUrl("/images/brighton-logo-white-solid.png"),
    contentUrl: absoluteUrl("/images/brighton-logo-white-solid.png"),
    caption: siteContent.brand.name,
  };
}

/** Organization / brand node — the anchor for every other schema on the site. */
export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: siteContent.brand.name,
    // Includes the Hebrew transliteration so Google can associate searches
    // like "בריטון" / "מותג בריטון" with this brand entity. Structured-data
    // only — never rendered on the page.
    alternateName: [
      "Brighton Fashion",
      "Brighton — Wear the World",
      "בריטון",
      "מותג בריטון",
      "בריטון אופנה",
    ],
    legalName: siteContent.brand.name,
    url: SITE_URL,
    logo: logoImage(),
    image: absoluteUrl(siteContent.hero.image.src),
    slogan: siteContent.hero.tagline,
    description: siteContent.seo.description,
    knowsAbout: [
      "Fashion design",
      "Designer handbags",
      "Ready-to-wear",
      "Leather goods",
      "Fashion accessories",
    ],
    areaServed: { "@type": "Place", name: "Worldwide" },
    brand: { "@id": `${SITE_URL}/#brand` },
    ...(contactEmail ? { email: contactEmail } : {}),
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
  };
}

/** Brand node — distinct from the operating Organization for entity clarity. */
export function brandSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Brand",
    "@id": `${SITE_URL}/#brand`,
    name: siteContent.brand.name,
    alternateName: ["Brighton Fashion", "בריטון", "מותג בריטון"],
    url: SITE_URL,
    logo: logoImage(),
    slogan: siteContent.hero.tagline,
    description: siteContent.seo.description,
    ...(socialProfiles.length ? { sameAs: socialProfiles } : {}),
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: siteContent.brand.name,
    alternateName: `${siteContent.brand.name} — ${siteContent.hero.tagline}`,
    url: SITE_URL,
    inLanguage: "en",
    description: siteContent.seo.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Home page node, tied back to the website and the organization. */
export function webPageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: siteContent.seo.title,
    description: siteContent.seo.description,
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: absoluteUrl(siteContent.hero.image.src),
  };
}

/** Featured collection as an ItemList — names and imagery, no commerce. */
export function collectionSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${siteContent.brand.name} ${siteContent.collection.eyebrow}`,
    description: siteContent.collection.intro,
    itemListElement: siteContent.collection.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${siteContent.brand.name} ${item.label}`,
      image: absoluteUrl(item.src),
    })),
  };
}

export function breadcrumbSchema(
  crumbs: readonly { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function aboutPageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: siteContent.about.seo.title,
    description: siteContent.about.seo.description,
    url: absoluteUrl("/about"),
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    primaryImageOfPage: absoluteUrl(siteContent.about.portraitImage.src),
  };
}

/** FAQ node — pass the brand Q&A pairs rendered on the page. */
export function faqSchema(
  entries: readonly { question: string; answer: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "en",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };
}
