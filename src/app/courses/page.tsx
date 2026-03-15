import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes | IILM University",
  description:
    "Explore IILM University's full range of undergraduate, postgraduate, doctoral, and executive programmes across 6 schools and 5 campuses.",
};

const ugProgrammes = [
  { name: "BBA", duration: "3 Years", campuses: ["Gurugram", "Greater Noida"] },
  { name: "B.Tech CSE", duration: "4 Years", campuses: ["Gurugram", "Greater Noida"] },
  { name: "B.Tech CSE (AI & ML)", duration: "4 Years", campuses: ["Gurugram", "Greater Noida"] },
  { name: "B.Tech CSE (Data Science)", duration: "4 Years", campuses: ["Gurugram", "Greater Noida"] },
  { name: "B.Tech Mechanical Engineering", duration: "4 Years", campuses: ["Greater Noida"] },
  { name: "B.Tech Civil Engineering", duration: "4 Years", campuses: ["Greater Noida"] },
  { name: "B.Tech Chemical Engineering", duration: "4 Years", campuses: ["Greater Noida"] },
  { name: "B.Tech Electrical Engineering", duration: "4 Years", campuses: ["Greater Noida"] },
  { name: "B.Sc. (Physics / Chemistry / Maths / Bio)", duration: "3 Years", campuses: ["Greater Noida"] },
  { name: "B.A. Psychology", duration: "3 Years", campuses: ["Gurugram", "Greater Noida"] },
  { name: "B.A. LL.B", duration: "5 Years", campuses: ["Gurugram", "Greater Noida"] },
  { name: "BBA LL.B", duration: "5 Years", campuses: ["Gurugram", "Greater Noida"] },
  { name: "B.A. Communication", duration: "3 Years", campuses: ["Gurugram", "Greater Noida"] },
  { name: "B.Des", duration: "4 Years", campuses: ["Gurugram"] },
  { name: "B.A. Liberal Arts (3yr / 4yr FYUP)", duration: "3–4 Years", campuses: ["Gurugram", "Greater Noida"] },
];

const pgProgrammes = [
  { name: "MBA (7 Specialisations)", duration: "2 Years", campuses: ["Gurugram", "Greater Noida", "Lucknow", "Jaipur"] },
  { name: "PGDBM", duration: "2 Years", campuses: ["Lodhi Road Delhi"] },
  { name: "MCA", duration: "2 Years", campuses: ["Gurugram", "Greater Noida"] },
  { name: "M.Tech (Various Specialisations)", duration: "2 Years", campuses: ["Greater Noida"] },
  { name: "M.Sc. (Physics / Chemistry / Maths / Bio)", duration: "2 Years", campuses: ["Greater Noida"] },
  { name: "M.A. Psychology", duration: "2 Years", campuses: ["Gurugram", "Greater Noida"] },
  { name: "LL.M", duration: "1 Year", campuses: ["Gurugram", "Greater Noida"] },
  { name: "M.A. Communication", duration: "2 Years", campuses: ["Gurugram", "Greater Noida"] },
  { name: "M.Des", duration: "2 Years", campuses: ["Gurugram"] },
];

const mbaSpecs = [
  { name: "Marketing", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" /></svg>), cii: false },
  { name: "Finance", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), cii: false },
  { name: "HR Management", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>), cii: false },
  { name: "Operations & Supply Chain", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>), cii: false },
  { name: "Business Analytics", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>), cii: false },
  { name: "Entrepreneurship", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>), cii: false },
  { name: "Logistics & Supply Chain", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>), cii: true },
];

const fyupBenefits = [
  { title: "Flexible Learning Paths", desc: "Choose your trajectory — exit at Year 1, 2, 3 or complete Year 4 for Honours/Research degree." },
  { title: "Research Opportunities", desc: "Year 4 students undertake independent research projects under faculty mentorship." },
  { title: "Global Readiness", desc: "International exchange options and globally benchmarked curriculum aligned with NEP 2020." },
  { title: "Multiple Exit Options", desc: "Certificate → Diploma → Bachelor's → Honours/Research — all within one programme." },
  { title: "Minor in a Second Discipline", desc: "Pursue a minor in a complementary field alongside your primary degree." },
  { title: "Internship in Year 3", desc: "Mandatory industry internship ensures real-world exposure before final year." },
];

