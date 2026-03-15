"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProgramFinder from "@/components/ProgramFinder";

/* ─── DATA ─────────────────────────────────────────────────────── */

const heroStats = [
  { value: "15,000+", label: "Students" },
  { value: "500+", label: "Hiring Companies" },
  { value: "5", label: "Campuses" },
  { value: "100%", label: "Placement" },
  { value: "₹26 LPA", label: "Highest Package" },
];

const whyCards = [
  {
    title: "AI-Integrated Curriculum",
    desc: "AI skills embedded across every programme — at IILM, AI is not optional, it's the degree.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "500+ Hiring Companies",
    desc: "Fortune 500 to fast-growing startups — IILM's placement network delivers real career outcomes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
  {
    title: "30+ Global Partners",
    desc: "Study abroad, semester exchange, and dual degree pathways with universities across 15+ countries.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "FYUP Programme",
    desc: "India's most flexible Four-Year Undergraduate Programme with multiple exit and entry options.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "MBA + CII Logistics",
    desc: "India's only MBA in Logistics & Supply Chain in partnership with CII — the Confederation of Indian Industry.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: "Startup Incubator",
    desc: "ECELL and the Centre for Entrepreneurship & Innovation empower students to build and launch ventures.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const campuses = [
  {
    name: "IILM University",
    city: "Gurugram",
    type: "University Campus",
    slug: "gurugram",
    schools: ["Law School", "School of Management", "School of Engineering", "School of CSE", "Liberal Arts"],
    featured: true,
    image: "https://iilm.edu.in/uploads/all/775/conversions/Gurgam-full-full.webp",
  },
  {
    name: "IILM University",
    city: "Greater Noida",
    type: "University Campus",
    slug: "greater-noida",
    schools: ["School of Management", "School of Engineering", "School of CSE", "B.Ed"],
    featured: true,
    image: "https://iilm.edu.in/uploads/all/779/conversions/noida-(1)-full-full.webp",
  },
  {
    name: "IILM",
    city: "Lodhi Road, Delhi",
    type: "PG Campus",
    slug: "lodhi-road",
    schools: ["PGDM", "MBA", "Executive Education"],
    featured: false,
    image: "https://iilm.edu.in/uploads/all/777/conversions/lodai-road-full-full.webp",
  },
  {
    name: "IILM",
    city: "Lucknow",
    type: "Campus",
    slug: "lucknow",
    schools: ["BBA", "B.Com", "MBA"],
    featured: false,
    image: "https://iilm.edu.in/uploads/all/778/conversions/luckhnow-full-full.webp",
  },
  {
    name: "IILM",
    city: "Jaipur",
    type: "Campus",
    slug: "jaipur",
    schools: ["BBA", "B.Com", "Law"],
    featured: false,
    image: "https://iilm.edu.in/uploads/all/776/conversions/jaipur-(1)-full-full.webp",
  },
];

const partnerLogos = [
  "Deloitte", "KPMG", "EY", "TCS", "Infosys",
  "Wipro", "Amazon", "HDFC", "Axis Bank", "HUL",
  "Flipkart", "ITC", "Nestlé", "L&T", "Hero MotoCorp",
  "OYO", "Paytm", "Zomato", "Mahindra", "Bosch",
];

const placementStats = [
  { value: "100%", label: "Placement Rate" },
  { value: "₹26 LPA", label: "Highest Package" },
  { value: "50,000+", label: "Alumni" },
  { value: "500+", label: "Hiring Companies" },
];

const uniqueProgrammes = [
  {
    badge: "New in 2026",
    title: "Four-Year Undergraduate Programme (FYUP)",
    desc: "India's most flexible UG degree — multidisciplinary by design, with multiple exit options, skill-integrated learning, and a research pathway in Year 4. Aligned with NEP 2020.",
    color: "from-blue to-blue-light",
    href: "/courses#undergraduate",
  },
  {
    badge: "Industry Partnership",
    title: "MBA in Logistics & Supply Chain",
    desc: "In formal partnership with CII (Confederation of Indian Industry). Industry mentors, live projects, and guaranteed industry exposure in India's fastest-growing sector.",
    color: "from-navy to-navy-light",
    href: "/courses#mba",
  },
  {
    badge: "Career Guarantee",
    title: "Structured Internship Programme",
    desc: "Every IILM student completes at least one structured, industry-embedded internship. Placements begin in Semester 3 for MBA and Year 2 for UG students.",
    color: "from-maroon to-maroon-light",
    href: "/placements",
  },
];

const campusLifeTiles = [
  {
    title: "Advanced Labs",
    desc: "AI & Robotics labs, Moot Courts, Trading floors, Design studios and more.",
    href: "/campus-life#facilities",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Sports & Fitness",
    desc: "Olympic-standard sports facilities, gym, basketball courts and wellness centre.",
    href: "/campus-life#sports",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Student Societies",
    desc: "50+ clubs — from debate and drama to coding, finance, and social impact.",
    href: "/campus-life#societies",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Residential Life",
    desc: "Safe, modern hostels with all amenities — your home away from home.",
    href: "/campus-life#residential",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Manish Kathuria",
    role: "IILM Alumni",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2020/06/Manish-Kathuria-IILM-alumni-150x150.jpg",
    quote: "IILM gave me more than a degree — it gave me a network, a mindset, and the confidence to build a career I'm proud of. The faculty and industry exposure were second to none.",
  },
  {
    name: "Mohit Chopra",
    role: "IILM Alumni",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2020/06/Mohit-Chopra-300x300-1-150x150.jpg",
    quote: "The real-world projects, internship support, and mentorship at IILM set me apart in every interview. My IILM experience was a true launchpad for my career.",
  },
  {
    name: "Kapil Chanana",
    role: "IILM Alumni",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2020/06/Kapil-Chanana-300x300-1-150x150.jpg",
    quote: "What I valued most about IILM was the balance — academic rigour, industry connect, and a campus culture that pushed you to grow every single day.",
  },
];

const researchCentres = [
  {
    name: "Emotional Intelligence",
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>),
    desc: "Developing self-aware, empathetic leaders through structured EQ programmes and applied research.",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
  },
  {
    name: "Teaching, Research & Learning",
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>),
    desc: "Advancing pedagogy and research to keep IILM at the forefront of academic excellence.",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-100",
  },
  {
    name: "Entrepreneurship & Innovation",
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>),
    desc: "ECELL — nurturing student entrepreneurs with mentorship, seed funding, and incubation support.",
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-100",
  },
  {
    name: "Technology",
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>),
    desc: "AI, ML, data science and emerging tech applied to real-world problems and industry research.",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
  },
];

