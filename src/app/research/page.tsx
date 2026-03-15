import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Innovation | IILM University",
  description:
    "IILM University research programmes: PhD in Management, Law, Engineering, Social Sciences, and Computer Science. Four Centres of Excellence and 12 active research areas.",
};

const phdProgrammes = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>),
    discipline: "PhD in Management",
    duration: "3–5 years",
    mode: "Full-Time / Part-Time",
    campuses: "Gurugram, Greater Noida",
    eligibility: "Master's degree with 55%+. UGC NET/JRF preferred. Research proposal + interview.",
    areas: "Strategy, Marketing, Finance, HR, Operations, Entrepreneurship",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" /></svg>),
    discipline: "PhD in Law",
    duration: "3–5 years",
    mode: "Full-Time",
    campuses: "Gurugram, Greater Noida",
    eligibility: "LLM with 55%+. UGC NET (Law) preferred. Research proposal + interview.",
    areas: "Constitutional Law, Corporate Law, IPR, International Law, Tech-Law",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>),
    discipline: "PhD in Engineering",
    duration: "3–5 years",
    mode: "Full-Time / Part-Time",
    campuses: "Greater Noida",
    eligibility: "M.Tech / ME with 55%+. GATE preferred. Research proposal + interview.",
    areas: "Mechanical, Civil, Electrical, Electronics, Computer Engineering",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>),
    discipline: "PhD in Social Sciences",
    duration: "3–5 years",
    mode: "Full-Time / Part-Time",
    campuses: "Gurugram, Greater Noida",
    eligibility: "Master's in Psychology, Sociology, or allied social science with 55%+.",
    areas: "Psychology, Behavioural Sciences, Gender Studies, Public Policy, Sociology",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>),
    discipline: "PhD in Computer Science",
    duration: "3–5 years",
    mode: "Full-Time / Part-Time",
    campuses: "Gurugram, Greater Noida",
    eligibility: "M.Tech / MCA / M.Sc CS with 55%+. GATE preferred. Research proposal + interview.",
    areas: "AI, Machine Learning, Cybersecurity, Data Science, Cloud Computing",
  },
];

const centres = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>),
    name: "Centre for Emotional Intelligence (CEI)",
    desc: "IILM's signature centre dedicated to the science and practice of Emotional Intelligence (EQ). The CEI conducts research on EQ in leadership, education, and organisational behaviour — and embeds EQ development into the core IILM curriculum. The Centre publishes working papers, conducts corporate EQ assessments, and organises national EQ workshops.",
    focus: ["EQ in Leadership", "EQ-Based Pedagogy", "Organisational Psychology", "Mental Health Research"],
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>),
    name: "Centre for Teaching, Research & Learning (CTRL)",
    desc: "CTRL is IILM's academic innovation engine — dedicated to advancing pedagogy, curriculum design, and research culture. It supports faculty research, develops learning frameworks, coordinates PhD admissions, and manages research publications and academic partnerships.",
    focus: ["Pedagogical Innovation", "Faculty Research Support", "Academic Quality Assurance", "EdTech Integration"],
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>),
    name: "Centre for Entrepreneurship & Innovation (ECELL)",
    desc: "The ECELL is IILM's startup ecosystem — offering incubation, mentorship, funding facilitation, and entrepreneurship education to students across all campuses. The Centre coordinates the annual E-Summit, runs investor pitch events, and manages the on-campus startup incubator.",
    focus: ["Startup Incubation", "E-Summit", "Investor Relations", "Lean Startup Curriculum"],
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>),
    name: "Centre for Technology",
    desc: "A research and innovation hub focused on emerging technologies — AI, machine learning, cybersecurity, cloud computing, and IoT. The Centre partners with industry for applied research projects, manages the AI lab and cybersecurity lab, and facilitates technology transfer and patenting.",
    focus: ["AI & ML Research", "Cybersecurity", "Industry-Sponsored Projects", "Patent & IP Support"],
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>),
    name: "Centre for AI & Data Science",
    desc: "Specialising in machine learning, natural language processing, and generative AI research. The Centre collaborates with IIT Ropar and IBM to advance applied AI solutions and build industry-ready AI research capacity at IILM.",
    focus: ["Machine Learning", "NLP", "GenAI Research", "IIT Ropar & IBM Partnership"],
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>),
    name: "Centre for Business Analytics",
    desc: "Applied research centre focused on demand forecasting, supply chain analytics, and financial modelling. Works closely with industry partners to generate data-driven insights that solve real business problems.",
    focus: ["Demand Forecasting", "Supply Chain Analytics", "Financial Modelling", "Industry Collaboration"],
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>),
    name: "Centre for Sustainable Development",
    desc: "Cross-disciplinary research on ESG, climate policy, and the circular economy. The Centre brings together management, law, and engineering scholars to tackle sustainability challenges at organisational and policy levels.",
    focus: ["ESG Research", "Climate Policy", "Circular Economy", "Interdisciplinary Studies"],
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" /></svg>),
    name: "Centre for Legal Innovation",
    desc: "Focus on AI & law, cyber law, and corporate governance research. The Centre bridges legal scholarship and emerging technology, producing policy-relevant research and training the next generation of tech-savvy legal professionals.",
    focus: ["AI & Law", "Cyber Law", "Corporate Governance", "Legal Tech Research"],
  },
];

