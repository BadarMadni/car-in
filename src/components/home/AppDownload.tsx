"use client";

import { motion } from "framer-motion";
import { Smartphone, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLang } from "@/context/LanguageContext";

export default function AppDownload() {
  const { t } = useLang();

  return (
    <section className="py-14 sm:py-24 bg-gray-50 relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-charcoal overflow-hidden p-10 sm:p-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }} />

          <div className="relative flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-start">
              <AnimatedSection>
                <span className="text-amber font-semibold text-sm uppercase tracking-widest">
                  {t("Coming Soon", "قريباً")}
                </span>
                <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                  {t("Download Our", "حمّل")} <span className="gradient-text">{t("Mobile App", "تطبيقنا")}</span>
                </h2>
                <p className="mt-4 text-lg text-white/50 max-w-lg">
                  {t(
                    "Book rides, track your driver in real-time, manage payments, and more — all from the convenience of your phone.",
                    "احجز رحلات، تتبع سائقك في الوقت الحقيقي، أدر المدفوعات، والمزيد — كل ذلك من هاتفك."
                  )}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button aria-label="App Store - Coming Soon" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3.5 rounded-xl hover:bg-white/15 transition-all group">
                    <Smartphone className="w-6 h-6 text-amber" />
                    <div className="text-start">
                      <div className="text-[10px] uppercase tracking-wider text-white/60">{t("Coming Soon", "قريباً")}</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                  <button aria-label="Google Play - Coming Soon" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3.5 rounded-xl hover:bg-white/15 transition-all group">
                    <Smartphone className="w-6 h-6 text-amber" />
                    <div className="text-start">
                      <div className="text-[10px] uppercase tracking-wider text-white/60">{t("Coming Soon", "قريباً")}</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="right" className="flex-shrink-0">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative">
                <div className="w-56 h-[460px] rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 border-2 border-white/20 p-2.5 backdrop-blur-sm">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-gradient-to-b from-amber/20 to-charcoal flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-extrabold text-white mb-2" style={{ fontFamily: "var(--font-outfit)" }}>CAR<span className="text-amber">IN</span></div>
                      <p className="text-white/40 text-xs" style={{ fontFamily: "var(--font-arabic)" }}>كارإن</p>
                      <p className="text-white/50 text-xs mt-2">{t("Coming Soon", "قريباً")}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-amber/20 to-amber-dark/20 rounded-[3rem] blur-2xl -z-10" />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
