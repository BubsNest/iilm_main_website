import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership | IILM University",
  description:
    "Meet the Patrons, Vice Chancellors, Directors, and Board of Governors who shape IILM University's academic vision and institutional excellence.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

interface Patron {
  name: string;
  title: string;
  bio: string;
  photo: string;
  initials: string;
}

const patrons: Patron[] = [
  {
    name: "P. Dwarakanath",
    title: "Chancellor & Patron",
    bio: "P. Dwarakanath is the visionary founder and Chancellor of IILM University. With decades of commitment to quality higher education in India, he has built IILM into a multi-campus institution that blends academic rigour with industry relevance, nurturing future-ready leaders across disciplines.",
    photo:
      "https://iilm.edu.in/uploads/all/697/conversions/P-Dwarakanath-full.webp",
    initials: "PD",
  },
  {
    name: "Prof. Ranbir Singh",
    title: "Pro Chancellor",
    bio: "Prof. Ranbir Singh is an eminent jurist and academic administrator who has served as Vice Chancellor of multiple premier universities in India. As Pro Chancellor of IILM University, he steers the institution's governance and academic standards with his vast experience in law and higher education.",
    photo:
      "https://iilm.edu.in/uploads/all/634/conversions/ranbirsingh-thumb.webp",
    initials: "RS",
  },
];

interface VCDirector {
  name: string;
  role: string;
  campus: string;
  campusBadge: string;
  photo: string;
  initials: string;
}

const vcDirectors: VCDirector[] = [
  {
    name: "Dr. Ravi Kumar Jain",
    role: "Vice Chancellor (Designate)",
    campus: "Gurugram Campus",
    campusBadge: "bg-blue/10 text-blue",
    photo:
      "https://iilm.edu.in/uploads/all/909/conversions/Ravi-Kumar-Jain-thumb.webp",
    initials: "RJ",
  },
  {
    name: "Dr. Harivansh Chaturvedi",
    role: "Director General",
    campus: "Lodhi Road Campus",
    campusBadge: "bg-maroon/10 text-maroon",
    photo:
      "https://iilmlr.ac.in/wp-content/uploads/2024/11/harivansh-chaturvedi-02.jpg",
    initials: "HC",
  },
  {
    name: "Dr. Bigyan P Verma",
    role: "Director",
    campus: "Lodhi Road Campus",
    campusBadge: "bg-maroon/10 text-maroon",
    photo:
      "https://iilmlr.ac.in/wp-content/uploads/2025/06/Dr-Bigyan-P-Verma-IILM-Lodhi-Road-Director.jpg",
    initials: "BV",
  },
];

interface BOGMember {
  name: string;
  role: string;
  photo: string;
  initials: string;
  avatarBg: string;
}

