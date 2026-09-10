import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          {/* ছবির কন্টেইনার - বাইরের রিং সরিয়ে ছবি পরিষ্কার রাখা হয়েছে */}
          <div 
            className="portrait" 
            style={{ 
              width: "300px", 
              height: "300px", 
              margin: "0 auto 28px auto", 
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* মূল প্রোফাইল পিকচার এবং ভেতরের সবুজ বর্ডার */}
            <img 
              src={site.photo} 
              alt={site.name} 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover", 
                borderRadius: "50%",
                border: "3px solid #10b981",
                zIndex: 2
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

          {/* স্ক্রিনশটের মতো মাউস-পিল স্ক্রোল অ্যানিমেশন */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <div 
              style={{
                width: "26px",
                height: "44px",
                borderRadius: "20px",
                border: "2px solid #10b981",
                display: "flex",
                justifyContent: "center",
                paddingTop: "8px"
              }}
            >
              <div 
                style={{
                  width: "4px",
                  height: "8px",
                  borderRadius: "2px",
                  backgroundColor: "#10b981",
                  animation: "bounce 1.5s infinite"
                }}
              />
            </div>
          </div>
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