const phdProgrammes = [
  { name: "PhD in Management", campuses: ["Gurugram", "Greater Noida"] },
  { name: "PhD in Law", campuses: ["Gurugram", "Greater Noida"] },
  { name: "PhD in Engineering", campuses: ["Greater Noida"] },
  { name: "PhD in Social Sciences", campuses: ["Gurugram", "Greater Noida"] },
  { name: "PhD in Computer Science", campuses: ["Gurugram", "Greater Noida"] },
];

// ── New programme data ──────────────────────────────────────────────────────

interface DetailProgramme {
  name: string;
  duration: string;
  tag?: string;
  desc: string;
  badge?: string;
}

const managementProgrammes: DetailProgramme[] = [
  {
    name: "PGDM",
    duration: "2 Years · Gurugram",
    tag: "AICTE Approved",
    desc: "India's most industry-integrated PGDM, accredited by AICTE. 12 specializations including Marketing, Finance, HR, Operations, Business Analytics.",
  },
  {
    name: "PGDM (Executive)",
    duration: "Weekend / Evening",
    tag: "Working Professionals",
    desc: "Weekend/evening programme for working professionals with 3+ years experience.",
  },
  {
    name: "PGP-EFBM",
    duration: "1 Year · Intensive",
    tag: "Entrepreneurship",
    desc: "Post Graduate Programme in Entrepreneurship & Family Business Management — a 1-year intensive for business owners and next-gen entrepreneurs.",
  },
  {
    name: "MBA in Logistics & Supply Chain",
    duration: "2 Years",
    tag: "CII Partnership",
    desc: "In partnership with CII — India's first industry-integrated MBA in Logistics, preparing students for India's ₹14 trillion logistics sector.",
    badge: "CII",
  },
  {
    name: "MBA in Sports Management",
    duration: "2 Years",
    tag: "IMG Reliance",
    desc: "IILM x IMG Reliance partnership — the only sports management MBA from a ranked university in North India.",
    badge: "IMG Reliance",
  },
];

const liberalArtsProgrammes: DetailProgramme[] = [
  {
    name: "MA in Public Policy",
    duration: "1 Year",
    tag: "Policy & Governance",
    desc: "1-year master's examining policy design, governance, and development economics. Designed for civil services aspirants and policy practitioners.",
  },
  {
    name: "BSc (University of London)",
    duration: "3 Years",
    tag: "International Degree",
    desc: "An international undergraduate degree in Economics/Management Sciences, taught at IILM and awarded by the University of London.",
    badge: "UoL",
  },
];

const designProgrammes: DetailProgramme[] = [
  {
    name: "B.Design (Product Design)",
    duration: "4 Years · UG",
    tag: "BCI Affiliated",
    desc: "4-year undergraduate design degree combining industrial design, user research, and design thinking. BCI-affiliated.",
  },
  {
    name: "B.Design (Communication Design)",
    duration: "4 Years · UG",
    tag: "Visual Communication",
    desc: "4-year programme covering visual communication, branding, typography, and digital design.",
  },
  {
    name: "BSc in Animation & UI/UX",
    duration: "3 Years · UG",
    tag: "Digital Economy",
    desc: "3-year programme combining 3D animation, motion design, and UI/UX for the digital economy.",
  },
];

const technologyProgrammes: DetailProgramme[] = [
  {
    name: "M.Tech in Generative AI",
    duration: "2 Years · PG",
    tag: "India's First",
    desc: "India's first M.Tech with a dedicated Generative AI track — covering LLMs, diffusion models, and AI application development.",
    badge: "First in India",
  },
  {
    name: "BSc in Forensic Science",
    duration: "3 Years · UG",
    tag: "Applied Sciences",
    desc: "3-year undergraduate programme in forensic biology, chemistry, and digital forensics.",
  },
];

const bbaSpecializations = [
  { name: "BBA in Digital Marketing", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>) },
  { name: "BBA in Business Analytics", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>) },
  { name: "BBA in Entrepreneurship", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>) },
  { name: "BBA in Finance", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>) },
  { name: "BBA in International Business", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>) },
  { name: "BBA in Supply Chain Management", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>) },
  { name: "BBA in Retail Management", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>) },
  { name: "BBA in Human Resources", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>) },
  { name: "BBA in Healthcare Management", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>) },
  { name: "BBA in Hospitality Management", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>) },
];

// ── Sub-components ──────────────────────────────────────────────────────────

