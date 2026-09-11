import { site } from "@/data/site";

export default function SkillsPage() {
  return (
    <main className="wrap section">
      <div className="eyebrow">ABOUT • SKILLS & INTERESTS</div>
      <h1 className="title" style={{ fontSize: "2rem", marginBottom: "2rem" }}>Technical Expertise</h1>
      
      <div style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>Research Interests</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {site.about.researchInterests.map((interest, idx) => (
            <span 
              key={idx}
              style={{
                padding: "6px 14px",
                borderRadius: "20px",
                border: "1px solid var(--line, #444)",
                fontSize: "0.9rem"
              }}
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {Object.entries(site.skills).map(([category, items]) => (
          <div key={category}>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.6rem" }}>{category}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {items.map((skill, i) => (
                <span 
                  key={i} 
                  style={{ 
                    padding: "6px 12px", 
                    background: "var(--card, #111)", 
                    border: "1px solid var(--line, #333)", 
                    borderRadius: "6px",
                    fontSize: "0.85rem"
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
