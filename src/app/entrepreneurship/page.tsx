import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrepreneurship & ECELL | IILM University",
  description:
    "IILM University's startup ecosystem — ECELL, on-campus incubator, E-Summit, investor connections, and entrepreneurship programmes for every student.",
};

const ecellOfferings = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>),
    title: "Onsite Incubator",
    desc: "Dedicated startup workspace with hot-desks, meeting rooms, and a collaborative community. Incubatees get mentorship, administrative support, and seed funding access.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>),
    title: "E-Summit",
    desc: "IILM&apos;s annual entrepreneurship summit — India&apos;s premier student startup event. Investors, founders, pitches, panels, workshops, and networking across 2 days.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>),
    title: "Startup Pitches",
    desc: "Monthly pitch events where student teams present their ventures to a panel of real investors, alumni founders, and corporate partners for feedback and potential funding.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>),
    title: "Mentor Network",
    desc: "50+ mentors from startups, VCs, and corporates — available for 1-on-1 mentorship sessions, office hours, and advisory relationships.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>),
    title: "Funding Access",
    desc: "ECELL connects students to angel networks, government schemes (Startup India, MSME grants), and IILM alumni investors. We help navigate applications and pitch preparation.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-6.75A1.125 1.125 0 007.5 15.375v3.375m9-7.5V5.625A2.625 2.625 0 0013.875 3h-3.75A2.625 2.625 0 007.5 5.625v2.25m9 0H7.5" /></svg>),
    title: "Innovation Challenges",
    desc: "Industry-sponsored hackathons, design sprints, and innovation competitions — with real prize money, job offers, and incubation opportunities as rewards.",
  },
];

const programmes = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>),
    name: "MBA in Entrepreneurship",
    desc: "A specialisation within the IILM MBA programme — combining management fundamentals with startup methodology, venture finance, and new product development.",
    duration: "2 Years",
    campus: "Gurugram, Greater Noida",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>),
    name: "Certificate in Entrepreneurship",
    desc: "A semester-long add-on certificate open to all IILM students. Covers ideation, lean startup, business model canvas, pitching, and early-stage finance.",
    duration: "1 Semester",
    campus: "All Campuses",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>),
    name: "FYUP with Entrepreneurship Minor",
    desc: "Four-year undergraduate students can opt for an Entrepreneurship minor — combining discipline-specific skills with venture-building knowledge from Year 1.",
    duration: "4 Years (integrated)",
    campus: "Gurugram, Greater Noida",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>),
    name: "Lean Startup Workshop",
    desc: "A high-intensity 2-day residential workshop covering the complete lean startup methodology — from problem discovery to MVP to first customer.",
    duration: "2 Days (Intensive)",
    campus: "All Campuses",
  },
];

const startupStories = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>),
    sector: "EdTech",
    name: "SkillBridge",
    founder: "Ananya Gupta, MBA 2022",
    story:
      "Ananya identified a gap in vocational skill training for Tier-2 cities while doing her MBA project. She built SkillBridge in the IILM incubator — a mobile-first platform connecting trained instructors to underserved learners. SkillBridge has trained 8,000+ learners across 12 states and raised ₹75 lakh in seed funding.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0c0-4.97-2.686-9.333-6.75-11.695m6.75 11.695c0-4.97 2.686-9.333 6.75-11.695" /></svg>),
    sector: "AgriTech",
    name: "FarmLink",
    founder: "Rohan Yadav, BBA 2021",
    story:
      "Rohan grew up in a farming family in Haryana and saw the inefficiency of middlemen firsthand. FarmLink connects small-scale farmers directly to buyers through a simple WhatsApp-based interface. The startup has onboarded 2,000+ farmers across UP and Haryana and was selected for the Startup India programme.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>),
    sector: "HealthTech",
    name: "CareNear",
    founder: "Divya Sharma, B.Tech CSE 2023",
    story:
      "Divya built CareNear during her final year B.Tech project — a hyperlocal platform connecting patients to verified healthcare professionals for home-based consultations. Piloted at Greater Noida campus, CareNear now operates in 3 NCR districts with 50+ registered health professionals.",
  },
];

