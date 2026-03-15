"use client";
import Image from "next/image";
import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FacultyMember {
  name: string;
  designation: string;
  department: string;
  school: string;
  photoUrl: string | null;
}

// ─── Shared photo helper (Gurugram = iilm.edu.in) ────────────────────────────
// Note: Prof. Ranbir Singh appears on both Gurugram & Lodhi Road — same photo reused.

function gu(id: number, slug: string): string {
  return `https://iilm.edu.in/uploads/all/${id}/conversions/${slug}-thumb.webp`;
}

// Shared across campuses
const RANBIR_SINGH_PHOTO = gu(634, "ranbirsingh");

// ─── Gurugram Faculty Data ────────────────────────────────────────────────────

const gurugramFaculty: FacultyMember[] = [
  // Leadership
  { name: "Prof. Ranbir Singh", designation: "Pro Chancellor", department: "Law", school: "School of Law", photoUrl: RANBIR_SINGH_PHOTO },
  { name: "Dr. Ravi Kumar Jain", designation: "Vice Chancellor Designate", department: "Management", school: "School of Management", photoUrl: gu(909, "Ravi-Kumar-Jain") },
  // School of Management
  { name: "Dr. Madhu Jasola", designation: "Professor – Marketing", department: "Marketing", school: "School of Management", photoUrl: gu(927, "IILM-University-Dr-Madhu-Jasola") },
  { name: "Dr. Jasdeep Singh Chadha", designation: "Professor", department: "Management", school: "School of Management", photoUrl: gu(915, "jasdeep-chadha") },
  { name: "Dr. Saima Rizvi", designation: "Professor", department: "Management", school: "School of Management", photoUrl: gu(918, "Dr.-Saima-Rizvi") },
  { name: "Dr. Vidhisha Vyas", designation: "Professor", department: "Management", school: "School of Management", photoUrl: gu(929, "Dr-Vidhisha-Vyas") },
  { name: "Dr. Rahul Singh", designation: "Director – Research & FYUP", department: "Research", school: "School of Management", photoUrl: gu(1296, "Prof-Rahul-Singh-IILMu") },
  { name: "Dr. Rachna Madaan", designation: "Associate Professor", department: "Management", school: "School of Management", photoUrl: gu(920, "Dr.-Rachna-Madaan") },
  { name: "Dr. Satish Kumar", designation: "Associate Professor", department: "Management", school: "School of Management", photoUrl: gu(923, "IILM-University-Dr-Satish-kumar") },
  { name: "Dr. Namita Dixit", designation: "Associate Professor", department: "Management", school: "School of Management", photoUrl: gu(928, "Dr-NamitaDixit") },
  { name: "Dr. Shuchi Parashar", designation: "Associate Professor", department: "Management", school: "School of Management", photoUrl: gu(1307, "Shuchi-Parashar-iilmu") },
  { name: "Dr. Neha Kamboj", designation: "Assistant Professor", department: "Management", school: "School of Management", photoUrl: gu(924, "IILM-University-Dr-Neha-Kamboj") },
  { name: "Prof. Tanya Bhutani", designation: "Assistant Professor", department: "Management", school: "School of Management", photoUrl: gu(912, "Prof-Tanya-Bhutani") },
  { name: "Dr. Ajay Singh Rathore", designation: "Assistant Professor", department: "Management", school: "School of Management", photoUrl: gu(913, "ajay-rathore") },
  // School of CSE
  { name: "Dr. Shamik Tiwari", designation: "Founding Dean", department: "Computer Science", school: "School of CSE", photoUrl: gu(1228, "Dr-Shamik-Tiwari") },
  { name: "Dr. Anurag Jain", designation: "Professor", department: "Computer Science", school: "School of CSE", photoUrl: gu(1230, "Dr-Anurag") },
  { name: "Dr. Puja Acharya", designation: "Associate Professor", department: "Computer Science", school: "School of CSE", photoUrl: gu(1227, "Puja-Acharya") },
  { name: "Dr. Pallavi Pandey", designation: "Associate Professor", department: "Computer Science", school: "School of CSE", photoUrl: gu(1226, "Pallavi-Pandey") },
  { name: "Dr. Sapna Arora", designation: "Associate Professor", department: "Computer Science", school: "School of CSE", photoUrl: gu(1225, "Sapna-Arora") },
  { name: "Dr. Amar Shukla", designation: "Associate Professor", department: "AI & Intelligent Systems", school: "School of CSE", photoUrl: gu(1286, "Amar-Shukla-iilmu-faculty") },
  { name: "Dr. Umang Garg", designation: "Associate Professor", department: "Cyber Security", school: "School of CSE", photoUrl: gu(1293, "Umang-Garg-IILMu-Faculty") },
  { name: "Dr. Akshat Agrawal", designation: "Associate Professor", department: "Data & Infrastructure", school: "School of CSE", photoUrl: gu(1346, "dr-akshat-agrawal") },
  { name: "Dr. Aarti Chugh", designation: "Associate Professor", department: "Computer Science", school: "School of CSE", photoUrl: gu(1234, "dr-aarti") },
  { name: "Dr. Pooja Batra Nagpal", designation: "Associate Professor", department: "Computer Science", school: "School of CSE", photoUrl: gu(1224, "Pooja-Batra-Nagpal") },
  { name: "Dr. Law Kumar Singh", designation: "Professor", department: "Computer Science", school: "School of CSE", photoUrl: gu(1640, "Law-Kumar-Singh") },
  // School of Law
  { name: "Prof. Sujata Bali", designation: "Dean & Professor", department: "Law", school: "School of Law", photoUrl: gu(731, "Prof-Dr-Sujata-Bali") },
  { name: "Dr. Monica Yadav", designation: "Professor", department: "Law", school: "School of Law", photoUrl: gu(732, "Dr-Monica-Yadav") },
  { name: "Dr. Vijay Pal Singh", designation: "Professor", department: "Law", school: "School of Law", photoUrl: gu(1498, "dr-vijay-pal-singh") },
  { name: "Dr. Archna Sehrawat", designation: "Associate Professor", department: "Law", school: "School of Law", photoUrl: gu(906, "Dr-Archna-Sehrawat") },
  { name: "Dr. Astha Mehta", designation: "Associate Professor", department: "Law", school: "School of Law", photoUrl: gu(1494, "Dr-Astha-Mehta") },
  { name: "Dr. Monika Bhatia", designation: "Associate Professor", department: "Law", school: "School of Law", photoUrl: gu(1496, "dr-monika-bhatia") },
  { name: "Dr. Misha Bahmani", designation: "Assistant Professor", department: "Law", school: "School of Law", photoUrl: gu(888, "misha-bahmani") },
  { name: "Dr. Mahima Tripathi", designation: "Assistant Professor", department: "Law", school: "School of Law", photoUrl: gu(903, "DrMahima-Tripathi") },
  // School of Psychology
  { name: "Dr. Sakshi Kaul", designation: "Professor & Head", department: "Psychology", school: "School of Psychology", photoUrl: gu(1239, "Sakshi-Kaul") },
  { name: "Dr. Shailaja Pokhriyal", designation: "Associate Professor", department: "Clinical Psychology", school: "School of Psychology", photoUrl: gu(1244, "Shailaja-Pokhriyal") },
  { name: "Dr. Divya Rawat", designation: "Associate Professor", department: "Nutrition & Dietetics", school: "School of Psychology", photoUrl: gu(1238, "Dr-Divya-Rawat") },
  { name: "Dr. Rati Khurana", designation: "Assistant Professor", department: "Psychology", school: "School of Psychology", photoUrl: gu(911, "Dr-Rati-Khurana") },
  { name: "Dr. Neha Tanwar", designation: "Assistant Professor", department: "Psychology", school: "School of Psychology", photoUrl: gu(1240, "Neha-Tanwar") },
  // Liberal Arts, Design & Communication
  { name: "Nitika Seth", designation: "Dean & Professor", department: "Design", school: "School of Design", photoUrl: gu(967, "Nitika-Seth") },
  { name: "Bhavneet Singh Aurora", designation: "Associate Dean", department: "Communication", school: "School of Communication", photoUrl: gu(939, "Bhavneet-Singh-Aurora") },
  { name: "Dr. Deepika Dhiman", designation: "Associate Professor", department: "Liberal Arts", school: "School of Liberal Arts", photoUrl: gu(943, "Deepika-Dhiman") },
  { name: "Dr. Pooja Gupta", designation: "Associate Professor", department: "Liberal Arts", school: "School of Liberal Arts", photoUrl: gu(960, "IILM-University-Dr-Pooja-Gupta") },
  { name: "Nirbhay Rana", designation: "Associate Professor", department: "Liberal Arts", school: "School of Liberal Arts", photoUrl: gu(1429, "Nirbhay-Rana") },
];

