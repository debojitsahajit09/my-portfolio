import React from 'react';
import { 
  Award, 
  Code,
  Users,
  Microscope,
  Bot,
  Palette
} from "lucide-react";

export default function BioPage() {
  return (
    <main className="wrap section" style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1rem" }}>
      
      {/* ----------------- CUSTOM SCROLL DOT ANIMATION CSS ----------------- */}
      <style>{`
        @keyframes scrollDotFade {
          0% {
            transform: translateY(10px);
            opacity: 1;
          }
          100% {
            transform: translateY(-10px);
            opacity: 0;
          }
        }
        .scroll-dot-anim {
          animation: scrollDotFade 1.6s infinite ease-in-out;
        }
      `}</style>

      {/* ----------------- SECTION 1: HERO / HEADER ----------------- */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ 
          color: "#52a885", 
          fontSize: "0.8rem", 
          fontWeight: 700, 
          letterSpacing: "0.22em", 
          textTransform: "uppercase", 
          marginBottom: "0.75rem",
          fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
        }}>
          ABOUT ME
        </p>
        <h1 style={{ 
          fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)", 
          fontWeight: 800, 
          lineHeight: 1.05, 
          margin: 0,
          letterSpacing: "-0.04em",
          color: "#0a0a0a",
          fontFamily: "'Syne', 'Plus Jakarta Sans', sans-serif"
        }}>
          More than a portfolio.
        </h1>
      </div>

      {/* ----------------- INTRO PARAGRAPHS ----------------- */}
      <p style={{ fontSize: "1.1rem", lineHeight: 1.7, opacity: 0.9, marginBottom: "1.5rem" }}>
        I’m <strong>Debojit Saha Jit</strong>, an independent researcher, robotics innovator, and HSC Science student at <strong>Notre Dame College, Dhaka</strong>. My work bridges <strong>robotics & embedded hardware design, biomedical research, grassroots STEM mentorship, and full-stack engineering</strong>.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: 1.7, opacity: 0.85, marginBottom: "2rem" }}>
        As the <strong>Founder & Software Lead of Team C.A.R.E.</strong> and founder of the <strong>Rajbari Robotics Association</strong>, my core drive is twofold: engineering intelligent hardware systems to build real-world autonomy for disabled individuals, and expanding robotics education to mentor thousands of young innovators across Bangladesh.
      </p>

      {/* ----------------- SCROLL ANIMATION ICON (PLACED DIRECTLY BELOW TEXT) ----------------- */}
      <div style={{ display: "flex", justifyContent: "center", margin: "2.5rem 0 3.5rem 0" }}>
        <div style={{ 
          width: "24px", 
          height: "40px", 
          borderRadius: "20px", 
          border: "2px solid #52A885", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center",
          position: "relative"
        }}>
          <div className="scroll-dot-anim" style={{ 
            width: "6px", 
            height: "6px", 
            borderRadius: "50%", 
            background: "#52A885" 
          }} />
        </div>
      </div>

      <hr style={{ border: "none", borderTop: "1px solid var(--line, #e5e7eb)", margin: "2.5rem 0" }} />

      {/* ----------------- SECTION 2: CORE PHILOSOPHY & PURPOSE ----------------- */}
      <div style={{ marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "1rem" }}>
          Core Philosophy & Purpose
        </h2>
        
        <div style={{ 
          padding: "1.5rem", 
          borderLeft: "3px solid #52A885", 
          background: "var(--card-bg, rgba(0,0,0,0.02))", 
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
          <Award size={22} style={{ color: "#52A885" }} /> Key Accomplishments At a Glance
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.2rem" }}>
          
          <div style={{ padding: "1.2rem", border: "1px solid var(--line, #e5e7eb)", borderRadius: "10px", background: "var(--card, transparent)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#52A885" }}>3,000+</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>Students Mentored</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              Grassroots STEM, WRO, IRO, & Math Olympiad coaching via Rajbari Robotics Association.
            </p>
          </div>

          <div style={{ padding: "1.2rem", border: "1px solid var(--line, #e5e7eb)", borderRadius: "10px", background: "var(--card, transparent)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#52A885" }}>6th Rank</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>APICTA 2025 (Taiwan)</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              Represented Bangladesh internationally among top global finalists with C.A.R.E Wheelchair.
            </p>
          </div>

          <div style={{ padding: "1.2rem", border: "1px solid var(--line, #e5e7eb)", borderRadius: "10px", background: "var(--card, transparent)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#52A885" }}>Published</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>Author (Genetics Book)</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              ISBN & DOI registered DNA manuscript on Zenodo; distributed 500+ print copies.
            </p>
          </div>

          <div style={{ padding: "1.2rem", border: "1px solid var(--line, #e5e7eb)", borderRadius: "10px", background: "var(--card, transparent)" }}>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#52A885" }}>36+</div>
            <div style={{ fontWeight: 600, margin: "4px 0" }}>National & Intl. Awards</div>
            <p style={{ fontSize: "0.85rem", opacity: 0.7, margin: 0 }}>
              Across Robotics displays, Science Carnivals, Math Summits, & Web competitions.
            </p>
          </div>

        </div>
      </div>

      {/* ----------------- SECTION 4: AREAS OF FOCUS (5 CARDS) ----------------- */}
      <div style={{ marginBottom: "3.5rem" }}>
        <h2 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "1.5rem" }}>
          Areas of Focus & Expertise
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          
          {/* 01: Robotics & Hardware */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #e5e7eb)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Bot style={{ color: "#52A885" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>01 — Robotics & Intelligent Systems</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Designing custom circuit logic, gesture-controlled mobility platforms, multi-sensor integration, ESP-NOW wireless networking, and offline voice AI systems for real-world assistive hardware.
            </p>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              <strong>Stack & Tools:</strong> ESP32 · ESP8266 · Arduino · MPU6050 · BTS7960 Motor Drivers · IoT Protocols
            </div>
          </div>

          {/* 02: Independent Applied Research */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #e5e7eb)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Microscope style={{ color: "#52A885" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight 700, margin: 0 }}>02 — Independent Applied Research</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Conducting empirical modeling and simulation research in bio-inspired adaptive water purification models, wireless RF energy harvesting for cardiac pacemakers, and published genetics education literature.
            </p>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              <strong>Research Tools:</strong> MATLAB · Simulink · ANSYS · Technical Writing · Zenodo Digital Repository
            </div>
          </div>

          {/* 03: Mentorship & Leadership */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #e5e7eb)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Users style={{ color: "#52A885" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>03 — STEM Mentorship & Community Leadership</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Founder of Rajbari Robotics Association and R&D President at Science Spark. Host free robotics bootcamps, train rural innovators, and manage events like NDITC Tech Fest 2026 for 4,000+ participants.
            </p>
          </div>

          {/* 04: Full-Stack Web Development */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #e5e7eb)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Code style={{ color: "#52A885" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>04 — Full-Stack Web Development & Software</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Engineering responsive full-stack web platforms, custom DBMS inventory portals for local businesses, and dynamic user interfaces for organizations.
            </p>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              <strong>Technologies:</strong> Next.js · React · HTML/CSS · PHP · SQL · Tailwind CSS
            </div>
          </div>

          {/* 05: UI/UX & Graphic Design */}
          <div style={{ padding: "1.5rem", border: "1px solid var(--line, #e5e7eb)", borderRadius: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
              <Palette style={{ color: "#52A885" }} size={20} />
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0 }}>05 — UI/UX & Graphic Design</h3>
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.85, lineHeight: 1.6, margin: "0 0 10px 0" }}>
              Crafting visual brand identities, pro-bono graphic layouts for 10+ emerging clubs, UI wireframing, and promotional tech carnival graphics.
            </p>
            <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
              <strong>Tools:</strong> Adobe Photoshop · Adobe Illustrator · Premiere Pro · Figma
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
