"use client";

import { site } from "@/data/site";
import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Users, 
  HeartHandshake, 
  Briefcase, 
  Rocket 
} from "lucide-react";

interface ExperienceItem {
  role: string;
  org: string;
  period?: string;
  text?: string;
  summary?: string;
  details?: string;
  images?: string[];
  website?: string;
  category?: string; // e.g. "Community Work", "Volunteer", "Founder", "Entrepreneur"
}

export default function Experience() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const [imageIndices, setImageIndices] = useState<{ [key: number]: number }>({});

  const toggleDetails = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const nextImage = (expIndex: number, maxImages: number) => {
    setImageIndices((prev) => ({
      ...prev,
      [expIndex]: ((prev[expIndex] || 0) + 1) % maxImages,
    }));
  };

  const prevImage = (expIndex: number, maxImages: number) => {
    setImageIndices((prev) => ({
      ...prev,
      [expIndex]: ((prev[expIndex] || 0) - 1 + maxImages) % maxImages,
    }));
  };

  const experiences = (site.experience || []) as ExperienceItem[];

  // Helper function to count items based on category or predefined logic
  const getCategoryCount = (label: string) => {
    const count = experiences.filter((e) => 
      e.category?.toLowerCase() === label.toLowerCase() || 
      e.role?.toLowerCase().includes(label.toLowerCase())
    ).length;
    return count > 0 ? String(count).padStart(2, "0") : "01"; 
  };

  // Top summary categories with counts
  const categories = [
    { label: "Community Work", count: getCategoryCount("Community Work"), icon: <Users className="text-emerald-500" size={24} /> },
    { label: "Volunteer", count: getCategoryCount("Volunteer"), icon: <HeartHandshake className="text-emerald-500" size={24} /> },
    { label: "Founder", count: getCategoryCount("Founder"), icon: <Briefcase className="text-emerald-500" size={24} /> },
    { label: "Entrepreneur", count: getCategoryCount("Entrepreneur"), icon: <Rocket className="text-emerald-500" size={24} /> },
  ];

  return (
    <main className="section min-h-screen py-10 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="wrap">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="eyebrow text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 text-emerald-500">
            EXPERIENCE
          </div>
          <h1 className="title text-3xl md:text-5xl font-bold tracking-tight">
            Where I learned to lead.
          </h1>
        </div>

        {/* 4 Category Cards Grid (No horizontal swipe) */}
        <div className="w-full mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col items-start justify-between gap-4 hover:border-emerald-500 transition-all min-h-[120px]"
              >
                <div className="flex items-center justify-between w-full">
                  <div>{cat.icon}</div>
                  <span className="text-emerald-500 font-mono font-bold text-lg md:text-xl">
                    {cat.count}
                  </span>
                </div>
                <span className="font-semibold text-xs md:text-sm uppercase tracking-wider">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Mouse Scroll Animation without text (Fade up dot inside mouse) */}
        <div className="flex items-center justify-center my-10">
          <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center p-1 relative">
            <div className="w-1.5 h-2.5 bg-emerald-500 rounded-full animate-[fadeUp_1.5s_infinite]" />
          </div>
        </div>

        {/* Tailwind Custom Keyframes Style for Bottom-to-Top Fade Animation */}
        <style jsx>{`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(12px);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(0px);
            }
          }
        `}</style>

        {/* Experience List */}
        <div className="space-y-16 mt-12">
          {experiences.map((e, i) => {
            const currentImgIndex = imageIndices[i] || 0;
            const hasImages = e.images && e.images.length > 0;

            return (
              <article key={i} className="border-b pb-12 last:border-b-0">
                
                {/* Serial matching Achievements Page style (14.) */}
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-black text-foreground font-mono">
                    {String(i + 1).padStart(2, "0")}
                    <span className="text-emerald-500">.</span>
                  </span>
                </div>

                {/* Period */}
                <div className="text-emerald-500 font-semibold text-xs md:text-sm uppercase tracking-wider mb-3">
                  {e.period || "2025 – Present"}
                </div>

                {/* Role & Org */}
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  {e.role}
                </h2>
                <div className="text-lg font-semibold text-emerald-500/90 mb-6">
                  {e.org}
                </div>

                {/* Image Carousel */}
                {hasImages && e.images && (
                  <div className="w-full flex justify-center mb-6">
                    <div className="relative w-full max-w-3xl aspectRatio-[16/9] overflow-hidden rounded-2xl bg-black/40 border border-emerald-500/20 shadow-md">
                      <img
                        src={e.images[currentImgIndex]}
                        alt={`${e.role} showcase`}
                        className="w-full h-full object-cover block"
                      />

                      {/* Swiper Controls */}
                      {e.images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() => prevImage(i, e.images!.length)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-emerald-500 hover:text-black transition-all"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            type="button"
                            onClick={() => nextImage(i, e.images!.length)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full hover:bg-emerald-500 hover:text-black transition-all"
                          >
                            <ChevronRight size={20} />
                          </button>
                          <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full font-mono">
                            {currentImgIndex + 1} / {e.images.length}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Short Summary Text */}
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-4xl">
                  {e.summary || e.text}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  {e.website && (
                    <a
                      href={e.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-black font-medium text-sm transition-all flex items-center gap-2"
                    >
                      Explore {e.org.split("—")[0]} <ExternalLink size={14} />
                    </a>
                  )}

                  {e.details && (
                    <button
                      type="button"
                      onClick={() => toggleDetails(i)}
                      className="px-4 py-2 rounded-lg border bg-card hover:border-emerald-500 text-emerald-500 font-semibold text-sm transition-all flex items-center gap-2"
                    >
                      {expanded[i] ? "Hide details" : "See details"}
                      {expanded[i] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>

                {/* Details Accordion Content */}
                {expanded[i] && e.details && (
                  <div className="mt-4 p-5 md:p-6 rounded-xl bg-card border-l-4 border-emerald-500 text-card-foreground text-sm md:text-base leading-relaxed shadow-inner">
                    {e.details}
                  </div>
                )}

              </article>
            );
          })}
        </div>

      </div>
    </main>
  );
}
