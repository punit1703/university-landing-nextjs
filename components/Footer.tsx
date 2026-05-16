"use client";

import { motion } from "framer-motion";
import {
  GraduationCap, Mail, Phone, MapPin,
  MessageCircle, Briefcase, Camera, PlayCircle,
  ArrowRight, Send,
} from "lucide-react";

const quickLinks = [
  { label: "Home",         href: "#home" },
  { label: "Programs",     href: "#programs" },
  { label: "About Us",     href: "#about" },
  { label: "Campus",       href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
];

const programs = [
  { label: "Engineering",      href: "#programs" },
  { label: "AI & Data Science",href: "#programs" },
  { label: "Management",       href: "#programs" },
  { label: "Design",           href: "#programs" },
  { label: "Commerce",         href: "#programs" },
  { label: "Law",              href: "#programs" },
];

const socials = [
  { Icon: MessageCircle, href: "#", label: "Twitter" },
  { Icon: Briefcase,     href: "#", label: "LinkedIn" },
  { Icon: Camera,        href: "#", label: "Instagram" },
  { Icon: PlayCircle,    href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden" style={{ background: "#0F172A", color: "white" }}>
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #6366F1, transparent)" }} />

      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(99,102,241,0.05)", filter: "blur(80px)" }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "rgba(139,92,246,0.05)", filter: "blur(80px)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}>
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}>
                Nexa<span style={{ color: "#6366F1" }}>Varsity</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
              Shaping the next generation of innovators, leaders, and thinkers with world-class education and industry-aligned programs.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(99,102,241,0.3)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(99,102,241,0.5)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                  }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4" style={{ color: "white", fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm flex items-center gap-1.5 group transition-colors duration-200" style={{ color: "#94a3b8" }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#6366F1"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#94a3b8"}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4" style={{ color: "white", fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}>
              Programs
            </h4>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p.label}>
                  <a href={p.href} className="text-sm flex items-center gap-1.5 group transition-colors duration-200" style={{ color: "#94a3b8" }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#6366F1"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#94a3b8"}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider uppercase mb-4" style={{ color: "white", fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm" style={{ color: "#94a3b8" }}>
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#6366F1" }} />
                <span>NexaVarsity Campus, Innovation Drive, Tech City — 382428</span>
              </li>
              <li>
                <a href="tel:+911234567890" className="flex items-center gap-3 text-sm transition-colors" style={{ color: "#94a3b8" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#6366F1"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#94a3b8"}
                >
                  <Phone className="w-4 h-4 shrink-0" style={{ color: "#6366F1" }} />
                  +91 12345 67890
                </a>
              </li>
              <li>
                <a href="mailto:info@nexavarsity.edu" className="flex items-center gap-3 text-sm transition-colors" style={{ color: "#94a3b8" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#6366F1"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#94a3b8"}
                >
                  <Mail className="w-4 h-4 shrink-0" style={{ color: "#6366F1" }} />
                  info@nexavarsity.edu
                </a>
              </li>
            </ul>

            <p className="text-white text-sm font-medium mb-2">Stay Updated</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 rounded-xl px-3 py-2 text-sm text-white placeholder-slate-500 outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(99,102,241,0.6)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-xl transition-colors"
                style={{ background: "#6366F1" }}
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="h-px w-full mb-6" style={{ background: "rgba(255,255,255,0.08)" }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: "#64748b" }}>
          <p>© {new Date().getFullYear()} NexaVarsity. All rights reserved.</p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((text) => (
              <a key={text} href="#" className="transition-colors"
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#6366F1"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#64748b"}
              >{text}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}