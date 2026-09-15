"use client";

import { useState } from "react";
import { site } from "@/data/site";
import Image from "next/image";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = site.galleryCategories || [];
  const galleryData = site.galleryImages || {};

  // All category-এর সময় সব ছবির একটি লিস্ট তৈরি করা
  const allImages = Object.values(galleryData).flat();

  return (
    <main className="section min-h-screen py-10 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="wrap">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="eyebrow text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 text-emerald-500">
            GALLERY
          </div>
          <h1 className="title text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Moments & Visual Artifacts.
          </h1>
          <p className="text text-sm md:text-base opacity-85 mb-8">
            A visual showcase of academic journey, project milestones, design works, and personal moments.
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

        {/* Display Logic */}
        {selectedCategory === "All" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {allImages.map((img: any) => (
              <GalleryCard key={img.id} img={img} />
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            {/* Academic Section */}
            {selectedCategory === "Academic" && (
              <>
                <SubSection title="Notre Dame College, Dhaka" images={galleryData.ndc || []} />
                <SubSection title="Rajbari Govt. High School" images={galleryData.rghs || []} />
                <SubSection title="Cambridge School and College" images={galleryData.cambridge || []} />
              </>
            )}

            {/* Sub-category for Academic Specific Selection */}
            {selectedCategory === "Notre Dame College" && (
              <SubSection title="Notre Dame College, Dhaka" images={galleryData.ndc || []} />
            )}
            {selectedCategory === "Rajbari Govt. High School" && (
              <SubSection title="Rajbari Govt. High School" images={galleryData.rghs || []} />
            )}
            {selectedCategory === "Cambridge School" && (
              <SubSection title="Cambridge School and College" images={galleryData.cambridge || []} />
            )}

            {/* Graphics Design Section */}
            {selectedCategory === "Graphics Design" && (
              <SubSection title="Graphics Design & Branding" images={galleryData.graphics || []} />
            )}

            {/* Projects Section */}
            {selectedCategory === "Projects" && (
              <SubSection title="Projects & Technical Developments" images={galleryData.projects || []} />
            )}

            {/* Myself Section */}
            {selectedCategory === "Myself" && (
              <SubSection title="Personal Moments & Portraits" images={galleryData.myself || []} />
            )}
          </div>
        )}

      </div>
    </main>
  );
}

// SubSection Component for Section Title & Grid Display
function SubSection({ title, images }: { title: string; images: any[] }) {
  if (!images || images.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold mb-4 pb-2 border-b border-border text-emerald-500">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img: any) => (
          <GalleryCard key={img.id} img={img} />
        ))}
      </div>
    </div>
  );
}

// Reusable Image Card Component
function GalleryCard({ img }: { img: any }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border bg-card text-card-foreground shadow-sm hover:border-emerald-500 transition-all flex flex-col">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={img.src}
          alt={img.title || "Gallery Image"}
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
  );
}
