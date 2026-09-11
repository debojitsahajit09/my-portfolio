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
      <div className="wrap" style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 1rem" }}>
        {/* হেডার অংশ: সাইজ মূল স্টাইলেই রাখা হয়েছে */}
        <div style={{ marginBottom: "3rem" }}>
          <div className="eyebrow">04 / EXPERIENCE</div>
          <h1 className="title">Where I learned to lead.</h1>
        </div>

        {/* এক্সপেরিয়েন্স কার্ডসমূহ */}
        <div className="rows" style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {experiences.map((e, i) => {
            const currentImgIndex = imageIndices[i] || 0;
            const hasImages = e.images && e.images.length > 0;

            return (
              <article
                className="row"
                key={i}
                style={{
                  borderBottom: "1px solid var(--line, rgba(255,255,255,0.1))",
                  paddingBottom: "2.5rem",
                  display: "flex",
                  gap: "1.5rem",
                }}
              >
                {/* রোবোটিক্স/টেক টাইপ স্টাইলের সিরিয়াল নাম্বার */}
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#10b981",
                    minWidth: "45px",
                    paddingTop: "2px",
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div style={{ flex: 1 }}>
                  {/* পজিশন/রোল */}
                  <h2 style={{ margin: 0, fontSize: "1.75rem", fontWeight: "700" }}>{e.role}</h2>

                  {/* অর্গানাইজেশন ও পিরিয়ড */}
                  <div
                    style={{
                      color: "#10b981",
                      fontWeight: "600",
                      marginTop: "4px",
                      marginBottom: "16px",
                      fontSize: "1.05rem",
                    }}
                  >
                    {e.org} {e.period && <span style={{ opacity: 0.8, color: "inherit" }}>• {e.period}</span>}
                  </div>

                  {/* ইমেজ সোয়াইপার / ক্যারোসেল */}
                  {hasImages && e.images && (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxHeight: "420px",
                        overflow: "hidden",
                        borderRadius: "12px",
                        marginBottom: "1.25rem",
                        background: "#111",
                      }}
                    >
                      <img
                        src={e.images[currentImgIndex]}
                        alt={`${e.role} preview`}
                        style={{
                          width: "100%",
                          height: "420px",
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
                              background: "rgba(0,0,0,0.65)",
                              color: "#fff",
                              border: "none",
                              borderRadius: "50%",
                              padding: "8px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <ChevronLeft size={22} />
                          </button>
                          <button
                            type="button"
                            onClick={() => nextImage(i, e.images!.length)}
                            style={{
                              position: "absolute",
                              right: "12px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              background: "rgba(0,0,0,0.65)",
                              color: "#fff",
                              border: "none",
                              borderRadius: "50%",
                              padding: "8px",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <ChevronRight size={22} />
                          </button>
                          <div
                            style={{
                              position: "absolute",
                              bottom: "12px",
                              right: "14px",
                              background: "rgba(0,0,0,0.75)",
                              color: "#fff",
                              fontSize: "0.8rem",
                              padding: "3px 10px",
                              borderRadius: "12px",
                              fontFamily: "monospace",
                            }}
                          >
                            {currentImgIndex + 1} / {e.images.length}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* শর্ট ডেসক্রিপশন */}
                  <p className="text" style={{ margin: "0 0 10px 0", fontSize: "1.05rem", lineHeight: "1.6" }}>
                    {e.summary || e.text}
                  </p>

                  {/* See details টগল বাটন */}
                  {e.details && (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleDetails(i)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#10b981",
                          cursor: "pointer",
                          fontWeight: "600",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          padding: 0,
                          marginTop: "4px",
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
                            padding: "16px",
                            background: "rgba(255,255,255,0.03)",
                            borderRadius: "8px",
                            fontSize: "0.98rem",
                            lineHeight: "1.6",
                            borderLeft: "3px solid #10b981",
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
