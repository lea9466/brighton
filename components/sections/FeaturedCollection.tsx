"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/data/site-content";

const placements = [
  "md:col-span-1 lg:col-span-7",
  "md:col-span-1 md:mt-24 lg:col-span-4 lg:col-start-9 lg:mt-40",
  "md:col-span-2 md:mx-auto md:w-[72%] lg:col-span-8 lg:col-start-3 lg:mx-0 lg:w-auto",
];

const imageRatios = ["aspect-[16/9]", "aspect-[3/4]", "aspect-[3/2]"];

export function FeaturedCollection() {
  const { collection } = siteContent;
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
      { threshold: 0.12 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="collection"
      className="collection-section scroll-mt-20"
    >
      <div className="collection-shell">
        <div className="mx-auto max-w-[48rem] text-center">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.34em] text-[#817b72]">
            {collection.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-[clamp(3.2rem,6vw,5.8rem)] leading-[0.94] tracking-[-0.03em] text-[#1a1a1a]">
            {collection.title}
          </h2>
          <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[#68635c] sm:text-base sm:leading-8">
            {collection.intro}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-8 md:gap-y-28 lg:mt-32 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-36">
          {collection.items.map((item, index) => (
              <figure
                key={item.src}
                className={`collection-item ${placements[index]} ${
                  isVisible ? "is-visible" : ""
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`group relative overflow-hidden rounded-lg bg-[#eae6df] transition-shadow duration-500 ease-out hover:shadow-[0_24px_60px_rgba(43,37,29,0.14)] ${imageRatios[index]}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 58vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-6">
                  {item.category && (
                    <p className="text-[0.55rem] uppercase tracking-[0.25em] text-[#918b82]">
                      {item.category}
                    </p>
                  )}
                  <h3 className="mt-2 font-display text-2xl tracking-[-0.015em] text-[#1a1a1a] sm:text-[1.7rem]">
                    {item.label}
                  </h3>
                </figcaption>
              </figure>
            ))}
        </div>
      </div>
    </section>
  );
}
