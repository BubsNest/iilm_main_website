import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IILM University | 30 Years of Academic Excellence",
  description:
    "Learn about IILM University — its purpose, vision, mission, history, accreditations, and Centres of Excellence across Gurugram, Greater Noida, and New Delhi.",
};

const values = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>),
    title: "Academic Integrity",
    desc: "We uphold the highest standards of honesty, rigour, and intellectual transparency in every classroom and research endeavour.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>),
    title: "Innovation & AI-First Thinking",
    desc: "We embed AI tools and critical technology literacy across every discipline, preparing students for an intelligence-driven economy.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>),
    title: "Inclusivity & Access",
    desc: "We remove barriers to world-class education by offering scholarships, flexible pathways, and a welcoming campus for every student.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>),
    title: "Industry Relevance",
    desc: "Our curriculum is co-designed with industry partners so that graduates are immediately productive and valued from day one.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>),
    title: "Global Outlook",
    desc: "With 30+ international university partners, we equip students to think and operate beyond borders.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>),
    title: "Emotional Intelligence",
    desc: "We build leaders who lead with empathy — developing self-awareness, resilience, and interpersonal mastery alongside academic skills.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>),
    title: "Social Responsibility",
    desc: "Every IILM graduate leaves with a sense of duty to community, nation, and environment — not just career.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>),
    title: "Research & Inquiry",
    desc: "We foster a culture of curiosity-driven research that contributes meaningfully to knowledge across disciplines.",
  },
];

const milestones = [
  { year: "1993", event: "IILM founded in New Delhi — beginning its journey to democratise management education in India." },
  { year: "2005", event: "IILM Gurugram campus established on Golf Course Road, bringing premier education to Haryana." },
  { year: "2012", event: "Expansion to Greater Noida — adding engineering, sciences, and a larger multidisciplinary campus." },
  { year: "2018", event: "NAAC Accreditation achieved, affirming IILM's academic quality and institutional processes." },
  { year: "2022", event: "University status granted to Gurugram & Greater Noida campuses by the state government." },
  { year: "2024", event: "AI-integrated curriculum launched across all programmes — a first among Delhi NCR universities." },
  { year: "2026", event: "12,000+ students enrolled, 5 campuses operational, 400+ placement partners, 30+ global university ties." },
];

const centres = [
  {
    id: "ei",
    name: "Centre for Emotional Intelligence (CEI)",
    desc: "The CEI runs structured EQ workshops, assessments, and leadership development programmes that equip students with the interpersonal skills demanded by modern workplaces. CEI-trained graduates consistently receive higher placement offers and leadership roles.",
    highlights: ["EQ Assessments", "Leadership Workshops", "Counselling & Wellness", "Industry Interaction"],
    color: "bg-blue-50 border-blue-100",
    accent: "text-blue-700",
    num: "01",
  },
  {
    id: "ctrl",
    name: "Centre for Teaching, Research & Learning (CTRL)",
    desc: "CTRL advances pedagogical innovation at IILM. It supports faculty research, funds student research projects, publishes academic journals, and collaborates with global institutions to keep curriculum design at the cutting edge of higher education.",
    highlights: ["Faculty Development", "Student Research Grants", "Academic Publishing", "Curriculum Innovation"],
    color: "bg-violet-50 border-violet-100",
    accent: "text-violet-700",
    num: "02",
  },
  {
    id: "ecell",
    name: "Centre for Entrepreneurship & Innovation (ECELL)",
    desc: "ECELL is IILM's startup incubator and entrepreneurship engine. It provides mentorship from serial entrepreneurs, access to seed funding networks, co-working spaces, and hosts the annual IILM Entrepreneurship Summit — one of Delhi NCR's most anticipated student startup events.",
    highlights: ["Startup Incubation", "Seed Funding Access", "Mentor Network", "Annual E-Summit"],
    color: "bg-amber-50 border-amber-100",
    accent: "text-amber-700",
    num: "03",
  },
  {
    id: "ct",
    name: "Centre for Technology",
    desc: "The Centre for Technology drives AI, machine learning, data science, and emerging technology research at IILM. It partners with tech companies to run live project labs and offers students access to cloud computing credits, AI tools, and cutting-edge hardware.",
    highlights: ["AI & ML Labs", "Industry Live Projects", "Cloud Computing Access", "Tech Symposiums"],
    color: "bg-emerald-50 border-emerald-100",
    accent: "text-emerald-700",
    num: "04",
  },
];

