import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campus Life | IILM University",
  description:
    "Explore campus life at IILM University — advanced labs, residential facilities, sports, student clubs, health & wellness, and a vibrant learning community.",
};

const labs = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>),
    name: "Computer Science Lab",
    desc: "High-performance workstations for programming, data structures, and software development.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" /></svg>),
    name: "Dell Technology Lab",
    desc: "Industry-grade Dell infrastructure for enterprise computing and networking labs.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>),
    name: "iOS Development Lab",
    desc: "Mac-powered studio for mobile app development and Apple ecosystem training.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>),
    name: "AI & Machine Learning Lab",
    desc: "GPU-enabled workstations for deep learning, model training, and AI research.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>),
    name: "Cloud Computing Lab",
    desc: "Hands-on AWS, Azure, and GCP environments for cloud architecture and deployment.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>),
    name: "Cybersecurity Lab",
    desc: "Ethical hacking, penetration testing, and network security simulation environments.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>),
    name: "CAD/CAM Lab",
    desc: "Engineering design and manufacturing simulation using AutoCAD, SolidWorks, and CNC tools.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>),
    name: "Psychology Research Lab",
    desc: "Biofeedback equipment, behavioural observation rooms, and research data tools.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125V8.25m0 0a1.125 1.125 0 011.125-1.125h4.5A1.125 1.125 0 016.75 8.25m-3.75 0H3m0 0V4.875C3 4.254 3.504 3.75 4.125 3.75h15.75c.621 0 1.125.504 1.125 1.125V19.5m-18 0h18" /></svg>),
    name: "Multimedia Studio",
    desc: "Professional audio-visual studio for broadcasting, journalism, and filmmaking students.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>),
    name: "Design Studio",
    desc: "Creative workspace for ideation, UX prototyping, and product design projects.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" /></svg>),
    name: "LLM Innovation Lab",
    desc: "Legal research infrastructure for tech-law interface and policy analysis.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>),
    name: "Prototyping Lab",
    desc: "3D printers, laser cutters, and maker tools for engineering and design students.",
  },
];

const specialisedSpaces = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>),
    name: "Psychology Lab",
    desc: "A dedicated facility for behavioural research, therapy simulations, cognitive experiments, and applied psychology studies. Equipped with observation rooms and biofeedback instruments.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125V8.25m0 0a1.125 1.125 0 011.125-1.125h4.5A1.125 1.125 0 016.75 8.25m-3.75 0H3m0 0V4.875C3 4.254 3.504 3.75 4.125 3.75h15.75c.621 0 1.125.504 1.125 1.125V19.5m-18 0h18" /></svg>),
    name: "Multimedia Studio",
    desc: "A professional-grade studio for communication, journalism, and filmmaking students. Features green screen, editing suites, podcasting equipment, and broadcast-quality cameras.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>),
    name: "Design Studio",
    desc: "An open creative workspace for ideation sessions, UX prototyping, user experience research, and product design — equipped with drafting tables, digital tablets, and collaboration zones.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.97zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.97z" /></svg>),
    name: "Moot Court",
    desc: "A fully equipped courtroom simulation for law students to practise advocacy, argumentation, legal drafting, and trial procedures — used for national and international competitions.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>),
    name: "LLM Innovation Lab",
    desc: "Dedicated to legal technology, tech-law interface research, AI in law, intellectual property, and policy research. A space where law meets the future.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125c0-6.375 0-9.375 0-9.375m0 0a1.125 1.125 0 011.125-1.125h17.25m-17.25.125H6m-3.75 0C2.25 9.75 2.25 6.75 2.25 6.75c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125M6 18.375V9.75m0 8.625h12m0 0V9.75M18 18.375c.621 0 1.125-.504 1.125-1.125V9.75" /></svg>),
    name: "Auditorium",
    desc: "A large-capacity auditorium for convocations, guest lectures, TEDx-style talks, cultural performances, industry conclaves, and annual institutional events.",
  },
];

