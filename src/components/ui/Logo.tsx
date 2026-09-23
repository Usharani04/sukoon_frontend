"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark" | "monochrome";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const SukoonLogo: React.FC<LogoProps> = ({
  variant = "dark",
  size = "md",
  showText = true,
  className = "",
}) => {
  const isLight = variant === "light";
  const iconSize = size === "sm" ? 32 : size === "lg" ? 48 : 40;

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Sukoon Mnemonic: Olive branch + medical cross inside circle */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill={isLight ? "#ffffff" : "#3F7268"}
          className="transition-colors duration-300"
        />
        {/* Central Olive & Cross Emblem */}
        <g stroke={isLight ? "#3F7268" : "#ffffff"} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Medical Cross Stem */}
          <line x1="50" y1="24" x2="50" y2="76" />
          <line x1="24" y1="50" x2="76" y2="50" />
          
          {/* Olive Leaf Petals radiating at 45 degrees */}
          <path d="M50 50 C36 34, 30 38, 32 28 C42 30, 38 36, 50 50 Z" fill={isLight ? "#3F7268" : "#ffffff"} />
          <path d="M50 50 C64 34, 70 38, 68 28 C58 30, 62 36, 50 50 Z" fill={isLight ? "#3F7268" : "#ffffff"} />
          <path d="M50 50 C36 66, 30 62, 32 72 C42 70, 38 64, 50 50 Z" fill={isLight ? "#3F7268" : "#ffffff"} />
          <path d="M50 50 C64 66, 70 62, 68 72 C58 70, 62 64, 50 50 Z" fill={isLight ? "#3F7268" : "#ffffff"} />
        </g>
        {/* Central Core Bead */}
        <circle cx="50" cy="50" r="4.5" fill={isLight ? "#ffffff" : "#3F7268"} stroke={isLight ? "#3F7268" : "#ffffff"} strokeWidth="2" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-serif tracking-tight leading-none ${
              size === "sm" ? "text-xl" : size === "lg" ? "text-3xl" : "text-2xl"
            } ${isLight ? "text-white" : "text-[#212121]"} font-medium`}
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Sukoon<sup className="text-[10px] ml-0.5 font-sans font-normal opacity-80">®</sup>
          </span>
          <span
            className={`text-[9px] uppercase tracking-[0.2em] font-semibold mt-0.5 ${
              isLight ? "text-white/80" : "text-[#3F7268]"
            }`}
          >
            Hospitals & Healthcare
          </span>
        </div>
      )}
    </Link>
  );
};
