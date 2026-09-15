"use client";

import { useState } from "react";
import { site } from "@/data/site";
import Image from "next/image";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = site.galleryCategories || [];
  const images = site.galleryImages || [];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img: any) => img.category === selectedCategory);

  return (
    <main className="section min-h-screen py-10 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="wrap">
        
        {/* Header Section (Achievements Page-er same Font & Size Styling) */}
        <div className="mb-8">
          <div className="eyebrow text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 text-emerald-500">
            GALLERY
          </div>
          <h1 className="title text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Moments & Visual Artifacts.
          </h1>
          <p className="text text-sm md:text-base opacity-85 mb-8">
            A visual showcase of projects, academic moments, achievements, and creative designs.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat: string, idx: number) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all border ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-white border-emerald-500 shadow-sm"
                  : "bg-card text-card-foreground border-border hover:border-emerald-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((img: any) => (
            <div
              key={img.id}
              className="group relative rounded-2xl overflow-hidden border bg-card text-card-foreground shadow-sm hover:border-emerald-500 transition-all flex flex-col"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="font-bold text-base md:text-lg mb-1 group-hover:text-emerald-500 transition-colors">
                  {img.title}
                </h3>
                <span className="text-xs text-emerald-500 font-medium tracking-wide uppercase">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
