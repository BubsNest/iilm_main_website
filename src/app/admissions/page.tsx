import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admissions 2026 | IILM University",
  description:
    "Apply to IILM University for 2026. Explore the admission process, eligibility criteria, entrance exams, scholarships, and contact the admissions team.",
};

const steps = [
  {
    number: "01",
    title: "Application Submission",
    desc: "Fill in the online application form at admissions.iilm.edu. Provide personal details, academic background, and programme preference.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Documentation Verification",
    desc: "Submit academic records (mark sheets, certificates), government-issued ID proof, and recent passport-size photographs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Evaluation & Shortlisting",
    desc: "Applications are evaluated based on academic merit and entrance exam scores. Shortlisted candidates are notified via email and SMS.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Personal Interview",
    desc: "Shortlisted candidates are invited for a Personal Interview — conducted on campus or online. Some programmes also include a Group Discussion.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Entrance Examination",
    desc: "Appear for the institution-specific IILM Entrance Test (if required) or submit a valid score from a recognised national entrance exam.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Admission Offer",
    desc: "Receive your offer letter. Pay the confirmation fee to secure your seat. Welcome to IILM University — your journey begins here.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    ),
  },
];

const eligibility = [
  {
    category: "Undergraduate (UG)",
    criteria: [
      "Class 12 / 10+2 from any recognised board",
      "Minimum 50% aggregate marks",
      "Valid entrance score (JEE Main / CLAT / CUET / SAT / IILM Entrance Test)",
      "Personal interview for shortlisted candidates",
    ],
  },
  {
    category: "Postgraduate — MBA",
    criteria: [
      "Bachelor's degree in any discipline with minimum 50% marks",
      "Valid CAT / MAT / XAT / GMAT / CMAT / NMAT score",
      "Group Discussion and Personal Interview",
      "Work experience preferred but not mandatory",
    ],
  },
  {
    category: "Postgraduate — Other PG",
    criteria: [
      "Bachelor's degree in relevant field with minimum 50% marks",
      "Valid entrance score or IILM Entrance Test",
      "Personal interview for shortlisted candidates",
    ],
  },
  {
    category: "PGDBM",
    criteria: [
      "Bachelor's degree with minimum 50% marks",
      "Valid entrance exam score",
      "Work experience preferred",
      "Personal interview",
    ],
  },
  {
    category: "Doctoral (PhD)",
    criteria: [
      "Master's degree in relevant field with minimum 55% marks",
      "UGC NET / JRF qualification preferred",
      "Research proposal submission required",
      "Interview with PhD Research Committee",
    ],
  },
];

const entranceExams = [
  { name: "CAT", desc: "For MBA", color: "bg-blue/10 text-blue border-blue/20" },
  { name: "MAT", desc: "For MBA", color: "bg-blue/10 text-blue border-blue/20" },
  { name: "XAT", desc: "For MBA", color: "bg-blue/10 text-blue border-blue/20" },
  { name: "GMAT", desc: "For MBA", color: "bg-blue/10 text-blue border-blue/20" },
  { name: "CMAT", desc: "For MBA", color: "bg-blue/10 text-blue border-blue/20" },
  { name: "NMAT", desc: "For MBA", color: "bg-blue/10 text-blue border-blue/20" },
  { name: "JEE Main", desc: "For B.Tech", color: "bg-navy/8 text-navy border-navy/15" },
  { name: "CLAT", desc: "For Law", color: "bg-maroon/10 text-maroon border-maroon/20" },
  { name: "CUET", desc: "For UG", color: "bg-navy/8 text-navy border-navy/15" },
  { name: "SAT", desc: "International UG", color: "bg-navy/8 text-navy border-navy/15" },
  { name: "IILM Entrance Test", desc: "Own Exam — All Programmes", color: "bg-maroon/10 text-maroon border-maroon/20" },
];

