"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { useLang } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAr, toggleLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0A] shadow-2xl shadow-black/30"
          : "bg-[#0A0A0A] lg:bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo-light.png" alt="Car In كارإن" width={120} height={67} className="h-11 sm:h-12 w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}
                className="text-white/80 hover:text-amber text-sm font-medium transition-colors duration-300 relative group">
                <span>{isAr ? link.labelAr : link.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber to-amber-dark transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-white/60 hover:text-amber font-medium text-sm transition-colors cursor-pointer border border-white/10 rounded-full px-3 py-1.5 hover:border-amber/30"
              aria-label="Toggle language"
            >
              <span className="text-xl leading-none">{isAr ? "🇬🇧" : "🇸🇦"}</span>
              <span style={{ fontFamily: "var(--font-outfit)" }}>{isAr ? "EN" : "AR"}</span>
            </button>

            <a href={`tel:${SITE.phone}`}
              className="flex items-center gap-1.5 text-amber font-semibold text-sm whitespace-nowrap" dir="ltr">
              <Phone className="w-3.5 h-3.5" />
              {SITE.phone}
            </a>
            <Link href="/booking"
              className="btn-premium text-charcoal px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300">
              {t("Book Now", "احجز الآن")}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="text-white/60 hover:text-amber p-2 cursor-pointer flex items-center gap-1"
              aria-label="Toggle language"
            >
              <span className="text-2xl leading-none">{isAr ? "🇬🇧" : "🇸🇦"}</span>
              <span className="text-xs font-medium" style={{ fontFamily: "var(--font-outfit)" }}>{isAr ? "EN" : "AR"}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2" aria-label="Toggle menu">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-charcoal/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-3">
              {NAV_LINKS.map((link, i) => (
                <motion.div key={link.href}
                  initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}>
                  <Link href={link.href} onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-white/80 hover:text-amber hover:bg-white/5 rounded-lg font-medium transition-all">
                    <span>{isAr ? link.labelAr : link.label}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a href={`tel:${SITE.phone}`}
                  className="block text-center text-amber font-semibold py-2" dir="ltr">
                  {SITE.phone}
                </a>
                <Link href="/booking" onClick={() => setIsOpen(false)}
                  className="block text-center btn-premium text-charcoal py-3 rounded-full font-bold">
                  {t("Book Now", "احجز الآن")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
