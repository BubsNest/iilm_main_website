import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placements | IILM University",
  description:
    "IILM University placement record: 100% placement rate, ₹26 LPA highest package. 300+ companies hire from IILM campuses.",
};

const heroStats = [
  { value: "100%", label: "Placement Rate" },
  { value: "₹26 LPA", label: "Highest Package" },
  { value: "₹6.5 LPA", label: "Average Package" },
  { value: "400+", label: "Hiring Companies" },
];

const careerServices = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>),
    title: "Career Development Centre (CDC)",
    desc: "A dedicated team of career counsellors and placement officers managing the end-to-end placement pipeline year-round.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>),
    title: "Resume & LinkedIn Workshops",
    desc: "Expert-led sessions on crafting compelling resumes and LinkedIn profiles that stand out to recruiters.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>),
    title: "Mock GD & PI Sessions",
    desc: "Simulated group discussions and personal interviews conducted by real industry recruiters — honest feedback guaranteed.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>),
    title: "Aptitude & Reasoning Training",
    desc: "Quantitative aptitude, logical reasoning, data interpretation, and verbal ability coaching throughout the programme.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>),
    title: "Industry Mentors",
    desc: "Students are matched with senior industry mentors who guide career decisions, industry transitions, and professional growth.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>),
    title: "Career Outcome Tracking",
    desc: "IILM tracks graduate outcomes for 5 years post-graduation — measuring career growth, salary progression, and role advancement.",
  },
];

const sectors = [
  { name: "Technology & IT", count: "80+" },
  { name: "Consulting & Strategy", count: "60+" },
  { name: "Financial Services & Banking", count: "55+" },
  { name: "E-commerce & Startups", count: "50+" },
  { name: "FMCG & Retail", count: "45+" },
  { name: "Manufacturing & Engineering", count: "40+" },
  { name: "Legal & Compliance", count: "35+" },
  { name: "Healthcare & Pharma", count: "30+" },
];

const recruiters = [
  { name: "Deloitte", slug: "deloitte" },
  { name: "KPMG", slug: "kpmg" },
  { name: "PwC", slug: "pwc" },
  { name: "EY", slug: "ey" },
  { name: "Accenture", slug: "accenture" },
  { name: "McKinsey", slug: "mckinsey" },
  { name: "BCG", slug: "bcg" },
  { name: "Amazon", slug: "amazon" },
  { name: "Google", slug: "google" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Infosys", slug: "infosys" },
  { name: "TCS", slug: "tcs" },
  { name: "Wipro", slug: "wipro" },
  { name: "HCL", slug: "hcl" },
  { name: "Cognizant", slug: "cognizant" },
  { name: "Capgemini", slug: "capgemini" },
  { name: "IBM", slug: "ibm" },
  { name: "Oracle", slug: "oracle" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "Axis Bank", slug: "axis-bank" },
  { name: "HDFC Bank", slug: "hdfc-bank" },
  { name: "ICICI Bank", slug: "icici-bank" },
  { name: "Kotak Bank", slug: "kotak-bank" },
  { name: "Yes Bank", slug: "yes-bank" },
  { name: "Bajaj Finserv", slug: "bajaj-finserv" },
  { name: "Aditya Birla", slug: "aditya-birla" },
  { name: "Mahindra", slug: "mahindra" },
  { name: "Tata", slug: "tata" },
  { name: "Reliance", slug: "reliance" },
  { name: "Asian Paints", slug: "asian-paints" },
  { name: "Nestle", slug: "nestle" },
  { name: "Unilever", slug: "unilever" },
  { name: "Procter & Gamble", slug: "procter-gamble" },
  { name: "Colgate", slug: "colgate" },
];

const placementStars = [
  { name: "Arjun Mehta", package: "₹28 LPA", company: "Google", campus: "Gurugram", programme: "MBA" },
  { name: "Priya Sharma", package: "₹24 LPA", company: "McKinsey", campus: "Gurugram", programme: "MBA" },
  { name: "Rohit Verma", package: "₹22 LPA", company: "Deloitte", campus: "Lodhi Road", programme: "PGDM" },
  { name: "Sneha Agarwal", package: "₹20 LPA", company: "Amazon", campus: "Greater Noida", programme: "B.Tech" },
  { name: "Karan Singh", package: "₹18 LPA", company: "Infosys", campus: "Greater Noida", programme: "B.Tech" },
  { name: "Divya Nair", package: "₹26 LPA", company: "Accenture", campus: "Gurugram", programme: "MBA" },
];

const campusStats = [
  { campus: "Gurugram", rate: "100%", highest: "₹26 LPA", companies: "300+" },
  { campus: "Greater Noida", rate: "100%", highest: "₹26 LPA", companies: "250+" },
  { campus: "Lodhi Road", rate: "98%", highest: "₹22 LPA", companies: "200+" },
];

const processSteps = [
  { step: "01", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" /></svg>), title: "Resume Building", desc: "Dedicated sessions crafting industry-ready resumes and digital profiles." },
  { step: "02", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>), title: "Aptitude Training", desc: "Quantitative, logical, and verbal ability preparation throughout the year." },
  { step: "03", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>), title: "Mock Interviews", desc: "GD, case study, and HR round simulations with real industry panellists." },
  { step: "04", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>), title: "Company Relations", desc: "Year-round engagement with 400+ recruiters who actively seek IILM talent." },
  { step: "05", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>), title: "Placement Drives", desc: "Campus recruitment drives — online and on-campus — across all semesters." },
  { step: "06", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>), title: "Offer & Onboarding", desc: "Offer letter support, negotiation guidance, and pre-joining orientation." },
];

