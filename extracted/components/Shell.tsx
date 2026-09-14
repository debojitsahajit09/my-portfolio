"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Sun, Moon, ArrowRight, ChevronDown, 
  Mail, Phone, Linkedin, Facebook, Instagram, Github, MessageCircle 
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/data/site";

// নতুন সিকোয়েন্স ও আলাদা সাব-পেজ রুট পাথ
const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    isDropdown: true,
    subItems: [
      { href: "/about/bio", label: "Bio" },
      { href: "/about/education", label: "Education" },
      { href: "/about/skills", label: "Skills" },
    ],
  },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/publications", label: "Publications" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export default function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const d = localStorage.getItem("theme") === "dark";
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
  }, []);

  function theme() {
    const d = !dark;
    setDark(d);
    document.documentElement.classList.toggle("dark", d);
    localStorage.setItem("theme", d ? "dark" : "light");
  }

  // সোশ্যাল ও কন্টাক্ট লিঙ্কগুলোর তালিকা
  const socialLinks = [
    { href: `mailto:${site.email || "debojitsahajit@gmail.com"}`, icon: <Mail size={18} />, label: "Email" },
    { href: `tel:${site.phone || "+8801700000000"}`, icon: <Phone size={18} />, label: "Phone" },
    { href: site.social?.whatsapp || "https://wa.me/8801700000000", icon: <MessageCircle size={18} />, label: "WhatsApp" },
    { href: site.social?.linkedin || "https://linkedin.com", icon: <Linkedin size={18} />, label: "LinkedIn" },
    { href: site.social?.github || "https://github.com", icon: <Github size={18} />, label: "GitHub" },
    { href: site.social?.facebook || "https://facebook.com", icon: <Facebook size={18} />, label: "Facebook" },
    { href: site.social?.instagram || "https://instagram.com", icon: <Instagram size={18} />, label: "Instagram" },
    { 
      href: site.social?.orcid || "https://orcid.org", 
      label: "ORCID",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.516.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.434h2.231c2.341 0 3.859-1.5 3.859-3.7 0-2.141-1.488-3.734-3.859-3.734h-2.231z"/>
        </svg>
      ) 
    },
    { 
      href: site.social?.researchgate || "https://researchgate.net", 
      label: "ResearchGate",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.586 0c-.818 0-1.508.272-2.07.817-.563.545-.844 1.222-.844 2.03 0 .809.281 1.486.844 2.031.562.545 1.252.818 2.07.818.809 0 1.486-.273 2.031-.818.545-.545.818-1.222.818-2.031 0-.808-.273-1.485-.818-2.03C21.072.272 20.395 0 19.586 0zM4.414 7.5a4.414 4.414 0 1 0 0 8.828 4.414 4.414 0 0 0 0-8.828zm0 1.5a2.914 2.914 0 1 1 0 5.828 2.914 2.914 0 0 1 0-5.828zm9.586 1h-4v9h4v-3.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5V19h4v-3.5c0-2.485-2.015-4.5-4.5-4.5-1.353 0-2.557.6-3.375 1.543V10z"/>
        </svg>
      ) 
    },
  ];

  return (
    <>
      <header className="nav">
        <div className="wrap navin">
          <Link href="/" className="logo">
            Debojit<span>.</span>
          </Link>
          <div className="navtools">
            <button onClick={theme} aria-label="theme">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button onClick={() => setOpen(true)} aria-label="menu">
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="navpanel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              style={{
                maxHeight: "100vh",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="navpanel-head">
                <span className="logo">
                  Debojit<span>.</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="close"
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "50%",
                    width: 40,
                    height: 40,
                    display: "grid",
                    placeItems: "center",
                    background: "var(--card)",
                  }}
                >
                  <X size={16} />
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "16px" }}>
                {navLinks.map((item) => {
                  const isActive = path === item.href || path.startsWith("/about");

                  if (item.isDropdown) {
                    return (
                      <div key={item.href} style={{ width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={isActive ? "active" : ""}
                            style={{ flex: 1 }}
                          >
                            {item.label}
                          </Link>
                          <div
                            onClick={() => setAboutOpen(!aboutOpen)}
                            style={{
                              cursor: "pointer",
                              padding: "8px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ChevronDown
                              size={16}
                              style={{
                                transform: aboutOpen ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.2s ease",
                              }}
                            />
                          </div>
                        </div>

                        {aboutOpen && (
                          <div
                            style={{
                              paddingLeft: "16px",
                              borderLeft: "2px solid var(--line)",
                              margin: "4px 0 10px 8px",
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                            }}
                          >
                            {item.subItems?.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  fontSize: "0.9rem",
                                  opacity: 0.8,
                                  padding: "4px 0",
                                }}
                              >
                                <span>{sub.label}</span>
                                <ArrowRight size={14} />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      onClick={() => setOpen(false)}
                      key={item.href}
                      className={path === item.href ? "active" : ""}
                      href={item.href}
                    >
                      {item.label}
                      <ArrowRight size={16} />
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={path}
          className="pagewrap"
          initial={{ opacity: 0, clipPath: "inset(8% 0% 8% 0%)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ opacity: 0, clipPath: "inset(8% 0% 8% 0%)" }}
          transition={{ duration: 0.5, ease: [0.83, 0, 0.17, 1] }}
        >
          <motion.span
            className="scanline"
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
            transition={{ duration: 0.6, times: [0, 0.45, 1], ease: "easeInOut" }}
          />
          {children}
        </motion.div>
      </AnimatePresence>

      {/* নতুন রেসপনসিভ ফুটার */}
      <footer style={{ borderTop: "1px solid var(--line)", padding: "40px 0 24px 0", marginTop: "60px" }}>
        <div className="wrap foot" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
            <div>
              <b style={{ fontSize: "1.1rem" }}>Debojit Saha Jit</b>
              <p style={{ opacity: 0.8, fontSize: "0.9rem", marginTop: "4px" }}>
                Robotics • AI • Embedded Systems • Innovation
              </p>
            </div>

            {/* সোশ্যাল আইকন গ্রিড */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
              {socialLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid var(--line)",
                    background: "var(--card)",
                    color: "inherit",
                    transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#10b981";
                    e.currentTarget.style.color = "#10b981";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--line)";
                    e.currentTarget.style.color = "inherit";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center", 
            borderTop: "1px dashed var(--line)", 
            paddingTop: "16px",
            fontSize: "0.85rem",
            opacity: 0.75
          }}>
            <p>© {new Date().getFullYear()} Debojit Saha Jit</p>
            <p style={{ fontWeight: 600, color: "#10b981" }}>Developed by Debojit.</p>
          </div>

        </div>
      </footer>
    </>
  );
}
