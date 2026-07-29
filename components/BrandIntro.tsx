"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const INTRO_SEEN_KEY = "brighton-intro-seen";

export function BrandIntro() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const alreadySeen = window.sessionStorage.getItem(INTRO_SEEN_KEY);

    if (reducedMotion || alreadySeen) {
      const removeTimer = window.setTimeout(() => setVisible(false), 0);
      return () => window.clearTimeout(removeTimer);
    }

    window.sessionStorage.setItem(INTRO_SEEN_KEY, "true");
    const exitTimer = window.setTimeout(() => setExiting(true), 850);
    const removeTimer = window.setTimeout(() => setVisible(false), 1450);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`brand-intro ${exiting ? "is-exiting" : ""}`}
      aria-hidden="true"
    >
      <Logo className="brand-intro-logo" />
    </div>
  );
}
