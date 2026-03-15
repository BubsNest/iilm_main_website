export type Level = 'undergraduate' | 'postgraduate' | 'doctoral' | 'executive';

export interface SubCourse {
  name: string;
  duration: string;
  description?: string;
}

export interface Programme {
  id: string;
  name: string;
  level: Level;
  duration: string;
  campuses: string[]; // campus slugs
  school: string;
  description: string;
  subCourses?: SubCourse[];
  highlights?: string[];
}

export const programmes: Programme[] = [
  // ─── MANAGEMENT ────────────────────────────────────────────────────────────
  {
    id: "bba",
    name: "BBA (Bachelor of Business Administration)",
    level: "undergraduate",
    duration: "3 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Management",
    description:
      "A rigorous three-year undergraduate programme that builds foundational knowledge in management, marketing, finance, and entrepreneurship. Students engage with live industry projects and case studies from day one, graduating as career-ready business professionals.",
    highlights: [
      "Industry-integrated curriculum",
      "Summer internship in Year 2",
      "Specialisation tracks in Marketing, Finance & HR",
      "300+ recruiting companies",
    ],
  },
  {
    id: "mba",
    name: "MBA (Master of Business Administration)",
    level: "postgraduate",
    duration: "2 years",
    campuses: ["gurugram", "greater-noida", "lucknow", "jaipur"],
    school: "Management",
    description:
      "IILM's flagship MBA programme is designed for aspiring business leaders who want to develop strategic thinking, leadership skills, and a global business perspective. The programme offers multiple specialisations aligned with current industry demands.",
    subCourses: [
      {
        name: "MBA – Marketing",
        duration: "2 years",
        description: "Brand strategy, digital marketing, consumer behaviour, and sales management.",
      },
      {
        name: "MBA – Finance",
        duration: "2 years",
        description: "Corporate finance, investment banking, financial modelling, and risk management.",
      },
      {
        name: "MBA – HR Management",
        duration: "2 years",
        description: "Talent acquisition, organisational behaviour, leadership development, and labour law.",
      },
      {
        name: "MBA – Operations",
        duration: "2 years",
        description: "Supply chain, quality management, project management, and lean operations.",
      },
      {
        name: "MBA – Business Analytics",
        duration: "2 years",
        description: "Data-driven decision making, machine learning for business, and business intelligence.",
      },
      {
        name: "MBA – Entrepreneurship",
        duration: "2 years",
        description: "Startup ecosystem, venture capital, design thinking, and new venture creation.",
      },
      {
        name: "MBA – Logistics & Supply Chain (CII Partnership)",
        duration: "2 years",
        description:
          "Co-designed with the Confederation of Indian Industry (CII), covering global logistics, procurement, and supply chain analytics.",
      },
    ],
    highlights: [
      "7 specialisation tracks",
      "CII-partnered Logistics & Supply Chain MBA",
      "International immersion programme",
      "Corporate mentorship programme",
      "Case-based and experiential learning",
    ],
  },
  {
    id: "pgdbm",
    name: "PGDBM (Post Graduate Diploma in Business Management)",
    level: "postgraduate",
    duration: "2 years",
    campuses: ["lodhi-road"],
    school: "Management",
    description:
      "The PGDBM at IILM's Lodhi Road campus is a time-tested, AICTE-approved management programme delivered in the heart of New Delhi. With a strong legacy and an intimate cohort model, the programme provides deep industry exposure, personalised faculty mentorship, and excellent placement outcomes.",
    highlights: [
      "AICTE-approved programme",
      "Small cohort for personalised learning",
      "Legacy of 30+ years",
      "Strong Delhi NCR placement network",
      "Bloomberg terminal and financial labs access",
    ],
  },

  // ─── COMPUTER SCIENCE & ENGINEERING ────────────────────────────────────────
  {
    id: "btech-cse",
    name: "B.Tech – Computer Science & Engineering",
    level: "undergraduate",
    duration: "4 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Computer Science & Engineering",
    description:
      "A comprehensive four-year programme that builds strong foundations in algorithms, data structures, software engineering, and system design. Students have access to state-of-the-art labs including Dell Lab, iOS Lab, and Cloud Computing Lab.",
    highlights: [
      "Dell Technology Lab partnership",
      "iOS and mobile development lab",
      "Internship-led curriculum",
      "Active coding and hackathon culture",
    ],
  },
  {
    id: "btech-cse-aiml",
    name: "B.Tech – CSE (Artificial Intelligence & Machine Learning)",
    level: "undergraduate",
    duration: "4 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Computer Science & Engineering",
    description:
      "A specialised B.Tech programme combining core computer science with in-depth study of artificial intelligence, machine learning, neural networks, and data science. Graduates are equipped for careers in AI research, product development, and data engineering.",
    highlights: [
      "Dedicated AI/ML lab",
      "Python, TensorFlow, PyTorch curriculum",
      "Research publication opportunities",
      "Industry AI project collaborations",
    ],
  },
  {
    id: "btech-cse-ds",
    name: "B.Tech – CSE (Data Science)",
    level: "undergraduate",
    duration: "4 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Computer Science & Engineering",
    description:
      "An interdisciplinary B.Tech programme focusing on the mathematics, statistics, and programming skills needed to extract insight from large datasets. The curriculum covers data engineering, big data, statistical modelling, and business analytics.",
    highlights: [
      "Statistics and probability foundations",
      "Big data and cloud platforms",
      "Industry capstone projects",
      "Analytics tool proficiency (Tableau, Power BI, R)",
    ],
  },
  {
    id: "mca",
    name: "MCA (Master of Computer Applications)",
    level: "postgraduate",
    duration: "2 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Computer Science & Engineering",
    description:
      "A postgraduate programme designed for graduates who want to deepen their expertise in software development, cloud computing, cybersecurity, and enterprise applications. The MCA bridges technical depth with professional application.",
    highlights: [
      "Cybersecurity and cloud computing specialisations",
      "Enterprise software development",
      "Strong placement outcomes in IT sector",
    ],
  },

  // ─── PSYCHOLOGY ────────────────────────────────────────────────────────────
  {
    id: "ba-psychology",
    name: "B.A. (Honours) Psychology",
    level: "undergraduate",
    duration: "3 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Psychology",
    description:
      "A comprehensive three-year Honours programme covering clinical, organisational, cognitive, and social psychology. The programme includes practical training in the psychology research lab and opportunities for community engagement and fieldwork.",
    highlights: [
      "Dedicated psychology research lab",
      "Clinical and counselling modules",
      "Internship placements with NGOs and hospitals",
      "Research methodology training",
    ],
  },
  {
    id: "ma-psychology",
    name: "M.A. Psychology",
    level: "postgraduate",
    duration: "2 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Psychology",
    description:
      "A postgraduate programme offering advanced study in clinical, organisational, and developmental psychology. Students develop expertise in psychological assessment, counselling techniques, and research design.",
    highlights: [
      "Specialisation in Clinical or Organisational Psychology",
      "Supervised clinical practicum",
      "Research dissertation",
      "Career pathways in counselling, HR, and research",
    ],
  },

  // ─── LAW ───────────────────────────────────────────────────────────────────
  {
    id: "ba-llb",
    name: "B.A. LL.B (Hons.)",
    level: "undergraduate",
    duration: "5 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Law",
    description:
      "An integrated five-year law programme that combines a Bachelor of Arts with an LLB, providing students with a strong grounding in legal theory, constitutional law, criminal law, and jurisprudence alongside humanities subjects.",
    highlights: [
      "Moot Court training",
      "Legal aid clinic internships",
      "Guest lectures by sitting judges and senior advocates",
      "Dual degree advantage",
    ],
  },
  {
    id: "bba-llb",
    name: "BBA LL.B (Hons.)",
    level: "undergraduate",
    duration: "5 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Law",
    description:
      "An integrated five-year dual-degree programme combining business administration and law. Ideal for students aspiring to careers in corporate law, mergers & acquisitions, intellectual property, and business litigation.",
    highlights: [
      "Corporate law focus",
      "Business law and startup law modules",
      "Moot Court and arbitration training",
      "Internships with law firms and corporates",
    ],
  },
  {
    id: "llm",
    name: "LL.M (Master of Laws)",
    level: "postgraduate",
    duration: "1 year",
    campuses: ["gurugram", "greater-noida"],
    school: "Law",
    description:
      "A one-year postgraduate law programme allowing law graduates to develop advanced expertise in a chosen area of law. The LL.M at IILM is supported by the LLM Innovation Lab and a faculty of distinguished legal academics and practitioners.",
    highlights: [
      "LLM Innovation Lab",
      "Corporate and Criminal Law specialisations",
      "Research and dissertation focus",
      "Pathways to judicial services and academia",
    ],
  },

  // ─── COMMUNICATION ─────────────────────────────────────────────────────────
  {
    id: "ba-communication",
    name: "B.A. (Honours) Communication",
    level: "undergraduate",
    duration: "3 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Communication",
    description:
      "A dynamic three-year programme covering journalism, digital media, public relations, advertising, and media production. Students work in a fully equipped multimedia studio, gaining hands-on experience with modern media tools.",
    highlights: [
      "Multimedia studio production training",
      "Digital media and social content creation",
      "Journalism and PR specialisations",
      "Industry internships from Year 1",
    ],
  },
  {
    id: "ma-communication",
    name: "M.A. Communication",
    level: "postgraduate",
    duration: "2 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Communication",
    description:
      "A postgraduate programme for communication professionals seeking to advance their careers in media, corporate communications, digital strategy, and content leadership. The programme emphasises research, storytelling, and strategic communications.",
    highlights: [
      "Advanced media research methods",
      "Corporate communications and crisis management",
      "Digital strategy and content marketing",
      "Dissertation and portfolio project",
    ],
  },

  // ─── DESIGN (Gurugram only) ─────────────────────────────────────────────────
  {
    id: "bdes",
    name: "B.Des (Bachelor of Design)",
    level: "undergraduate",
    duration: "4 years",
    campuses: ["gurugram"],
    school: "Design",
    description:
      "A four-year professional design programme covering UI/UX design, graphic design, product design, and design thinking. Students work in a professional-grade Design Studio and collaborate with industry partners on real-world briefs.",
    highlights: [
      "Professional Design Studio",
      "UI/UX, Graphic, and Product Design tracks",
      "Industry collaboration briefs",
      "Portfolio development from Year 1",
    ],
  },
  {
    id: "mdes",
    name: "M.Des (Master of Design)",
    level: "postgraduate",
    duration: "2 years",
    campuses: ["gurugram"],
    school: "Design",
    description:
      "An advanced postgraduate design programme for graduates seeking to push the boundaries of design practice and theory. The M.Des covers advanced interaction design, design research, and strategic design leadership.",
    highlights: [
      "Advanced interaction and systems design",
      "Design research methodology",
      "Industry thesis projects",
      "Access to professional design tools and software",
    ],
  },

  // ─── LIBERAL ARTS ──────────────────────────────────────────────────────────
  {
    id: "ba-liberal-arts",
    name: "B.A. Liberal Arts (FYUP)",
    level: "undergraduate",
    duration: "3 years / 4 years (FYUP)",
    campuses: ["gurugram", "greater-noida"],
    school: "Liberal Arts",
    description:
      "A multidisciplinary undergraduate programme that combines humanities, social sciences, and professional skills. Available as a three-year B.A. or the four-year FYUP (Four-Year Undergraduate Programme) offering a richer interdisciplinary experience and enhanced research training.",
    highlights: [
      "Four-Year Undergraduate Programme (FYUP) option",
      "Interdisciplinary elective system",
      "Philosophy, sociology, economics, history modules",
      "Critical thinking and writing intensive",
    ],
  },

  // ─── SCIENCES (Greater Noida only) ─────────────────────────────────────────
  {
    id: "bsc",
    name: "B.Sc. (Bachelor of Science)",
    level: "undergraduate",
    duration: "3 years",
    campuses: ["greater-noida"],
    school: "Sciences",
    description:
      "A three-year science degree programme offering rigorous undergraduate education in pure sciences. Students gain strong theoretical foundations coupled with laboratory training.",
    subCourses: [
      { name: "B.Sc. Physics", duration: "3 years", description: "Classical mechanics, electromagnetism, quantum physics, and experimental physics." },
      { name: "B.Sc. Chemistry", duration: "3 years", description: "Organic, inorganic, and physical chemistry with extensive lab work." },
      { name: "B.Sc. Mathematics", duration: "3 years", description: "Pure and applied mathematics including calculus, algebra, and statistics." },
      { name: "B.Sc. Biology", duration: "3 years", description: "Cell biology, genetics, ecology, and microbiology." },
    ],
    highlights: [
      "Well-equipped science laboratories",
      "Research project in Year 3",
      "Gateway to M.Sc. programmes",
    ],
  },
  {
    id: "msc",
    name: "M.Sc. (Master of Science)",
    level: "postgraduate",
    duration: "2 years",
    campuses: ["greater-noida"],
    school: "Sciences",
    description:
      "A postgraduate science programme providing advanced theoretical and research training in the physical and life sciences. The M.Sc. prepares students for research careers, doctoral programmes, and roles in industry and education.",
    subCourses: [
      { name: "M.Sc. Physics", duration: "2 years", description: "Advanced quantum mechanics, condensed matter, and computational physics." },
      { name: "M.Sc. Chemistry", duration: "2 years", description: "Advanced organic synthesis, spectroscopy, and research methodology." },
      { name: "M.Sc. Mathematics", duration: "2 years", description: "Real analysis, topology, numerical methods, and mathematical modelling." },
      { name: "M.Sc. Biology", duration: "2 years", description: "Molecular biology, biotechnology, and research dissertation." },
    ],
    highlights: [
      "Research dissertation",
      "Advanced laboratory techniques",
      "Pathways to Ph.D. and industry research",
    ],
  },

  // ─── ENGINEERING (Greater Noida only) ──────────────────────────────────────
  {
    id: "btech-engineering",
    name: "B.Tech (Bachelor of Technology)",
    level: "undergraduate",
    duration: "4 years",
    campuses: ["greater-noida"],
    school: "Engineering",
    description:
      "A four-year engineering degree programme across core engineering disciplines. Students are trained in rigorous engineering fundamentals with extensive laboratory and project-based learning, preparing them for careers in India's manufacturing, infrastructure, and energy sectors.",
    subCourses: [
      { name: "B.Tech Mechanical Engineering", duration: "4 years", description: "Thermodynamics, fluid mechanics, manufacturing technology, and machine design." },
      { name: "B.Tech Civil Engineering", duration: "4 years", description: "Structural engineering, geotechnics, transportation, and construction management." },
      { name: "B.Tech Chemical Engineering", duration: "4 years", description: "Process design, reaction engineering, thermodynamics, and mass transfer." },
      { name: "B.Tech Electrical Engineering", duration: "4 years", description: "Power systems, control systems, electronics, and electrical machines." },
    ],
    highlights: [
      "Dedicated discipline-specific labs",
      "Industrial training and internships",
      "Live project collaboration with industry",
      "AICTE-approved programme",
    ],
  },
  {
    id: "mtech",
    name: "M.Tech (Master of Technology)",
    level: "postgraduate",
    duration: "2 years",
    campuses: ["greater-noida"],
    school: "Engineering",
    description:
      "A postgraduate engineering programme offering advanced technical education and research training for engineering graduates. The M.Tech focuses on specialised technical knowledge, research methodology, and innovation.",
    highlights: [
      "Research-oriented curriculum",
      "Advanced engineering labs",
      "Dissertation and technical publication",
      "AICTE-approved programme",
    ],
  },

  // ─── DOCTORAL PROGRAMMES ────────────────────────────────────────────────────
  {
    id: "phd-management",
    name: "Ph.D. in Management",
    level: "doctoral",
    duration: "3–5 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Management",
    description:
      "A research doctorate in management disciplines including strategy, marketing, finance, organisational behaviour, and operations. Candidates pursue original research under expert faculty supervision and contribute to the body of management knowledge.",
    highlights: [
      "Full-time and part-time modes",
      "Expert faculty supervisors",
      "Research publication support",
      "Research grant assistance",
    ],
  },
  {
    id: "phd-law",
    name: "Ph.D. in Law",
    level: "doctoral",
    duration: "3–5 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Law",
    description:
      "A doctoral programme in legal studies enabling candidates to conduct original legal research in constitutional law, corporate law, international law, human rights, and emerging legal domains.",
    highlights: [
      "Access to Moot Court and LLM Innovation Lab",
      "Guidance from distinguished legal scholars",
      "Opportunities for law review publications",
    ],
  },
  {
    id: "phd-engineering",
    name: "Ph.D. in Engineering",
    level: "doctoral",
    duration: "3–5 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Engineering",
    description:
      "A research doctorate in engineering disciplines covering mechanical, civil, chemical, electrical, and computer engineering. Candidates work on cutting-edge research problems with access to advanced laboratory infrastructure.",
    highlights: [
      "Advanced engineering research labs",
      "Industry research collaborations",
      "Conference and publication support",
    ],
  },
  {
    id: "phd-social-sciences",
    name: "Ph.D. in Social Sciences",
    level: "doctoral",
    duration: "3–5 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Social Sciences",
    description:
      "A doctoral programme encompassing psychology, sociology, communication, and liberal arts. Candidates develop original research in human behaviour, social systems, and cultural phenomena.",
    highlights: [
      "Interdisciplinary research encouraged",
      "Psychology and communication research labs",
      "Fieldwork and qualitative research support",
    ],
  },
  {
    id: "phd-cse",
    name: "Ph.D. in Computer Science & Engineering",
    level: "doctoral",
    duration: "3–5 years",
    campuses: ["gurugram", "greater-noida"],
    school: "Computer Science & Engineering",
    description:
      "A research doctorate in computer science covering artificial intelligence, machine learning, cybersecurity, cloud computing, and software engineering. Candidates conduct original research and publish in top-tier international venues.",
    highlights: [
      "AI/ML and Cybersecurity research labs",
      "Industry-sponsored research projects",
      "International conference travel support",
    ],
  },
];

export function getProgrammesByCampus(slug: string): Programme[] {
  return programmes.filter((p) => p.campuses.includes(slug));
}

export function getProgrammesByLevel(level: Level): Programme[] {
  return programmes.filter((p) => p.level === level);
}

export function getProgrammesBySchool(school: string): Programme[] {
  return programmes.filter((p) =>
    p.school.toLowerCase().includes(school.toLowerCase())
  );
}
