import type { Metadata } from "next";
import { campusData } from "./campusData";
import CampusContent from "./CampusContent";

// ── Static Params ─────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(campusData).map((slug) => ({ slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const campus = campusData[slug];
  if (!campus) {
    return { title: "Campus Not Found | IILM University" };
  }
  return {
    title: `${campus.name} | Programmes, Faculty & Admissions`,
    description: campus.description.slice(0, 160),
    openGraph: {
      title: `${campus.name} | IILM`,
      description: campus.description.slice(0, 160),
      images: campus.image ? [{ url: campus.image }] : [],
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function CampusPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const campus = campusData[slug] ?? null;
  return <CampusContent campus={campus} />;
}
