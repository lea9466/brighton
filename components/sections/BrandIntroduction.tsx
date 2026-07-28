import { SectionHeading } from "@/components/SectionHeading";
import { siteContent } from "@/data/site-content";

export function BrandIntroduction() {
  const { introduction } = siteContent;

  return (
    <section id="brand" className="section-space scroll-mt-20 lg:flex lg:min-h-[88vh] lg:items-center">
      <div className="site-shell">
        <SectionHeading
          eyebrow={introduction.eyebrow}
          title={introduction.title}
        />
        <div className="mt-16 grid gap-10 border-t border-white/10 pt-9 md:grid-cols-12 lg:mt-24">
          <span className="h-2 w-2 bg-accent md:col-span-2" aria-hidden="true" />
          <p className="max-w-[39rem] text-lg leading-8 text-mist md:col-span-7 md:col-start-6 md:text-xl md:leading-9 lg:text-2xl lg:leading-10">
            {introduction.body}
          </p>
        </div>
      </div>
    </section>
  );
}
