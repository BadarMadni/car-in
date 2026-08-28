"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, User, Phone, Calendar, Clock, Car, CheckCircle, Send, Sparkles } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLang } from "@/context/LanguageContext";

const vehicleOptions = [
  { key: "sedan", label: "Standard Sedan", labelAr: "سيدان", capacity: "4 passengers", capacityAr: "٤ ركاب" },
  { key: "suv", label: "SUV / XL", labelAr: "دفع رباعي", capacity: "6 passengers", capacityAr: "٦ ركاب" },
  { key: "executive", label: "Executive", labelAr: "تنفيذية", capacity: "4 passengers", capacityAr: "٤ ركاب" },
  { key: "luxury", label: "Luxury", labelAr: "فاخرة", capacity: "4 passengers", capacityAr: "٤ ركاب" },
  { key: "minivan", label: "Minivan", labelAr: "ميني فان", capacity: "7 passengers", capacityAr: "٧ ركاب" },
  { key: "ev", label: "Electric", labelAr: "كهربائية", capacity: "4 passengers", capacityAr: "٤ ركاب" },
];

export default function BookingContent() {
  const { isAr, t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", email: "", pickup: "", dropoff: "", date: "", time: "", vehicle: "sedan", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.pickup || !form.dropoff || !form.date || !form.time) return;
    setSubmitted(true);
  };

  const inputCls = "w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-charcoal text-sm outline-none focus:border-amber/50 focus:shadow-[0_0_0_3px_rgba(245,166,35,0.1)] transition-all";

  return (
    <>
      <PageHero
        backgroundImage="https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1920&q=80"
        title={t("Book Your", "احجز")}
        highlight={t("Ride", "رحلتك")}
        subtitle={t("Fill in the details below and we'll get back to you with a quote.", "املأ التفاصيل أدناه وسنتواصل معك بالسعر.")}
        breadcrumb={t("Booking", "الحجز")}
      />

      <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/3 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-sm overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amber/40 to-transparent" />

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircle className="w-10 h-10 text-amber" />
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal mb-2">{t("Booking Submitted!", "تم إرسال الحجز!")}</h3>
                    <p className="text-charcoal/50 mb-8">{t("We'll contact you shortly to confirm your ride.", "سنتواصل معك قريباً لتأكيد رحلتك.")}</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", pickup: "", dropoff: "", date: "", time: "", vehicle: "sedan", notes: "" }); }}
                      className="text-amber font-semibold hover:underline cursor-pointer">
                      {t("Book Another Ride", "احجز رحلة أخرى")}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center shadow-md">
                        <Sparkles className="w-5 h-5 text-amber" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">{t("Ride Details", "تفاصيل الرحلة")}</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                        <label htmlFor="book-name" className="sr-only">Name</label>
                        <input id="book-name" type="text" placeholder={t("Full Name", "الاسم الكامل")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`${inputCls} ps-11`} />
                      </div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                        <label htmlFor="book-phone" className="sr-only">Phone</label>
                        <input id="book-phone" type="tel" placeholder={t("Phone", "الهاتف")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`${inputCls} ps-11`} dir="ltr" />
                      </div>
                    </div>

                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber" />
                      <label htmlFor="book-pickup" className="sr-only">Pickup</label>
                      <input id="book-pickup" type="text" placeholder={t("Pickup Location", "موقع الاستلام")} value={form.pickup} onChange={(e) => setForm({ ...form, pickup: e.target.value })} className={`${inputCls} ps-11`} />
                    </div>

                    <div className="relative">
                      <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-amber" />
                      <label htmlFor="book-dropoff" className="sr-only">Drop-off</label>
                      <input id="book-dropoff" type="text" placeholder={t("Drop-off Location", "موقع التوصيل")} value={form.dropoff} onChange={(e) => setForm({ ...form, dropoff: e.target.value })} className={`${inputCls} ps-11`} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                        <label htmlFor="book-date" className="sr-only">Date</label>
                        <input id="book-date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={`${inputCls} ps-11`} dir="ltr" />
                      </div>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal/30" />
                        <label htmlFor="book-time" className="sr-only">Time</label>
                        <input id="book-time" type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={`${inputCls} ps-11`} dir="ltr" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-charcoal mb-3 flex items-center gap-2">
                        <Car className="w-4 h-4 text-amber" /> {t("Select Vehicle", "اختر السيارة")}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
                        {vehicleOptions.map((v) => (
                          <button key={v.key} type="button" onClick={() => setForm({ ...form, vehicle: v.key })}
                            className={`text-start rounded-xl px-4 py-3 border text-sm transition-all cursor-pointer ${
                              form.vehicle === v.key
                                ? "bg-gradient-to-br from-charcoal to-charcoal-light border-amber/40 text-white shadow-lg"
                                : "bg-white border-gray-200 text-charcoal/60 hover:border-amber/30"
                            }`}>
                            <span className={`font-medium block ${form.vehicle === v.key ? "text-amber" : ""}`}>{isAr ? v.labelAr : v.label}</span>
                            <span className={`text-xs ${form.vehicle === v.key ? "text-white/50" : "opacity-60"}`}>{isAr ? v.capacityAr : v.capacity}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="book-notes" className="sr-only">Notes</label>
                      <textarea id="book-notes" placeholder={t("Additional Notes (optional)", "ملاحظات إضافية (اختياري)")} rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className={`${inputCls} resize-none`} />
                    </div>

                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                      className="w-full py-4 rounded-xl btn-premium text-charcoal font-bold text-sm flex items-center justify-center gap-2 cursor-pointer">
                      {t("Submit Booking", "إرسال الحجز")} <Send className="w-4 h-4" />
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