const scholarships = [
  {
    name: "Merit Excellence Scholarship",
    desc: "For students securing 90%+ marks in their qualifying examination. Rewards academic excellence with significant fee concession.",
    coverage: "Up to 100% tuition waiver",
  },
  {
    name: "Sports & Cultural Scholarship",
    desc: "For students who have represented their state or nation in sports, arts, or cultural activities at a national/state level.",
    coverage: "25–50% tuition",
  },
  {
    name: "IILM Alumni Scholarship",
    desc: "A fee concession for children of IILM alumni, honouring our legacy community and the bonds that connect generations.",
    coverage: "10–25% fee concession",
  },
  {
    name: "Need-Based Financial Aid",
    desc: "Income-assessed financial assistance for students from economically weaker sections (EWS). Applied case by case.",
    coverage: "Case-by-case basis",
  },
  {
    name: "CII Member Scholarship",
    desc: "Special fee concession for employees and children of Confederation of Indian Industry (CII) member companies.",
    coverage: "Up to 20% fee concession",
  },
];

const partnerCountries = [
  "UAE", "Nepal", "Bangladesh", "Sri Lanka", "Kenya", "Nigeria", "Malaysia", "Singapore", "Afghanistan", "Bhutan",
];

const campusContacts = [
  {
    campus: "Gurugram",
    address: "Plot No. 69-71, Golf Course Road, Sector 53, Gurugram",
    phone: "+91-8065905223",
    email: "admissions.iilmu@iilm.edu",
  },
  {
    campus: "Greater Noida",
    address: "Plot No. 16-18, Knowledge Park II, Greater Noida – 201306",
    phone: "+91-8065905220",
    email: "admissions.gn@iilm.edu",
  },
  {
    campus: "Lodhi Road, New Delhi",
    address: "3, Lodhi Institutional Area, New Delhi – 110003",
    phone: "+91-8065905222",
    email: "info.ubs@iilm.edu",
  },
];

const brochures = [
  {
    title: "MBA Brochure",
    desc: "Detailed information on MBA specialisations and postgraduate management offerings.",
    href: "https://iilm.edu.in/uploads/brochures/mba-2026.pdf",
  },
  {
    title: "PGDM Brochure",
    desc: "Everything about the Post Graduate Diploma in Management — curriculum, faculty, and placements.",
    href: "https://iilm.edu.in/uploads/brochures/pgdm-2026.pdf",
  },
  {
    title: "BBA Brochure",
    desc: "Comprehensive guide to the BBA programme, eligibility, fees, and campus life.",
    href: "https://iilm.edu.in/uploads/brochures/bba-2026.pdf",
  },
  {
    title: "B.Tech Brochure",
    desc: "Details on engineering programmes, labs, specialisations, and placement records.",
    href: "https://iilm.ac.in/uploads/brochures/btech-2026.pdf",
  },
  {
    title: "Law Brochure",
    desc: "All you need to know about LLB, BBA-LLB, and other law programmes at IILM.",
    href: "https://iilm.edu.in/uploads/brochures/law-2026.pdf",
  },
  {
    title: "PGDM (LR) Brochure",
    desc: "Post Graduate Diploma in Management with Labour Relations — programme guide.",
    href: "https://iilmlr.ac.in/uploads/brochures/pgdm-2026.pdf",
  },
];

const loanPartners = [
  "Avanse Financial Services",
  "Credila (HDFC)",
  "HDFC Bank",
  "SBI",
  "Bank of Baroda",
  "Axis Bank",
  "IDFC First Bank",
];

