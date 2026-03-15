import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "12,000+", label: "Students" },
  { value: "400+", label: "Hiring Companies" },
  { value: "30+", label: "Global Partners" },
  { value: "30+", label: "Years of Excellence" },
];

const schools = [
  {
    name: "Law School",
    desc: "Cutting-edge legal education with a focus on contemporary law, policy, and governance.",
    icon: "⚖️",
    href: "/courses#law",
  },
  {
    name: "School of Management",
    desc: "MBA and management programmes designed for tomorrow's business leaders.",
    icon: "📈",
    href: "/courses#management",
  },
  {
    name: "School of Engineering",
    desc: "Hands-on engineering education powered by industry partnerships and research labs.",
    icon: "⚙️",
    href: "/courses#engineering",
  },
  {
    name: "School of CSE",
    desc: "Computer Science & Engineering with AI, Data Science, and Cloud Computing tracks.",
    icon: "💻",
    href: "/courses#cse",
  },
  {
    name: "Social Sciences & Liberal Arts",
    desc: "Interdisciplinary education that builds critical thinkers and changemakers.",
    icon: "🌐",
    href: "/courses#social-sciences",
  },
  {
    name: "Hospitality & Services",
    desc: "Industry-integrated hospitality management for the modern service economy.",
    icon: "🏨",
    href: "/courses#hospitality",
  },
];

const campuses = [
  {
    name: "IILM University, Gurugram",
    address: "Plot No. 69-71, Golf Course Road, Sector 53",
    desc: "Our flagship university campus, home to Law, Management, Engineering, and more.",
    phone: "+91-8065905223",
    email: "admissions.iilmu@iilm.edu",
    href: "/campuses#gurugram",
  },
  {
    name: "IILM University, Greater Noida",
    address: "Plot No. 16-18, Knowledge Park II, UP – 201306",
    desc: "A dynamic academic campus with state-of-the-art infrastructure and residential facilities.",
    phone: "+91-8065905220",
    email: "admissions.gn@iilm.edu",
    href: "/campuses#greater-noida",
  },
  {
    name: "IILM Lodhi Road, New Delhi",
    address: "3, Lodhi Institutional Area, New Delhi – 110003",
    desc: "Delhi's premier PGDM campus, centrally located in the heart of the capital.",
    phone: "+91-8065905222",
    email: "info.ubs@iilm.edu",
    href: "/campuses#lodhi-road",
  },
];