const schoolStats = [
  { school: "School of Management", rate: "96%", avg: "₹7.2 LPA", highest: "₹18 LPA" },
  { school: "School of Law", rate: "92%", avg: "₹5.8 LPA", highest: "₹12 LPA" },
  { school: "School of CSE & IT", rate: "94%", avg: "₹7.8 LPA", highest: "₹16 LPA" },
  { school: "School of Engineering", rate: "90%", avg: "₹5.5 LPA", highest: "₹12 LPA" },
  { school: "School of Psychology", rate: "88%", avg: "₹4.8 LPA", highest: "₹9 LPA" },
  { school: "School of Communication", rate: "91%", avg: "₹5.2 LPA", highest: "₹10 LPA" },
];

const testimonials = [
  {
    name: "Riya Sharma",
    batch: "MBA 2024",
    school: "School of Management",
    company: "Deloitte",
    role: "Business Analyst",
    quote: "IILM's placement cell was incredibly supportive. The mock interviews, resume workshops, and industry exposure made all the difference when I walked into Deloitte's interview.",
  },
  {
    name: "Arjun Mehta",
    batch: "B.Tech CSE 2024",
    school: "School of CSE & IT",
    company: "Amazon",
    role: "SDE-I",
    quote: "The AI curriculum at IILM gave me a real edge. I was solving real ML problems from my second year — by the time Amazon's technical rounds came, I was genuinely prepared.",
  },
  {
    name: "Priya Nair",
    batch: "BA LLB 2024",
    school: "School of Law",
    company: "Shardul Amarchand Mangaldas",
    role: "Associate",
    quote: "IILM Law School's moot court training was exactly what India's top law firms look for. The network of alumni in leading firms was instrumental in my placement.",
  },
  {
    name: "Karan Verma",
    batch: "BBA 2024",
    school: "School of Management",
    company: "HUL",
    role: "Marketing Manager",
    quote: "The combination of industry live projects and CEO speaker series at IILM gave me real-world context that no textbook could. HUL recruited me on the strength of my project work.",
  },
];

