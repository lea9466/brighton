"use client";

import { useEffect, useRef, useState } from "react";

type BackgroundVideoProps = {
  sources: readonly {
    src: string;
    type: string;
  }[];
  playbackRate?: number;
};

export function BackgroundVideo({
  sources,
  playbackRate = 1,
}: BackgroundVideoProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const switchingRef = useRef(false);
  const [activeSource, setActiveSource] = useState(0);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updatePlayback = () => {
      videoRefs.current.forEach((video, index) => {
        if (!video) return;
        video.playbackRate = playbackRate;

        if (index !== activeSource || motionPreference.matches) {
          video.pause();
        }
      });

      if (!motionPreference.matches) {
        void videoRefs.current[activeSource]?.play().catch(() => undefined);
      }
    };

    updatePlayback();
    motionPreference.addEventListener("change", updatePlayback);

    return () => {
      motionPreference.removeEventListener("change", updatePlayback);
    };
  }, [activeSource, playbackRate]);

  const playNext = async () => {
    if (switchingRef.current) return;
    switchingRef.current = true;

    const nextSource = (activeSource + 1) % sources.length;
    const nextVideo = videoRefs.current[nextSource];

    if (!nextVideo) {
      switchingRef.current = false;
      return;
    }

    nextVideo.currentTime = 0;
    nextVideo.playbackRate = playbackRate;

    try {
      await nextVideo.play();
      setActiveSource(nextSource);
    } catch {
      videoRefs.current[activeSource]?.play().catch(() => undefined);
    } finally {
      switchingRef.current = false;
    }
  };

  return (
    <div
      data-hero-depth="5"
      className="hero-parallax-media absolute -inset-2 bg-ink"
    >
      {sources.map((source, index) => (
        <video
          key={source.src}
          ref={(video) => {
            videoRefs.current[index] = video;
          }}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out ${
            index === activeSource ? "opacity-100" : "opacity-0"
          }`}
          autoPlay={index === 0}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onEnded={() => {
            if (index === activeSource) void playNext();
          }}
        >
          <source src={source.src} type={source.type} />
        </video>
      ))}
    </div>
  );
}
