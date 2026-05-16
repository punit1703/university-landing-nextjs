"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import CustomButton from "@/components/CustomButton";

const highlights = [
  "Industry-oriented curriculum aligned with real-world needs",
  "Experienced faculty with deep research & industry backgrounds",
  "Innovation-driven learning through live projects & labs",
  "Global opportunities via exchange programs & partnerships",
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding overflow-hidden" style={{ background: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">


          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">

              <div
                className="col-span-1 row-span-2 rounded-3xl overflow-hidden relative"
                style={{ height: "340px", border: "3px solid white", boxShadow: "0 20px 60px rgba(99,102,241,0.15)" }}
              >
                <Image src="/images/2. About Section Image.png" alt="Campus life" fill className="object-cover" />
              </div>

              <div
                className="rounded-2xl overflow-hidden relative"
                style={{ height: "160px", border: "3px solid white", boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
              >
                <Image src="/images/Innovation Lab.png" alt="Students in lab" fill className="object-cover" />
              </div>

              <div
                className="rounded-2xl overflow-hidden relative"
                style={{ height: "160px", border: "3px solid white", boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
              >
                <Image src="/images/Smart Classroom.png" alt="Library" fill className="object-cover" />
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 md:right-8 px-5 py-4 rounded-2xl shadow-2xl"
              style={{ background: "white", border: "1px solid rgba(99,102,241,0.15)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
                >
                  🏆
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#0F172A" }}>NAAC A+ Accredited</p>
                  <p className="text-xs" style={{ color: "#64748b" }}>Highest academic grade</p>
                </div>
              </div>
            </motion.div>

            <div
              className="absolute -top-8 -left-8 w-40 h-40 rounded-full -z-10"
              style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))", filter: "blur(20px)" }}
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-6"
          >
            <SectionTitle
              badge="About NexaVarsity"
              title="Where Excellence Meets"
              highlight="Innovation"
              align="left"
            />

            <p className="text-base md:text-lg leading-relaxed" style={{ color: "#64748b" }}>
              Founded on the belief that education should be transformative, NexaVarsity brings together
              world-class faculty, cutting-edge infrastructure, and a relentless focus on student outcomes.
              We don&apos;t just teach — we prepare you for the future.
            </p>

            <p className="text-base leading-relaxed" style={{ color: "#64748b" }}>
              Our industry-integrated approach ensures that every program is aligned with what employers
              actually need — giving our graduates a decisive edge in a competitive world.
            </p>

            <ul className="flex flex-col gap-3">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 + 0.3 }}
                  className="flex items-start gap-3"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "rgba(99,102,241,0.12)" }}
                  >
                    <CheckCircle2 className="w-4 h-4" style={{ color: "#6366F1" }} />
                  </div>
                  <span className="text-sm md:text-base" style={{ color: "#374151" }}>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-2">
              <CustomButton variant="gradient" size="lg" href="#programs">
                Explore Programs
              </CustomButton>
              <CustomButton variant="outline" size="lg" href="#contact">
                Get In Touch
              </CustomButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}