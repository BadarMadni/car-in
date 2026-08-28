"use client";

import { motion } from "framer-motion";
import {
  Plane, Briefcase, Crown, Building2, MapPin, Calendar,
  CheckCircle, ArrowRight, Sparkles,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import { useLang } from "@/context/LanguageContext";

const services = [
  {
    icon: Plane, title: "Airport Transfers", titleAr: "توصيل المطار",
    desc: "Reliable pickups and drop-offs to all major Saudi airports including King Khalid (Riyadh), King Abdulaziz (Jeddah), King Fahd (Dammam), and more.",
    descAr: "خدمة توصيل موثوقة من وإلى جميع المطارات الرئيسية في السعودية بما فيها الملك خالد (الرياض) والملك عبدالعزيز (جدة) والملك فهد (الدمام).",
    features: ["Flight tracking", "Meet & greet", "Fixed prices", "Free waiting time"],
    featuresAr: ["تتبع الرحلات", "استقبال وترحيب", "أسعار ثابتة", "وقت انتظار مجاني"],
  },
  {
    icon: Briefcase, title: "Corporate Accounts", titleAr: "حسابات الشركات",
    desc: "Tailored transport solutions for businesses with priority booking, monthly invoicing, and dedicated account management.",
    descAr: "حلول نقل مخصصة للشركات مع الحجز المميز والفواتير الشهرية وإدارة حساب مخصصة.",
    features: ["Priority booking", "Monthly invoicing", "Dedicated manager", "Employee portal"],
    featuresAr: ["حجز مميز", "فواتير شهرية", "مدير مخصص", "بوابة الموظفين"],
  },
  {
    icon: Crown, title: "Executive Rides", titleAr: "رحلات تنفيذية",
    desc: "Premium vehicles with professional chauffeurs for business meetings, events, and VIP occasions.",
    descAr: "سيارات فاخرة مع سائقين محترفين لاجتماعات العمل والمناسبات والفعاليات.",
    features: ["Luxury vehicles", "Professional chauffeurs", "Complimentary refreshments", "Privacy guaranteed"],
    featuresAr: ["سيارات فاخرة", "سائقون محترفون", "مرطبات مجانية", "خصوصية مضمونة"],
  },
  {
    icon: Building2, title: "City Transfers", titleAr: "التنقل في المدينة",
    desc: "Quick and comfortable rides across the city with fixed fares and no hidden charges.",
    descAr: "رحلات سريعة ومريحة داخل المدينة بأسعار ثابتة بدون رسوم مخفية.",
    features: ["Fixed fares", "No surge pricing", "Multiple stops", "24/7 availability"],
    featuresAr: ["أسعار ثابتة", "بدون زيادة أسعار", "توقفات متعددة", "متاح ٢٤/٧"],
  },
  {
    icon: MapPin, title: "Long Distance", titleAr: "المسافات الطويلة",
    desc: "Comfortable long-distance travel with experienced drivers at competitive rates for intercity journeys.",
    descAr: "سفر مريح لمسافات طويلة مع سائقين ذوي خبرة بأسعار تنافسية للرحلات بين المدن.",
    features: ["Competitive rates", "Comfort stops", "Experienced drivers", "Door-to-door"],
    featuresAr: ["أسعار تنافسية", "توقفات راحة", "سائقون ذوو خبرة", "من الباب إلى الباب"],
  },
  {
    icon: Calendar, title: "Event Transport", titleAr: "نقل الفعاليات",
    desc: "Dedicated fleet for weddings, conferences, and special events with coordinated logistics across Saudi Arabia.",
    descAr: "أسطول مخصص للأعراس والمؤتمرات والمناسبات الخاصة مع لوجستيات منسقة.",
    features: ["Fleet coordination", "Event planning", "VIP service", "Group discounts"],
    featuresAr: ["تنسيق الأسطول", "تخطيط الفعاليات", "خدمة VIP", "خصومات جماعية"],
  },
];

export default function ServicesContent() {
  const { isAr, t } = useLang();

  return (
    <>
      <PageHero
        backgroundImage="https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1920&q=80"
        title={t("Our", "خدماتنا")}
        highlight={t("Services", "المتميزة")}
        subtitle={t("Premium transport solutions tailored to every need and occasion.", "حلول نقل متميزة مصممة لكل حاجة ومناسبة.")}
        breadcrumb={t("Services", "الخدمات")}
      />

      {/* Services intro */}
      <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/3 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section header */}
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-4 mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-amber" />
              <span className="text-amber text-xs font-bold tracking-wider uppercase">{t("What We Offer", "ما نقدمه")}</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-charcoal">
              {t("Premium Solutions for", "حلول متميزة")} <span className="gradient-text">{t("Every Journey", "لكل رحلة")}</span>
            </h2>
            <p className="mt-4 text-charcoal/50">
              {t("From airport pickups to corporate travel, discover our comprehensive range of transport services.", "من توصيل المطار إلى سفر الشركات، اكتشف مجموعتنا الشاملة من خدمات النقل.")}
            </p>
          </AnimatedSection>

          <div className="space-y-8 sm:space-y-12">
            {services.map((service, i) => {
              const isDark = i % 2 === 1;
              return (
                <AnimatedSection key={service.title} delay={0.1}>
                  <motion.div whileHover={{ y: -4 }}
                    className={`relative flex flex-col lg:flex-row gap-8 p-6 sm:p-10 rounded-3xl overflow-hidden transition-all duration-500 group ${
                      isDark
                        ? "bg-gradient-to-br from-charcoal to-charcoal-light border border-white/10"
                        : "service-card-premium shadow-sm hover:shadow-xl hover:shadow-amber/10"
                    } ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    {/* Decorative accents */}
                    <div className={`absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent ${isDark ? "via-amber/20" : "via-amber/10"} to-transparent`} />
                    <div className={`absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent ${isDark ? "via-amber/10" : "via-amber/5"} to-transparent`} />

                    <div className="lg:w-1/3 relative">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg transition-shadow duration-500 ${
                        isDark
                          ? "bg-gradient-to-br from-amber/20 to-amber/5 border border-amber/20 group-hover:shadow-amber/20"
                          : "bg-gradient-to-br from-charcoal to-charcoal-light group-hover:shadow-amber/20"
                      }`}>
                        <service.icon className="w-8 h-8 text-amber" />
                      </div>
                      <h3 className={`text-2xl sm:text-3xl font-bold mb-3 transition-colors duration-500 ${isDark ? "text-white" : "text-charcoal"}`}>
                        {isAr ? service.titleAr : service.title}
                      </h3>
                      <p className={`leading-relaxed transition-colors duration-500 ${isDark ? "text-white/50" : "text-charcoal/55"}`}>
                        {isAr ? service.descAr : service.desc}
                      </p>
                      <div className="mt-6">
                        <GradientButton href="/booking" size="sm">
                          {t("Book Now", "احجز الآن")} <ArrowRight className="w-4 h-4" />
                        </GradientButton>
                      </div>
                    </div>
                    <div className="lg:w-2/3 flex items-center">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        {(isAr ? service.featuresAr : service.features).map((f) => (
                          <div key={f} className={`flex items-center gap-3 rounded-xl px-5 py-4 border transition-all duration-300 ${
                            isDark
                              ? "bg-white/5 border-white/10 hover:border-amber/20 hover:bg-white/8"
                              : "bg-gray-50 border-gray-100 hover:border-amber/20 hover:bg-amber/5"
                          }`}>
                            <CheckCircle className="w-5 h-5 text-amber shrink-0" />
                            <span className={`font-medium text-sm ${isDark ? "text-white/70" : "text-charcoal/70"}`}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