const stats = [
  { value: "50+", label: "Student Ventures Launched" },
  { value: "50+", label: "ECELL Mentors" },
  { value: "₹2 Cr+", label: "Funding Raised by Alumni Startups" },
  { value: "3", label: "Government Scheme Selections" },
];

export default function EntrepreneurshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Entrepreneurship at IILM</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Entrepreneurship at IILM —<br />
            <span className="text-blue-gradient">Build, Launch, Scale</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-10">
            IILM is not just a place to learn business — it is a place to build one. Our startup ecosystem, ECELL, and incubator turn ideas into ventures from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#ecell"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Explore ECELL
            </Link>
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white/60 transition-all"
            >
              Apply to IILM
            </Link>
          </div>
        </div>
      </section>

      {/* ECELL Overview */}
      <section id="ecell" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Our Startup Engine</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">ECELL — Entrepreneurship Cell</h2>
            <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-lg">
              The IILM Entrepreneurship Cell (ECELL) is IILM&apos;s startup engine — founded to nurture student entrepreneurs from idea to funded venture. Whether you have a business idea on a napkin or a working prototype, ECELL provides the structure, mentorship, community, and resources to take it further.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-0">
            {stats.map((s) => (
              <div key={s.label} className="card-hover text-center p-6 rounded-2xl border border-slate-100 bg-white hover:border-navy/20">
                <div className="text-2xl sm:text-3xl font-bold text-navy mb-1">{s.value}</div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">ECELL Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">What ECELL Offers</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Six pillars of startup support — from a physical workspace to investor introductions — all available to IILM students.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecellOfferings.map((offering) => (
              <div key={offering.title} className="card-hover p-7 rounded-2xl border border-slate-200 bg-white hover:border-navy/20">
                <div className="flex mb-4 text-navy">{offering.icon}</div>
                <h3 className="text-lg font-semibold text-navy mb-3">{offering.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{offering.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entrepreneurship Programmes */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Academic Programmes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Entrepreneurship Programmes</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From a full MBA specialisation to a 2-day intensive workshop — entrepreneurship learning at every level of commitment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmes.map((prog) => (
              <div key={prog.name} className="card-hover rounded-2xl border border-slate-100 bg-white overflow-hidden hover:border-navy/20">
                <div className="bg-navy p-5 text-center">
                  <div className="flex justify-center mb-2 text-white">{prog.icon}</div>
                  <h3 className="font-bold text-white text-sm leading-snug">{prog.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{prog.desc}</p>
                  <div className="space-y-1 text-xs text-slate-500">
                    <div><span className="font-semibold text-navy">Duration:</span> {prog.duration}</div>
                    <div><span className="font-semibold text-navy">Campus:</span> {prog.campus}</div>
                  </div>
                  <Link
                    href="https://admissions.iilm.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-4 px-4 py-2 bg-maroon text-white text-xs font-semibold rounded-full hover:bg-maroon-light transition-all"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IILM Startups */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Student Ventures</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">IILM Startups — Real Ventures, Real Impact</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our students have launched 50+ ventures. From EdTech to AgriTech to HealthTech — the IILM incubator has produced founders who are changing industries.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-7">
            {startupStories.map((startup) => (
              <div key={startup.name} className="card-hover p-7 rounded-2xl bg-white border border-slate-200 hover:border-navy/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-navy">{startup.icon}</span>
                  <div>
                    <span className="text-xs font-bold text-blue bg-blue/10 px-2.5 py-1 rounded-full">{startup.sector}</span>
                    <h3 className="text-lg font-bold text-navy mt-1">{startup.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{startup.story}</p>
                <div className="text-xs text-slate-400 font-medium italic">{startup.founder}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Ready to Build?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Start Your Startup Journey
          </h2>
          <p className="text-white/55 mb-10 leading-relaxed">
            Join ECELL, pitch your idea, get mentored, and build something that matters — all while completing your IILM degree. The best time to start is now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Join ECELL
            </Link>
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white/60 transition-all"
            >
              Apply to IILM →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
