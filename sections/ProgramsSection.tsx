"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { programsData, staggerContainer, staggerItem } from "@/lib/utils";

export default function ProgramsSection() {
  return (
    <section id="programs" className="section-padding overflow-hidden" style={{ background: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Our Programs"
          title="Find Your"
          highlight="Perfect Program"
          subtitle="Explore our diverse range of industry-aligned programs designed to launch your career with confidence."
          align="center"
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programsData.map((program) => (
            <motion.div
              key={program.id}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-75"
                  style={{ background: `linear-gradient(135deg, var(--from), var(--to))` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%)` }}
                  />
                </div>

                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                    style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.3)" }}
                  >
                    {program.badge}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#0F172A", fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}
                  >
                    {program.title}
                  </h3>
                  <motion.div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(99,102,241,0.1)" }}
                    whileHover={{ scale: 1.1, rotate: -45 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <ArrowRight className="w-4 h-4" style={{ color: "#6366F1" }} />
                  </motion.div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                  {program.description}
                </p>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-3xl"
                  style={{ background: `linear-gradient(90deg, #6366F1, #EC4899)`, scaleX: 0, transformOrigin: "left" }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200"
            style={{ color: "#6366F1" }}
          >
            View all programs
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}