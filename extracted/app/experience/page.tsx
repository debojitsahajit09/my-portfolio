"use client";
import { site } from "@/data/site";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";

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

  return (
    <main className="section">
      <div className="wrap two">
        <div>
          <div className="eyebrow">04 / Experience</div>
          <h1 className="title">Where I learned to lead.</h1>
        </div>

        <div className="rows" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {site.experience.map((e, i) => {
            const currentImgIndex = imageIndices[i] || 0;
            const hasImages = e.images && e.images.length > 0;

            return (
              <article
                className="row"
                key={i}
                style={{
                  borderBottom: "1px solid var(--line, #333)",
                  paddingBottom: "2rem",
                  display: "flex",
                  gap: "1.5rem",
                }}
              >
                {/* সবুজ সিরিয়াল নাম্বার */}
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#10b981", // সবুজ কালার
                    minWidth: "45px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div style={{ flex: 1 }}>
                  {/* বড় রোল বা পজিশন */}
                  <h2 style={{ margin: 0, fontSize: "1.6rem", fontWeight: "700" }}>{e.role}</h2>

                  {/* সবুজ অর্গানাইজেশন ও পিরিয়ড */}
                  <div
                    style={{
                      color: "#10b981",
                      fontWeight: "600",
                      marginTop: "4px",
                      marginBottom: "12px",
                      fontSize: "1rem",
                    }}
                  >
                    {e.org} {e.period && <span style={{ opacity: 0.8, color: "inherit" }}>• {e.period}</span>}
                  </div>

                  {/* ইমেজ সোয়াইপার / ক্যারোসেল */}
                  {hasImages && (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxHeight: "350px",
                        overflow: "hidden",
                        borderRadius: "8px",
                        marginBottom: "1rem",
                        background: "#111",
                      }}
                    >
                      <img
                        src={e.images[currentImgIndex]}
                        alt={`${e.role} preview`}
                        style={{
                          width: "100%",
                          height: "350px",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />

                      {/* একাধিক ছবি থাকলে নেভিগেশন বাটনে সোয়াইপ করার সুবিধা */}
                      {e.images.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(i, e.images.length)}
                            style={{
                              position: "absolute",
                              left: "10px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              background: "rgba(0,0,0,0.6)",
                              color: "#fff",
                              border: "none",
                              borderRadius: "50%",
                              padding: "6px",
                              cursor: "pointer",
                            }}
                          >
                            <ChevronLeft size={20} />
                          </button>
                          <button
                            onClick={() => nextImage(i, e.images.length)}
                            style={{
                              position: "absolute",
                              right: "10px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              background: "rgba(0,0,0,0.6)",
                              color: "#fff",
                              border: "none",
                              borderRadius: "50%",
                              padding: "6px",
                              cursor: "pointer",
                            }}
                          >
                            <ChevronRight size={20} />
                          </button>
                          <div
                            style={{
                              position: "absolute",
                              bottom: "8px",
                              right: "12px",
                              background: "rgba(0,0,0,0.7)",
                              color: "#fff",
                              fontSize: "0.75rem",
                              padding: "2px 8px",
                              borderRadius: "12px",
                            }}
                          >
                            {currentImgIndex + 1} / {e.images.length}
                          </div>
                        </>
                      )}
                    </div>
                  )}

                  {/* এক লাইনের শট ডেসক্রিপশন */}
                  <p className="text" style={{ margin: "0 0 8px 0" }}>
                    {e.summary || e.text}
                  </p>

                  {/* See details টগল বাটন */}
                  {e.details && (
                    <div>
                      <button
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
                        }}
                      >
                        {expanded[i] ? "Hide details" : "See details"}
                        {expanded[i] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      {expanded[i] && (
                        <div
                          style={{
                            marginTop: "10px",
                            padding: "12px",
                            background: "rgba(255,255,255,0.03)",
                            borderRadius: "6px",
                            fontSize: "0.95rem",
                            lineHeight: "1.5",
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
