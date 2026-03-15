import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import EnquiryForm from "@/components/EnquiryForm";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IILM University – Multidisciplinary Education for the Age of AI",
  description:
    "IILM University is a leading multidisciplinary university with 5 campuses across Delhi NCR, Lucknow, and Jaipur. Offering programmes in Management, Law, Engineering, CSE, Psychology, Design, Liberal Arts and more. 12,000+ students, 400+ hiring companies, 30+ global partners. Admissions 2026 open.",
  keywords:
    "IILM University, MBA, BBA LLB, B.Tech, engineering, law, Delhi NCR, Gurugram, Greater Noida, Lucknow, Jaipur, admissions 2026, multidisciplinary university India",
  openGraph: {
    title: "IILM University – Multidisciplinary Education for the Age of AI",
    description:
      "A leading multidisciplinary university with 5 campuses across Delhi NCR, Lucknow, and Jaipur. Admissions 2026 open.",
    url: "https://iilm.edu",
    siteName: "IILM University",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IILM University – Multidisciplinary Education for the Age of AI",
    description:
      "5 campuses · Management · Law · Engineering · CSE · Psychology · Liberal Arts. Admissions 2026 open.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
        <EnquiryForm />
      </body>
    </html>
  );
}
