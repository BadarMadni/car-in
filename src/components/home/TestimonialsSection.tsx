"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLang } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { isAr, t } = useLang();

  return (
    <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber/5 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest">
            {t("Testimonials", "آراء العملاء")}
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-charcoal">
            {t("What Our", "ماذا يقول")} <span className="gradient-text">{t("Clients Say", "عملاؤنا")}</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal/60">
            {t("Don't just take our word for it. Hear from our satisfied customers.", "لا تأخذ كلامنا فقط. استمع لعملائنا الراضين.")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <AnimatedSection key={testimonial.name} delay={i * 0.15}>
              <motion.div whileHover={{ y: -6 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-light text-white group">
                <Quote className="w-10 h-10 text-amber/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber text-amber" />
                  ))}
                </div>
                <p className="text-white/70 leading-relaxed mb-6">
                  &ldquo;{isAr ? testimonial.textAr : testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center text-white font-bold text-sm">
                    {(isAr ? testimonial.nameAr : testimonial.name).charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{isAr ? testimonial.nameAr : testimonial.name}</div>
                    <div className="text-white/60 text-xs">{isAr ? testimonial.roleAr : testimonial.role}</div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber/10 to-transparent rounded-bl-3xl rounded-tr-2xl" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
