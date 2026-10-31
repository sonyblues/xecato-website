import Image from "next/image";

/** The XECATO lockup: shield mark plus wordmark, light version for dark grounds. */
export default function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-light.png"
      alt="XECATO"
      width={1100}
      height={260}
      priority
      className={className}
    />
  );
}
