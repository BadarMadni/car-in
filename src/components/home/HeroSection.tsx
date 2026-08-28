"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Shield, Clock, Star } from "lucide-react";
import GradientButton from "@/components/ui/GradientButton";
import BookingCard from "@/components/home/BookingCard";
import HeroStats from "@/components/home/HeroStats";
import { useLang } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=1920&q=80"
          alt="Riyadh city skyline at night"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/80 to-charcoal/95 sm:bg-gradient-to-r sm:from-charcoal/95 sm:via-charcoal/85 sm:to-charcoal/40" />
      </div>

      {/* Light rays effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/3 w-[2px] h-full bg-gradient-to-b from-transparent via-amber/10 to-transparent rotate-[20deg] origin-top"
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-0 left-2/3 w-[1px] h-full bg-gradient-to-b from-transparent via-amber/8 to-transparent rotate-[-15deg] origin-top"
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-amber/3 rounded-full blur-[80px]" />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-8 sm:pb-16 w-full">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
            {/* Left: Text */}
            <div className="flex-1 text-center lg:text-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-6"
              >
                <Star className="w-3.5 h-3.5 text-amber fill-amber" />
                <span className="text-amber text-xs font-bold tracking-wider uppercase">
                  {t("#1 Rated Transport in Saudi Arabia", "#1 في خدمات النقل في السعودية")}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.5rem] font-extrabold text-white tracking-tight"
              >
                {t("Your Ride,", "رحلتك،")}
                <br />
                <span className="gradient-text">{t("Your Way", "على طريقتك")}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-5 text-base sm:text-lg text-white/55 max-w-md mx-auto lg:mx-0 leading-relaxed"
              >
                {t(
                  "Premium rides with professional drivers and modern vehicles. Airport transfers, corporate travel, and city rides across Saudi Arabia.",
                  "رحلات متميزة مع سائقين محترفين وسيارات حديثة. توصيل المطار، سفر الشركات، والتنقل في المدينة في جميع أنحاء السعودية."
                )}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <GradientButton href="/booking" size="lg">
                  {t("Book a Ride", "احجز رحلة")} <ArrowRight className="w-5 h-5" />
                </GradientButton>
                <GradientButton href="/services" variant="outline" size="lg">
                  {t("Explore Services", "استكشف الخدمات")}
                </GradientButton>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5"
              >
                <TrustBadge icon={Shield} text={t("Fully Insured", "تأمين شامل")} />
                <TrustBadge icon={Clock} text={t("24/7 Service", "خدمة ٢٤/٧")} />
                <TrustBadge icon={Star} text={t("4.9 Rating", "تقييم ٤.٩")} />
              </motion.div>
            </div>

            {/* Right: Quick Booking Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="w-full sm:w-[480px] lg:w-[460px] shrink-0"
            >
              <BookingCard />
            </motion.div>
          </div>
        </div>
      </div>

      <HeroStats />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber to-transparent" />
    </section>
  );
}

function TrustBadge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center">
        <Icon className="w-3.5 h-3.5 text-amber" />
      </div>
      <span className="text-white/60 text-sm font-medium">{text}</span>
    </div>
  );
}
