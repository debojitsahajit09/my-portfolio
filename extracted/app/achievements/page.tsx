"use client";

import { site } from "@/data/site";
import AwardCard from "@/components/AwardCard";

export default function Achievements() {
  const achievements = site.achievements || [];

  // ক্যাটাগরি অনুযায়ী কাউন্ট হিসেব করার লজিক
  const getCount = (keyword: string) => {
    const count = achievements.filter((a: any) => {
      const fullText = `${a.title} ${a.org} ${a.text} ${a.level || ""}`.toLowerCase();
      return fullText.includes(keyword.toLowerCase());
    }).length;
    return String(count > 0 ? count : 1).padStart(2, "0");
  };

  const categories = [
    { label: "INTERNATIONAL", count: getCount("international") },
    { label: "NATIONAL", count: getCount("national") },
    { label: "DISTRICT", count: getCount("district") },
    { label: "SCHOOL", count: getCount("school") },
  ];

  return (
    <main className="section min-h-screen py-10 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="wrap">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="eyebrow text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 text-emerald-500">
            ACHIEVEMENTS
          </div>
          <h1 className="title text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Proof of the journey.
          </h1>
          <p className="text text-sm md:text-base opacity-85 mb-8">
            Awards and recognition — tap "See details" for the full story.
          </p>
        </div>

        {/* 4 Compact Category Cards Grid (Matching Provided Screenshot Exactly) */}
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

        {/* Achievements List */}
        <div className="flex flex-col gap-12">
          {achievements.map((a: any) => (
            <AwardCard a={a} key={a.n} />
          ))}
        </div>

      </div>
    </main>
  );
}
