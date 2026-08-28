"use client";

import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";

const stats = [
  { value: "10K+", label: "Happy Riders", labelAr: "راكب سعيد" },
  { value: "500+", label: "Pro Drivers", labelAr: "سائق محترف" },
  { value: "30+", label: "Saudi Cities", labelAr: "مدينة سعودية" },
  { value: "99%", label: "On Time", labelAr: "في الموعد" },
];

export default function HeroStats() {
  const { isAr } = useLang();

  return (
    <div className="relative bg-charcoal/80 backdrop-blur-xl border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-center sm:text-start flex flex-col sm:flex-row sm:items-center sm:gap-3"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white">
                {s.value}
              </span>
              <span className="text-white/60 text-xs sm:text-sm font-medium">
                {isAr ? s.labelAr : s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
