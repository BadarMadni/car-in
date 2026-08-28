"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, Navigation, User, Phone, Calendar, Clock, CheckCircle } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function BookingCard() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vehicle, setVehicle] = useState("sedan");
  const [submitted, setSubmitted] = useState(false);

  const vehicles = [
    { key: "sedan", label: t("Sedan", "سيدان"), capacity: "4" },
    { key: "suv", label: t("SUV", "دفع رباعي"), capacity: "6" },
    { key: "executive", label: t("Executive", "تنفيذية"), capacity: "4" },
    { key: "luxury", label: t("Luxury", "فاخرة"), capacity: "4" },
  ];

  const handleSubmit = () => {
    if (!name || !phone || !pickup || !dropoff || !date || !time) return;
    setSubmitted(true);
  };

  const inputCls = "bg-transparent text-white text-sm placeholder:text-white/35 outline-none w-full";
  const rowCls = "flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3 border border-white/10 focus-within:border-amber/40 transition-colors";

  return (
    <div className="bg-white/[0.07] backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-7 shadow-2xl shadow-black/20">
      <h3 className="text-white font-bold text-lg mb-0.5">{t("Book Your Ride", "احجز رحلتك")}</h3>
      <p className="text-white/60 text-xs mb-5">{t("Get a quote in seconds", "احصل على عرض سعر في ثوانٍ")}</p>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h4 className="text-white font-bold text-lg mb-2">{t("Booking Received!", "تم استلام الحجز!")}</h4>
            <p className="text-white/50 text-sm mb-6">{t("We'll contact you shortly to confirm.", "سنتواصل معك قريباً للتأكيد.")}</p>
            <button onClick={() => { setSubmitted(false); setName(""); setPhone(""); setPickup(""); setDropoff(""); setDate(""); setTime(""); }}
              className="text-amber font-semibold text-sm hover:underline cursor-pointer">
              {t("Book Another Ride", "احجز رحلة أخرى")}
            </button>
          </motion.div>
        ) : (
          <motion.div key="form" className="space-y-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              <div className={rowCls}>
                <User className="w-4 h-4 text-white/30 shrink-0" />
                <label htmlFor="hero-name" className="sr-only">Name</label>
                <input id="hero-name" type="text" placeholder={t("Name", "الاسم")} value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
              </div>
              <div className={rowCls}>
                <Phone className="w-4 h-4 text-white/30 shrink-0" />
                <label htmlFor="hero-phone" className="sr-only">Phone</label>
                <input id="hero-phone" type="tel" placeholder={t("Phone", "الهاتف")} value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} dir="ltr" />
              </div>
            </div>

            <div className={rowCls}>
              <MapPin className="w-4 h-4 text-green-400 shrink-0" />
              <label htmlFor="hero-pickup" className="sr-only">Pickup</label>
              <input id="hero-pickup" type="text" placeholder={t("Pickup Location", "موقع الاستلام")} value={pickup} onChange={(e) => setPickup(e.target.value)} className={inputCls} />
            </div>

            <div className={rowCls}>
              <Navigation className="w-4 h-4 text-amber shrink-0" />
              <label htmlFor="hero-dropoff" className="sr-only">Drop-off</label>
              <input id="hero-dropoff" type="text" placeholder={t("Drop-off Location", "موقع التوصيل")} value={dropoff} onChange={(e) => setDropoff(e.target.value)} className={inputCls} />
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {vehicles.map((v) => (
                <button key={v.key} type="button" onClick={() => setVehicle(v.key)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 border text-sm font-medium transition-all cursor-pointer ${
                    vehicle === v.key ? "bg-amber/20 border-amber/50 text-amber" : "bg-white/10 border-white/10 text-white/60 hover:border-white/25"
                  }`}>
                  <span>{v.label}</span>
                  <span className="text-xs opacity-60">{t(`Up to ${v.capacity}`, `حتى ${v.capacity}`)}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2.5">
              <div className="grid grid-cols-2 gap-2.5 flex-1">
                <div className={rowCls}>
                  <Calendar className="w-4 h-4 text-white/30 shrink-0" />
                  <label htmlFor="hero-date" className="sr-only">Date</label>
                  <input id="hero-date" type="date" value={date}
                    min={(() => { const n = new Date(); return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`; })()}
                    onChange={(e) => setDate(e.target.value)} className={`${inputCls} dark-picker ${!date ? "text-white/35" : ""}`} dir="ltr" />
                </div>
                <div className={rowCls}>
                  <Clock className="w-4 h-4 text-white/30 shrink-0" />
                  <label htmlFor="hero-time" className="sr-only">Time</label>
                  <input id="hero-time" type="time" value={time} onChange={(e) => setTime(e.target.value)} className={`${inputCls} dark-picker ${!time ? "text-white/35" : ""}`} dir="ltr" />
                </div>
              </div>
              <button type="button" onClick={() => {
                const now = new Date();
                setDate(`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`);
                setTime(now.toTimeString().slice(0, 5));
              }}
                className="shrink-0 bg-amber/20 hover:bg-amber/30 border border-amber/40 text-amber text-xs font-bold rounded-xl px-3 py-3 transition-all cursor-pointer">
                {t("Now", "الآن")}
              </button>
            </div>

            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleSubmit}
              className="w-full mt-4 py-4 rounded-xl btn-premium text-charcoal font-bold text-sm flex items-center justify-center gap-2 cursor-pointer">
              {t("Get Instant Quote", "احصل على عرض سعر فوري")} <ArrowRight className="w-4 h-4" />
            </motion.button>

            <p className="text-center text-white/50 text-xs mt-3">{t("No hidden fees. Free cancellation up to 1hr before.", "بدون رسوم مخفية. إلغاء مجاني حتى ساعة قبل الموعد.")}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
