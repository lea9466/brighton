"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { siteContent } from "@/data/site-content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || menuOpen
          ? "border-white/8 bg-ink/82 backdrop-blur-lg"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="site-shell flex h-20 items-center justify-between lg:h-[5.5rem]">
        <a href="#top" aria-label="Brighton home" onClick={() => setMenuOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {siteContent.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="group relative z-10 grid h-11 w-11 place-items-center md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-1 h-px w-6 bg-ivory transition-transform ${
                menuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute bottom-1 left-0 h-px w-6 bg-ivory transition-transform ${
                menuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`absolute inset-x-0 top-full h-[calc(100dvh-5rem)] border-t border-white/10 bg-ink/98 transition-[opacity,visibility] duration-300 md:hidden ${
          menuOpen ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="site-shell flex h-full flex-col justify-center gap-7 pb-16"
          aria-label="Mobile navigation"
        >
          {siteContent.navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-baseline gap-5 border-b border-white/10 pb-5 font-display text-[2.6rem] leading-none text-ivory"
            >
              <span className="font-sans text-[0.6rem] tracking-[0.2em] text-stone">
                0{index + 1}
              </span>
              <span className="transition-colors group-hover:text-accent">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