const refundPolicy = [
  { period: "15 days or more before course start", refund: "100% refund (minus processing fee of ₹1,000)" },
  { period: "Less than 15 days before course start", refund: "80% refund" },
  { period: "Within 30 days of course start", refund: "50% refund" },
  { period: "After 30 days of course start", refund: "25% refund" },
  { period: "After 60 days of course start", refund: "No refund" },
];

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Admissions 2026</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Admissions 2026 —<br />
            <span className="text-blue-gradient">Your Journey Begins Here</span>
          </h1>
          <p className="text-lg text-white/65 max-w-xl mx-auto leading-relaxed mb-10">
            Applications are open for the 2026–27 academic year across all IILM campuses and programmes.
            Undergraduate, Postgraduate, MBA, and Doctoral admissions now open.
          </p>
          <Link
            href="https://admissions.iilm.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-maroon text-white font-bold rounded-full text-base hover:bg-maroon-light transition-all shadow-lg shadow-maroon/25"
          >
            Apply Online Now →
          </Link>
        </div>
      </section>

      {/* IILM Money Wallet */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl bg-navy p-10 relative overflow-hidden">
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-t-3xl" />
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-400/20 border border-yellow-400/40 text-yellow-300 text-xs font-bold uppercase tracking-widest mb-5">
                  Exclusive Benefit
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  The IILM Money Wallet
                </h2>
                <p className="text-xl font-semibold text-yellow-300 mb-5">
                  ₹1 Lakh Credit for Every Student
                </p>
                <p className="text-white/70 leading-relaxed text-sm mb-6">
                  Every IILM student gets ₹1 lakh credited to their IILM Money Wallet — redeemable for international trips, certifications, online courses, and co-curricular activities. This is IILM&apos;s investment in your growth beyond the classroom.
                </p>
                <Link
                  href="/programmes"
                  className="inline-flex items-center gap-2 text-yellow-300 font-semibold text-sm hover:text-yellow-200 transition-colors"
                >
                  Learn More About the Wallet →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "International Trips", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>) },
                  { label: "Certifications", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>) },
                  { label: "Online Courses", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>) },
                  { label: "Co-curricular Activities", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>) },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl bg-white/5 border border-white/10 p-4 text-center">
                    <span className="flex justify-center text-white mb-2">{item.icon}</span>
                    <p className="text-white/80 text-xs font-medium leading-snug">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section id="process" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Admission Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">How Admissions Work</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              A transparent, step-by-step process designed to be straightforward and student-friendly.
            </p>
          </div>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <div
                key={s.number}
                className="flex gap-5 items-start p-6 rounded-2xl border border-slate-100 hover:border-navy/20 hover:shadow-sm transition-all"
              >
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center">
                    {s.icon}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-6 bg-slate-200 mt-2" />
                  )}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-blue">Step {s.number}</span>
                  </div>
                  <h3 className="font-semibold text-navy text-base mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section id="eligibility" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Eligibility</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Eligibility Criteria</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Criteria vary by programme level. Find your category below.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eligibility.map((e) => (
              <div key={e.category} className="bg-white rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20">
                <h3 className="font-bold text-navy text-base mb-4">{e.category}</h3>
                <ul className="space-y-2">
                  {e.criteria.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <svg className="w-3.5 h-3.5 text-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accepted Entrance Exams */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Accepted Exams</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Accepted Entrance Examinations</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              IILM accepts scores from all major national entrance examinations. You can also appear for the IILM Entrance Test.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {entranceExams.map((exam) => (
              <div
                key={exam.name}
                className={`px-5 py-3 rounded-2xl border text-center card-hover ${exam.color}`}
              >
                <div className="font-bold text-sm">{exam.name}</div>
                <div className="text-xs opacity-70 mt-0.5">{exam.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Financial Aid</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Scholarships &amp; Financial Aid</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              IILM is committed to making quality education accessible. Explore our scholarship options below.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {scholarships.map((s) => (
              <div key={s.name} className="bg-white rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20">
                <div className="inline-block px-3 py-1.5 rounded-full bg-maroon/10 text-maroon text-xs font-semibold mb-4">
                  {s.coverage}
                </div>
                <h3 className="font-bold text-navy text-base mb-2">{s.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Loan Partners */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Finance Your Education</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Education Loan Partners</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              IILM has tie-ups with leading financial institutions to help you secure education loans quickly and at competitive rates.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {loanPartners.map((partner) => (
              <div
                key={partner}
                className="flex flex-col items-center px-6 py-4 rounded-2xl border border-slate-200 bg-slate hover:border-navy/30 hover:shadow-sm transition-all"
              >
                <span className="font-semibold text-navy text-sm mb-1">{partner}</span>
                <span className="text-xs text-slate-400 text-center">Quick approval &bull; Competitive rates &bull; Covers full tuition</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Refund Policy */}
      <section className="bg-slate py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Fee Policy</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Fee Refund Policy</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              As per UGC/AICTE norms. All refund requests must be submitted in writing to the Admissions Office.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-4 font-semibold text-xs uppercase tracking-wider">Withdrawal Before</th>
                  <th className="text-left px-6 py-4 font-semibold text-xs uppercase tracking-wider">Refund Amount</th>
                </tr>
              </thead>
              <tbody>
                {refundPolicy.map((row, idx) => (
                  <tr
                    key={row.period}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-6 py-4 text-navy font-medium border-b border-slate-100">{row.period}</td>
                    <td className="px-6 py-4 text-slate-600 border-b border-slate-100">{row.refund}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">
            Processing fee of ₹1,000 is non-refundable in all cases. Refund timelines: 30 working days from approval.
          </p>
        </div>
      </section>

      {/* International Admissions */}
      <section id="international" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">International Students</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-5">
                Welcome, International Students
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                IILM University warmly welcomes students from across the world. We have a dedicated International Admissions Cell to assist you through every step — from application to visa to settling into campus life.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "TOEFL / IELTS / PTE accepted for English proficiency",
                  "SAT accepted for undergraduate admissions",
                  "Dedicated International Admissions Cell",
                  "Visa assistance and guidance",
                  "On-campus accommodation available",
                  "International student orientation programme",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:international@iilm.edu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-maroon text-white font-semibold rounded-full text-sm hover:bg-maroon-light transition-all"
              >
                international@iilm.edu
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-6">Partner Countries</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {partnerCountries.map((country) => (
                  <span key={country} className="px-4 py-2 bg-slate rounded-full border border-slate-100 text-sm font-medium text-navy">
                    {country}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: "10+", label: "Partner Countries" },
                  { stat: "500+", label: "International Alumni" },
                  { stat: "Visa", label: "Support Available" },
                  { stat: "Hostel", label: "On-Campus" },
                ].map((item) => (
                  <div key={item.label} className="bg-slate rounded-2xl p-5 border border-slate-100 text-center card-hover">
                    <div className="text-xl font-bold text-navy mb-1">{item.stat}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Brochure */}
      <section id="brochure" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Brochures</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Download Our Brochures</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Get detailed information about programmes, fees, campus life, and more.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {brochures.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-navy text-white flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-navy text-base mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">{b.desc}</p>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 rounded-full bg-maroon text-white text-sm font-semibold hover:bg-maroon-light transition-all"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
          {/* Inline form */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-100 p-8">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-2">Get the Brochure</p>
            <h3 className="font-bold text-navy text-lg mb-5">Enter Your Details to Receive the Brochure</h3>
            <form className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-blue/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-blue/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-navy placeholder:text-slate-400 focus:outline-none focus:border-blue/50"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-maroon text-white font-semibold rounded-xl hover:bg-maroon-light transition-all text-sm"
              >
                Send Me the Brochure
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Admissions */}
      <section id="contact" className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Get in Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contact Admissions Team</h2>
            <p className="text-white/55 mt-3 max-w-xl mx-auto">
              Our admissions counsellors are available Monday–Saturday, 9 AM – 6 PM to help you with any queries.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-6">
            {campusContacts.map((c) => (
              <div key={c.campus} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue/30 transition-all">
                <h3 className="font-bold text-white text-base mb-2">{c.campus}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-4">{c.address}</p>
                <a href={`tel:${c.phone}`} className="block text-sm text-white/70 hover:text-white transition-colors mb-1">
                  {c.phone}
                </a>
                <a href={`mailto:${c.email}`} className="block text-sm text-blue hover:text-white transition-colors">
                  {c.email}
                </a>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mb-10 max-w-2xl mx-auto">
            {[
              { campus: "Lucknow", phone: "+91-8065905226", email: "admissions.lko@iilm.edu" },
              { campus: "Jaipur", phone: "+91-8065905227", email: "admissions.jpr@iilm.edu" },
            ].map((c) => (
              <div key={c.campus} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue/30 transition-all">
                <h3 className="font-bold text-white text-base mb-3">{c.campus}</h3>
                <a href={`tel:${c.phone}`} className="block text-sm text-white/70 hover:text-white transition-colors mb-1">
                  {c.phone}
                </a>
                <a href={`mailto:${c.email}`} className="block text-sm text-blue hover:text-white transition-colors">
                  {c.email}
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917011772713"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp +91-7011772713
            </a>
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all shadow-lg shadow-maroon/25"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
