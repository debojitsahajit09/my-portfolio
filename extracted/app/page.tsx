import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* ডান পাশে স্টাইলিশ সার্কেল-স্টাইল স্ক্রোল ইনডিকেটর */}
      <div 
        style={{
          position: "fixed",
          right: "24px",
          bottom: "32px",
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          pointerEvents: "none"
        }}
      >
        <span style={{ fontSize: "10px", fontFamily: "monospace", letterSpacing: "2px", color: "#10b981", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div style={{ position: "relative", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", backgroundColor: "#10b981", opacity: 0.25, animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }} />
          <span style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#10b981", border: "2px solid #000" }} />
        </div>
      </div>

      <section className="hero">
        <div className="wrap">
          {/* বড় সাইজের পরিষ্কার প্রোফাইল ছবি */}
          <div 
            className="portrait" 
            style={{ 
              width: "260px", 
              height: "260px", 
              margin: "0 auto 28px auto", 
              position: "relative"
            }}
          >
            <img 
              src={site.photo} 
              alt={site.name} 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover", 
                borderRadius: "50%",
                border: "3px solid #10b981",
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.25)"
              }} 
            />
          </div>

          <h1>{site.name}</h1>
          <div className="role">{site.role.toUpperCase()}</div>
          <p className="lead">{site.home.intro}</p>

          <div className="buttons">
            <Link className="btn primary" href="/projects">
              Explore my work <ArrowRight size={14} />
            </Link>
            <Link className="btn" href={site.resume}>
              <Download size={14} /> Résumé
            </Link>
          </div>

          <p className="muted" style={{ marginTop: 28, fontSize: 12 }}>
            <MapPin size={13} style={{ display: "inline" }} /> {site.location}
          </p>
        </div>
      </section>

      <div className="stats wrap">
        {site.stats.map(([v, l]) => (
          <div className="stat" key={l}>
            <b>{v}</b>
            <span>{l}</span>
          </div>
        ))}
      </div>

      <section className="section">
        <div className="wrap two">
          <div>
            <div className="eyebrow">The idea</div>
            <h2 className="title">This is my archive.</h2>
          </div>
          <div>
            <p className="quote">{site.about.quote}</p>
            <Link className="btn primary" href="/about" style={{ marginTop: 16 }}>
              Read my story <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
