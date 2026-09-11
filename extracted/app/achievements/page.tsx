import { site } from "@/data/site";
import AwardCard from "@/components/AwardCard";

export default function Achievements() {
  return (
    <main className="section">
      <div className="wrap">
        <div className="eyebrow" style={{ color: "#10b981", fontWeight: "600" }}>
          Achievements
        </div>
        
        <h1 className="title" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
          Proof of the journey.
        </h1>
        
        <p className="text" style={{ fontSize: "1rem", opacity: 0.85, marginBottom: "2rem" }}>
          Awards and recognition — tap "See details" for the full story.
        </p>

        <div className="flex flex-col gap-8">
          {site.achievements.map((a) => (
            <AwardCard a={a} key={a.n} />
          ))}
        </div>
      </div>
    </main>
  );
}
