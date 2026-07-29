"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EditorialImage, siteContent } from "@/data/site-content";

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
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const landscapeItems = [collection.items[0], collection.items[2]];
  const portraitItem = collection.items[1];

  return (
    <section
      ref={sectionRef}
      id="collection"
      className="collection-section scroll-mt-20"
    >
      <div className="collection-shell">
        <div data-reveal className="mx-auto max-w-[48rem] text-center">
          <p className="text-[0.6rem] font-medium uppercase tracking-[0.34em] text-accent">
            {collection.eyebrow}
          </p>
          <h2 className="mt-6 font-display text-[clamp(2.9rem,6vw,5.6rem)] leading-[0.95] tracking-[-0.03em] text-[#1a1a1a]">
            {collection.title}
          </h2>
          <p className="mx-auto mt-7 max-w-md text-sm leading-7 text-[#68635c] sm:text-base sm:leading-8">
            {collection.intro}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-20 md:grid-cols-2 md:items-center md:gap-8 lg:mt-32 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-20 md:space-y-24 lg:col-span-7 lg:space-y-28">
            {landscapeItems.map((item, index) => (
              <CollectionItem
                key={item.src}
                item={item}
                visible={isVisible}
                delay={index === 0 ? 0 : 300}
                ratio="aspect-[3/2]"
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 58vw"
              />
            ))}
          </div>

          <div className="md:pl-2 lg:col-span-5 lg:pl-8">
            <CollectionItem
              item={portraitItem}
              visible={isVisible}
              delay={150}
              ratio="aspect-[3/4]"
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 36vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CollectionItem({
  item,
  visible,
  delay,
  ratio,
  sizes,
}: {
  item: EditorialImage;
  visible: boolean;
  delay: number;
  ratio: string;
  sizes: string;
}) {
  return (
    <figure
      className={`collection-item ${visible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`group relative overflow-hidden rounded-lg bg-[#eae6df] transition-shadow duration-700 ease-out hover:shadow-[0_24px_60px_rgba(43,37,29,0.14)] ${ratio}`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
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
  );
}
