"use client";

import React from 'react';
import { 
  Award, 
  Code,
  Users,
  Microscope,
  Bot,
  Palette
} from "lucide-react";

export default function BioPage() {
  return (
    <main className="section min-h-screen py-10 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="wrap">
        
        {/* Header Section Matching Experience Page Structure */}
        <div className="mb-8">
          <div className="eyebrow text-xs md:text-sm font-semibold tracking-widest uppercase mb-2 text-emerald-500">
            ABOUT ME
          </div>
          <h1 className="title text-3xl md:text-5xl font-bold tracking-tight">
            More than a portfolio.
          </h1>
        </div>

        {/* Custom Mouse Scroll Animation */}
        <div className="flex items-center justify-center my-10">
          <div className="w-6 h-10 border-2 border-emerald-500 rounded-full flex justify-center p-1 relative">
            <div className="w-1.5 h-2.5 bg-emerald-500 rounded-full animate-[fadeUp_1.5s_infinite]" />
          </div>
        </div>

        {/* Styled-JSX Keyframes Animation */}
        <style jsx>{`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(12px);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
              transform: translateY(0px);
            }
          }
        `}</style>

        {/* Main Content List Container matching Experience Layout */}
        <div className="space-y-16 mt-12">

          {/* Intro Paragraphs */}
          <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-4xl">
            <p>
              I’m <strong className="text-emerald-500 font-bold">Debojit Saha Jit</strong>, an independent researcher, robotics innovator, and HSC Science student at <strong className="text-emerald-500 font-bold">Notre Dame College, Dhaka</strong>. My work bridges <strong className="text-emerald-500 font-bold">robotics & embedded hardware design, biomedical research, grassroots STEM mentorship, and full-stack engineering</strong>.
            </p>

            <p>
              As the <strong className="text-emerald-500 font-bold">Founder & Software Lead of Team C.A.R.E.</strong> and founder of the <strong className="text-emerald-500 font-bold">Rajbari Robotics Association</strong>, my core drive is twofold: engineering intelligent hardware systems to build real-world autonomy for disabled individuals, and expanding robotics education to mentor thousands of young innovators across Bangladesh.
            </p>
          </div>

          <hr className="border-border my-8" />

          {/* Section 1: Core Philosophy & Purpose */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Core Philosophy & Purpose
            </h2>
            
            <div className="p-5 md:p-6 rounded-xl bg-card border-l-4 border-emerald-500 text-card-foreground text-sm md:text-base leading-relaxed space-y-3 shadow-inner">
              <p>
                Passionate about circuits and mechanics since early childhood, my engineering focus shifted deeply into <strong className="text-emerald-500 font-bold">assistive technology and research</strong> when I observed firsthand the life-altering impacts of physical paralysis and mobility restriction.
              </p>
              <p>
                This led to founding <strong className="text-emerald-500 font-bold">Team C.A.R.E.</strong> to prove that cutting-edge robotics—featuring gesture controls, IoT health monitoring, and offline AI voice interaction—can be engineered locally at a fraction of standard commercial costs.
              </p>
              <p>
                Parallel to hardware creation, I believe true impact requires knowledge sharing. Through research publications, mentorship initiatives, and open-access STEM workshops, I aim to inspire and train the next generation of problem solvers.
              </p>
            </div>
          </section>

          {/* Section 2: Key Accomplishments */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2">
              <Award className="text-emerald-500" size={28} /> Key Accomplishments At a Glance
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              
              <div className="p-5 rounded-2xl border bg-card text-card-foreground shadow-sm hover:border-emerald-500 transition-all">
                <div className="text-3xl font-extrabold text-emerald-500 font-mono">3,000+</div>
                <div className="font-semibold text-base mt-1 mb-2">Students Mentored</div>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Grassroots STEM, WRO, IRO, & Math Olympiad coaching via Rajbari Robotics Association.
                </p>
              </div>

              <div className="p-5 rounded-2xl border bg-card text-card-foreground shadow-sm hover:border-emerald-500 transition-all">
                <div className="text-3xl font-extrabold text-emerald-500 font-mono">6th Rank</div>
                <div className="font-semibold text-base mt-1 mb-2">APICTA 2025 (Taiwan)</div>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Represented Bangladesh internationally among top global finalists with C.A.R.E Wheelchair.
                </p>
              </div>

              <div className="p-5 rounded-2xl border bg-card text-card-foreground shadow-sm hover:border-emerald-500 transition-all">
                <div className="text-3xl font-extrabold text-emerald-500 font-mono">Published</div>
                <div className="font-semibold text-base mt-1 mb-2">Author (Genetics Book)</div>
                <p className="text-muted-foreground text-xs md:text-sm">
                  ISBN & DOI registered DNA manuscript on Zenodo; distributed 500+ print copies.
                </p>
              </div>

              <div className="p-5 rounded-2xl border bg-card text-card-foreground shadow-sm hover:border-emerald-500 transition-all">
                <div className="text-3xl font-extrabold text-emerald-500 font-mono">36+</div>
                <div className="font-semibold text-base mt-1 mb-2">National & Intl. Awards</div>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Across Robotics displays, Science Carnivals, Math Summits, & Web competitions.
                </p>
              </div>

            </div>
          </section>

          {/* Section 3: Areas of Focus */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Areas of Focus & Expertise
            </h2>

            <div className="space-y-4">
              
              {/* 01: Robotics */}
              <div className="p-5 md:p-6 rounded-2xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Bot className="text-emerald-500" size={20} />
                  <h3 className="font-bold text-lg md:text-xl">01 — Robotics & Intelligent Systems</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Designing custom circuit logic, gesture-controlled mobility platforms, multi-sensor integration, ESP-NOW wireless networking, and offline voice AI systems for real-world assistive hardware.
                </p>
                <div className="text-xs md:text-sm text-emerald-500/90 font-mono pt-1">
                  <strong className="text-emerald-500 font-bold">Stack & Tools:</strong> ESP32 · ESP8266 · Arduino · MPU6050 · BTS7960 Motor Drivers · IoT Protocols
                </div>
              </div>

              {/* 02: Applied Research */}
              <div className="p-5 md:p-6 rounded-2xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Microscope className="text-emerald-500" size={20} />
                  <h3 className="font-bold text-lg md:text-xl">02 — Independent Applied Research</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Conducting empirical modeling and simulation research in bio-inspired adaptive water purification models, wireless RF energy harvesting for cardiac pacemakers, and published genetics education literature.
                </p>
                <div className="text-xs md:text-sm text-emerald-500/90 font-mono pt-1">
                  <strong className="text-emerald-500 font-bold">Research Tools:</strong> MATLAB · Simulink · ANSYS · Technical Writing · Zenodo Digital Repository
                </div>
              </div>

              {/* 03: Mentorship */}
              <div className="p-5 md:p-6 rounded-2xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="text-emerald-500" size={20} />
                  <h3 className="font-bold text-lg md:text-xl">03 — STEM Mentorship & Community Leadership</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Founder of Rajbari Robotics Association and R&D President at Science Spark. Host free robotics bootcamps, train rural innovators, and manage events like NDITC Tech Fest 2026 for 4,000+ participants.
                </p>
              </div>

              {/* 04: Full-Stack Web */}
              <div className="p-5 md:p-6 rounded-2xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Code className="text-emerald-500" size={20} />
                  <h3 className="font-bold text-lg md:text-xl">04 — Full-Stack Web Development & Software</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Engineering responsive full-stack web platforms, custom DBMS inventory portals for local businesses, and dynamic user interfaces for organizations.
                </p>
                <div className="text-xs md:text-sm text-emerald-500/90 font-mono pt-1">
                  <strong className="text-emerald-500 font-bold">Technologies:</strong> Next.js · React · HTML/CSS · PHP · SQL · Tailwind CSS
                </div>
              </div>

              {/* 05: UI/UX & Design */}
              <div className="p-5 md:p-6 rounded-2xl border bg-card text-card-foreground shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <Palette className="text-emerald-500" size={20} />
                  <h3 className="font-bold text-lg md:text-xl">05 — UI/UX & Graphic Design</h3>
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Crafting visual brand identities, pro-bono graphic layouts for 10+ emerging clubs, UI wireframing, and promotional tech carnival graphics.
                </p>
                <div className="text-xs md:text-sm text-emerald-500/90 font-mono pt-1">
                  <strong className="text-emerald-500 font-bold">Tools:</strong> Adobe Photoshop · Adobe Illustrator · Premiere Pro · Figma
                </div>
              </div>

            </div>
          </section>

        </div>

      </div>
    </main>
  );
}
