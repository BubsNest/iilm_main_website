export interface Leader {
  name: string;
  title: string;
  bio: string;
  category: 'board' | 'academic' | 'mentor';
}

export const leaders: Leader[] = [
  // ─── Board & University Leadership ─────────────────────────────────────────
  {
    name: "Padma Shri Dr. Mool Chand Sharma",
    title: "Chancellor, IILM University",
    bio: "An eminent jurist, former Member of Parliament, and recipient of the Padma Shri, Dr. Sharma brings decades of experience in legal education, governance, and public policy to his role as Chancellor. His vision centres on building globally competitive, value-driven institutions that empower the next generation of Indian leaders.",
    category: "board",
  },
  {
    name: "Prof. (Dr.) Sunaina Singh",
    title: "Vice Chancellor, IILM University",
    bio: "Prof. Singh is a distinguished academic administrator with over 25 years of experience in higher education leadership, research, and policy. She holds a Ph.D. in Economics and has served on multiple UGC committees, championing quality assurance and innovation in Indian universities.",
    category: "board",
  },
  {
    name: "Prof. (Dr.) Rajiv Ahuja",
    title: "Pro-Vice Chancellor, IILM University",
    bio: "Prof. Ahuja is a seasoned academic leader with expertise in institutional strategy, curriculum design, and international academic partnerships. He oversees academic quality, research initiatives, and faculty development across all IILM University campuses.",
    category: "board",
  },
  {
    name: "Dr. Priya Malhotra",
    title: "Registrar, IILM University",
    bio: "Dr. Malhotra brings two decades of experience in university administration, student affairs, and regulatory compliance. She is responsible for the statutory and administrative functions of the university, ensuring seamless operations across campuses and adherence to UGC and AICTE norms.",
    category: "board",
  },

  // ─── Academic Deans ─────────────────────────────────────────────────────────
  {
    name: "Prof. (Dr.) Arun Sharma",
    title: "Dean, School of Management",
    bio: "Prof. Sharma holds a Ph.D. in Strategic Management from IIM Calcutta and has over 20 years of experience in management education and corporate consulting. He has led curriculum transformation initiatives that have significantly elevated placement outcomes and alumni satisfaction at IILM.",
    category: "academic",
  },
  {
    name: "Dr. Kavitha Nair",
    title: "Dean, School of Law",
    bio: "Dr. Nair is a Senior Advocate and legal scholar with expertise in corporate law, constitutional law, and legal education reform. She brings 18 years of combined courtroom and classroom experience, and has established IILM's Moot Court programme as one of the most competitive in the Delhi NCR region.",
    category: "academic",
  },
  {
    name: "Prof. (Dr.) Sanjay Bhatnagar",
    title: "Dean, School of Engineering & Computer Science",
    bio: "Prof. Bhatnagar is a computer scientist with a Ph.D. from IIT Delhi and post-doctoral experience at the University of Edinburgh. He has published extensively in AI, distributed systems, and cybersecurity, and leads IILM's industry-connected lab ecosystem and research partnerships.",
    category: "academic",
  },
  {
    name: "Dr. Meera Joshi",
    title: "Dean, School of Social Sciences (Psychology & Liberal Arts)",
    bio: "Dr. Joshi holds a doctorate in Clinical Psychology from Delhi University and has 15 years of experience in psychology education, research, and clinical practice. She has built interdisciplinary programmes that bridge psychology, sociology, and communication, earning IILM recognition for student-centred learning.",
    category: "academic",
  },
  {
    name: "Prof. Ananya Chakraborty",
    title: "Dean, School of Design & Communication",
    bio: "Prof. Chakraborty is a multidisciplinary designer and communication strategist who trained at NID Ahmedabad and has worked with leading creative agencies and media houses. She established IILM's Design Studio and Multimedia Lab, creating an environment where students produce industry-standard creative work from Year 1.",
    category: "academic",
  },

  // ─── Strategic Mentors & Academic Guides ────────────────────────────────────
  {
    name: "Mr. Anil Sachdev",
    title: "Founder & CEO, School of Inspired Leadership (SOIL) | Strategic Mentor",
    bio: "Anil Sachdev is one of India's foremost organisational development thought leaders and the founder of SOIL. A globally recognised HR and leadership development expert, he guides IILM's leadership development curriculum and mentors students and faculty on human-centred management.",
    category: "mentor",
  },
  {
    name: "Ms. Ritu Anand",
    title: "Former Chief Leadership Officer, Tata Consultancy Services | Academic Guide",
    bio: "Ritu Anand is a veteran HR and talent strategist who led one of the world's largest workforce transformation programmes at TCS. She advises IILM on industry-aligned curriculum design, talent development best practices, and the future of work.",
    category: "mentor",
  },
  {
    name: "Mr. Deep Kalra",
    title: "Founder & Group Executive Chairman, MakeMyTrip | Entrepreneurship Mentor",
    bio: "Deep Kalra is one of India's most celebrated entrepreneurs, having built MakeMyTrip into India's leading travel company. He mentors IILM's entrepreneurship programme, guest lectures on startup ecosystems, and actively engages with the ECELL incubator to support student ventures.",
    category: "mentor",
  },
  {
    name: "Dr. Shalini Sharma",
    title: "Senior Fellow, Indian Council of Social Science Research (ICSSR) | Research Guide",
    bio: "Dr. Sharma is a distinguished social science researcher with expertise in gender studies, public policy, and development economics. She guides IILM's research initiatives in the Social Sciences school and supports Ph.D. candidates in designing impactful research.",
    category: "mentor",
  },
  {
    name: "Mr. Sandeep Singhal",
    title: "Co-Founder, Nexus Venture Partners | Venture & Innovation Advisor",
    bio: "Sandeep Singhal is a pioneering venture capitalist who has backed some of India's most successful technology startups. He advises IILM on entrepreneurship education, innovation strategy, and connecting students with the startup and investor community.",
    category: "mentor",
  },
];

export function getLeadersByCategory(category: Leader['category']): Leader[] {
  return leaders.filter((l) => l.category === category);
}
