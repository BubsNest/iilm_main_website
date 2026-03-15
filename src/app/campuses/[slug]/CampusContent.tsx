"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Campus, FacultyMember } from "./campusData";

// ── Sub-nav sections ──────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "programmes", label: "Programmes" },
  { id: "faculty", label: "Faculty" },
  { id: "placements", label: "Placements" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
] as const;

// ── Helpers ───────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

// Cycle through a small palette for fallback avatar colours
const AVATAR_COLOURS = [
  "bg-[#003366]",
  "bg-[#8B0000]",
  "bg-[#1a5276]",
  "bg-[#6E2594]",
  "bg-[#145a32]",
  "bg-[#784212]",
];

function avatarColour(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLOURS[Math.abs(hash) % AVATAR_COLOURS.length];
}

function primaryEmail(email: Campus["email"]): string {
  if (typeof email === "string") return email;
  return Object.values(email)[0] ?? "";
}

// ── Faculty Card ──────────────────────────────────────────────────────────────

function FacultyCard({ member }: { member: FacultyMember }) {
  const [imgError, setImgError] = useState(false);
  const showFallback = !member.photo || imgError;

  return (
    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white border border-slate-100 hover:shadow-md transition-shadow">
      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 mb-3 relative">
        {showFallback ? (
          <div
            className={`w-full h-full flex items-center justify-center text-white font-bold text-lg ${avatarColour(member.name)}`}
          >
            {getInitials(member.name)}
          </div>
        ) : (
          <Image
            src={member.photo!}
            alt={member.name}
            fill
            className="object-cover"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <p className="text-sm font-bold text-navy leading-snug">{member.name}</p>
      <p className="text-xs text-slate-500 mt-0.5 leading-snug">{member.designation}</p>
    </div>
  );
}

// ── Not Found ─────────────────────────────────────────────────────────────────

function NotFound() {
  return (
    <div className="bg-navy min-h-screen flex items-center justify-center pt-28">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Campus Not Found</h1>
        <p className="text-white/60 mb-8">We couldn&apos;t find a campus with that name.</p>
        <Link
          href="/campuses"
          className="inline-block px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
        >
          View All Campuses
        </Link>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function CampusContent({ campus }: { campus: Campus | null }) {
  const [activeSection, setActiveSection] = useState<string>("overview");
  const [activeProgTab, setActiveProgTab] = useState<number>(0);
  const [activeFacDept, setActiveFacDept] = useState<number>(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection observer to highlight active sub-nav item
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const ids = NAV_ITEMS.map((n) => n.id);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  if (!campus) return <NotFound />;

  const emailStr = primaryEmail(campus.email);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative min-h-[520px] flex flex-col justify-end overflow-hidden">
        {campus.heroVideo ? (
          <>
            {/* YouTube background video */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${campus.heroVideo}?autoplay=1&mute=1&loop=1&playlist=${campus.heroVideo}&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&disablekb=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen={false}
                className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full"
                style={{ border: "none" }}
                title={campus.name}
              />
            </div>
            {/* Fallback image shown while video loads */}
            {campus.image && (
              <div className="absolute inset-0 -z-10">
                <Image src={campus.image} alt={campus.name} fill className="object-cover" priority />
              </div>
            )}
          </>
        ) : campus.image ? (
          <div className="absolute inset-0">
            <Image src={campus.image} alt={campus.name} fill className="object-cover" priority />
          </div>
        ) : (
          <div className="absolute inset-0 bg-navy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/60 to-navy/75" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-36 pb-20 w-full">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">
            {campus.type}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            {campus.name}
          </h1>
          <p className="text-blue text-lg font-medium mb-6">{campus.city}</p>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {campus.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/admissions"
              className="inline-block px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Apply Now →
            </Link>
            {campus.paymentLink ? (
              <a
                href={campus.paymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
              >
                Pay Fees
              </a>
            ) : (
              <a
                href={`mailto:${emailStr}`}
                className="inline-block px-8 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
              >
                Email Admissions
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── 2. STICKY SUB-NAV ────────────────────────────────────────────── */}
      <nav className="sticky top-16 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-none -mx-2 px-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex-shrink-0 px-4 py-4 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? "border-maroon text-maroon"
                    : "border-transparent text-slate-500 hover:text-navy hover:border-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── 3. OVERVIEW ──────────────────────────────────────────────────── */}
      <section id="overview" className="bg-white py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Description + Stats */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Overview</p>
              <h2 className="text-3xl font-bold text-navy mb-6">About This Campus</h2>
              <p className="text-slate-600 leading-relaxed text-base">{campus.description}</p>

              {/* Director card */}
              {campus.director && (
                <div className="mt-8 flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 w-fit">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 relative">
                    {campus.director.photo ? (
                      <Image src={campus.director.photo} alt={campus.director.name} fill className="object-cover" />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center text-white font-bold ${avatarColour(campus.director.name)}`}>
                        {getInitials(campus.director.name)}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy">{campus.director.name}</p>
                    <p className="text-xs text-slate-500">{campus.director.title}</p>
                  </div>
                </div>
              )}
            </div>

            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">At a Glance</p>
              <div className="grid grid-cols-2 gap-3">
                {campus.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl bg-slate-50 border border-slate-100 p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-navy">{h.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Accreditations */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Accreditations & Recognitions</p>
            <div className="flex flex-wrap gap-2">
              {campus.accreditations.map((acc) => (
                <span
                  key={acc}
                  className="px-4 py-2 rounded-full text-sm font-semibold border border-navy/20 text-navy bg-navy/5"
                >
                  {acc}
                </span>
              ))}
            </div>
          </div>

          {/* Unique Differentiators */}
          {campus.uniqueDifferentiators && campus.uniqueDifferentiators.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Why Choose This Campus</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {campus.uniqueDifferentiators.map((diff) => (
                  <div key={diff} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="w-5 h-5 rounded-full bg-maroon flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">{diff}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── 4. PROGRAMMES ────────────────────────────────────────────────── */}
      <section id="programmes" className="bg-slate-50 py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Academics</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Programmes Offered</h2>
          </div>

          {/* Level tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {campus.programmes.map((prog, idx) => (
              <button
                key={prog.level}
                onClick={() => setActiveProgTab(idx)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeProgTab === idx
                    ? "bg-navy text-white shadow"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-navy hover:text-navy"
                }`}
              >
                {prog.level}
              </button>
            ))}
          </div>

          {/* Programme cards */}
          {campus.programmes[activeProgTab] && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {campus.programmes[activeProgTab].items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-100 p-5 hover:shadow-md transition-shadow"
                >
                  <p className="text-sm font-bold text-navy leading-snug mb-2">{item.name}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.duration && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue/10 text-blue text-xs font-semibold">
                        {item.duration}
                      </span>
                    )}
                    {item.dept && (
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-500 text-xs">
                        {item.dept}
                      </span>
                    )}
                  </div>
                  {item.note && (
                    <p className="text-xs text-slate-500 leading-relaxed">{item.note}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue hover:text-navy transition-colors"
            >
              View All Courses &amp; Eligibility →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. FACULTY ───────────────────────────────────────────────────── */}
      <section id="faculty" className="bg-white py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Our Educators</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Faculty</h2>
          </div>

          {/* Department tabs */}
          {campus.faculty.length > 1 && (
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {campus.faculty.map((dept, idx) => (
                <button
                  key={dept.dept}
                  onClick={() => setActiveFacDept(idx)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFacDept === idx
                      ? "bg-navy text-white shadow"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {dept.dept}
                </button>
              ))}
            </div>
          )}

          {/* Faculty grid */}
          {campus.faculty[activeFacDept] && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {campus.faculty[activeFacDept].members.map((member) => (
                <FacultyCard key={member.name} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── 6. PLACEMENTS ────────────────────────────────────────────────── */}
      <section id="placements" className="bg-slate-50 py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Career Outcomes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Placements</h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
            {[
              { label: "Placement Rate", value: campus.placements.rate },
              ...(campus.placements.average ? [{ label: "Average Package", value: campus.placements.average }] : []),
              ...(campus.placements.highest ? [{ label: "Highest Package", value: campus.placements.highest }] : []),
              { label: "Recruiting Companies", value: campus.placements.companies },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white border border-slate-100 p-6 text-center shadow-sm"
              >
                <p className="text-3xl font-bold text-navy">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Top placed students */}
          {campus.placements.topStudents.length > 0 && (
            <div className="mb-14">
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-5">Top Placed Students</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {campus.placements.topStudents.map((s, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-white border border-slate-100 p-5 flex flex-col gap-1"
                  >
                    <p className="text-sm font-bold text-navy">{s.name}</p>
                    <p className="text-xs text-slate-500">{s.company}</p>
                    {s.package && (
                      <span className="mt-1 self-start inline-block px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-semibold">
                        {s.package}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recruiter logos / tags */}
          <div>
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-5">Top Recruiters</p>
            {campus.placements.recruiterLogos && campus.placements.recruiterLogoBase ? (
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
                {campus.placements.recruiterLogos.map((logo) => {
                  const name = logo.replace(/\.[^.]+$/, "").replace(/-/g, " ");
                  return (
                    <div
                      key={logo}
                      className="rounded-xl bg-white border border-slate-100 p-3 flex items-center justify-center aspect-square grayscale hover:grayscale-0 transition-all relative"
                    >
                      <Image
                        src={campus.placements.recruiterLogoBase! + logo}
                        alt={name}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {campus.placements.topRecruiters.map((r) => (
                  <span
                    key={r}
                    className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-700 font-medium"
                  >
                    {r}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── 7. GALLERY ───────────────────────────────────────────────────── */}
      <section id="gallery" className="bg-white py-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Campus Life</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Gallery</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {campus.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden h-48 sm:h-56 bg-slate-100"
              >
                <Image
                  src={img.url}
                  alt={img.caption}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-3 py-2">
                  <p className="text-white text-xs font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CONTACT ───────────────────────────────────────────────────── */}
      <section id="contact" className="bg-navy py-20 scroll-mt-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact & Admissions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Address & Email */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8 space-y-5">
              <h3 className="text-base font-bold text-white">Address</h3>
              <p className="text-white/70 text-sm leading-relaxed">{campus.address}</p>

              <div>
                <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-1">Email</p>
                {typeof campus.email === "string" ? (
                  <a href={`mailto:${campus.email}`} className="text-white/70 text-sm hover:text-white transition-colors">
                    {campus.email}
                  </a>
                ) : (
                  <div className="space-y-1">
                    {Object.entries(campus.email).map(([key, val]) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className="text-white/40 text-xs capitalize">{key}:</span>
                        <a href={`mailto:${val}`} className="text-white/70 text-sm hover:text-white transition-colors">
                          {val}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {campus.whatsapp && (
                <div>
                  <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-1">WhatsApp</p>
                  <a
                    href={`https://wa.me/${campus.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 text-sm hover:text-white transition-colors"
                  >
                    {campus.whatsapp}
                  </a>
                </div>
              )}

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/admissions"
                  className="inline-block px-6 py-2.5 bg-maroon text-white text-sm font-semibold rounded-full hover:bg-maroon-light transition-all"
                >
                  Apply Now →
                </Link>
                {campus.paymentLink && (
                  <a
                    href={campus.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/20 transition-all"
                  >
                    Pay Fees
                  </a>
                )}
              </div>
            </div>

            {/* Phones */}
            <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
              <h3 className="text-base font-bold text-white mb-5">Phone Numbers</h3>
              <div className="space-y-3">
                {campus.phones.map((phone) => {
                  // Separate label from number if present: "+91-... (Label)"
                  const match = phone.match(/^([^(]+)\s*(\(.*\))?$/);
                  const num = match ? match[1].trim() : phone;
                  const label = match ? (match[2] ?? "") : "";
                  return (
                    <div key={phone} className="flex items-center justify-between gap-4">
                      <span className="text-white/50 text-sm">{label}</span>
                      <a
                        href={`tel:${num.replace(/\s/g, "")}`}
                        className="text-white text-sm font-semibold hover:text-blue transition-colors flex-shrink-0"
                      >
                        {num}
                      </a>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-white/40 text-xs">
                  Admissions office hours: Monday to Saturday, 9 AM – 6 PM IST
                </p>
              </div>
            </div>
          </div>

          {/* Downloads */}
          {campus.downloads.length > 0 && (
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-8">
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Downloads</p>
              <div className="flex flex-wrap gap-3">
                {campus.downloads.map((dl) => (
                  <a
                    key={dl.label}
                    href={dl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {dl.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Back to all campuses */}
          <div className="text-center">
            <Link
              href="/campuses"
              className="inline-flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors"
            >
              ← View All Campuses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
