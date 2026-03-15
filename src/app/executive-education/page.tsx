import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive Education | IILM University",
  description:
    "IILM University executive education programmes for working professionals — Executive MBA, MDPs, corporate training, leadership academy, and AI for Business certificate.",
};

const programmes = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    name: "Executive MBA",
    badge: "Most Popular",
    duration: "2 Years",
    format: "Weekend Format (Sat–Sun)",
    eligibility: "3+ years of work experience, Bachelor's degree",
    desc: "Designed for mid-career professionals who want an MBA without pausing their career. Rigorous academics, cohort-based learning, and the full IILM MBA credential — on weekends.",
    highlights: [
      "Full MBA degree — same rigour as full-time MBA",
      "Industry guest sessions every month",
      "Peer learning from a high-experience cohort",
      "Gurugram & Greater Noida campuses",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18v18m6.75-18v18m2.25-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    name: "Management Development Programmes (MDPs)",
    badge: "Short-Term",
    duration: "2–5 Days",
    format: "Intensive Residential / Non-Residential",
    eligibility: "Open to managers and executives at all levels",
    desc: "Short, intensive management workshops designed for specific skills: negotiation, strategy, digital transformation, financial acumen, leadership, and more.",
    highlights: [
      "Customisable themes based on organisational need",
      "Delivered by IILM faculty + industry experts",
      "Certificate from IILM University",
      "Available for groups and individuals",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    name: "Corporate Training",
    badge: "Tailored L&D",
    duration: "Custom",
    format: "On-Campus or Client Premises",
    eligibility: "For organisations and teams",
    desc: "IILM designs and delivers tailored learning & development programmes for organisations — from frontline skill-building to senior leadership transformation. Delivered on-campus or at your organisation.",
    highlights: [
      "Bespoke curriculum design with IILM faculty",
      "Delivered at client premises or IILM campuses",
      "Scalable — from 10 to 1,000 participants",
      "Industry-specific modules available",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    name: "Leadership Academy",
    badge: "Senior Leaders",
    duration: "3–6 Months",
    format: "Monthly Cohort Workshops",
    eligibility: "Senior managers, directors, VP-level and above",
    desc: "An exclusive leadership development programme for senior executives — combining strategic thinking, executive presence, board-readiness, and personal leadership brand development.",
    highlights: [
      "Cohort of 20–25 senior leaders",
      "Executive coaching and 360° feedback",
      "Peer masterminds and leadership challenges",
      "IILM Leadership Certificate",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    name: "Certificate in AI for Business",
    badge: "New",
    duration: "3 Months",
    format: "Online / Blended",
    eligibility: "Working professionals, managers, entrepreneurs — no technical background needed",
    desc: "A practical, non-technical certificate programme designed to help business professionals understand, apply, and lead with AI. From prompt engineering to AI strategy — built for the business world.",
    highlights: [
      "Live online sessions + recorded modules",
      "No coding required",
      "AI tools for marketing, finance, ops, and HR",
      "IILM University Certificate + LinkedIn badge",
    ],
  },
];

const targetSegments = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Working Professionals",
    desc: "Individuals in employment who want to upskill, gain a higher qualification, or prepare for a promotion — without leaving their jobs.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Senior Managers",
    desc: "Mid-to-senior managers looking to transition into leadership roles, board positions, or expand their strategic skill set.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    title: "Business Owners",
    desc: "Entrepreneurs and business owners seeking structured management education to grow, formalise, or scale their ventures.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: "Government Officers",
    desc: "IAS, IPS, IRS, and other public sector officers seeking executive-level management and policy training from a recognised institution.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.95 14.95 0 010-2.17m0 2.17l-5.84 2.56m5.84-4.73a14.95 14.95 0 00-2.41-7.24M9.75 19.75v-4.82m0 0a6 6 0 01-5.84-7.38m5.84 7.38l5.84-2.56M3.91 9.63a14.95 14.95 0 012.41-7.24" />
      </svg>
    ),
    title: "Entrepreneurs",
    desc: "Founders and startup team members seeking frameworks in strategy, finance, marketing, and operations to accelerate growth.",
  },
];

