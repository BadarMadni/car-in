"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Check, Star, Sparkles } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLang } from "@/context/LanguageContext";

const vehicles = [
  {
    name: "Standard Sedan", nameAr: "سيدان عادية",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=800&q=80",
    desc: "Comfortable sedans perfect for everyday city travel and short trips.",
    descAr: "سيدان مريحة مثالية للتنقل اليومي في المدينة والرحلات القصيرة.",
    capacity: 4, bags: 2, rating: 4.8,
    features: ["Air Conditioning", "USB Charging", "Wi-Fi", "GPS Navigation"],
    featuresAr: ["تكييف", "شحن USB", "واي فاي", "ملاحة GPS"],
  },
  {
    name: "Executive Class", nameAr: "تنفيذية",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
    desc: "Premium vehicles for business meetings, events, and VIP travel.",
    descAr: "سيارات فاخرة لاجتماعات العمل والمناسبات والسفر المميز.",
    capacity: 4, bags: 3, rating: 4.9,
    features: ["Leather Seats", "Climate Control", "Complimentary Water", "Privacy Partition"],
    featuresAr: ["مقاعد جلدية", "تحكم بالمناخ", "مياه مجانية", "حاجز خصوصية"],
  },
  {
    name: "SUV", nameAr: "دفع رباعي",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    desc: "Spacious SUVs for groups, families, and extra luggage needs.",
    descAr: "سيارات دفع رباعي واسعة للمجموعات والعائلات والأمتعة الإضافية.",
    capacity: 6, bags: 4, rating: 4.8,
    features: ["Extra Space", "All-Terrain", "USB Charging", "Child Seat Available"],
    featuresAr: ["مساحة إضافية", "جميع التضاريس", "شحن USB", "مقعد أطفال متاح"],
  },
  {
    name: "Electric Vehicle", nameAr: "سيارة كهربائية",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    desc: "Eco-friendly electric vehicles for a sustainable and silent ride.",
    descAr: "سيارات كهربائية صديقة للبيئة لرحلة مستدامة وهادئة.",
    capacity: 4, bags: 2, rating: 4.9,
    features: ["Zero Emissions", "Silent Ride", "Fast Charging", "Modern Interior"],
    featuresAr: ["صفر انبعاثات", "رحلة هادئة", "شحن سريع", "تصميم داخلي حديث"],
  },
  {
    name: "Luxury", nameAr: "فاخرة",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    desc: "Top-tier luxury vehicles for the ultimate travel experience.",
    descAr: "سيارات فاخرة من الدرجة الأولى لأفضل تجربة سفر.",
    capacity: 4, bags: 3, rating: 5.0,
    features: ["Massage Seats", "Mini Bar", "Ambient Lighting", "Chauffeur Service"],
    featuresAr: ["مقاعد مساج", "ميني بار", "إضاءة محيطية", "خدمة سائق خاص"],
  },
  {
    name: "Minivan / XL", nameAr: "ميني فان",
    image: "https://images.unsplash.com/photo-1570733577524-3a047079e80d?w=800&q=80",
    desc: "Perfect for larger groups, events, and family travel with extra luggage.",
    descAr: "مثالية للمجموعات الكبيرة والفعاليات والسفر العائلي مع أمتعة إضافية.",
    capacity: 7, bags: 5, rating: 4.7,
    features: ["Sliding Doors", "Luggage Compartment", "Air Conditioning", "Spacious Seating"],
    featuresAr: ["أبواب منزلقة", "حجرة أمتعة", "تكييف", "مقاعد واسعة"],
  },
];

export default function FleetContent() {
  const { isAr, t } = useLang();

  return (
    <>
      <PageHero
        backgroundImage="https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1920&q=80"
        title={t("Our", "أسطولنا")}
        highlight={t("Fleet", "الحديث")}
        subtitle={t("Modern, well-maintained vehicles for every occasion and group size.", "سيارات حديثة ومُصانة لكل مناسبة وحجم مجموعة.")}
        breadcrumb={t("Fleet", "الأسطول")}
      />

      <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/3 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Section header */}
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-4 mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-amber" />
              <span className="text-amber text-xs font-bold tracking-wider uppercase">{t("Our Vehicles", "سياراتنا")}</span>
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-charcoal">
              {t("Choose Your", "اختر")} <span className="gradient-text">{t("Perfect Ride", "سيارتك المثالية")}</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {vehicles.map((v, i) => (
              <AnimatedSection key={v.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-amber/10 hover:border-amber/20 transition-all h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image src={v.image} alt={v.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-charcoal/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10">
                      <Star className="w-3 h-3 fill-amber text-amber" /> {v.rating}
                    </div>
                    {/* Premium badge for 5.0 */}
                    {v.rating === 5.0 && (
                      <div className="absolute top-3 right-3 btn-premium text-charcoal text-[10px] font-bold px-3 py-1 rounded-full">
                        PREMIUM
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-charcoal mb-1">{isAr ? v.nameAr : v.name}</h3>
                    <p className="text-charcoal/50 text-sm mb-4">{isAr ? v.descAr : v.desc}</p>
                    <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-5">
                      <span className="flex items-center gap-1.5 bg-amber/10 text-amber font-semibold px-3 py-1 rounded-full text-xs">
                        <Users className="w-3.5 h-3.5" /> {v.capacity} {t("seats", "مقاعد")}
                      </span>
                      <span className="bg-charcoal/5 text-charcoal/60 font-medium px-3 py-1 rounded-full text-xs">{v.bags} {t("bags", "حقائب")}</span>
                    </div>
                    <ul className="space-y-2.5 mt-auto">
                      {(isAr ? v.featuresAr : v.features).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-charcoal/60">
                          <Check className="w-4 h-4 text-amber shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Bottom accent */}
                  <div className="h-[2px] bg-gradient-to-r from-transparent via-amber/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
