"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import React from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gradient" | "dark" | "outline-light";
type Size = "sm" | "md" | "lg" | "xl";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  href?: string;
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-[#6366F1] text-white hover:bg-[#4F46E5] shadow-md",
  secondary:
    "bg-[#8B5CF6] text-white hover:bg-[#7C3AED] shadow-md",
  gradient:
    "text-white shadow-md",
  outline:
    "border-2 border-[#6366F1] text-[#6366F1] bg-transparent hover:bg-[#6366F1] hover:text-white",
  "outline-light":
    "border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#0F172A]",
  ghost:
    "text-[#6366F1] bg-transparent hover:bg-[#6366F1]/10",
  dark:
    "bg-[#0F172A] text-white hover:bg-slate-800 shadow-md",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-xl gap-1.5",
  md: "px-6 py-3 text-sm rounded-xl gap-2",
  lg: "px-8 py-4 text-base rounded-2xl gap-2",
  xl: "px-10 py-5 text-lg rounded-2xl gap-2.5",
};

export default function CustomButton({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  loading = false,
  href,
  external,
  className,
  children,
  disabled,
  onClick,
  ...props
}: Props) {
  const gradientStyle =
    variant === "gradient"
      ? { background: "linear-gradient(135deg, #6366F1, #8B5CF6, #EC4899)" }
      : {};

  const base = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!loading && icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {!loading && icon && iconPosition === "right" && icon}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={base}
        style={gradientStyle}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={base}
      style={gradientStyle}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      disabled={disabled || loading}
      onClick={onClick}
      {...(props as any)}
    >
      {content}
    </motion.button>
  );
}
