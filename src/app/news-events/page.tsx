import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import SubscribeForm from "./SubscribeForm";

export const metadata: Metadata = {
  title: "News & Events | IILM University",
  description:
    "Stay updated on the latest news, events, and announcements from IILM University — across Gurugram, Greater Noida, Lodhi Road, Lucknow, and Jaipur campuses.",
};

const upcomingEvents = [
  {
    date: "15 Apr",
    month: "April 2026",
    category: "Academic",
    categoryColor: "bg-blue/10 text-blue",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/LEADING-IN-A-CHANGING-WORLD-for-web-700x450.jpg",
    title: "IILM Annual Convocation 2026",
    desc: "A momentous occasion celebrating the graduating class of 2026 across all IILM campuses. Chief Guest announcement to follow.",
    location: "All Campuses — Gurugram, Greater Noida, Lodhi Road, Lucknow & Jaipur",
    cta: "Register",
  },
  {
    date: "20 Mar",
    month: "March 2026",
    category: "Industry",
    categoryColor: "bg-maroon/10 text-maroon",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/Bid-Squid-for-web-700x450.jpg",
    title: "Manthan — Management Conclave 2026",
    desc: "IILM's annual management conclave featuring CEOs, policymakers, and thought leaders discussing the future of Indian business.",
    location: "IILM Gurugram Campus",
    cta: "Register",
  },
  {
    date: "5 Apr",
    month: "April 2026",
    category: "Academic",
    categoryColor: "bg-blue/10 text-blue",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/Growth-OF-AI-700x450.jpg",
    title: "Technova — Tech Fest 2026",
    desc: "IILM Greater Noida's annual technology festival — hackathons, robotics competitions, AI showcases, and industry tech talks.",
    location: "IILM Greater Noida Campus",
    cta: "Register",
  },
  {
    date: "12 Apr",
    month: "April 2026",
    category: "Cultural",
    categoryColor: "bg-green-100 text-green-700",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/International-Womens-Day-web-700x450.jpg",
    title: "Chrysalis — Cultural Fest 2026",
    desc: "IILM's flagship cultural festival celebrating music, dance, theatre, art, and student creativity. 3 days, 1,000+ participants.",
    location: "IILM Gurugram Campus",
    cta: "Register",
  },
  {
    date: "30 Mar",
    month: "March 2026",
    category: "Academic",
    categoryColor: "bg-blue/10 text-blue",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/Gender-Budgeting-for-web-700x450.jpg",
    title: "National Moot Court Competition",
    desc: "IILM Law School hosts its annual national moot court — teams from 40+ law schools competing in constitutional and corporate law moots.",
    location: "IILM Gurugram Campus",
    cta: "Register",
  },
  {
    date: "1–7 May",
    month: "May 2026",
    category: "Industry",
    categoryColor: "bg-maroon/10 text-maroon",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/WEBINAR-700x450.jpg",
    title: "Global Connect Week",
    desc: "A week of international industry interaction — virtual sessions with partner universities, alumni abroad, and global company representatives.",
    location: "All Campuses (Hybrid)",
    cta: "Register",
  },
];

const newsItems = [
  {
    date: "March 2026",
    category: "Academic",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/Growth-OF-AI-700x450.jpg",
    headline: "IILM launches AI-integrated curriculum across all programmes",
    desc: "IILM University becomes one of the first universities in Delhi NCR to embed AI tools and literacy into every programme — from Law to Psychology to Engineering.",
    link: "#",
  },
  {
    date: "January 2026",
    category: "Partnership",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/LEADING-IN-A-CHANGING-WORLD-for-web-700x450.jpg",
    headline: "IILM signs MoU with CII for MBA in Logistics programme",
    desc: "A historic partnership with the Confederation of Indian Industry launches a first-of-its-kind MBA in Logistics & Supply Chain Management at IILM Gurugram.",
    link: "#",
  },
  {
    date: "March 2026",
    category: "Research",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/research-Impact-700x450.jpg",
    headline: "IILM Gurugram ranked in Top 50 Private Universities in India",
    desc: "IILM University, Gurugram has been recognised in the Top 50 Private Universities in India by a leading national ranking body — affirming its academic standing.",
    link: "#",
  },
  {
    date: "March 2026",
    category: "Entrepreneurship",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/Bid-Squid-for-web-700x450.jpg",
    headline: "IILM student startup raises ₹1 crore in seed funding at E-Summit",
    desc: "FarmLink, an AgriTech startup incubated at the IILM ECELL, secured ₹1 crore in seed funding from an angel investor during the annual E-Summit pitch event.",
    link: "#",
  },
  {
    date: "March 2026",
    category: "Academic",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/03/Gender-Budgeting-for-web-700x450.jpg",
    headline: "IILM Greater Noida opens state-of-the-art AI & Cloud Computing Lab",
    desc: "A ₹2 crore investment in GPU infrastructure, cloud workstations, and AI development tools — making IILM Greater Noida one of the best-equipped tech campuses in the NCR.",
    link: "#",
  },
  {
    date: "February 2026",
    category: "Alumni",
    image: "https://iilm.edu/demo2020/wp-content/uploads/2026/02/National-Science-day-700x450.jpg",
    headline: "IILM alumni network crosses 50,000 members across 30 countries",
    desc: "The IILM alumni community has reached a milestone of 50,000 registered members — spanning 30+ countries and representing 15+ industry sectors globally.",
    link: "#",
  },
];

