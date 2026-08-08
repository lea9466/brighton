import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { siteContent } from "@/data/site-content";

export const metadata: Metadata = {
  title: siteContent.about.seo.title,
  description: siteContent.about.seo.description,
  openGraph: {
    title: siteContent.about.seo.title,
    description: siteContent.about.seo.description,
    type: "website",
    images: [
      {
        url: siteContent.about.portraitImage.src,
        width: siteContent.about.portraitImage.width,
        height: siteContent.about.portraitImage.height,
        alt: siteContent.about.portraitImage.alt,
      },
    ],
  },
};

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <>
      <ScrollReveal />
      <Header solid />
      <main id="top">
        <div className="h-20 bg-ink lg:h-[5.5rem]" aria-hidden="true" />

        <section className="about-section">
          <div className="about-shell">
            <div className="about-media" data-reveal>
              <figure className="about-portrait">
                <Image
                  src={about.portraitImage.src}
                  alt={about.portraitImage.alt}
                  width={about.portraitImage.width}
                  height={about.portraitImage.height}
                  priority
                  sizes="(max-width: 768px) 45vw, 220px"
                  className="about-portrait-image"
                />
              </figure>
              <div className="about-landscapes">
                {about.landscapeImages.map((image) => (
                  <figure key={image.src} className="about-landscape">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      unoptimized
                      sizes="(max-width: 768px) 50vw, 260px"
                      className="about-landscape-image"
                    />
                  </figure>
                ))}
              </div>
            </div>

            <p
              data-reveal
              className="mt-14 text-[0.6rem] font-medium uppercase tracking-[0.34em] text-accent sm:mt-16"
            >
              {about.eyebrow}
            </p>
            <h1
              data-reveal
              data-reveal-delay="1"
              className="mt-7 max-w-[18ch] font-display text-[clamp(2.9rem,6vw,5.4rem)] leading-[0.95] tracking-[-0.03em] text-ivory"
            >
              {about.title}
            </h1>
            <p
              data-reveal
              data-reveal-delay="2"
              className="mt-10 max-w-[42rem] text-[0.97rem] leading-[1.8] tracking-[0.005em] text-mist sm:text-base"
            >
              {about.intro}
            </p>

            <div className="mt-16 space-y-14 border-t border-white/10 pt-16 sm:mt-20 sm:space-y-16 sm:pt-20">
              {about.sections.map((section, index) => (
                <article key={section.title} className="max-w-[42rem]">
                  <h2
                    data-reveal
                    data-reveal-delay={index % 3}
                    className="font-display text-[clamp(1.85rem,3.4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-ivory"
                  >
                    {section.title}
                  </h2>
                  <p
                    data-reveal
                    data-reveal-delay={(index % 3) + 1}
                    className="mt-6 text-[0.97rem] leading-[1.8] tracking-[0.005em] text-mist sm:text-base"
                  >
                    {section.body}
                  </p>
                </article>
              ))}
            </div>

            <p
              data-reveal
              className="mt-20 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.05] tracking-[-0.02em] text-ivory sm:mt-24"
            >
              {about.closing}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