const learningSpaces = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>),
    name: "Smart Classrooms",
    desc: "Technology-enabled rooms with projectors, interactive whiteboards, collaborative pods, and seamless video-conferencing for hybrid learning.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>),
    name: "Collaborative Learning Environments",
    desc: "Open-plan studios and breakout rooms designed for group work, case study discussions, and team-based project learning.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>),
    name: "Central Library",
    desc: "60,000+ volumes, subscriptions to leading digital databases (EBSCO, ProQuest, Manupatra), and 24/7 reading rooms for focused study.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>),
    name: "Bloomberg Terminal Access",
    desc: "Real-time financial data and analytics via Bloomberg terminals — exclusively available to management students for finance, investment, and strategy coursework.",
  },
];

const diningSpots = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5M6 10.608v2.513m0 0c0 1.135.845 2.098 1.976 2.192.324.028.65.052.976.073M6 13.121V18m12-7.392v2.513m0 0c0 1.135-.845 2.098-1.976 2.192a48.424 48.424 0 01-.976.073M18 13.121V18m0 0h-12" /></svg>),
    name: "Scholars' Café",
    desc: "Premium coffee, healthy snacks, and a study-friendly ambience. The go-to spot for focused work sessions.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5M6 10.608v2.513m0 0c0 1.135.845 2.098 1.976 2.192.324.028.65.052.976.073M6 13.121V18m12-7.392v2.513m0 0c0 1.135-.845 2.098-1.976 2.192a48.424 48.424 0 01-.976.073M18 13.121V18m0 0h-12" /></svg>),
    name: "Campus Collegiate",
    desc: "The main campus dining hall serving multi-cuisine meals daily — breakfast, lunch, and dinner.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>),
    name: "Chai Garam",
    desc: "IILM's iconic chai spot — where friendships are forged, debates happen, and evenings wind down.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>),
    name: "KitKat Kiosk",
    desc: "Quick snacks, beverages, and refreshments for between-class bites and late-night study fuel.",
  },
];

const clubs = [
  {
    emoji: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125c0-6.375 0-9.375 0-9.375m0 0a1.125 1.125 0 011.125-1.125h17.25m-17.25.125H6m-3.75 0C2.25 9.75 2.25 6.75 2.25 6.75c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125M6 18.375V9.75m0 8.625h12m0 0V9.75M18 18.375c.621 0 1.125-.504 1.125-1.125V9.75" /></svg>),
    name: "Drama & Theatre Club",
    desc: "Performances, workshops, and inter-college theatre festivals. Develop stage presence and creative expression.",
  },
  {
    emoji: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" /></svg>),
    name: "Music Club",
    desc: "Classical, contemporary, and band performances. Access to a recording studio and regular open-mic events.",
  },
  {
    emoji: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" /></svg>),
    name: "Dance Club",
    desc: "Classical, folk, contemporary, and Bollywood — competing at national inter-college dance festivals.",
  },
  {
    emoji: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>),
    name: "Photography Club",
    desc: "Workshops, exhibitions, photo walks, and documentary projects. Develop your visual storytelling skills.",
  },
  {
    emoji: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>),
    name: "Debate Club",
    desc: "MUN, parliamentary debate, and national competitions. Build critical thinking and persuasive communication.",
  },
  {
    emoji: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>),
    name: "Entrepreneurship Cell (ECELL)",
    desc: "Startup pitches, E-Summit, investor meets, and incubation support for student entrepreneurs.",
  },
  {
    emoji: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>),
    name: "Finance & Investment Club",
    desc: "Stock market simulations, CFA prep, case competitions, and sessions with industry finance leaders.",
  },
  {
    emoji: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>),
    name: "Community Service Club",
    desc: "NGO partnerships, teaching drives, environmental campaigns, and CSR project coordination.",
  },
  {
    emoji: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>),
    name: "Literary Society",
    desc: "Creative writing workshops, book clubs, and publication of IILM's annual literary magazine.",
  },
];

