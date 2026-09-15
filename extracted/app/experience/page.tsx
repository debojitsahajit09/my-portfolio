"use client";

import { site } from "@/data/site";
import { useState } from "react";
import { 
  ChevronLeft,
  ChevronRight,
  ChevronDown, 
  ChevronUp, 
  ExternalLink 
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
  category?: string;
}

export default function Experience() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  // প্রতিটি এক্সপেরিয়েন্সের বর্তমান ছবির ইনডেক্স ট্র্যাক করার জন্য স্টেটস
  const [activeImageIndexes, setActiveImageIndexes] = useState<{ [key: number]: number }>({});

  const toggleDetails = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const nextImage = (expIndex: number, totalImages: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [expIndex]: ((prev[expIndex] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (expIndex: number, totalImages: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [expIndex]: ((prev[expIndex] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const experiences = (site.experience || []) as ExperienceItem[];

  const getCategoryCount = (label: string) => {
    const count = experiences.filter((e) => 
      e.category?.toLowerCase() === label.toLowerCase() || 
      e.role?.toLowerCase().includes(label.toLowerCase())
    ).length;
    return count > 0 ? String(count).padStart(2, "0") : "01"; 
  };

  const categories = [
    { label: "Community Work", count: getCategoryCount("Community Work") },
    { label: "Volunteer", count: getCategoryCount("Volunteer") },
    { label: "Founder", count: getCategoryCount("Founder") },
    { label: "Entrepreneur", count: getCategoryCount("Entrepreneur") },
  ];

  // ডায়নামিক লিঙ্ক সেটআপ
  const getOrgLink = (e: ExperienceItem) => {
    if (e.website) return e.website;
    
    const orgName = e.org.toLowerCase();
    if (orgName.includes("team c.a.r.e")) {
      return "https://care-wheelchair.vercel.app";
    }
    if (orgName.includes("research")) {
      return site.social?.orcid || "https://orcid.org";
    }
    if (orgName.includes("science spark")) {
      return "https://facebook.com";
    }
    return site.social?.github || "https://github.com";
  };

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

        {/* 4 Compact Category Cards Grid */}
        <div className="w-full mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="py-3.5 px-3 rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col items-center justify-center gap-1 hover:border-emerald-500 transition-all"
              >
                <span className="text-emerald-500 font-mono [font-feature-settings:'zero'] font-bold text-lg md:text-xl">
                  {cat.count}
                </span>
                <span className="font-semibold text-[11px] md:text-xs uppercase tracking-wider text-center">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Mouse Scroll Animation */}
        <div className="flex items-center justify-center my-10">
          <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center p-1 relative">
            <div className="w-1.5 h-2.5 bg-emerald-500 rounded-full animate-[fadeUp_1.5s_infinite]" />
          </div>
        </div>

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
            const hasImages = e.images && e.images.length > 0;
            const targetLink = getOrgLink(e);
            const currentImgIndex = activeImageIndexes[i] || 0;
            const totalImgs = e.images?.length || 0;

            return (
              <article key={i} className="border-b pb-12 last:border-b-0">
                
                {/* 1. Serial Number */}
                <div className="mb-1 text-center">
                  <span className="text-4xl md:text-5xl font-black text-foreground font-mono [font-feature-settings:'zero']">
                    {String(i + 1).padStart(2, "0")}
                    <span className="text-emerald-500">.</span>
                  </span>
                </div>

                {/* 2. Timeline / Period */}
                <div className="text-emerald-500 font-semibold text-xs md:text-sm uppercase tracking-wider mb-6 text-center font-mono [font-feature-settings:'zero']">
                  {e.period || "2025 – Present"}
                </div>

                {/* 3. Single Centered Image Display with Swipe Arrows */}
                {hasImages && (
                  <div className="my-6 flex flex-col items-center justify-center">
                    <div className="relative w-full max-w-2xl h-64 md:h-96 rounded-2xl overflow-hidden border border-border bg-card shadow-md flex items-center justify-center group">
                      <img
                        src={e.images![currentImgIndex]}
                        alt={`${e.role} picture ${currentImgIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-300"
                      />

                      {/* Swipe Prev/Next Buttons (যদি একাধিক ছবি থাকে) */}
                      {totalImgs > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() => prevImage(i, totalImgs)}
                            className="absolute left-3 p-2 md:p-3 rounded-full bg-black/50 hover:bg-emerald-500 text-white hover:text-black transition-all shadow-md backdrop-blur-sm"
                            aria-label="Previous image"
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            type="button"
                            onClick={() => nextImage(i, totalImgs)}
                            className="absolute right-3 p-2 md:p-3 rounded-full bg-black/50 hover:bg-emerald-500 text-white hover:text-black transition-all shadow-md backdrop-blur-sm"
                            aria-label="Next image"
                          >
                            <ChevronRight size={20} />
                          </button>
                        </>
                      )}

                      {/* Image Count Indicator Pill */}
                      {totalImgs > 1 && (
                        <div className="absolute bottom-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white/90 text-xs font-mono [font-feature-settings:'zero']">
                          {currentImgIndex + 1} / {totalImgs}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* 4. Role & Organization */}
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  {e.role}
                </h2>
                <div className="text-lg font-semibold text-emerald-500/90 mb-6">
                  {e.org}
                </div>

                {/* 5. Summary Text */}
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-4xl">
                  {e.summary || e.text}
                </p>

                {/* 6. Action Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  
                  {/* Explore Button */}
                  <a
                    href={targetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-black font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                  >
                    Explore {e.org.split(",")[0].split("—")[0].trim()} <ExternalLink size={15} />
                  </a>

                  {/* See Details Accordion Button */}
                  {e.details && (
                    <button
                      type="button"
                      onClick={() => toggleDetails(i)}
                      className="px-5 py-2.5 rounded-xl border bg-card border-border hover:border-emerald-500 text-foreground hover:text-emerald-500 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                    >
                      {expanded[i] ? "Hide details" : "See details"}
                      {expanded[i] ? <ChevronUp size={16} className="text-emerald-500" /> : <ChevronDown size={16} className="text-emerald-500" />}
                    </button>
                  )}
                </div>

                {/* Details Accordion Box */}
                {expanded[i] && e.details && (
                  <div className="mt-6 p-5 md:p-6 rounded-2xl bg-card border-l-4 border-emerald-500 text-card-foreground text-sm md:text-base leading-relaxed shadow-inner animate-in fade-in duration-200 whitespace-pre-line">
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
