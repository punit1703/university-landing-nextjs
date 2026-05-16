"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionTitleProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex"
        >
          <span
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase",
              light
                ? "bg-white/15 text-white border border-white/25"
                : "border border-[#6366F1]/25 text-[#6366F1]"
            )}
            style={light ? {} : { background: "rgba(99,102,241,0.08)" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: light ? "white" : "#6366F1" }}
            />
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight",
          light ? "text-white" : "text-[#0F172A]"
        )}
        style={{ fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}
      >
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            "max-w-2xl text-base sm:text-lg leading-relaxed",
            light ? "text-white/70" : "text-slate-500"
          )}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="h-1 w-16 rounded-full mt-1"
        style={{
          background: "linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)",
          alignSelf:
            align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
        }}
      />
    </div>
  );
}
