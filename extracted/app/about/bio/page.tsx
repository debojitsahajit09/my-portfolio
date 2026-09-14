import React from 'react';
import { 
  Award, 
  BookOpen, 
  Cpu, 
  Heart, 
  Palette, 
  Code,
  Users,
  Microscope,
  Bot
} from "lucide-react";

export default function BioPage() {
  return (
    <main className="wrap section" style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1rem" }}>
      
      {/* ----------------- SECTION 1: HERO / HEADER ----------------- */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ 
          color: "var(--muted, #666)", 
          fontSize: "0.85rem", 
          fontWeight: 700, 
          letterSpacing: "0.15em", 
          textTransform: "uppercase", 
          marginBottom: "0.4rem" 
        }}>
          ABOUT
        </p>
        <h1 style={{ 
          fontSize: " clamp(2.2rem, 5vw, 3.2rem)", 
          fontWeight: 800, 
          lineHeight: 1.1, 
          margin: 0,
          letterSpacing: "-0.02em"
        }}>
          More than a portfolio.
        </h1>
      </div>

      <p style={{ fontSize: "1.1rem", lineHeight: 1.7, opacity: 0.9, marginBottom: "1.5rem" }}>
        I’m <strong>Debojit Saha Jit</strong>, an independent researcher, robotics innovator, and HSC Science student at <strong>Notre Dame College, Dhaka</strong>. My work bridges <strong>robotics & embedded hardware design, biomedical research, grassroots STEM mentorship, and full-stack engineering</strong>.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: 1.7, opacity: 0.85, marginBottom: "2rem" }}>
        As the <strong>Founder & Software Lead of Team C.A.R.E.</strong> and founder of the <strong>Rajbari Robotics Association</strong>, my core drive is twofold: engineering intelligent hardware systems to build real-world autonomy for disabled individuals, and expanding robotics education to mentor thousands of young innovators across Bangladesh.
      </p>

      {/* Quick Focus Pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "3rem" }}>
        {[
          "Robotics & Hardware Systems", 
          "Assistive Tech & Bio-Engineering", 
          "Independent Applied Research",
          "STEM Mentorship & Leadership", 
          "Full-Stack Web & Software"
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

      {/* ----------------- SECTION 2: WHY I BUILD & RESEARCH ----------------- */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "10px" }}>
          <Heart size={22} style={{ color: "#10b981" }} /> Core Philosophy & Purpose
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
            Passionate about circuits and mechanics since early childhood, my engineering focus shifted deeply into <strong>assistive technology and research</strong> when I observed firsthand the life-altering impacts of physical paralysis and mobility restriction.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            This led to founding <strong>Team C.A.R.E.</strong> to prove that cutting-edge robotics—featuring gesture controls, IoT health monitoring, and offline AI voice interaction—can be engineered locally at a fraction of standard commercial costs.
          </p>
          <p style={{ margin: 0 }}>
            Parallel to hardware creation, I believe true impact requires knowledge sharing. Through research publications, mentorship initiatives, and open-access STEM workshops, I aim to inspire and train the next generation of problem solvers.
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
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#10b981" }}>3,000+</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>Students Mentored</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              Grassroots STEM, WRO, IRO, & Math Olympiad coaching via Rajbari Robotics Association.
            </p>
          </div>

          <div style={{ padding: "1.2rem", border: "1px solid var(--line, #333)", borderRadius: "10px", background: "var(--card, transparent)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#10b981" }}>6th Rank</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>APICTA 2025 (Taiwan)</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              Represented Bangladesh internationally among top global finalists with C.A.R.E Wheelchair.
            </p>
          </div>

          <div style={{ padding: "1.2rem", border: "1px solid var(--line, #333)", borderRadius: "10px", background: "var(--card, transparent)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#10b981" }}>Published</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>Author (Genetics Book)</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              ISBN & DOI registered DNA manuscript on Zenodo; distributed 500+ print copies.
            </p>
          </div>

          <div style={{ padding: "1.2rem", border: "1px solid var(--line, #333)", borderRadius: "10px", background: "var(--card, transparent)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#10b981" }}>36+</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>National & Intl. Awards</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              Across Robotics displays, Science Carnivals, Math Summits, & Web competitions.
            </p>
          </div>

        </div>
      </div>

      {/* ----------------- SECTION 4: AREAS OF FOCUS ----------------- */}
      <div style={{ marginBottom: "3.5rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "1.5rem" }}>
          Areas of Focus & Expertise
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          {/* 01: Robotics & Embedded Hardware */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #333)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Bot style={{ color: "#10b981" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>01 — Robotics & Intelligent Systems</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Designing custom circuit logic, gesture-controlled mobility platforms, multi-sensor integration, ESP-NOW wireless networking, and offline voice AI systems for real-world assistive hardware.
            </p>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              <strong>Stack & Tools:</strong> ESP32 · ESP8266 · Arduino · MPU6050 · BTS7960 Motor Drivers · IoT Protocols · Sensors
            </div>
          </div>

          {/* 02: Independent Applied Research */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #333)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Microscope style={{ color: "#10b981" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>02 — Independent Applied Research</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Conducting empirical modeling and simulation research in bio-inspired adaptive water purification models, wireless RF energy harvesting for cardiac pacemakers, and published genetics education literature.
            </p>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              <strong>Research Tools:</strong> MATLAB · Simulink · ANSYS · Technical Writing · Zenodo Digital Repository
            </div>
          </div>

          {/* 03: Grassroots Mentorship & Leadership */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #333)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Users style={{ color: "#10b981" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>03 — Grassroots Mentorship & Community Leadership</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Founder of Rajbari Robotics Association and R&D President at Science Spark. Host free robotics bootcamps, train rural innovators, and manage events like NDITC Tech Fest 2026 for 4,000+ participants.
            </p>
          </div>

          {/* 04: Full-Stack Web Dev & UI/UX */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #333)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Code style={{ color: "#10b981" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>04 — Full-Stack Development & Visual Design</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Engineering custom DBMS portals, responsive web platforms, and visual brand identities for emerging clubs and enterprises.
            </p>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              <strong>Technologies:</strong> Next.js · React · HTML/CSS · PHP · SQL · Tailwind CSS · Adobe Creative Suite
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
