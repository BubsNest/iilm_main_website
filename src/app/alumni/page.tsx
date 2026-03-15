import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni Network | IILM University",
  description:
    "IILM University alumni — 50,000+ leaders across 30+ countries and 15+ industries. Connect with the global IILM alumni community.",
};

const testimonials = [
  {
    name: "Rohit Mehra",
    batch: "MBA 2015",
    role: "Founder & CEO",
    company: "TechVentures India",
    quote:
      "IILM gave me the foundation to build a company valued at ₹50 crore. The management education, faculty mentorship, and the connections I built on campus were the real seed capital of my entrepreneurial journey.",
  },
  {
    name: "Adv. Priya Kapoor",
    batch: "BA LLB 2018",
    role: "Senior Associate",
    company: "Luthra & Luthra Law Offices",
    quote:
      "The Moot Court at IILM Law School prepared me for the courtroom like nothing else could. My first senior partner told me I walked in with more confidence than most associates three years my senior.",
  },
  {
    name: "Arjun Tiwari",
    batch: "B.Tech CSE 2022",
    role: "Software Engineer",
    company: "Google",
    quote:
      "My IILM engineering degree and the AI curriculum got me my first job at Google. The labs, the projects, the faculty — everything was genuinely at par with what top tech companies look for.",
  },
  {
    name: "Dr. Sunita Rao",
    batch: "MBA 2010",
    role: "VP Human Resources",
    company: "Infosys",
    quote:
      "The faculty at IILM were mentors, not just teachers. Dr. Sharma changed the way I think about people and organisations — an influence I carry with me every day as a HR leader.",
  },
  {
    name: "Kavya Sharma",
    batch: "BBA 2019",
    role: "Founder",
    company: "GreenHarvest AgriTech",
    quote:
      "I built my first startup in the IILM incubator with no money and a big idea. Three years later, GreenHarvest has raised ₹1.2 crore and works with 3,000 farmers. IILM made me believe it was possible.",
  },
  {
    name: "Rahul Nair",
    batch: "MBA 2021",
    role: "Global Strategy Manager",
    company: "Unilever UK",
    quote:
      "IILM's global programme allowed me to study in the UK for a semester — it changed my career trajectory completely. The international exposure, the network, and the confidence it gave me are priceless.",
  },
];

const alumniStats = [
  { value: "50,000+", label: "Alumni Worldwide" },
  { value: "30+", label: "Countries" },
  { value: "15+", label: "Industries" },
  { value: "100+", label: "C-Suite Leaders" },
  { value: "200+", label: "Entrepreneurs" },
];

const notableAlumni = [
  { initials: "RM", name: "Rohit Mehra", batch: "MBA 2015", role: "Founder & CEO, TechVentures India" },
  { initials: "PK", name: "Priya Kapoor", batch: "BA LLB 2018", role: "Senior Associate, Luthra & Luthra" },
  { initials: "AT", name: "Arjun Tiwari", batch: "B.Tech CSE 2022", role: "Software Engineer, Google" },
  { initials: "SR", name: "Dr. Sunita Rao", batch: "MBA 2010", role: "VP Human Resources, Infosys" },
  { initials: "KS", name: "Kavya Sharma", batch: "BBA 2019", role: "Founder, GreenHarvest AgriTech" },
  { initials: "RN", name: "Rahul Nair", batch: "MBA 2021", role: "Global Strategy Manager, Unilever UK" },
];

const alumniServices = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Alumni Association",
    desc: "Each campus has an active alumni association organising reunions, networking events, and community activities throughout the year.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Mentorship Programme",
    desc: "Alumni can mentor current students — a one-hour monthly commitment that helps the next generation and keeps alumni connected to the campus community.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
    title: "Campus Returns",
    desc: "Guest lectures, convocation speeches, and campus visits — alumni are always welcome to come back and share their expertise with current students.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Alumni Job Board",
    desc: "Exclusive alumni-only job board where organisations owned or managed by alumni post opportunities for IILM graduates.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Networking Events",
    desc: "Annual alumni meets in major cities — Delhi NCR, Mumbai, Bangalore, and internationally — keeping the network active and connected.",
  },
];

