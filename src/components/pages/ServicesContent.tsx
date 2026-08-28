"use client";

import { motion } from "framer-motion";
import {
  Plane, Briefcase, Crown, Building2, MapPin, Calendar,
  ArrowRight, Sparkles, CheckCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLang } from "@/context/LanguageContext";

const services = [
  {
    icon: Plane, title: "Airport Transfers", titleAr: "توصيل المطار",
    desc: "Reliable pickups and drop-offs to all major Saudi airports including King Khalid, King Abdulaziz, and King Fahd.",
    descAr: "خدمة توصيل موثوقة من وإلى جميع المطارات الرئيسية في السعودية.",
    features: ["Flight tracking", "Meet & greet", "Fixed prices", "Free waiting time"],
    featuresAr: ["تتبع الرحلات", "استقبال وترحيب", "أسعار ثابتة", "وقت انتظار مجاني"],
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80",
  },
  {
    icon: Briefcase, title: "Corporate Accounts", titleAr: "حسابات الشركات",
    desc: "Tailored transport solutions for businesses with priority booking and dedicated account management.",
    descAr: "حلول نقل مخصصة للشركات مع الحجز المميز وإدارة حساب مخصصة.",
    features: ["Priority booking", "Monthly invoicing", "Dedicated manager", "Employee portal"],
    featuresAr: ["حجز مميز", "فواتير شهرية", "مدير مخصص", "بوابة الموظفين"],
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
  },
  {
    icon: Crown, title: "Executive Rides", titleAr: "رحلات تنفيذية",
    desc: "Premium vehicles with professional chauffeurs for business meetings, events, and VIP occasions.",
    descAr: "سيارات فاخرة مع سائقين محترفين لاجتماعات العمل والمناسبات.",
    features: ["Luxury vehicles", "Professional chauffeurs", "Complimentary refreshments", "Privacy guaranteed"],
    featuresAr: ["سيارات فاخرة", "سائقون محترفون", "مرطبات مجانية", "خصوصية مضمونة"],
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
  },
  {
    icon: Building2, title: "City Transfers", titleAr: "التنقل في المدينة",
    desc: "Quick and comfortable rides across the city with fixed fares and no hidden charges.",
    descAr: "رحلات سريعة ومريحة داخل المدينة بأسعار ثابتة بدون رسوم مخفية.",
    features: ["Fixed fares", "No surge pricing", "Multiple stops", "24/7 availability"],
    featuresAr: ["أسعار ثابتة", "بدون زيادة أسعار", "توقفات متعددة", "متاح ٢٤/٧"],
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  },
  {
    icon: MapPin, title: "Long Distance", titleAr: "المسافات الطويلة",
    desc: "Comfortable long-distance travel with experienced drivers at competitive rates.",
    descAr: "سفر مريح لمسافات طويلة مع سائقين ذوي خبرة بأسعار تنافسية.",
    features: ["Competitive rates", "Comfort stops", "Experienced drivers", "Door-to-door"],
    featuresAr: ["أسعار تنافسية", "توقفات راحة", "سائقون ذوو خبرة", "من الباب إلى الباب"],
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?w=800&q=80",
  },
  {
    icon: Calendar, title: "Event Transport", titleAr: "نقل الفعاليات",
    desc: "Dedicated fleet for weddings, conferences, and special events with coordinated logistics.",
    descAr: "أسطول مخصص للأعراس والمؤتمرات والمناسبات الخاصة مع لوجستيات منسقة.",
    features: ["Fleet coordination", "Event planning", "VIP service", "Group discounts"],
    featuresAr: ["تنسيق الأسطول", "تخطيط الفعاليات", "خدمة VIP", "خصومات جماعية"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
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
        subtitle={t("Premium transport solutions tailored to every need.", "حلول نقل متميزة مصممة لكل حاجة.")}
        breadcrumb={t("Services", "الخدمات")}
      />

      {/* Featured Service - Airport Transfers */}
      <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber/3 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-4 mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-amber" />
              <span className="text-amber text-xs font-bold tracking-wider uppercase">{t("What We Offer", "ما نقدمه")}</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-charcoal">
              {t("Premium Solutions for", "حلول متميزة")} <span className="gradient-text">{t("Every Journey", "لكل رحلة")}</span>
            </h2>
          </AnimatedSection>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const isFeatured = i === 0 || i === 2;
              return (
                <AnimatedSection key={service.title} delay={i * 0.08}
                  className={isFeatured ? "md:col-span-2 lg:col-span-1" : ""}>
                  <motion.div whileHover={{ y: -6 }}
                    className="group relative h-full rounded-3xl overflow-hidden cursor-pointer">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <Image src={service.image} alt={isAr ? service.titleAr : service.title}
                        fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/40" />
                    </div>

                    {/* Content */}
                    <div className="relative p-7 sm:p-8 flex flex-col min-h-[420px]">
                      {/* Number Badge */}
                      <div className="absolute top-6 end-6 text-5xl font-black text-white/5 select-none" style={{ fontFamily: "var(--font-outfit)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-amber/15 border border-amber/25 backdrop-blur-md flex items-center justify-center mb-auto group-hover:bg-amber/25 group-hover:border-amber/40 transition-all duration-500">
                        <service.icon className="w-7 h-7 text-amber" />
                      </div>

                      {/* Text */}
                      <div className="mt-auto">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {isAr ? service.titleAr : service.title}
                        </h3>
                        <p className="text-white/45 text-sm leading-relaxed mb-5">
                          {isAr ? service.descAr : service.desc}
                        </p>

                        {/* Features - revealed on hover */}
                        <div className="grid grid-cols-2 gap-2 mb-5 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                          {(isAr ? service.featuresAr : service.features).map((f) => (
                            <div key={f} className="flex items-center gap-2 text-xs text-white/60">
                              <CheckCircle className="w-3.5 h-3.5 text-amber shrink-0" /> {f}
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <Link href="/booking"
                          className="inline-flex items-center gap-2 btn-premium text-charcoal text-sm font-bold px-6 py-3 rounded-xl group-hover:gap-3 transition-all duration-300">
                          {t("Book Now", "احجز الآن")} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber/5 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <AnimatedSection>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t("Need a", "تحتاج")} <span className="gradient-text">{t("Custom Solution?", "حلاً مخصصاً؟")}</span>
            </h3>
            <p className="text-white/40 mb-8 max-w-xl mx-auto">
              {t("We offer tailored transport packages for businesses and special requirements. Get in touch to discuss your needs.", "نقدم حزم نقل مخصصة للشركات والاحتياجات الخاصة. تواصل معنا لمناقشة احتياجاتك.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="btn-premium text-charcoal font-bold px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2">
                {t("Contact Us", "تواصل معنا")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/fleet"
                className="btn-premium-outline text-white font-bold px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2">
                {t("View Our Fleet", "عرض أسطولنا")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