const bogMembers: BOGMember[] = [
  {
    name: "Rajeev Dubey",
    role: "Chairperson, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/12/rajeev-dubey.jpg",
    initials: "RD",
    avatarBg: "from-navy to-blue",
  },
  {
    name: "Lt. Gen. (Retd.) S.S. Mehta",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/ss-mehta.jpg",
    initials: "SM",
    avatarBg: "from-slate-700 to-slate-500",
  },
  {
    name: "Justice (Retd.) Mukul Mudgal",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/mukul-mudgal.jpg",
    initials: "MM",
    avatarBg: "from-navy to-blue",
  },
  {
    name: "Rajiv Mehrishi (IAS Retd.)",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/rajiv-mehrishi.jpg",
    initials: "RM",
    avatarBg: "from-slate-700 to-slate-500",
  },
  {
    name: "Dr. Omkar Nath",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/omkar-nath.jpg",
    initials: "ON",
    avatarBg: "from-navy to-blue",
  },
  {
    name: "Neeraj Singhal",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/neeraj-singhal.jpg",
    initials: "NS",
    avatarBg: "from-slate-700 to-slate-500",
  },
  {
    name: "Ravinder Takkar",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/ravinder-takkar.jpg",
    initials: "RT",
    avatarBg: "from-navy to-blue",
  },
  {
    name: "Maj. Gen. (Retd.) A. Sengaptta",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/a-sengaptta.jpg",
    initials: "AS",
    avatarBg: "from-slate-700 to-slate-500",
  },
  {
    name: "P.K. Srivastava",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/pk-srivastava.jpg",
    initials: "PS",
    avatarBg: "from-navy to-blue",
  },
  {
    name: "Pradeep Mukerjee",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/pradeep-mukerjee.jpg",
    initials: "PM",
    avatarBg: "from-slate-700 to-slate-500",
  },
  {
    name: "R.K. Bhatia",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/rk-bhatia.jpg",
    initials: "RB",
    avatarBg: "from-navy to-blue",
  },
  {
    name: "Col. (Retd.) M.K. Mehta",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/mk-mehta.jpg",
    initials: "MK",
    avatarBg: "from-slate-700 to-slate-500",
  },
  {
    name: "Lalit Sharma",
    role: "Member, Board of Governors",
    photo: "https://iilmlr.ac.in/wp-content/uploads/2024/11/lalit-sharma.jpg",
    initials: "LS",
    avatarBg: "from-navy to-blue",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function PhotoWithFallback({
  src,
  alt,
  initials,
  avatarBg,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  initials: string;
  avatarBg: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      {/* Fallback shown behind the image; image hides it when it loads */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${avatarBg} flex items-center justify-center`}
        aria-hidden="true"
      >
        <span className="text-white font-bold text-2xl select-none">
          {initials}
        </span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="relative w-full h-full object-cover object-top"
        sizes="(max-width: 640px) 100vw, 50vw"
      />
    </div>
  );
}

function PatronCard({ patron }: { patron: Patron }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="relative h-64 sm:h-72 w-full bg-slate-100">
        <PhotoWithFallback
          src={patron.photo}
          alt={patron.name}
          initials={patron.initials}
          avatarBg="from-navy to-blue"
          width={400}
          height={400}
          className="w-full h-full"
        />
        {/* gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy/60 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-navy">{patron.name}</h3>
        <p className="text-blue font-semibold text-sm mt-1 mb-4">
          {patron.title}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed flex-1">
          {patron.bio}
        </p>
      </div>
    </div>
  );
}

function VCCard({ person }: { person: VCDirector }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="relative h-52 w-full bg-slate-100">
        <PhotoWithFallback
          src={person.photo}
          alt={person.name}
          initials={person.initials}
          avatarBg="from-navy to-blue"
          width={320}
          height={320}
          className="w-full h-full"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-navy leading-snug">
          {person.name}
        </h3>
        <p className="text-blue font-semibold text-sm mt-0.5">{person.role}</p>
        <span
          className={`mt-3 self-start px-3 py-1 rounded-full text-xs font-semibold ${person.campusBadge}`}
        >
          {person.campus}
        </span>
      </div>
    </div>
  );
}

function BOGCard({ member }: { member: BOGMember }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white shadow-sm overflow-hidden flex flex-col items-center p-5 text-center">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 flex-shrink-0 relative">
        <PhotoWithFallback
          src={member.photo}
          alt={member.name}
          initials={member.initials}
          avatarBg={member.avatarBg}
          width={80}
          height={80}
          className="w-full h-full rounded-full"
        />
      </div>
      <h3 className="text-sm font-bold text-navy leading-snug">{member.name}</h3>
      <p className="text-xs text-slate-500 mt-1 leading-snug">{member.role}</p>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">
            IILM University
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Our Leadership
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Guided by distinguished founders, accomplished academics, and
            seasoned industry leaders — IILM University is built on a legacy of
            excellence and governed by visionary minds.
          </p>
        </div>
      </section>

      {/* Chancellor & Pro Chancellor */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">
              Founders
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Chancellor &amp; Pro Chancellor
            </h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              The founding patrons whose vision has shaped IILM University into
              one of India&apos;s foremost private universities.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {patrons.map((patron) => (
              <PatronCard key={patron.name} patron={patron} />
            ))}
          </div>
        </div>
      </section>

      {/* Vice Chancellors & Directors */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">
              Academic Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Vice Chancellors &amp; Directors
            </h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              Senior academic leaders who drive IILM&apos;s strategic and
              educational agenda across all campuses.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vcDirectors.map((person) => (
              <VCCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      {/* Board of Governors */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">
              Governance
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Board of Governors
            </h2>
            <p className="text-slate-600 mt-4 max-w-xl mx-auto">
              Distinguished leaders from government, defence, judiciary, and
              industry who provide strategic oversight and institutional
              governance at IILM&apos;s Lodhi Road campus.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {bogMembers.map((member) => (
              <BOGCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">
            Admissions 2026
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Join IILM — led by leaders who<br />have shaped India
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Study under the mentorship of accomplished academics and guided by a
            board of India&apos;s finest minds.
          </p>
          <Link
            href="/admissions"
            className="inline-block px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
          >
            Apply Now →
          </Link>
        </div>
      </section>
    </>
  );
}