const categoryBadgeColor: Record<string, string> = {
  Academic: "bg-blue/10 text-blue",
  Partnership: "bg-navy/10 text-navy",
  Rankings: "bg-maroon/10 text-maroon",
  Research: "bg-maroon/10 text-maroon",
  Entrepreneurship: "bg-green-100 text-green-700",
  Infrastructure: "bg-yellow-100 text-yellow-700",
  Alumni: "bg-purple-100 text-purple-700",
};

export default function NewsEventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-blue to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">News & Events</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            News & Events at IILM —<br />
            <span className="text-blue-gradient">Stay Connected</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            From flagship summits to national competitions — IILM is always in motion. Stay up to date on everything happening across our campuses.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Featured Event</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Don&apos;t Miss This</h2>
          </div>
          <div className="card-hover rounded-2xl border-2 border-maroon bg-white overflow-hidden">
            <div className="bg-maroon p-4 flex items-center justify-between">
              <span className="text-white font-bold text-sm uppercase tracking-wider">Featured Event 2026</span>
              <span className="text-white/80 text-xs">Registration Open</span>
            </div>
            <div className="p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-shrink-0 text-center">
                  <div className="bg-navy text-white rounded-2xl p-5 min-w-[110px]">
                    <div className="text-3xl font-bold">28–29</div>
                    <div className="text-sm text-white/70">March 2026</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-xs font-bold bg-maroon/10 text-maroon px-3 py-1 rounded-full">Entrepreneurship</span>
                    <span className="text-xs font-bold bg-blue/10 text-blue px-3 py-1 rounded-full">Flagship Event</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-3">Annual E-Summit 2026</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    India&apos;s leading student startup summit returns to the IILM Gurugram campus for its biggest edition yet. Two days of investor pitches, founder panels, startup exhibitions, hackathons, and networking — bringing together 500+ student entrepreneurs, 50+ investors, and 30+ industry mentors.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
                    <span className="flex items-center gap-1.5"><span className="text-navy font-semibold"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg></span> IILM Gurugram Campus</span>
                    <span className="flex items-center gap-1.5"><span className="text-navy font-semibold"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span> 9:00 AM – 6:00 PM both days</span>
                    <span className="flex items-center gap-1.5"><span className="text-navy font-semibold"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a3 3 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" /></svg></span> Free entry for students</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
                  >
                    Register for E-Summit →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">What&apos;s Coming</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Upcoming Events</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Academic conclaves, cultural festivals, sports events, industry summits — something is always happening at IILM.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="card-hover rounded-2xl border border-slate-200 bg-white overflow-hidden hover:border-navy/20">
                <div className="relative h-40 overflow-hidden">
                  <Image src={event.image} alt={event.title} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${event.categoryColor} backdrop-blur-sm`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-navy text-white rounded-xl p-2.5 text-center min-w-[52px]">
                    <div className="text-sm font-bold leading-none">{event.date}</div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy mb-2 leading-snug">{event.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3">{event.desc}</p>
                  <div className="text-xs text-slate-400 mb-4 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg> {event.location}
                  </div>
                  <Link
                    href="/contact"
                    className="block text-center px-5 py-2.5 bg-maroon text-white text-xs font-semibold rounded-full hover:bg-maroon-light transition-all"
                  >
                    {event.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Latest Updates</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">Latest News from IILM</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Rankings, partnerships, student achievements, and campus developments — the IILM story in motion.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((news) => (
              <div key={news.headline} className="card-hover rounded-2xl border border-slate-100 bg-white hover:border-navy/20 flex flex-col overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <Image src={news.image} alt={news.headline} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryBadgeColor[news.category] ?? "bg-slate-100 text-slate-600"}`}>
                      {news.category}
                    </span>
                    <span className="text-xs text-slate-400">{news.date}</span>
                  </div>
                  <h3 className="font-bold text-navy mb-3 leading-snug flex-1">{news.headline}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{news.desc}</p>
                  <Link
                    href={news.link}
                    className="text-blue text-sm font-semibold hover:text-navy transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="bg-navy py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Stay Informed</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Subscribe to IILM Updates</h2>
          <p className="text-white/55 mb-10 leading-relaxed">
            Stay updated on IILM news, events, and admissions. No spam — just the most important updates from across our campuses.
          </p>
          <SubscribeForm />
          <p className="text-white/30 text-xs mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </>
  );
}
