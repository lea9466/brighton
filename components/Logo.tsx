import { siteContent } from "@/data/site-content";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <span
      className={`font-display text-xl tracking-[0.34em] text-ivory ${className}`}
    >
      {siteContent.brand.name}
    </span>
  );
}
