"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { testimonialsData } from "@/lib/utils";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonialsData.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section id="testimonials" className="section-padding overflow-hidden" style={{ background: "#F8FAFC" }}>
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(99,102,241,0.06)", filter: "blur(80px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Student Stories"
          title="Hear From Our"
          highlight="Alumni"
          subtitle="Real stories from students who turned their ambitions into achievements with NexaVarsity."
          align="center"
          className="mb-14"
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[360px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full rounded-3xl p-8 md:p-10 relative overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 20px 60px rgba(99,102,241,0.1)",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: "linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899)" }} />

                <div className="absolute top-8 right-8 opacity-10">
                  <Quote className="w-16 h-16" style={{ color: "#6366F1" }} />
                </div>

                <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:w-40">
                    <div
                      className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden shrink-0"
                      style={{ border: "3px solid rgba(99,102,241,0.2)", boxShadow: "0 8px 24px rgba(99,102,241,0.15)" }}
                    >
                      <Image
                        src={testimonialsData[current].image}
                        alt={testimonialsData[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-base" style={{ color: "#0F172A", fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}>
                        {testimonialsData[current].name}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>
                        {testimonialsData[current].role}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "#64748b" }}>
                        {testimonialsData[current].batch}
                      </p>
                      <div
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mt-2"
                        style={{ background: "rgba(99,102,241,0.1)", color: "#6366F1" }}
                      >
                        📍 {testimonialsData[current].company}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonialsData[current].rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <blockquote
                      className="text-base md:text-lg leading-relaxed"
                      style={{ color: "#374151", fontStyle: "italic" }}
                    >
                      &ldquo;{testimonialsData[current].review}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{ background: "white", border: "1px solid rgba(0,0,0,0.1)", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" style={{ color: "#6366F1" }} />
            </motion.button>

            <div className="flex gap-2">
              {testimonialsData.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrent(i)}
                  animate={{
                    width: i === current ? 24 : 8,
                    opacity: i === current ? 1 : 0.35,
                  }}
                  className="h-2 rounded-full transition-all"
                  style={{ background: "#6366F1" }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{ background: "#6366F1", boxShadow: "0 4px 12px rgba(99,102,241,0.35)" }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          {testimonialsData.map((t, i) => (
            <motion.button
              key={t.id}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-12 h-12 rounded-xl overflow-hidden transition-all"
              style={{
                border: i === current ? "2px solid #6366F1" : "2px solid transparent",
                opacity: i === current ? 1 : 0.5,
                boxShadow: i === current ? "0 0 0 3px rgba(99,102,241,0.2)" : "none",
              }}
              aria-label={`Select ${t.name}`}
            >
              <Image src={t.image} alt={t.name} fill className="object-cover" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}