function ProgrammeCard({ name, duration, campuses }: { name: string; duration: string; campuses: string[] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20 flex flex-col">
      <h3 className="font-bold text-navy text-base mb-2 flex-1">{name}</h3>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-semibold bg-navy/8 text-navy px-3 py-1 rounded-full">{duration}</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {campuses.map((c) => (
          <span key={c} className="text-xs bg-blue/10 text-blue font-medium px-2.5 py-1 rounded-full">{c}</span>
        ))}
      </div>
      <div className="flex gap-2 mt-auto">
        <Link
          href="/contact"
          className="flex-1 text-center text-xs font-semibold py-2 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition-all"
        >
          Enquire
        </Link>
        <Link
          href="https://admissions.iilm.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-xs font-semibold py-2 rounded-full bg-maroon text-white hover:bg-maroon-light transition-all"
        >
          Apply
        </Link>
      </div>
    </div>
  );
}

function DetailProgrammeCard({ programme }: { programme: DetailProgramme }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20 flex flex-col relative">
      {programme.badge && (
        <div className="absolute top-4 right-4">
          <span className="text-xs font-semibold bg-blue/10 text-blue px-2.5 py-1 rounded-full">{programme.badge}</span>
        </div>
      )}
      {programme.tag && (
        <span className="inline-block mb-3 text-xs font-semibold bg-maroon/10 text-maroon px-2.5 py-1 rounded-full w-fit">
          {programme.tag}
        </span>
      )}
      <h3 className="font-bold text-navy text-base mb-1 flex-1 pr-4">{programme.name}</h3>
      <p className="text-xs font-semibold text-slate-400 mb-3">{programme.duration}</p>
      <p className="text-sm text-slate-600 leading-relaxed mb-5">{programme.desc}</p>
      <div className="flex gap-2 mt-auto">
        <Link
          href="/contact"
          className="flex-1 text-center text-xs font-semibold py-2 rounded-full border border-navy/20 text-navy hover:bg-navy hover:text-white transition-all"
        >
          Enquire
        </Link>
        <Link
          href="https://admissions.iilm.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center text-xs font-semibold py-2 rounded-full bg-maroon text-white hover:bg-maroon-light transition-all"
        >
          Apply
        </Link>
      </div>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function CoursesPage() {
  const filterLinks = [
    { label: "All", href: "/courses" },
    { label: "Undergraduate", href: "#undergraduate" },
    { label: "Postgraduate", href: "#postgraduate" },
    { label: "Doctoral", href: "#doctoral" },
    { label: "Executive", href: "#executive" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Academic Programmes</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Programmes at IILM —<br />
            <span className="text-blue-gradient">Multidisciplinary. Industry-Integrated. AI-Ready.</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-10">
            6 Schools. 5 Campuses. UG, PG, PhD &amp; Executive programmes designed for the careers of tomorrow.
            Whether you&apos;re stepping into higher education or advancing your career, IILM has a pathway built for you.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Management", "CSE", "Engineering", "Sciences", "Law", "Psychology", "Communication", "Design", "Liberal Arts"].map((s) => (
              <span key={s} className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Finder */}
      <section className="bg-slate py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-2">Programme Finder</p>
            <h2 className="text-2xl font-bold text-navy">Find Your Programme</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {filterLinks.map((f) => (
              <a
                key={f.label}
                href={f.href}
                className="px-6 py-2.5 rounded-full border border-navy/20 text-navy text-sm font-semibold hover:bg-navy hover:text-white transition-all"
              >
                {f.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Management / MBA / PGDM ──────────────────────────────────────────── */}
      <section id="management" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Banner */}
          <div className="relative rounded-3xl overflow-hidden mb-12 h-56 sm:h-72">
            <Image
              src="https://iilm.edu/demo2020/wp-content/uploads/2026/03/LEADING-IN-A-CHANGING-WORLD-for-web-700x450.jpg"
              alt="IILM School of Management"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-navy/55 flex flex-col justify-end p-8">
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-2">School of Management</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">MBA, PGDM &amp; Management Programmes</h2>
            </div>
          </div>

          <div className="text-center mb-10">
            <p className="text-slate-500 max-w-2xl mx-auto">
              Industry-integrated management education spanning MBA, PGDM, executive formats, and specialist pathways — powered by partnerships with CII and IMG Reliance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {managementProgrammes.map((p) => (
              <DetailProgrammeCard key={p.name} programme={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Undergraduate Programmes */}
      <section id="undergraduate" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">UG Programmes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Undergraduate Programmes</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Begin your academic journey with a programme designed to build depth, breadth, and real-world readiness.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ugProgrammes.map((p) => (
              <ProgrammeCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BBA Specializations ───────────────────────────────────────────────── */}
      <section id="bba" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">BBA Specializations</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Choose Your BBA Track</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              IILM&apos;s BBA offers 10 specialization tracks — pick the one that matches your ambition and industry of choice.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {bbaSpecializations.map((spec) => (
              <div
                key={spec.name}
                className="bg-white rounded-2xl border border-slate-100 p-5 card-hover hover:border-navy/20 text-center flex flex-col items-center"
              >
                <div className="text-3xl mb-3">{spec.icon}</div>
                <h3 className="font-semibold text-navy text-sm leading-snug mb-3">{spec.name}</h3>
                <Link
                  href="https://admissions.iilm.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-xs font-semibold text-blue hover:underline"
                >
                  Apply →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postgraduate Programmes */}
      <section id="postgraduate" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">PG Programmes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Postgraduate Programmes</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Specialise, accelerate, and lead. Our PG programmes combine academic rigour with industry immersion.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pgProgrammes.map((p) => (
              <ProgrammeCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* MBA Specialisations */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">MBA Specialisations</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Choose Your MBA Focus</h2>
            <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
              IILM&apos;s MBA offers 7 industry-aligned specialisations — available across Gurugram, Greater Noida, Lucknow &amp; Jaipur campuses.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {mbaSpecs.map((spec) => (
              <div
                key={spec.name}
                className="bg-white rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20 relative"
              >
                {spec.cii && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-semibold bg-blue/10 text-blue px-2.5 py-1 rounded-full">CII Partnership</span>
                  </div>
                )}
                <div className="text-3xl mb-4">{spec.icon}</div>
                <h3 className="font-bold text-navy text-base mb-1">MBA — {spec.name}</h3>
                {spec.cii && (
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    In partnership with the Confederation of Indian Industry (CII)
                  </p>
                )}
                <Link
                  href="https://admissions.iilm.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-xs font-semibold text-blue hover:underline"
                >
                  Apply for this Specialisation →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Liberal Arts & Social Sciences ────────────────────────────────────── */}
      <section id="liberal-arts" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Liberal Arts &amp; Social Sciences</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Liberal Arts &amp; Social Sciences Programmes</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Programmes that develop critical thinking, global perspectives, and the analytical edge needed for policy, research, and leadership.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {liberalArtsProgrammes.map((p) => (
              <DetailProgrammeCard key={p.name} programme={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Design & Creative ─────────────────────────────────────────────────── */}
      <section id="design" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Design &amp; Creative</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Design &amp; Creative Programmes</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              From product and communication design to animation and UI/UX — programmes built for the creative economy.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {designProgrammes.map((p) => (
              <DetailProgrammeCard key={p.name} programme={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology ───────────────────────────────────────────────────────── */}
      <section id="technology" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Banner */}
          <div className="relative rounded-3xl overflow-hidden mb-12 h-56 sm:h-72">
            <Image
              src="https://iilm.edu/demo2020/wp-content/uploads/2026/03/Growth-OF-AI-700x450.jpg"
              alt="IILM School of Engineering & Technology"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-navy/55 flex flex-col justify-end p-8">
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-2">School of Engineering &amp; Technology</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Emerging Technology Programmes</h2>
            </div>
          </div>

          <div className="text-center mb-10">
            <p className="text-slate-500 max-w-2xl mx-auto">
              Future-focused technology programmes — including India&apos;s first M.Tech in Generative AI — designed for the next generation of tech leaders.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologyProgrammes.map((p) => (
              <DetailProgrammeCard key={p.name} programme={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Law School Banner ─────────────────────────────────────────────────── */}
      <section id="law" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Banner */}
          <div className="relative rounded-3xl overflow-hidden mb-12 h-56 sm:h-72">
            <Image
              src="https://iilm.edu/demo2020/wp-content/uploads/2026/03/Gender-Budgeting-for-web-700x450.jpg"
              alt="IILM School of Law"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-navy/55 flex flex-col justify-end p-8">
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-2">School of Law</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Law Programmes at IILM</h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "B.A. LL.B", duration: "5 Years", campuses: ["Gurugram", "Greater Noida"] },
              { name: "BBA LL.B", duration: "5 Years", campuses: ["Gurugram", "Greater Noida"] },
              { name: "LL.M", duration: "1 Year", campuses: ["Gurugram", "Greater Noida"] },
              { name: "PhD in Law", duration: "3–5 Years", campuses: ["Gurugram", "Greater Noida"] },
            ].map((p) => (
              <ProgrammeCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* FYUP Section */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold bg-maroon text-white px-3 py-1.5 rounded-full uppercase tracking-widest">NEW</span>
                <p className="text-xs font-semibold text-blue uppercase tracking-widest">Four-Year Undergraduate Programme</p>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-5">
                B.A. Liberal Arts —<br />Four-Year Undergraduate Programme (FYUP)
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                IILM&apos;s new 4-year undergraduate programme offers a flexible, multidisciplinary curriculum with multiple exit points aligned with the National Education Policy (NEP) 2020.
              </p>
              <div className="space-y-2 mb-8">
                {[
                  { year: "Year 1 Exit", award: "Certificate" },
                  { year: "Year 2 Exit", award: "Diploma" },
                  { year: "Year 3 Exit", award: "Bachelor's Degree" },
                  { year: "Year 4 Exit", award: "Honours / Research Degree" },
                ].map((e) => (
                  <div key={e.year} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
                    <span className="text-xs font-semibold text-blue w-24 flex-shrink-0">{e.year}</span>
                    <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-sm font-semibold text-navy">{e.award}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-3">
                <Link
                  href="https://admissions.iilm.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-maroon text-white font-semibold rounded-full text-sm hover:bg-maroon-light transition-all"
                >
                  Apply for FYUP
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-navy/20 text-navy font-semibold rounded-full text-sm hover:bg-navy hover:text-white transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-6">Programme Highlights</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {fyupBenefits.map((b) => (
                  <div key={b.title} className="bg-white rounded-2xl border border-slate-100 p-5 card-hover hover:border-navy/20">
                    <h4 className="font-semibold text-navy text-sm mb-2">{b.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctoral */}
      <section id="doctoral" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Doctoral Programmes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Research &amp; Doctoral Programmes</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Advance knowledge. Contribute original research. IILM&apos;s PhD programmes support scholars across disciplines.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {phdProgrammes.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20">
                <h3 className="font-bold text-navy text-base mb-3">{p.name}</h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.campuses.map((c) => (
                    <span key={c} className="text-xs bg-blue/10 text-blue font-medium px-2.5 py-1 rounded-full">{c}</span>
                  ))}
                </div>
                <div className="text-xs text-slate-400 mb-4">Full-time &amp; Part-time options available</div>
                <Link
                  href="https://admissions.iilm.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue hover:underline"
                >
                  Apply for PhD Research →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/research"
              className="inline-block px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Apply for PhD Research
            </Link>
          </div>
        </div>
      </section>

      {/* Executive Education */}
      <section id="executive" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Executive Education</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-5">
                Learning Without Leaving Your Career
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                IILM&apos;s Executive Education division offers management development programmes, corporate training, and leadership workshops designed for working professionals, senior managers, and organisations.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Management Development Programmes (MDPs)",
                  "Corporate Training & Customised L&D",
                  "Leadership Workshops & Bootcamps",
                  "Online & Blended Learning Options",
                  "Certification in Emerging Technologies",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                    <svg className="w-4 h-4 text-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/executive-education"
                className="inline-block px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
              >
                Explore Executive Education →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "500+", label: "Executives Trained" },
                { stat: "50+", label: "Corporate Partners" },
                { stat: "20+", label: "MDP Programmes" },
                { stat: "3", label: "Learning Formats" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-6 border border-slate-100 text-center card-hover">
                  <div className="text-3xl font-bold text-navy mb-1">{item.stat}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Ready to Apply for 2026?
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Applications are open for all programmes across all campuses. Take the first step towards your future at IILM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all shadow-lg shadow-maroon/25"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-white/25 text-white rounded-full hover:bg-white/10 transition-all"
            >
              Talk to a Counsellor
            </Link>
            <Link
              href="/admissions#brochure"
              className="px-8 py-3.5 border border-white/25 text-white rounded-full hover:bg-white/10 transition-all"
            >
              Download Brochure
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
