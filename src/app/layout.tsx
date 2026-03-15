import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IILM University – Education for the Age of AI Intelligence",
  description:
    "IILM University offers world-class education across Law, Management, Engineering, and more. 12,000+ students, 400+ hiring companies, 30+ global partners. Campuses in Gurugram, Greater Noida & New Delhi.",
  keywords: "IILM, university, MBA, engineering, law, Delhi NCR, admissions 2026",
  openGraph: {
    title: "IILM University",
    description: "Education for the Age of AI Intelligence",
    url: "https://iilm.edu",
    siteName: "IILM University",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
