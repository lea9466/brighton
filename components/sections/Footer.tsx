import { Logo } from "@/components/Logo";
import { siteContent } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="site-shell py-10 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <a href="#top" aria-label="Brighton home">
            <Logo />
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">
            {siteContent.navigation.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-[0.6rem] uppercase tracking-[0.2em] text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteContent.footer.copyright}
          </p>
          <a href="#top" className="transition-colors hover:text-ivory">
            {siteContent.footer.backToTop} ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
