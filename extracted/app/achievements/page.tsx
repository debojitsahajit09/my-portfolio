import { site } from "@/data/site";
import AwardCard from "@/components/AwardCard";

export default function Achievements() {
  return (
    <main className="section">
      <div className="wrap">
        {/* সবুজ রঙের সাবটাইটেল */}
        <div className="eyebrow" style={{ color: "#10b981", fontWeight: "600" }}>
          Achievements
        </div>
        
        <h1 className="title" style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>
          Proof of the journey.
        </h1>
        
        <p className="text" style={{ fontSize: "0.9rem", opacity: 0.8 }}>
          Awards and recognition — tap "See details" for the full story.
        </p>

        <div style={{ marginTop: 24, display: "grid", gap: "12px" }}>
          {site.achievements.map((a) => (
            <AwardCard a={a} key={a.n} />
          ))}
        </div>
      </div>
    </main>
  );
}
