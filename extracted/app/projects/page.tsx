"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export default function Projects() {
  const projects = site.projects || [];

  // প্রজেক্টের টাইপ অনুযায়ী সংখ্যা গণনা করার লজিক
  const getCount = (keyword: string) => {
    const count = projects.filter((p: any) => {
      const fullText = `${p.type || ""} ${p.tags ? p.tags.join(" ") : ""} ${p.title || ""}`.toLowerCase();
      return fullText.includes(keyword.toLowerCase());
    }).length;
    return String(count > 0 ? count : 1).padStart(2, "0");
  };

  const categories = [
    { label: "ROBOTICS & IOT", count: getCount("robotics") },
    { label: "AI & SYSTEMS", count: getCount("ai") },
    { label: "WEB & UI/UX", count: getCount("web") },
    { label: "RESEARCH & HARDWARE", count: getCount("embedded") },
  ];

  return (
    <main className="section min-h-screen py-10 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="wrap">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="eyebrow text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 text-emerald-500">
            02 / PROJECTS
          </div>
          <h1 className="title text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Things I built.
          </h1>
          <p className="text text-sm md:text-base opacity-85 mb-8">
            A growing archive of experiments, prototypes, and production systems.
          </p>
        </div>

        {/* 4 Compact Category Cards Grid (Matching Achievements Page) */}
        <div className="w-full mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="py-4 px-3 rounded-2xl border bg-card text-card-foreground shadow-sm flex flex-col items-center justify-center gap-1.5 hover:border-emerald-500 transition-all"
              >
                <span className="text-emerald-500 font-mono [font-feature-settings:'zero'] font-bold text-lg md:text-xl">
                  {cat.count}
                </span>
                <span className="font-semibold text-[10px] md:text-xs tracking-wider uppercase text-center">
                  {cat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p: any) => (
            <article 
              className="card group rounded-2xl border bg-card text-card-foreground p-5 shadow-sm hover:border-emerald-500 transition-all flex flex-col justify-between" 
              key={p.id}
            >
              <div>
                {/* Image / Thumbnail */}
                <div className="relative overflow-hidden rounded-xl mb-4 h-48 w-full bg-muted">
                  <img 
                    className="thumb w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    src={p.image} 
                    alt={p.title} 
                  />
                </div>

                {/* Metadata & Title */}
                <div className="eyebrow text-xs font-semibold text-emerald-500 uppercase tracking-wide mb-1">
                  {p.year} · {p.type}
                </div>
                <h2 className="text-xl font-bold tracking-tight mb-2">
                  {p.title}
                </h2>
                <p className="text text-sm opacity-80 mb-4 line-clamp-3">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="tags flex flex-wrap gap-1.5 mb-6">
                  {p.tags?.map((t: string) => (
                    <span 
                      className="tag text-[11px] px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium" 
                      key={t}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <Link 
                className="btn inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-emerald-600 transition-colors w-full mt-2" 
                href={"/projects/" + p.id}
              >
                Open project <ArrowUpRight size={14} />
              </Link>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