const learningPillars = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>),
    title: "Experiential Learning",
    desc: "Case studies, simulations, live projects, and industry immersions that build real-world decision-making skills.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>),
    title: "Industry Interface",
    desc: "300+ industry partners, regular guest lectures, and live consulting projects ensure students engage with business realities.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>),
    title: "Global Exposure",
    desc: "International exchange programmes, foreign faculty, and global case competitions prepare students for the world stage.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>),
    title: "Research & Innovation",
    desc: "Faculty research, student thesis projects, and incubation support develop an evidence-based analytical mindset.",
  },
];

const graduateAttributes = [
  {
    title: "Critical Thinkers",
    desc: "Analytical, evidence-based decision makers",
  },
  {
    title: "Ethical Leaders",
    desc: "Principled professionals who lead with integrity",
  },
  {
    title: "Global Citizens",
    desc: "Culturally aware and internationally competent",
  },
  {
    title: "Innovative Problem Solvers",
    desc: "Design thinkers who create solutions",
  },
  {
    title: "Lifelong Learners",
    desc: "Adaptable professionals who embrace change",
  },
  {
    title: "Responsible Entrepreneurs",
    desc: "Creators of sustainable value",
  },
];

const accreditations = [
  {
    name: "AACSB",
    fullName: "Association to Advance Collegiate Schools of Business",
    scope: "International",
  },
  {
    name: "SAQS",
    fullName: "South Asian Quality Assurance System",
    scope: "Regional",
  },
  {
    name: "PRME",
    fullName: "Principles for Responsible Management Education",
    scope: "UN-backed",
  },
  {
    name: "UN Global Compact",
    fullName: "United Nations Global Compact",
    scope: "Signatory",
  },
  {
    name: "NAAC A Grade",
    fullName: "National Assessment and Accreditation Council",
    scope: "India",
  },
  {
    name: "UGC Recognised",
    fullName: "University Grants Commission",
    scope: "India",
  },
  {
    name: "AICTE Approved",
    fullName: "All India Council for Technical Education",
    scope: "India",
  },
];

