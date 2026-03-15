"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    label: "Courses",
    columns: [
      {
        title: "Schools",
        links: [
          { label: "Law School", href: "/courses#law" },
          { label: "School of Management", href: "/courses#management" },
          { label: "School of Engineering", href: "/courses#engineering" },
          { label: "School of CSE", href: "/courses#cse" },
          { label: "Social Sciences & Liberal Arts", href: "/courses#social-sciences" },
          { label: "Hospitality & Services", href: "/courses#hospitality" },
        ],
      },
      {
        title: "Programs",
        links: [
          { label: "Undergraduate", href: "/admissions#undergraduate" },
          { label: "Postgraduate", href: "/admissions#postgraduate" },
          { label: "MBA", href: "/admissions#mba" },
          { label: "PhD / Doctoral", href: "/admissions#doctoral" },
        ],
      },
      {
        title: "Campuses",
        links: [
          { label: "IILM Gurugram", href: "/campuses#gurugram" },
          { label: "IILM Greater Noida", href: "/campuses#greater-noida" },
          { label: "IILM Lodhi Road", href: "/campuses#lodhi-road" },
        ],
      },
    ],
  },
  {
    label: "Admissions & AID",
    columns: [
      {
        title: "Apply",
        links: [
          { label: "Undergraduate Admissions", href: "/admissions#undergraduate" },
          { label: "Postgraduate Admissions", href: "/admissions#postgraduate" },
          { label: "MBA Admissions", href: "/admissions#mba" },
          { label: "Doctoral Admissions", href: "/admissions#doctoral" },
        ],
      },
      {
        title: "Aid & Resources",
        links: [
          { label: "Scholarships 2026", href: "/admissions#scholarships" },
          { label: "Programme Fee 2026", href: "/admissions#fees" },
          { label: "IILM Brochure", href: "/admissions#brochure" },
          { label: "Application Portal", href: "https://admissions.iilm.edu" },
        ],
      },
    ],
  },
  {
    label: "About Us",
    columns: [
      {
        title: "Institution",
        links: [
          { label: "About IILM", href: "/about" },
          { label: "Advisory Board", href: "/about#advisory" },
          { label: "Faculty", href: "/about#faculty" },
          { label: "Centres of Excellence", href: "/about#centres" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "Alumni Network", href: "/alumni" },
          { label: "Global Partners", href: "/about#global" },
          { label: "Careers at IILM", href: "/careers" },
        ],
      },
    ],
  },
  {
    label: "Life at IILM",
    columns: [
      {
        title: "Campus Life",
        links: [
          { label: "Residences", href: "/life-at-iilm#residences" },
          { label: "Clubs & Societies", href: "/life-at-iilm#clubs" },
          { label: "Food Services", href: "/life-at-iilm#food" },
          { label: "Events", href: "/life-at-iilm#events" },
        ],
      },
    ],
  },
  { label: "Placements", href: "/placements", columns: [] },
  { label: "Contact", href: "/contact", columns: [] },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-[0_2px_30px_rgba(13,27,62,0.15)] py-2"
          : "bg-navy/90 backdrop-blur-md py-3"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
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
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative nav-item"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors rounded-md hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ) : (
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/85 hover:text-white transition-colors rounded-md hover:bg-white/10">
                  {item.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${
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
                  className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-[0_20px_60px_rgba(13,27,62,0.18)] border border-slate-100 overflow-hidden ${
                    activeDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : ""
                  }`}
                  style={{ minWidth: item.columns.length > 2 ? "640px" : "400px" }}
                >
                  <div
                    className={`grid gap-0 divide-x divide-slate-100 ${
                      item.columns.length === 3 ? "grid-cols-3" : "grid-cols-2"
                    }`}
                  >
                    {item.columns.map((col) => (
                      <div key={col.title} className="p-6">
                        <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
                          {col.title}
                        </p>
                        <ul className="space-y-1">
                          {col.links.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="block text-sm text-slate-600 hover:text-navy font-medium py-1 hover:translate-x-1 transition-all"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://admissions.iilm.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gold text-navy text-sm font-semibold rounded-full hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/30 active:scale-95"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
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
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-white/85 font-medium rounded-lg hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <details className="group">
                    <summary className="px-4 py-3 text-white/85 font-medium rounded-lg hover:bg-white/10 cursor-pointer list-none flex justify-between items-center">
                      {item.label}
                      <svg className="w-4 h-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="pl-4 pb-2">
                      {item.columns?.map((col) => (
                        <div key={col.title} className="mb-3">
                          <p className="px-4 py-1 text-xs font-semibold text-gold/80 uppercase tracking-wider">
                            {col.title}
                          </p>
                          {col.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="block px-4 py-2 text-sm text-white/70 hover:text-white"
                              onClick={() => setMobileOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </details>
                )}
              </div>
            ))}
            <div className="pt-3 px-4">
              <Link
                href="https://admissions.iilm.edu"
                className="block w-full text-center py-3 bg-gold text-navy font-semibold rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
