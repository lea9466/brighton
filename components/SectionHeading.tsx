type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div data-reveal className={`max-w-[52rem] ${alignment}`}>
      <p className="mb-6 text-[0.58rem] font-medium uppercase tracking-[0.34em] text-accent sm:text-[0.62rem]">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2.9rem,6vw,5.6rem)] leading-[0.94] tracking-[-0.025em] text-ivory">
        {title}
      </h2>
    </div>
  );
}
