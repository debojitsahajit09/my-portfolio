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
    { label: "Gallery", href: "/gallery" },
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

  // Gallery Section Data
  galleryCategories: [
    "All",
    "Academic",
    "Graphics Design",
    "Projects",
    "Myself"
  ],

  galleryImages: {
    ndc: [
      { id: "ndc-1", title: "Notre Dame College Campus Life 1", category: "Academic", src: "/images/gallery/ndc-1.jpg" },
      { id: "ndc-2", title: "Notre Dame College Campus Life 2", category: "Academic", src: "/images/gallery/ndc-2.jpg" },
      { id: "ndc-3", title: "Science Seminar at NDC", category: "Academic", src: "/images/gallery/ndc-3.jpg" },
      { id: "ndc-4", title: "NDC Club Activities", category: "Academic", src: "/images/gallery/ndc-4.jpg" },
      { id: "ndc-5", title: "Classroom Moments at NDC", category: "Academic", src: "/images/gallery/ndc-5.jpg" },
      { id: "ndc-6", title: "NDITC Event Operations", category: "Academic", src: "/images/gallery/ndc-6.jpg" },
      { id: "ndc-7", title: "College Campus Gathering", category: "Academic", src: "/images/gallery/ndc-7.jpg" },
      { id: "ndc-8", title: "Science Fair & Workshop", category: "Academic", src: "/images/gallery/ndc-8.jpg" },
      { id: "ndc-9", title: "Practical Lab Sessions", category: "Academic", src: "/images/gallery/ndc-9.jpg" },
      { id: "ndc-10", title: "Group Photo with Friends & Batchmates", category: "Academic", src: "/images/gallery/ndc-10.jpg" }
    ],
    rghs: [
      { id: "rghs-1", title: "Rajbari Govt. High School Campus", category: "Academic", src: "/images/gallery/rghs-1.jpg" },
      { id: "rghs-2", title: "SSC Batch Farewell & Program", category: "Academic", src: "/images/gallery/rghs-2.jpg" },
      { id: "rghs-3", title: "District Talentpool Award Ceremony", category: "Academic", src: "/images/gallery/rghs-3.jpg" },
      { id: "rghs-4", title: "School Science Fair Display", category: "Academic", src: "/images/gallery/rghs-4.jpg" },
      { id: "rghs-5", title: "Classroom & Teachers Interaction", category: "Academic", src: "/images/gallery/rghs-5.jpg" }
    ],
    cambridge: [
      { id: "cambridge-1", title: "Cambridge School Primary Graduation", category: "Academic", src: "/images/gallery/cambridge-1.jpg" },
      { id: "cambridge-2", title: "Primary School Memories & Campus", category: "Academic", src: "/images/gallery/cambridge-2.jpg" }
    ],
    graphics: [
      { id: "gfx-1", title: "Event Banner Design 1", category: "Graphics Design", src: "/images/gallery/gfx-1.jpg" },
      { id: "gfx-2", title: "Event Banner Design 2", category: "Graphics Design", src: "/images/gallery/gfx-2.jpg" },
      { id: "gfx-3", title: "Tech Fest Poster Art", category: "Graphics Design", src: "/images/gallery/gfx-3.jpg" },
      { id: "gfx-4", title: "Branding & Identity Concept 1", category: "Graphics Design", src: "/images/gallery/gfx-4.jpg" },
      { id: "gfx-5", title: "Branding & Identity Concept 2", category: "Graphics Design", src: "/images/gallery/gfx-5.jpg" },
      { id: "gfx-6", title: "Social Media Banner Design", category: "Graphics Design", src: "/images/gallery/gfx-6.jpg" },
      { id: "gfx-7", title: "Club Fest Artwork Design", category: "Graphics Design", src: "/images/gallery/gfx-7.jpg" },
      { id: "gfx-8", title: "Digital Illustration & Layout", category: "Graphics Design", src: "/images/gallery/gfx-8.jpg" },
      { id: "gfx-9", title: "Workshop & Bootcamp Poster", category: "Graphics Design", src: "/images/gallery/gfx-9.jpg" },
      { id: "gfx-10", title: "Publication Cover Graphic Design", category: "Graphics Design", src: "/images/gallery/gfx-10.jpg" }
    ],
    projects: [
      { id: "proj-1", title: "C.A.R.E Wheelchair Assembly", category: "Projects", src: "/images/gallery/proj-1.jpg" },
      { id: "proj-2", title: "C.A.R.E Wheelchair Testing", category: "Projects", src: "/images/gallery/proj-2.jpg" },
      { id: "proj-3", title: "3-in-1 Smart Helmet Prototype", category: "Projects", src: "/images/gallery/proj-3.jpg" },
      { id: "proj-4", title: "ORION Voice Assistant Circuit", category: "Projects", src: "/images/gallery/proj-4.jpg" },
      { id: "proj-5", title: "Blood4People Web Application UI", category: "Projects", src: "/images/gallery/proj-5.jpg" },
      { id: "proj-6", title: "Custom DBMS Dashboard Coding", category: "Projects", src: "/images/gallery/proj-6.jpg" },
      { id: "proj-7", title: "AeroVolt Energy Harvesting System", category: "Projects", src: "/images/gallery/proj-7.jpg" },
      { id: "proj-8", title: "Solar Water Purification Prototype", category: "Projects", src: "/images/gallery/proj-8.jpg" },
      { id: "proj-9", title: "PCB Designing & Microcontroller Setup", category: "Projects", src: "/images/gallery/proj-9.jpg" },
      { id: "proj-10", title: "Sensor & Actuator Calibration", category: "Projects", src: "/images/gallery/proj-10.jpg" }
    ],
    myself: [
      { id: "me-1", title: "Personal Portrait 1", category: "Myself", src: "/images/gallery/me-1.jpg" },
      { id: "me-2", title: "Personal Portrait 2", category: "Myself", src: "/images/gallery/me-2.jpg" },
      { id: "me-3", title: "Speaker & Presentation Session", category: "Myself", src: "/images/gallery/me-3.jpg" },
      { id: "me-4", title: "Casual Moment", category: "Myself", src: "/images/gallery/me-4.jpg" },
      { id: "me-5", title: "Working at Lab Desk", category: "Myself", src: "/images/gallery/me-5.jpg" },
      { id: "me-6", title: "International Tour Moment", category: "Myself", src: "/images/gallery/me-6.jpg" }
    ]
  },
