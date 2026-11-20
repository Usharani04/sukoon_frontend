import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Official Sukoon logo (wordmark + emblem + ®), same file as sukoon.sbprism.com.
 * No "Hospitals & Healthcare" tagline.
 *
 * Files: /public/brand/sukoon-logo.svg (green #18453f) and sukoon-logo-white.svg (for dark backgrounds).
 * Props are unchanged from the old component, so Header/Footer calls keep working.
 */
interface LogoProps {
  variant?: "light" | "dark" | "monochrome";
  size?: "sm" | "md" | "lg";
  /** Exact height in px. Overrides `size`. */
  height?: number;
  /** Kept for backwards compatibility. The logo file always includes the wordmark. */
  showText?: boolean;
  className?: string;
  /** Set true for the header logo (above the fold). */
  priority?: boolean;
}

const RATIO = 596.11 / 176.28; // viewBox width / height of the logo file
const HEIGHTS = { sm: 36, md: 48, lg: 60 } as const;

export const SukoonLogo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  height,
  className = "",
  priority = false,
}) => {
  const h = height ?? HEIGHTS[size];
  const w = Math.round(h * RATIO);
  const src = variant === "light" ? "/brand/sukoon-logo-white.svg" : "/brand/sukoon-logo.svg";

  return (
    <Link href="/" aria-label="Sukoon Health home" className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={src}
        alt="Sukoon Health"
        width={w}
        height={h}
        priority={priority}
        unoptimized
        style={{ width: w, height: "auto" }}
      />
    </Link>
  );
};
