"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = site.galleryCategories || [
    "All",
    "Academic",
    "Graphics Design",
    "Achievements",
    "Project Memories",
    "Website Making",
    "Webapp Making",
  ];

  const images = site.galleryImages || [];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img: any) => img.category === selectedCategory);

  return (
    <main className="min-h-screen py-10 px-4 md:px-8 max-w-6xl mx-auto font-mono">
      {/* Header Section */}
      <div className="mb-8">
        <div className="text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 text-[#10b981]">
          GALLERY
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">
          Captured Moments<span className="text-[#10b981]">.</span>
        </h1>
        <p className="text-sm md:text-base opacity-80">
          Memories from academics, coding, designing, and project building.
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all border ${
              selectedCategory === cat
                ? "bg-[#10b981] text-black border-[#10b981]"
                : "bg-transparent text-foreground border-[#10b981]/30 hover:border-[#10b981]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img: any) => (
          <div
            key={img.id || img.src}
            className="group relative overflow-hidden rounded-2xl border border-[#10b981]/20 bg-card shadow-md transition-all hover:border-[#10b981] h-72 w-full"
          >
            {/* Main Picture */}
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark Gradient Shade Over Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

            {/* Text Title On Top of Shade (Bottom Side) */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col justify-end">
              {img.category && (
                <span className="text-[10px] uppercase tracking-widest text-[#10b981] font-bold mb-1">
                  {img.category}
                </span>
              )}
              <h3 className="text-base md:text-lg font-bold text-white leading-snug drop-shadow-md">
                {img.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Fallback when no images match */}
      {filteredImages.length === 0 && (
        <div className="text-center py-20 text-muted-foreground text-sm">
          No images found in this category.
        </div>
      )}
    </main>
  );
}
