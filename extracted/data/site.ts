export const site = {
  name: "Debojit Saha Jit",
  role: "Independent Researcher • Assistive Tech • Full-Stack Dev & Designer",
  location: "Dhaka, Bangladesh",
  email: "debojitsahajit09@gmail.com",
  secondaryEmail: "debojitsahajit@gmail.com",
  phone: "+880 1774074009",
  whatsapp: "8801774074009",
  photo: "/images/profile.jpg",
  resume: "/documents/resume.pdf",

  // Navigation menu items
  nav: [
    { label: "Home", href: "/" },
    { 
      label: "About", 
      href: "/about",
      children: [
        { label: "Bio", href: "/about#bio" },
        { label: "Education", href: "/about#education" },
        { label: "Skills", href: "/about#skills" }
      ]
    },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Achievements", href: "/achievements" },
    { label: "Publications", href: "/publications" },
    { label: "Certifications", href: "/certifications" },
    { label: "Contact", href: "/contact" }
  ],

  social: {
    github: "https://github.com/debojitsahajit09",
    linkedin: "https://www.linkedin.com/in/debojit-saha-jit",
    facebook: "https://www.facebook.com/share/1NJNLzCz3o/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/a_virtuoso_cl?stkn=MTQ4dXIydGloam1udA%3D%3D&utm_source=qr",
    youtube: "",
    orcid: "https://orcid.org",
    researchgate: "https://researchgate.net",
    whatsapp: "https://wa.me/8801774074009"
  },

  home: {
    eyebrow: "PORTFOLIO • 2026",
    headline: "Engineering assistive solutions, intelligent systems & digital experiences for real-world impact.",
    intro: "Independent Researcher focusing on Assistive Tech, Biomedical Devices, Full-Stack Web Development, and Visual Design. Intermediate Science Student at Notre Dame College, Dhaka."
  },

  about: {
    title: "Engineering Technology for Real-World Impact.",
    text: "Passionate about robotics and systems design from early childhood. After achieving GPA 5.00 in SSC from Rajbari Govt. High School (District 1st Position), I joined Notre Dame College, Dhaka. Inspired deeply by personal experiences with mobility limitations, I founded Team C.A.R.E. and built the C.A.R.E. Smart Wheelchair. Alongside hardware engineering, I work extensively on full-stack web development, custom DBMS portals, UI/UX, and graphic design for 10+ emerging organizations. I also founded the Rajbari Robotics Association, mentoring over 3,000 students across national and international Olympiads (WRO, IRO, IMO, IPhO). My journey has taken me globally—visiting the USA, Taiwan, and Dubai—including milestones like MIT, Harvard University, NASA Kennedy Space Center, and attending the UN HQ as a guest delegate.",
    quote: "Curiosity starts it. Engineering & Design make it real.",
    researchInterests: [
      "Assistive & Biomedical Engineering",
      "Embedded Systems, IoT & Robotics",
      "Full-Stack Web Development & Custom DBMS",
      "UI/UX & Graphic Design",
      "Environmental & Renewable RF Energy Harvesting",
      "Applied AI & Voice Assistants"
    ]
  },

  stats: [
    ["36+", "National & International achievements"],
    ["6th", "APICTA International Rank (Taiwan)"],
    ["2026", "HSC batch • Notre Dame College"],
    ["3,000+", "Students mentored in STEM & Robotics"]
  ],

  timeline: [
    {
      date: "2026",
      title: "Building the next chapter",
      type: "Education & Future",
      text: "Completing HSC at Notre Dame College while expanding independent research, publishing books, and building web/AI technology solutions."
    },
    {
      date: "2025",
      title: "C.A.R.E Wheelchair & Assistive Tech",
      type: "Flagship Project",
      text: "Developed low-cost assistive mobility integration featuring gesture control, IoT health monitoring, and offline voice AI."
    },
    {
      date: "2024–26",
      title: "International Competitions & Global Exposure",
      type: "Global Impact",
      text: "Representing Bangladesh internationally at APICTA, WICE, and GRIC while leading grassroots robotics and web projects."
    }
  ],

  projects: [
    {
      id: "care",
      n: "01",
      title: "C.A.R.E Wheelchair (V1 & V2)",
      result: "Controlled Assistive Responsive Equipment",
      year: "2026",
      type: "Robotics / Assistive Technology / IoT",
      org: "Team C.A.R.E.",
      image: "/images/care-wheelchair.jpg",
      description: "Controlled Assistive Responsive Equipment — a smart, low-cost assistive mobility system.",
      details: "Gesture-based mobility control, IoT health monitoring, emergency alerts, home automation, caregiver tracking, and an offline AI voice assistant.",
      tags: ["ESP32", "ESP8266", "ESP-NOW", "MPU6050", "BTS7960", "IoT", "AI", "Next.js"]
    },
    {
      id: "orion",
      n: "02",
      title: "ORION",
      result: "Offline Voice AI Assistant",
      year: "2026",
      type: "AI / Intelligent Systems",
      org: "Independent Research",
      image: "/images/orion-ai.jpg",
      description: "An accessibility-focused offline AI voice assistant concept.",
      details: "Built custom AI-powered assistant integrating voice interaction and task automation for smart system control in Bengali and English.",
      tags: ["AI", "Voice Processing", "Edge AI", "Python", "Automation"]
    },
    {
      id: "blood4people",
      n: "03",
      title: "Blood4People & NDITC Website",
      result: "Responsive Web UI & Systems",
      year: "2025–2026",
      type: "Web Development / UI Design",
      org: "Independent Project",
      image: "/images/blood4people.jpg",
      description: "Responsive web portal connecting blood donors and digital demo platform for NDITC.",
      details: "Designed and engineered dynamic web interfaces, donor matching features, and event management platforms.",
      tags: ["HTML/CSS", "JavaScript", "PHP", "SQL", "WordPress", "UI/UX"]
    },
    {
      id: "aerovolt-piezopolis",
      n: "04",
      title: "AeroVolt & Piezopolis Energy Systems",
      result: "RF & Piezoelectric Power Harvesting",
      year: "2024–2025",
      type: "Biomedical / Energy Harvesting",
      org: "Independent Research",
      image: "/images/rf-pacemaker.jpg",
      description: "Ambient RF energy harvesting for cardiac pacemakers and piezoelectric power grids.",
      details: "Continuous wireless micro-power harvesting to reduce surgical battery replacement risks for pacemakers and decentralized energy generation modeling.",
      tags: ["Biomedical", "RF Harvesting", "Piezoelectric", "MATLAB", "Simulink", "Ansys"]
    },
    {
      id: "smart-helmet",
      n: "05",
      title: "3-in-1 Smart Helmet for Safety",
      result: "Rider Safety & Hazard Prevention System",
      year: "2023",
      type: "Embedded Systems / Safety Tech",
      org: "Independent Project",
      image: "/images/smart-helmet.jpg",
      description: "An intelligent multi-functional helmet designed for road and industrial rider protection.",
      details: "Integrates automatic alcohol-detection ignition lock, accident detection with instant location SMS alerts, and smart warning systems.",
      tags: ["Arduino", "GSM/GPS", "Alcohol Sensor", "Accelerometer", "RF Module"]
    }
  ],

  achievements: [
    {
      n: "14",
      title: "World Robot Olympiad (WRO) Bangladesh",
      result: "Gold Medalist",
      year: "2026",
      org: "WRO Bangladesh",
      image: "/images/wro-gold.jpeg",
      certificate: "/documents/wro-cert.pdf",
      text: "Secured 1st place / Gold Medal in Future Innovator Senior Category at UIU; selected to represent Bangladesh globally."
    },
    {
      n: "13",
      title: "Fibonacci International Robot and STEM Olympiad",
      result: "Gold Medalist",
      year: "2026",
      org: "Fibonacci Bangladesh",
      image: "/images/achievements/fibonacci-gold.jpg",
      certificate: "/documents/fibonacci-cert.pdf",
      text: "Gold Medalist in Fibonacci international STEM & robotics competition competing against 150+ projects across Bangladesh."
    },
    {
      n: "12",
      title: "Asia Pacific ICT Alliance (APICTA) Awards",
      result: "Top 6 International Finalist",
      year: "2025",
      org: "APICTA (Kaohsiung, Taiwan)",
      image: "/images/achievements/apicta.jpg",
      certificate: "/documents/apicta-cert.pdf",
      text: "Represented Bangladesh among the top 6 international finalists in Taiwan with C.A.R.E Wheelchair."
    },
    {
      n: "11",
      title: "World Invention Competition and Exhibition (WICE)",
      result: "Silver Medal",
      year: "2026",
      org: "WICE (Malaysia)",
      image: "/images/achievements/wice-silver.jpg",
      certificate: "/documents/wice-cert.pdf",
      text: "Awarded Silver Medal in international innovation exhibition."
    },
    {
      n: "10",
      title: "Global Robotics and Innovation Championship (GRIC)",
      result: "Honorable Mention",
      year: "2026",
      org: "GRIC",
      image: "/images/achievements/gric.jpg",
      certificate: "/documents/gric-cert.pdf",
      text: "International recognition for assistive robotics development."
    },
    {
      n: "09",
      title: "Notre Dame USA Educational Tour",
      result: "Selected Representative Delegate",
      year: "2025",
      org: "Notre Dame College",
      image: "/images/achievements/usa-tour.jpg",
      certificate: "",
      text: "Selected student representative visiting MIT, Harvard, NASA Kennedy Space Center, and UN HQ."
    },
    {
      n: "08",
      title: "Pixel Contest 3.0",
      result: "Champion — Web Design",
      year: "2024",
      org: "Pixel Contest",
      image: "/images/achievements/pixel-contest.jpg",
      certificate: "",
      text: "Secured Champion award in national Web Design category."
    },
    {
      n: "07",
      title: "Bangladesh National Science and Technology Week",
      result: "Special 3rd Place Nationwide",
      year: "2025",
      org: "National Museum of Science & Technology (NMST)",
      image: "/images/achievements/nstf.jpg",
      certificate: "/documents/nstf-cert.pdf",
      text: "Ranked 3rd nationally across 64 district finalists in science display innovations."
    },
    {
      n: "06",
      title: "16th DRMC National Science Carnival",
      result: "National Champion",
      year: "2025",
      org: "DRMC",
      image: "/images/achievements/drmc-science.jpg",
      certificate: "/documents/drmc-cert.pdf",
      text: "National Champion in Project Presentation segment competing against 110+ college projects."
    },
    {
      n: "05",
      title: "2nd DRMC National Math Summit",
      result: "1st Runner-Up",
      year: "2025",
      org: "DRMC",
      image: "/images/achievements/drmc-math.jpg",
      certificate: "",
      text: "1st Runner-Up in National Math Project Presentation Competition."
    },
    {
      n: "04",
      title: "8th DRMC International Tech Carnival",
      result: "2nd Runner-Up",
      year: "2025",
      org: "DRMC",
      image: "/images/achievements/drmc-tech.jpg",
      certificate: "",
      text: "2nd Runner-Up in International Tech Carnival Project Display."
    },
    {
      n: "03",
      title: "Bangladesh ICT and Innovation Awards",
      result: "Student Champion",
      year: "2025",
      org: "ICT Division Bangladesh",
      image: "/images/achievements/ict-award.jpg",
      certificate: "",
      text: "Won Student Champion award for C.A.R.E Wheelchair initiative."
    },
    {
      n: "02",
      title: "Best Student Award & Talentpool Scholarship",
      result: "District 1st Rank",
      year: "2024",
      org: "Rajbari Govt. High School",
      image: "/images/achievements/best-student.jpg",
      certificate: "",
      text: "Awarded best overall student & secured District 1st Merit Rank in SSC Science."
    },
    {
      n: "01",
      title: "National Literary, Arts & Essay Competitions",
      result: "District Champion (Multiple)",
      year: "2023–2024",
      org: "District & Cultural Events",
      image: "/images/achievements/literary-arts.jpg",
      certificate: "",
      text: "District Champion in Essay Writing, Regional Art Exhibitions, and Children's Quiz."
    }
  ],

  publications: [
    {
      n: "01",
      title: "A Journey into the DNA, from Nitrogen to Grandson",
      status: "PUBLISHED BOOK",
      year: "2026",
      authors: "Debojit Saha Jit, Md Washiun Alim",
      publisher: "Tukro Publication",
      publisherUrl: "https://doi.org/10.5281/zenodo.19597716",
      isbn: "978-984-36-0202-2",
      doi: "10.5281/zenodo.19597716",
      doiUrl: "https://doi.org/10.5281/zenodo.19597716",
      zenodoUrl: "https://doi.org/10.5281/zenodo.19597716",
      readUrl: "https://dna-grandson-book.vercel.app/",
      coverImage: "/images/publications/dna-book-cover.jpeg",
      text: "A published biology manuscript simplifying complex concepts of DNA, genetics, and molecular biology for high school students.",
      summary: "This ISBN-registered & DOI-indexed book makes biology simple and engaging for Class 9–12 students, retaining their scientific curiosity while clarifying complex DNA mechanics.",
      targetJournal: "",
      details: {
        type: "Published Academic Book",
        language: "English & Bengali",
        pages: "180+",
        license: "CC BY 4.0 International",
        repository: "Zenodo Digital Repository",
        researchArea: "Molecular Biology & Genetics Education"
      }
    },
    {
      n: "02",
      title: "Immune-Inspired Adaptive Solar Water Purification System",
      status: "IN PROGRESS",
      year: "2026",
      authors: "Debojit Saha Jit",
      org: "Independent Research",
      targetJournal: "Journal of Cleaner Production / SJWPBD",
      text: "Developing a bio-inspired dynamic filtration model based on immune response mechanisms for rural water treatment. Simulation conducted in MATLAB and ANSYS.",
      details: {
        type: "Original Research Article",
        language: "English",
        researchArea: "Environmental Engineering & Bio-Inspired Systems",
        repository: "Manuscript in Preparation"
      }
    },
    {
      n: "03",
      title: "RF Energy Harvesting Assisted Pacemaker System",
      status: "IN PROGRESS",
      year: "2026",
      authors: "Debojit Saha Jit",
      org: "Independent Research",
      targetJournal: "Biomedical Signal Processing & Control",
      text: "Exploring ambient RF energy harvesting to reduce battery dependency in implantable cardiac devices. Circuit simulation and feasibility analysis ongoing.",
      details: {
        type: "Empirical Research Article",
        language: "English",
        researchArea: "Biomedical Engineering & Wireless Power Transfer",
        repository: "Circuit Simulation Phase"
      }
    }
  ],

  certifications: [
    { title: "NASA Open Science 101 & Essentials Certification", year: "2026", issuer: "NASA" },
    { title: "Research Publishing Fundamentals", year: "2026", issuer: "Springer Nature" },
    { title: "Researcher Academy Certification", year: "2026", issuer: "Elsevier" },
    { title: "CS50 Computer Science", year: "2025", issuer: "Harvard University" }
  ],

  experience: [
    {
      period: "2025 – Present",
      role: "Founder & Software Lead",
      org: "Team C.A.R.E — Controlled Assistive Responsive Equipment",
      summary: "Built low-cost AI/IoT smart wheelchair with gesture control & health monitor for disabled users; won national awards, ranked 6th at APICTA 2025.",
      details: "Spearheaded hardware-software integration for assistive technology. Implemented offline AI voice processing, ESP-NOW micro-controller networking, multi-sensor gesture tracking, and real-time biometric IoT dashboards.",
      images: [
        "/images/experience/care-1.jpeg",
        "/images/experience/care-2.jpeg",
        "/images/experience/care-3.jpeg"
      ]
    },
    {
      period: "2024 – Present",
      role: "Independent Researcher",
      org: "Assistive Tech & Water Solutions Research",
      summary: "Applied research on RF-driven assistive tech & water solutions. Conducted lab testing & simulation in MATLAB/ANSYS; presented at SJWPBD.",
      details: "Engineered low-cost micro-power RF harvesting systems for implantable medical devices and bio-inspired water purification systems.",
      images: [
        "/images/experience/research-1.jpeg",
        "/images/experience/research-2.jpeg"
      ]
    },
    {
      period: "2025 – Present",
      role: "Independent Author",
      org: "Independent Publishing",
      summary: "Co-authored ISBN/DOI genetics book simplifying DNA for high schoolers; distributed 500+ copies, currently writing 2nd book on assistive robotics.",
      details: "Authored and interactive-designed 'A Journey into the DNA, from Nitrogen to Grandson' registered on Zenodo (DOI). Managed distribution of 500+ print and digital copies.",
      images: [
        "/images/experience/publishing-1.jpeg",
        "/images/experience/publishing-2.jpeg"
      ]
    },
    {
      period: "2025 – Present",
      role: "President (R&D)",
      org: "Science Spark",
      summary: "Led R&D dept for 500+ members; mentored 60+ executives in STEM projects, organized 10+ research workshops & national science competitions.",
      details: "Structured project incubation programs, trained youth developers in IoT micro-controllers, and evaluated STEM innovations.",
      images: [
        "/images/experience/sciencespark-1.jpeg"
      ]
    },
    {
      period: "2023 – Present",
      role: "Founder & Lead Mentor",
      org: "Rajbari Robotics Association",
      summary: "Pioneered grassroots STEM education in my district; hosted free robotics camps & trained 300+ rural students in hands-on robotics.",
      details: "Established district-level STEM infrastructure in Rajbari. Organized free hands-on hardware training camps and ideathons to bridge technical gaps.",
      images: [
        "/images/experience/rra-1.jpg",
        "/images/experience/rra-2.jpg"
      ]
    },
    {
      period: "2022 – Present",
      role: "Executive Member & Trainer",
      org: "Aryabhata Gonit Pathshala, Rajbari",
      summary: "Trained 3,000+ students in WRO, IRO, & IMO over 4 yrs; organized regional STEM fests, mentored 50+ award-winning junior robotics projects.",
      details: "Coached high school teams in algorithmic problem solving, mechanical assembly, line-following robotics, and mathematical Olympiads.",
      images: [
        "/images/experience/aryabhata-1.jpeg"
      ]
    },
    {
      period: "2024 – Present",
      role: "Founder",
      org: "Desh Techshop",
      summary: "Founded tech store providing low-cost components to 500+ student innovators, bridging hardware access gaps in non-metro science clubs.",
      details: "Sourced and distributed affordable microcontrollers, sensors, and electronic components for rural innovators.",
      images: [
        "/images/experience/deshtechshop-1.jpeg"
      ]
    },
    {
      period: "2023 – Present",
      role: "Full-Stack Web & DBMS Developer",
      org: "Family Shop & Freelance UI Design",
      summary: "Built custom DBMS & e-commerce portal for father's shop (reduced inventory time by 40%); designed websites & branding for 10+ clubs.",
      details: "Engineered responsive web applications, inventory management systems, and visual graphic branding for local businesses and clubs.",
      images: [
        "/images/experience/familyshop-1.jpeg"
      ]
    },
    {
      period: "2025 – Present",
      role: "Organizer & IT Tech Volunteer",
      org: "Notre Dame Information & Technology Club (NDITC)",
      summary: "Co-managed NDITC Tech Fest 2026 serving 4,000+ participants; led IT logistics, hands-on tech sessions, and project evaluation rounds.",
      details: "Managed event logistics, evaluated youth robotics display entries, and directed technical stage operations during national IT events.",
      images: [
        "/images/experience/nditc-1.jpeg"
      ]
    },
    {
      period: "2019 – Present",
      role: "Graphic Designer & Classical Musician",
      org: "Independent Creative & Performing Arts",
      summary: "Designed pro-bono graphics & branding for 10+ emerging clubs; classical musician (Guitar, Harmonium, Tabla - 7+ yrs), won 5+ regional art awards.",
      details: "Over 7 years of formal classical vocal and instrumental training (Guitar, Harmonium, Tabla). Created brand identities, poster arts, and digital assets.",
      images: [
        "/images/experience/creative-1.jpeg",
        "/images/experience/creative-2.jpeg"
      ]
    }
  ],

  education: [
    {
      year: "2024 – 2026",
      place: "Notre Dame College, Dhaka",
      degree: "Higher Secondary Certificate (HSC) — Science Group",
      gpa: "GPA 5.00 (Expected)",
      text: "Intermediate Science Student engaged in research, robotics projects, web development, and national/international olympiads."
    },
    {
      year: "2022 – 2024",
      place: "Rajbari Govt. High School, Rajbari",
      degree: "Secondary School Certificate (SSC) — Science Group",
      gpa: "GPA 5.00",
      scholarship: "Talentpool Scholarship (District 1st Rank, 2024)",
      text: "Achieved District 1st Rank with GPA 5.00 and Talentpool Scholarship in Science stream."
    },
    {
      year: "2018 – 2019",
      place: "Cambridge School and College, Barishal",
      degree: "Primary Education Completion (PEC)",
      gpa: "GPA 5.00",
      scholarship: "General Scholarship",
      text: "Achieved perfect GPA 5.00 with General Primary Scholarship."
    }
  ],

  competitions: [
    ["2026", "World Robot Olympiad Bangladesh", "Gold Medalist", "Bangladesh"],
    ["2026", "Fibonacci International STEM Olympiad", "Gold Medalist", "International"],
    ["2025", "APICTA Awards", "Top 6 Finalist", "Kaohsiung, Taiwan"],
    ["2026", "WICE", "Silver Medal", "Malaysia"],
    ["2026", "GRIC", "Honorable Mention", "International"],
    ["2025", "DRMC Science Carnival", "National Champion", "Dhaka"]
  ],

  skills: {
    "Research & Biomedical": ["Assistive Technology", "Biomedical Devices", "RF Energy Harvesting", "Immune Water Purification", "MATLAB / Simulink", "ANSYS / COMSOL"],
    "Robotics & Hardware": ["Arduino", "ESP32", "ESP8266", "Raspberry Pi", "MPU6050", "Sensors & Actuators", "IoT Protocols (ESP-NOW)"],
    "Web Development": ["HTML / CSS", "JavaScript", "TypeScript", "React", "Next.js", "PHP", "SQL / DBMS", "Tailwind CSS"],
    "Design & Creative": ["Adobe Photoshop", "Adobe Illustrator", "Premiere Pro", "UI/UX Wireframing", "Brand Identity"],
    "Programming & Tools": ["C/C++", "Python", "Git / GitHub", "REST APIs", "Technical Writing"]
  },

  contact: {
    title: "Get In Touch.",
    text: "Feel free to reach out for research collaborations, engineering projects, design inquiries, or just a friendly chat.",
    email: "debojitsahajit09@gmail.com",
    secondaryEmail: "debojitsahajit@gmail.com",
    phone: "+880 1774074009",
    whatsappPhone: "+880 1774074009",
    location: "Dhaka, Bangladesh"
  },

  footer: {
    lastUpdated: "September 2026"
  }
};