const researchFacilities = [
  {
    name: "Biotech Lab",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/Growth-OF-AI-700x450.jpg",
    desc: "State-of-the-art biotechnology laboratory supporting life sciences and interdisciplinary research across IILM campuses.",
  },
  {
    name: "AI Lab",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/Growth-OF-AI-700x450.jpg",
    desc: "Advanced AI research lab equipped with GPU compute infrastructure, enabling machine learning, computer vision, and NLP research.",
  },
  {
    name: "Drone Lab",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/Growth-OF-AI-700x450.jpg",
    desc: "Cutting-edge drone and unmanned aerial vehicle research facility supporting projects in engineering, agriculture, and logistics.",
  },
  {
    name: "Cyber Physical Systems Lab — IIT Ropar Partnership",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/WEBINAR-700x450.jpg",
    desc: "A state-of-the-art CPS research facility established in partnership with IIT Ropar, housing IoT devices, edge computing nodes, and industrial automation equipment.",
    investment: "₹60 lakh",
    partner: "IIT Ropar",
  },
];

const researchAreas = [
  { area: "AI Ethics & Responsible Technology", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>) },
  { area: "Supply Chain Innovation", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>) },
  { area: "Constitutional Law & Governance", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" /></svg>) },
  { area: "Mental Health & Wellbeing", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>) },
  { area: "Sustainable Engineering", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>) },
  { area: "EdTech & Pedagogy", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>) },
  { area: "Cybersecurity & Digital Forensics", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>) },
  { area: "Behavioural Economics", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>) },
  { area: "Design Thinking & Innovation", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>) },
  { area: "Gender Studies & Policy", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>) },
  { area: "Environmental Sciences", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>) },
  { area: "Digital Marketing & Consumer Behaviour", icon: (<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>) },
];

