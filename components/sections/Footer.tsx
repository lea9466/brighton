import { Logo } from "@/components/Logo";
import { siteContent } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="site-shell py-9 sm:py-11">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" aria-label="Brighton home">
            <Logo className="text-lg" />
          </a>
          <p className="text-[0.56rem] uppercase tracking-[0.18em] text-stone">
            © {new Date().getFullYear()} {siteContent.footer.copyright}
          </p>
          <a
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
