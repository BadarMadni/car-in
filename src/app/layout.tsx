import type { Metadata } from "next";
import { Outfit, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "كارإن | Car In — رحلتك، على طريقتك",
  description:
    "خدمة نقل متميزة توفر رحلات موثوقة ومريحة وآمنة في جميع أنحاء المملكة العربية السعودية. Premium transport service across Saudi Arabia.",
  keywords: "taxi, cab, transport, airport transfer, Saudi Arabia, Riyadh, Dammam, تاكسي, نقل, المملكة العربية السعودية",
  openGraph: {
    title: "كارإن | Car In — رحلتك، على طريقتك",
    description: "خدمة نقل متميزة في المملكة العربية السعودية",
    type: "website",
    locale: "ar_SA",
    siteName: "كارإن",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${outfit.variable} ${notoArabic.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col antialiased"
        style={{ fontFamily: "var(--font-arabic), var(--font-outfit), sans-serif" }}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
