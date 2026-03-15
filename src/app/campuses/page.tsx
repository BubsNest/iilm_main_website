import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IILM University Campuses | Gurugram, Greater Noida, Delhi, Lucknow & Jaipur",
  description:
    "Explore IILM University's five campuses across Gurugram, Greater Noida, Lodhi Road Delhi, Lucknow, and Jaipur. Find programmes, contact details, and campus highlights.",
};

interface Campus {
  slug: string;
  name: string;
  city: string;
  type: "University Campus" | "Academy Campus";
  tagline: string;
  schools: string[];
  address: string;
  phone: string;
  email: string;
  highlight: string;
}

const campuses: Campus[] = [
  {
    slug: "gurugram",
    name: "IILM University, Gurugram",
    city: "Gurugram, Haryana",
    type: "University Campus",
    tagline: "Flagship campus — home to 7 schools, AI labs, and a 12-acre urban campus on Golf Course Road.",
    schools: [
      "School of Management (BBA / MBA)",
      "School of CSE",
      "School of Psychology",
      "School of Law",
      "School of Communication",
      "School of Design",
      "School of Liberal Arts",
    ],
    address: "Plot No. 69-71, Golf Course Road, Sector 53, Gurugram, Haryana 122003",
    phone: "+91-8065905223",
    email: "admissions.iilmu@iilm.edu",
    highlight: "7 Schools · AI Labs · Moot Court · Design Studios",
  },
  {
    slug: "greater-noida",
    name: "IILM University, Greater Noida",
    city: "Greater Noida, UP",
    type: "University Campus",
    tagline: "Our engineering and sciences powerhouse in Knowledge Park II with dedicated research labs.",
    schools: [
      "School of Management (BBA / MBA)",
      "School of CSE",
      "School of Engineering",
      "School of Sciences",
      "School of Law",
      "School of Psychology",
      "School of Communication",
      "School of Liberal Arts",
    ],
    address: "Plot No. 16-18, Knowledge Park II, Greater Noida, Uttar Pradesh 201310",
    phone: "+91-8065905224",
    email: "admissions.gn@iilm.edu",
    highlight: "8 Schools · Engineering Labs · Sciences Block · Residential",
  },
  {
    slug: "lodhi-road",
    name: "IILM University Business School",
    city: "New Delhi",
    type: "Academy Campus",
    tagline: "Centrally located post-graduate management campus serving Delhi's corporate heartland.",
    schools: ["School of Management (PGDBM)"],
    address: "3, Lodhi Institutional Area, New Delhi 110003",
    phone: "+91-11-24627135",
    email: "info.ubs@iilm.edu",
    highlight: "PGDBM · Central Delhi · Corporate Network",
  },
  {
    slug: "lucknow",
    name: "IILM Academy, Lucknow",
    city: "Lucknow, UP",
    type: "Academy Campus",
    tagline: "Bringing IILM's management excellence to the heartland of Uttar Pradesh.",
    schools: ["School of Management (MBA)"],
    address: "IILM Academy of Higher Learning, Lucknow, Uttar Pradesh",
    phone: "+91-522-0000000",
    email: "admissions@iilm.edu",
    highlight: "MBA · Regional Campus · Industry Connect",
  },
  {
    slug: "jaipur",
    name: "IILM Academy, Jaipur",
    city: "Jaipur, Rajasthan",
    type: "Academy Campus",
    tagline: "Serving Rajasthan's growing demand for quality management education.",
    schools: ["School of Management (MBA)"],
    address: "IILM Academy of Higher Learning, Jaipur, Rajasthan",
    phone: "+91-141-0000000",
    email: "admissions@iilm.edu",
    highlight: "MBA · Regional Campus · Placement Network",
  },
];

