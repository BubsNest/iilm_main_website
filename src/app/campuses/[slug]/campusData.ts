// ── Types ─────────────────────────────────────────────────────────────────────

export interface FacultyMember {
  name: string;
  designation: string;
  photo: string | null;
}

export interface FacultyDept {
  dept: string;
  members: FacultyMember[];
}

export interface ProgrammeItem {
  name: string;
  duration?: string;
  dept?: string;
  note?: string;
}

export interface ProgrammeLevel {
  level: string;
  items: ProgrammeItem[];
}

export interface PlacementData {
  rate: string;
  average?: string;
  highest?: string;
  companies: string;
  topStudents: { name: string; company: string; package?: string }[];
  topRecruiters: string[];
  recruiterLogoBase?: string;
  recruiterLogos?: string[];
}

export interface GalleryImage {
  url: string;
  caption: string;
}

export interface Campus {
  slug: string;
  name: string;
  city: string;
  type: string;
  established: string;
  tagline: string;
  address: string;
  phones: string[];
  email: string | { [key: string]: string };
  whatsapp?: string;
  image: string;
  heroVideo?: string; // YouTube video ID for hero background
  description: string;
  highlights: { value: string; label: string }[];
  accreditations: string[];
  uniqueDifferentiators?: string[];
  director?: { name: string; title: string; photo: string | null };
  faculty: FacultyDept[];
  programmes: ProgrammeLevel[];
  placements: PlacementData;
  gallery: GalleryImage[];
  downloads: { label: string; url: string }[];
  paymentLink?: string;
}

// ── Campus Data ───────────────────────────────────────────────────────────────

