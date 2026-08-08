"use client";

import Image from "next/image";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { EditorialImage, siteContent } from "@/data/site-content";

function GalleryCard({
  image,
  index,
  isVisible,
  onOpen,
}: {
  image: EditorialImage;
  index: number;
  isVisible: boolean;
  onOpen: () => void;
}) {
  return (
    <figure
      className={`gallery-item ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View ${image.alt}`}
        className="editorial-reveal group block w-full cursor-zoom-in overflow-hidden rounded-lg bg-[#181818] text-left transition-shadow duration-700 hover:shadow-[0_28px_70px_rgba(0,0,0,0.38)]"
        data-parallax="8"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 50vw, 33vw"
          className="h-auto w-full object-cover transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.035] group-hover:brightness-105"
        />
      </button>
    </figure>
  );
}

function GalleryLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: EditorialImage[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  const image = images[index];
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const onKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape") onClose();
    if (event.key === "ArrowRight") onNavigate((index + 1) % images.length);
    if (event.key === "ArrowLeft") {
      onNavigate((index - 1 + images.length) % images.length);
    }
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  if (!image) return null;

  return createPortal(
    <div
      className="gallery-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className="gallery-lightbox-close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            className="gallery-lightbox-nav gallery-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}

      <div
        className="gallery-lightbox-stage"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Native img keeps the original file quality */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="gallery-lightbox-image"
        />
      </div>
    </div>,
    document.body,
  );
}

function imageAspect(image: EditorialImage) {
  return image.height / image.width;
}

/** Pack into the shortest column so bottoms end as evenly as possible. */
function buildColumns(images: EditorialImage[], count: number) {
  const columns = Array.from({ length: count }, () => [] as EditorialImage[]);
  const heights = Array.from({ length: count }, () => 0);
  const gap = 0.08;

  const ordered = [...images].sort(
    (a, b) => imageAspect(b) - imageAspect(a),
  );

  for (const image of ordered) {
    let target = 0;
    for (let i = 1; i < count; i += 1) {
      if (heights[i] < heights[target]) target = i;
    }

    if (columns[target].length > 0) {
      heights[target] += gap;
    }

    columns[target].push(image);
    heights[target] += imageAspect(image);
  }

  return columns;
}

export function EditorialGallery() {
  const { gallery } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [columnCount, setColumnCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width >= 1024) setColumnCount(3);
      else if (width >= 640) setColumnCount(2);
      else setColumnCount(1);
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

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
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const columns = buildColumns(gallery.images, columnCount);

  return (
    <section ref={sectionRef} id="campaign" className="gallery-section scroll-mt-20">
      <div className="site-shell">
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          align="center"
        />
        <div
          className="gallery-masonry mt-20 lg:mt-28"
          style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
        >
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="gallery-masonry-column">
              {column.map((image, rowIndex) => {
                const flatIndex = gallery.images.findIndex(
                  (item) => item.src === image.src,
                );

                return (
                  <GalleryCard
                    key={image.src}
                    image={image}
                    index={columnIndex + rowIndex * columnCount}
                    isVisible={isVisible}
                    onOpen={() => {
                      if (flatIndex >= 0) setActiveIndex(flatIndex);
                    }}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {mounted && activeIndex !== null && (
        <GalleryLightbox
          images={gallery.images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}
