"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/constants";
import { useLang } from "@/context/LanguageContext";

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { isAr } = useLang();

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 shimmer" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              {/* Separator line between stats */}
              {i > 0 && <div className="absolute top-1/2 -translate-y-1/2 start-0 w-[1px] h-12 bg-gradient-to-b from-transparent via-amber/25 to-transparent hidden lg:block" />}
              <div className="text-4xl sm:text-5xl font-extrabold gradient-text mb-2 drop-shadow-lg">{stat.value}</div>
              <div className="text-white/50 font-medium text-sm sm:text-base">
                {isAr ? stat.labelAr : stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
