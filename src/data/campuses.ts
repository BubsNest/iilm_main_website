export interface CampusFacility {
  category: string;
  items: string[];
}

export interface Campus {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  address: string;
  phones: { label: string; number: string }[];
  email: string;
  description: string;
  tagline: string;
  highlights: string[];
  facilities: CampusFacility[];
  schools: string[];
  mapQuery: string;
}

export const campuses: Campus[] = [
  {
    slug: "gurugram",
    name: "IILM University, Gurugram",
    shortName: "Gurugram",
    city: "Gurugram, Haryana",
    address: "Plot No. 69-71, Golf Course Road, Sector 53, Gurugram, Haryana – 122003",
    phones: [
      { label: "MBA Admissions", number: "+91-8065905223" },
      { label: "UG Admissions", number: "+91-8065905224" },
      { label: "Engineering Admissions", number: "+91-8065905221" },
      { label: "BBA Admissions", number: "+91-8065905222" },
      { label: "PG Admissions", number: "+91-8065905225" },
    ],
    email: "admissions.iilmu@iilm.edu",
    tagline: "Where Multidisciplinary Excellence Meets the Corporate Capital of India",
    description:
      "IILM University Gurugram is our flagship campus, set in the heart of India's corporate hub. Home to six schools and a vibrant student community, the Gurugram campus offers programmes in Management, Law, CSE, Psychology, Communication, Design, and Liberal Arts — all underpinned by an AI-first, industry-integrated curriculum.",
    highlights: [
      "6 academic schools",
      "AI-integrated curriculum",
      "400+ recruiting companies",
      "On-campus startup incubator (ECELL)",
      "Moot Court & LLM Innovation Lab",
      "Advanced Computer Science, AI & Cloud labs",
    ],
    facilities: [
      {
        category: "Advanced Laboratories",
        items: ["Computer Science Lab", "Dell Technology Lab", "iOS Development Lab", "AI & Machine Learning Lab", "Cloud Computing Lab", "Cybersecurity Lab", "CAD/CAM Lab", "Psychology Research Lab", "Multimedia Studio"],
      },
      {
        category: "Learning Spaces",
        items: ["Technology-enabled Smart Classrooms", "Interactive Collaborative Learning Environments", "Central Library", "Moot Court", "LLM Innovation Lab", "Design Studio"],
      },
      {
        category: "Sports & Wellness",
        items: ["Football Field", "Volleyball Court", "Badminton Court", "Pickleball Court", "Table Tennis", "Carrom", "Foosball", "Fully Equipped Gymnasium", "Yoga Studio", "Zumba Classes"],
      },
      {
        category: "Campus Life",
        items: ["Auditorium", "Scholars' Café", "Campus Collegiate", "Chai Garam", "KitKat Kiosk", "Shared Lounges", "Event Spaces"],
      },
      {
        category: "Residential",
        items: ["On-campus Hostel (Men & Women)", "Nearby Residential Facilities", "24/7 Security & Surveillance", "Medical Services On-Campus"],
      },
    ],
    schools: ["Management (BBA, MBA)", "Computer Science & Engineering", "Psychology", "Law", "Communication", "Design", "Liberal Arts"],
    mapQuery: "IILM+University+Gurugram+Sector+53",
  },
  {
    slug: "greater-noida",
    name: "IILM University, Greater Noida",
    shortName: "Greater Noida",
    city: "Greater Noida, UP",
    address: "Plot No. 16-18, Knowledge Park II, Greater Noida, Uttar Pradesh – 201306",
    phones: [
      { label: "MBA Admissions", number: "+91-8065905223" },
      { label: "UG Admissions", number: "+91-8065905224" },
      { label: "Engineering Admissions", number: "+91-8065905220" },
      { label: "BBA Admissions", number: "+91-8065905222" },
      { label: "PG Admissions", number: "+91-8065905225" },
    ],
    email: "admissions.gn@iilm.edu",
    tagline: "A Full-Spectrum University at the Heart of India's Knowledge Corridor",
    description:
      "IILM University Greater Noida is our most comprehensive campus — offering the widest range of programmes from Engineering and Sciences to Management, Law, Psychology, and Liberal Arts. Situated in Knowledge Park II, it's surrounded by leading universities and tech parks, giving students unparalleled exposure to industry and academia.",
    highlights: [
      "Widest programme range across all campuses",
      "Engineering, Sciences, Management, Law & more",
      "State-of-the-art research labs",
      "Lush green residential campus",
      "Sports complex & gymnasium",
      "30+ global university partners",
    ],
    facilities: [
      {
        category: "Advanced Laboratories",
        items: ["Engineering Labs (Mechanical, Civil, Chemical, Electrical)", "Computer Science & AI Lab", "Cloud Computing Lab", "Cybersecurity Lab", "Science Labs (Physics, Chemistry, Biology)", "Psychology Lab", "Multimedia Studio & Design Studio"],
      },
      {
        category: "Learning Spaces",
        items: ["Smart Classrooms", "Collaborative Learning Zones", "Central Library", "Moot Court", "Innovation Lab", "Research Centres"],
      },
      {
        category: "Sports & Wellness",
        items: ["Football Field", "Volleyball Court", "Badminton Court", "Pickleball Court", "Indoor Games Room", "Gymnasium", "Yoga Studio", "Zumba Classes"],
      },
      {
        category: "Campus Life",
        items: ["Auditorium", "Scholars' Café", "Chai Garam", "KitKat Kiosk", "Student Lounges", "Event Spaces"],
      },
      {
        category: "Residential",
        items: ["On-campus Hostel Blocks", "Mess & Dining Hall", "24/7 Security", "Medical Facility", "Common Rooms & Recreation"],
      },
    ],
    schools: ["Management (BBA, MBA)", "Computer Science & Engineering", "Sciences (B.Sc., M.Sc.)", "Engineering (B.Tech., M.Tech.)", "Law", "Psychology", "Communication", "Liberal Arts"],
    mapQuery: "IILM+University+Greater+Noida+Knowledge+Park",
  },
  {
    slug: "lodhi-road",
    name: "IILM Lodhi Road, New Delhi",
    shortName: "Lodhi Road, Delhi",
    city: "New Delhi",
    address: "3, Lodhi Institutional Area, Lodhi Road, New Delhi – 110003",
    phones: [
      { label: "PGDBM Admissions", number: "+91-8065905223" },
    ],
    email: "info.ubs@iilm.edu",
    tagline: "Premier Postgraduate Management Education in the Heart of Delhi",
    description:
      "IILM's Lodhi Road campus in New Delhi is our heritage campus — a centre of postgraduate management excellence since inception. Centrally located in the Lodhi Institutional Area, it is home to the PGDBM programme and offers students unrivalled access to Delhi's policy, business, and cultural ecosystem.",
    highlights: [
      "Premium PGDBM programme",
      "Central Delhi location",
      "Industry-integrated curriculum",
      "Strong Delhi NCR recruiter network",
      "Alumni network across top organisations",
      "Executive learning environment",
    ],
    facilities: [
      {
        category: "Learning Spaces",
        items: ["Smart Classrooms", "Case Study Rooms", "Library & Resource Centre", "Seminar Halls", "Bloomberg Terminal Access"],
      },
      {
        category: "Campus Amenities",
        items: ["Canteen & Café", "Student Lounge", "Recreation Room", "Auditorium", "Event Spaces"],
      },
      {
        category: "Support Services",
        items: ["Career Development Centre", "Placement Cell", "Medical Support", "Transport Coordination", "24/7 Security"],
      },
    ],
    schools: ["Management (PGDBM)"],
    mapQuery: "IILM+Lodhi+Road+New+Delhi+Institutional+Area",
  },
  {
    slug: "lucknow",
    name: "IILM Academy of Higher Learning, Lucknow",
    shortName: "Lucknow",
    city: "Lucknow, UP",
    address: "Lucknow, Uttar Pradesh",
    phones: [{ label: "MBA", number: "+91-8065905223" }],
    email: "admissions@iilm.edu",
    tagline: "Management Excellence in the City of Nawabs",
    description:
      "IILM Lucknow brings IILM's legacy of management education to Uttar Pradesh's capital. The MBA programme here is designed to meet the growing demand for business leaders in Central and Eastern India, with a curriculum that blends global best practices with an understanding of emerging markets.",
    highlights: [
      "AICTE-approved MBA programme",
      "Industry partnerships in UP & Central India",
      "Strong placement record",
      "Experienced faculty",
      "Corporate connects across Lucknow & NCR",
    ],
    facilities: [
      {
        category: "Learning Spaces",
        items: ["Modern Classrooms", "Seminar Rooms", "Library", "Computer Lab"],
      },
      {
        category: "Campus Life",
        items: ["Cafeteria", "Student Lounge", "Sports Facilities", "Auditorium"],
      },
      {
        category: "Support Services",
        items: ["Placement Cell", "Career Counselling", "Medical Support", "Security"],
      },
    ],
    schools: ["Management (MBA)"],
    mapQuery: "IILM+Academy+Higher+Learning+Lucknow",
  },
  {
    slug: "jaipur",
    name: "IILM Academy of Higher Learning, Jaipur",
    shortName: "Jaipur",
    city: "Jaipur, Rajasthan",
    address: "Jaipur, Rajasthan",
    phones: [{ label: "MBA", number: "+91-8065905223" }],
    email: "admissions@iilm.edu",
    tagline: "Building Business Leaders in the Pink City",
    description:
      "IILM Jaipur extends IILM's footprint into Rajasthan — one of India's fastest growing state economies. The MBA programme prepares students for leadership roles across manufacturing, retail, tourism, tech, and the broader business ecosystem of Western India.",
    highlights: [
      "AICTE-approved MBA programme",
      "Industry connects across Rajasthan",
      "Tourism, hospitality & retail focus",
      "Strong alumni in Western India",
      "Experienced practitioner faculty",
    ],
    facilities: [
      {
        category: "Learning Spaces",
        items: ["Modern Classrooms", "Case Study Rooms", "Library", "Computer Lab"],
      },
      {
        category: "Campus Life",
        items: ["Cafeteria", "Student Common Area", "Sports Zone", "Seminar Hall"],
      },
      {
        category: "Support Services",
        items: ["Placement Cell", "Career Development", "Medical Support", "Security"],
      },
    ],
    schools: ["Management (MBA)"],
    mapQuery: "IILM+Academy+Higher+Learning+Jaipur",
  },
];

export function getCampusBySlug(slug: string): Campus | undefined {
  return campuses.find((c) => c.slug === slug);
}