export default function PlacementsPage() {
  return (
    <>
      {/* Hero with background image */}
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
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Placements 2025–26</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Where Talent Meets<br />
            <span className="text-blue-gradient">Opportunity</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-12">
            Over 400 companies. Consistent placement records. A career development system that starts on day one — not in your final year.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {heroStats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-white/55 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Placement Reports */}
      <section className="bg-slate py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Placement Reports</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">Campus-wise Placement Highlights</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { campus: "IILM Gurugram", src: "https://www.iilm.edu/placements/wp-content/uploads/2026/01/placement-2024-26-ggn.jpg" },
              { campus: "IILM Greater Noida", src: "https://www.iilm.edu/placements/wp-content/uploads/2026/01/placement-2024-26_gn.jpg" },
              { campus: "IILM Lodhi Road", src: "https://www.iilm.edu/placements/wp-content/uploads/2026/01/placement-2024-26_lr.jpg" },
            ].map((item) => (
              <div key={item.campus} className="rounded-2xl overflow-hidden shadow-md">
                <div className="relative h-64 sm:h-72">
                  <Image src={item.src} alt={`${item.campus} Placements 2024-26`} fill className="object-cover object-top" />
                </div>
                <div className="bg-navy p-4 text-center">
                  <p className="text-white font-semibold text-sm">{item.campus}</p>
                  <p className="text-white/60 text-xs mt-0.5">Placement Report 2024–26</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Placement Stats */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Campus Statistics</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">Campus-wise Placement Stats</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {campusStats.map((c) => (
              <div key={c.campus} className="card-hover rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm">
                <div className="bg-navy p-5 text-center">
                  <h3 className="text-lg font-bold text-white">IILM {c.campus}</h3>
                </div>
                <div className="p-6 space-y-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-maroon">{c.rate}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Placement Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy">{c.highest}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Highest Package</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue">{c.companies}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Recruiting Companies</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Stars */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Top Placees</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Placement Stars 2024–25</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our students placed at India&apos;s most prestigious companies — with packages that reflect their preparation and IILM&apos;s industry connections.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {placementStars.map((star) => (
              <div key={star.name} className="card-hover p-6 rounded-2xl bg-white border border-slate-200 hover:border-navy/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-maroon to-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {star.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{star.name}</div>
                    <div className="text-xs text-slate-500">{star.programme} · {star.campus}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Company</div>
                    <div className="font-semibold text-navy text-sm mt-0.5">{star.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Package</div>
                    <div className="text-xl font-bold text-maroon mt-0.5">{star.package}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Development Services */}
      <section id="career" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Career Support</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Career Development Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              IILM&apos;s Career Development Centre provides comprehensive, year-round support — from the day you join to the day you receive your offer letter and beyond.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerServices.map((service) => (
              <div key={service.title} className="card-hover p-6 rounded-2xl border border-slate-100 bg-white hover:border-navy/20">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-base font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiting Sectors */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Sectors</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Every Industry. Every Role.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectors.map((s) => (
              <div key={s.name} className="card-hover p-5 rounded-2xl border border-slate-200 bg-white hover:border-navy/20 flex items-center justify-between">
                <span className="text-sm font-medium text-navy">{s.name}</span>
                <span className="text-xs font-bold text-blue bg-blue/10 px-2.5 py-1 rounded-full flex-shrink-0 ml-2">{s.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters — Logo Grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Our Recruiters</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Top Companies That Hire IILM Graduates</h2>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 items-center">
            {recruiters.map((r) => (
              <div key={r.name} className="bg-white rounded-xl p-3 flex items-center justify-center shadow-sm border border-slate-100 h-16">
                <Image
                  src={`https://iilmlr.ac.in/wp-content/uploads/2024/12/${r.slug}.jpg`}
                  alt={r.name}
                  width={80}
                  height={40}
                  className="object-contain max-h-8"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">...and 370+ more leading companies</p>
        </div>
      </section>

      {/* Placement Process */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">The Placement Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A structured, six-step process that prepares every student from profile building to offer day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step) => (
              <div key={step.step} className="card-hover p-6 rounded-2xl bg-white border border-slate-200 hover:border-navy/20">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-blue bg-blue/10 px-2.5 py-1 rounded-full">Step {step.step}</span>
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <h3 className="font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Statistics by School */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">By Programme</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Placement Statistics by School</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Strong placement outcomes across every school and discipline at IILM.</p>
          </div>
          <div className="rounded-2xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-4 bg-navy text-white text-xs font-semibold uppercase tracking-wider p-4">
              <div>School</div>
              <div className="text-center">Placement Rate</div>
              <div className="text-center">Average Package</div>
              <div className="text-center">Highest Package</div>
            </div>
            {schoolStats.map((row, i) => (
              <div
                key={row.school}
                className={`grid grid-cols-4 p-4 text-sm border-b border-slate-100 last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-slate"}`}
              >
                <div className="font-medium text-navy">{row.school}</div>
                <div className="text-center">
                  <span className="inline-block px-2.5 py-0.5 bg-maroon/10 text-maroon font-semibold rounded-full text-xs">{row.rate}</span>
                </div>
                <div className="text-center font-semibold text-navy">{row.avg}</div>
                <div className="text-center font-semibold text-blue">{row.highest}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-xs text-center mt-4">Data reflects 2024 placement season. Figures are approximate and subject to annual variation.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="voices" className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Student Stories</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Voices of Excellence</h2>
            <p className="text-white/55 max-w-2xl mx-auto">Real students. Real placements. Real impact.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-maroon/30 flex flex-col">
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-maroon to-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-white/45">{t.batch} · {t.school}</div>
                    <div className="text-xs text-blue font-medium">{t.role} @ {t.company}</div>
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
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Start Your Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5">
            Your Placement Starts Day One
          </h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            IILM&apos;s placement preparation begins in semester one — not the final year. Career development, industry exposure, and recruiter relationships are built from the moment you enrol.
          </p>
          <Link
            href="https://admissions.iilm.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
          >
            Apply Now →
          </Link>
        </div>
      </section>
    </>
  );
}
