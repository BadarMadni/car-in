"use client";

import { motion } from "framer-motion";
import {
  Plane, Briefcase, Crown, Building2, MapPin, Calendar,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLang } from "@/context/LanguageContext";

const iconMap: Record<string, React.ElementType> = {
  Plane, Briefcase, Crown, Building2, MapPin, Calendar,
};

export default function ServicesSection() {
  const { isAr, t } = useLang();

  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber/3 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest">
            {t("What We Offer", "ما نقدمه")}
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-charcoal">
            {t("Our", "خدماتنا")} <span className="gradient-text">{t("Services", "المتميزة")}</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal/60">
            {t(
              "From airport pickups to corporate travel, we provide premium transport solutions tailored to your needs.",
              "من توصيل المطار إلى سفر الشركات، نوفر حلول نقل متميزة مصممة لاحتياجاتك."
            )}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative p-8 rounded-2xl service-card-premium shadow-sm hover:shadow-2xl hover:shadow-amber/15 transition-all duration-500"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber/10 via-transparent to-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

                  {/* Gold accent line at top */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amber/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center mb-6 shadow-lg group-hover:shadow-amber/20 transition-shadow duration-500">
                    {Icon && <Icon className="w-7 h-7 text-amber" />}
                  </div>

                  <h3 className="text-xl font-bold text-charcoal mb-3 transition-colors duration-500">
                    {isAr ? service.titleAr : service.title}
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed text-sm transition-colors duration-500">
                    {isAr ? service.descriptionAr : service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-amber font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t("Learn More", "اعرف المزيد")}
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
