import Image from "next/image";
import { siteContent } from "@/data/site-content";

export function EditorialFeature() {
  const { editorialFeature } = siteContent;

  return (
    <section className="relative min-h-[76svh] overflow-hidden sm:min-h-[90svh]">
      <Image
        src={editorialFeature.image.src}
        alt={editorialFeature.image.alt}
        fill
        sizes="100vw"
        className="editorial-zoom object-cover object-[62%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-black/15" />
    </section>
  );
}
