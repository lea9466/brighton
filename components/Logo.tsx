import { siteContent } from "@/data/site-content";

type LogoProps = {
  className?: string;
  /** Show the crown mark before the wordmark. */
  mark?: boolean;
};

export function Logo({ className = "", mark = true }: LogoProps) {
  return (
    <span
      className={[
        "font-display text-xl tracking-[0.34em] text-ivory",
        mark ? "inline-flex items-center gap-[0.45em]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {mark && (
        <svg
          viewBox="0 0 24 24"
          className="h-[0.8em] w-[0.8em] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
          strokeLinejoin="round"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M3.4 8.4 7 12.1l5-7.4 5 7.4 3.6-3.7-1.7 9.3a1 1 0 0 1-1 .82H6.1a1 1 0 0 1-1-.82L3.4 8.4Z" />
          <circle cx="3.4" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
          <circle cx="12" cy="3.7" r="1.05" fill="currentColor" stroke="none" />
          <circle cx="20.6" cy="6.9" r="1.05" fill="currentColor" stroke="none" />
          <path d="M6.5 17.6h11" />
        </svg>
      )}
      {siteContent.brand.name}
    </span>
  );
}
