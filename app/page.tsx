import { BrandIntroduction } from "@/components/sections/BrandIntroduction";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { BrandStory } from "@/components/sections/BrandStory";
import { Contact } from "@/components/sections/Contact";
import { EditorialFeature } from "@/components/sections/EditorialFeature";
import { EditorialGallery } from "@/components/sections/EditorialGallery";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStory />
        <FeaturedCollection />
        <BrandIntroduction />
        <EditorialFeature />
        <EditorialGallery />
        <BrandStatement />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
