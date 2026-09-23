"use client";

import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white" | "emergency";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#3F7268] hover:bg-[#293F3B] text-white shadow-sm hover:shadow focus:ring-[#3F7268]",
    secondary: "bg-[#293F3B] hover:bg-[#1E3330] text-white shadow-sm focus:ring-[#293F3B]",
    outline: "border-2 border-[#3F7268] text-[#3F7268] hover:bg-[#3F7268] hover:text-white focus:ring-[#3F7268]",
    white: "bg-white text-[#293F3B] hover:bg-[#F2F7F6] shadow-sm hover:shadow-md focus:ring-white",
    emergency: "bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg animate-pulse focus:ring-red-500",
  };

  const combinedClasses = twMerge(clsx(baseStyles, sizeStyles[size], variantStyles[variant], className));

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};
