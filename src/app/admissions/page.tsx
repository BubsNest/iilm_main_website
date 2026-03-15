import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions 2026 | IILM University",
  description:
    "Apply to IILM University for 2026. Explore undergraduate, postgraduate, MBA, and doctoral admissions, scholarships, fees, and the application process.",
};

const admissionTypes = [
  {
    id: "undergraduate",
    title: "Undergraduate Admissions",
    tagline: "Start your journey here.",
    desc: "Open to students who have completed Class 12 (10+2) from any recognised board. Programmes include BBA, B.Tech, B.Sc., B.A., B.A. LL.B, and more.",
    eligibility: [
      "Class 12 / 10+2 from any recognised board",
      "Minimum 50% aggregate marks",
      "IILM entrance exam or valid SAT/JEE/CLAT score",
      "Personal interview (shortlisted candidates)",
    ],
    programs: ["BBA", "B.Tech (CSE / Engineering)", "B.Sc. (Hospitality)", "B.A. LL.B / BBA LL.B", "B.A. (Humanities)"],
    phone: "+91-8065905224",
    email: "admissions.iilmu@iilm.edu",
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: "postgraduate",
    title: "Postgraduate Admissions",
    tagline: "Advance your expertise.",
    desc: "For graduates seeking to specialise and accelerate. PG programmes available in Management, Engineering, Law, Social Sciences, and Hospitality.",
    eligibility: [
      "Bachelor's degree from a recognised university",
      "Minimum 50% aggregate marks (45% for SC/ST)",
      "Valid GATE/CAT/MAT/XAT/CMAT or IILM entrance score",
      "Group discussion and personal interview",
    ],
    programs: ["M.Tech", "MCA", "M.A. (Economics)", "LL.M", "MBA (various specialisations)"],
    phone: "+91-8065905225",
    email: "admissions.iilmu@iilm.edu",
    color: "from-violet-600 to-purple-700",
  },
  {
    id: "mba",
    title: "MBA Admissions",
    tagline: "Business leadership starts here.",
    desc: "IILM's flagship MBA programme is consistently ranked among the top in North India. AI-integrated curriculum, live industry projects, and a 400+ company placement network.",
    eligibility: [
      "Bachelor's degree with minimum 50% marks",
      "Valid CAT / MAT / XAT / GMAT / CMAT score",
      "Group discussion and personal interview",
      "Work experience preferred but not mandatory",
    ],
    programs: [
      "MBA (Marketing)",
      "MBA (Finance)",
      "MBA (HR Management)",
      "MBA (Operations)",
      "MBA (Entrepreneurship)",
      "MBA (Business Analytics)",
    ],
    phone: "+91-8065905223",
    email: "admissions.iilmu@iilm.edu",
    color: "from-emerald-600 to-teal-700",
  },
  {
    id: "doctoral",
    title: "Doctoral / PhD Admissions",
    tagline: "Research that changes the world.",
    desc: "IILM offers full-time and part-time PhD programmes for scholars seeking to contribute original research across management, law, engineering, and social sciences.",
    eligibility: [
      "Master's degree with minimum 55% marks",
      "UGC NET / JRF qualification preferred",
      "Research proposal submission",
      "Interview with PhD committee",
    ],
    programs: [
      "PhD (Management)",
      "PhD (Law)",
      "PhD (Engineering)",
      "PhD (Social Sciences)",
      "PhD (Computer Science)",
    ],
    phone: "+91-8065905225",
    email: "research.iilmu@iilm.edu",
    color: "from-amber-600 to-orange-700",
  },
];

const scholarships = [
  {
    name: "Merit Excellence Scholarship",
    desc: "Up to 100% tuition waiver for students with 90%+ in Class 12 / bachelor's degree.",
    coverage: "Up to 100% tuition",
  },
  {
    name: "Sports & Cultural Scholarship",
    desc: "For students representing their state/nation in sports or cultural activities at a national level.",
    coverage: "25–50% tuition",
  },
  {
    name: "IILM Alumni Scholarship",
    desc: "Discounted fee for children of IILM alumni, honouring our legacy community.",
    coverage: "10–25% tuition",
  },
  {
    name: "Need-Based Financial Aid",
    desc: "Income-based assistance for students from economically weaker sections (EWS).",
    coverage: "Case-by-case",
  },
];

const steps = [
  { step: "01", title: "Choose Your Programme", desc: "Explore our schools and programmes to find the right fit for your academic and career goals." },
  { step: "02", title: "Submit Application", desc: "Apply online via admissions.iilm.edu. Fill in personal details, academic records, and upload documents." },
  { step: "03", title: "Entrance Exam / Score Submission", desc: "Submit your CAT/MAT/JEE/CLAT score or appear for the IILM Entrance Test." },
  { step: "04", title: "GD & Personal Interview", desc: "Shortlisted candidates are invited for a Group Discussion and Personal Interview at the campus." },
  { step: "05", title: "Offer & Admission", desc: "Receive your admission offer, pay the confirmation fee, and secure your seat at IILM." },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Admissions 2026</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Your Future Starts<br />
            <span className="text-gold-gradient">With One Application</span>
          </h1>
          <p className="text-lg text-white/65 max-w-xl mx-auto leading-relaxed mb-10">
            Applications are open for the 2026–27 academic year across all IILM campuses and programmes.
          </p>
          <Link
            href="https://admissions.iilm.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gold text-navy font-bold rounded-full text-base hover:bg-gold-light transition-all shadow-lg shadow-gold/25"
          >
            Apply Online Now →
          </Link>
        </div>
      </section>

      {/* How to Apply */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Application Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">How to Apply</h2>
          </div>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-6 items-start p-6 rounded-2xl border border-slate-100 hover:border-navy/20 hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-xl bg-navy text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Types */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Categories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Find Your Path</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {admissionTypes.map((type) => (
              <div key={type.id} id={type.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 card-hover">
                <div className={`h-2 bg-gradient-to-r ${type.color}`} />
                <div className="p-8">
                  <p className="text-xs font-semibold text-gold mb-2">{type.tagline}</p>
                  <h3 className="text-xl font-bold text-navy mb-3">{type.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{type.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Eligibility</p>
                      <ul className="space-y-1.5">
                        {type.eligibility.map((e) => (
                          <li key={e} className="flex items-start gap-2 text-sm text-slate-600">
                            <svg className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Programmes</p>
                      <ul className="space-y-1.5">
                        {type.programs.map((p) => (
                          <li key={p} className="text-sm text-slate-600 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs text-slate-400">
                      <a href={`tel:${type.phone}`} className="hover:text-navy block">{type.phone}</a>
                      <a href={`mailto:${type.email}`} className="hover:text-navy">{type.email}</a>
                    </div>
                    <Link
                      href="https://admissions.iilm.edu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-navy text-white text-sm font-medium rounded-full hover:bg-navy-light transition-all"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Financial Aid</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Scholarships & Aid</h2>
            <p className="text-white/55 mt-3 max-w-xl mx-auto">
              IILM is committed to making quality education accessible. Explore our scholarship and financial aid options.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {scholarships.map((s) => (
              <div key={s.name} className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30">
                <div className="inline-block px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold mb-4">
                  {s.coverage}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{s.name}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="bg-slate py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Programme Fees 2026</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5">Transparent Fee Structure</h2>
          <p className="text-slate-600 mb-8">
            Fee structures vary by programme and campus. Download the official 2026 fee schedule or contact our admissions team for a detailed breakdown including hostel, meals, and other charges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-all"
            >
              Download Fee Structure
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-navy/25 text-navy rounded-full hover:bg-navy hover:text-white transition-all"
            >
              Ask Admissions Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
