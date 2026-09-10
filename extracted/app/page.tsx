import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          {/* ছবির কন্টেইনার - সাইজ বাড়িয়ে ২২০px করা হয়েছে এবং ঘূর্ণায়মান ড্যাশড রিং যোগ করা হয়েছে */}
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
            {/* অনবরত ঘূর্ণায়মান সুক্ষ্ম আউটলাইন রিং */}
            <svg
              className="absolute inset-0 w-full h-full animate-spin"
              style={{ animationDuration: "12s", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#10b981"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                strokeLinecap="round"
                opacity="0.75"
              />
            </svg>

            {/* মূল প্রোফাইল পিকচার এবং ভেতরের সবুজ বর্ডার */}
            <img 
              src={site.photo} 
              alt={site.name} 
              style={{ 
                width: "88%", 
                height: "88%", 
                objectFit: "cover", 
                borderRadius: "50%",
                border: "2px solid #10b981",
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