const wellnessServices = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>),
    name: "On-Campus Medical Clinic",
    desc: "A staffed clinic with a qualified nurse on duty during working hours and emergency response protocol.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>),
    name: "Mental Health Counselling",
    desc: "Confidential sessions with professional counsellors. Stress management, academic pressure, and personal wellbeing support.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>),
    name: "Health Camps & Workshops",
    desc: "Regular health awareness camps, dental camps, eye check-ups, and wellness workshops throughout the year.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg>),
    name: "Yoga & Mindfulness",
    desc: "Scheduled yoga sessions and guided mindfulness practices for mental clarity and physical balance.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" /></svg>),
    name: "Zumba & Fitness Classes",
    desc: "Timetabled Zumba, aerobics, and group fitness classes open to all students — no experience needed.",
  },
];

const securityFeatures = [
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>),
    title: "Advanced Surveillance",
    desc: "CCTV cameras installed across all campus zones — entry, exit, corridors, and common areas.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>),
    title: "Professional Security",
    desc: "Trained security personnel on duty 24/7 at all campus entry points and residential blocks.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>),
    title: "Medical Services",
    desc: "On-campus clinic with a qualified nurse, first aid stations, and emergency response protocol.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>),
    title: "Transport Coordination",
    desc: "Coordinated campus transport routes and third-party transport tie-ups for residential students.",
  },
  {
    icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>),
    title: "Anti-Ragging Committee",
    desc: "A zero-tolerance anti-ragging policy with a dedicated committee, grievance cell, and anonymous reporting.",
  },
];