export default function CampusesPage() {
  const universityCampuses = campuses.filter((c) => c.type === "University Campus");
  const academyCampuses = campuses.filter((c) => c.type === "Academy Campus");

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Our Campuses</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Five Campuses.<br />
            <span className="text-blue-gradient">One IILM.</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            A connected network of campuses spanning Delhi NCR, Lucknow, and Jaipur — each delivering the same commitment to academic excellence and career outcomes.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { value: "5", label: "Campuses" },
              { value: "12,000+", label: "Students" },
              { value: "3", label: "Cities" },
              { value: "15+", label: "Programmes" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="text-white/50 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Campuses */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">University Campuses</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">IILM University Campuses</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              Full-service university campuses with multiple schools, research centres, residential facilities, and UGC-recognised degrees.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {universityCampuses.map((campus) => (
              <CampusCard key={campus.slug} campus={campus} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Academy Campuses */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Academy Campuses</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">IILM Academy Campuses</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              Focused post-graduate management campuses delivering IILM-quality MBA education to regional students.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {academyCampuses.map((campus) => (
              <CampusCard key={campus.slug} campus={campus} featured={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Network Description */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Campus Network</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">Strategically Located for Maximum Impact</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our Delhi NCR campuses — Gurugram, Greater Noida, and Lodhi Road — place students at the heart of India's most dynamic job market, with easy access to Fortune 500 offices, law chambers, design studios, and tech parks.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our regional campuses in Lucknow and Jaipur bring the same IILM rigour to Tier 1 cities across North India, ensuring quality management education is not limited to Delhi NCR.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-slate border border-slate-100">
                <p className="font-bold text-navy text-sm mb-1">Delhi NCR — 3 Campuses</p>
                <p className="text-slate-600 text-sm">Gurugram · Greater Noida · Lodhi Road · Lucknow · Jaipur</p>
              </div>
              <div className="p-5 rounded-xl bg-slate border border-slate-100">
                <p className="font-bold text-navy text-sm mb-1">North India — 2 Regional Campuses</p>
                <p className="text-slate-600 text-sm">Lucknow, Uttar Pradesh · Jaipur, Rajasthan</p>
              </div>
              <div className="p-5 rounded-xl bg-navy text-white">
                <p className="font-bold text-sm mb-1">All Campuses Share</p>
                <p className="text-white/60 text-sm">Common placement cell · Shared faculty network · Unified IILM curriculum standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Admissions 2026</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Choose Your Campus. Begin Your Future.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Apply online or visit any campus for an in-person consultation with our admissions team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-block px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Apply Online →
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CampusCard({ campus, featured }: { campus: Campus; featured: boolean }) {
  return (
    <div className={`rounded-2xl border border-slate-100 card-hover bg-white overflow-hidden flex flex-col ${featured ? "" : ""}`}>
      {/* Header band */}
      <div className="bg-navy px-6 pt-6 pb-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="text-lg font-bold text-white leading-snug">{campus.name}</h3>
            <p className="text-white/60 text-sm mt-0.5">{campus.city}</p>
          </div>
          <span
            className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
              campus.type === "University Campus"
                ? "bg-blue text-white"
                : "bg-white/10 text-white/80"
            }`}
          >
            {campus.type}
          </span>
        </div>
        <p className="text-white/55 text-sm leading-relaxed">{campus.tagline}</p>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Schools */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Programmes Offered</p>
          <ul className="space-y-1.5">
            {campus.schools.map((school) => (
              <li key={school} className="flex items-center gap-2 text-sm text-slate-700">
                <svg className="w-3.5 h-3.5 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {school}
              </li>
            ))}
          </ul>
        </div>

        {/* Highlights */}
        <p className="text-xs text-slate-400 font-medium mb-4">{campus.highlight}</p>

        {/* Contact */}
        <div className="border-t border-slate-100 pt-4 mb-5 space-y-1.5">
          <p className="text-xs text-slate-500 leading-snug">{campus.address}</p>
          <p className="text-xs text-slate-500">{campus.phone}</p>
          <a
            href={`mailto:${campus.email}`}
            className="text-xs text-blue hover:underline"
          >
            {campus.email}
          </a>
        </div>

        {/* CTA */}
        <div className="mt-auto">
          <Link
            href={`/campuses/${campus.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue hover:text-navy transition-colors"
          >
            Explore Campus →
          </Link>
        </div>
      </div>
    </div>
  );
}
