"use client";

import { site } from "@/data/site";
import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Image as ImageIcon,
  X
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
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const toggleDetails = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const openGallery = (expIndex: number) => {
    setActiveGalleryIndex(expIndex);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setActiveGalleryIndex(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (maxImages: number) => {
    setCurrentImageIndex((prev) => (prev + 1) % maxImages);
  };

  const prevImage = (maxImages: number) => {
    setCurrentImageIndex((prev) => (prev - 1 + maxImages) % maxImages);
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

            return (
              <article key={i} className="border-b pb-12 last:border-b-0">
                
                {/* Serial matching Slashed/Dotted Zero font */}
                <div className="mb-1 text-center">
                  <span className="text-4xl md:text-5xl font-black text-foreground font-mono [font-feature-settings:'zero']">
                    {String(i + 1).padStart(2, "0")}
                    <span className="text-emerald-500">.</span>
                  </span>
                </div>

                {/* Period Centered */}
                <div className="text-emerald-500 font-semibold text-xs md:text-sm uppercase tracking-wider mb-6 text-center font-mono [font-feature-settings:'zero']">
                  {e.period || "2025 – Present"}
                </div>

                {/* Role & Org */}
                <h2 className="text-2xl md:text-3xl font-bold mb-1">
                  {e.role}
                </h2>
                <div className="text-lg font-semibold text-emerald-500/90 mb-6">
                  {e.org}
                </div>

                {/* Short Summary Text */}
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 max-w-4xl">
                  {e.summary || e.text}
                </p>

                {/* Action Buttons Container */}
                <div className="flex flex-wrap items-center gap-3">
                  
                  {/* 1. Explore Website Button */}
                  {e.website && (
                    <a
                      href={e.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-black font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                    >
                      Explore {e.org.split("—")[0].trim()} <ExternalLink size={15} />
                    </a>
                  )}

                  {/* 2. See Pictures Button */}
                  {hasImages && (
                    <button
                      type="button"
                      onClick={() => openGallery(i)}
                      className="px-4 py-2.5 rounded-xl border bg-card border-border hover:border-emerald-500 text-foreground hover:text-emerald-500 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                    >
                      <ImageIcon size={16} className="text-emerald-500" />
                      See pictures ({e.images?.length})
                    </button>
                  )}

                  {/* 3. See Details Accordion Button */}
                  {e.details && (
                    <button
                      type="button"
                      onClick={() => toggleDetails(i)}
                      className="px-4 py-2.5 rounded-xl border bg-card border-border hover:border-emerald-500 text-emerald-500 font-semibold text-sm transition-all flex items-center gap-2 shadow-sm"
                    >
                      {expanded[i] ? "Hide details" : "See details"}
                      {expanded[i] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>

                {/* Details Accordion Box */}
                {expanded[i] && e.details && (
                  <div className="mt-6 p-5 md:p-6 rounded-2xl bg-card border-l-4 border-emerald-500 text-card-foreground text-sm md:text-base leading-relaxed shadow-inner animate-in fade-in duration-200">
                    {e.details}
                  </div>
                )}

              </article>
            );
          })}
        </div>

      </div>

      {/* Picture Gallery Lightbox Modal */}
      {activeGalleryIndex !== null && experiences[activeGalleryIndex]?.images && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4">
          
          {/* Close Button */}
          <button
            type="button"
            onClick={closeGallery}
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
          >
            <X size={24} />
          </button>

          {/* Main Image View */}
          <div className="relative w-full max-w-4xl max-h-[75vh] flex items-center justify-center">
            <img
              src={experiences[activeGalleryIndex].images![currentImageIndex]}
              alt="Showcase picture"
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Carousel Prev/Next Buttons */}
            {experiences[activeGalleryIndex].images!.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => prevImage(experiences[activeGalleryIndex].images!.length)}
                  className="absolute left-2 md:left-4 bg-black/60 hover:bg-emerald-500 text-white hover:text-black p-3 rounded-full transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={() => nextImage(experiences[activeGalleryIndex].images!.length)}
                  className="absolute right-2 md:right-4 bg-black/60 hover:bg-emerald-500 text-white hover:text-black p-3 rounded-full transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Bottom Counter Indicator */}
          <div className="mt-4 text-white/80 font-mono text-sm bg-white/10 px-4 py-1.5 rounded-full [font-feature-settings:'zero']">
            {currentImageIndex + 1} / {experiences[activeGalleryIndex].images!.length}
          </div>
        </div>
      )}

    </main>
  );
}
