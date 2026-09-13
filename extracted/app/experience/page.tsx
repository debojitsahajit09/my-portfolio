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
  Rocket, 
  Mouse 
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

  // Top summary categories
  const categories = [
    { label: "Community Work", icon: <Users className="text-emerald-500" size={24} /> },
    { label: "Volunteer", icon: <HeartHandshake className="text-emerald-500" size={24} /> },
    { label: "Founder", icon: <Briefcase className="text-emerald-500" size={24} /> },
    { label: "Entrepreneur", icon: <Rocket className="text-emerald-500" size={24} /> },
  ];

  return (
    <main className="section min-h-screen py-10 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="wrap">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="eyebrow text-xs md:text-sm font-semibold tracking-widest uppercase mb-2">
            04 / <span className="text-emerald-500">EXPERIENCE</span>
          </div>
          <h1 className="title text-3xl md:text-5xl font-bold tracking-tight">
            Where I learned to lead.
          </h1>
        </div>

        {/* 4 Category Cards in 1 Row */}
        <div className="w-full overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="grid grid-flow-col auto-cols-[minmax(180px,1fr)] md:grid-cols-4 gap-4 min-w-full">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col items-start justify-center gap-3 hover:border-emerald-500 transition-all"
              >
                <div>{cat.icon}</div>
                <span className="font-semibold text-sm md:text-base uppercase tracking-wider">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator with Animation */}
        <div className="flex flex-col items-center justify-center my-8 text-emerald-500 animate-bounce">
          <Mouse size={28} />
          <span className="text-xs font-mono mt-1 opacity-80">Scroll down</span>
        </div>

        {/* Experience List */}
        <div className="space-y-16 mt-12">
          {experiences.map((e, i) => {
            const currentImgIndex = imageIndices[i] || 0;
            const hasImages = e.images && e.images.length > 0;

            return (
              <article key={i} className="border-b pb-12 last:border-b-0">
                
                {/* Meta Header Info */}
                <div className="flex flex-wrap items-baseline gap-2 md:gap-4 mb-3">
                  <span className="text-lg md:text-xl font-bold text-emerald-500 font-mono">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-emerald-500 font-semibold text-sm md:text-base">
                    {e.period || "2025 – Present"}
                  </span>
                </div>

                {/* Role & Org */}
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  {e.role}
                </h2>
                <div className="text-lg font-semibold text-emerald-500/90 mb-6">
                  {e.org}
                </div>

                {/* Image Carousel - Centered & Full Responsive */}
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

                {/* Action Buttons: Website Link + See Details Toggle */}
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
