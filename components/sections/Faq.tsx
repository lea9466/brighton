import { siteContent } from "@/data/site-content";

/**
 * Brand FAQ block for the About page. The visible copy is the ranking signal;
 * the matching `FAQPage` JSON-LD is emitted from the page itself.
 */
export function Faq() {
  const { about } = siteContent;

  return (
    <section
      aria-labelledby="faq-heading"
      className="mt-20 border-t border-white/10 pt-16 sm:mt-24 sm:pt-20"
    >
      <p
        data-reveal
        className="text-[0.6rem] font-medium uppercase tracking-[0.34em] text-accent"
      >
        {about.faqEyebrow}
      </p>
      <h2
        id="faq-heading"
        data-reveal
        data-reveal-delay="1"
        className="mt-7 font-display text-[clamp(1.85rem,3.4vw,2.75rem)] leading-[1.05] tracking-[-0.02em] text-ivory"
      >
        {about.faqTitle}
      </h2>

      <div className="mt-12 space-y-10 sm:mt-14 sm:space-y-12">
        {about.faq.map((item, index) => (
          <article key={item.question} className="max-w-[42rem]">
            <h3
              data-reveal
              data-reveal-delay={index % 3}
              className="font-display text-[clamp(1.3rem,2.2vw,1.7rem)] leading-[1.25] tracking-[-0.01em] text-ivory"
            >
              {item.question}
            </h3>
            <p
              data-reveal
              data-reveal-delay={(index % 3) + 1}
              className="mt-4 text-[0.97rem] leading-[1.8] tracking-[0.005em] text-mist sm:text-base"
            >
              {item.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
