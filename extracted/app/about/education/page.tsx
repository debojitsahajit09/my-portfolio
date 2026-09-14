import Link from "next/link";
import { site } from "@/data/site";
import { GraduationCap, ExternalLink, Calendar, MapPin } from "lucide-react";

export default function EducationPage() {
  return (
    <main className="wrap section" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div className="eyebrow">ABOUT • EDUCATION</div>
      <h1 className="title" style={{ fontSize: "2.2rem", marginBottom: "2.5rem" }}>
        Academic Journey
      </h1>

      {/* Timeline Wrapper */}
      <div 
        style={{ 
          position: "relative", 
          paddingLeft: "24px", 
          borderLeft: "2px solid var(--line, #333)", 
          display: "flex", 
          flexDirection: "column", 
          gap: "2.5rem" 
        }}
      >
        {site.education.map((item, idx) => (
          <div 
            key={idx} 
            style={{ 
              position: "relative",
              padding: "1.5rem", 
              border: "1px solid var(--line, #333)", 
              borderRadius: "12px",
              background: "var(--card, transparent)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
            }}
          >
            {/* Timeline Dot Icon */}
            <div 
              style={{ 
                position: "absolute", 
                left: "-37px", 
                top: "20px", 
                width: "24px", 
                height: "24px", 
                borderRadius: "50%", 
                background: "var(--bg, #000)", 
                border: "2px solid #10b981", 
                display: "grid", 
                placeItems: "center",
                color: "#10b981"
              }}
            >
              <GraduationCap size={13} />
            </div>

            {/* Year Badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", color: "#10b981", fontWeight: 600, marginBottom: "6px" }}>
              <Calendar size={14} />
              <span>{item.year}</span>
            </div>

            {/* Degree & Institution */}
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, margin: "0 0 4px 0" }}>
              {item.degree}
            </h3>
            <p style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: 600, opacity: 0.9, fontSize: "0.95rem", marginBottom: "12px" }}>
              <MapPin size={14} style={{ opacity: 0.7 }} />
              {item.place}
            </p>

            {/* Badges / Highlights */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
              <span 
                style={{ 
                  padding: "4px 10px", 
                  borderRadius: "20px", 
                  background: "rgba(16, 185, 129, 0.1)", 
                  color: "#10b981", 
                  fontSize: "0.85rem", 
                  fontWeight: 600 
                }}
              >
                {item.gpa}
              </span>
              {item.scholarship && (
                <span 
                  style={{ 
                    padding: "4px 10px", 
                    borderRadius: "20px", 
                    background: "rgba(59, 130, 246, 0.1)", 
                    color: "#3b82f6", 
                    fontSize: "0.85rem", 
                    fontWeight: 600 
                  }}
                >
                  {item.scholarship}
                </span>
              )}
            </div>

            {/* Description */}
            <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: 1.6, marginBottom: "16px" }}>
              {item.text}
            </p>

            {/* Direct Gallery Link Button */}
            <div style={{ borderTop: "1px dashed var(--line, #333)", paddingTop: "12px" }}>
              <Link 
                href="/gallery?category=academic"
                style={{ 
                  display: "inline-flex", 
                  alignItems: "center", 
                  gap: "6px", 
                  fontSize: "0.85rem", 
                  fontWeight: 600, 
                  color: "#10b981",
                  textDecoration: "none"
                }}
              >
                <span>View Memories & Photos</span>
                <ExternalLink size={14} />
              </Link>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}
