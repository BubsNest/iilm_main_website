import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IILM University | 30 Years of Academic Excellence",
  description:
    "Learn about IILM University — its history, mission, leadership, faculty, and Centres of Excellence across Gurugram, Greater Noida, and New Delhi.",
};

const leadership = [
  { name: "Advisory Board", desc: "Industry leaders and academics who guide IILM's strategic vision and curriculum." },
  { name: "Law School Board", desc: "Eminent jurists, senior advocates, and legal scholars shaping the Law School." },
  { name: "Faculty", desc: "700+ full-time faculty members with PhDs, industry experience, and global credentials." },
];

const centres = [
  {
    id: "ei",
    name: "Centre for Emotional Intelligence",
    desc: "The Centre for Emotional Intelligence (CEI) runs structured EQ workshops, assessments, and leadership development programmes that equip students with the interpersonal skills demanded by modern workplaces. CEI-trained graduates consistently receive higher placement offers and leadership roles.",
    highlights: ["EQ Assessments", "Leadership Workshops", "Counselling & Wellness", "Industry Interaction"],
    color: "bg-blue-50 border-blue-100",
    accent: "text-blue-700",
  },
  {
    id: "ctrl",
    name: "Centre for Teaching, Research & Learning",
    desc: "CTRL focuses on advancing pedagogical innovation at IILM. It supports faculty research, funds student research projects, publishes academic journals, and collaborates with global institutions to keep curriculum design at the cutting edge of higher education.",
    highlights: ["Faculty Development", "Student Research Grants", "Academic Publishing", "Curriculum Innovation"],
    color: "bg-violet-50 border-violet-100",
    accent: "text-violet-700",
  },
  {
    id: "ecell",
    name: "Centre for Entrepreneurship & Innovation (ECELL)",
    desc: "ECELL is IILM's startup incubator and entrepreneurship engine. It provides mentorship from serial entrepreneurs, access to seed funding networks, co-working spaces, and hosts the annual IILM Entrepreneurship Summit — one of Delhi NCR's most anticipated student startup events.",
    highlights: ["Startup Incubation", "Seed Funding Access", "Mentor Network", "Annual E-Summit"],
    color: "bg-amber-50 border-amber-100",
    accent: "text-amber-700",
  },
  {
    id: "ct",
    name: "Centre for Technology",
    desc: "The Centre for Technology drives AI, machine learning, data science, and emerging technology research at IILM. It partners with tech companies to run live project labs and offers students access to cloud computing credits, AI tools, and cutting-edge hardware.",
    highlights: ["AI & ML Labs", "Industry Live Projects", "Cloud Computing Access", "Tech Symposiums"],
    color: "bg-emerald-50 border-emerald-100",
    accent: "text-emerald-700",
  },
];

const milestones = [
  { year: "1993", event: "IILM founded in New Delhi" },
  { year: "2005", event: "IILM Gurgaon campus established" },
  { year: "2012", event: "Expansion to Greater Noida" },
  { year: "2018", event: "NAAC Accreditation achieved" },
  { year: "2022", event: "University status granted to Gurugram & Greater Noida campuses" },
  { year: "2024", event: "AI-integrated curriculum launched across all programmes" },
  { year: "2026", event: "12,000+ students, 400+ placement partners" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">About IILM</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Top University in India,<br />
            <span className="text-gold-gradient">Rooted in Purpose</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            For over 30 years, IILM has been building leaders who are not just academically excellent — but emotionally intelligent, globally aware, and AI-ready.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Our Mission</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6 leading-tight">
                Education That Transforms, Not Just Informs
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                IILM University was founded on a simple belief: that education must prepare students for the world as it is, not as it was. Our curriculum is built around real-world application, ethical leadership, and the responsible use of technology.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We are a NAAC-accredited institution with University Grants Commission (UGC) recognition, operating across three strategically located campuses in Delhi NCR.
              </p>
              <p className="text-slate-600 leading-relaxed">
                With AI now at the core of every programme, IILM is uniquely positioned to prepare graduates for careers that don&apos;t yet exist.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Students", value: "12,000+" },
                { label: "Alumni", value: "50,000+" },
                { label: "Hiring Companies", value: "400+" },
                { label: "Global Partners", value: "30+" },
                { label: "Faculty Members", value: "700+" },
                { label: "Years of Excellence", value: "30+" },
              ].map((s) => (
                <div key={s.label} className="flex items-center justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-600 text-sm">{s.label}</span>
                  <span className="text-navy font-bold text-xl">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="history" className="bg-slate py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Three Decades of Progress</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200" />
            <div className="space-y-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-navy border-4 border-white shadow flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                    </div>
                  </div>
                  <div className="pt-2.5">
                    <span className="text-xs font-semibold text-gold">{m.year}</span>
                    <p className="text-navy font-medium mt-0.5">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="advisory" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Guided by the Best</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {leadership.map((l) => (
              <div key={l.name} className="card-hover p-8 rounded-2xl bg-slate border border-slate-100">
                <h3 className="text-lg font-bold text-navy mb-3">{l.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centres of Excellence */}
      <section id="centres" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Centres of Excellence</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Research, Innovation & Impact</h2>
          </div>
          <div className="space-y-6">
            {centres.map((c, i) => (
              <div key={c.id} className={`rounded-2xl border p-8 ${c.color}`}>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-bold uppercase tracking-widest ${c.accent}`}>
                        Centre {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-3">{c.name}</h3>
                    <p className="text-slate-600 leading-relaxed">{c.desc}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Highlights</p>
                    <ul className="space-y-2">
                      {c.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-slate-700">
                          <svg className={`w-3.5 h-3.5 ${c.accent} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global section */}
      <section id="global" className="bg-navy py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Global Connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">30+ Partner Universities Worldwide</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            IILM&apos;s global academic network enables students to access semester exchanges, dual degrees, and international internships across Europe, Asia, and North America.
          </p>
          <Link
            href="/admissions"
            className="inline-block px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-all"
          >
            Apply for 2026 →
          </Link>
        </div>
      </section>

      {/* Accreditations */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-8">Accreditations & Recognition</p>
          <Image
            src="https://iilm.edu/demo2020/wp-content/uploads/2022/03/Accredations.png"
            alt="IILM Accreditations"
            width={800}
            height={200}
            className="mx-auto object-contain"
          />
        </div>
      </section>
    </>
  );
}
