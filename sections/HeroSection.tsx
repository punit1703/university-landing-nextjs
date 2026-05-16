"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles, Play } from "lucide-react";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%)" }}
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="blob absolute -top-40 -left-40 w-[600px] h-[600px] opacity-20"
          style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="blob absolute -bottom-40 -right-40 w-[500px] h-[500px] opacity-15"
          style={{ background: "linear-gradient(135deg, #EC4899, #8B5CF6)" }}
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-10"
          style={{ background: "linear-gradient(135deg, #6366F1, #EC4899)" }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>


      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: "rgba(99,102,241,0.2)",
                  border: "1px solid rgba(99,102,241,0.4)",
                  color: "#a5b4fc",
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                Welcome to NexaVarsity
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-white"
              style={{ fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}
            >
              Shaping Future{" "}
              <span
                className="relative"
                style={{
                  background: "linear-gradient(135deg, #818CF8, #EC4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Innovators
              </span>
              {" "}& Leaders
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg sm:text-xl leading-relaxed max-w-xl"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Experience a transformative education that bridges industry and academia.
              Practical learning, world-class mentorship, and global opportunities — all in one campus.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <CustomButton variant="gradient" size="lg" href="#programs" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                Explore Programs
              </CustomButton>
              <CustomButton variant="outline-light" size="lg" href="#contact">
                Apply Now
              </CustomButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-6 pt-2"
            >
              {[
                { value: "10K+", label: "Students" },
                { value: "50+",  label: "Programs" },
                { value: "90%",  label: "Placement" },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span
                    className="text-2xl font-bold"
                    style={{
                      background: "linear-gradient(135deg, #818CF8, #EC4899)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontFamily: "var(--font-poppins-var), Poppins, sans-serif",
                    }}
                  >
                    {value}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute inset-0 rounded-3xl blur-3xl"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))" }}
            />

            <div
              className="relative rounded-3xl overflow-hidden w-full aspect-[4/3] lg:aspect-[3/4] max-w-lg mx-auto"
              style={{ border: "1px solid rgba(99,102,241,0.3)", boxShadow: "0 40px 100px rgba(99,102,241,0.25)" }}
            >
              <Image
                src="/images/1. Hero Section Image.png"
                alt="NexaVarsity campus students"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 60%)" }}
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
                  >
                    <Play className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Campus Life Tour</p>
                    <p className="text-white/60 text-xs">Watch the 2-min overview</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl text-sm font-semibold text-white shadow-xl"
              style={{ background: "linear-gradient(135deg, #6366F1, #EC4899)" }}
            >
              🏆 Top Ranked 2024
            </motion.div>
          </motion.div>
        </div>
      </div>


      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.4)" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" style={{ color: "rgba(255,255,255,0.4)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}