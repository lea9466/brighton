import { BackgroundVideo } from "@/components/BackgroundVideo";
import { siteContent } from "@/data/site-content";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="top"
      data-hero-parallax
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink"
    >
      <BackgroundVideo
        sources={hero.videos}
        playbackRate={hero.videoPlaybackRate}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="site-shell relative z-10 pb-4 pt-32 sm:pb-5 lg:pb-6">
        <div data-hero-depth="-2" className="max-w-[46rem]">
          <h1 className="hero-reveal max-w-[44rem] font-display text-[clamp(2.8rem,6.9vw,6.3rem)] leading-[0.92] tracking-[-0.03em] text-ivory">
            {hero.tagline}
          </h1>
          <a
            href="#collection"
            data-magnetic
            className="hero-cta hero-reveal hero-delay-cta mt-7 sm:mt-8"
          >
            {hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
