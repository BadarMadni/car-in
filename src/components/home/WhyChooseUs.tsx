"use client";

import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, Headphones, Award, MapPinned } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLang } from "@/context/LanguageContext";

const reasons = [
  { icon: Shield, title: "Safe & Secure", titleAr: "آمن ومضمون", desc: "All drivers are verified and fully insured for your peace of mind.", descAr: "جميع السائقين تم التحقق منهم ومؤمنين بالكامل لراحة بالك." },
  { icon: Clock, title: "Always On Time", titleAr: "دائماً في الموعد", desc: "99% on-time arrival rate. We value your time as much as you do.", descAr: "معدل وصول في الموعد ٩٩٪. نقدر وقتك كما تفعل." },
  { icon: CreditCard, title: "Transparent Pricing", titleAr: "أسعار شفافة", desc: "No hidden fees or surge pricing. Know your fare before you ride.", descAr: "بدون رسوم مخفية أو زيادة في الأسعار. اعرف أجرتك قبل الركوب." },
  { icon: Headphones, title: "24/7 Support", titleAr: "دعم على مدار الساعة", desc: "Our dedicated support team is available round the clock to assist you.", descAr: "فريق الدعم المتخصص متاح على مدار الساعة لمساعدتك." },
  { icon: Award, title: "Professional Drivers", titleAr: "سائقون محترفون", desc: "Experienced, courteous, and knowledgeable drivers at your service.", descAr: "سائقون ذوو خبرة ولباقة ومعرفة في خدمتك." },
  { icon: MapPinned, title: "Wide Coverage", titleAr: "تغطية واسعة", desc: "Serving 30+ cities across Saudi Arabia with reliable transport solutions.", descAr: "نخدم أكثر من ٣٠ مدينة في السعودية بحلول نقل موثوقة." },
];

export default function WhyChooseUs() {
  const { isAr, t } = useLang();

  return (
    <section className="py-14 sm:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/3 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber font-semibold text-sm uppercase tracking-widest">
            {t("Why Car In", "لماذا كارإن")}
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-charcoal">
            {t("Why Choose", "لماذا تختار")} <span className="gradient-text">{t("Us", "كارإن")}</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal/60">
            {t("We go above and beyond to deliver an exceptional travel experience every single time.", "نتجاوز التوقعات لتقديم تجربة سفر استثنائية في كل مرة.")}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} delay={i * 0.08}>
              <motion.div whileHover={{ scale: 1.03 }}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-amber/10 hover:border-amber/20 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center shrink-0 shadow-md">
                  <reason.icon className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal mb-1.5">
                    {isAr ? reason.titleAr : reason.title}
                  </h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed">
                    {isAr ? reason.descAr : reason.desc}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
