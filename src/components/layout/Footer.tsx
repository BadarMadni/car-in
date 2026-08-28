"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLang } from "@/context/LanguageContext";

const quickLinksEn = [
  { label: "Airport Transfers", labelAr: "توصيل المطار", href: "/services" },
  { label: "Corporate Accounts", labelAr: "حسابات الشركات", href: "/services" },
  { label: "Our Fleet", labelAr: "أسطولنا", href: "/fleet" },
  { label: "Privacy Policy", labelAr: "سياسة الخصوصية", href: "#" },
  { label: "Terms & Conditions", labelAr: "الشروط والأحكام", href: "#" },
];

export default function Footer() {
  const { isAr, t } = useLang();

  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* CTA Strip */}
      <div className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal">
        {/* Decorative gold accents */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 shimmer" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <AnimatedSection className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {t("Ready to Experience", "هل أنت مستعد لتجربة")} <span className="gradient-text">{t("Premium Travel?", "سفر متميزة؟")}</span>
              </h3>
              <p className="text-white/50 mt-3">
                {t("Book your ride today and travel in comfort & style.", "احجز رحلتك اليوم وسافر براحة وأناقة.")}
              </p>
            </div>
            <Link
              href="/booking"
              className="btn-premium text-charcoal px-10 py-4 rounded-full font-bold text-lg whitespace-nowrap"
            >
              {t("Book Your Ride", "احجز رحلتك")}
            </Link>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <Image src="/logo-light.png" alt="Car In كارإن" width={140} height={79} className="h-14 w-auto" />
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              {t(SITE.description, SITE.descriptionAr)}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5 gradient-text">{t("Quick Links", "روابط سريعة")}</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-amber transition-colors duration-300">
                    {isAr ? link.labelAr : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-5 gradient-text">{t("Services", "الخدمات")}</h4>
            <ul className="space-y-3">
              {quickLinksEn.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/60 hover:text-amber transition-colors duration-300">
                    {isAr ? link.labelAr : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-5 gradient-text">{t("Contact Us", "اتصل بنا")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <a href={`tel:${SITE.phone}`} className="text-white/60 hover:text-amber transition-colors" dir="ltr">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <a href={`mailto:${SITE.email}`} className="text-white/60 hover:text-amber transition-colors" dir="ltr">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber shrink-0 mt-0.5" />
                <span className="text-white/60">{t(SITE.address, SITE.addressAr)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
            <p>&copy; {new Date().getFullYear()} {SITE.name} ({SITE.nameAr}). {t("All rights reserved.", "جميع الحقوق محفوظة.")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