export default function ResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Research & Innovation</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Research & Innovation at IILM —<br />
            <span className="text-blue-gradient">Pushing the Boundaries of Knowledge</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-10">
            At IILM, research is not a department — it is a culture. From PhD programmes to applied industry research, we advance knowledge that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#phd" className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all">
              PhD Programmes
            </Link>
            <Link href="#centres" className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white/60 transition-all">
              Centres of Excellence
            </Link>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">Research That Makes an Impact</h2>
          </div>
          <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed text-center mb-12">
            <p>
              IILM University is committed to interdisciplinary, industry-relevant, and socially impactful research. Our research mission is to advance knowledge at the intersection of business, technology, law, social sciences, and engineering — producing insights that benefit both industry and society.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>), stat: "5", label: "PhD Disciplines" },
              { icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>), stat: "8", label: "Centres of Excellence" },
              { icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>), stat: "12+", label: "Active Research Areas" },
            ].map((item) => (
              <div key={item.label} className="card-hover p-7 rounded-2xl border border-slate-100 bg-white">
                <div className="flex justify-center mb-3 text-navy">{item.icon}</div>
                <div className="text-3xl font-bold text-navy mb-1">{item.stat}</div>
                <div className="text-sm text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PhD Programmes */}
      <section id="phd" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Doctoral Programmes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">PhD Programmes at IILM</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              IILM offers PhD programmes across five disciplines — full-time and part-time options available. Admissions require a Master&apos;s degree with 55%+, UGC NET/JRF (preferred), a research proposal, and an interview.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {phdProgrammes.map((phd) => (
              <div key={phd.discipline} className="card-hover rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-navy/20">
                <div className="bg-navy p-6">
                  <div className="text-3xl mb-3">{phd.icon}</div>
                  <h3 className="text-lg font-bold text-white">{phd.discipline}</h3>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-blue/10 text-blue px-2.5 py-1 rounded-full font-medium">{phd.duration}</span>
                    <span className="text-xs bg-slate text-slate-600 px-2.5 py-1 rounded-full">{phd.mode}</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-navy">Campuses: </span>{phd.campuses}
                  </div>
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-navy">Eligibility: </span>{phd.eligibility}
                  </div>
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-navy">Research Areas: </span>{phd.areas}
                  </div>
                  <Link
                    href="https://admissions.iilm.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center mt-4 px-5 py-2.5 bg-maroon text-white text-xs font-semibold rounded-full hover:bg-maroon-light transition-all"
                  >
                    Apply for PhD
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centres of Excellence */}
      <section id="centres" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Research Centres</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Centres of Excellence</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Eight dedicated research centres driving IILM&apos;s intellectual agenda — each with a distinct focus, faculty expertise, and industry connections.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-7">
            {centres.map((centre) => (
              <div key={centre.name} className="card-hover p-8 rounded-2xl border border-slate-100 bg-white hover:border-navy/20">
                <div className="text-4xl mb-4">{centre.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-4">{centre.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{centre.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {centre.focus.map((f) => (
                    <span key={f} className="text-xs bg-slate text-slate-600 px-3 py-1 rounded-full border border-slate-200">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Infrastructure</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Research Facilities & Labs</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              World-class laboratory infrastructure powering cutting-edge research across disciplines — from AI and biotech to cyber-physical systems.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-7">
            {researchFacilities.map((lab) => (
              <div key={lab.name} className="card-hover rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-navy/20">
                <div className="relative h-52 w-full">
                  <Image
                    src={lab.image}
                    alt={lab.name}
                    fill
                    className="object-cover object-center"
                  />
                  {"investment" in lab && lab.investment && (
                    <div className="absolute top-4 right-4 bg-maroon text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      Investment: {lab.investment}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy mb-2">{lab.name}</h3>
                  {"partner" in lab && lab.partner && (
                    <span className="inline-block text-xs bg-blue/10 text-blue font-semibold px-3 py-1 rounded-full mb-3">
                      Partnership: {lab.partner}
                    </span>
                  )}
                  <p className="text-sm text-slate-500 leading-relaxed">{lab.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Active Research</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Research Areas</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              12 active interdisciplinary research themes spanning management, law, technology, social sciences, and engineering.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {researchAreas.map((item) => (
              <div key={item.area} className="card-hover p-5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3 hover:border-navy/20">
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <span className="text-sm font-medium text-navy">{item.area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Output */}
      <section className="bg-slate py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Research Output</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Publications & Research Output</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6V7.5z" /></svg>),
                title: "Peer-Reviewed Journals",
                desc: "IILM faculty regularly publish in indexed, peer-reviewed journals including Scopus, Web of Science, and UGC-listed publications across all disciplines.",
              },
              {
                icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>),
                title: "International Conferences",
                desc: "Faculty and PhD scholars present research at national and international conferences — from AOM and AILA to NCC and LSAC-affiliated forums.",
              },
              {
                icon: (<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>),
                title: "Books & Textbooks",
                desc: "IILM faculty have authored and co-authored textbooks used across Indian universities — covering management, law, psychology, engineering, and communication.",
              },
            ].map((item) => (
              <div key={item.title} className="card-hover p-6 rounded-2xl border border-slate-100 bg-white text-center hover:border-blue/20">
                <div className="flex justify-center mb-4 text-navy">{item.icon}</div>
                <h3 className="font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
              IILM actively collaborates with industry bodies, government ministries, and international research institutions on applied research projects. Research partnerships include collaborations with CII, NASSCOM, and state government policy bodies — ensuring that IILM research has real-world application and impact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Join Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Join Our Research Community
          </h2>
          <p className="text-white/55 mb-10 leading-relaxed">
            Whether you are pursuing a PhD, seeking a research collaboration, or exploring faculty positions — IILM welcomes scholars who push boundaries and make knowledge count.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Apply for PhD →
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white/60 transition-all"
            >
              Contact Research Cell
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