const whyItems = [
  {
    title: "AI-Integrated Curriculum",
    desc: "AI skills are embedded across every programme. At IILM, AI is not optional — it's the degree.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    title: "400+ Hiring Companies",
    desc: "Top recruiters from Fortune 500 to fast-growing startups actively hire from IILM campuses.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
  {
    title: "30+ Global University Partners",
    desc: "Study abroad, international transfers, and global immersion programmes with top universities worldwide.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Startup Incubator on Campus",
    desc: "ECELL and the Centre for Entrepreneurship & Innovation empower students to build and launch ventures.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Merit Scholarships",
    desc: "Generous merit and need-based scholarships make quality education accessible to deserving students.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    ),
  },
  {
    title: "3 Campuses, 1 Network",
    desc: "Delhi, Gurugram, and Greater Noida — a connected ecosystem across the most vibrant education corridor in India.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

const centres = [
  {
    name: "Centre for Emotional Intelligence",
    desc: "Developing self-aware, empathetic leaders through structured EQ programmes.",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
  },
  {
    name: "Centre for Teaching, Research & Learning",
    desc: "Advancing pedagogy and research to keep IILM at the forefront of academic excellence.",
    color: "from-violet-50 to-purple-50",
    border: "border-violet-100",
  },
  {
    name: "Centre for Entrepreneurship & Innovation",
    desc: "ECELL — nurturing student entrepreneurs with mentorship, funding, and incubation support.",
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-100",
  },
  {
    name: "Centre for Technology",
    desc: "AI, ML, data science, and emerging tech applied to real-world problems and research.",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://iilm.edu/demo2020/wp-content/uploads/2023/07/pagheadr0_11zon.jpg"
            alt="IILM University Campus"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/75 to-navy/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-32">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold text-xs font-semibold tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Admissions Open 2026
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Education for the{" "}
            <span className="text-gold-gradient">Age of AI</span>{" "}
            Intelligence
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed">
            Every student. Every programme. Every campus.
          </p>
          <p className="text-base text-white/50 mb-3">
            AI skills are not optional at IILM — they are the degree.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10 text-sm text-white/50">
            {["Gurugram", "Greater Noida", "New Delhi"].map((city, i) => (
              <span key={city} className="flex items-center gap-2">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-white/30" />}
                <span>{city}</span>
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/courses"
              className="px-8 py-3.5 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all"
            >
              Explore Programs
            </Link>
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-gold text-navy font-semibold hover:bg-gold-light transition-all shadow-lg shadow-gold/25 hover:shadow-gold/40"
            >
              Apply Now →
            </Link>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-navy/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5">{s.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT STRIP ─────────────────────────────────── */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">
                About IILM
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6">
                30 Years of Shaping India&apos;s Future Leaders
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                IILM University is one of India&apos;s most forward-thinking universities, offering integrated programmes across law, management, engineering, technology, social sciences, and hospitality. With three campuses in the Delhi NCR region, IILM combines academic rigour with real-world application.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Backed by NAAC accreditation and industry partnerships with 400+ companies, IILM has consistently ranked among top private universities in North India.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all"
              >
                Learn more about IILM
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://iilm.edu/demo2020/wp-content/uploads/2022/03/Accredations.png"
                  alt="IILM Accreditations"
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain bg-white p-6"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gold rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-navy font-bold text-2xl">NAAC</div>
                <div className="text-navy/70 text-xs">Accredited</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCHOOLS ──────────────────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Academic Schools</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Six Schools, Endless Possibilities</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school) => (
              <Link
                key={school.name}
                href={school.href}
                className="group card-hover p-7 rounded-2xl border border-slate-100 bg-white hover:border-navy/20"
              >
                <div className="text-3xl mb-4">{school.icon}</div>
                <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-blue transition-colors">
                  {school.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{school.desc}</p>
                <div className="mt-5 text-xs font-semibold text-gold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IILM ─────────────────────────────────────── */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Why IILM in 2026</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for the World You&apos;re Entering</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item) => (
              <div key={item.title} className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/8">
                <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPUSES ─────────────────────────────────────── */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Our Campuses</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Three Campuses Across Delhi NCR</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {campuses.map((campus) => (
              <div key={campus.name} className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col">
                <div className="h-2 bg-gradient-to-r from-navy to-blue" />
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-navy mb-1">{campus.name}</h3>
                  <p className="text-xs text-gold font-medium mb-3">{campus.address}</p>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-6">{campus.desc}</p>
                  <div className="space-y-2 text-sm border-t border-slate-100 pt-5">
                    <a href={`tel:${campus.phone}`} className="flex items-center gap-2 text-slate-600 hover:text-navy transition-colors">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {campus.phone}
                    </a>
                    <a href={`mailto:${campus.email}`} className="flex items-center gap-2 text-slate-600 hover:text-navy transition-colors">
                      <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {campus.email}
                    </a>
                  </div>
                  <Link href={campus.href} className="mt-5 block text-center py-2.5 rounded-xl border border-navy/20 text-navy text-sm font-medium hover:bg-navy hover:text-white transition-all">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLACEMENTS BANNER ────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://iilm.edu/demo2020/wp-content/uploads/2023/07/iilmu-placement-banner_11zon-2.jpg"
            alt="IILM Placements"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Placements 2025</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            400+ Companies. Limitless Careers.
          </h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            From Fortune 500 corporations to high-growth startups — IILM's placement network connects you to opportunities that match your ambition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/placements"
              className="px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-all"
            >
              View Placement Records
            </Link>
            <Link
              href="/admissions"
              className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

      {/* ── CENTRES OF EXCELLENCE ────────────────────────── */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
              Centres of Excellence
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">
              Where Research Meets Real Impact
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {centres.map((c) => (
              <div
                key={c.name}
                className={`card-hover p-6 rounded-2xl bg-gradient-to-br ${c.color} border ${c.border}`}
              >
                <h3 className="text-base font-semibold text-navy mb-3">{c.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL CONNECT ───────────────────────────────── */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Global Connect</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-tight mb-6">
                Your Degree. Global Reach.
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                IILM's 30+ global university partnerships open doors to study-abroad programmes, international transfer pathways, dual degrees, and summer schools across Europe, North America, and Asia.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Semester exchange programmes",
                  "International transfer pathways",
                  "Study abroad opportunities",
                  "Global faculty and guest lectures",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 text-sm">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/about#global"
                className="inline-flex items-center gap-2 text-navy font-semibold hover:gap-3 transition-all"
              >
                Explore Global Connect
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "30+", label: "Partner Universities" },
                { number: "15+", label: "Countries" },
                { number: "500+", label: "Study Abroad Alumni" },
                { number: "100%", label: "Visa Support" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card-hover bg-white rounded-2xl p-6 border border-slate-100 text-center"
                >
                  <div className="text-3xl font-bold text-navy mb-1">{item.number}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ────────────────────────────────────── */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Admissions 2026</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Start Your IILM Journey Today
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Join 12,000+ students building the future. Applications for 2026 intake are open now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-gold text-navy font-bold rounded-full text-base hover:bg-gold-light transition-all shadow-lg shadow-gold/25"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-white/25 text-white rounded-full text-base hover:bg-white/10 transition-all"
            >
              Talk to Admissions
            </Link>
          </div>
          <p className="mt-8 text-white/40 text-sm">
            Questions? WhatsApp us at{" "}
            <a href="https://wa.me/917011772713" className="text-white/60 hover:text-white underline">
              +91-7011772713
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