export default function CampusLifePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Life at IILM</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Campus Life at IILM —<br />
            <span className="text-blue-gradient">Where Learning Meets Living</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-10">
            IILM is not just a place to study — it is a community to grow in. From world-class facilities
            to vibrant student life, every corner of IILM is designed for holistic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#facilities"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Explore Facilities
            </Link>
            <Link
              href="#societies"
              className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white/60 transition-all"
            >
              Student Clubs
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
<section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-10">
      <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">A Glimpse of Life at IILM</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-navy">Experience It</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {[
        { src: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/cafeteria-900x500.jpg", alt: "Campus Cafeteria" },
        { src: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/sports-900x500.jpeg", alt: "Sports at IILM" },
        { src: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/Performing-Arts-900x500.jpg", alt: "Performing Arts" },
        { src: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/Diwali-Mela-900x500.jpg", alt: "Diwali Mela" },
        { src: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/culture-900x500.jpg", alt: "Cultural Events" },
        { src: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/recreation-900x500.jpeg", alt: "Recreation" },
      ].map((img) => (
        <div key={img.alt} className="relative h-48 sm:h-56 rounded-2xl overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/50 to-transparent p-3">
            <p className="text-white text-xs font-semibold">{img.alt}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Advanced Laboratories */}
      <section id="facilities" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Infrastructure</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Advanced Laboratories</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              IILM campuses host cutting-edge labs designed to give students hands-on experience with
              industry-standard tools and technologies across every discipline.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {labs.map((lab) => (
              <div key={lab.name} className="card-hover p-6 rounded-2xl border border-slate-100 bg-white hover:border-navy/20">
                <div className="text-3xl mb-4">{lab.icon}</div>
                <h3 className="text-base font-semibold text-navy mb-2">{lab.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{lab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialised Spaces */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Beyond the Classroom</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Specialised Spaces</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Dedicated facilities designed for specific disciplines — where students practise, create, argue, and innovate in real-world settings.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialisedSpaces.map((space) => (
              <div key={space.name} className="card-hover p-7 rounded-2xl border border-slate-200 bg-white">
                <div className="text-4xl mb-4">{space.icon}</div>
                <h3 className="text-lg font-semibold text-navy mb-3">{space.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{space.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Academic Resources</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Learning Resources & Spaces</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Every learning environment at IILM is thoughtfully designed to maximise engagement, collaboration, and academic performance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningSpaces.map((space) => (
              <div key={space.name} className="card-hover p-6 rounded-2xl border border-slate-100 bg-white text-center hover:border-blue/20">
                <div className="text-4xl mb-4">{space.icon}</div>
                <h3 className="text-base font-semibold text-navy mb-3">{space.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{space.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Life */}
      <section id="residential" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Residential Life</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Home Away from Home</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              IILM offers safe, comfortable, and community-oriented residential options for students from across India and abroad.
            </p>
          </div>

          {/* Hostels */}
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            <div className="card-hover p-8 rounded-2xl bg-navy text-white">
              <div className="mb-4 text-white"><svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg></div>
              <h3 className="text-xl font-bold mb-3">On-Campus Hostel Facility</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Separate, well-maintained residential blocks for men and women with 24/7 security and CCTV coverage. Each block features furnished rooms, common rooms, laundry, and Wi-Fi connectivity.
              </p>
              <ul className="text-white/60 text-sm space-y-1.5">
                <li>✓ Separate blocks for men and women</li>
                <li>✓ 24/7 trained security and CCTV</li>
                <li>✓ High-speed Wi-Fi throughout</li>
                <li>✓ Housekeeping and maintenance services</li>
              </ul>
            </div>
            <div className="card-hover p-8 rounded-2xl border border-slate-200 bg-white">
              <div className="mb-4 text-navy"><svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg></div>
              <h3 className="text-xl font-bold text-navy mb-3">Nearby Residential Facilities</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                IILM also facilitates placement in affiliated PG accommodations near campus for students who prefer off-campus living. Coordinated transport ensures seamless access to campus.
              </p>
              <ul className="text-slate-500 text-sm space-y-1.5">
                <li>✓ Affiliated PG accommodations</li>
                <li>✓ Coordinated campus transport</li>
                <li>✓ Vetted and monitored facilities</li>
                <li>✓ Support from student affairs office</li>
              </ul>
            </div>
          </div>

          {/* Dining */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-navy text-center mb-8">Dining & Social Spaces</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {diningSpots.map((spot) => (
                <div key={spot.name} className="card-hover p-6 rounded-2xl bg-white border border-slate-200 text-center">
                  <div className="text-3xl mb-3">{spot.icon}</div>
                  <h4 className="font-semibold text-navy mb-2">{spot.name}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{spot.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Community Living */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">Community Living</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="mb-3 flex justify-center text-navy"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg></div>
                <h4 className="font-semibold text-navy mb-2">Shared Lounges & Recreation</h4>
                <p className="text-sm text-slate-500">Common rooms, recreation areas, and social lounges where students unwind, bond, and build lifelong friendships.</p>
              </div>
              <div>
                <div className="mb-3 flex justify-center text-navy"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg></div>
                <h4 className="font-semibold text-navy mb-2">Weekly Community Events</h4>
                <p className="text-sm text-slate-500">Movie nights, cultural evenings, festivals, and community dinners — life at IILM is never dull.</p>
              </div>
              <div>
                <div className="mb-3 flex justify-center text-navy"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg></div>
                <h4 className="font-semibold text-navy mb-2">Study & Co-working Pods</h4>
                <p className="text-sm text-slate-500">Quiet reading rooms and collaborative co-working pods — for solo focus and group project sessions alike.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports & Fitness */}
      <section id="sports" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Sports & Fitness</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Play. Train. Excel.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Sport is not extra-curricular at IILM — it is co-curricular. Physical and mental fitness are integral to the IILM experience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {/* Outdoor */}
            <div className="card-hover p-8 rounded-2xl border border-slate-100 bg-white hover:border-navy/20">
              <h3 className="text-lg font-bold text-navy mb-5 flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c0 0-2.25 3.75-2.25 6s2.25 6 2.25 6 2.25-3.75 2.25-6S12 3 12 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.516 9h16.968M3.516 15h16.968" /></svg> Outdoor Sports
              </h3>
              <ul className="space-y-3">
                {["Football Field", "Volleyball Court", "Badminton Court (Outdoor)", "Pickleball Court", "Chess (Open-Air)"].map((sport) => (
                  <li key={sport} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-maroon flex-shrink-0" />
                    {sport}
                  </li>
                ))}
              </ul>
            </div>

            {/* Indoor & Fitness */}
            <div className="card-hover p-8 rounded-2xl border border-slate-100 bg-white hover:border-navy/20">
              <h3 className="text-lg font-bold text-navy mb-5 flex items-center gap-3">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg> Indoor & Fitness
              </h3>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Indoor Sports</p>
              <ul className="space-y-2 mb-5">
                {["Table Tennis", "Carrom", "Foosball"].map((sport) => (
                  <li key={sport} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-blue flex-shrink-0" />
                    {sport}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Fitness Zones</p>
              <ul className="space-y-2">
                {["Fully Equipped Gymnasium", "Yoga Studio", "Zumba Classes (Timetabled)"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="w-2 h-2 rounded-full bg-maroon flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sports CTA quote */}
          <div className="bg-navy rounded-2xl p-8 text-center">
            <p className="text-xl font-bold text-white italic">
              &ldquo;Sports is not extra-curricular at IILM — it&apos;s co-curricular.&rdquo;
            </p>
            <p className="text-white/55 mt-3 text-sm">Physical fitness and team sport are embedded into the IILM experience from day one.</p>
          </div>
        </div>
      </section>

      {/* Student Societies */}
      <section id="societies" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Student Life</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Student Societies & Engagement</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              IILM has a rich ecosystem of student-run clubs and societies — over 15 active communities that shape leadership, creativity, and character outside the classroom.
            </p>
          </div>

          {/* Gurugram & Greater Noida Clubs */}
          <h3 className="text-xl font-bold text-navy mb-6">Gurugram & Greater Noida</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {[
              { img: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/cultrl-clb-900x500.jpg", name: "Cultural Club", desc: "Performances, workshops, and inter-college theatre & music festivals. Develop creative expression and stage presence." },
              { img: "https://iilm.edu/demo2020/wp-content/uploads/2022/05/iilmu-designclub.jpg", name: "Design Club", desc: "Workshops, exhibitions, and industry collaborations for design students — from UI/UX to visual communication." },
              { img: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/photo-900x500.jpg", name: "Photography Club", desc: "Photo walks, workshops, exhibitions, and documentary projects. Develop your visual storytelling skills." },
              { img: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/MKTING-CLUB-900x500.jpg", name: "Marketing Club", desc: "Marketing simulations, brand strategy challenges, and industry speaker sessions for aspiring marketers." },
              { img: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/yuva-goonj-NGO-900x500.jpg", name: "Yuva Goonj — NGO Club", desc: "NGO partnerships, teaching drives, environmental campaigns, and CSR project coordination with community focus." },
              { img: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/environment-900x500.jpg", name: "Environment Club", desc: "Sustainability drives, tree planting, waste management, and environmental awareness campaigns across campuses." },
              { img: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/prakaram-900x500.jpg", name: "Prakaram — Sports Club", desc: "Organises inter-college sports tournaments, athletic events, and adventure activities for students." },
              { img: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/art-900x500.jpg", name: "Art Society", desc: "Creative workspace for fine arts, digital art, installations, and exhibitions celebrating student creativity." },
              { img: "https://iilm.edu/demo2020/wp-content/uploads/2020/07/awaz-900x500.jpg", name: "Awaz — Music Society", desc: "Classical, contemporary, and band performances. Regular open-mic events, concerts, and music workshops." },
            ].map((club) => (
              <div key={club.name} className="card-hover rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-navy/20">
                <div className="relative h-40 overflow-hidden">
                  <Image src={club.img} alt={club.name} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-navy mb-2">{club.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{club.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lodhi Road Clubs */}
          <h3 className="text-xl font-bold text-navy mb-6">Lodhi Road</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { img: "https://iilmlr.ac.in/wp-content/uploads/2024/11/finance-club.jpg", name: "Finance Club", desc: "Stock market simulations, CFA prep, case competitions, and sessions with industry finance leaders." },
              { img: "https://iilmlr.ac.in/wp-content/uploads/2024/11/marketing-club.jpg", name: "Marketing Club", desc: "Marketing simulations, brand strategy challenges, and industry speaker sessions for aspiring marketers." },
              { img: "https://iilmlr.ac.in/wp-content/uploads/2024/11/hr-club.jpg", name: "HR Club", desc: "HR case studies, people management workshops, and industry connect sessions for future HR leaders." },
              { img: "https://iilmlr.ac.in/wp-content/uploads/2024/11/operations-club.jpg", name: "Operations Club", desc: "Supply chain simulations, operations strategy discussions, and industry visits for operations enthusiasts." },
              { img: "https://iilmlr.ac.in/wp-content/uploads/2024/11/ecell.jpg", name: "Entrepreneurship Club (ECELL)", desc: "Startup pitches, E-Summit, investor meets, and incubation support for student entrepreneurs." },
              { img: "https://iilmlr.ac.in/wp-content/uploads/2024/11/cultural-club.jpg", name: "Cultural Club", desc: "Performances, workshops, and inter-college theatre & music festivals. Develop creative expression and stage presence." },
              { img: "https://iilmlr.ac.in/wp-content/uploads/2024/11/sports-club.jpg", name: "Sports Club", desc: "Organises inter-college sports tournaments, athletic events, and adventure activities for students." },
              { img: "https://iilmlr.ac.in/wp-content/uploads/2024/11/debate-club.jpg", name: "Debate & MUN Club", desc: "MUN, parliamentary debate, and national competitions. Build critical thinking and persuasive communication." },
              { img: "https://iilmlr.ac.in/wp-content/uploads/2024/11/photography-club.jpg", name: "Photography Club", desc: "Photo walks, workshops, exhibitions, and documentary projects. Develop your visual storytelling skills." },
            ].map((club) => (
              <div key={`lr-${club.name}`} className="card-hover rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-navy/20">
                <div className="relative h-40 overflow-hidden">
                  <Image src={club.img} alt={club.name} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-navy mb-2">{club.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{club.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Wellness */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Wellbeing</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Health, Fitness & Wellness</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              IILM takes a holistic approach to student wellbeing — because academic success and personal health go hand in hand.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {wellnessServices.map((service) => (
              <div key={service.name} className="card-hover p-6 rounded-2xl border border-slate-100 bg-white hover:border-blue/20">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-base font-semibold text-navy mb-2">{service.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* YourDOST Callout */}
          <div className="rounded-2xl bg-blue/5 border border-blue/20 p-7 flex gap-5 items-start">
            <div className="flex-shrink-0 text-blue"><svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" /></svg></div>
            <div>
              <h3 className="text-base font-bold text-navy mb-1">YourDOST Mental Wellness</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                All IILM students have access to 24/7 confidential counselling via the YourDOST platform. Free for all enrolled students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* i-bloom Women Empowerment */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Women Empowerment</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">i-bloom</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                IILM&apos;s annual women empowerment programme, featuring workshops, speaker sessions, and mentorship from industry leaders. i-bloom celebrates and amplifies the voices, ambitions, and achievements of women across all IILM campuses.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full">Workshops</span>
                <span className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full">Speaker Sessions</span>
                <span className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full">Industry Mentorship</span>
                <span className="text-xs bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full">Annual Programme</span>
              </div>
            </div>
            <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden">
              <Image
                src="https://iilm.edu/demo2020/wp-content/uploads/2026/03/International-Womens-Day-web-700x450.jpg"
                alt="i-bloom Women Empowerment Programme at IILM"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Support */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Safety & Support</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Comprehensive Support Services</h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              IILM is committed to providing a safe, secure, and supportive environment for every student on campus.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {securityFeatures.map((feature) => (
              <div key={feature.title} className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-maroon/30">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Experience It Yourself</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-5">Experience IILM Life</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">
            The best way to understand the IILM campus experience is to be here. Visit us, walk the campus, meet the students, and feel the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Visit Campus
            </Link>
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-navy text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-all"
            >
              Apply Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
