import { site } from "@/data/site";

export default function EducationPage() {
  return (
    <main className="wrap section">
      <div className="eyebrow">ABOUT • EDUCATION</div>
      <h1 className="title" style={{ fontSize: "2rem", marginBottom: "2rem" }}>Academic Journey</h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {site.education.map((item, idx) => (
          <div 
            key={idx} 
            style={{ 
              padding: "1.5rem", 
              border: "1px solid var(--line, #333)", 
              borderRadius: "8px",
              background: "var(--card, transparent)"
            }}
          >
            <span style={{ fontSize: "0.85rem", opacity: 0.6 }}>{item.year}</span>
            <h3 style={{ fontSize: "1.2rem", margin: "0.3rem 0" }}>{item.degree}</h3>
            <p style={{ fontWeight: "bold", opacity: 0.9 }}>{item.place}</p>
            <div style={{ display: "flex", gap: "1rem", margin: "0.5rem 0", fontSize: "0.9rem" }}>
              <span>{item.gpa}</span>
              {item.scholarship && <span style={{ color: "var(--accent, #3b82f6)" }}>• {item.scholarship}</span>}
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.8, marginTop: "0.5rem" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
