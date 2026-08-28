"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FAQ_ITEMS } from "@/lib/constants";
import { useLang } from "@/context/LanguageContext";

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { isAr, t } = useLang();

  return (
    <>
      <PageHero
        backgroundImage="https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1920&q=80"
        title={t("Frequently Asked", "الأسئلة")}
        highlight={t("Questions", "الشائعة")}
        subtitle={t("Find answers to common questions about our services.", "اعثر على إجابات للأسئلة الشائعة حول خدماتنا.")}
        breadcrumb={t("FAQ", "الأسئلة الشائعة")}
      />

      <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/3 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          {/* Section header */}
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-4 mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-amber" />
              <span className="text-amber text-xs font-bold tracking-wider uppercase">{t("Got Questions?", "لديك أسئلة؟")}</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-charcoal">
              {t("We Have", "لدينا")} <span className="gradient-text">{t("Answers", "الإجابات")}</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${
                    isOpen
                      ? "bg-gradient-to-br from-charcoal to-charcoal-light border border-white/10 shadow-xl shadow-amber/5"
                      : "bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-amber/15"
                  }`}>
                    {/* Top accent line when open */}
                    {isOpen && <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />}

                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center gap-4 p-6 text-start cursor-pointer transition-colors"
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-500 ${
                        isOpen
                          ? "bg-amber/15 border border-amber/20"
                          : "bg-gradient-to-br from-charcoal to-charcoal-light shadow-sm"
                      }`}>
                        <HelpCircle className={`w-4 h-4 ${isOpen ? "text-amber" : "text-amber"}`} />
                      </div>
                      <span className={`font-semibold pe-4 flex-1 transition-colors duration-500 ${isOpen ? "text-white" : "text-charcoal"}`}>
                        {isAr ? item.questionAr : item.question}
                      </span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown className={`w-5 h-5 shrink-0 transition-colors duration-500 ${isOpen ? "text-amber" : "text-amber"}`} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 ps-[4.25rem]">
                            <div className="h-[1px] bg-gradient-to-r from-amber/20 via-white/10 to-transparent mb-4" />
                            <p className="text-white/50 leading-relaxed">
                              {isAr ? item.answerAr : item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
