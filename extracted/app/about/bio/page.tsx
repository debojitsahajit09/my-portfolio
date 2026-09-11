import { site } from "@/data/site";

export default function BioPage() {
  return (
    <main className="wrap section">
      <div className="eyebrow">ABOUT • BIO</div>
      <h1 className="title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        {site.about.title}
      </h1>
      <p style={{ lineHeight: "1.7", opacity: 0.9, fontSize: "1rem" }}>
        {site.about.text}
      </p>
      
      <blockquote style={{
        marginTop: "2rem",
        padding: "1rem 1.5rem",
        borderLeft: "4px solid var(--accent, #3b82f6)",
        background: "var(--card, rgba(255,255,255,0.05))",
        fontStyle: "italic"
      }}>
        "{site.about.quote}"
      </blockquote>
    </main>
  );
}
