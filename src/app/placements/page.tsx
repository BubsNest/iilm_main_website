import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placements | IILM University",
  description:
    "IILM University's placement record: 400+ hiring companies, top recruiters from Fortune 500 to fast-growing startups across all campuses.",
};

const stats = [
  { value: "400+", label: "Hiring Companies" },
  { value: "95%+", label: "Placement Rate" },
  { value: "₹18 LPA", label: "Highest Package" },
  { value: "₹6.5 LPA", label: "Average Package" },
];

const sectors = [
  { name: "Consulting & Strategy", count: "60+" },
  { name: "Financial Services & Banking", count: "55+" },
  { name: "Technology & IT", count: "80+" },
  { name: "FMCG & Retail", count: "45+" },
  { name: "Manufacturing & Engineering", count: "40+" },
  { name: "Healthcare & Pharma", count: "30+" },
  { name: "E-commerce & Startups", count: "50+" },
  { name: "Legal & Compliance", count: "35+" },
];

const topRecruiters = [
  "Deloitte", "KPMG", "EY", "PWC", "Wipro", "Infosys", "TCS", "HCL Technologies",
  "Amazon", "Flipkart", "Zomato", "Paytm", "Nykaa", "OYO", "MakeMyTrip",
  "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra", "Yes Bank",
  "Hindustan Unilever", "ITC", "Nestlé", "Godrej", "Marico",
  "Hero MotoCorp", "Tata Motors", "Mahindra", "L&T", "Bosch",
];

const testimonials = [
  {
    name: "Riya Sharma",
    batch: "MBA 2024 | Gurugram",
    company: "Deloitte",
    role: "Business Analyst",
    quote: "IILM's placement cell was incredibly supportive. The mock interviews, resume workshops, and industry exposure made all the difference when I walked into Deloitte's interview.",
  },
  {
    name: "Arjun Mehta",
    batch: "B.Tech CSE 2024 | Greater Noida",
    company: "Amazon",
    role: "SDE-I",
    quote: "The AI curriculum at IILM gave me a real edge. I was solving real ML problems from my second year — by the time Amazon's interview came, I was ready.",
  },
  {
    name: "Priya Nair",
    batch: "BBA LL.B 2024 | Lodhi Road",
    company: "Shardul Amarchand Mangaldas",
    role: "Associate",
    quote: "IILM's Law School and its network of alumni in top firms was instrumental in my placement. The moot court training was exactly what top law firms look for.",
  },
];

export default function PlacementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://iilm.edu/demo2020/wp-content/uploads/2023/07/iilmu-placement-banner_11zon-2.jpg"
            alt="IILM Placements"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Placements 2025</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Where Talent Meets<br />
            <span className="text-gold-gradient">Opportunity</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-12">
            Over 400 companies. Consistent placement records. A network that opens doors across every industry.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-white/55 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Recruiting Sectors</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Every Industry. Every Role.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((s) => (
              <div key={s.name} className="card-hover p-5 rounded-2xl border border-slate-100 bg-white hover:border-navy/20 flex items-center justify-between">
                <span className="text-sm font-medium text-navy">{s.name}</span>
                <span className="text-xs font-bold text-gold bg-gold/10 px-2.5 py-1 rounded-full">{s.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Our Recruiters</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Top Companies That Hire IILM Graduates</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {topRecruiters.map((company) => (
              <div
                key={company}
                className="px-5 py-2.5 bg-white rounded-full border border-slate-200 text-sm font-medium text-navy hover:border-navy/30 hover:shadow-sm transition-all card-hover"
              >
                {company}
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">...and 370+ more leading companies</p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Placement Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">How IILM Prepares You</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "📋", title: "Resume Building", desc: "Dedicated sessions with placement experts to craft a resume that stands out." },
              { icon: "🎤", title: "Interview Prep", desc: "Mock GDs, case interviews, and HR rounds with real industry panellists." },
              { icon: "🏢", title: "Industry Exposure", desc: "Live projects, internships, and company visits throughout the programme." },
              { icon: "🤝", title: "Company Relations", desc: "Year-round engagement with 400+ recruiters who actively target IILM." },
              { icon: "🧠", title: "Aptitude Training", desc: "Quantitative aptitude, logical reasoning, and verbal ability workshops." },
              { icon: "🌐", title: "LinkedIn & Personal Brand", desc: "Coaching on digital presence, LinkedIn optimisation, and networking." },
            ].map((item) => (
              <div key={item.title} className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Student Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Placed. Thriving. Proud.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-hover p-7 rounded-2xl border border-slate-100 bg-white">
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-blue flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.batch}</div>
                    <div className="text-xs text-gold font-medium">{t.role} @ {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5">
            Your Placement Starts the Day You Enrol
          </h2>
          <p className="text-slate-600 mb-10">
            IILM&apos;s placement preparation begins in semester one — not the final year. Join us and start building your career from day one.
          </p>
          <Link
            href="https://admissions.iilm.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-navy text-white font-semibold rounded-full hover:bg-navy-light transition-all"
          >
            Apply for 2026 →
          </Link>
        </div>
      </section>
    </>
  );
}
