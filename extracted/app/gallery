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
      : images.filter((img) => img.category === selectedCategory);

  return (
    <main className="min-h-screen py-10 px-4 md:px-8 max-w-6xl mx-auto font-mono">
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

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img: any) => (
          <div
            key={img.id}
            className="group relative overflow-hidden rounded-2xl border border-[#10b981]/20 bg-card shadow-md transition-all hover:border-[#10b981]"
          >
            <div className="h-60 w-full overflow-hidden">
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <span className="text-[10px] uppercase tracking-wider text-[#10b981] font-semibold">
                {img.category}
              </span>
              <h3 className="text-base font-bold mt-1 text-foreground">
                {img.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-20 text-muted-foreground text-sm">
          No images found in this category.
        </div>
      )}
    </main>
  );
}
