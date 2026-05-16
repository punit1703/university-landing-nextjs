"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { galleryImages } from "@/lib/utils";

export default function GallerySection() {
  return (
    <section id="gallery" className="section-padding overflow-hidden" style={{ background: "#0F172A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Campus Life"
          title="Experience Our"
          highlight="Campus"
          subtitle="State-of-the-art facilities designed to inspire creativity, collaboration, and innovation."
          align="center"
          light
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${img.span}`}
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                style={{ background: "linear-gradient(to top, rgba(99,102,241,0.8) 0%, transparent 60%)" }}
              >
                <span className="text-white font-semibold text-sm">{img.alt}</span>
              </div>

              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(15,23,42,0.4) 0%, transparent 50%)" }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
            }}
          >
            📸 Schedule a Campus Visit
          </a>
        </motion.div>
      </div>
    </section>
  );
}