projects: [
    {
      id: "care-v3",
      n: "01",
      title: "C.A.R.E. Wheelchair V3.0",
      result: "Advanced Offline AI & Telemedicine Wheelchair",
      year: "2026",
      type: "Robotics / Assistive Technology / Edge AI",
      org: "Team C.A.R.E.",
      image: "/images/care-v3.jpg",
      description: "Next-gen autonomous assistive wheelchair featuring offline AI, integrated biometric sensors, and cloud telemedicine sync.",
      details: "Upgraded motor control system, embedded Edge AI offline voice control (ORION integration), direct ECG & SpO2 health tracking, and real-time remote telemetry dashboard.",
      tags: ["ESP32-S3", "Edge AI", "IoT", "FreeRTOS", "Next.js", "Telemedicine", "Bluetooth 5.0"]
    },
    {
      id: "care-v2",
      n: "02",
      title: "C.A.R.E. Wheelchair V2.0",
      result: "Gesture-Controlled Smart Mobility System",
      year: "2025",
      type: "Robotics / IoT / Embedded Systems",
      org: "Team C.A.R.E.",
      image: "/images/care-v2.jpg",
      description: "Custom gesture-driven wheelchair tailored for individuals with severe mobility impairments.",
      details: "Includes head & hand gesture navigation via MPU6050 IMU sensors, ESP-NOW direct wireless mesh communication, emergency SMS alerts with GPS coordinates, and obstacle avoidance.",
      tags: ["ESP32", "ESP-NOW", "MPU6050", "BTS7960", "GSM/GPS", "IoT"]
    },
    {
      id: "care-v1",
      n: "03",
      title: "C.A.R.E. Wheelchair V1.0",
      result: "Low-Cost Assistive Prototype Base",
      year: "2024",
      type: "Robotics / Assistive Hardware",
      org: "Team C.A.R.E.",
      image: "/images/care-v1.jpg",
      description: "Initial functional prototype aimed at providing low-cost motorized wheelchair accessibility.",
      details: "Designed basic motor drive control with joystick input, simple relay-based directional control, and modular chassis modification for regional affordability.",
      tags: ["Arduino Uno", "Motor Drivers", "Sensors", "Hardware Design", "Prototyping"]
    },
    {
      id: "orion",
      n: "04",
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
      n: "05",
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
      n: "06",
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
      n: "07",
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
  ]

  achievements: [
    {
      n: "14",
      title: "World Robot Olympiad (WRO) Bangladesh",
      result: "Gold Medalist",
      year: "2026",
      org: "WRO Bangladesh",
      image: "/images/wro-gold.jpg",
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
      period: "2024 – Present",
      role: "Founder & Core Software Lead",
      org: "Team C.A.R.E",
      category: "Founder / Social Enterprise",
      summary: "Founded and led the engineering team building affordable, AI/IoT-driven assistive technologies for individuals with disabilities. Spearheaded system architecture, hardware-software integration, and prototyping for internationally acclaimed assistive tools.",
      details: "Developed the C.A.R.E. Wheelchair (V1 & V2), an IoT-enabled assistive device featuring gesture controls and real-time health monitoring systems.\n\nSecured 6th place internationally at the Asia Pacific ICT Alliance (APICTA) Awards 2025 in Taiwan among 32 projects across 16 countries.\n\nWon Champion at the Bangladesh ICT and Innovation Awards 2025 (outperforming 256 national teams) and National Champion at the 16th DRMC National Science Carnival 2025.",
      images: [
        "/images/experience/care-1.jpeg",
        "/images/experience/care-2.jpeg",
        "/images/experience/care-3.jpeg"
      ]
    },
    {
      period: "2025 – Present",
      role: "President (Research & Development)",
      org: "Science Spark",
      category: "Community Work / Volunteer / STEM Leadership",
      summary: "Direct the R&D department of a student-led organization with over 500 members, focused on expanding hands-on STEM education and applied research across Bangladesh.",
      details: "Mentored 60+ executive members in conducting applied science projects and research methodologies.\n\nOrganized 10+ research workshops, student STEM training programs, and national science competitions.\n\nEstablished nationwide volunteer training initiatives connecting high school students with emerging technologies.",
      images: [
        "/images/experience/sciencespark-1.jpeg"
      ]
    },
    {
      period: "2026 – Present",
      role: "Core Member & District Coordinator",
      org: "Science Spark Blood Net",
      category: "Community Work / Volunteer",
      summary: "Coordinate voluntary blood donation drives and rapid emergency response networks spanning all 64 districts in Bangladesh.",
      details: "Facilitate real-time communication between blood donors and critical patients across the country.\n\nOversee digital blood donor registration, emergency outreach logistics, and community coordination.",
      images: []
    },
    {
      period: "2025 – Present",
      role: "Founder & Lead Organizer",
      org: "Rajbari Robotics Association",
      category: "Founder / Volunteer / STEM Education",
      summary: "Pioneered grassroots robotics and STEM education in Rajbari district to bridge the technology access gap for rural students.",
      details: "Hosted free, hands-on robotics bootcamps and workshops for over 300 rural students.\n\nTaught core concepts in microcontrollers, sensor integration, circuit design, and basic programming.\n\nBuilt a community platform encouraging local youth to create practical hardware innovations.",
      images: [
        "/images/experience/rra-1.jpg",
        "/images/experience/rra-2.jpg"
      ]
    },
    {
      period: "2022 – Present",
      role: "Executive Member & Robotics Trainer",
      org: "Aryabhata Gonit Pathshala, Rajbari",
      category: "Volunteer / STEM Educator",
      summary: "Instructed over 3,000 students in advanced STEM subjects, robotics engineering, and competitive olympiad mathematics across the district.",
      details: "Trained junior students for prestigious national and international competitions including WRO, IRO, IMO, IPhO, and IChO.\n\nOrganized regional STEM festivals engaging over 1,000 students district-wide.\n\nMentored over 50 award-winning junior robotics and science projects.",
      images: [
        "/images/experience/aryabhata-1.jpeg"
      ]
    },
    {
      period: "2026 – Present",
      role: "Founder & Managing Director",
      org: "Desh Techshop",
      category: "Entrepreneur / Tech Startup",
      summary: "Founded a student tech store to solve supply chain and access bottlenecks for robotics components and electronic modules in non-metropolitan regions.",
      details: "Supplied essential hardware, sensors, and development boards to 500+ students and school science clubs.\n\nManaged procurement, inventory systems, and customer fulfillment tailored for student makers.",
      images: [
        "/images/experience/deshtechshop-1.jpeg"
      ]
    },
    {
      period: "2024 – Present",
      role: "Full-Stack Web Developer & Designer",
      org: "Personal & Client Projects",
      category: "Technology & Software",
      summary: "Architected and deployed web applications, responsive user interfaces, custom database management systems, and e-commerce platforms.",
      details: "Developed a custom Database Management System (DBMS) and e-commerce web platform for family business operations, cutting manual inventory tracking by 40% and increasing digital sales by 25%.\n\nBuilt platforms including Blood4People (responsive blood donor portal) and demo prototypes for NDITC.\n\nAwarded Champion in Web Design at the Pixel Contest 3.0 (2024).",
      images: [
        "/images/experience/familyshop-1.jpeg"
      ]
    },
    {
      period: "2022 – Present",
      role: "Student Researcher",
      org: "Independent / Open Research",
      category: "Research & Innovation",
      summary: "Conduct independent applied research spanning assistive robotics, RF energy harvesting, and bio-inspired water purification systems.",
      details: "RF Energy Harvesting Pacemaker System: Investigating ambient RF energy harvesting to reduce battery dependency in cardiac devices.\n\nAdaptive Solar Water Purification System: Modeling bio-inspired dynamic filtration using MATLAB and ANSYS.\n\nRecognized as a Citizen Scientist with the NASA GLOBE Program & Zooniverse, and completed NASA Open Science certifications.",
      images: [
        "/images/experience/research-1.jpeg",
        "/images/experience/research-2.jpeg"
      ]
    },
    {
      period: "2025 – Present",
      role: "Author & Educational Writer",
      org: "Self-Published / International Publications",
      category: "Research / Publishing",
      summary: "Co-authored and published indexed genetics literature designed to simplify complex biological concepts for high school students.",
      details: "Co-authored \"A Journey Into The DNA: from Nitrogen to Grandson\" (ISBN: 978-984-36-0202-2, DOI: 10.5281/zenodo.19597716).\n\nDistributed 500+ physical and digital copies to high schoolers and regional science libraries.\n\nCurrently authoring a second book focusing on practical assistive robotics engineering.",
      images: [
        "/images/experience/publishing-1.jpeg",
        "/images/experience/publishing-2.jpeg"
      ]
    },
    {
      period: "2024 – 2026",
      role: "Organizer & Volunteer",
      org: "Notre Dame Information Technology Club, Dhaka",
      category: "Volunteer / Club Leadership",
      summary: "Co-managed event operations, IT infrastructure, and technical project evaluations for one of Bangladesh’s premier college IT clubs.",
      details: "Co-managed NDITC Tech Fest 2026, hosting over 4,000 nationwide participants.\n\nLed IT logistics, hands-on workshop setups, and project evaluation rounds during annual festivals.",
      images: [
        "/images/experience/nditc-1.jpeg"
      ]
    },
    {
      period: "2024 – 2026",
      role: "General Member & Volunteer",
      org: "Notre Dame English Club, Dhaka",
      category: "Volunteer / Cultural",
      summary: "Contributed to event planning, stage management, and volunteer logistics for major national language and literature carnivals.",
      details: "Assisted in organizing large-scale college events, delegate hospitality, and venue logistics.\n\nParticipated actively in club communication workshops and public speaking sessions.",
      images: []
    },
    {
      period: "2022 – 2024",
      role: "Executive Member (Robotics Department)",
      org: "Atomic Quantum Alliance",
      category: "Community Work / STEM Outreach",
      summary: "Managed the robotics project wing within an academic student alliance serving over 600 members.",
      details: "Guided junior students through basic circuit assembly and robotics project design.\n\nOrganized internal science showcases, project demonstrations, and peer mentoring sessions.",
      images: []
    },
    {
      period: "2022 – Present",
      role: "Graphic Designer & Media Producer",
      org: "Freelance & Club Media",
      category: "Creative & Media",
      summary: "Deliver pro-bono and professional visual identity design, digital artwork, and video editing for emerging student organizations and tech events.",
      details: "Designed pro-bono visual branding, banners, and digital graphics for 10+ student clubs and non-profits.\n\nProficient in Adobe Photoshop, Illustrator, and Premiere Pro for visual content creation.\n\nWon 5+ regional art and design competitions.",
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
