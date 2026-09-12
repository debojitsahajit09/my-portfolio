import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Shell from "@/components/Shell";

const display = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Debojit Saha Jit — Robotics • AI • Innovation",
  description:
    "Official portfolio and personal archive of Debojit Saha Jit (Debojit Saha). Science student at Notre Dame College, robotics developer, and hardware engineering researcher.",
  keywords: [
    "Debojit",
    "Debojit Saha",
    "Debojit Saha Jit",
    "Debojit Jit",
    "Debojit portfolio",
  ],
  authors: [{ name: "Debojit Saha Jit" }],
  openGraph: {
    title: "Debojit Saha Jit — Portfolio",
    description: "Personal archive and portfolio of Debojit Saha Jit.",
    url: "https://debojitsaha.me",
    siteName: "Debojit Saha Jit",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Debojit Saha Jit",
    alternateName: ["Debojit Saha", "Debojit", "Jit"],
    url: "https://debojitsaha.me",
    sameAs: ["https://github.com/debojitsahajit09"],
    jobTitle: "Student & Hardware Developer",
    affiliation: {
      "@type": "EducationalOrganization",
      name: "Notre Dame College, Dhaka",
    },
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