const socialInitiatives = [
  {
    title: "Unnat Bharat Abhiyan",
    desc: "Adopted 5 villages around Gurugram campus for rural development and digital literacy outreach.",
  },
  {
    title: "NSS & Community Service",
    desc: "500+ students participate in National Service Scheme activities annually.",
  },
  {
    title: "YourDOST Mental Wellness",
    desc: "Partnership with YourDOST for 24/7 confidential mental health support for all students.",
  },
  {
    title: "i-bloom Women Empowerment",
    desc: "IILM's annual programme celebrating and empowering women through workshops, talks, and skill-building sessions.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">About IILM</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            A Multidisciplinary University<br />
            <span className="text-blue-gradient">with Purpose</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            For over 30 years, IILM has been building leaders who are not just academically excellent — but emotionally intelligent, globally aware, and AI-ready.
          </p>
        </div>
      </section>

      {/* Sanskrit Motto */}
      <section className="bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center my-8">
            <p className="text-2xl font-bold text-navy font-serif italic">सा विद्या या विमुक्तये</p>
            <p className="text-sm text-slate-500 mt-2 tracking-widest uppercase">&quot;That which liberates is knowledge&quot;</p>
          </div>
        </div>
      </section>

      {/* Purpose, Vision & Mission */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Why We Exist</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Our Purpose, Vision & Mission</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Purpose */}
            <div className="rounded-2xl border border-slate-100 card-hover p-8 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center mb-6 text-blue">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>
              </div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-2">Our Purpose (Why)</p>
              <h3 className="text-xl font-bold text-navy mb-4">Why We Do This</h3>
              <p className="text-slate-600 leading-relaxed text-sm flex-1">
                To democratise access to world-class, multidisciplinary education that empowers students to lead with intelligence, empathy, and purpose in a rapidly changing world.
              </p>
            </div>
            {/* Vision */}
            <div className="rounded-2xl border border-slate-100 card-hover p-8 flex flex-col bg-navy text-white">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 text-white">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-2">Our Vision (What)</p>
              <h3 className="text-xl font-bold text-white mb-4">What We Are Building</h3>
              <p className="text-white/70 leading-relaxed text-sm flex-1">
                To be India&apos;s most forward-thinking multidisciplinary university — where every student, regardless of background, discovers their potential and graduates ready to shape the future.
              </p>
            </div>
            {/* Mission */}
            <div className="rounded-2xl border border-slate-100 card-hover p-8 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-maroon/10 flex items-center justify-center mb-6 text-maroon">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>
              </div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-2">Our Mission (How)</p>
              <h3 className="text-xl font-bold text-navy mb-4">How We Get There</h3>
              <p className="text-slate-600 leading-relaxed text-sm flex-1">
                To deliver AI-integrated, industry-embedded, and globally connected education across disciplines — guided by exceptional faculty, enriched by research, and measured by the success of our students and alumni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Learning Pillars */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Pedagogy</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Our 4 Learning Pillars</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-slate-100 card-hover p-6 bg-white text-center">
                <span className="text-4xl mb-4 block">{p.icon}</span>
                <h3 className="text-base font-bold text-navy mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Core Values</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              Eight principles that guide every decision, every programme, and every interaction at IILM.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-100 card-hover p-6 bg-slate">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="text-base font-bold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graduate Attributes */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Graduate Profile</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">What IILM Graduates Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {graduateAttributes.map((attr, idx) => (
              <div key={attr.title} className="rounded-2xl border border-slate-100 card-hover p-6 bg-white flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy mb-1">{attr.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{attr.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30 Years of History — Timeline */}
      <section id="history" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">30 Years of History</h2>
            <p className="text-slate-600 mt-4">From a single campus in Delhi to a five-campus university network.</p>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200" />
            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-navy border-4 border-white shadow-md flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-bold text-blue uppercase tracking-widest">{m.year}</span>
                    <p className="text-navy font-medium mt-1 leading-snug">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations & Recognition — Rich badges */}
      <section id="accreditations" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Recognition</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Accreditations & Recognition</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              IILM University is recognised by leading national and international quality assurance bodies.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {accreditations.map((acc) => (
              <div key={acc.name} className="bg-white rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20 text-center">
                <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mx-auto mb-4">
                  <span className="text-navy font-bold text-xs text-center leading-tight px-1">{acc.name}</span>
                </div>
                <h3 className="font-bold text-navy text-sm mb-1">{acc.name}</h3>
                <p className="text-xs text-slate-500 leading-snug mb-2">{acc.fullName}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-blue/10 text-blue text-xs font-semibold">
                  {acc.scope}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl border border-slate-100 p-8 text-center">
            <Image
              src="https://iilm.edu/demo2020/wp-content/uploads/2022/03/Accredations.png"
              alt="IILM Accreditations — NAAC, UGC, AICTE"
              width={820}
              height={200}
              className="mx-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Centres of Excellence */}
      <section id="centres" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Centres of Excellence</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Research, Innovation & Impact</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              Four dedicated centres that drive learning, enterprise, and discovery beyond the classroom.
            </p>
          </div>
          <div className="space-y-6">
            {centres.map((c) => (
              <div key={c.id} className={`rounded-2xl border p-8 ${c.color}`}>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <span className={`text-xs font-bold uppercase tracking-widest ${c.accent}`}>
                      Centre {c.num}
                    </span>
                    <h3 className="text-xl font-bold text-navy mb-3 mt-1">{c.name}</h3>
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

      {/* Social Initiatives */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Social Impact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">IILM Beyond Campus</h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              We believe education must serve society.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-5">
              {socialInitiatives.map((item) => (
                <div key={item.title} className="bg-white rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20 flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-maroon mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-navy text-base mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
              <Image
                src="https://iilm.edu/demo2020/wp-content/uploads/2026/03/International-Womens-Day-web-700x450.jpg"
                alt="IILM Social Initiatives — International Women's Day"
                width={700}
                height={450}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Connect */}
      <section id="global" className="bg-navy py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Global Connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">30+ Partner Universities Worldwide</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            IILM&apos;s global academic network enables students to access semester exchanges, dual degrees, study-abroad programmes, and international internships across Europe, Asia, and North America.
          </p>
          <p className="text-white/50 text-base max-w-xl mx-auto mb-10">
            From the UK and France to Singapore and Canada — our students graduate as global citizens, not just local graduates.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Semester Exchanges", "Dual Degree Options", "International Internships", "Study Abroad"].map((tag) => (
              <span key={tag} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm text-white/80 font-medium">
                {tag}
              </span>
            ))}
          </div>
          <Link
            href="/industry"
            className="inline-block px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
          >
            Explore Industry & Global Connect →
          </Link>
        </div>
      </section>
    </>
  );
}
