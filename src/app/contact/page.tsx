import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact IILM University | Admissions, Enquiries & Campus Visits",
  description:
    "Get in touch with IILM University — campus addresses, phone numbers, email, WhatsApp, and admissions enquiry form.",
};

const campuses = [
  {
    name: "IILM University, Gurugram",
    address: "Plot No. 69-71, Golf Course Road, Sector 53, Gurugram, Haryana – 122003",
    programs: [
      { label: "MBA Enquiries", phone: "+91-8065905223" },
      { label: "Undergraduate", phone: "+91-8065905224" },
      { label: "Engineering", phone: "+91-8065905221" },
      { label: "BBA", phone: "+91-8065905222" },
      { label: "Postgraduate", phone: "+91-8065905225" },
    ],
    email: "admissions.iilmu@iilm.edu",
    mapQuery: "IILM+University+Gurugram",
  },
  {
    name: "IILM University, Greater Noida",
    address: "Plot No. 16-18, Knowledge Park II, Greater Noida, Uttar Pradesh – 201306",
    programs: [
      { label: "MBA Enquiries", phone: "+91-8065905223" },
      { label: "Undergraduate", phone: "+91-8065905224" },
      { label: "Engineering", phone: "+91-8065905220" },
      { label: "BBA", phone: "+91-8065905222" },
      { label: "Postgraduate", phone: "+91-8065905225" },
    ],
    email: "admissions.gn@iilm.edu",
    mapQuery: "IILM+University+Greater+Noida",
  },
  {
    name: "IILM Lodhi Road, New Delhi",
    address: "3, Lodhi Institutional Area, Lodhi Road, New Delhi – 110003",
    programs: [
      { label: "BBA Enquiries", phone: "+91-8065905222" },
      { label: "PGDM", phone: "+91-8065905223" },
    ],
    email: "info.ubs@iilm.edu",
    email2: "pgdm@iilm.edu",
    mapQuery: "IILM+Lodhi+Road+New+Delhi",
  },
];

const additionalCampuses = [
  { name: "IILM Academy, Jaipur", desc: "Higher learning campus in Jaipur, Rajasthan." },
  { name: "IILM Academy, Lucknow", desc: "Higher learning campus in Lucknow, Uttar Pradesh." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            We&apos;re Here to Help<br />
            <span className="text-blue-gradient">You Take the Next Step</span>
          </h1>
          <p className="text-lg text-white/65 max-w-xl mx-auto leading-relaxed mb-10">
            Whether you have questions about admissions, programmes, or campus life — our team is ready to assist.
          </p>

          {/* Quick contact */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917011772713"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="https://admissions.iilm.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all"
            >
              Apply Online →
            </Link>
          </div>
        </div>
      </section>

      {/* Campus Cards */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Our Locations</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy">Find Your Nearest Campus</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {campuses.map((campus) => (
              <div key={campus.name} className="card-hover bg-white rounded-2xl border border-slate-100 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-navy to-blue" />
                <div className="p-7">
                  <h3 className="text-lg font-bold text-navy mb-2">{campus.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{campus.address}</p>

                  <div className="space-y-2 mb-5">
                    {campus.programs.map((p) => (
                      <div key={p.label} className="flex items-center justify-between text-sm">
                        <span className="text-slate-500">{p.label}</span>
                        <a href={`tel:${p.phone}`} className="text-navy font-medium hover:text-blue transition-colors">
                          {p.phone}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-1">
                    <a href={`mailto:${campus.email}`} className="flex items-center gap-2 text-sm text-blue hover:text-navy transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {campus.email}
                    </a>
                    {campus.email2 && (
                      <a href={`mailto:${campus.email2}`} className="flex items-center gap-2 text-sm text-blue hover:text-navy transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {campus.email2}
                      </a>
                    )}
                    <a
                      href={`https://maps.google.com/?q=${campus.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-navy transition-colors mt-2"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      View on Maps ↗
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional campuses */}
          <div className="mt-8 p-6 rounded-2xl bg-slate border border-slate-200">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Additional Campuses</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {additionalCampuses.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  <div>
                    <span className="font-medium text-navy text-sm">{c.name}</span>
                    <span className="text-slate-400 text-sm"> — {c.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp + Admissions */}
      <section className="bg-slate py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-8 border border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">Chat on WhatsApp</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Get instant answers from our admissions team. Available Monday – Saturday, 9 AM – 6 PM.
              </p>
              <a
                href="https://wa.me/917011772713"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all text-sm"
              >
                +91-7011772713
              </a>
            </div>

            {/* Apply online */}
            <div className="bg-navy rounded-2xl p-8">
              <div className="w-12 h-12 rounded-2xl bg-maroon/20 flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Apply Online</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Submit your application in minutes through our secure admissions portal. Applications for 2026–27 are now open.
              </p>
              <Link
                href="https://admissions.iilm.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-maroon text-white font-semibold rounded-full hover:bg-maroon-light transition-all text-sm"
              >
                Go to Application Portal →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