export const campusData: Record<string, Campus> = {
  // ──────────────────────────────────────────────────────────────────────────
  // GURUGRAM
  // ──────────────────────────────────────────────────────────────────────────
  gurugram: {
    slug: "gurugram",
    name: "IILM University Gurugram",
    city: "Gurugram, Haryana",
    type: "Private University",
    established: "1993",
    tagline: "Learn with Purpose, Lead with Purpose",
    address: "1, Knowledge Center, Golf Course Rd, Sector 53, Gurugram, Haryana 122003",
    phones: [
      "+91-8065905221 (Engineering)",
      "+91-8065905222 (BBA)",
      "+91-8065905223 (MBA)",
      "+91-8065905224 (UG)",
      "+91-8065905225 (PG)",
    ],
    email: "admissions@iilm.edu",
    whatsapp: "+91-7011772713",
    image: "https://iilm.edu.in/uploads/all/775/conversions/Gurgam-full-full.webp",
    heroVideo: "v_F4hsobpX4",
    description:
      "IILM University Gurugram is a leading private university with 30+ years of academic legacy, offering 25+ programmes across management, law, engineering, design, psychology, liberal arts, and communication. Recognized by UGC, BCI approved, and NIRF ranked, the university has placed 16,000+ alumni globally.",
    highlights: [
      { value: "16,000+", label: "Alumni" },
      { value: "25+", label: "Programmes" },
      { value: "100%", label: "Placement Rate" },
      { value: "₹26 LPA", label: "Highest Package" },
      { value: "360+", label: "Research Papers" },
      { value: "45+", label: "Registered Patents" },
    ],
    accreditations: ["UGC Recognized", "BCI Approved (Law)", "AICTE", "AIU Member", "NIRF 2025"],
    uniqueDifferentiators: [
      "Located on prestigious Golf Course Road in the heart of Gurugram's corporate hub",
      "30+ years of academic excellence with 16,000+ globally placed alumni",
      "Interdisciplinary programmes blending AI, law, design, psychology and business",
      "BCI-approved law school with 400-seat Moot Court facility",
    ],
    director: {
      name: "Dr. Ravi Kumar Jain",
      title: "Vice Chancellor Designate",
      photo: "https://iilm.edu.in/uploads/all/909/conversions/Ravi-Kumar-Jain-thumb.webp",
    },
    programmes: [
      {
        level: "UG",
        items: [
          { name: "BBA (Hons)", duration: "3 years", dept: "School of Management" },
          { name: "B.Tech in AI", duration: "4 years", dept: "School of CS & Engineering" },
          { name: "B.Tech in Robotic Intelligence", duration: "4 years", dept: "School of CS & Engineering" },
          { name: "B.Tech in CSE", duration: "4 years", dept: "School of CS & Engineering" },
          { name: "BA LLB (Hons)", duration: "5 years", dept: "School of Law" },
          { name: "BBA LLB (Hons)", duration: "5 years", dept: "School of Law" },
          { name: "B Design in Fashion Design & Management", duration: "4 years", dept: "Dept of Design" },
          { name: "B Design in Digital Product Design", duration: "4 years", dept: "Dept of Design" },
          { name: "B Design in Interior Design", duration: "4 years", dept: "Dept of Design" },
          { name: "BA (Hons) Journalism & Mass Communication", duration: "3 years", dept: "Dept of Communication" },
          { name: "BA (Hons) Corporate Communication", duration: "3 years", dept: "Dept of Communication" },
          { name: "BSc in Animation and UI/UX", duration: "3 years", dept: "Dept of Communication" },
          { name: "BA (Hons) Liberal Arts", duration: "3 years", dept: "Dept of Liberal Arts" },
          { name: "BA (Hons) Psychology", duration: "3 years", dept: "Dept of Psychology" },
          { name: "BSc (Hons) Clinical Psychology", duration: "3 years", dept: "Dept of Psychology" },
        ],
      },
      {
        level: "PG",
        items: [
          {
            name: "MBA",
            duration: "2 years",
            dept: "School of Management",
            note: "Specializations: Marketing & Innovation, Business Analytics, HR, FinTech, Entrepreneurship",
          },
          { name: "M.Tech in CSE with Specialisation in Generative AI", duration: "2 years" },
          { name: "LLM", duration: "1 year", dept: "School of Law" },
          { name: "MA Mass Communication", duration: "2 years" },
          { name: "MA Psychology", duration: "2 years" },
          { name: "MSc Psychology", duration: "2 years" },
        ],
      },
      {
        level: "Doctoral",
        items: [
          { name: "PhD across multiple disciplines" },
          { name: "Executive Education / MDPs" },
        ],
      },
    ],
    faculty: [
      {
        dept: "School of CS & Engineering",
        members: [
          { name: "Dr. Shamik Tiwari", designation: "Founding Dean", photo: "https://iilm.edu.in/uploads/all/1228/conversions/Dr-Shamik-Tiwari-thumb.webp" },
          { name: "Dr. Aarti Chugh", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1234/conversions/dr-aarti-thumb.webp" },
          { name: "Dr. Anurag Jain", designation: "Professor", photo: "https://iilm.edu.in/uploads/all/1230/conversions/Dr-Anurag-thumb.webp" },
          { name: "Dr. Pooja Batra Nagpal", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1224/conversions/Pooja-Batra-Nagpal-thumb.webp" },
          { name: "Dr. Mansi Verma", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/978/conversions/Mansi-Verma-1-thumb.webp" },
          { name: "Dr. Sonam Lata", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1231/conversions/Sonam-Lata-thumb.webp" },
          { name: "Dr. Aarti Tewari", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/972/conversions/Aarti-Tewari-thumb.webp" },
          { name: "Dr. Preeti Mehta", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1233/conversions/Dr-Preeti-Mehta-thumb.webp" },
          { name: "Dr. Shagun Panghal", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1232/conversions/Dr-Shagun-Panghal-thumb.webp" },
          { name: "Mr. Naved Ahmad", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1229/conversions/Naved-Ahmad-thumb.webp" },
          { name: "Dr. Puja Acharya", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1227/conversions/Puja-Acharya-thumb.webp" },
          { name: "Dr. Tanu Gupta", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1287/conversions/Tanu-Gupta-IILMu-Faculty-thumb.webp" },
          { name: "Dr. Rahul Thakur", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1290/conversions/Rahul-Thakur-IILM-Faculty-thumb.webp" },
          { name: "Dr. Pallavi Pandey", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1226/conversions/Pallavi-Pandey-thumb.webp" },
          { name: "Dr. Amar Shukla", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1286/conversions/Amar-Shukla-iilmu-faculty-thumb.webp" },
          { name: "Dr. Jayati Tripathi", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1288/conversions/Dr-Jayati-Tripathi-IILMu-Faculty-thumb.webp" },
          { name: "Dr. Sapna Arora", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1225/conversions/Sapna-Arora-thumb.webp" },
          { name: "Ms. Ishita Tandon", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1617/conversions/Ishita-Tandon-thumb.webp" },
          { name: "Dr. Neha Bansal", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1289/conversions/Neha-Bansal-IILMu-Faculty-thumb.webp" },
          { name: "Dr. Puneet Bawa", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1292/conversions/Puneet-Bawa-Faculty-Profile-thumb.webp" },
          { name: "Ms. Samridhi Singhal", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1294/conversions/Samridhi-Singhal-iilmu-faculty-thumb.webp" },
          { name: "Dr. Vikas Kumar Jayswal", designation: "Assistant Professor, Mathematics", photo: "https://iilm.edu.in/uploads/all/1347/conversions/dr-vikas-kumar-jayswal-thumb.webp" },
          { name: "Abhishek Toofani", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1352/conversions/Abhishek-Toofani-thumb.webp" },
          { name: "Dr. Megha Rana", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1636/conversions/Megha-Rana-Faculty-thumb.webp" },
          { name: "Dr. Vishwa Prakash Jha", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1291/conversions/Vishwa-Prakash-Jha-IILMu-Faculty-thumb.webp" },
          { name: "Dr. Umang Garg", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1293/conversions/Umang-Garg-IILMu-Faculty-thumb.webp" },
          { name: "Dr. Akshat Agrawal", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1346/conversions/dr-akshat-agrawal-thumb.webp" },
          { name: "Dr. Vaishali Maheshwari", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1616/conversions/Dr-Vaishali-thumb.webp" },
          { name: "Dr. Law Kumar Singh", designation: "Professor", photo: "https://iilm.edu.in/uploads/all/1640/conversions/Law-Kumar-Singh-thumb.webp" },
        ],
      },
      {
        dept: "Department of Psychology",
        members: [
          { name: "Dr. Sakshi Kaul", designation: "Professor & HoD", photo: "https://iilm.edu.in/uploads/all/1239/conversions/Sakshi-Kaul-thumb.webp" },
          { name: "Dr. Neha Tanwar", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1240/conversions/Neha-Tanwar-thumb.webp" },
          { name: "Ms. Kritika Jain", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1241/conversions/kritika-jain-thumb.webp" },
          { name: "Ms. Chitra Kashyap", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1242/conversions/Chitra-Kashyap-thumb.webp" },
          { name: "Ms. Ashmita Bhattacharjee", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1243/conversions/Asmita-IILM-thumb.webp" },
          { name: "Dr. Shailaja Pokhriyal", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1244/conversions/Shailaja-Pokhriyal-thumb.webp" },
          { name: "Dr. Rati Khurana", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/911/conversions/Dr-Rati-Khurana-thumb.webp" },
          { name: "Dr. Aanchal Chaudhary", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1245/conversions/Aanchal-Chaudhary-thumb.webp" },
          { name: "Ms. Aradhya Sharma", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1246/conversions/Aradhya-Sharma-thumb.webp" },
          { name: "Dr. Deepika Kushwaha", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1281/conversions/Deepika-Kushwaha-thumb.webp" },
          { name: "Dr. Priyesh Kumar Singh", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1282/conversions/Dr-Priyesh-Kumar-Singh-thumb.webp" },
          { name: "Dr. Divya Rawat", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1238/conversions/Dr-Divya-Rawat-thumb.webp" },
        ],
      },
      {
        dept: "School of Law",
        members: [
          { name: "Prof. (Dr.) Sujata Bali", designation: "Dean & Professor", photo: "https://iilm.edu.in/uploads/all/731/conversions/Prof-Dr-Sujata-Bali-thumb.webp" },
          { name: "Dr. Monica Yadav", designation: "Professor", photo: "https://iilm.edu.in/uploads/all/732/conversions/Dr-Monica-Yadav-thumb.webp" },
          { name: "Dr. Misha Bahmani", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/888/conversions/misha-bahmani-thumb.webp" },
          { name: "Harshita Jain", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/897/conversions/harshita-jain-thumb.webp" },
          { name: "Aastha Thakur", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/900/conversions/Aastha-Thakur-thumb.webp" },
          { name: "Aratrika Deb", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/901/conversions/Aratrika-Deb-thumb.webp" },
          { name: "Dr. Mahima Tripathi", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/903/conversions/DrMahima-Tripathi-thumb.webp" },
          { name: "Bhavya Gupta", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/905/conversions/bhavya-gupta-1-thumb.webp" },
          { name: "Dr. Archna Sehrawat", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/906/conversions/Dr-Archna-Sehrawat-thumb.webp" },
          { name: "Mr. Shrey Kapoor", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1237/conversions/Shrey-Kapoor-thumb.webp" },
          { name: "Dr. Astha Mehta", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1494/conversions/Dr-Astha-Mehta-thumb.webp" },
          { name: "Dr. Kuhu Tiwari", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1495/conversions/dr-kuhu-thumb.webp" },
          { name: "Dr. Nidhi Saroj", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1497/conversions/nidhi-iilm-university-ggn-thumb.webp" },
          { name: "Aviral", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1500/conversions/Aviral-iilm-faculty-thumb.webp" },
          { name: "Ekta Yadav", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1503/conversions/ekta-yadav-iilmu-ggn-thumb.webp" },
          { name: "Dr. Monika Bhatia", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1496/conversions/dr-monika-bhatia-thumb.webp" },
          { name: "Dr. Vijay Pal Singh", designation: "Professor", photo: "https://iilm.edu.in/uploads/all/1498/conversions/dr-vijay-pal-singh-thumb.webp" },
          { name: "Akshay Jain", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1499/conversions/mr-akshay-jain-thumb.webp" },
          { name: "Ahana Ray", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1502/conversions/ahana-ray-iilmu-ggn-thumb.webp" },
          { name: "Jainendra Sharma", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1501/conversions/jainendra-sharma-iilmuggn-thumb.webp" },
        ],
      },
      {
        dept: "School of Management",
        members: [
          { name: "Dr. Ravi Kumar Jain", designation: "VC Designate / Director", photo: "https://iilm.edu.in/uploads/all/909/conversions/Ravi-Kumar-Jain-thumb.webp" },
          { name: "Prof. Tanya Bhutani", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/912/conversions/Prof-Tanya-Bhutani-thumb.webp" },
          { name: "Dr. Ajay Singh Rathore", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/913/conversions/ajay-rathore-thumb.webp" },
          { name: "Dr. Jasdeep Singh Chadha", designation: "Professor", photo: "https://iilm.edu.in/uploads/all/915/conversions/jasdeep-chadha-thumb.webp" },
          { name: "Sanju Rani", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/917/conversions/Ms-Sanju-Rani-thumb.webp" },
          { name: "Dr. Saima Rizvi", designation: "Professor", photo: "https://iilm.edu.in/uploads/all/918/conversions/Dr.-Saima-Rizvi-thumb.webp" },
          { name: "Dr. Rachna Madaan", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/920/conversions/Dr.-Rachna-Madaan-thumb.webp" },
          { name: "Dr. Satish Kumar", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/923/conversions/IILM-University-Dr-Satish-kumar-thumb.webp" },
          { name: "Dr. Neha Kamboj", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/924/conversions/IILM-University-Dr-Neha-Kamboj-thumb.webp" },
          { name: "Dr. Madhu Jasola", designation: "Professor – Marketing", photo: "https://iilm.edu.in/uploads/all/927/conversions/IILM-University-Dr-Madhu-Jasola-thumb.webp" },
          { name: "Dr. Namita Dixit", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/928/conversions/Dr-NamitaDixit-thumb.webp" },
          { name: "Dr. Shuchi Parashar", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1307/conversions/Shuchi-Parashar-iilmu-thumb.webp" },
          { name: "Dr. Vidhisha Vyas", designation: "Professor", photo: "https://iilm.edu.in/uploads/all/929/conversions/Dr-Vidhisha-Vyas-thumb.webp" },
          { name: "Dr. Zeeshan Majeed Nadroo", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1491/conversions/Zeeshan-Majeed-Nadroo-thumb.webp" },
          { name: "Dr. Ajoy Kumar Dey", designation: "Professor", photo: "https://iilm.edu.in/uploads/all/1490/conversions/ak-thumb.webp" },
        ],
      },
      {
        dept: "Social Sciences, Liberal Arts & Communication",
        members: [
          { name: "Bhavneet Singh Aurora", designation: "Associate Dean, Communication", photo: "https://iilm.edu.in/uploads/all/939/conversions/Bhavneet-Singh-Aurora-thumb.webp" },
          { name: "Nitika Seth", designation: "Dean of Design / Professor", photo: "https://iilm.edu.in/uploads/all/967/conversions/Nitika-Seth-thumb.webp" },
          { name: "Nirbhay Rana", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/1429/conversions/Nirbhay-Rana-thumb.webp" },
          { name: "Dr. Deepika Dhiman", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/943/conversions/Deepika-Dhiman-thumb.webp" },
          { name: "Dr. Prachi Gupta", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/945/conversions/Dr-Prachi-Gupta-thumb.webp" },
          { name: "Shakeel Anjum", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/958/conversions/Shakeel-Anjum-thumb.webp" },
          { name: "Ms. Aymun Kaleem", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/963/conversions/Ms-Aymun-Kaleem-thumb.webp" },
          { name: "Dr. Pooja Gupta", designation: "Associate Professor", photo: "https://iilm.edu.in/uploads/all/960/conversions/IILM-University-Dr-Pooja-Gupta-thumb.webp" },
          { name: "Dr. Jatin Mohan", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/961/conversions/Dr-Jatin-Mohan-thumb.webp" },
          { name: "Dr. Tania Sen", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/966/conversions/Dr-Tania-Sen-thumb.webp" },
          { name: "Dr. Shivani Sharma", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/968/conversions/Dr-Shivani-Sharma-thumb.webp" },
          { name: "Avinash Gautam", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/969/conversions/Avinash-1-thumb.webp" },
          { name: "Lydia Glory Jose", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/925/conversions/Lydia-Glory-Jose-thumb.webp" },
          { name: "Prof. Rashmi Sharma", designation: "Assistant Professor", photo: "https://iilm.edu.in/uploads/all/1526/conversions/RASHMI-SHARMA-thumb.webp" },
          { name: "Prof. (Dr) Roshni Sengupta", designation: "Professor", photo: "https://iilm.edu.in/uploads/all/1559/conversions/Prof-Dr-Roshni-Sengupta-thumb.webp" },
        ],
      },
    ],
    placements: {
      rate: "100%",
      average: "₹8 LPA",
      highest: "₹26 LPA",
      companies: "400+",
      topStudents: [
        { name: "Swati Singh & N V S Parthvi", company: "Lloyds Technology Centre", package: "₹16.07 LPA" },
        { name: "Rishabh Pandey", company: "Smartbox Ecommerce Solutions", package: "₹12.25 LPA" },
        { name: "Nandini Gautam", company: "Aye Finance", package: "₹11.56 LPA" },
        { name: "Aakarsh Kumar Singh", company: "Oxane Partners", package: "₹10.70 LPA" },
        { name: "Shashank Varshney", company: "BlackRock", package: "₹9.85 LPA" },
        { name: "Shruti Arora", company: "Finance Analyst", package: "₹12 LPA" },
        { name: "Himanshu Kumar Singh", company: "BlackRock", package: "₹10 LPA" },
        { name: "Gayatri Ram", company: "Gartner", package: "₹9.12 LPA" },
      ],
      topRecruiters: [
        "Deloitte", "BlackRock", "Gartner", "Aye Finance", "Lloyds Technology Centre",
        "Kotak Mahindra Bank", "L'Oréal", "RSM USI", "Wipro", "Zomato",
        "Barclays", "Cvent", "Tata Consumer Products", "Oxane Partners",
        "KPMG", "PwC", "ICICI", "Accenture", "Amazon", "HDFC",
      ],
    },
    gallery: [
      { url: "https://iilm.edu.in/uploads/all/754/conversions/banner-full.webp", caption: "Campus Banner" },
      { url: "https://iilm.edu.in/uploads/all/876/conversions/WhatsApp-Image-2025-02-11-at-13.17.46-full.webp", caption: "Campus Life" },
      { url: "https://iilm.edu.in/uploads/all/744/conversions/Intellectually-Stimulating-full.webp", caption: "Learning Environment" },
      { url: "https://iilm.edu.in/uploads/all/743/conversions/Practically-Relevant-full.webp", caption: "Practical Learning" },
      { url: "https://iilm.edu.in/uploads/all/745/conversions/Innovation-Learning-full.webp", caption: "Innovation Hub" },
      { url: "https://iilm.edu.in/uploads/all/742/conversions/Socially-Responsible-full.webp", caption: "Social Impact" },
      { url: "https://iilm.edu.in/uploads/all/726/conversions/image1-full-full.webp", caption: "Gallery 1" },
      { url: "https://iilm.edu.in/uploads/all/727/conversions/image2-full-full.webp", caption: "Gallery 2" },
      { url: "https://iilm.edu.in/uploads/all/729/conversions/image3-full-full.webp", caption: "Gallery 3" },
      { url: "https://iilm.edu.in/uploads/all/728/conversions/image4-full-full.webp", caption: "Gallery 4" },
      { url: "https://iilm.edu.in/uploads/all/775/conversions/Gurgam-full-full.webp", caption: "Campus Aerial" },
    ],
    downloads: [
      { label: "Fee Structure PDF", url: "https://iilm.edu.in" },
      { label: "PGDM Brochure", url: "https://iilm.edu.in" },
      { label: "Admissions Guide 2026", url: "https://iilm.edu.in" },
    ],
    paymentLink: "https://admissions.iilm.edu",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // GREATER NOIDA
  // ──────────────────────────────────────────────────────────────────────────
  "greater-noida": {
    slug: "greater-noida",
    name: "IILM University Greater Noida",
    city: "Greater Noida, Uttar Pradesh",
    type: "Private University",
    established: "2001",
    tagline: "26-acre campus. 6 schools. 40 programmes. Near Metro.",
    address: "Plot No.16-18, Knowledge Park II, Greater Noida, Uttar Pradesh 201306",
    phones: [
      "+91-8065905220 (Engineering)",
      "+91-8065905222 (BBA)",
      "+91-8065905223 (MBA)",
      "+91-8065905224 (UG)",
      "+91-8065905225 (PG)",
    ],
    email: "admissions@iilm.edu",
    whatsapp: "+91-7011772713",
    image: "https://iilm.edu.in/uploads/all/779/conversions/noida-(1)-full-full.webp",
    description:
      "IILM University Greater Noida is a 26-acre campus housing six specialized schools and offering 40+ programmes across management, engineering, law, sciences, CS, and humanities. Recognized under the UP Private University Act 2022, the campus is 500m from the metro station and features IBM and L&T collaborations.",
    highlights: [
      { value: "26 Acres", label: "Campus Size" },
      { value: "40+", label: "Programmes" },
      { value: "6", label: "Schools" },
      { value: "100%", label: "Placement Rate" },
      { value: "₹26 LPA", label: "Highest Package" },
      { value: "500m", label: "From Metro" },
    ],
    accreditations: [
      "UGC Recognized",
      "AICTE",
      "AIU Member",
      "NAAC Grade A (2017)",
      "NIRF 2025",
      "Outlook I-CARE Top 2 Emerging B-School 2025",
    ],
    uniqueDifferentiators: [
      "26-acre green campus in Knowledge Park II — just 500m from metro",
      "6 specialized schools: Management, Law, CS & Engineering, Engineering, Sciences, Humanities",
      "IBM and L&T industry collaborations embedded in curriculum",
      "Recognized under UP Private University Act 2022",
    ],
    director: { name: "Dr. Nihar Amoncar", title: "Pro-Vice Chancellor", photo: null },
    programmes: [
      {
        level: "UG",
        items: [
          { name: "BBA", duration: "3 years", dept: "School of Management" },
          { name: "BCA", duration: "3 years", dept: "School of CS & Engineering" },
          { name: "B.Tech CSE", duration: "4 years", dept: "School of CS & Engineering" },
          { name: "B.Tech CSE (AI & ML)", duration: "4 years", dept: "School of CS & Engineering" },
          { name: "B.Tech CSE (Data Science)", duration: "4 years", dept: "School of CS & Engineering" },
          { name: "B.Tech Civil Engineering", duration: "4 years", dept: "School of Engineering" },
          { name: "B.Tech Mechanical Engineering", duration: "4 years", dept: "School of Engineering" },
          { name: "B.Tech Electrical Engineering", duration: "4 years", dept: "School of Engineering" },
          { name: "B.Tech Electronics & Communication Engineering", duration: "4 years", dept: "School of Engineering" },
          { name: "BA LLB (Hons)", duration: "5 years", dept: "School of Law" },
          { name: "BBA LLB (Hons)", duration: "5 years", dept: "School of Law" },
          { name: "BA Liberal Arts", duration: "3 years", dept: "School of Humanities" },
          { name: "BA Journalism & Mass Communication", duration: "3 years", dept: "School of Humanities" },
          { name: "BA Psychology", duration: "3 years", dept: "School of Humanities" },
          { name: "BSc Forensic Science", duration: "3 years", dept: "School of Sciences" },
          { name: "BSc Industrial Chemistry", duration: "3 years", dept: "School of Sciences" },
          { name: "BSc Mathematics with Financial Analytics", duration: "3 years", dept: "School of Sciences" },
        ],
      },
      {
        level: "PG",
        items: [
          { name: "MBA", duration: "2 years", dept: "School of Management" },
          { name: "MBA (Working Professionals)", duration: "2 years", dept: "School of Management" },
          { name: "STEM MBA", duration: "2 years", dept: "School of Management" },
          { name: "MCA", duration: "2 years", dept: "School of CS & Engineering" },
          { name: "M.Tech CSE", duration: "2 years", dept: "School of CS & Engineering" },
          { name: "M.Tech Civil Engineering", duration: "2 years", dept: "School of Engineering" },
          { name: "M.Tech Mechanical Engineering", duration: "2 years", dept: "School of Engineering" },
          { name: "LLB (3 years)", duration: "3 years", dept: "School of Law" },
          { name: "LLM", duration: "1 year", dept: "School of Law" },
          { name: "MA Mass Communication", duration: "2 years", dept: "School of Humanities" },
          { name: "MA Applied Psychology", duration: "2 years", dept: "School of Humanities" },
          { name: "MSc Psychology", duration: "2 years", dept: "School of Humanities" },
          { name: "MSc Industrial Chemistry", duration: "2 years", dept: "School of Sciences" },
          { name: "MSc Mathematics with Data Science", duration: "2 years", dept: "School of Sciences" },
        ],
      },
      {
        level: "Doctoral",
        items: [{ name: "PhD across all schools" }],
      },
    ],
    faculty: [
      {
        dept: "School of Management",
        members: [
          { name: "Dr. Arvind Kumar Jain", designation: "Professor", photo: null },
          { name: "Dr. Aswani RS", designation: "Professor", photo: null },
          { name: "Dr. Syed Mohd Shahzeb", designation: "Professor", photo: null },
          { name: "Ms. Ekta Saraswat", designation: "Assistant Professor", photo: null },
          { name: "Dr. Nitesh Kumar Adichwal", designation: "Associate Professor", photo: null },
          { name: "Dr. Yogesh Kumar Jain", designation: "Professor", photo: null },
          { name: "Dr. Shweta Tiwari", designation: "Associate Professor", photo: null },
          { name: "Dr. Kamal Kant Verma", designation: "Associate Professor", photo: null },
          { name: "Dr. Subhamay Chatterjee", designation: "Associate Professor", photo: null },
          { name: "Dr. Pankaj", designation: "Associate Professor", photo: null },
          { name: "Dr. Neeta Mathur", designation: "Professor", photo: null },
          { name: "Dr. Kingshuk Srivastava", designation: "Professor", photo: null },
          { name: "Dr. Ajay Prasad", designation: "Associate Professor", photo: null },
          { name: "Dr. Rahul Singh", designation: "Associate Professor", photo: null },
          { name: "Dr. Deependra Rastogi", designation: "Assistant Professor", photo: null },
          { name: "Dr. Gunjan Mittal Roy", designation: "Assistant Professor", photo: null },
          { name: "Dr. Chhavi Pahwa", designation: "Assistant Professor", photo: null },
          { name: "Dr. Shubhangini Bhalla", designation: "Assistant Professor", photo: null },
          { name: "Dr. Juhi Gahlot Sarkar", designation: "Assistant Professor", photo: null },
          { name: "Dr. Neha Jain", designation: "Assistant Professor", photo: null },
          { name: "Dr. Swati Bajaj Seth", designation: "Assistant Professor", photo: null },
          { name: "Dr. Manisha Joshi", designation: "Assistant Professor", photo: null },
          { name: "Dr. Pranav Shrivastava", designation: "Assistant Professor", photo: null },
          { name: "Dr. Mani Jindal", designation: "Assistant Professor", photo: null },
          { name: "Dr. Chandan Choubey", designation: "Assistant Professor", photo: null },
          { name: "Dr. Kirti Shukla", designation: "Assistant Professor", photo: null },
          { name: "Dr. Priyanka Bhatnagar", designation: "Assistant Professor", photo: null },
          { name: "Dr. Prerna Gulati", designation: "Assistant Professor", photo: null },
          { name: "Dr. Gautam Srivastva", designation: "Assistant Professor", photo: null },
          { name: "Dr. Ankita Awasthi", designation: "Assistant Professor", photo: null },
          { name: "Dr. Bharti Choudhary", designation: "Assistant Professor", photo: null },
          { name: "Dr. Vanya Arun", designation: "Assistant Professor", photo: null },
          { name: "Dr. Garima Gupta", designation: "Assistant Professor", photo: null },
          { name: "Dr. Saurabh Kumar", designation: "Assistant Professor", photo: null },
          { name: "Dr. Pallavi Seth", designation: "Assistant Professor", photo: null },
          { name: "Dr. Vikas Kamra", designation: "Associate Professor", photo: null },
          { name: "Mrs. Garima Kulshrestha", designation: "Assistant Professor", photo: null },
          { name: "Dr. Deepa Diddi", designation: "Associate Professor", photo: null },
          { name: "Dr. Sahil Kansal", designation: "Assistant Professor", photo: null },
          { name: "Dr. Akash Punhani", designation: "Assistant Professor", photo: null },
          { name: "Dr. Nayantara Kotoky", designation: "Assistant Professor", photo: null },
        ],
      },
      {
        dept: "School of Engineering",
        members: [
          { name: "Dr. Munish Sabharwal", designation: "Professor", photo: null },
          { name: "Dr. Meenu Singh", designation: "Professor", photo: null },
          { name: "Dr. Udai Bhan Trivedi", designation: "Professor", photo: null },
          { name: "Dr. Narendra Kumar", designation: "Professor", photo: null },
          { name: "Dr. Akhilesh Kumar Mishra", designation: "Associate Professor", photo: null },
          { name: "Dr. Jaswinder Singh", designation: "Associate Professor", photo: null },
          { name: "Dr. Pardeep Kumar", designation: "Associate Professor", photo: null },
          { name: "Dr. Sumit Kumar", designation: "Assistant Professor", photo: null },
          { name: "Dr. Ajay Kumar", designation: "Assistant Professor", photo: null },
          { name: "Dr. Sumit Singh Dhanda", designation: "Assistant Professor", photo: null },
          { name: "Dr. Sunil Bhardwaj", designation: "Assistant Professor", photo: null },
          { name: "Dr. Jayanta Biswas", designation: "Assistant Professor", photo: null },
          { name: "Dr. Saurabh Shanu", designation: "Assistant Professor", photo: null },
          { name: "Dr. Harendra Singh", designation: "Assistant Professor", photo: null },
        ],
      },
      {
        dept: "School of CS & Engineering",
        members: [
          { name: "Dr. Alok Aggarwal", designation: "Professor", photo: null },
          { name: "Dr. Himanshu Sharma", designation: "Professor", photo: null },
          { name: "Dr. Srinivasan Sriramulu", designation: "Professor", photo: null },
          { name: "Dr. Avadhesh Kumar Gupta", designation: "Associate Professor", photo: null },
          { name: "Dr. Anil Saroliya", designation: "Associate Professor", photo: null },
          { name: "Dr. Sandeep Saxena", designation: "Associate Professor", photo: null },
          { name: "Dr. Lalit Kumar", designation: "Associate Professor", photo: null },
          { name: "Dr. Neeraj Pratap", designation: "Assistant Professor", photo: null },
          { name: "Dr. Rohit Yadav", designation: "Assistant Professor", photo: null },
          { name: "Dr. Manali Gupta", designation: "Assistant Professor", photo: null },
          { name: "Dr. Amit Agrawal", designation: "Assistant Professor", photo: null },
          { name: "Dr. Gaurav Kumar", designation: "Assistant Professor", photo: null },
          { name: "Dr. Ashish Sharma", designation: "Assistant Professor", photo: null },
        ],
      },
      {
        dept: "School of Sciences",
        members: [
          { name: "Dr. Rakhi Trivedi", designation: "Professor", photo: null },
          { name: "Dr. Rajeev Kumar", designation: "Professor", photo: null },
          { name: "Dr. Richa Vijay", designation: "Associate Professor", photo: null },
          { name: "Dr. Nidhi Puri", designation: "Associate Professor", photo: null },
          { name: "Dr. Archana Singh", designation: "Assistant Professor", photo: null },
        ],
      },
      {
        dept: "School of Law",
        members: [
          { name: "Dr. Babita Singh Parasain", designation: "Professor", photo: null },
          { name: "Dr. Sushma Singh", designation: "Professor", photo: null },
          { name: "Dr. Mohd. Nizam Ashraf Khan", designation: "Associate Professor", photo: null },
          { name: "Prof. Usta Mohd Amin", designation: "Associate Professor", photo: null },
          { name: "Dr. Smita Singh", designation: "Assistant Professor", photo: null },
          { name: "Dr. Vinti Dhaka", designation: "Assistant Professor", photo: null },
          { name: "Ms. Kshama Pandey", designation: "Assistant Professor", photo: null },
        ],
      },
      {
        dept: "School of Humanities",
        members: [
          { name: "Dr. Anupama Srivastava", designation: "Professor", photo: null },
          { name: "Dr. Manmeet Kaur", designation: "Associate Professor", photo: null },
          { name: "Dr. Roma Chandra", designation: "Associate Professor", photo: null },
          { name: "Dr. Fouzia Alsabah Shaikh", designation: "Assistant Professor", photo: null },
          { name: "Dr. Gazala Sharif", designation: "Assistant Professor", photo: null },
        ],
      },
    ],
    placements: {
      rate: "100%",
      average: "₹8 LPA",
      highest: "₹26 LPA",
      companies: "500+",
      topStudents: [
        { name: "Swati Singh & N V S Parthvi", company: "Lloyds Technology Centre", package: "₹16.07 LPA" },
        { name: "Rishabh Pandey", company: "Smartbox Ecommerce Solutions", package: "₹12.25 LPA" },
        { name: "Nandini Gautam", company: "Aye Finance", package: "₹11.56 LPA" },
        { name: "Aakarsh Kumar Singh", company: "Oxane Partners", package: "₹10.70 LPA" },
        { name: "Shashank Varshney", company: "BlackRock", package: "₹9.85 LPA" },
      ],
      topRecruiters: [
        "Google", "Amazon", "PwC", "KPMG", "SAP", "Airtel", "HDFC", "Deloitte",
        "Lloyds Technology Centre", "BlackRock", "Kotak", "Tata Consumer Products",
        "L'Oréal", "Wipro", "Zomato", "Barclays", "Cvent", "Accenture", "IBM", "L&T",
      ],
    },
    gallery: [
      { url: "https://iilm.edu.in/uploads/all/779/conversions/noida-(1)-full-full.webp", caption: "Campus Aerial" },
      { url: "https://iilm.ac.in/themes/iilmnoida/images/events_banner.png", caption: "Campus Events" },
    ],
    downloads: [
      { label: "Admissions Brochure", url: "https://iilm.edu.in" },
    ],
    paymentLink: "https://admissions.iilm.edu",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // LODHI ROAD
  // ──────────────────────────────────────────────────────────────────────────
  "lodhi-road": {
    slug: "lodhi-road",
    name: "IILM, Lodhi Road",
    city: "New Delhi",
    type: "AICTE Approved | AACSB Member",
    established: "1993",
    tagline: "Nurturing Responsible Leaders Committed to Entrepreneurial Mindset and Sustainability",
    address: "Rai School Complex, Institutional Area, Lodhi Road, New Delhi – 110003",
    phones: [
      "+91-9999252406 (UG Admissions)",
      "+91-7827005579 (UG)",
      "+91-9818865156 (PGDM Admissions)",
      "+91-9599225170 (PGDM)",
      "+91-8810554738 (WhatsApp)",
    ],
    email: { ug: "info.ubs@iilm.edu", pg: "pgdm@iilm.edu" },
    image: "https://iilm.edu.in/uploads/all/777/conversions/lodai-road-full-full.webp",
    heroVideo: "trSFDAhFObs",
    description:
      "IILM Lodhi Road is the founding campus of IILM, established in 1993 in the heart of New Delhi. AICTE-approved and AACSB member, it offers PGDM and BBA programmes with 180 PGDM seats, 350+ recruiting companies, and exchange programmes with 30+ global university partners. The original incubation of India's IILM movement.",
    highlights: [
      { value: "1993", label: "Est. Year" },
      { value: "6,000+", label: "Alumni" },
      { value: "350+", label: "Recruiting Companies" },
      { value: "100%", label: "Placement Rate" },
      { value: "₹15.75 LPA", label: "Highest Package" },
      { value: "30+", label: "Global Partners" },
    ],
    accreditations: [
      "AICTE Approved",
      "AACSB Member",
      "SAQS Accredited (2013)",
      "UN Global Compact Champion",
      "Eduniversal: 13th Globally (2018)",
    ],
    uniqueDifferentiators: [
      "Founding campus of IILM — operating since 1993 from New Delhi's institutional corridor",
      "AACSB member and SAQS accredited — global quality benchmarks",
      "Exchange programmes with 30+ global university partners",
      "UN Global Compact Champion — sustainability embedded in curriculum",
    ],
    director: {
      name: "Dr. Bigyan P Verma",
      title: "Director",
      photo: "https://iilmlr.ac.in/wp-content/uploads/2025/06/Dr-Bigyan-P-Verma-IILM-Lodhi-Road-Director.jpg",
    },
    programmes: [
      {
        level: "PGDM",
        items: [
          { name: "PGDM – General Management", duration: "2 years", note: "AICTE Approved, 180 seats" },
          { name: "PGDM – Entrepreneurship & Family Business", duration: "2 years", note: "AICTE Approved" },
          { name: "PGDM – Generative AI & Analytics", duration: "2 years", note: "AICTE Approved" },
          { name: "PGP-EFBM (Executive)", duration: "2 years", note: "For working professionals" },
        ],
      },
      {
        level: "UG",
        items: [
          { name: "BBA – Entrepreneurship", duration: "3 years" },
          { name: "BBA – International Management", duration: "3 years" },
          { name: "BBA – Communication", duration: "3 years" },
          { name: "BBA – Psychology", duration: "3 years" },
          { name: "BBA – Business Analytics", duration: "3 years" },
          { name: "BSc Business Administration – General Management", duration: "3 years" },
          { name: "BSc Business Administration – Marketing", duration: "3 years" },
          { name: "BSc Business Administration – International Business", duration: "3 years" },
          { name: "BSc Business Administration – Human Resource Management", duration: "3 years" },
        ],
      },
    ],
    faculty: [
      {
        dept: "Leadership",
        members: [
          { name: "Dr. Harivansh Chaturvedi", designation: "Director General", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/harivansh-chaturvedi-02.jpg" },
          { name: "Dr. Bigyan P Verma", designation: "Director", photo: "https://iilmlr.ac.in/wp-content/uploads/2025/06/Dr-Bigyan-P-Verma-IILM-Lodhi-Road-Director.jpg" },
          { name: "Dr. Raju Majumdar", designation: "Dean, Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Prof-Raju-Majumdar-IILMLodhiRoad-Faculty.jpg" },
          { name: "Dr. Sonia Khera", designation: "Dean SBS & International", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Sonia-Khera-iilmlodhiroad-faculty.jpg" },
        ],
      },
      {
        dept: "Marketing",
        members: [
          { name: "Dr. Shruti Gill", designation: "Associate Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/faculty.jpg" },
          { name: "Dr. Gagan Katiyar", designation: "Adjunct Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2025/04/Dr-Gagan-Katiyar-IIML-Faculty.jpg" },
          { name: "Dr. Sartaj Khera", designation: "Associate Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2026/02/sartaj-khera.jpg" },
          { name: "Dr. Aun Ahmed", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2025/01/Dr-Aun-Ahmed-iilmlodhiroad-faculty.jpg" },
          { name: "Dr. Rupali Singh", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Rupali-Singh_IILM-LodhiRoad-Faculty.jpg" },
          { name: "Dr. Vidushi Vatsa", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/viodushi-vatsa-1.jpg" },
        ],
      },
      {
        dept: "Finance & Accounting",
        members: [
          { name: "Dr. Swati Khanna", designation: "Associate Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Swati-Khanna-iilmlodhiroad-faculty.jpg" },
          { name: "Dr. Gurmani Chadha", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/gurmani.jpg" },
          { name: "Prof. Neha Gosain", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Neha-Gosain-iilmlodhiroad-faculty.jpg" },
          { name: "Dr. Taran Kaur", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Taran-Kaur-iilmlodhiroad-faculty.jpg" },
        ],
      },
      {
        dept: "General Management",
        members: [
          { name: "Prof. Rahul K Mishra", designation: "Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/rahul-mishra-1.jpg" },
          { name: "Dr. Gurpreet Singh Bhatia", designation: "Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Gurpreet-Singh-Bhatia-iilmlodhiroad-faculty.jpg" },
          { name: "Prof. Ektaa Jha", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Prof-Ektaa-Jha-IILMLodhiRoad-Faculty.jpg" },
          { name: "Dr. Nandini Varshney", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2025/06/Nandini-Varshney-faculty-main.jpg" },
          { name: "Dr. Mahima Gupta", designation: "Assistant Professor of Economics", photo: "https://iilmlr.ac.in/wp-content/uploads/2026/02/Mahima-Gupta-main.jpg" },
          { name: "Dr. Shefali Goel", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Shefali-Goel-IILMLodhiRoad-Faculty.jpg" },
          { name: "Dr. Nida Rahman", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2025/01/nida-rahman.jpg" },
          { name: "Prof. Pallavi Khanna", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Prof-Pallavi-Khanna-iilmlodhiroad-faculty.jpg" },
          { name: "Dr. Divya Anand", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Divya-Anand-IILMLodhiRoad-Faculty.jpg" },
        ],
      },
      {
        dept: "OB & Human Resources",
        members: [
          { name: "Dr. Sanyukta Jolly", designation: "Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Sanyukta-Jolly-iilmlodhiroad-faculty.jpg" },
          { name: "Dr. Shivani Khurana", designation: "Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Shivani-Khurana-IILMLodhiRoad-Faculty.jpg" },
          { name: "Dr. Mansi Taparia", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Mansi-Taparia-iilmlodhiroad-faculty.jpg" },
        ],
      },
      {
        dept: "Analytics, IT & Operations",
        members: [
          { name: "Dr. Sanjiva Shankar Dubey", designation: "Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Sanjiva-Shanker-Dubey-iilmlodhiroad-faculty.jpg" },
          { name: "Dr. Santanu Roy", designation: "Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2025/06/santanu-roy-iilm-lodhiroad-faculty-main.jpg" },
          { name: "Dr. Seema Sahai", designation: "Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/dr-seema-sahai-iilmlodhiroad-faculty.jpg" },
          { name: "Prof. Chanchal Kushwaha", designation: "Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Chanchal-Kushwaha-iilmlodhiroad-faculty.jpg" },
          { name: "Prof. Ashu Sharma", designation: "Professor of Practice", photo: "https://iilmlr.ac.in/wp-content/uploads/2025/06/Ashu-Sharma-IILM-LR-Faculty_main.jpg" },
          { name: "Prof. Nitasha Barara", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Ms-Nitasha-Barara-iilmlodhiroad-faculty.jpg" },
          { name: "Dr. Nidhi Ahuja", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Nidhi-Ahuja-iilmloadhiroad-faculty.jpg" },
          { name: "Prof. Aanchal Yadav", designation: "Assistant Professor", photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Aanchal-Yadav-Faculty-Profile.jpg" },
        ],
      },
    ],
    placements: {
      rate: "100%",
      average: "₹8.6 LPA",
      highest: "₹15.75 LPA",
      companies: "350+",
      topStudents: [],
      topRecruiters: [
        "Deloitte", "KPMG", "PwC", "Gartner", "L'Oréal", "BlackRock", "Wipro",
        "OneBanc", "ICICI", "Reliance Jio", "RBL Bank", "HDFC", "Kotak", "HSBC",
        "TCS", "Reliance Retail", "Zomato", "Flipkart", "Saint-Gobain", "Accenture",
        "Aye Finance", "Amazon", "Mondelez", "Marico", "Colgate Palmolive",
        "EY", "Berger Paints", "Asian Paints", "RSM", "AON",
      ],
      recruiterLogoBase: "https://iilmlr.ac.in/wp-content/uploads/2024/12/",
      recruiterLogos: [
        "deloitte.jpg", "kpmg.jpg", "pwc.jpg", "gartner.jpg", "loreal.jpg",
        "black-rock.jpg", "wipro.jpg", "one-banc.jpg", "khimji-ramdas.jpg",
        "oxane-partners.jpg", "marsh.jpg", "larsen.jpg", "aye.jpg", "mondelez.jpg",
        "asian-paints.jpg", "icici.jpg", "reliance-jio.jpg", "rbl-bank.jpg",
        "hdfc.jpg", "kotak.jpg", "hsbc.jpg", "protivity.jpg", "tcs.jpg",
        "reliance-retail.jpg", "zomato.jpg", "flipkart.jpg", "saint-gobain.jpg",
        "rsm.jpg", "aon.jpg", "accenture.jpg",
      ],
    },
    gallery: [
      { url: "https://iilmlr.ac.in/wp-content/uploads/2024/12/home-header-01.jpg", caption: "Campus" },
      { url: "https://iilmlr.ac.in/wp-content/uploads/2024/12/home-header-02.jpg", caption: "Campus Life" },
      { url: "https://iilmlr.ac.in/wp-content/uploads/2024/12/home-header-03.jpg", caption: "Learning" },
      { url: "https://iilmlr.ac.in/wp-content/uploads/2024/12/home-header-04.jpg", caption: "Events" },
      { url: "https://iilmlr.ac.in/wp-content/uploads/2024/12/home-header-05.jpg", caption: "Student Life" },
      { url: "https://iilmlr.ac.in/wp-content/themes/IILM/images/campus-01.jpg", caption: "Campus View 1" },
      { url: "https://iilmlr.ac.in/wp-content/themes/IILM/images/campus-02.jpg", caption: "Campus View 2" },
      { url: "https://iilmlr.ac.in/wp-content/themes/IILM/images/campus-03.jpg", caption: "Campus View 3" },
      { url: "https://iilmlr.ac.in/wp-content/uploads/2026/02/wf.jpg", caption: "Workshop" },
      { url: "https://iilmlr.ac.in/wp-content/uploads/2026/02/alumni.jpg", caption: "Alumni Meet" },
      { url: "https://iilmlr.ac.in/wp-content/uploads/2026/02/cxo_4th.jpg", caption: "CXO Conclave" },
      { url: "https://iilm.edu.in/uploads/all/777/conversions/lodai-road-full-full.webp", caption: "Campus Aerial" },
    ],
    downloads: [
      { label: "PGDM Brochure", url: "https://iilmlr.ac.in" },
      { label: "BBA Brochure", url: "https://iilmlr.ac.in" },
    ],
    paymentLink: "https://admissions.iilm.edu",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // LUCKNOW
  // ──────────────────────────────────────────────────────────────────────────
  lucknow: {
    slug: "lucknow",
    name: "IILM Academy of Higher Learning, Lucknow",
    city: "Lucknow, Uttar Pradesh",
    type: "AICTE Approved | AKTU Affiliated",
    established: "2004",
    tagline: "Shaping Business Leaders for Tomorrow's World",
    address: "1, Viraj Khand, Near Dr. Hahnemann Chauraha, Gomti Nagar, Lucknow – 226010",
    phones: [
      "(0522) 2727292-93 (General)",
      "+91-7860241101 (Admissions)",
      "+91-8127083952 (Admissions)",
      "+91-9795045367 (Placements)",
    ],
    email: { general: "info@iilmlko.ac.in", admissions: "adm@iilmlko.ac.in", placements: "placements@iilmlko.ac.in" },
    image: "https://iilm.edu.in/uploads/all/778/conversions/luckhnow-full-full.webp",
    description:
      "IILM Academy of Higher Learning, Lucknow is an AICTE-approved institution established in 2004, offering PGDM and BBA programmes. Located in Gomti Nagar — Lucknow's premier business district — the campus features the Personal Leadership Program (PLP) and Career Development Program (CDP) as distinctive curriculum elements.",
    highlights: [
      { value: "2004", label: "Established" },
      { value: "100%", label: "Placement Rate" },
      { value: "₹12 LPA", label: "Highest Package" },
      { value: "₹7.4L", label: "PGDM Fees" },
    ],
    accreditations: ["AICTE Approved", "AKTU Affiliated (BBA)", "Ministry of Education Recognized"],
    uniqueDifferentiators: [
      "Located in Gomti Nagar — Lucknow's premier business and corporate district",
      "Personal Leadership Program (PLP) — distinctive curriculum element",
      "Career Development Program (CDP) — integrated throughout 2-year PGDM",
      "Deep connect with UP's BFSI, IT, retail and government advisory ecosystem",
    ],
    director: {
      name: "Dr. V.V. Gopal",
      title: "Director",
      photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-12-150x150.png",
    },
    programmes: [
      {
        level: "PGDM",
        items: [
          {
            name: "PGDM – Marketing",
            duration: "2 years",
            note: "AICTE Approved. Fee: ₹7,40,000",
          },
          { name: "PGDM – Finance", duration: "2 years" },
          { name: "PGDM – Human Resources", duration: "2 years" },
          { name: "PGDM – Operations & Business Analytics", duration: "2 years" },
        ],
      },
      {
        level: "UG",
        items: [
          {
            name: "BBA",
            duration: "3 years",
            dept: "AKTU Affiliated",
            note: "Focus: FMCG, Banking, Retail, NBFCs, IT. Includes NISM & Coursera certifications.",
          },
        ],
      },
    ],
    faculty: [
      {
        dept: "Faculty",
        members: [
          { name: "Dr. V.V. Gopal", designation: "Director", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-12-150x150.png" },
          { name: "Dr. Suchita Vishwakarma", designation: "I/C Dean", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-14-150x150.png" },
          { name: "Dr. Fawad Ali Khan", designation: "Associate Professor, Marketing", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-15-150x150.png" },
          { name: "Dr. Reetika Agarwal", designation: "Associate Professor, HR & OB", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-20-150x150.png" },
          { name: "Dr. Tauseef Irfan", designation: "Assistant Professor", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-19-150x150.png" },
          { name: "Dr. Atul Srivastava", designation: "Assistant Professor", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-16-150x150.png" },
          { name: "Prof. Ridhika Chatterjee", designation: "Assistant Professor", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-17-150x150.png" },
          { name: "Dr. Abhishek Kumar Pandey", designation: "Assistant Professor, HR & OB", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-21-150x150.png" },
          { name: "Prof. R.P. Singh", designation: "Assistant Professor, Operations", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-22-150x150.png" },
          { name: "Dr. Hemverna Dwivedi", designation: "Assistant Professor", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-23-150x150.png" },
          { name: "Prof. Ravi Kant Maurya", designation: "Assistant Professor, Finance", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-24-150x150.png" },
          { name: "Dr. Kushagra Sharan", designation: "Assistant Professor, Marketing", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-25-150x150.png" },
          { name: "Dr. Harshita Srivastava", designation: "Assistant Professor, Finance", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-26-150x150.png" },
          { name: "Dr. Shiv Shankar Kumar", designation: "Assistant Professor, Finance", photo: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Untitled-design-27-150x150.png" },
        ],
      },
    ],
    placements: {
      rate: "100%",
      highest: "₹12 LPA",
      companies: "100+",
      topStudents: [],
      topRecruiters: [
        "Deloitte", "KPMG", "HDFC", "ICICI", "Kotak", "Wipro",
        "Zomato", "Reliance Retail", "Aye Finance", "IndiaMART",
      ],
    },
    gallery: [
      { url: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/Admission-Open-Website-2-2048x1151.jpg", caption: "Admissions 2026" },
      { url: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/DSC01813-scaled.jpg", caption: "Campus" },
      { url: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/IMG_1105-scaled.jpg", caption: "Student Life" },
      { url: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2026/01/DSC01660-scaled.jpg", caption: "Events" },
      { url: "https://www.iilmlko.ac.in/demo/wp-content/uploads/2024/12/iilmu-placement-banner_11zon-2.jpg", caption: "Placements" },
      { url: "https://iilm.edu.in/uploads/all/778/conversions/luckhnow-full-full.webp", caption: "Campus Aerial" },
    ],
    downloads: [
      { label: "PGDM Fee Structure", url: "https://iilmlko.ac.in/demo/img/documents/iilmlko-fee-structure.pdf" },
      { label: "Admissions Brochure", url: "https://iilmlko.ac.in" },
    ],
    paymentLink: "https://admissions.iilm.edu",
  },

  // ──────────────────────────────────────────────────────────────────────────
  // JAIPUR
  // ──────────────────────────────────────────────────────────────────────────
  jaipur: {
    slug: "jaipur",
    name: "IILM Academy of Higher Learning, Jaipur",
    city: "Jaipur, Rajasthan",
    type: "AICTE Approved | AACSB Member",
    established: "1998",
    tagline: "Nurturing Innovation, Fostering Entrepreneurship, Shaping Responsible Business Leaders.",
    address: "35/95, RHB Colony, Sector-10, Kumbha Marg, Pratap Nagar, Sanganer, Jaipur – 302033, Rajasthan",
    phones: [
      "+91-9214358828 (Admissions)",
      "+91-9214358829 (Admissions)",
      "(0141) 2791140-60 (General)",
      "+91-7413928928 (Placements)",
    ],
    email: { admin: "iilmjaipur@iilm.ac.in", admissions: "admissionjaipur@iilm.ac.in", placements: "placements@iilm.ac.in" },
    image: "https://iilm.edu.in/uploads/all/776/conversions/jaipur-(1)-full-full.webp",
    heroVideo: "hfYVqQJOf1g",
    description:
      "IILM AHL Jaipur is an AICTE-approved, AACSB member institution established in 1998, offering PGDM programmes with curriculum benchmarked against Stanford, Wharton, Harvard, and IIM. The campus offers 9 specializations including AI, Blockchain, Cybersecurity, and Fintech, with a mandatory 3-month Summer Internship Program.",
    highlights: [
      { value: "1998", label: "Established" },
      { value: "28+", label: "Years of Excellence" },
      { value: "9", label: "PGDM Specializations" },
      { value: "100%", label: "Placement Rate" },
      { value: "AACSB", label: "Member" },
    ],
    accreditations: ["AICTE Approved", "AACSB Member", "Ministry of Education Recognized"],
    uniqueDifferentiators: [
      "Curriculum benchmarked against Stanford, Wharton, Harvard, and IIM",
      "9 PGDM specializations including AI, Blockchain, Cybersecurity, and Fintech",
      "Mandatory 3-month Summer Internship Program (SIP) for all students",
      "AACSB member — globally recognized quality standard",
    ],
    director: {
      name: "Dr. Samar Sarabhai",
      title: "Director, Professor of Marketing & Strategy",
      photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/02/dr-samar-sarabhai.webp",
    },
    programmes: [
      {
        level: "PGDM",
        items: [
          {
            name: "PGDM – General Management",
            duration: "2 years",
            note: "AICTE Approved. Mandatory 3-month SIP. Curriculum inspired by Stanford/Wharton/Harvard/IIM.",
          },
          { name: "PGDM – Human Resources", duration: "2 years" },
          { name: "PGDM – Business Analytics", duration: "2 years" },
          { name: "PGDM – Fintech", duration: "2 years" },
          { name: "PGDM – Entrepreneurship", duration: "2 years" },
          { name: "PGDM – Marketing & Innovation", duration: "2 years" },
          { name: "PGDM – Marketing", duration: "2 years" },
          { name: "PGDM – Finance", duration: "2 years" },
          { name: "PGDM – Operations", duration: "2 years" },
          { name: "PGDM – AI / Blockchain / Cybersecurity", duration: "2 years", note: "New-age specialization" },
        ],
      },
    ],
    faculty: [
      {
        dept: "Faculty",
        members: [
          { name: "Dr. Samar Sarabhai", designation: "Director / Professor, Marketing & Strategy", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/02/dr-samar-sarabhai.webp" },
          { name: "Prof. Manu Amitabh", designation: "Professor, Strategy & Operations", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/07/dr-manu-amitabh.webp" },
          { name: "Prof. Punit Pandey", designation: "Professor, Marketing", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/02/mr-puneet-pandey.webp" },
          { name: "Dr. Ram Kumar Mishra", designation: "Distinguished Professor, General Management", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/03/Dr-Ram-Kumar-Mishra.webp" },
          { name: "Dr. A.V. Vedpuriswar", designation: "Professor of Eminence, Strategy & Finance", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/12/av-vedpuriswar-pofessor-of-eminence-strategy-and-finance-img-1.webp" },
          { name: "Prof. Sankersan Sarkar", designation: "Professor, Finance", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/02/dr-sankershan-sarakar-2.webp" },
          { name: "Dr. Reshma Sheikh", designation: "Associate Professor, Finance", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/02/dr-reshma-sheikh.webp" },
          { name: "Dr. Jyotsana Sharma", designation: "Associate Professor, HR & OB", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/02/dr-jyotsana-sharma.webp" },
          { name: "Dr. Anita Gangrade", designation: "Associate Professor, Business Law", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/02/dr-anita-gangrade.webp" },
          { name: "Prof. Abhishek Sharma", designation: "Assistant Professor, Marketing", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/07/Abhishek-Sharma.webp" },
          { name: "Ms. Chahat Arora", designation: "Assistant Professor, Communication & Placements", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/02/prof-chahat-arora.webp" },
          { name: "Prof. Soanali Misra", designation: "Assistant Professor, Communication", photo: "https://iilmjaipur.ac.in/wp-content/uploads/2025/07/Soanali-Misra.webp" },
        ],
      },
    ],
    placements: {
      rate: "100%",
      companies: "100+",
      topStudents: [
        { name: "Shailja Joshi", company: "Jaro Education", package: "Management Trainee" },
        { name: "Mumal Rajawat", company: "Jaro Education", package: "Management Trainee" },
        { name: "Anshima Khandelwal", company: "Jaro Education", package: "Management Trainee" },
        { name: "Rupesh Yadav", company: "Jaro Education", package: "Management Trainee" },
      ],
      topRecruiters: [
        "Jaro Education", "Reliance Retail", "AYE Finance", "Tax2Win", "IndiaMART",
        "AU Small Finance Bank", "Modani Financial Services", "Thrillophilia",
        "HideEdu", "OneStack",
      ],
    },
    gallery: [
      { url: "https://iilmjaipur.ac.in/wp-content/uploads/2025/03/new-1.webp", caption: "Campus" },
      { url: "https://iilmjaipur.ac.in/wp-content/uploads/2025/03/new-3.webp", caption: "Learning" },
      { url: "https://iilmjaipur.ac.in/wp-content/uploads/2025/03/new-5.webp", caption: "Student Life" },
      { url: "https://iilmjaipur.ac.in/wp-content/uploads/2025/03/new-6.webp", caption: "Events" },
      { url: "https://iilmjaipur.ac.in/wp-content/uploads/2025/03/new-7.webp", caption: "Campus View" },
      { url: "https://iilmjaipur.ac.in/wp-content/uploads/2025/03/new-8.webp", caption: "Facilities" },
      { url: "https://iilmjaipur.ac.in/wp-content/uploads/2026/01/Banners-website.webp", caption: "Admissions" },
      { url: "https://iilmjaipur.ac.in/wp-content/uploads/2025/02/about-iilm.webp", caption: "About IILM" },
      { url: "https://iilm.edu.in/uploads/all/776/conversions/jaipur-(1)-full-full.webp", caption: "Campus Aerial" },
    ],
    downloads: [
      { label: "PGDM Brochure", url: "https://iilmjaipur.ac.in" },
      { label: "Admissions 2026", url: "https://iilmjaipur.ac.in" },
    ],
    paymentLink: "https://admissions.iilm.edu",
  },
};
