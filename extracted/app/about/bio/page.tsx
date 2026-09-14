import React from 'react';
import { 
  Award, 
  BookOpen, 
  Cpu, 
  Heart, 
  Palette, 
  Code 
} from "lucide-react";

export default function BioPage() {
  return (
    <main className="wrap section" style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1rem" }}>
      
      {/* ----------------- SECTION 1: HERO / HEADER ----------------- */}
      <div className="eyebrow" style={{ color: "#10b981", fontWeight: 600, letterSpacing: "1px" }}>
        ABOUT ME • DEBOJIT SAHA JIT
      </div>
      
      <h1 className="title" style={{ fontSize: "2.2rem", fontWeight: 800, margin: "0.5rem 0 1.5rem 0", lineHeight: 1.2 }}>
        Engineering Technology for Real-World Impact
      </h1>

      <p style={{ fontSize: "1.1rem", lineHeight: 1.7, opacity: 0.9, marginBottom: "1.5rem" }}>
        I’m <strong>Debojit Saha Jit</strong>, an HSC Science student at <strong>Notre Dame College, Dhaka</strong>, and an independent researcher and aspiring Biomedical / Computer Science Engineer from Bangladesh. My work sits at the intersection of <strong>assistive technology, embedded IoT systems, full-stack web development, and visual design</strong>.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: 1.7, opacity: 0.85, marginBottom: "2rem" }}>
        As the <strong>Founder & Software Lead of Team C.A.R.E.</strong>, I build low-cost smart mobility solutions for disabled individuals. Beyond hardware and circuits, I engineer complete digital web systems and design visual identities—turning complex ideas into functional, beautifully engineered tools.
      </p>

      {/* Quick Focus Pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "3rem" }}>
        {[
          "Biomedical & Assistive Tech", 
          "Robotics & Embedded Systems (ESP32/IoT)", 
          "Independent Research",
          "Full-Stack Web Development", 
          "UI/UX & Graphic Design"
        ].map((tag, i) => (
          <span key={i} style={{ 
            padding: "6px 14px", 
            borderRadius: "20px", 
            background: "rgba(16, 185, 129, 0.08)", 
            color: "#10b981", 
            fontSize: "0.85rem", 
            fontWeight: 600,
            border: "1px solid rgba(16, 185, 129, 0.2)"
          }}>
            {tag}
          </span>
        ))}
      </div>

      <hr style={{ border: "none", borderTop: "1px solid var(--line, #333)", margin: "2.5rem 0" }} />

      {/* ----------------- SECTION 2: WHY I BUILD ----------------- */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
          <Heart size={22} style={{ color: "#10b981" }} /> Why I Build
        </h2>
        
        <div style={{ 
          padding: "1.5rem", 
          borderLeft: "3px solid #10b981", 
          background: "var(--card-bg, rgba(255,255,255,0.03))", 
          borderRadius: "0 8px 8px 0",
          fontSize: "1rem",
          lineHeight: 1.7,
          opacity: 0.9 
        }}>
          <p style={{ marginBottom: "1rem" }}>
            My interest in assistive technology became personal when I witnessed how paralysis impacts something as fundamental as human mobility and independence.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            That experience forced me to ask: <em>Could technology do more than just provide movement? Could it understand its user, communicate health metrics to caregivers, and rebuild daily autonomy?</em> That single vision launched <strong>Team C.A.R.E.</strong>
          </p>
          <p style={{ margin: 0 }}>
            Whether through embedded hardware, web interfaces, or published scientific research, my goal is to push technology beyond competition demos into tools that are genuinely useful, practical, and visually intuitive.
          </p>
        </div>
      </div>

      {/* ----------------- SECTION 3: CORE CAREER HIGHLIGHTS ----------------- */}
      <div style={{ marginBottom: "3.5rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "10px" }}>
          <Award size={22} style={{ color: "#10b981" }} /> Key Accomplishments At a Glance
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.2rem" }}>
          
          <div style={{ padding: "1.2rem", border: "1px solid var(--line, #333)", borderRadius: "10px", background: "var(--card, transparent)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#10b981" }}>36+</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>National & Intl. Awards</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              Across Robotics, Math Summits, ICT Carnivals, & Research Displays.
            </p>
          </div>

          <div style={{ padding: "1.2rem", border: "1px solid var(--line, #333)", borderRadius: "10px", background: "var(--card, transparent)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#10b981" }}>6th Rank</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>APICTA 2025 (Taiwan)</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              Represented Bangladesh internationally among 32 projects from 16 countries.
            </p>
          </div>

          <div style={{ padding: "1.2rem", border: "1px solid var(--line, #333)", borderRadius: "10px", background: "var(--card, transparent)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#10b981" }}>Published</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>Author (Genetics Book)</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              ISBN & DOI registered DNA book; distributed 500+ copies.
            </p>
          </div>

          <div style={{ padding: "1.2rem", border: "1px solid var(--line, #333)", borderRadius: "10px", background: "var(--card, transparent)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#10b981" }}>3,000+</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>Students Mentored</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              Grassroots STEM & Robotics training via Rajbari Robotics Association.
            </p>
          </div>

        </div>
      </div>

      {/* ----------------- SECTION 4: AREAS OF EXPERTISE ----------------- */}
      <div style={{ marginBottom: "3.5rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "1.5rem" }}>
          Areas of Focus & Capabilities
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          {/* 01: Assistive & Biomedical Tech */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #333)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Cpu style={{ color: "#10b981" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>01 — Assistive & Biomedical Engineering</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Architecting IoT hardware, gesture-controlled mobility systems, dynamic water filtration models (immune-inspired), and RF energy harvesting pacemakers.
            </p>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              <strong>Tech Stack:</strong> ESP32 · ATmega328p · MATLAB · Simulink · COMSOL · Ansys · Sensors & Actuators
            </div>
          </div>

          {/* 02: STEM Leadership & Research */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #333)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <BookOpen style={{ color: "#10b981" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>02 — Research & STEM Leadership</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Leading R&D teams, authoring educational science literature, and organizing tech carnivals like NDITC Tech Fest 2026 serving 4,000+ participants.
            </p>
          </div>

          {/* 03: Web Development & Systems */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #333)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Code style={{ color: "#10b981" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>03 — Web Development & Custom Software</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Developing full-stack web platforms, responsive UIs, DBMS for local business automation (reduced 40% manual time), and LLM assistants.
            </p>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              <strong>Tech Stack:</strong> HTML/CSS · JavaScript · PHP · SQL · WordPress · REST APIs · Tailwind
            </div>
          </div>

          {/* 04: Graphic Design & Digital Media */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #333)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Palette style={{ color: "#10b981" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>04 — Graphic Design & Media</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Crafting visual identities, pro-bono branding for 10+ emerging clubs, UI wireframes, and promotional tech carnival graphics.
            </p>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              <strong>Tools:</strong> Adobe Photoshop · Adobe Illustrator · Premiere Pro
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
