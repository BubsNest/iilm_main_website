import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Experience & Global Connections | IILM University",
  description:
    "IILM University's 400+ industry partnerships, CII collaboration, global study programmes, and structured internship system — industry experience built in, not bolted on.",
};

const partnerFeatures = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c-.99.143-1.99.317-3 .52m3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>),
    title: "Curriculum Co-Design",
    desc: "Industry leaders sit on IILM's academic councils and co-design syllabi to ensure graduates are immediately productive.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18v18m6.75-18v18m2.25-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>),
    title: "Live Industry Projects",
    desc: "Students solve real business problems — from strategy to engineering — for partner companies during their programme.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>),
    title: "Placement Network",
    desc: "400+ active recruiting relationships mean IILM graduates are sought after across every major industry sector.",
  },
];

const partnerCompanies = [
  "Deloitte", "KPMG", "EY", "PwC", "McKinsey", "TCS", "Infosys", "Wipro",
  "HCL", "Amazon", "Flipkart", "Google", "Microsoft", "HDFC Bank", "ICICI Bank",
  "Axis Bank", "HUL", "ITC", "Nestlé", "L&T", "Hero MotoCorp", "Tata Motors",
  "Mahindra", "Bajaj", "Bosch", "OYO", "Zomato", "Paytm", "Nykaa", "MakeMyTrip",
];

const immersionPillars = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18v18m6.75-18v18m2.25-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>),
    title: "Live Industry Projects",
    desc: "Real problems from real companies, solved in student teams with faculty and industry mentor support. Projects contribute to final assessment grades.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>),
    title: "CEO & Leader Talks",
    desc: "Monthly speaker series bringing C-suite leaders, entrepreneurs, and policymakers directly to IILM campuses for open dialogues with students.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18v18m6.75-18v18m2.25-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>),
    title: "Industry Immersion Weeks",
    desc: "Intensive campus-to-industry sprints where students spend a full week embedded with a partner organisation — attending meetings, shadowing teams, and solving problems.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>),
    title: "Case Study Pedagogy",
    desc: "Harvard-style case learning is the backbone of IILM's classroom experience across Management, Law, Psychology, and other programmes.",
  },
];

const internshipSteps = [
  { step: "01", title: "Profile Building", desc: "Resume workshops, LinkedIn optimisation, and career goal mapping." },
  { step: "02", title: "Company Matching", desc: "The dedicated internship cell matches students to companies based on profile and preference." },
  { step: "03", title: "Internship", desc: "Structured, mentored internship at a partner company — real work, real responsibility." },
  { step: "04", title: "Evaluation", desc: "Dual evaluation by company supervisor and IILM faculty. Internship report and presentation." },
  { step: "05", title: "PPO / Placement", desc: "High-performing interns are fast-tracked for Pre-Placement Offers before final placements begin." },
];

const globalProgrammes = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>),
    title: "Global Study Programmes",
    subtitle: "Short-Term International Modules",
    desc: "Spend 2–4 weeks at a partner university in the UK, USA, Singapore, Germany, or Australia. Attend lectures, cultural immersions, and industry visits. Counts as IILM credit.",
    duration: "2–4 weeks",
    eligible: "All undergraduate and MBA students",
    cta: "Enquire About This Programme",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 003 12c0 .778.099 1.533.284 2.253" /></svg>),
    title: "Semester Abroad Programme",
    subtitle: "Full Semester at a Partner University",
    desc: "Complete a full semester at one of 30+ international partner universities while continuing on your IILM degree. Available in 15+ countries. Credits are fully transferable.",
    duration: "4–6 months (1 semester)",
    eligible: "UG students (Year 2/3) and MBA students",
    cta: "Enquire About This Programme",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>),
    title: "Accelerated Master's Programme",
    subtitle: "International Master's in +1 Year",
    desc: "Graduates of select IILM programmes can complete a full Master's degree from a partner university in the UK or Europe in just one additional year. Dual qualification — Indian + international.",
    duration: "1 year post-IILM graduation",
    eligible: "IILM graduates (select programmes)",
    cta: "Enquire About This Programme",
  },
];

