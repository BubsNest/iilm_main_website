"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

type NavLink = { label: string; href: string };
type NavColumn = { title: string; links: NavLink[] };
type NavItem = {
  label: string;
  href?: string;
  columns: NavColumn[];
};

const navItems: NavItem[] = [
  {
    label: "About",
    columns: [
      {
        title: "Institution",
        links: [
          { label: "About IILM", href: "/about" },
          { label: "University Leadership", href: "/leadership" },
          { label: "Faculty", href: "/faculty" },
          { label: "Research", href: "/research" },
          { label: "Alumni", href: "/alumni" },
        ],
      },
    ],
  },
  {
    label: "Campuses",
    columns: [
      {
        title: "Our Campuses",
        links: [
          { label: "IILM Gurugram", href: "/campuses/gurugram" },
          { label: "Greater Noida", href: "/campuses/greater-noida" },
          { label: "Lodhi Road Delhi", href: "/campuses/lodhi-road" },
          { label: "Lucknow", href: "/campuses/lucknow" },
          { label: "Jaipur", href: "/campuses/jaipur" },
        ],
      },
    ],
  },
  {
    label: "Programmes",
    columns: [
      {
        title: "By Level",
        links: [
          { label: "Undergraduate", href: "/courses#undergraduate" },
          { label: "Postgraduate", href: "/courses#postgraduate" },
          { label: "MBA", href: "/courses#mba" },
          { label: "Doctoral & Research", href: "/courses#doctoral" },
        ],
      },
      {
        title: "Special",
        links: [
          { label: "Executive Education", href: "/executive-education" },
          { label: "Program Finder", href: "/courses" },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    columns: [
      {
        title: "Apply",
        links: [
          { label: "How to Apply", href: "/admissions" },
          { label: "Eligibility & Exams", href: "/admissions#eligibility" },
          { label: "Scholarships", href: "/admissions#scholarships" },
          { label: "International Admissions", href: "/admissions#international" },
          { label: "Download Brochure", href: "/admissions#brochure" },
        ],
      },
    ],
  },
  {
    label: "Campus Life",
    columns: [
      {
        title: "Experience",
        links: [
          { label: "Facilities & Labs", href: "/campus-life#facilities" },
          { label: "Residential Life", href: "/campus-life#residential" },
          { label: "Sports & Wellness", href: "/campus-life#sports" },
          { label: "Student Societies", href: "/campus-life#societies" },
          { label: "News & Events", href: "/news-events" },
        ],
      },
    ],
  },
  {
    label: "Industry & Global",
    columns: [
      {
        title: "Connect",
        links: [
          { label: "Industry Partnerships", href: "/industry" },
          { label: "Global Study Programmes", href: "/industry#global" },
          { label: "Placements", href: "/placements" },
          { label: "Entrepreneurship", href: "/entrepreneurship" },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top announcement bar */}
      <div className="hidden md:block bg-navy-light border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 flex items-center justify-center gap-6 text-xs text-white/60">
          <a href="/admissions" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse flex-shrink-0" />
            <span className="text-orange-400 font-semibold tracking-wide group-hover:text-orange-300 transition-colors">
              Admissions 2026 Open
            </span>
            <span className="text-orange-400/60 text-[10px] border border-orange-400/40 rounded px-1 py-0.5 font-medium group-hover:border-orange-400/70 transition-colors">
              Apply Now →
            </span>
          </a>
          <span className="text-white/20">|</span>
          <a href="https://wa.me/917011772713" className="hover:text-white transition-colors flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            +91-7011772713
          </a>
          <span className="text-white/20">|</span>
          <a href="mailto:admissions.iilmu@iilm.edu" className="hover:text-white transition-colors">
            admissions.iilmu@iilm.edu
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-navy shadow-[0_2px_30px_rgba(13,27,62,0.25)] py-2"
            : "bg-navy/95 backdrop-blur-md py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="https://iilm.edu/demo2020/wp-content/uploads/2026/01/iilmu-iilmlr-logo.png"
              alt="IILM University"
              width={180}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative nav-item group"
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current);
                  setActiveDropdown(item.label);
                }}
                onMouseLeave={() => {
                  closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
                }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors rounded-md hover:bg-white/10 inline-block"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors rounded-md hover:bg-white/10">
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                {/* Mega Dropdown */}
                {item.columns && item.columns.length > 0 && (
                  <div
                    className="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 pt-2 bg-transparent"
                    style={{ minWidth: item.columns.length > 1 ? "460px" : "260px" }}
                  >
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                    {/* Top accent bar */}
                    <div className="h-1 bg-gradient-to-r from-navy via-blue to-maroon" />
                    <div
                      className={`grid gap-0 ${
                        item.columns.length === 2
                          ? "grid-cols-2 divide-x divide-slate-100"
                          : item.columns.length >= 3
                          ? "grid-cols-3 divide-x divide-slate-100"
                          : "grid-cols-1"
                      }`}
                    >
                      {item.columns.map((col) => (
                        <div key={col.title} className="p-5">
                          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">
                            {col.title}
                          </p>
                          <ul className="space-y-0.5">
                            {col.links.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-navy font-medium py-1.5 px-2 rounded-lg hover:bg-slate-50 transition-all group/link"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <span className="w-1 h-1 rounded-full bg-maroon/40 group-hover/link:bg-maroon transition-colors flex-shrink-0" />
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/admissions"
              className="text-sm text-white/70 hover:text-white transition-colors font-medium"
            >
              Enquire
            </Link>
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-maroon text-white text-sm font-semibold rounded-full hover:bg-maroon-light transition-all hover:shadow-lg hover:shadow-maroon/30 active:scale-95"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setMobileExpanded(null);
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Slide-Down Menu */}
      <div
        className={`lg:hidden bg-navy border-t border-white/10 overflow-y-auto transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-white/5 last:border-0">
              {item.href ? (
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-white/85 font-medium rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <div>
                  <button
                    className="w-full flex justify-between items-center px-4 py-3 text-white/85 font-medium rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileExpanded === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Accordion content */}
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileExpanded === item.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 pb-3">
                      {item.columns.map((col) => (
                        <div key={col.title} className="mb-3">
                          <p className="px-4 py-1 text-xs font-semibold text-maroon/80 uppercase tracking-wider">
                            {col.title}
                          </p>
                          {col.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="flex items-center gap-2 px-4 py-2 text-sm text-white/65 hover:text-white transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTAs */}
          <div className="pt-4 px-4 space-y-3">
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now 2026
            </Link>
            <Link
              href="/admissions"
              className="block w-full text-center py-3 border border-white/20 text-white/80 rounded-full hover:bg-white/10 transition-colors text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Enquire
            </Link>
            <div className="text-center text-xs text-white/40 pb-2">
              <a href="https://wa.me/917011772713" className="hover:text-white/60 transition-colors">
                WhatsApp: +91-7011772713
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
