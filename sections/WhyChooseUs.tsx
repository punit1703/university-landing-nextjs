"use client";

import { motion } from "framer-motion";
import {
  Building2, Briefcase, Monitor,
  FlaskConical, Globe, GraduationCap,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { featuresData, staggerContainer, staggerItem } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Building2:    <Building2 className="w-6 h-6 text-white" />,
  Briefcase:    <Briefcase className="w-6 h-6 text-white" />,
  Monitor:      <Monitor className="w-6 h-6 text-white" />,
  FlaskConical: <FlaskConical className="w-6 h-6 text-white" />,
  Globe:        <Globe className="w-6 h-6 text-white" />,
  GraduationCap:<GraduationCap className="w-6 h-6 text-white" />,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding overflow-hidden relative" style={{ background: "#F8FAFC" }}>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "rgba(99,102,241,0.07)", filter: "blur(60px)" }} />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "rgba(139,92,246,0.07)", filter: "blur(60px)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Why NexaVarsity"
          title="Everything You Need to"
          highlight="Succeed"
          subtitle="We've built an ecosystem that gives you every advantage — from day one to your dream career."
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
          {featuresData.map((feature) => (
            <motion.div
              key={feature.id}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative rounded-3xl p-7 overflow-hidden cursor-default"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `linear-gradient(135deg, rgba(99,102,241,0.04), rgba(139,92,246,0.06))` }}
              />

              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #6366F1, #EC4899)" }}
              />

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md"
                style={{ background: `linear-gradient(135deg, ${getIconColors(feature.id)})` }}
              >
                {iconMap[feature.icon]}
              </div>

              <h3
                className="text-lg font-bold mb-2"
                style={{ color: "#0F172A", fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                {feature.description}
              </p>

              <div
                className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "rgba(99,102,241,0.12)", filter: "blur(20px)" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function getIconColors(id: number): string {
  const colors: Record<number, string> = {
    1: "#3B82F6, #6366F1",
    2: "#6366F1, #8B5CF6",
    3: "#8B5CF6, #EC4899",
    4: "#EC4899, #F43F5E",
    5: "#F43F5E, #F97316",
    6: "#F97316, #F59E0B",
  };
  return colors[id] ?? "#6366F1, #8B5CF6";
}
