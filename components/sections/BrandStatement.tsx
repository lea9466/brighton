import { siteContent } from "@/data/site-content";

export function BrandStatement() {
  const { statement } = siteContent;

  return (
    <section className="site-shell flex min-h-[92svh] flex-col items-center justify-center py-32 text-center">
      <span className="mb-12 h-1.5 w-1.5 bg-accent" aria-hidden="true" />
      <blockquote className="max-w-[72rem] font-display text-[clamp(3.2rem,7.8vw,7.2rem)] leading-[0.92] tracking-[-0.035em] text-ivory">
        “{statement.text}”
      </blockquote>
      <p className="mt-12 text-[0.56rem] uppercase tracking-[0.34em] text-stone sm:text-[0.62rem]">
        {statement.signature}
      </p>
    </section>
  );
}
