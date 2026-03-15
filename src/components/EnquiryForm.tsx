"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  programme: string;
  campus: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const PROGRAMME_OPTIONS = [
  "BBA",
  "MBA",
  "B.Tech CSE",
  "B.Tech CSE (AI & ML)",
  "B.Tech CSE (Data Science)",
  "B.Tech Engineering",
  "Law (BA LLB / BBA LLB)",
  "LL.M",
  "Psychology (BA / MA)",
  "Communication (BA / MA)",
  "Design (B.Des / M.Des)",
  "Liberal Arts",
  "Sciences (B.Sc. / M.Sc.)",
  "PGDBM",
  "Ph.D.",
  "Executive Education",
];

const CAMPUS_OPTIONS = [
  "Gurugram",
  "Greater Noida",
  "Lodhi Road, New Delhi",
  "Lucknow",
  "Jaipur",
];

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  programme: "",
  campus: "",
  message: "",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!/^[6-9]\d{9}$/.test(data.phone.replace(/\s|-/g, ""))) {
    errors.phone = "Please enter a valid 10-digit Indian mobile number.";
  }
  return errors;
}

export default function EnquiryForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Success — in production this would POST to an API
    setSubmitted(true);
  }

  function handleClose() {
    setIsOpen(false);
    // Reset form after panel fully closes
    setTimeout(() => {
      setSubmitted(false);
      setFormData(EMPTY_FORM);
      setErrors({});
    }, 300);
  }

  return (
    <>
      {/* Vertical tab trigger */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open enquiry form"
          className={`bg-maroon text-white text-xs font-semibold tracking-widest uppercase px-3 py-5 rounded-l-xl shadow-lg hover:bg-maroon-light transition-colors duration-200 [writing-mode:vertical-rl] rotate-180 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          style={{ letterSpacing: "0.1em" }}
        >
          Enquire Now
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}

      {/* Slide-in panel */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 w-80 max-w-[calc(100vw-1rem)] bg-white rounded-l-2xl shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Enquiry Form"
      >
        {/* Panel header */}
        <div className="bg-navy rounded-tl-2xl px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-0.5">
              Admissions 2026
            </p>
            <h2 className="text-base font-bold text-white">Enquire Now</h2>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close enquiry form"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Panel body */}
        <div className="px-5 py-5 overflow-y-auto max-h-[calc(100vh-8rem)]">
          {submitted ? (
            /* Success state */
            <div className="py-8 text-center">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-navy mb-2">Thank you!</h3>
              <p className="text-sm text-slate-600">
                We&apos;ll contact you within 24 hours.
              </p>
              <button
                onClick={handleClose}
                className="mt-6 w-full bg-maroon text-white rounded-full py-2.5 text-sm font-semibold hover:bg-maroon-light transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="eq-name" className="block text-xs font-semibold text-slate-600 mb-1">
                  Full Name <span className="text-maroon">*</span>
                </label>
                <input
                  id="eq-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all ${errors.name ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:ring-blue/20 focus:border-blue"}`}
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="eq-email" className="block text-xs font-semibold text-slate-600 mb-1">
                  Email <span className="text-maroon">*</span>
                </label>
                <input
                  id="eq-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 transition-all ${errors.email ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:ring-blue/20 focus:border-blue"}`}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="eq-phone" className="block text-xs font-semibold text-slate-600 mb-1">
                  Phone (India) <span className="text-maroon">*</span>
                </label>
                <div className="flex">
                  <span className="flex items-center px-3 border border-r-0 border-slate-200 rounded-l-xl bg-slate-50 text-sm text-slate-500 font-medium">
                    +91
                  </span>
                  <input
                    id="eq-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile"
                    maxLength={10}
                    className={`flex-1 px-3 py-2.5 text-sm border rounded-r-xl focus:outline-none focus:ring-2 transition-all ${errors.phone ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:ring-blue/20 focus:border-blue"}`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Programme Interest */}
              <div>
                <label htmlFor="eq-programme" className="block text-xs font-semibold text-slate-600 mb-1">
                  Programme Interest
                </label>
                <select
                  id="eq-programme"
                  name="programme"
                  value={formData.programme}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue bg-white transition-all"
                >
                  <option value="">Select a programme</option>
                  {PROGRAMME_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Campus */}
              <div>
                <label htmlFor="eq-campus" className="block text-xs font-semibold text-slate-600 mb-1">
                  Preferred Campus
                </label>
                <select
                  id="eq-campus"
                  name="campus"
                  value={formData.campus}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue bg-white transition-all"
                >
                  <option value="">Select a campus</option>
                  {CAMPUS_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="eq-message" className="block text-xs font-semibold text-slate-600 mb-1">
                  Message <span className="text-slate-400">(optional)</span>
                </label>
                <textarea
                  id="eq-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any specific questions or requirements..."
                  rows={3}
                  className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue/20 focus:border-blue resize-none transition-all"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-maroon text-white rounded-full py-3 text-sm font-semibold hover:bg-maroon-light transition-colors duration-200 shadow-md"
              >
                Submit Enquiry
              </button>

              <p className="text-center text-xs text-slate-400">
                Or call us:{" "}
                <a href="tel:+918065905223" className="text-navy font-semibold hover:text-blue">
                  +91-8065905223
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
