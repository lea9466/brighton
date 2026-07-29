"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      easing: (value) => 1 - Math.pow(1 - value, 4),
      smoothWheel: true,
      syncTouch: false,
    });

    document.documentElement.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    const parallaxElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    let scrollFrame = 0;

    const updateParallax = () => {
      scrollFrame = 0;
      const viewportCenter = window.innerHeight / 2;

      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const distance = Number(element.dataset.parallax ?? 10);
        const progress =
          (rect.top + rect.height / 2 - viewportCenter) / window.innerHeight;
        const offset = Math.max(-distance, Math.min(distance, -progress * distance));
        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const requestParallaxUpdate = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    lenis.on("scroll", requestParallaxUpdate);
    window.addEventListener("resize", requestParallaxUpdate, { passive: true });

    const hero = document.querySelector<HTMLElement>("[data-hero-parallax]");
    const heroLayers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-hero-depth]"),
    );
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const moveHero = (event: PointerEvent) => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      heroLayers.forEach((layer) => {
        const depth = Number(layer.dataset.heroDepth ?? 1);
        layer.style.setProperty("--mouse-x", `${(x * depth * 2).toFixed(2)}px`);
        layer.style.setProperty("--mouse-y", `${(y * depth * 2).toFixed(2)}px`);
      });
    };

    const resetHero = () => {
      heroLayers.forEach((layer) => {
        layer.style.setProperty("--mouse-x", "0px");
        layer.style.setProperty("--mouse-y", "0px");
      });
    };

    if (hero && finePointer) {
      hero.addEventListener("pointermove", moveHero);
      hero.addEventListener("pointerleave", resetHero);
    }

    const magneticElements = finePointer
      ? Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"))
      : [];
    const magneticCleanups = magneticElements.map((element) => {
      const move = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - (rect.left + rect.width / 2)) * 0.12;
        const y = (event.clientY - (rect.top + rect.height / 2)) * 0.12;
        element.style.translate = `${x.toFixed(2)}px ${y.toFixed(2)}px`;
      };
      const reset = () => {
        element.style.translate = "0 0";
      };

      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", reset);
      return () => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", reset);
      };
    });

    return () => {
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      lenis.off("scroll", requestParallaxUpdate);
      lenis.destroy();
      observer.disconnect();
      window.removeEventListener("resize", requestParallaxUpdate);
      if (hero && finePointer) {
        hero.removeEventListener("pointermove", moveHero);
        hero.removeEventListener("pointerleave", resetHero);
      }
      magneticCleanups.forEach((cleanup) => cleanup());
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
