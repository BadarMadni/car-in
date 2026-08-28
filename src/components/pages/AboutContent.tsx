"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Clock, Users, Sparkles } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLang } from "@/context/LanguageContext";

const values = [
  { icon: Heart, title: "Customer First", titleAr: "العميل أولاً", desc: "Every decision we make puts our passengers' comfort and safety at the forefront.", descAr: "كل قرار نتخذه يضع راحة وسلامة ركابنا في المقدمة." },
  { icon: Award, title: "Excellence", titleAr: "التميز", desc: "We maintain the highest standards in vehicles, drivers, and service quality.", descAr: "نحافظ على أعلى المعايير في السيارات والسائقين وجودة الخدمة." },
  { icon: Clock, title: "Reliability", titleAr: "الموثوقية", desc: "On-time, every time. We understand the value of your time and respect it.", descAr: "في الموعد، في كل مرة. نفهم قيمة وقتك ونحترمه." },
  { icon: Users, title: "Integrity", titleAr: "النزاهة", desc: "Transparent pricing, honest service, and genuine care for every customer.", descAr: "أسعار شفافة، خدمة صادقة، واهتمام حقيقي بكل عميل." },
];

const stats = [
  { value: "2024", label: "Founded", labelAr: "التأسيس" },
  { value: "10K+", label: "Happy Customers", labelAr: "عملاء سعداء" },
  { value: "500+", label: "Professional Drivers", labelAr: "سائق محترف" },
  { value: "30+", label: "Cities Covered", labelAr: "مدينة مغطاة" },
];

export default function AboutContent() {
  const { isAr, t } = useLang();

  return (
    <>
      <PageHero
        backgroundImage="https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1920&q=80"
        title={t("About", "من نحن")}
        highlight={t("Car In", "كارإن")}
        subtitle={t("Discover the story behind Saudi Arabia's most trusted premium transport service.", "اكتشف قصة أفضل خدمة نقل متميزة في المملكة العربية السعودية.")}
        breadcrumb={t("About Us", "من نحن")}
      />

      {/* Our Story Section */}
      <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/3 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <span className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber" />
                <span className="text-amber text-xs font-bold tracking-wider uppercase">{t("Our Story", "قصتنا")}</span>
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-charcoal">
                {t("Redefining", "إعادة تعريف")} <span className="gradient-text">{t("Transport", "النقل")}</span> {t("in Saudi Arabia", "في السعودية")}
              </h2>
              <p className="mt-5 text-charcoal/60 leading-relaxed">
                {t(
                  "Founded in 2024, Car In began with a simple mission: to provide safe, reliable, and premium transport services across Saudi Arabia. What started as a small fleet of vehicles has grown into one of the most trusted transport companies in the Kingdom.",
                  "تأسست كارإن في ٢٠٢٤ بمهمة بسيطة: توفير خدمات نقل آمنة وموثوقة ومتميزة في جميع أنحاء المملكة العربية السعودية. ما بدأ كأسطول صغير من السيارات نما ليصبح واحداً من أكثر شركات النقل الموثوقة في المملكة."
                )}
              </p>
              <p className="mt-4 text-charcoal/60 leading-relaxed">
                {t(
                  "We believe every journey should be an experience, not just a ride. Our professional drivers, modern fleet, and commitment to excellence set us apart from traditional taxi services.",
                  "نؤمن بأن كل رحلة يجب أن تكون تجربة، وليست مجرد توصيلة. سائقونا المحترفون وأسطولنا الحديث والتزامنا بالتميز يميزنا عن خدمات التاكسي التقليدية."
                )}
              </p>
              <div className="mt-8 h-[2px] w-24 bg-gradient-to-r from-amber to-transparent rounded-full" />
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <motion.div key={s.label} whileHover={{ y: -6, scale: 1.02 }}
                    className="relative bg-gradient-to-br from-charcoal to-charcoal-light rounded-2xl p-6 text-center border border-white/5 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
                    <div className="relative">
                      <div className="text-3xl sm:text-4xl font-extrabold gradient-text">{s.value}</div>
                      <div className="mt-2 text-white/40 text-sm font-medium">{isAr ? s.labelAr : s.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-14 sm:py-24 relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber/3 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-4 mx-auto">
              <span className="w-2 h-2 rounded-full bg-amber" />
              <span className="text-amber text-xs font-bold tracking-wider uppercase">{t("Our Purpose", "هدفنا")}</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
              {t("Mission &", "المهمة")} <span className="gradient-text">{t("Vision", "والرؤية")}</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatedSection>
              <motion.div whileHover={{ y: -6 }} className="relative rounded-2xl p-8 sm:p-10 border border-white/10 bg-white/5 backdrop-blur-sm h-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber/20 to-amber/5 border border-amber/20 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-amber" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t("Our Mission", "مهمتنا")}</h3>
                  <p className="text-white/50 leading-relaxed">
                    {t(
                      "To provide the safest, most reliable, and comfortable transport experience in Saudi Arabia. We aim to set new standards in the industry through innovation, professionalism, and an unwavering commitment to customer satisfaction.",
                      "توفير أكثر تجربة نقل أماناً وموثوقية وراحة في المملكة. نهدف إلى وضع معايير جديدة في الصناعة من خلال الابتكار والاحترافية والالتزام بإرضاء العملاء."
                    )}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <motion.div whileHover={{ y: -6 }} className="relative rounded-2xl p-8 sm:p-10 border border-white/10 bg-white/5 backdrop-blur-sm h-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-amber/20 to-transparent" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber/20 to-amber/5 border border-amber/20 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-amber" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{t("Our Vision", "رؤيتنا")}</h3>
                  <p className="text-white/50 leading-relaxed">
                    {t(
                      "To become Saudi Arabia's leading premium transport platform, connecting passengers with professional drivers through cutting-edge technology. We envision a future where every journey is seamless, safe, and enjoyable.",
                      "أن نصبح المنصة الرائدة للنقل المتميز في المملكة، نربط الركاب بالسائقين المحترفين من خلال أحدث التقنيات. نتصور مستقبلاً تكون فيه كل رحلة سلسة وآمنة وممتعة."
                    )}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber/3 rounded-full blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-4 mx-auto">
              <span className="w-2 h-2 rounded-full bg-amber" />
              <span className="text-amber text-xs font-bold tracking-wider uppercase">{t("What Drives Us", "ما يحركنا")}</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-charcoal">
              {t("Our Core", "قيمنا")} <span className="gradient-text">{t("Values", "الأساسية")}</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }}
                  className="text-center p-6 rounded-2xl service-card-premium shadow-sm hover:shadow-xl hover:shadow-amber/10 transition-all h-full group">
                  <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-amber/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:shadow-amber/20 transition-shadow duration-500">
                    <v.icon className="w-7 h-7 text-amber" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2 transition-colors duration-500">{isAr ? v.titleAr : v.title}</h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed transition-colors duration-500">{isAr ? v.descAr : v.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
