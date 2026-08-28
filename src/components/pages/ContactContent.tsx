"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Sparkles } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/constants";
import { useLang } from "@/context/LanguageContext";

export default function ContactContent() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const contactInfo = [
    { icon: Phone, label: t("Phone", "الهاتف"), value: SITE.phone, href: `tel:${SITE.phone}` },
    { icon: Mail, label: t("Email", "البريد الإلكتروني"), value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: t("Address", "العنوان"), value: t(SITE.address, SITE.addressAr), href: "#" },
    { icon: Clock, label: t("Hours", "ساعات العمل"), value: t("24/7 Available", "متاح ٢٤/٧"), href: "#" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputCls = "w-full px-5 py-3.5 rounded-xl bg-white border border-gray-200 text-charcoal text-sm outline-none focus:border-amber/50 focus:shadow-[0_0_0_3px_rgba(245,166,35,0.1)] transition-all";

  return (
    <>
      <PageHero
        backgroundImage="https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1920&q=80"
        title={t("Contact", "اتصل")}
        highlight={t("Us", "بنا")}
        subtitle={t("Get in touch for bookings, enquiries, or corporate account setup.", "تواصل معنا للحجز أو الاستفسارات أو إعداد حساب الشركة.")}
        breadcrumb={t("Contact", "اتصل بنا")}
      />

      <section className="py-14 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/3 rounded-full blur-[100px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <span className="inline-flex items-center gap-2 bg-amber/10 border border-amber/20 rounded-full px-4 py-1.5 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-amber" />
                  <span className="text-amber text-xs font-bold tracking-wider uppercase">{t("Reach Out", "تواصل معنا")}</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal mb-2">
                  {t("Get In", "تواصل")} <span className="gradient-text">{t("Touch", "معنا")}</span>
                </h2>
                <p className="text-charcoal/50 mb-8">
                  {t("We'd love to hear from you. Reach out to us anytime.", "يسعدنا سماعك. تواصل معنا في أي وقت.")}
                </p>
                <div className="space-y-5">
                  {contactInfo.map((c) => (
                    <a key={c.label} href={c.href} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-amber/15 transition-all duration-300">
                        <c.icon className="w-5 h-5 text-amber" />
                      </div>
                      <div>
                        <div className="text-charcoal/55 text-xs font-medium uppercase tracking-wider">{c.label}</div>
                        <div className="text-charcoal font-semibold mt-0.5" dir={c.href.startsWith("tel:") ? "ltr" : undefined}>{c.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-10 border border-gray-100 overflow-hidden">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amber/40 to-transparent" />

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center shadow-md">
                      <Send className="w-5 h-5 text-amber" />
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">{t("Send a Message", "أرسل رسالة")}</h3>
                  </div>

                  {sent ? (
                    <div className="text-center py-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-charcoal to-charcoal-light flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <CheckCircle className="w-8 h-8 text-amber" />
                      </div>
                      <h4 className="text-lg font-bold text-charcoal mb-2">{t("Message Sent!", "تم إرسال الرسالة!")}</h4>
                      <p className="text-charcoal/50 text-sm mb-6">{t("We'll get back to you as soon as possible.", "سنرد عليك في أقرب وقت ممكن.")}</p>
                      <button onClick={() => setSent(false)} className="text-amber font-semibold text-sm hover:underline cursor-pointer">
                        {t("Send another message", "أرسل رسالة أخرى")}
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-name" className="sr-only">Name</label>
                          <input id="contact-name" type="text" placeholder={t("Your Name", "اسمك")} value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className={inputCls} />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="sr-only">Email</label>
                          <input id="contact-email" type="email" placeholder={t("Your Email", "بريدك الإلكتروني")} value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className={inputCls} dir="ltr" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className="sr-only">Subject</label>
                        <input id="contact-subject" type="text" placeholder={t("Subject", "الموضوع")} value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className={inputCls} />
                      </div>
                      <div>
                        <label htmlFor="contact-message" className="sr-only">Message</label>
                        <textarea id="contact-message" placeholder={t("Your Message", "رسالتك")} rows={5} value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className={`${inputCls} resize-none`} />
                      </div>
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl btn-premium text-charcoal font-bold text-sm flex items-center justify-center gap-2 cursor-pointer">
                        {t("Send Message", "إرسال الرسالة")} <Send className="w-4 h-4" />
                      </motion.button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
