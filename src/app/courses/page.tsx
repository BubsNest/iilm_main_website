import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses & Programs | IILM University",
  description:
    "Explore IILM's undergraduate, postgraduate, MBA, and PhD programmes across Law, Management, Engineering, CSE, Social Sciences, and Hospitality.",
};

const schools = [
  {
    id: "law",
    name: "Law School",
    emoji: "⚖️",
    tagline: "Where law meets leadership.",
    desc: "IILM Law School offers rigorous legal education rooted in constitutional values, contemporary law, and social justice. Our curriculum goes beyond theory — students gain hands-on experience through moot courts, legal aid clinics, and internships with top law firms.",
    programs: [
      { name: "B.A. LL.B (Hons)", duration: "5 years", type: "Undergraduate" },
      { name: "BBA LL.B (Hons)", duration: "5 years", type: "Undergraduate" },
      { name: "LL.M", duration: "1 year", type: "Postgraduate" },
    ],
    highlights: ["Moot Court Facility", "Legal Aid Clinic", "Bar Council of India approved", "Industry Internships"],
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: "management",
    name: "School of Management",
    emoji: "📈",
    tagline: "Business education for the AI era.",
    desc: "The School of Management at IILM has been producing business leaders for three decades. Our MBA and BBA programmes are case-study intensive, industry-embedded, and now AI-augmented — preparing graduates for leadership roles in a rapidly changing business landscape.",
    programs: [
      { name: "BBA", duration: "3 years", type: "Undergraduate" },
      { name: "MBA", duration: "2 years", type: "Postgraduate" },
      { name: "PGDM", duration: "2 years", type: "Postgraduate" },
      { name: "PhD (Management)", duration: "3–5 years", type: "Doctoral" },
    ],
    highlights: ["Bloomberg Lab", "Live Industry Projects", "International Immersion", "400+ Placement Companies"],
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: "engineering",
    name: "School of Engineering",
    emoji: "⚙️",
    tagline: "Engineering the future.",
    desc: "IILM's School of Engineering blends academic fundamentals with hands-on innovation. State-of-the-art labs, industry partnerships, and an AI-first approach give our engineers a decisive edge in a competitive job market.",
    programs: [
      { name: "B.Tech (Civil)", duration: "4 years", type: "Undergraduate" },
      { name: "B.Tech (Mechanical)", duration: "4 years", type: "Undergraduate" },
      { name: "B.Tech (Electrical)", duration: "4 years", type: "Undergraduate" },
      { name: "M.Tech", duration: "2 years", type: "Postgraduate" },
    ],
    highlights: ["State-of-the-art Labs", "AICTE Approved", "Industry MoUs", "Research Opportunities"],
    color: "from-orange-600 to-red-700",
  },
  {
    id: "cse",
    name: "School of Computer Science Engineering",
    emoji: "💻",
    tagline: "Code. Build. Disrupt.",
    desc: "The School of CSE is IILM's most AI-forward department. Students learn to build intelligent systems, work with cloud infrastructure, and apply machine learning to real-world problems. Our curriculum is regularly co-designed with tech industry partners.",
    programs: [
      { name: "B.Tech (CSE)", duration: "4 years", type: "Undergraduate" },
      { name: "B.Tech (CSE – AI & ML)", duration: "4 years", type: "Undergraduate" },
      { name: "B.Tech (CSE – Data Science)", duration: "4 years", type: "Undergraduate" },
      { name: "MCA", duration: "2 years", type: "Postgraduate" },
    ],
    highlights: ["AWS & Azure Cloud Credits", "AI/ML Research Lab", "Industry Co-designed Curriculum", "Hackathons & Coding Contests"],
    color: "from-violet-600 to-purple-700",
  },
  {
    id: "social-sciences",
    name: "School of Social Sciences & Liberal Arts",
    emoji: "🌐",
    tagline: "Think broadly. Act decisively.",
    desc: "In a world increasingly shaped by technology, the humanities and social sciences are more critical than ever. IILM's interdisciplinary school trains critical thinkers, communicators, and changemakers who can navigate complexity across sectors.",
    programs: [
      { name: "B.A. (Economics)", duration: "3 years", type: "Undergraduate" },
      { name: "B.A. (Psychology)", duration: "3 years", type: "Undergraduate" },
      { name: "B.A. (Sociology)", duration: "3 years", type: "Undergraduate" },
      { name: "M.A. (Economics)", duration: "2 years", type: "Postgraduate" },
    ],
    highlights: ["Research Methods Training", "Policy & Governance Focus", "Interdisciplinary Projects", "NGO Internship Network"],
    color: "from-pink-600 to-rose-700",
  },
  {
    id: "hospitality",
    name: "School of Hospitality & Services Management",
    emoji: "🏨",
    tagline: "Crafting world-class hospitality professionals.",
    desc: "The School of Hospitality prepares students for leadership in hotels, travel, events, and the broader service sector. Industry-integrated training, live hotel projects, and global hospitality partnerships make IILM graduates the first choice for top employers.",
    programs: [
      { name: "B.Sc. (Hospitality & Hotel Admin)", duration: "3 years", type: "Undergraduate" },
      { name: "B.Sc. (Travel & Tourism)", duration: "3 years", type: "Undergraduate" },
      { name: "MBA (Hospitality)", duration: "2 years", type: "Postgraduate" },
    ],
    highlights: ["Live Kitchen & Food Lab", "Hotel Industry Tie-ups", "Event Management Training", "International Placements"],
    color: "from-amber-600 to-yellow-700",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Academic Programs</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Six Schools.<br />
            <span className="text-gold-gradient">Infinite Careers.</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-10">
            From law to engineering, management to AI — IILM's programmes are designed for the demands of tomorrow's economy.
          </p>
          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-2">
            {schools.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-sm hover:border-gold/50 hover:text-gold transition-all"
              >
                {s.emoji} {s.name.replace("School of ", "").replace(" School", "")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Schools */}
      <div className="bg-white">
        {schools.map((school, i) => (
          <section
            key={school.id}
            id={school.id}
            className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-slate"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className={`grid md:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Text */}
                <div>
                  <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r ${school.color} text-white text-sm font-semibold mb-6`}>
                    <span className="text-xl">{school.emoji}</span>
                    {school.name}
                  </div>
                  <p className="text-gold font-medium text-sm mb-3">{school.tagline}</p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-5 leading-tight">
                    {school.name}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{school.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {school.highlights.map((h) => (
                      <span key={h} className="px-3 py-1 bg-slate text-navy text-xs font-medium rounded-full border border-slate-200">
                        {h}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-full font-medium text-sm hover:bg-navy-light transition-all"
                  >
                    Apply to this School →
                  </Link>
                </div>

                {/* Programs */}
                <div>
                  <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Programmes Offered</p>
                  <div className="space-y-3">
                    {school.programs.map((p) => (
                      <div
                        key={p.name}
                        className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white hover:border-navy/30 hover:shadow-sm transition-all"
                      >
                        <div>
                          <div className="font-semibold text-navy text-sm">{p.name}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{p.type}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium text-slate-500">{p.duration}</div>
                          <Link
                            href="/admissions"
                            className="text-xs text-gold font-semibold hover:underline"
                          >
                            Apply →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Not Sure Which Programme is Right for You?
          </h2>
          <p className="text-white/60 mb-10">
            Our admissions counsellors are here to help you choose the right school and programme based on your interests, strengths, and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-all"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-white/25 text-white rounded-full hover:bg-white/10 transition-all"
            >
              Talk to a Counsellor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
