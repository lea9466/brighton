import { siteContent } from "@/data/site-content";

export function BrandStatement() {
  const { statement } = siteContent;

  return (
    <section className="site-shell flex flex-col items-center justify-center py-36 text-center sm:py-44 lg:py-52">
      <span className="mb-12 h-1.5 w-1.5 bg-accent" aria-hidden="true" />
      <blockquote className="max-w-[64rem] font-display text-[clamp(3rem,7vw,6.2rem)] leading-[0.94] tracking-[-0.03em] text-ivory">
        “{statement.text}”
      </blockquote>
      <p className="mt-12 text-[0.56rem] uppercase tracking-[0.34em] text-stone sm:text-[0.62rem]">
        {statement.signature}
      </p>
    </section>
  );
}