const alumniPortals = [
  {
    campus: "Lodhi Road (New Delhi)",
    url: "alumnind.iilm.edu",
    href: "https://alumnind.iilm.edu",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    campus: "Gurugram Campus",
    url: "alumniggn.iilm.edu",
    href: "https://alumniggn.iilm.edu",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    campus: "Greater Noida Campus",
    url: "alumnign.iilm.edu",
    href: "https://alumnign.iilm.edu",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

export default function AlumniPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">IILM Alumni</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            IILM Alumni —<br />
            <span className="text-blue-gradient">50,000+ Leaders Across the World</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed mb-10">
            Founders. Lawyers. Engineers. Policy makers. Artists. Scientists. Over 30 years, IILM has produced leaders who are shaping every sector across every continent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#voices" className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all">
              Alumni Stories
            </Link>
            <Link href="#portals" className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white/60 transition-all">
              Alumni Portals
            </Link>
          </div>
        </div>
      </section>

      {/* Alumni Network Overview */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">A Global Community</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">The IILM Alumni Network</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-lg text-center max-w-3xl mx-auto mb-10">
            With over 50,000 graduates across 30+ countries and 15+ industries, the IILM alumni network is one of India&apos;s most extensive and active graduate communities. IILM maintains campus-specific alumni portals across all five campuses — ensuring that connections remain campus-specific and deeply personal.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {alumniPortals.map((portal) => (
              <Link
                key={portal.campus}
                href={portal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover p-6 rounded-2xl border border-slate-100 bg-white hover:border-navy/20 text-center block"
              >
                <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue mb-3 mx-auto">
                  {portal.icon}
                </div>
                <h3 className="font-bold text-navy mb-1 text-sm">{portal.campus}</h3>
                <p className="text-xs text-blue underline">{portal.url}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="voices" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Alumni Voices</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Voices of Excellence</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">From boardrooms to courtrooms, from startups to multinationals — IILM alumni are making their mark everywhere.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-hover p-7 rounded-2xl border border-slate-200 bg-white flex flex-col">
                <div className="text-4xl mb-4">&ldquo;</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic flex-1">{t.quote}</p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-navy to-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.batch}</div>
                    <div className="text-xs text-blue font-medium">{t.role} @ {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni by Numbers */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Alumni by Numbers</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">The Reach of the IILM Network</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {alumniStats.map((s) => (
              <div key={s.label} className="card-hover text-center p-7 rounded-2xl border border-slate-100 bg-white min-w-[160px] hover:border-navy/20">
                <div className="text-3xl sm:text-4xl font-bold text-navy mb-2">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Celebrating Excellence</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Notable Alumni</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {notableAlumni.map((alumni) => (
              <div key={alumni.name} className="card-hover p-6 rounded-2xl bg-white border border-slate-200 flex items-center gap-4 hover:border-navy/20">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy to-blue flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {alumni.initials}
                </div>
                <div>
                  <div className="font-bold text-navy">{alumni.name}</div>
                  <div className="text-xs text-blue font-medium mb-0.5">{alumni.batch}</div>
                  <div className="text-xs text-slate-500">{alumni.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Stay Connected</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Alumni Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Graduating from IILM is just the beginning. Our alumni services keep you connected, growing, and giving back throughout your career.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniServices.map((service) => (
              <div key={service.title} className="card-hover p-6 rounded-2xl border border-slate-100 bg-white hover:border-navy/20">
                <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue mb-4">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Networks CTA */}
      <section id="portals" className="bg-navy py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Get Connected</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Alumni Networks & Portals</h2>
            <p className="text-white/55 max-w-2xl mx-auto">
              Whether you graduated last year or in 1993, there is an IILM alumni community for you. Find your campus portal, join the LinkedIn group, or subscribe to our newsletter.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {alumniPortals.map((portal) => (
              <Link
                key={portal.campus}
                href={portal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-maroon/30 text-center block"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-3 mx-auto">
                  {portal.icon}
                </div>
                <div className="font-semibold text-white text-sm mb-1">{portal.campus}</div>
                <div className="text-xs text-blue">{portal.url}</div>
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://linkedin.com/school/iilm-university"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all text-center"
            >
              LinkedIn Alumni Group
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-white/30 text-white rounded-full hover:border-white/60 transition-all text-center"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