export default function ExecutiveEducationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Executive Education</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Executive Education at IILM —<br />
            <span className="text-blue-gradient">Leadership Development for Working Professionals</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-10">
            Programmes designed for professionals who cannot afford to pause their careers — but know that standing still is not an option.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#programmes"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              View Programmes
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white/60 transition-all"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* About Executive Education */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Why Executive Education</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">Education That Fits Your Career</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-7 text-center">
            <div className="card-hover p-7 rounded-2xl border border-slate-100 hover:border-navy/20">
              <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue mb-4 mx-auto">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy mb-3">Flexible Formats</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Weekend, modular, online, and blended delivery — so you never have to choose between your career and your education.</p>
            </div>
            <div className="card-hover p-7 rounded-2xl border border-slate-100 hover:border-navy/20">
              <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue mb-4 mx-auto">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy mb-3">University Credentials</h3>
              <p className="text-sm text-slate-500 leading-relaxed">All executive programmes award recognised IILM University certificates and degrees — with full academic rigour behind them.</p>
            </div>
            <div className="card-hover p-7 rounded-2xl border border-slate-100 hover:border-navy/20">
              <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue mb-4 mx-auto">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy mb-3">Peer Network</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Learn alongside a cohort of experienced professionals — building relationships that accelerate careers long after graduation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Our Offering</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Executive Programmes at IILM</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Five distinct programme types — from a full Executive MBA to a 3-month AI certificate — tailored to where you are in your career.
            </p>
          </div>
          <div className="space-y-6">
            {programmes.map((prog) => (
              <div key={prog.name} className="card-hover rounded-2xl border border-slate-200 bg-white overflow-hidden">
                <div className="grid sm:grid-cols-[auto_1fr_auto] gap-0">
                  <div className="bg-navy p-6 flex flex-col items-center justify-center min-w-[120px]">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-2">
                      {prog.icon}
                    </div>
                    <span className="text-xs font-bold text-blue bg-blue/20 px-2.5 py-1 rounded-full text-center">{prog.badge}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-1">{prog.name}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="text-xs text-slate-500"><span className="font-semibold text-navy">Duration:</span> {prog.duration}</span>
                      <span className="text-xs text-slate-500"><span className="font-semibold text-navy">Format:</span> {prog.format}</span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{prog.desc}</p>
                    <div className="text-xs text-slate-500 mb-4">
                      <span className="font-semibold text-navy">Who is it for: </span>{prog.eligibility}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prog.highlights.map((h) => (
                        <span key={h} className="text-xs bg-slate text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 flex items-center">
                    <Link
                      href="/contact"
                      className="block text-center px-6 py-3 bg-maroon text-white text-sm font-semibold rounded-full hover:bg-maroon-light transition-all whitespace-nowrap"
                    >
                      Enquire →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Target Audience</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Who Is Executive Education For?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              IILM executive programmes are designed for professionals at every stage — from early career upskilling to senior leadership development.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {targetSegments.map((segment) => (
              <div key={segment.title} className="card-hover p-6 rounded-2xl border border-slate-100 bg-white text-center hover:border-navy/20">
                <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue mb-3 mx-auto">
                  {segment.icon}
                </div>
                <h3 className="font-semibold text-navy mb-2">{segment.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{segment.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="bg-slate py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-10">
            <div className="text-center mb-8">
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Corporate Training</p>
              <h2 className="text-3xl font-bold text-navy mb-4">Partner with IILM for Corporate L&D</h2>
              <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                IILM designs and delivers tailored Learning & Development programmes for organisations — built around your people, your challenges, and your strategy. Delivered at IILM campuses or at your premises.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                    </svg>
                  ),
                  title: "Bespoke Design",
                  desc: "Curriculum co-designed with your HR and business teams — no off-the-shelf modules.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  ),
                  title: "Flexible Delivery",
                  desc: "On your premises, at our campuses, or in a blended format — whatever works for your teams.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  ),
                  title: "IILM Certification",
                  desc: "All participants receive an IILM University certificate — a credential with national recognition.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center p-5 rounded-xl bg-slate">
                  <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue mb-2 mx-auto">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-navy mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
              >
                Discuss Corporate Training →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">Upskill with IILM</h2>
          <p className="text-white/55 mb-10 leading-relaxed">
            The best investment you can make is in yourself. IILM&apos;s executive programmes are designed to deliver measurable career impact — in months, not years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Enquire Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white/60 transition-all"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