const newsItems = [
  {
    date: "March 10, 2026",
    category: "Admissions",
    title: "IILM University Announces Admissions 2026 — Applications Now Open",
    desc: "Apply for MBA, BBA LLB, B.Tech, and 20+ other programmes across 5 campuses. Merit scholarships available.",
  },
  {
    date: "February 28, 2026",
    category: "Placements",
    title: "IILM Placement Season 2025–26: 500+ Companies Visit Campus",
    desc: "Record placements with highest package of ₹26 LPA. Deloitte, Amazon, HDFC among top recruiters.",
  },
  {
    date: "February 14, 2026",
    category: "Research",
    title: "IILM Launches New Centre for AI in Legal Education",
    desc: "A first-of-its-kind initiative integrating AI tools into law school curriculum, in partnership with leading LegalTech firms.",
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background video */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/v_F4hsobpX4?autoplay=1&mute=1&loop=1&playlist=v_F4hsobpX4&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&disablekb=1"
            allow="autoplay; encrypted-media"
            className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ border: "none" }}
            title="IILM University"
          />
        </div>
        {/* Fallback image while video loads */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://iilm.edu/demo2020/wp-content/uploads/2023/07/pagheadr0_11zon.jpg"
            alt="IILM University Campus"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/75 to-navy/85" />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-36 pb-36">
          {/* Eyebrow badge */}
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-sm font-semibold tracking-widest uppercase mb-8 text-orange-400 hover:bg-orange-500/30 hover:border-orange-400/60 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Admissions 2026 Open
            <span className="text-orange-400/70">→</span>
          </Link>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            India&apos;s Multidisciplinary University{" "}
            <span className="text-blue-gradient">for the Age of AI Intelligence</span>
          </h1>

          <p className="text-base sm:text-lg text-white/65 max-w-3xl mx-auto mb-3 leading-relaxed">
            Management · Law · Engineering · CSE · Psychology · Design · Communication · Liberal Arts · Sciences
          </p>
          <p className="text-sm text-white/45 mb-10">
            Gurugram · Greater Noida · Lodhi Road · Lucknow · Jaipur
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/courses"
              className="px-8 py-3.5 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all text-sm"
            >
              Explore Programmes
            </Link>
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-maroon text-white font-semibold hover:bg-maroon-light transition-all shadow-lg shadow-maroon/25 hover:shadow-maroon/40 text-sm"
            >
              Apply Now 2026 →
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-navy/60 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-4 py-5 grid grid-cols-3 sm:grid-cols-5 gap-4">
            {heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white mb-0.5">{s.value}</div>
                <div className="text-[10px] sm:text-xs text-white/45 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. 5 CAMPUSES
      ══════════════════════════════════════════════════ */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Our Campuses</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">5 Campuses. One IILM Network.</h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">
              Delhi NCR · Lucknow · Jaipur — a connected ecosystem of learning, research, and placement.
            </p>
          </div>

          {/* Featured 2 + smaller 3 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {campuses.filter((c) => c.featured).map((campus) => (
              <div
                key={campus.city}
                className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col"
              >
                {campus.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image src={campus.image} alt={`${campus.name} ${campus.city}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}
                {!campus.image && <div className="h-1.5 bg-gradient-to-r from-navy via-blue to-maroon" />}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block text-xs font-semibold text-blue uppercase tracking-widest bg-blue/10 px-2.5 py-1 rounded-full mb-2">
                        {campus.type}
                      </span>
                      <h3 className="text-xl font-bold text-navy">
                        {campus.name}, <span className="text-blue">{campus.city}</span>
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {campus.schools.map((school) => (
                      <span key={school} className="text-xs bg-slate-50 border border-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                        {school}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/campuses/${campus.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-blue transition-colors group"
                  >
                    Explore Campus
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {campuses.filter((c) => !c.featured).map((campus) => (
              <div
                key={campus.city}
                className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col"
              >
                {campus.image && (
                  <div className="relative h-36 overflow-hidden">
                    <Image src={campus.image} alt={`${campus.name} ${campus.city}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  </div>
                )}
                {!campus.image && <div className="h-1 bg-gradient-to-r from-navy to-blue" />}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-blue uppercase tracking-wide mb-1">{campus.type}</span>
                  <h3 className="text-lg font-bold text-navy mb-3">
                    {campus.name}, {campus.city}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-5 flex-1">
                    {campus.schools.map((school) => (
                      <span key={school} className="text-xs bg-slate-50 border border-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                        {school}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/campuses/${campus.slug}`}
                    className="text-sm font-semibold text-navy hover:text-blue transition-colors flex items-center gap-1 group"
                  >
                    Explore Campus →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. INDUSTRY & GLOBAL
      ══════════════════════════════════════════════════ */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Industry & Global</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Built with Industry. Recognised Globally.
            </h2>
          </div>

          {/* 3-column pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>),
                title: "Industry Partnerships",
                stat: "500+ Companies",
                desc: "Deep, long-term partnerships with Fortune 500 companies and fast-growing Indian firms that recruit exclusively from IILM campuses.",
              },
              {
                icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>),
                title: "Global Connections",
                stat: "30+ Universities",
                desc: "Partner universities across Europe, North America, and Asia — enabling semester exchange, dual degrees, and summer immersion programmes.",
              },
              {
                icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>),
                title: "CII Partnership",
                stat: "MBA Logistics",
                desc: "India's only MBA in Logistics & Supply Chain delivered in partnership with CII — the Confederation of Indian Industry, the nation's premier business body.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition-colors">
                <div className="text-navy mb-4 flex">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                <p className="text-blue font-semibold text-sm mb-3">{item.stat}</p>
                <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Partner logos */}
          <div>
            <p className="text-xs font-semibold text-white/40 uppercase tracking-widest text-center mb-6">
              Our Hiring Partners
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {partnerLogos.map((logo) => (
                <span
                  key={logo}
                  className="px-4 py-2 bg-white/8 border border-white/10 rounded-full text-sm text-white/70 hover:bg-white/15 hover:text-white transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. WHY IILM
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Why Choose IILM</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Built for the World You&apos;re Entering</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="card-hover border border-slate-100 rounded-2xl p-6 bg-white hover:border-blue/20 hover:shadow-lg transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-5 border border-navy/10">
                  {card.icon}
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{card.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. PROGRAM FINDER
      ══════════════════════════════════════════════════ */}
      <section className="bg-slate py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Discover Your Path</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Find Your Programme</h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">
              Filter by level, discipline, or keyword to find the perfect programme across IILM&apos;s 5 campuses.
            </p>
          </div>
          <ProgramFinder />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. PLACEMENTS
      ══════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://iilm.edu/demo2020/wp-content/uploads/2023/07/iilmu-placement-banner_11zon-2.jpg"
            alt="IILM Placements"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/82" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Placements 2025–26</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight">
            500+ Companies. Limitless Careers.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {placementStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>

          <Link
            href="/placements"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all shadow-lg shadow-maroon/30"
          >
            View Placement Records →
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. UNIQUE PROGRAMMES
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Programmes That Stand Apart</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Only at IILM</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {uniqueProgrammes.map((prog) => (
              <div key={prog.title} className="card-hover rounded-2xl overflow-hidden border border-slate-100 flex flex-col">
                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${prog.color}`} />
                <div className="p-7 flex flex-col flex-1">
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 px-2.5 py-1 rounded-full bg-gradient-to-r ${prog.color} text-white w-fit`}>
                    {prog.badge}
                  </span>
                  <h3 className="text-lg font-bold text-navy mb-3 leading-snug">{prog.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-6">{prog.desc}</p>
                  <Link
                    href={prog.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-blue transition-colors group"
                  >
                    Learn More
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          8. CAMPUS LIFE PREVIEW
      ══════════════════════════════════════════════════ */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Life at IILM</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Life Beyond the Classroom</h2>
            <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">
              IILM campuses are vibrant communities where learning, culture, sport, and friendship all flourish.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {campusLifeTiles.map((tile) => (
              <Link
                key={tile.title}
                href={tile.href}
                className="card-hover group bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue/20 flex flex-col"
              >
                <div className="w-11 h-11 rounded-xl bg-navy text-white flex items-center justify-center mb-5 group-hover:bg-blue transition-colors">
                  {tile.icon}
                </div>
                <h3 className="text-base font-semibold text-navy mb-2 group-hover:text-blue transition-colors">
                  {tile.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">{tile.desc}</p>
                <div className="mt-4 text-xs font-semibold text-blue flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          9. TESTIMONIALS — VOICES OF EXCELLENCE
      ══════════════════════════════════════════════════ */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Student Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Voices of Excellence</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 flex flex-col">
                {/* Quote icon */}
                <svg className="w-8 h-8 text-blue/20 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-slate-600 text-sm leading-relaxed italic flex-1 mb-6">{t.quote}</p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue/20">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          10. RESEARCH & INNOVATION
      ══════════════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Research at IILM</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              PhD Programmes &amp; Centres of Excellence
            </h2>
            <p className="text-slate-500 mt-3 text-sm max-w-2xl mx-auto">
              IILM&apos;s four research centres drive applied scholarship across emotional intelligence, pedagogy, entrepreneurship, and technology.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {researchCentres.map((c) => (
              <div
                key={c.name}
                className={`card-hover p-6 rounded-2xl bg-gradient-to-br ${c.color} border ${c.border}`}
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="text-sm font-bold text-navy mb-2">{c.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-7 py-3 border border-navy/20 rounded-full text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-all"
            >
              Explore Research →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          11. NEWS & EVENTS
      ══════════════════════════════════════════════════ */}
      <section className="bg-slate py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-2">Latest</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy">News &amp; Events</h2>
            </div>
            <Link
              href="/news-events"
              className="text-sm font-semibold text-navy hover:text-blue transition-colors flex items-center gap-1 group"
            >
              View All
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <div key={item.title} className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-100">
                <div className="h-1 bg-gradient-to-r from-navy to-blue" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-semibold text-blue bg-blue/10 px-2.5 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">{item.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2 leading-snug">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          12. ENQUIRY / CTA
      ══════════════════════════════════════════════════ */}
      <section className="bg-navy py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Admissions 2026</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Begin Your IILM Journey Today</h2>
            <p className="text-white/55 mt-3 text-sm max-w-xl mx-auto">
              Join 15,000+ students building the future. Applications for 2026 intake are open across all 5 campuses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: CTAs */}
            <div className="space-y-5">
              <a
                href="https://admissions.iilm.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full px-6 py-4 bg-maroon text-white font-semibold rounded-2xl hover:bg-maroon-light transition-all group"
              >
                <div>
                  <div className="text-base font-bold">Apply Now — 2026 Intake</div>
                  <div className="text-xs text-white/70 mt-0.5">Official IILM admissions portal</div>
                </div>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="/admissions#brochure"
                className="flex items-center justify-between w-full px-6 py-4 bg-white/8 border border-white/15 text-white font-semibold rounded-2xl hover:bg-white/12 transition-all group"
              >
                <div>
                  <div className="text-base font-bold">Download Brochure</div>
                  <div className="text-xs text-white/55 mt-0.5">Prospectus 2026 — All Programmes</div>
                </div>
                <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>

              <div className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
                <p className="text-xs text-white/40 uppercase tracking-widest mb-3">Direct Contact</p>
                <a href="https://wa.me/917011772713" className="flex items-center gap-3 text-white/75 hover:text-white transition-colors mb-2">
                  <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="text-sm">WhatsApp: +91-7011772713</span>
                </a>
                <a href="mailto:admissions.iilmu@iilm.edu" className="flex items-center gap-3 text-white/75 hover:text-white transition-colors text-sm">
                  <svg className="w-4 h-4 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  admissions.iilmu@iilm.edu
                </a>
              </div>
            </div>

            {/* Right: Quick enquiry form */}
            <EnquiryInlineForm />
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Inline Enquiry Form (client component within this file) ── */
function EnquiryInlineForm() {
  const [form, setForm] = useState({ name: "", phone: "", programme: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[300px]">
        <div className="w-14 h-14 rounded-full bg-blue/20 flex items-center justify-center mb-4">
          <svg className="w-7 h-7 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-lg mb-2">Thank You!</h3>
        <p className="text-white/60 text-sm leading-relaxed">
          We&apos;ll reach out within 24 hours. You can also WhatsApp us at{" "}
          <a href="https://wa.me/917011772713" className="text-blue hover:text-white underline">
            +91-7011772713
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/10 rounded-2xl p-7 space-y-4"
    >
      <h3 className="text-white font-bold text-lg mb-1">Quick Enquiry</h3>
      <p className="text-white/45 text-xs mb-5">We&apos;ll get back to you within 24 hours.</p>

      <div>
        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
          Your Name *
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="e.g. Rahul Gupta"
          className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue/40 focus:border-blue/40 transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
          Phone / WhatsApp *
        </label>
        <input
          type="tel"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="+91 98765 43210"
          className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:ring-2 focus:ring-blue/40 focus:border-blue/40 transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/50 uppercase tracking-wider mb-1.5">
          Programme of Interest *
        </label>
        <select
          required
          value={form.programme}
          onChange={(e) => setForm({ ...form, programme: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue/40 focus:border-blue/40 transition-all"
        >
          <option value="" className="bg-navy text-white">Select a programme</option>
          <option value="bba-llb" className="bg-navy text-white">BBA LLB (Hons)</option>
          <option value="ba-llb" className="bg-navy text-white">BA LLB (Hons)</option>
          <option value="mba" className="bg-navy text-white">MBA</option>
          <option value="mba-logistics" className="bg-navy text-white">MBA Logistics & Supply Chain</option>
          <option value="bba" className="bg-navy text-white">BBA</option>
          <option value="btech-cse" className="bg-navy text-white">B.Tech CSE</option>
          <option value="btech-me" className="bg-navy text-white">B.Tech Mechanical</option>
          <option value="ba-psychology" className="bg-navy text-white">BA Psychology</option>
          <option value="phd" className="bg-navy text-white">PhD / Doctoral</option>
          <option value="other" className="bg-navy text-white">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-maroon text-white font-semibold rounded-xl hover:bg-maroon-light transition-all active:scale-98 text-sm"
      >
        Submit Enquiry →
      </button>

      <p className="text-white/30 text-xs text-center">
        Or WhatsApp us directly at{" "}
        <a href="https://wa.me/917011772713" className="text-white/50 hover:text-white underline">
          +91-7011772713
        </a>
      </p>
    </form>
  );
}
