import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/images/brighton-logo-white-solid.png"
      alt="Brighton"
      width={616}
      height={335}
      priority
      className={`h-auto w-32 sm:w-36 ${className}`}
    />
  );
}