const partnerUniversities = [
  {
    region: "Europe",
    flag: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 003 12c0 .778.099 1.533.284 2.253" /></svg>),
    universities: [
      "University of Westminster, UK",
      "Coventry University, UK",
      "Hanze University of Applied Sciences, Netherlands",
      "IESEG School of Management, France",
      "ESCP Business School, France",
      "IU International University, Germany",
    ],
  },
  {
    region: "North America",
    flag: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 003 12c0 .778.099 1.533.284 2.253" /></svg>),
    universities: [
      "Concordia University, Canada",
      "Ryerson University, Canada",
      "SUNY Buffalo, USA",
      "Johnson & Wales University, USA",
    ],
  },
  {
    region: "Asia Pacific",
    flag: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 003 12c0 .778.099 1.533.284 2.253" /></svg>),
    universities: [
      "University of Southern Queensland, Australia",
      "Victoria University, Australia",
      "Singapore Institute of Management",
      "Swinburne University, Australia",
    ],
  },
  {
    region: "Middle East",
    flag: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 003 12c0 .778.099 1.533.284 2.253" /></svg>),
    universities: [
      "University of Wollongong in Dubai, UAE",
      "Manipal University, Dubai",
    ],
  },
];

export default function IndustryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Industry & Global</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Industry Experience & Global Connections —<br />
            <span className="text-blue-gradient">Built In, Not Bolted On</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-10">
            At IILM, real-world exposure is not an add-on — it is woven into every programme, every semester, and every interaction.
            400+ partners. 30+ global universities. Lifelong career advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#partnerships"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Our Partners
            </Link>
            <Link
              href="#global"
              className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white/60 transition-all"
            >
              Global Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Partnerships */}
      <section id="partnerships" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Industry Network</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">400+ Industry Partnerships</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              IILM has cultivated deep, active partnerships spanning curriculum design, live projects,
              internships, research collaboration, and placement — with 400+ companies across India and globally.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {partnerFeatures.map((feature) => (
              <div key={feature.title} className="card-hover p-7 rounded-2xl border border-slate-100 bg-white hover:border-navy/20 text-center">
                <div className="flex justify-center mb-4 text-navy">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-navy mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Partner pills */}
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">Trusted by India&apos;s Leading Companies</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {partnerCompanies.map((company) => (
                <span
                  key={company}
                  className="px-5 py-2 bg-slate-100 text-slate-600 text-sm font-medium rounded-full border border-slate-200 hover:bg-navy hover:text-white hover:border-navy transition-all cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-6">...and 370+ more across every industry sector</p>
          </div>
        </div>
      </section>

      {/* CII Partnership */}
      <section className="bg-slate py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center shadow-sm">
            <span className="inline-block px-4 py-1.5 bg-maroon text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              In Partnership with CII
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">MBA in Logistics & Supply Chain Management</h2>
            <p className="text-blue font-semibold mb-6">A First-of-its-Kind Programme — IILM University × Confederation of Indian Industry</p>
            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              The <strong>Confederation of Indian Industry (CII)</strong> is India&apos;s premier business body, representing over 9,000 member companies from across industry sectors. In partnership with CII, IILM offers a uniquely industry-designed MBA in Logistics & Supply Chain Management — one of the most in-demand and fastest-growing sectors in India&apos;s economy.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 text-left">
              {[
                { icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c-.99.143-1.99.317-3 .52m3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" /></svg>), title: "CII-Designed Curriculum", desc: "Syllabus developed by CII logistics and supply chain experts — directly aligned to industry needs." },
                { icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m2.25-18v18m6.75-18v18m2.25-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" /></svg>), title: "Internships at CII Companies", desc: "Guaranteed internship placements at CII member companies — India's largest industrial conglomerates." },
                { icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.157 7.582A8.959 8.959 0 003 12c0 .778.099 1.533.284 2.253" /></svg>), title: "Industry Networking", desc: "Access to CII events, summits, and a network of 9,000+ companies for career building." },
                { icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>), title: "2-Year Full-Time Programme", desc: "Offered at the Gurugram campus. IILM University degree with CII co-certification." },
              ].map((item) => (
                <div key={item.title} className="card-hover p-5 rounded-xl bg-slate border border-slate-200">
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-navy text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Apply for MBA Logistics →
            </Link>
          </div>
        </div>
      </section>

      {/* Immersive Learning */}
      <section id="immersion" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Learning Philosophy</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Immersive Learning & Industry Readiness</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Four pillars of industry-integrated learning that go far beyond the standard classroom — giving every IILM student a head start in their career.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {immersionPillars.map((pillar) => (
              <div key={pillar.title} className="card-hover p-7 rounded-2xl border border-slate-100 bg-white hover:border-blue/20 text-center">
                <div className="flex justify-center mb-4 text-navy">{pillar.icon}</div>
                <h3 className="text-base font-semibold text-navy mb-3">{pillar.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Programme */}
      <section id="internship" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Internships</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Structured Internship Programme</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Every IILM student completes a structured, mentored internship as a mandatory component of their programme — with a dedicated internship cell managing the entire process.
            </p>
          </div>

          {/* Programme-specific internship details */}
          <div className="grid sm:grid-cols-3 gap-5 mb-14">
            {[
              { prog: "UG Students", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>), detail: "8-week summer internship after Year 2. Placement into relevant companies matched to major and career interest." },
              { prog: "MBA Students", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), detail: "2-month summer internship — integral to programme completion. Industry-mentored and faculty-supervised." },
              { prog: "B.Tech Students", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" /></svg>), detail: "6-month industry project + internship in Year 4. Many students receive Pre-Placement Offers (PPO) directly." },
            ].map((item) => (
              <div key={item.prog} className="card-hover p-6 rounded-2xl bg-white border border-slate-200">
                <div className="flex mb-3">{item.icon}</div>
                <h3 className="font-bold text-navy mb-2">{item.prog}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Process flow */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-navy text-center mb-8">The Internship Process</h3>
            <div className="flex flex-col sm:flex-row gap-0 items-center justify-center overflow-x-auto">
              {internshipSteps.map((step, i) => (
                <div key={step.step} className="flex items-center gap-0">
                  <div className="card-hover text-center p-5 rounded-2xl bg-navy text-white min-w-[140px] flex-shrink-0">
                    <div className="text-xs font-bold text-blue mb-1">Step {step.step}</div>
                    <div className="font-semibold text-sm mb-1">{step.title}</div>
                    <div className="text-xs text-white/55 leading-snug">{step.desc}</div>
                  </div>
                  {i < internshipSteps.length - 1 && (
                    <div className="text-slate-300 text-2xl mx-2 flex-shrink-0 hidden sm:block">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Exposure */}
      <section id="global" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Global Exposure</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Take Your Education Global</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Three distinct global exposure pathways — from short-term international modules to a full additional Master&apos;s degree from a global university.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-7">
            {globalProgrammes.map((prog) => (
              <div key={prog.title} className="card-hover rounded-2xl border border-slate-100 bg-white overflow-hidden hover:border-navy/20">
                <div className="bg-navy p-6 text-white">
                  <div className="flex justify-center mb-3 text-white">{prog.icon}</div>
                  <h3 className="text-lg font-bold mb-1">{prog.title}</h3>
                  <p className="text-blue text-sm font-semibold">{prog.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{prog.desc}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-navy">Duration:</span> {prog.duration}
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-500">
                      <span className="font-semibold text-navy flex-shrink-0">Eligible:</span> {prog.eligible}
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block text-center px-5 py-2.5 bg-maroon text-white text-sm font-semibold rounded-full hover:bg-maroon-light transition-all"
                  >
                    {prog.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Global Network</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Partner Universities Across the World</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              30+ partner universities across 15+ countries — giving IILM students access to the world&apos;s best campuses, classrooms, and communities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerUniversities.map((region) => (
              <div key={region.region} className="card-hover p-6 rounded-2xl bg-white border border-slate-200">
                <div className="flex mb-3 text-navy">{region.flag}</div>
                <h3 className="font-bold text-navy mb-4">{region.region}</h3>
                <ul className="space-y-2">
                  {region.universities.map((uni) => (
                    <li key={uni} className="text-xs text-slate-500 leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue mt-1.5 flex-shrink-0" />
                      {uni}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">...and 15+ more partner institutions across Africa, Southeast Asia, and the Americas</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Your Global Career Starts Here</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Build Your Global Career with IILM
          </h2>
          <p className="text-white/55 mb-10 leading-relaxed">
            Join a university where industry partnerships, global exposure, and real-world learning are not optional extras — they are the foundation of every degree.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Apply Now →
            </Link>
            <Link
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white/60 transition-all"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
