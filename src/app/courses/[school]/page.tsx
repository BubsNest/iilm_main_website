import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type SchoolId =
  | "management"
  | "cse"
  | "engineering"
  | "sciences"
  | "law"
  | "psychology"
  | "communication"
  | "design"
  | "liberal-arts";

interface Programme {
  name: string;
  duration: string;
  type: string;
  specs?: string[];
}

interface FacultyMember {
  name: string;
  title: string;
  expertise: string;
  qualification: string;
  quote: string;
}

interface SchoolData {
  id: SchoolId;
  name: string;
  tagline: string;
  description: string;
  stats: { value: string; label: string }[];
  programmes: Programme[];
  careers: { title: string; company: string }[];
  faculty: FacultyMember[];
  facilities: string[];
  highlights: string[];
}

const schoolsData: Record<SchoolId, SchoolData> = {
  management: {
    id: "management",
    name: "School of Management",
    tagline: "Business Education for the AI Era",
    description:
      "The School of Management at IILM has been shaping business leaders for over three decades. Our BBA, MBA, and PGDBM programmes are deeply industry-integrated, case-study intensive, and now AI-augmented — preparing graduates for leadership roles in a rapidly transforming global economy. With access to Bloomberg terminals, live industry projects, and a 400+ company placement network, IILM management graduates are in high demand.",
    stats: [
      { value: "30+", label: "Years of Excellence" },
      { value: "400+", label: "Hiring Companies" },
      { value: "7", label: "MBA Specialisations" },
      { value: "4", label: "Campuses" },
    ],
    programmes: [
      { name: "BBA", duration: "3 Years", type: "Undergraduate" },
      {
        name: "MBA",
        duration: "2 Years",
        type: "Postgraduate",
        specs: [
          "Marketing",
          "Finance",
          "HR Management",
          "Operations & Supply Chain",
          "Business Analytics",
          "Entrepreneurship",
          "Logistics & Supply Chain (CII Partnership)",
        ],
      },
      { name: "PGDBM", duration: "2 Years", type: "Postgraduate" },
      { name: "PhD in Management", duration: "3–5 Years", type: "Doctoral" },
    ],
    careers: [
      { title: "Business Analyst", company: "Deloitte, KPMG, EY" },
      { title: "Marketing Manager", company: "HUL, P&G, ITC" },
      { title: "Finance Manager", company: "JP Morgan, Citi, HDFC" },
      { title: "HR Business Partner", company: "Amazon, Infosys, Wipro" },
      { title: "Operations Lead", company: "Maersk, DHL, Amazon" },
      { title: "Entrepreneur", company: "Self-Founded Ventures" },
    ],
    faculty: [
      {
        name: "Dr. Ravi Kumar",
        title: "Professor, Marketing",
        expertise: "Brand Strategy, Consumer Behaviour, Digital Marketing",
        qualification: "PhD, IIM Ahmedabad",
        quote: "I teach marketing as storytelling — data is the plot, empathy is the soul.",
      },
      {
        name: "Dr. Prerna Gupta",
        title: "Associate Professor, Finance",
        expertise: "Corporate Finance, Investment Analysis, Risk Management",
        qualification: "PhD, Delhi School of Economics",
        quote: "Finance is about decisions under uncertainty — I help students become decisive.",
      },
      {
        name: "Dr. Sushil Mathur",
        title: "Professor, Business Strategy",
        expertise: "Strategic Management, Corporate Restructuring, Consulting",
        qualification: "Former Engagement Manager, McKinsey India",
        quote: "Business strategy is chess at scale — I teach students to think three moves ahead.",
      },
    ],
    facilities: [
      "Bloomberg Financial Lab",
      "Case Study Rooms",
      "Industry Live Projects Lab",
      "Leadership & EQ Centre",
      "Co-working & Startup Space",
      "Digital Marketing Studio",
    ],
    highlights: [
      "NAAC Accredited",
      "Bloomberg Terminal Access",
      "CII Industry Partnership",
      "400+ Placement Companies",
      "AI-Integrated Curriculum",
      "International Immersion Trips",
    ],
  },

  cse: {
    id: "cse",
    name: "School of Computer Science & Engineering",
    tagline: "Code. Build. Disrupt.",
    description:
      "IILM's School of Computer Science & Engineering is the most AI-forward department on campus. Students learn to build intelligent systems, work with cloud infrastructure, apply machine learning to real-world challenges, and develop secure software at scale. Our curriculum is co-designed with industry partners including Dell, AWS, and leading cybersecurity firms — ensuring graduates are ready on Day 1.",
    stats: [
      { value: "AI+", label: "Specialised Labs" },
      { value: "95%", label: "Placement Rate" },
      { value: "3", label: "Specialisations" },
      { value: "10+", label: "Industry Partners" },
    ],
    programmes: [
      { name: "B.Tech CSE", duration: "4 Years", type: "Undergraduate" },
      { name: "B.Tech CSE (AI & ML)", duration: "4 Years", type: "Undergraduate" },
      { name: "B.Tech CSE (Data Science)", duration: "4 Years", type: "Undergraduate" },
      { name: "MCA", duration: "2 Years", type: "Postgraduate" },
      { name: "PhD in Computer Science", duration: "3–5 Years", type: "Doctoral" },
    ],
    careers: [
      { title: "Software Engineer", company: "Google, Microsoft, Amazon" },
      { title: "Data Scientist", company: "Flipkart, Zomato, Analytics Firms" },
      { title: "ML Engineer", company: "OpenAI ecosystem, Startups" },
      { title: "Cloud Architect", company: "AWS, Azure, GCP Partners" },
      { title: "Cybersecurity Analyst", company: "KPMG, PwC, Defence sector" },
      { title: "Product Manager", company: "Startups, Unicorns, MNCs" },
    ],
    faculty: [
      {
        name: "Dr. Nikhil Sharma",
        title: "Professor, AI & Machine Learning",
        expertise: "Deep Learning, NLP, Computer Vision, AI Ethics",
        qualification: "PhD, IIT Delhi",
        quote: "AI is not the future — it's already the present. I ensure my students lead it.",
      },
      {
        name: "Dr. Pooja Malhotra",
        title: "Associate Professor, Data Science",
        expertise: "Statistical Learning, Big Data, Python, R",
        qualification: "PhD, University of Toronto",
        quote: "Every dataset tells a story — I teach students to be the best storytellers.",
      },
      {
        name: "Dr. Arun Verma",
        title: "Associate Professor, Cybersecurity",
        expertise: "Network Security, Ethical Hacking, Cloud Security",
        qualification: "PhD, BITS Pilani | Certified CISSP",
        quote: "Security isn't a feature — it's a mindset. I build that mindset in every student.",
      },
    ],
    facilities: [
      "Dedicated AI & ML Research Lab",
      "AWS & Azure Cloud Lab",
      "Cybersecurity Lab (Ethical Hacking)",
      "iOS & Mobile Development Lab",
      "Dell Technology Lab",
      "Data Science & Analytics Studio",
    ],
    highlights: [
      "AICTE Approved",
      "AWS & Azure Cloud Credits",
      "Industry Co-designed Curriculum",
      "Hackathon & Coding Culture",
      "AI Research Publications",
      "Internship Guarantee Programme",
    ],
  },

  engineering: {
    id: "engineering",
    name: "School of Engineering",
    tagline: "Engineering the Future",
    description:
      "IILM's School of Engineering blends rigorous academic fundamentals with hands-on innovation in state-of-the-art laboratories. Offering B.Tech programmes in Mechanical, Civil, Chemical, and Electrical Engineering alongside M.Tech, students develop problem-solving capabilities, design thinking, and engineering ethics. Industry MoUs with leading firms ensure real-world project exposure from the first year.",
    stats: [
      { value: "4", label: "B.Tech Disciplines" },
      { value: "15+", label: "Industry MoUs" },
      { value: "AICTE", label: "Approved" },
      { value: "100%", label: "Lab Infrastructure" },
    ],
    programmes: [
      { name: "B.Tech Mechanical Engineering", duration: "4 Years", type: "Undergraduate" },
      { name: "B.Tech Civil Engineering", duration: "4 Years", type: "Undergraduate" },
      { name: "B.Tech Chemical Engineering", duration: "4 Years", type: "Undergraduate" },
      { name: "B.Tech Electrical Engineering", duration: "4 Years", type: "Undergraduate" },
      { name: "M.Tech (Various Specialisations)", duration: "2 Years", type: "Postgraduate" },
    ],
    careers: [
      { title: "Civil Engineer", company: "L&T, DLF, NHAI, Govt. Projects" },
      { title: "Mechanical Design Engineer", company: "Tata Motors, Maruti, BHEL" },
      { title: "Process Engineer", company: "Reliance, ONGC, Chemical MNCs" },
      { title: "Electrical Engineer", company: "Siemens, ABB, Power Grid" },
      { title: "Project Manager", company: "Construction, Infrastructure firms" },
      { title: "R&D Engineer", company: "Research Labs, DRDO, PSUs" },
    ],
    faculty: [
      {
        name: "Dr. Amit Tiwari",
        title: "Professor, Mechanical Engineering",
        expertise: "Thermodynamics, CAD/CAM, Manufacturing Processes",
        qualification: "PhD, IIT Bombay",
        quote: "Engineering is about solving real problems — not passing exams.",
      },
      {
        name: "Dr. Kavita Singh",
        title: "Associate Professor, Civil Engineering",
        expertise: "Structural Analysis, Sustainable Construction, GIS",
        qualification: "PhD, NIT Delhi",
        quote: "Every structure we design must serve people and respect the planet.",
      },
      {
        name: "Dr. Rahul Mehta",
        title: "Associate Professor, Electrical Engineering",
        expertise: "Power Systems, Renewable Energy, Smart Grid",
        qualification: "PhD, IIT Roorkee",
        quote: "The energy transition is the greatest engineering challenge of our generation.",
      },
    ],
    facilities: [
      "CAD/CAM Design Lab",
      "Fluid Mechanics & Thermal Lab",
      "Structural Engineering Lab",
      "Electrical Machines & Drives Lab",
      "Chemical Process Lab",
      "Engineering Workshop & Fabrication",
    ],
    highlights: [
      "AICTE Approved",
      "Industry Project Collaborations",
      "Research & Patent Culture",
      "PSU Placement Network",
      "Inter-disciplinary Projects",
      "Annual Engineering Fest",
    ],
  },

  sciences: {
    id: "sciences",
    name: "School of Sciences",
    tagline: "Curiosity. Rigour. Discovery.",
    description:
      "The School of Sciences at IILM offers B.Sc. and M.Sc. programmes in Physics, Chemistry, Mathematics, and Biology. Our science programmes are research-oriented, equipping students for careers in academia, industry, research institutions, and emerging sectors like biotech, pharma, and data analytics. Small class sizes and well-equipped labs create the ideal environment for scientific discovery.",
    stats: [
      { value: "4", label: "Disciplines" },
      { value: "UG + PG", label: "Programmes" },
      { value: "Research", label: "Focused" },
      { value: "PhD", label: "Pathway Available" },
    ],
    programmes: [
      {
        name: "B.Sc.",
        duration: "3 Years",
        type: "Undergraduate",
        specs: ["Physics", "Chemistry", "Mathematics", "Biology"],
      },
      {
        name: "M.Sc.",
        duration: "2 Years",
        type: "Postgraduate",
        specs: ["Physics", "Chemistry", "Mathematics", "Biology"],
      },
    ],
    careers: [
      { title: "Research Scientist", company: "CSIR, DRDO, IISc" },
      { title: "Lab Analyst", company: "Pharma, Biotech, Chemical firms" },
      { title: "Data Analyst", company: "Analytics companies, Fintech" },
      { title: "Academic Researcher", company: "Universities, Research centres" },
      { title: "Biotechnology Specialist", company: "Biocon, Novartis, Pfizer" },
      { title: "Pharmaceutical Professional", company: "Sun Pharma, Cipla, Dr. Reddy's" },
    ],
    faculty: [
      {
        name: "Dr. Vandana Sharma",
        title: "Professor, Chemistry",
        expertise: "Organic Chemistry, Green Synthesis, Spectroscopy",
        qualification: "PhD, University of Delhi",
        quote: "Chemistry is not just reactions — it is understanding matter at its most fundamental level.",
      },
      {
        name: "Dr. Pradeep Joshi",
        title: "Associate Professor, Mathematics",
        expertise: "Applied Mathematics, Statistics, Operations Research",
        qualification: "PhD, IIT Kanpur",
        quote: "Mathematics is the language the universe speaks — I help students become fluent.",
      },
      {
        name: "Dr. Meera Bansal",
        title: "Associate Professor, Biology",
        expertise: "Cell Biology, Genetics, Biotechnology",
        qualification: "PhD, Jawaharlal Nehru University",
        quote: "Biology teaches us that life is infinitely more complex and beautiful than we imagine.",
      },
    ],
    facilities: [
      "Advanced Chemistry Research Lab",
      "Biology & Microbiology Lab",
      "Physics Instrumentation Lab",
      "Mathematics & Statistics Computing Lab",
      "Research Centre",
      "Scientific Instrument Room",
    ],
    highlights: [
      "Research-Oriented Curriculum",
      "Industry Internship Network",
      "Publications & Conferences",
      "Inter-Disciplinary Projects",
      "PhD Pathway Available",
      "Lab-Intensive Teaching",
    ],
  },

  law: {
    id: "law",
    name: "Law School",
    tagline: "Where Law Meets Leadership",
    description:
      "IILM Law School offers one of the most comprehensive legal education experiences in North India, approved by the Bar Council of India. Our BA LL.B, BBA LL.B, and LL.M programmes are grounded in constitutional values, contemporary law, and social justice. Students gain hands-on experience through moot courts, legal aid clinics, law firm internships, and the LLM Innovation Lab.",
    stats: [
      { value: "BCI", label: "Approved" },
      { value: "2", label: "UG Programmes" },
      { value: "1", label: "PG Programme" },
      { value: "Moot Court", label: "Facility" },
    ],
    programmes: [
      { name: "B.A. LL.B", duration: "5 Years", type: "Undergraduate" },
      { name: "BBA LL.B", duration: "5 Years", type: "Undergraduate" },
      { name: "LL.M", duration: "1 Year", type: "Postgraduate" },
      { name: "PhD in Law", duration: "3–5 Years", type: "Doctoral" },
    ],
    careers: [
      { title: "Advocate / Barrister", company: "High Courts, Supreme Court, District Courts" },
      { title: "Corporate Lawyer", company: "Law Firms, MNC Legal Teams" },
      { title: "Legal Counsel", company: "Corporates, Banks, PSUs" },
      { title: "Judicial Services", company: "Civil Services, Judiciary" },
      { title: "Policy Analyst", company: "Think Tanks, NGOs, Government" },
      { title: "Legal Researcher", company: "Law Schools, Research Institutions" },
    ],
    faculty: [
      {
        name: "Dr. Anjali Srivastava",
        title: "Professor, Constitutional Law",
        expertise: "Constitutional Law, Human Rights, Judicial Review",
        qualification: "PhD, Jawaharlal Nehru University",
        quote: "The Constitution is not just a document — it's a living promise to every Indian.",
      },
      {
        name: "Adv. Rajan Arora",
        title: "Associate Professor, Corporate Law",
        expertise: "Company Law, M&A, Securities Regulation",
        qualification: "LLM, Delhi University | 20 Years Legal Practice",
        quote: "Law students must learn to argue both sides with equal conviction.",
      },
      {
        name: "Dr. Sunita Chauhan",
        title: "Associate Professor, Criminal Law",
        expertise: "Criminal Procedure, Evidence, Criminology",
        qualification: "PhD, Lucknow University",
        quote: "Justice is not abstract — it's what happens when law meets human lives.",
      },
    ],
    facilities: [
      "Moot Court Hall",
      "LLM Innovation Lab",
      "Legal Aid Clinic",
      "Law Library & Databases",
      "Mediation & ADR Centre",
      "Courtroom Simulation Room",
    ],
    highlights: [
      "Bar Council of India Approved",
      "Moot Court Competitions",
      "Law Firm Internships",
      "Legal Aid & Pro Bono Work",
      "Judicial Services Coaching",
      "National Law Conferences",
    ],
  },

  psychology: {
    id: "psychology",
    name: "School of Psychology",
    tagline: "Understanding the Human Mind",
    description:
      "IILM's School of Psychology offers rigorous B.A. and M.A. programmes in Psychology, preparing graduates for careers in clinical settings, HR, counselling, research, UX, and social work. The curriculum integrates evidence-based psychological theory with practical fieldwork, research methodology, and emerging areas like neuropsychology and digital mental health.",
    stats: [
      { value: "UG + PG", label: "Programmes" },
      { value: "Research", label: "Lab Available" },
      { value: "Clinical", label: "Practicum" },
      { value: "2", label: "Campuses" },
    ],
    programmes: [
      { name: "B.A. Psychology", duration: "3 Years", type: "Undergraduate" },
      { name: "M.A. Psychology", duration: "2 Years", type: "Postgraduate" },
    ],
    careers: [
      { title: "Clinical Psychologist", company: "Hospitals, Private Practice" },
      { title: "HR Professional", company: "Corporates, Consulting firms" },
      { title: "Counsellor", company: "Schools, NGOs, Wellness Centres" },
      { title: "Researcher", company: "Universities, Research Institutes" },
      { title: "UX Researcher", company: "Tech Companies, Design Agencies" },
      { title: "Social Worker", company: "NGOs, Government Bodies" },
    ],
    faculty: [
      {
        name: "Dr. Smita Arora",
        title: "Professor, Clinical Psychology",
        expertise: "Cognitive Behavioural Therapy, Trauma, Psychopathology",
        qualification: "PhD, NIMHANS Bangalore",
        quote: "Understanding the mind is the most humbling and empowering thing a person can do.",
      },
      {
        name: "Dr. Nandini Kapoor",
        title: "Associate Professor, Organisational Psychology",
        expertise: "Workplace Mental Health, Leadership Psychology, Assessment",
        qualification: "PhD, University of Delhi",
        quote: "Psychology in the workplace is about helping organisations be more human.",
      },
      {
        name: "Dr. Rohit Bhatia",
        title: "Assistant Professor, Research Methods",
        expertise: "Quantitative Research, Psychometrics, Data Analysis",
        qualification: "PhD, Hyderabad Central University",
        quote: "Good research is the backbone of every credible psychological intervention.",
      },
    ],
    facilities: [
      "Psychology Research Lab",
      "Counselling Practice Room",
      "Behavioural Observation Suite",
      "Psychometric Testing Centre",
      "Digital Mental Health Studio",
      "Group Therapy Space",
    ],
    highlights: [
      "Clinical Practicum Included",
      "NGO & Hospital Tie-ups",
      "Research Methodology Training",
      "Mental Health Awareness Cell",
      "Publications & Conferences",
      "Wellness Programme on Campus",
    ],
  },

  communication: {
    id: "communication",
    name: "School of Communication",
    tagline: "Tell Stories That Matter",
    description:
      "IILM's School of Communication prepares students for careers in journalism, public relations, digital media, brand management, and filmmaking. Our B.A. and M.A. Communication programmes are built around hands-on media production, strategic communications, and storytelling across formats — print, digital, video, and social media. Students work in a professional multimedia studio from Day 1.",
    stats: [
      { value: "UG + PG", label: "Programmes" },
      { value: "Studio", label: "Multimedia Lab" },
      { value: "100+", label: "Media Partners" },
      { value: "2", label: "Campuses" },
    ],
    programmes: [
      { name: "B.A. Communication", duration: "3 Years", type: "Undergraduate" },
      { name: "M.A. Communication", duration: "2 Years", type: "Postgraduate" },
    ],
    careers: [
      { title: "Journalist", company: "NDTV, Times of India, The Hindu" },
      { title: "PR Manager", company: "Edelman, Weber Shandwick, BCW" },
      { title: "Content Strategist", company: "Agencies, Startups, Corporates" },
      { title: "Brand Manager", company: "FMCG, E-Commerce, D2C brands" },
      { title: "Digital Media Manager", company: "OTT, Social Media Agencies" },
      { title: "Filmmaker / Director", company: "Production Houses, OTT Platforms" },
    ],
    faculty: [
      {
        name: "Prof. Anita Saxena",
        title: "Professor, Journalism & Media Studies",
        expertise: "Investigative Journalism, Digital News, Media Ethics",
        qualification: "MA Journalism, JMI | 15 Years Media Industry",
        quote: "Good journalism holds power accountable — that's a responsibility I take seriously.",
      },
      {
        name: "Dr. Vikram Das",
        title: "Associate Professor, PR & Advertising",
        expertise: "Brand Communications, Crisis PR, Integrated Marketing",
        qualification: "PhD, Jamia Millia Islamia",
        quote: "Communication is not what you say — it's what people remember and feel.",
      },
      {
        name: "Prof. Reena Kapoor",
        title: "Assistant Professor, Digital Media",
        expertise: "Social Media Strategy, Video Production, SEO",
        qualification: "MA Film & Media | Ex-Producer, Zee News",
        quote: "Every student has a story to tell — I help them find their medium and their voice.",
      },
    ],
    facilities: [
      "Professional Multimedia Studio",
      "Video Production Suite",
      "Radio Studio",
      "Digital Photography Lab",
      "Social Media Command Centre",
      "Editing & Post-production Suite",
    ],
    highlights: [
      "Industry Internships Compulsory",
      "Media House Partnerships",
      "Student-Run Campus Magazine",
      "Annual Media Fest",
      "Film & Documentary Production",
      "Visiting Industry Journalists",
    ],
  },

  design: {
    id: "design",
    name: "School of Design",
    tagline: "Design Thinking. Human-Centred. Future-Ready.",
    description:
      "IILM's School of Design nurtures creative minds with a rigorous foundation in design thinking, visual communication, UX/UI, and product design. Our B.Des and M.Des programmes combine studio practice, digital tools, industry briefs, and global design trends — producing graduates who lead creative teams at top firms or launch their own studios.",
    stats: [
      { value: "UG + PG", label: "Programmes" },
      { value: "Design Studio", label: "State-of-the-Art" },
      { value: "3D Printing", label: "Facility" },
      { value: "Gurugram", label: "Campus" },
    ],
    programmes: [
      { name: "B.Des", duration: "4 Years", type: "Undergraduate" },
      { name: "M.Des", duration: "2 Years", type: "Postgraduate" },
    ],
    careers: [
      { title: "UX/UI Designer", company: "Google, Amazon, Startups" },
      { title: "Graphic Designer", company: "Agencies, In-house Design Teams" },
      { title: "Brand Designer", company: "Branding Studios, FMCG" },
      { title: "Design Consultant", company: "Consulting Firms, Freelance" },
      { title: "Creative Director", company: "Advertising Agencies, OTT" },
      { title: "Product Designer", company: "Tech Startups, Consumer Brands" },
    ],
    faculty: [
      {
        name: "Prof. Kiran Mehta",
        title: "Professor, UX Design",
        expertise: "User Experience Design, Design Systems, Human-Centred Design",
        qualification: "M.Des NID Ahmedabad | Ex-Lead Designer, Google India",
        quote: "Great design is invisible — it just feels right.",
      },
      {
        name: "Prof. Deepa Nair",
        title: "Associate Professor, Visual Communication",
        expertise: "Typography, Brand Identity, Illustration, Print Design",
        qualification: "M.Des NIFT | 12 Years Industry Practice",
        quote: "Design without purpose is decoration — I teach students to design with intent.",
      },
      {
        name: "Prof. Sameer Bose",
        title: "Assistant Professor, Product & Industrial Design",
        expertise: "3D Modelling, Prototyping, Sustainable Design",
        qualification: "B.Des + M.Des, IIT Bombay",
        quote: "Products live in the real world — I help students design for that messy, beautiful reality.",
      },
    ],
    facilities: [
      "Professional Design Studio",
      "3D Printing & Prototyping Lab",
      "Digital Fabrication Centre",
      "Photography & Visual Arts Studio",
      "UX Research Lab",
      "Material Library & Workshop",
    ],
    highlights: [
      "NID/NIFT-Aligned Curriculum",
      "Industry Brief Projects",
      "Annual Design Exhibition",
      "International Design Exposure",
      "Interdisciplinary Collaboration",
      "Portfolio Development Support",
    ],
  },

  "liberal-arts": {
    id: "liberal-arts",
    name: "School of Liberal Arts",
    tagline: "Think Broadly. Act Decisively.",
    description:
      "IILM's School of Liberal Arts offers a truly interdisciplinary education — combining philosophy, economics, sociology, political science, literature, and history in programmes designed to build critical thinkers and lifelong learners. The flagship B.A. Liberal Arts is also available as a Four-Year Undergraduate Programme (FYUP) aligned with NEP 2020, offering multiple exit points and a minor in a second discipline.",
    stats: [
      { value: "FYUP", label: "NEP 2020 Aligned" },
      { value: "2", label: "Campuses" },
      { value: "Interdisciplinary", label: "Curriculum" },
      { value: "4", label: "Exit Points" },
    ],
    programmes: [
      {
        name: "B.A. Liberal Arts",
        duration: "3 Years / 4 Years (FYUP)",
        type: "Undergraduate",
        specs: [
          "Philosophy & Ethics",
          "Political Science",
          "Sociology",
          "Economics",
          "History & Culture",
          "Literature",
        ],
      },
    ],
    careers: [
      { title: "Civil Services / IAS / IPS", company: "Government of India" },
      { title: "Policy Analyst", company: "Think Tanks, NGOs, International Bodies" },
      { title: "Research Associate", company: "Universities, Research Institutes" },
      { title: "Publishing & Journalism", company: "Publishers, Media Houses" },
      { title: "NGO & Development Sector", company: "UN Agencies, INGOs" },
      { title: "Entrepreneur", company: "Social Enterprises, Startups" },
    ],
    faculty: [
      {
        name: "Dr. Asha Menon",
        title: "Professor, Sociology & Gender Studies",
        expertise: "Social Theory, Intersectionality, Development Studies",
        qualification: "PhD, Jawaharlal Nehru University",
        quote: "The liberal arts teach you to ask better questions — and that changes everything.",
      },
      {
        name: "Dr. Suresh Pillai",
        title: "Associate Professor, Political Science",
        expertise: "Indian Polity, Comparative Politics, International Relations",
        qualification: "PhD, University of Delhi",
        quote: "Understanding politics is not optional for citizens — it's a civic responsibility.",
      },
      {
        name: "Dr. Nalini Ghosh",
        title: "Assistant Professor, Economics",
        expertise: "Development Economics, Behavioural Economics, Public Policy",
        qualification: "PhD, Presidency University Kolkata",
        quote: "Economics gives you a lens — liberal arts gives you the full picture.",
      },
    ],
    facilities: [
      "Collaborative Learning Spaces",
      "Debate & Seminar Room",
      "Social Research Lab",
      "Policy Simulation Room",
      "Library & Reading Lounge",
      "Student-Led Discussion Circles",
    ],
    highlights: [
      "NEP 2020 FYUP Option",
      "Multiple Exit Points",
      "Civil Services Coaching Integration",
      "International Guest Lectures",
      "Interdisciplinary Minor Available",
      "Research Paper Mentorship",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(schoolsData).map((school) => ({ school }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ school: string }>;
}): Promise<Metadata> {
  const { school } = await params;
  const data = schoolsData[school as SchoolId];
  if (!data) return { title: "School Not Found | IILM University" };
  return {
    title: `${data.name} | IILM University`,
    description: data.description.slice(0, 160),
  };
}

export default async function SchoolPage({
  params,
}: {
  params: Promise<{ school: string }>;
}) {
  const { school } = await params;
  const data = schoolsData[school as SchoolId];

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">School of Excellence</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            {data.name}
          </h1>
          <p className="text-xl text-blue font-medium mb-6">{data.tagline}</p>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {data.highlights.map((h) => (
              <span key={h} className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-sm">
                {h}
              </span>
            ))}
          </div>
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
              Enquire
            </Link>
          </div>
        </div>
      </section>

      {/* About the School */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">About the School</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6">
                Why {data.name}?
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">{data.description}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-6">School at a Glance</p>
              <div className="grid grid-cols-2 gap-4">
                {data.stats.map((s) => (
                  <div key={s.label} className="bg-slate rounded-2xl p-6 text-center border border-slate-100 card-hover">
                    <div className="text-2xl font-bold text-navy mb-1">{s.value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Programmes Offered</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Programmes at {data.name}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.programmes.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-navy text-base">{p.name}</h3>
                  <span className="text-xs font-semibold bg-navy/8 text-navy px-2.5 py-1 rounded-full ml-2 flex-shrink-0">
                    {p.duration}
                  </span>
                </div>
                <span className="inline-block text-xs bg-blue/10 text-blue font-medium px-2.5 py-1 rounded-full mb-3">
                  {p.type}
                </span>
                {p.specs && (
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Specialisations</p>
                    <ul className="space-y-1">
                      {p.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link
                  href="https://admissions.iilm.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block text-center text-xs font-semibold py-2 rounded-full bg-maroon text-white hover:bg-maroon-light transition-all"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Career Outcomes</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Where Our Graduates Go</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              {data.name} graduates are placed across top companies and institutions in India and globally.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.careers.map((c) => (
              <div key={c.title} className="bg-slate rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20">
                <h3 className="font-bold text-navy text-base mb-2">{c.title}</h3>
                <p className="text-xs text-slate-500">{c.company}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/placements"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all"
            >
              View Placement Records
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Our Faculty</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Meet Our Faculty</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Scholars, practitioners, and mentors who bring world-class expertise to every classroom.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.faculty.map((f) => (
              <div key={f.name} className="bg-white rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-2xl bg-navy text-white font-bold text-xl flex items-center justify-center mb-5">
                  {f.name.split(" ").filter((w) => w !== "Dr." && w !== "Adv." && w !== "Prof.").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <h3 className="font-bold text-navy text-base mb-0.5">{f.name}</h3>
                <p className="text-xs text-blue font-semibold mb-1">{f.title}</p>
                <p className="text-xs text-slate-400 mb-3">{f.qualification}</p>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  <span className="font-medium text-slate-600">Expertise:</span> {f.expertise}
                </p>
                <blockquote className="border-l-2 border-blue/30 pl-3 text-xs italic text-slate-500 leading-relaxed">
                  &ldquo;{f.quote}&rdquo;
                </blockquote>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/faculty"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all"
            >
              Meet All Faculty
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Infrastructure</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Facilities &amp; Labs</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              State-of-the-art infrastructure designed to support learning, research, and innovation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.facilities.map((facility) => (
              <div key={facility} className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate card-hover hover:border-navy/20">
                <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <span className="font-medium text-navy text-sm">{facility}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Join {data.name}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Start Your Journey at {data.name}
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Applications for 2026 intake are open. Apply online or speak to our admissions team for guidance.
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
              Enquire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
