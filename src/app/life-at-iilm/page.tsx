import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life at IILM | Campus Life, Clubs, Residences & More",
  description:
    "Discover campus life at IILM University — residences, clubs & societies, food services, events, sports, and the vibrant student community.",
};

const clubs = [
  { name: "Entrepreneurship Cell (ECELL)", emoji: "🚀", desc: "Pitch your startup, compete in business plan contests, and connect with mentors and investors." },
  { name: "Debate & MUN Society", emoji: "🎙️", desc: "Sharpen your oratory and negotiation skills at regional and national MUN conferences." },
  { name: "Photography Club", emoji: "📸", desc: "Capture campus life, run workshops, and exhibit work at the annual IILM Photo Walk." },
  { name: "Cultural Committee", emoji: "🎭", desc: "Organise fests, dance, theatre, and music events that define the IILM social calendar." },
  { name: "Sports Committee", emoji: "🏆", desc: "Inter-college tournaments, yoga, cricket, football, basketball, and more." },
  { name: "Community Service Club", emoji: "🤝", desc: "NGO partnerships, teaching drives, environmental campaigns, and social impact projects." },
  { name: "Finance & Investment Club", emoji: "📊", desc: "Stock market simulations, finance case competitions, and guest talks from industry leaders." },
  { name: "Literary Society", emoji: "📚", desc: "Book clubs, creative writing workshops, and the annual literary magazine." },
];

const residences = [
  {
    campus: "IILM Gurugram",
    desc: "Modern fully-furnished hostel blocks with separate facilities for men and women. Air-conditioned rooms, 24/7 security, Wi-Fi, and housekeeping included.",
    amenities: ["AC Rooms (Twin & Single)", "24/7 Security", "High-speed Wi-Fi", "Laundry Services", "Common Room & TV Lounge", "In-campus Cafeteria"],
  },
  {
    campus: "IILM Greater Noida",
    desc: "Spacious residential campus with lush green surroundings. Multiple hostel blocks with sports facilities and a dedicated student common area.",
    amenities: ["Semi-furnished & Fully-furnished Options", "Sports Complex Access", "Reading Room", "24/7 Medical Support", "CCTV Surveillance", "Mess & Cafeteria"],
  },
  {
    campus: "IILM Lodhi Road, Delhi",
    desc: "Day-scholar campus in the heart of Delhi with facilitated PG accommodations nearby. Canteen and recreation areas on campus.",
    amenities: ["On-campus Canteen", "Recreation Room", "Library Access", "Event Spaces", "Transport Coordination"],
  },
];

const events = [
  { name: "Chrysalis", type: "Annual Cultural Fest", desc: "Three days of music, dance, drama, art, and competitions — the biggest student event of the year." },
  { name: "Manthan", type: "Management Conclave", desc: "Industry leaders, alumni, and students converge for panel discussions on the future of business." },
  { name: "Technova", type: "Tech & Innovation Fest", desc: "Hackathons, coding contests, robotics, and AI showcases from across Delhi NCR." },
  { name: "E-Summit", type: "Entrepreneurship Summit", desc: "Startup pitches, investor meets, and workshops with successful founders and VCs." },
  { name: "Sports Week", type: "Annual Sports Event", desc: "Inter-batch and inter-campus tournaments across cricket, football, basketball, badminton, and more." },
  { name: "Legal Aid Moot", type: "Law School Event", desc: "National moot court competition that brings law students from top universities across India." },
];

export default function LifeAtIilmPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Life at IILM</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            More Than a Degree.<br />
            <span className="text-gold-gradient">A Life Well Lived.</span>
          </h1>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            IILM is a place where you grow inside and outside the classroom. From vibrant cultural fests to impactful community work — life here is never ordinary.
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "50+", label: "Clubs & Societies" },
              { value: "20+", label: "Annual Events" },
              { value: "3", label: "Residential Campuses" },
              { value: "12,000+", label: "Students" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-navy mb-1">{s.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section id="clubs" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Student Life</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Clubs & Societies</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              With 50+ active clubs, there&apos;s a community for every passion and purpose at IILM.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clubs.map((club) => (
              <div key={club.name} className="card-hover p-6 rounded-2xl border border-slate-100 bg-white hover:border-navy/20">
                <div className="text-3xl mb-4">{club.emoji}</div>
                <h3 className="text-sm font-bold text-navy mb-2">{club.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{club.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Events & Fests</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">A Calendar You&apos;ll Never Forget</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((event) => (
              <div key={event.name} className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold/30">
                <div className="inline-block px-3 py-1 bg-gold/15 rounded-full text-gold text-xs font-semibold mb-4">
                  {event.type}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{event.name}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{event.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residences */}
      <section id="residences" className="bg-slate py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Accommodation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Residences & Hostels</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              Safe, comfortable, and vibrant residential life — so you can focus on learning, growing, and making memories.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {residences.map((r) => (
              <div key={r.campus} className="card-hover bg-white rounded-2xl overflow-hidden border border-slate-100">
                <div className="h-2 bg-gradient-to-r from-navy to-blue" />
                <div className="p-7">
                  <h3 className="text-lg font-bold text-navy mb-2">{r.campus}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{r.desc}</p>
                  <ul className="space-y-2">
                    {r.amenities.map((a) => (
                      <li key={a} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food */}
      <section id="food" className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Food Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">Fuel for Your Mind</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            IILM cafeterias and mess facilities serve a variety of cuisines — from North Indian comfort food to fast food, snacks, and beverages. Our food courts are open from early morning to late evening, with vegetarian and non-vegetarian options available daily.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 text-left">
            {[
              { icon: "🍱", title: "Mess / Dining Hall", desc: "Full meal plans with breakfast, lunch, and dinner served daily in hostel messes." },
              { icon: "☕", title: "Campus Cafeteria", desc: "Quick bites, beverages, snacks, and light meals throughout the day." },
              { icon: "🛒", title: "Mini-mart & Convenience", desc: "On-campus stores stocked with essentials, stationery, and daily items." },
            ].map((f) => (
              <div key={f.title} className="p-5 rounded-2xl bg-slate border border-slate-100">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-navy mb-2 text-sm">{f.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
            Ready to Be Part of the IILM Community?
          </h2>
          <p className="text-white/60 mb-10">
            12,000+ students. 50+ clubs. 20+ events per year. This is where your story begins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-gold text-navy font-semibold rounded-full hover:bg-gold-light transition-all"
            >
              Apply for 2026
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-white/25 text-white rounded-full hover:bg-white/10 transition-all"
            >
              Visit a Campus
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
