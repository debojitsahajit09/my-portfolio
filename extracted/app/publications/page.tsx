"use client";

import React, { useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { 
  BookOpen, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  FileText
} from "lucide-react";

export default function Publications() {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getStatusBadge = (status: string) => {
    const s = status?.toLowerCase() || "";
    if (s.includes("published")) {
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    } else if (s.includes("review")) {
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    } else if (s.includes("submitted")) {
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    } else {
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
    }
  };

  const publishedCount = site.publications.filter((p) => p.status?.toLowerCase().includes("published")).length;
  const inProgressCount = site.publications.filter((p) => !p.status?.toLowerCase().includes("published")).length;

  return (
    <main className="section py-12 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="wrap">
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="eyebrow text-emerald-500 font-semibold uppercase tracking-wider mb-2">
            03 / Scholarly Work
          </div>
          <h1 className="title text-4xl md:text-5xl font-bold mb-4">
            Research, Writing & Scholarly Work
          </h1>
          <p className="text text-lg text-muted-foreground max-w-2xl">
            Selected publications, manuscripts, and ongoing research projects with persistent digital identifiers.
          </p>
        </div>

        {/* Academic Summary Statistics (2 Boxes Only) */}
        <div className="grid grid-cols-2 gap-4 mb-10 max-w-2xl">
          <div className="p-4 rounded-xl border bg-card text-card-foreground shadow-sm flex items-center gap-3">
            <BookOpen className="text-emerald-500" size={24} />
            <div>
              <div className="text-2xl font-bold text-emerald-500">{publishedCount}</div>
              <div className="text-xs text-muted-foreground uppercase font-medium">Published Work</div>
            </div>
          </div>
          <div className="p-4 rounded-xl border bg-card text-card-foreground shadow-sm flex items-center gap-3">
            <FileText className="text-emerald-500" size={24} />
            <div>
              <div className="text-2xl font-bold text-emerald-500">{inProgressCount}</div>
              <div className="text-xs text-muted-foreground uppercase font-medium">Manuscripts in Progress</div>
            </div>
          </div>
        </div>

        {/* Custom Mouse Scroll Indicator Animation (Dot moving bottom to top) */}
        <div className="flex justify-center items-center mb-14">
          <div className="w-6 h-10 rounded-full border-2 border-emerald-500 flex justify-center p-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-[scrollUp_1.5s_infinite]" />
          </div>
        </div>

        {/* CSS Keyframes for Bottom to Top Dot Animation */}
        <style jsx>{`
          @keyframes scrollUp {
            0% {
              transform: translateY(16px);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(0px);
              opacity: 0;
            }
          }
        `}</style>

        {/* Publications List */}
        <div className="space-y-12">
          {site.publications.map((item) => {
            const p = item as any;
            const isExpanded = !!expandedItems[p.n];

            return (
              <article
                key={p.n}
                className="p-6 md:p-8 rounded-2xl border bg-card text-card-foreground shadow-md transition-all hover:border-emerald-500/30"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  
                  {/* Book Cover / Visual Card */}
                  {p.coverImage && (
                    <div className="w-full md:w-48 h-64 relative rounded-xl overflow-hidden border shadow-sm flex-shrink-0 bg-muted">
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Publication Core Metadata */}
                  <div className="flex-1 space-y-4 w-full">
                    
                    {/* Header Row: Item Number (Green) & Status Badge */}
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <span className="text-sm font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-500">
                        #{p.n}
                      </span>
                      <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full border ${getStatusBadge(p.status)}`}>
                        {p.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold leading-tight hover:text-emerald-500 transition-colors">
                      {p.title}
                    </h2>

                    {/* Authors & Year */}
                    <div className="text-sm text-muted-foreground font-medium">
                      <span className="text-foreground font-semibold">
                        {p.authors || "Debojit Saha Jit, Sabit Islam Efty"}
                      </span>
                      {p.year && <span> ({p.year})</span>}
                    </div>

                    {/* Short Description */}
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>

                    {/* Persistent Identifiers Metadata Strip */}
                    {(p.isbn || p.doi || p.publisher || p.targetJournal) && (
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-muted-foreground pt-2 border-t border-border/50">
                        {p.publisher && <div><strong className="text-foreground">PUBLISHER:</strong> {p.publisher}</div>}
                        {p.isbn && <div><strong className="text-foreground">ISBN:</strong> {p.isbn}</div>}
                        {p.doi && <div><strong className="text-foreground">DOI:</strong> {p.doi}</div>}
                        {p.targetJournal && <div><strong className="text-foreground">TARGET JOURNAL:</strong> {p.targetJournal}</div>}
                      </div>
                    )}

                    {/* Buttons: Only Read E-Book & Zenodo Record */}
                    <div className="flex flex-wrap gap-3 pt-3">
                      {p.readUrl && (
                        <a
                          href={p.readUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-emerald-500 text-black font-semibold rounded-lg text-sm hover:bg-emerald-400 transition-colors flex items-center gap-1.5 shadow-sm"
                        >
                          Read E-Book <ExternalLink size={14} />
                        </a>
                      )}
                      {p.zenodoUrl && (
                        <a
                          href={p.zenodoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border rounded-lg text-sm font-medium hover:border-emerald-500 hover:text-emerald-500 transition-colors flex items-center gap-1.5 font-mono text-xs bg-card"
                        >
                          Zenodo Record <ExternalLink size={14} />
                        </a>
                      )}
                    </div>

                    {/* Expandable "Book Details" Trigger */}
                    {p.details && (
                      <div className="pt-2">
                        <button
                          onClick={() => toggleExpand(p.n)}
                          className="text-xs font-semibold uppercase tracking-wider text-emerald-500 flex items-center gap-1 hover:underline"
                        >
                          {isExpanded ? "Hide Book Details" : "Book Details"}
                          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                        </button>

                        {/* Collapsible Content */}
                        {isExpanded && (
                          <div className="mt-4 p-4 rounded-xl bg-muted/50 border text-xs space-y-3">
                            {p.summary && (
                              <p className="text-sm leading-relaxed text-muted-foreground border-b pb-3 border-border/50 font-sans">
                                {p.summary}
                              </p>
                            )}
                            <div className="font-mono space-y-2 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                              {p.details.type && <div><span className="text-muted-foreground">TYPE:</span> {p.details.type}</div>}
                              {p.details.language && <div><span className="text-muted-foreground">LANGUAGE:</span> {p.details.language}</div>}
                              {p.details.pages && <div><span className="text-muted-foreground">PAGES:</span> {p.details.pages}</div>}
                              {p.details.license && <div><span className="text-muted-foreground">LICENSE:</span> {p.details.license}</div>}
                              {p.details.repository && <div><span className="text-muted-foreground">REPOSITORY:</span> {p.details.repository}</div>}
                              {p.details.researchArea && <div><span className="text-muted-foreground">FIELD:</span> {p.details.researchArea}</div>}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </main>
  );
}
