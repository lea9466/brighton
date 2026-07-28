"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/data/site-content";

export function BrandStory() {
  const { story } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="story-section scroll-mt-20"
    >
      <div className="story-shell grid items-center gap-16 lg:grid-cols-12 lg:gap-12 xl:gap-20">
        <div
          className={`story-media order-1 mx-auto w-full max-w-[35rem] lg:order-2 lg:col-span-6 lg:col-start-7 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-[0_24px_70px_rgba(44,39,31,0.12)]">
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              sizes="(max-width: 1024px) calc(100vw - 40px), 560px"
              className="object-cover object-[center_48%] transition-transform duration-1000 ease-out hover:scale-[1.02]"
            />
          </div>
        </div>

        <div
          className={`story-copy order-2 max-w-[32.5rem] lg:order-1 lg:col-span-5 ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.34em] text-[#817b72]">
            {story.eyebrow}
          </p>
          <h2 className="mt-7 font-display text-[clamp(3rem,5.5vw,5.25rem)] leading-[0.95] tracking-[-0.03em] text-[#1a1a1a]">
            {story.title}
          </h2>
          <div className="mt-10 space-y-6 text-[0.97rem] leading-[1.8] tracking-[0.005em] text-[#595650] sm:text-base">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a href={story.cta.href} className="story-cta mt-12">
            <span>{story.cta.label}</span>
            <span className="story-cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
