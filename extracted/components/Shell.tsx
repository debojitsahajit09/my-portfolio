"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// নতুন সিকোয়েন্স
const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    isDropdown: true,
    subItems: [
      { href: "/about#bio", label: "Bio" },
      { href: "/about#education", label: "Education" },
      { href: "/about#skills", label: "Skills" },
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
                  const isActive = path === item.href;

                  if (item.isDropdown) {
                    return (
                      <div key={item.href} style={{ width: "100%" }}>
                        <div
                          onClick={() => setAboutOpen(!aboutOpen)}
                          className={isActive ? "active" : ""}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            cursor: "pointer",
                            padding: "10px 0",
                            fontSize: "1.05rem",
                          }}
                        >
                          <span>{item.label}</span>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <ChevronDown
                              size={16}
                              style={{
                                transform: aboutOpen ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.2s ease",
                              }}
                            />
                            <ArrowRight size={16} />
                          </div>
                        </div>

                        {/* About-এর ড্রপডাউন সাব-সেকশন */}
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

      <footer>
        <div className="wrap foot">
          <div>
            <b>Debojit Saha Jit</b>
            <p>Robotics • AI • Embedded Systems • Innovation</p>
          </div>
          <div>
            <p>© 2026 Debojit Saha Jit</p>
            <p>Last updated: September 2026</p>
          </div>
        </div>
      </footer>
    </>
  );
}
