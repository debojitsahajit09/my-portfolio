"use client";
import { site } from "@/data/site";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

// Experience item structure type definition
interface ExperienceItem {
  role: string;
  org: string;
  period?: string;
  text?: string;
  summary?: string;
  details?: string;
  images?: string[];
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

  // Safe cast for experience items
  const experiences = (site.experience || []) as ExperienceItem[];

  return (
    <main className="section">
      <div className="wrap two">
        {/* বাম দিকের হেডার অংশ */}
        <div>
          <div className="eyebrow">04 / EXPERIENCE</div>
          <h1 className="title">Where I learned to lead.</h1>
        </div>

        {/* ডান দিকের কনটেন্ট অংশ */}
        <div className="rows">
          {experiences.map((e, i) => {
            const currentImgIndex = imageIndices[i] || 0;
            const hasImages = e.images && e.images.length > 0;

            return (
              <article className="row" key={i}>
                {/* সিরিয়াল নাম্বার */}
                <div className="num" style={{ color: "var(--accent, #10b981)", fontWeight: "bold" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div>
                  {/* পজিশন/রোল */}
                  <h2 className="item-title">{e.role}</h2>

                  {/* অর্গানাইজেশন ও পিরিয়ড */}
                  <div
                    className="meta"
                    style={{
                      color: "var(--accent, #10b981)",
                      fontWeight: "600",
                      marginTop: "4px",
                      marginBottom: "16px",
                      fontSize: "0.95rem",
                    }}
                  >
                    {e.org} {e.period && <span style={{ opacity: 0.8, color: "inherit" }}>• {e.period}</span>}
                  </div>

                  {/* ইমেজ সোয়াইপার / ক্যারোসেল (Projects পেজের মতো ফুল-উইডথ রেশিও) */}
                  {hasImages && e.images && (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 9",
                        overflow: "hidden",
                        borderRadius: "16px",
                        marginBottom: "1rem",
                        background: "#111",
                      }}
                    >
                      <img
                        src={e.images[currentImgIndex]}
                        alt={`${e.role} preview`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />

                      {/* নেভিগেশন বাটন */}
                      {e.images.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() => prevImage(i, e.images!.length)}
                            style={{
                              position: "absolute",
                              left: "12px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              background: "rgba(0,0,0,0.6)",
                              color: "#fff",
                              border: "none",
                              borderRadius: "50%",
                              padding: "8px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              zIndex: 2,
                            }}
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            type="button"
                            onClick={() => nextImage(i, e.images!.length)}
                            style={{
                              position: "absolute",
                              right: "12px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              background: "rgba(0,0,0,0.6)",
                              color: "#fff",
                              border: "none",
                              borderRadius: "50%",
                              padding: "8px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              zIndex: 2,
                            }}
                          >
                            <ChevronRight size={20} />
                          </button>
                          <div
                            style={{
                              position: "absolute",
                              bottom: "12px",
                              right: "12px",
                              background: "rgba(0,0,0,0.75)",
                              color: "#fff",
                              fontSize: "0.75rem",
                              padding: "3px 10px",
                              borderRadius: "12px",
                              fontFamily: "monospace",
                              zIndex: 2,
                            }}
                          >
                            {currentImgIndex + 1} / {e.images.length}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* শর্ট ডেসক্রিপশন */}
                  <p className="text">{e.summary || e.text}</p>

                  {/* See details টগল বাটন */}
                  {e.details && (
                    <div style={{ marginTop: "8px" }}>
                      <button
                        type="button"
                        onClick={() => toggleDetails(i)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "var(--accent, #10b981)",
                          cursor: "pointer",
                          fontWeight: "600",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          padding: 0,
                          fontSize: "0.95rem",
                        }}
                      >
                        {expanded[i] ? "Hide details" : "See details"}
                        {expanded[i] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      {expanded[i] && (
                        <div
                          style={{
                            marginTop: "12px",
                            padding: "14px",
                            background: "rgba(255,255,255,0.03)",
                            borderRadius: "8px",
                            fontSize: "0.95rem",
                            lineHeight: "1.6",
                            borderLeft: "3px solid var(--accent, #10b981)",
                          }}
                        >
                          {e.details}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
