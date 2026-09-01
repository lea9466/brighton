import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { siteContent } from "@/data/site-content";
import { JsonLd } from "@/components/JsonLd";
import {
  GOOGLE_SITE_VERIFICATION,
  SITE_URL,
  brandSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteContent.seo.title,
    template: siteContent.seo.titleTemplate,
  },
  description: siteContent.seo.description,
  keywords: [...siteContent.seo.keywords],
  applicationName: siteContent.brand.name,
  authors: [{ name: siteContent.brand.name, url: SITE_URL }],
  creator: siteContent.brand.name,
  publisher: siteContent.brand.name,
  category: "fashion",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: siteContent.brand.name,
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(GOOGLE_SITE_VERIFICATION
    ? { verification: { google: GOOGLE_SITE_VERIFICATION } }
    : {}),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable}`}>
      <body>
        {children}
        <JsonLd data={[organizationSchema(), brandSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
