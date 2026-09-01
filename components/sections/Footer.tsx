import { Logo } from "@/components/Logo";
import { siteContent } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="site-shell py-9 sm:py-11">
        <p
          data-reveal
          className="max-w-2xl text-[0.72rem] leading-6 text-stone"
        >
          {siteContent.footer.description}
        </p>
        <div className="mt-9 flex flex-col gap-7 sm:mt-11 sm:flex-row sm:items-center sm:justify-between">
          <a data-reveal="right" href="/" aria-label="Brighton home">
            <Logo className="text-lg" />
          </a>
          <p
            data-reveal
            data-reveal-delay="1"
            className="text-[0.56rem] uppercase tracking-[0.18em] text-stone"
          >
            © {new Date().getFullYear()} {siteContent.footer.copyright}
          </p>
          <a
            data-reveal="left"
            data-reveal-delay="2"
            data-magnetic
            href="#top"
            className="text-[0.56rem] uppercase tracking-[0.18em] text-stone transition-colors hover:text-ivory"
          >
            {siteContent.footer.backToTop} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
