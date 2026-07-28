"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type BackgroundVideoProps = {
  sources: readonly {
    src: string;
    type: string;
  }[];
  playbackRate?: number;
  poster: {
    src: string;
    alt: string;
  };
};

export function BackgroundVideo({
  sources,
  playbackRate = 1,
  poster,
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSource, setCurrentSource] = useState(0);
  const source = sources[currentSource];

  useEffect(() => {
    const video = videoRef.current;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updatePlayback = () => {
      if (!video) return;
      video.playbackRate = playbackRate;

      if (motionPreference.matches) {
        video.pause();
      } else {
        void video.play().catch(() => undefined);
      }
    };

    updatePlayback();
    motionPreference.addEventListener("change", updatePlayback);

    return () => {
      motionPreference.removeEventListener("change", updatePlayback);
    };
  }, [currentSource, playbackRate]);

  const playNext = () => {
    setCurrentSource((index) => (index + 1) % sources.length);
  };

  return (
    <div className="absolute inset-0">
      <Image
        src={poster.src}
        alt={poster.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] sm:object-center"
      />
      <video
        key={source.src}
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        muted
        playsInline
        preload="metadata"
        poster={poster.src}
        aria-hidden="true"
        onEnded={playNext}
      >
        <source src={source.src} type={source.type} />
      </video>
    </div>
  );
}
