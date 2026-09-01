"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteContent } from "@/data/site-content";
import type { VideoSource } from "@/lib/campaign-video";

type EditorialFeatureProps = {
  video?: VideoSource;
};

export function EditorialFeature({ video }: EditorialFeatureProps) {
  const { editorialFeature, media } = siteContent;
  const videoSource = video ?? editorialFeature.video;
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="campaign-installation"
    >
      <div className="campaign-installation-shell grid items-center gap-0 lg:grid-cols-12 lg:gap-14">
        <div
          className={`campaign-installation-tablet order-1 flex justify-center lg:order-2 lg:col-span-7 lg:justify-end ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <div className="campaign-tablet-float">
            <div className="campaign-tablet">
              <div className="campaign-tablet-screen">
                {media.tabletVideo ? (
                  <>
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
                      onPlay={() => setIsPaused(false)}
                      onPause={() => setIsPaused(true)}
                    >
                      <source
                        src={editorialFeature.video.webmSrc}
                        type="video/webm"
                      />
                      <source
                        src={videoSource.src}
                        type={videoSource.type}
                      />
                    </video>
                    <button
                      type="button"
                      className="campaign-video-control"
                      onClick={togglePlayback}
                      aria-label={
                        isPaused
                          ? "Play campaign video"
                          : "Pause campaign video"
                      }
                      aria-pressed={isPaused}
                    >
                      <span
                        className={
                          isPaused
                            ? "campaign-video-play-icon"
                            : "campaign-video-stop-icon"
                        }
                        aria-hidden="true"
                      />
                    </button>
                  </>
                ) : (
                  <Image
                    src={editorialFeature.image.src}
                    alt=""
                    fill
                    sizes="(max-width: 720px) calc(100vw - 2.5rem), 42rem"
                    className="object-contain object-center"
                  />
                )}
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
              <span
                className="campaign-tablet-button campaign-tablet-button-power"
                aria-hidden="true"
              />
              <span
                className="campaign-tablet-button campaign-tablet-button-volume-up"
                aria-hidden="true"
              />
              <span
                className="campaign-tablet-button campaign-tablet-button-volume-down"
                aria-hidden="true"
              />
            </div>
            <span className="campaign-tablet-reflection" aria-hidden="true" />
          </div>
        </div>

        <div
          className={`campaign-installation-copy order-2 mt-8 text-center sm:mt-10 lg:order-1 lg:col-span-5 lg:mt-0 lg:text-left ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <h2
            data-reveal
            data-reveal-delay="1"
            className="max-w-[28rem] font-display text-[clamp(2.7rem,5vw,4.8rem)] leading-[0.96] tracking-[-0.025em] text-ivory"
          >
            {editorialFeature.heading}
          </h2>
        </div>
      </div>
    </section>
  );
}
