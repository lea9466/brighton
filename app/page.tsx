import { BrandStatement } from "@/components/sections/BrandStatement";
import { BrandStory } from "@/components/sections/BrandStory";
import { BrandIntro } from "@/components/BrandIntro";
import { Contact } from "@/components/sections/Contact";
import { EditorialFeature } from "@/components/sections/EditorialFeature";
import { EditorialGallery } from "@/components/sections/EditorialGallery";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { JsonLd } from "@/components/JsonLd";
import type { Metadata } from "next";
import { siteContent } from "@/data/site-content";
import { resolveTabletVideo } from "@/lib/campaign-video";
import { collectionSchema, webPageSchema } from "@/lib/seo";

// Title, description and Open Graph are inherited from the root layout;
// the home route only needs to pin its canonical URL.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  const tabletVideo = resolveTabletVideo(siteContent.editorialFeature.video);

  return (
    <>
      <JsonLd data={[webPageSchema(), collectionSchema()]} />
      <BrandIntro />
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <BrandStory />
        <FeaturedCollection />
        <EditorialFeature video={tabletVideo} />
        <EditorialGallery />
        <BrandStatement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
