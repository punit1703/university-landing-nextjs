"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap } from "lucide-react";
import CustomButton from "@/components/CustomButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home",         href: "#home" },
  { label: "Programs",     href: "#programs" },
  { label: "About",        href: "#about" },
  { label: "Campus",       href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact",      href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]       = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            <motion.a
              href="#home"
              className="flex items-center gap-2.5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
                style={{ background: "linear-gradient(135deg, #6366F1, #8B5CF6)" }}
              >
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span
                className={cn(
                  "text-xl font-bold transition-colors duration-300",
                  scrolled ? "text-[#0F172A]" : "text-white"
                )}
                style={{ fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}
              >
                Nexa<span className="gradient-text-primary">Varsity</span>
              </span>
            </motion.a>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActive(link.label)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    scrolled
                      ? active === link.label
                        ? "text-[#6366F1]"
                        : "text-slate-600 hover:text-[#6366F1] hover:bg-[#6366F1]/5"
                      : active === link.label
                      ? "text-white"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                  {active === link.label && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full"
                      style={{ background: "linear-gradient(90deg, #6366F1, #8B5CF6)" }}
                    />
                  )}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <CustomButton variant="gradient" size="sm" href="#contact">
                Apply Now
              </CustomButton>
            </div>

            <motion.button
              className={cn(
                "md:hidden p-2 rounded-lg transition-colors",
                scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100">
                <span
                  className="text-lg font-bold gradient-text-primary"
                  style={{ fontFamily: "var(--font-poppins-var), Poppins, sans-serif" }}
                >
                  NexaVarsity
                </span>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <nav className="flex-1 py-6 px-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => { setActive(link.label); setMobileOpen(false); }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-xl font-medium text-base transition-all",
                      active === link.label
                        ? "text-[#6366F1]"
                        : "text-slate-600 hover:bg-slate-50 hover:text-[#6366F1]"
                    )}
                    style={active === link.label ? { background: "rgba(99,102,241,0.08)" } : {}}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="px-6 py-6 border-t border-slate-100">
                <CustomButton
                  variant="gradient"
                  size="lg"
                  href="#contact"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </CustomButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}