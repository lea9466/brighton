"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/data/site-content";

export function EditorialGallery() {
  const { gallery } = siteContent;
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
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="campaign" className="gallery-section scroll-mt-20">
      <div className="site-shell">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          align="center"
        />
        <div className="mt-20 columns-1 gap-6 md:columns-2 md:gap-8 lg:mt-28 lg:columns-3 lg:gap-10">
          {gallery.images.map((image, index) => (
            <figure
              key={image.src}
              className={`gallery-item mb-6 break-inside-avoid md:mb-8 lg:mb-10 ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                data-parallax="8"
                className="editorial-reveal group overflow-hidden rounded-lg bg-[#181818] transition-shadow duration-700 hover:shadow-[0_28px_70px_rgba(0,0,0,0.38)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 33vw"
                  className="h-auto w-full object-cover saturate-[0.92] transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.035] group-hover:brightness-105 group-hover:saturate-105"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
