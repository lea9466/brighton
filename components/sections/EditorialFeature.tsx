"use client";

import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/data/site-content";

export function EditorialFeature() {
  const { editorialFeature } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updatePlayback = () => {
      if (!video) return;

      if (motionPreference.matches) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    };

    updatePlayback();
    motionPreference.addEventListener("change", updatePlayback);
    return () => motionPreference.removeEventListener("change", updatePlayback);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="campaign-installation"
    >
      <div className="campaign-installation-shell grid items-center gap-20 lg:grid-cols-12 lg:gap-14">
        <div
          className={`campaign-installation-tablet order-1 flex justify-center lg:order-2 lg:col-span-7 lg:justify-end ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="campaign-tablet-float">
            <div className="campaign-tablet">
              <div className="campaign-tablet-screen">
                <video
                  ref={videoRef}
                  className={`h-full w-full object-contain object-center transition-opacity duration-1000 ease-out ${
                    videoReady ? "opacity-100" : "opacity-0"
                  }`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={editorialFeature.image.src}
                  aria-hidden="true"
                  onCanPlay={() => setVideoReady(true)}
                >
                  <source
                    src={editorialFeature.video.src}
                    type={editorialFeature.video.type}
                  />
                </video>
              </div>
              <span className="campaign-tablet-camera" aria-hidden="true" />
              <span
                className="campaign-tablet-speaker campaign-tablet-speaker-left"
                aria-hidden="true"
              />
              <span
                className="campaign-tablet-speaker campaign-tablet-speaker-right"
                aria-hidden="true"
              />
            </div>
            <span className="campaign-tablet-reflection" aria-hidden="true" />
          </div>
        </div>

        <div
          className={`campaign-installation-copy order-2 mt-14 text-center sm:mt-16 lg:order-1 lg:col-span-5 lg:mt-0 lg:text-left ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <h2 className="max-w-[28rem] font-display text-[clamp(2.7rem,5vw,4.8rem)] leading-[0.96] tracking-[-0.025em] text-ivory">
            {editorialFeature.heading}
          </h2>
        </div>
      </div>
    </section>
  );
}
