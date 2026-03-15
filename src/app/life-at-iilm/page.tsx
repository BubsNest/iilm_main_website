import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life at IILM | Campus Life, Clubs, Residences & More",
  description:
    "Discover campus life at IILM University — residences, clubs & societies, food services, events, sports, and the vibrant student community.",
};

const clubs = [
  { name: "Entrepreneurship Cell (ECELL)", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.95 14.95 0 010-2.17m0 2.17l-5.84 2.56m5.84-4.73a14.95 14.95 0 00-2.41-7.24M9.75 19.75v-4.82m0 0a6 6 0 01-5.84-7.38m5.84 7.38l5.84-2.56M3.91 9.63a14.95 14.95 0 012.41-7.24" /></svg>), desc: "Pitch your startup, compete in business plan contests, and connect with mentors and investors." },
  { name: "Debate & MUN Society", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" /></svg>), desc: "Sharpen your oratory and negotiation skills at regional and national MUN conferences." },
  { name: "Photography Club", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" /></svg>), desc: "Capture campus life, run workshops, and exhibit work at the annual IILM Photo Walk." },
  { name: "Cultural Committee", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>), desc: "Organise fests, dance, theatre, and music events that define the IILM social calendar." },
  { name: "Sports Committee", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" /></svg>), desc: "Inter-college tournaments, yoga, cricket, football, basketball, and more." },
  { name: "Community Service Club", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>), desc: "NGO partnerships, teaching drives, environmental campaigns, and social impact projects." },
  { name: "Finance & Investment Club", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>), desc: "Stock market simulations, finance case competitions, and guest talks from industry leaders." },
  { name: "Literary Society", icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>), desc: "Book clubs, creative writing workshops, and the annual literary magazine." },
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
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Life at IILM</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            More Than a Degree.<br />
            <span className="text-blue-gradient">A Life Well Lived.</span>
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
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Student Life</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Clubs & Societies</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto">
              With 50+ active clubs, there&apos;s a community for every passion and purpose at IILM.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clubs.map((club) => (
              <div key={club.name} className="card-hover p-6 rounded-2xl border border-slate-100 bg-white hover:border-navy/20">
                <div className="text-navy mb-4">{club.icon}</div>
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
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Events & Fests</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">A Calendar You&apos;ll Never Forget</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((event) => (
              <div key={event.name} className="card-hover p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-maroon/30">
                <div className="inline-block px-3 py-1 bg-maroon/15 rounded-full text-blue text-xs font-semibold mb-4">
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
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Accommodation</p>
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
                        <svg className="w-3.5 h-3.5 text-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Food Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">Fuel for Your Mind</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            IILM cafeterias and mess facilities serve a variety of cuisines — from North Indian comfort food to fast food, snacks, and beverages. Our food courts are open from early morning to late evening, with vegetarian and non-vegetarian options available daily.
          </p>
          <div className="grid sm:grid-cols-3 gap-5 text-left">
            {[
              { icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0l-1.5-.75M8.25 19.5v-.192c0-.983.658-1.823 1.623-2.025a48.174 48.174 0 016.254 0c.965.202 1.623 1.042 1.623 2.025V19.5" /></svg>), title: "Mess / Dining Hall", desc: "Full meal plans with breakfast, lunch, and dinner served daily in hostel messes." },
              { icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>), title: "Campus Cafeteria", desc: "Quick bites, beverages, snacks, and light meals throughout the day." },
              { icon: (<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>), title: "Mini-mart & Convenience", desc: "On-campus stores stocked with essentials, stationery, and daily items." },
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
              className="px-8 py-3.5 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
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
