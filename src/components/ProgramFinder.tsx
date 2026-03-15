"use client";

import { useState } from "react";
import Link from "next/link";

type Level = "undergraduate" | "postgraduate" | "doctoral" | "executive";
type CampusSlug = "gurugram" | "greater-noida" | "lodhi-road" | "lucknow" | "jaipur";

interface Programme {
  name: string;
  level: Level;
  duration: string;
  campuses: CampusSlug[];
}

const ALL_PROGRAMMES: Programme[] = [
  { name: "BBA", level: "undergraduate", duration: "3 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "MBA", level: "postgraduate", duration: "2 Years", campuses: ["gurugram", "greater-noida", "lucknow", "jaipur"] },
  { name: "B.Tech CSE", level: "undergraduate", duration: "4 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "B.Tech CSE (AI & ML)", level: "undergraduate", duration: "4 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "B.Tech CSE (Data Science)", level: "undergraduate", duration: "4 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "MCA", level: "postgraduate", duration: "2 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "BA Psychology", level: "undergraduate", duration: "3 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "MA Psychology", level: "postgraduate", duration: "2 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "BA LLB (Hons.)", level: "undergraduate", duration: "5 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "BBA LLB (Hons.)", level: "undergraduate", duration: "5 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "LL.M", level: "postgraduate", duration: "1 Year", campuses: ["gurugram", "greater-noida"] },
  { name: "BA Communication", level: "undergraduate", duration: "3 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "MA Communication", level: "postgraduate", duration: "2 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "B.Des", level: "undergraduate", duration: "4 Years", campuses: ["gurugram"] },
  { name: "M.Des", level: "postgraduate", duration: "2 Years", campuses: ["gurugram"] },
  { name: "BA Liberal Arts (FYUP)", level: "undergraduate", duration: "3–4 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "B.Tech Mechanical Engineering", level: "undergraduate", duration: "4 Years", campuses: ["greater-noida"] },
  { name: "B.Tech Civil Engineering", level: "undergraduate", duration: "4 Years", campuses: ["greater-noida"] },
  { name: "B.Tech Chemical Engineering", level: "undergraduate", duration: "4 Years", campuses: ["greater-noida"] },
  { name: "B.Tech Electrical Engineering", level: "undergraduate", duration: "4 Years", campuses: ["greater-noida"] },
  { name: "M.Tech", level: "postgraduate", duration: "2 Years", campuses: ["greater-noida"] },
  { name: "B.Sc.", level: "undergraduate", duration: "3 Years", campuses: ["greater-noida"] },
  { name: "M.Sc.", level: "postgraduate", duration: "2 Years", campuses: ["greater-noida"] },
  { name: "PGDM", level: "postgraduate", duration: "2 Years", campuses: ["lodhi-road"] },
  { name: "PGDBM", level: "postgraduate", duration: "2 Years", campuses: ["lodhi-road"] },
  { name: "Ph.D. (Management)", level: "doctoral", duration: "3–5 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "Ph.D. (Law)", level: "doctoral", duration: "3–5 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "Ph.D. (Engineering)", level: "doctoral", duration: "3–5 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "Ph.D. (CSE)", level: "doctoral", duration: "3–5 Years", campuses: ["gurugram", "greater-noida"] },
  { name: "Ph.D. (Social Sciences)", level: "doctoral", duration: "3–5 Years", campuses: ["gurugram", "greater-noida"] },
];

const CAMPUSES: { label: string; value: CampusSlug | "any" }[] = [
  { label: "Any Campus", value: "any" },
  { label: "Gurugram", value: "gurugram" },
  { label: "Greater Noida", value: "greater-noida" },
  { label: "Lodhi Road", value: "lodhi-road" },
  { label: "Lucknow", value: "lucknow" },
  { label: "Jaipur", value: "jaipur" },
];

const LEVELS: { label: string; value: Level | "any" }[] = [
  { label: "All", value: "any" },
  { label: "Undergraduate", value: "undergraduate" },
  { label: "Postgraduate", value: "postgraduate" },
  { label: "Doctoral", value: "doctoral" },
  { label: "Executive", value: "executive" },
];

const CAMPUS_LABEL: Record<CampusSlug, string> = {
  "gurugram": "Gurugram",
  "greater-noida": "Greater Noida",
  "lodhi-road": "Lodhi Road",
  "lucknow": "Lucknow",
  "jaipur": "Jaipur",
};

const LEVEL_STYLE: Record<Level, string> = {
  undergraduate: "bg-blue/10 text-blue",
  postgraduate: "bg-maroon/10 text-maroon",
  doctoral: "bg-navy/10 text-navy",
  executive: "bg-amber-100 text-amber-700",
};

const DEFAULT_VISIBLE = 8;

export default function ProgramFinder() {
  const [campus, setCampus] = useState<CampusSlug | "any">("any");
  const [level, setLevel] = useState<Level | "any">("any");
  const [showAll, setShowAll] = useState(false);

  const filtered = ALL_PROGRAMMES.filter((p) => {
    const campusOk = campus === "any" || p.campuses.includes(campus as CampusSlug);
    const levelOk = level === "any" || p.level === level;
    return campusOk && levelOk;
  });

  const hasFilters = campus !== "any" || level !== "any";
  const visible = hasFilters || showAll ? filtered : filtered.slice(0, DEFAULT_VISIBLE);
  const hiddenCount = filtered.length - DEFAULT_VISIBLE;

  function reset() {
    setCampus("any");
    setLevel("any");
    setShowAll(false);
  }

  return (
    <div className="w-full">
      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {/* Campus */}
        <div className="flex flex-wrap gap-2 flex-1">
          {CAMPUSES.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => { setCampus(value as CampusSlug | "any"); setShowAll(false); }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150 ${
                campus === value
                  ? "bg-navy text-white border-navy"
                  : "border-slate-200 text-slate-600 hover:border-navy/40 hover:text-navy"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Level */}
        <div className="flex gap-1.5 items-center bg-slate-100 rounded-xl p-1 self-start">
          {LEVELS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => { setLevel(value as Level | "any"); setShowAll(false); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                level === value
                  ? "bg-white text-navy shadow-sm"
                  : "text-slate-500 hover:text-navy"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Count + reset */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs text-slate-400">
          <span className="font-semibold text-navy">{filtered.length}</span> programmes
        </p>
        {hasFilters && (
          <button onClick={reset} className="text-xs text-maroon font-semibold underline underline-offset-2">
            Clear
          </button>
        )}
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-slate-100 bg-slate-50 py-12 text-center">
          <p className="text-sm text-slate-500">
            No programmes match.{" "}
            <button onClick={reset} className="text-blue underline">Reset</button>
          </p>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {visible.map((p) => (
              <div
                key={`${p.name}-${p.level}`}
                className="rounded-2xl border border-slate-100 bg-white p-4 hover:border-navy/20 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <span className={`inline-block text-[10px] font-bold rounded-full px-2.5 py-0.5 mb-2.5 capitalize ${LEVEL_STYLE[p.level]}`}>
                    {p.level}
                  </span>
                  <h3 className="text-sm font-bold text-navy leading-snug mb-1">{p.name}</h3>
                  <p className="text-xs text-slate-400 mb-3">{p.duration}</p>
                  <div className="flex flex-wrap gap-1">
                    {p.campuses.map((slug) => (
                      <span key={slug} className="text-[10px] bg-slate-50 text-slate-500 border border-slate-100 rounded-full px-2 py-0.5">
                        {CAMPUS_LABEL[slug]}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="https://admissions.iilm.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-center bg-maroon text-white text-xs font-semibold rounded-full py-2 hover:bg-maroon-light transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          {!hasFilters && hiddenCount > 0 && (
            <button
              onClick={() => setShowAll((v) => !v)}
              className="w-full mt-4 py-2.5 text-xs font-semibold text-slate-500 hover:text-navy border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white transition-colors"
            >
              {showAll ? "Show less ↑" : `Show ${hiddenCount} more programmes ↓`}
            </button>
          )}
        </>
      )}

      <div className="mt-5 text-center">
        <Link href="/courses" className="text-xs font-semibold text-blue hover:text-navy underline underline-offset-2 transition-colors">
          View all programmes & curriculum details →
        </Link>
      </div>
    </div>
  );
}