// ─── Lodhi Road Faculty Data ──────────────────────────────────────────────────
// Photos confirmed from iilmlr.ac.in scrape. Prof. Ranbir Singh photo reused from Gurugram.

const lodhiRoadFaculty: FacultyMember[] = [
  { name: "Dr. Harivansh Chaturvedi", designation: "Director General", department: "General Management", school: "IILM Lodhi Road", photoUrl: "https://iilmlr.ac.in/wp-content/uploads/2024/11/harivansh-chaturvedi-02.jpg" },
  { name: "Dr. Bigyan P Verma", designation: "Director", department: "Management", school: "IILM Lodhi Road", photoUrl: "https://iilmlr.ac.in/wp-content/uploads/2025/05/Bigjay-P-Verma-IILM-LodhRoad-Director.jpg" },
  { name: "Dr. Raju Majumdar", designation: "Dean & Professor", department: "Finance & Accounting", school: "IILM Lodhi Road", photoUrl: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Prof-Raju-Majumdar-IILMLodhiRoad-Faculty.jpg" },
  { name: "Dr. Sonia Khera", designation: "Dean – SBS & International", department: "General Management", school: "IILM Lodhi Road", photoUrl: "https://iilmlr.ac.in/wp-content/uploads/2024/11/Dr-Sonia-Khera-iilmlodhiroad-faculty.jpg" },
  // Prof. Ranbir Singh appears across Gurugram & Lodhi Road — reusing same photo
  { name: "Prof. Ranbir Singh", designation: "Pro Chancellor", department: "Law", school: "IILM Lodhi Road", photoUrl: RANBIR_SINGH_PHOTO },
  { name: "Dr. Sanjiva Shankar Dubey", designation: "Professor", department: "Analytics & Operations", school: "IILM Lodhi Road", photoUrl: null },
  { name: "Dr. Santanu Roy", designation: "Professor", department: "Analytics & IT", school: "IILM Lodhi Road", photoUrl: null },
  { name: "Dr. Seema Sahai", designation: "Professor", department: "Operations", school: "IILM Lodhi Road", photoUrl: null },
  { name: "Dr. Sanyukta Jolly", designation: "Professor", department: "OB & HR", school: "IILM Lodhi Road", photoUrl: null },
  { name: "Dr. Shivani Khurana", designation: "Professor", department: "OB & HR", school: "IILM Lodhi Road", photoUrl: null },
  { name: "Prof. Rahul K Mishra", designation: "Professor", department: "General Management", school: "IILM Lodhi Road", photoUrl: null },
  { name: "Dr. Gurpreet Singh Bhatia", designation: "Professor", department: "General Management", school: "IILM Lodhi Road", photoUrl: null },
  { name: "Dr. Swati Khanna", designation: "Associate Professor", department: "Finance", school: "IILM Lodhi Road", photoUrl: null },
  { name: "Dr. Shruti Gill", designation: "Associate Professor", department: "Marketing", school: "IILM Lodhi Road", photoUrl: null },
  { name: "Dr. Sartaj Khera", designation: "Associate Professor", department: "Marketing", school: "IILM Lodhi Road", photoUrl: null },
  { name: "Dr. Mansi Taparia", designation: "Assistant Professor", department: "OB & HR", school: "IILM Lodhi Road", photoUrl: null },
];

// ─── Greater Noida Faculty Data ───────────────────────────────────────────────
// iilm.ac.in uses a generic placeholder for all faculty photos — names confirmed from scrape.

const greaterNoidaFaculty: FacultyMember[] = [
  { name: "Dr. Munish Sabharwal", designation: "Professor & Dean", department: "Engineering", school: "School of Engineering", photoUrl: null },
  { name: "Dr. Alok Aggarwal", designation: "Professor & Dean", department: "Computer Science", school: "School of CSE", photoUrl: null },
  { name: "Dr. Arvind Kumar Jain", designation: "Professor & Dean of Student Welfare", department: "Administration", school: "School of Engineering", photoUrl: null },
  { name: "Dr. Babita Singh Parasain", designation: "Professor & Director", department: "Law", school: "School of Law", photoUrl: null },
  { name: "Dr. Anupama Srivastava", designation: "Professor & Dean", department: "Humanities & Social Sciences", school: "School of Humanities", photoUrl: null },
  { name: "Dr. Yogesh Kumar Jain", designation: "Professor & Deputy Dean", department: "Executive Education", school: "School of Management", photoUrl: null },
  { name: "Dr. Himanshu Sharma", designation: "Professor & Associate Dean", department: "Computer Science", school: "School of CSE", photoUrl: null },
  { name: "Dr. Nitesh Kumar Adichwal", designation: "Associate Dean", department: "Management", school: "School of Management", photoUrl: null },
  { name: "Dr. Srinivasan Sriramulu", designation: "Professor", department: "Computer Science", school: "School of CSE", photoUrl: null },
  { name: "Dr. Rakhi Trivedi", designation: "Professor", department: "Sciences", school: "School of Sciences", photoUrl: null },
  { name: "Dr. Shweta Tiwari", designation: "Professor", department: "Management", school: "School of Management", photoUrl: null },
  { name: "Dr. Sushma Singh", designation: "Professor", department: "Law", school: "School of Law", photoUrl: null },
  { name: "Dr. Meenu Singh", designation: "Professor", department: "Engineering", school: "School of Engineering", photoUrl: null },
];

// ─── Tab config ───────────────────────────────────────────────────────────────

type TabKey = "gurugram" | "greater-noida" | "lodhi-road" | "lucknow" | "jaipur";

interface TabConfig {
  key: TabKey;
  label: string;
  count: string;
  faculty: FacultyMember[];
}

// Lucknow & Jaipur are smaller academy campuses — names confirmed, photos to be added when scraped
// Lucknow — confirmed from iilmlko.ac.in scrape
const lucknowFaculty: FacultyMember[] = [
  { name: "Dr. V. V. Gopal", designation: "Professor & Director", department: "Management", school: "IILM Lucknow", photoUrl: null },
  { name: "Dr. Suchita Vishwakarma", designation: "Dean (In-Charge)", department: "Marketing", school: "IILM Lucknow", photoUrl: null },
  { name: "Fawad Khan", designation: "Associate Professor", department: "Marketing", school: "IILM Lucknow", photoUrl: null },
];

// Jaipur — confirmed from iilmjaipur.ac.in scrape
const jaipurFaculty: FacultyMember[] = [
  { name: "Dr. Samar Sarabhai", designation: "Director & Professor", department: "Marketing & Strategy", school: "IILM Jaipur", photoUrl: null },
  { name: "Dr. A. V. Vedpuriswar", designation: "Professor of Eminence", department: "Strategy & Finance", school: "IILM Jaipur", photoUrl: null },
  { name: "Dr. Ram Kumar Mishra", designation: "Distinguished Professor", department: "General Management", school: "IILM Jaipur", photoUrl: null },
  { name: "Prof. Manu Amitabh", designation: "Professor", department: "Strategy & Operations", school: "IILM Jaipur", photoUrl: null },
  { name: "Prof. Punit Pandey", designation: "Professor", department: "Marketing", school: "IILM Jaipur", photoUrl: null },
  { name: "Prof. Sankersan Sarkar", designation: "Professor", department: "Finance", school: "IILM Jaipur", photoUrl: null },
  { name: "Dr. Anita Gangrade", designation: "Associate Professor", department: "Business Law", school: "IILM Jaipur", photoUrl: null },
  { name: "Dr. Jyotsana Sharma", designation: "Associate Professor", department: "HR & OB", school: "IILM Jaipur", photoUrl: null },
  { name: "Dr. Reshma Sheikh", designation: "Associate Professor", department: "Finance", school: "IILM Jaipur", photoUrl: null },
  { name: "Prof. Abhishek Sharma", designation: "Assistant Professor", department: "Marketing", school: "IILM Jaipur", photoUrl: null },
  { name: "Ms. Chahat Arora", designation: "Assistant Professor", department: "Communication & Placements", school: "IILM Jaipur", photoUrl: null },
];

const tabs: TabConfig[] = [
  { key: "gurugram", label: "Gurugram", count: "70+ Faculty", faculty: gurugramFaculty },
  { key: "greater-noida", label: "Greater Noida", count: "300+ Faculty", faculty: greaterNoidaFaculty },
  { key: "lodhi-road", label: "Lodhi Road", count: "36 Faculty", faculty: lodhiRoadFaculty },
  { key: "lucknow", label: "Lucknow", count: "Faculty", faculty: lucknowFaculty },
  { key: "jaipur", label: "Jaipur", count: "11 Faculty", faculty: jaipurFaculty },
];

// ─── Helper ───────────────────────────────────────────────────────────────────

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter((w) => !["Dr.", "Prof.", "Adv."].includes(w))
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

// ─── FacultyCard ──────────────────────────────────────────────────────────────

function FacultyCard({ member }: { member: FacultyMember }) {
  const [imgError, setImgError] = useState(false);
  const initials = getInitials(member.name);
  const showPhoto = member.photoUrl !== null && !imgError;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-5 card-hover hover:border-navy/20 flex flex-col items-center text-center">
      {/* Avatar / Photo */}
      <div className="mb-4 flex-shrink-0">
        {showPhoto ? (
          <Image
            src={member.photoUrl as string}
            alt={member.name}
            width={80}
            height={80}
            className="rounded-full object-cover w-20 h-20 border-2 border-slate-100"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold text-xl border-2 border-slate-100">
            {initials}
          </div>
        )}
      </div>

      {/* Name & designation */}
      <h3 className="font-bold text-navy text-sm leading-snug mb-0.5">{member.name}</h3>
      <p className="text-xs text-blue font-semibold mb-2">{member.designation}</p>

      {/* Badges */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        <span className="inline-block bg-navy/8 text-navy text-[10px] font-semibold px-2 py-0.5 rounded-full">
          {member.department}
        </span>
        <span className="inline-block bg-maroon/8 text-maroon text-[10px] font-medium px-2 py-0.5 rounded-full">
          {member.school}
        </span>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function FacultyPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("gurugram");

  const currentTab = tabs.find((t) => t.key === activeTab)!;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">
            Academic Excellence
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Our Faculty
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Meet the scholars, practitioners, and mentors behind IILM&apos;s academic excellence — across
            five campuses.
          </p>

          {/* Campus counts */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {tabs.map((tab) => (
              <div key={tab.key} className="text-center">
                <div className="text-2xl font-bold text-white">{tab.count}</div>
                <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5">
                  {tab.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab bar + Faculty grid */}
      <section className="bg-slate py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                  activeTab === tab.key
                    ? "bg-navy text-white border-navy shadow-md"
                    : "bg-white text-navy border-slate-200 hover:border-navy/40 hover:bg-navy/5"
                }`}
              >
                {tab.label}
                <span
                  className={`ml-2 text-xs font-normal ${
                    activeTab === tab.key ? "text-white/70" : "text-slate-400"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              {currentTab.label} Campus Faculty
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Showing {currentTab.faculty.length} featured faculty members ·{" "}
              <span className="text-navy font-semibold">{currentTab.count}</span> total
            </p>
          </div>

          {/* Faculty grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {currentTab.faculty.map((member) => (
              <FacultyCard key={`${activeTab}-${member.name}`} member={member} />
            ))}
          </div>

          {/* View all note */}
          <div className="text-center mt-10 text-sm text-slate-500">
            <p>
              Showing featured faculty only.{" "}
              <span className="text-navy font-semibold">{currentTab.count}</span> across the{" "}
              {currentTab.label} campus.
            </p>
            <a
              href={
                activeTab === "lodhi-road" ? "https://iilmlr.ac.in/faculty/"
                : activeTab === "greater-noida" ? "https://iilm.ac.in/faculty/"
                : "https://iilm.edu.in/faculty/"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 px-5 py-2 bg-maroon text-white text-sm font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              View All Faculty — {currentTab.label} →
            </a>
          </div>
        </div>
      </section>

      {/* Join Our Faculty CTA */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">
              Careers at IILM
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Join Our Faculty</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto leading-relaxed">
              IILM is always looking for passionate educators, researchers, and practitioners who want
              to shape the next generation of Indian leaders.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[
              {
                title: "Full-Time Faculty",
                desc: "Permanent positions across all schools. Teach, research, and mentor in a collaborative academic environment.",
              },
              {
                title: "Adjunct / Visiting Faculty",
                desc: "Bring industry experience to the classroom. Flexible engagements for practitioners and experts.",
              },
              {
                title: "Research Associates",
                desc: "Work alongside senior faculty on funded research projects, publications, and collaborative programmes.",
              },
            ].map((role) => (
              <div
                key={role.title}
                className="bg-slate rounded-2xl border border-slate-100 p-6 card-hover hover:border-navy/20"
              >
                <h3 className="font-bold text-navy text-base mb-2">{role.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/careers"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              View Open Positions
            </a>
            <a
              href="mailto:faculty.recruitment@iilm.edu"
              className="px-8 py-3.5 border border-navy/20 text-navy font-semibold rounded-full hover:bg-navy hover:text-white transition-all"
            >
              faculty.recruitment@iilm.edu
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
