"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";

export default function CTASection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)" }}
    >
      <Image
        src="/images/9. CTA Section Background.png"
        alt="CTA background"
        fill
        className="object-cover -z-20 opacity-30"
      />
      <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,27,75,0.85) 50%, rgba(15,23,42,0.95) 100%)" }} />
      
      <motion.div
        className="blob absolute -top-32 -left-32 w-96 h-96 opacity-20"
        style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="blob absolute -bottom-32 -right-32 w-96 h-96 opacity-15"
        style={{ background: "linear-gradient(135deg, #EC4899, #8B5CF6)" }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: "rgba(99,102,241,0.2)", border: "1px solid rgba(99,102,241,0.4)", color: "#a5b4fc" }}
          >
            🚀 Admissions Open 2025–26
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          style={{ fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}
        >
          Ready to Build{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #818CF8, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your Future?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Join thousands of students who chose NexaVarsity to transform their ambitions into
          real-world achievements. Take the first step today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <CustomButton
            variant="gradient"
            size="xl"
            href="#contact"
            icon={<ArrowRight className="w-5 h-5" />}
            iconPosition="right"
          >
            Apply Now
          </CustomButton>

          <CustomButton
            variant="outline-light"
            size="xl"
            href="#gallery"
            icon={<Calendar className="w-5 h-5" />}
            iconPosition="left"
          >
            Schedule a Visit
          </CustomButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          {["No Application Fee", "Merit Scholarships Available", "Flexible Admission Process"].map((text) => (
            <div key={text} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#6366F1" }} />
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}