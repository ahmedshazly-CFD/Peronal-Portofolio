/* ============================================================
   site.config.js — THE ONLY FILE YOU EDIT
   Everything shown on the page comes from this object.
   ============================================================ */
window.SITE = {
  meta: {
    name: "Ahmed Reda Elshazly",
    role: "Mechanical Power Engineer · CFD & Aerodynamics",
    siteUrl: "https://amaryasser3210-sketch.github.io/shazly-portfolio",
    ogImage: "assets/og-image.jpg"
  },

  links: {
    linkedin: "https://www.linkedin.com/in/ahmad-el-shazly",
    email: "ahmed.shazly.student@gmail.com",
    phone: "+201020805760",
    phoneDisplay: "+20 102 080 5760",
    location: "Elmokattam, Cairo, Egypt",
    cv: "assets/Ahmed_Reda_Elshazly_CV.pdf"
  },

  hero: {
    eyebrow: "Mechanical Power Engineering · Ain Shams University",
    title: "Ahmed Reda Elshazly",
    headline: "CFD-driven design — from flow physics to working hardware.",
    intro:
      "Mechanical power engineer focused on computational fluid dynamics and aerodynamics: supersonic nozzle and thermal flows in Ansys Fluent, aircraft performance in Flow5, and production-ready CAD in SolidWorks.",
    portrait: "assets/portrait.webp",
    facts: [
      { label: "Current role", value: "Head of Aerodynamics, Aero ASU" },
      { label: "Focus", value: "CFD · aerodynamics · thermal analysis" },
      { label: "Based in", value: "Cairo, Egypt" }
    ],
    ctas: [
      { label: "View projects", href: "#projects", primary: true },
      { label: "Download CV", href: "assets/Ahmed_Reda_Elshazly_CV.pdf", download: true }
    ]
  },

  about: {
    heading: "About",
    paragraphs: [
      "I am a mechanical power engineering undergraduate whose work sits where fluid mechanics meets CAD: I model the geometry, run the CFD, read the physics, and turn it into drawings a workshop can build.",
      "My technical work spans aircraft aerodynamics (lift/drag polars, stall behaviour, stability derivatives), CFD in Ansys Fluent and CFX (turbulence modelling with y+ verification, mesh independence studies, axisymmetric and transient thermal runs), and mechanical design with SolidWorks and Inventor — GD&T, tolerancing, weldments and FEA validation.",
      "I lead the aerodynamics subsystem at Aero ASU, where I built the workflow from scratch and trained the team on aerodynamics and aircraft design fundamentals."
    ],
    facts: [
      { label: "Education", value: "B.Sc. Mechanical Power Engineering, Ain Shams University" },
      { label: "Certifications", value: "CSWP + 4 × CSWPA (SolidWorks, 2025)" },
      { label: "Languages", value: "Arabic (native), English (fluent)" },
      { label: "Also", value: "Mathematics tutor & co-author since 2021" }
    ]
  },

  projects: {
    heading: "Technical Projects",
    intro: "Seven documented projects across CFD, thermal analysis, aircraft design and mechanical CAD.",
    items: [
      {
        id: "icmtc-aircraft",
        title: "Aircraft Design for ICMTC Competition",
        org: "Aero ASU",
        year: "Feb 2025 – Present",
        role: "Aerodynamics Lead",
        tags: ["Aerodynamics", "CFD", "CAD"],
        cover: "assets/projects/icmtc-aircraft/cover.webp",
        summary:
          "Competitive aircraft design for the International Aviation Engineering Conference, with the full performance and stability picture extracted before any hardware is cut.",
        highlights: [
          "Performance curves across takeoff, cruise and landing: power/thrust required",
          "Stability derivatives, static margin and CG placement studies",
          "Stall behaviour analysis and design iteration",
          "Toolchain: Flow5, SolidWorks, Ansys Fluent"
        ],
        links: [
          { label: "Full report (PDF)", url: "assets/projects/icmtc-aircraft/report.pdf" },
          { label: "LinkedIn post", url: "https://www.linkedin.com/posts/ahmad-el-shazly_icmtc-xflr5-flow5-ugcPost-7463213077958860800-U32G" }
        ]
      },
      {
        id: "wing-optimization",
        title: "Low-Reynolds Wing Optimization",
        org: "Independent study",
        year: "2026",
        role: "Aerodynamics Analysis",
        tags: ["Aerodynamics", "CFD"],
        cover: "assets/projects/wing-optimization/cover.webp",
        summary:
          "Optimisation of a low-Reynolds-number wing's spanwise lift distribution — trading lift for induced-drag reduction across the span.",
        highlights: [
          "Spanwise lift distribution shaped to cut induced drag",
          "Low-Reynolds aerodynamics where laminar separation matters",
          "Polar and loading comparisons between candidate distributions",
          "Full written report with figures and analysis"
        ],
        links: [
          { label: "Full report (PDF)", url: "assets/projects/wing-optimization/report.pdf" }
        ]
      },
      {
        id: "rocket-nozzle",
        title: "Rocket Engine Design",
        org: "Independent project",
        year: "Sep 2024 – Feb 2025",
        role: "Design & CFD",
        tags: ["CFD", "Fluid Mechanics"],
        cover: "assets/projects/rocket-nozzle/cover.webp",
        summary:
          "First-stage supersonic nozzle designed from first principles, then validated with an axisymmetric Ansys Fluent simulation of the internal flow.",
        highlights: [
          "Stoichiometric combustion calculations for propellant choice",
          "Isentropic flow equations set the nozzle geometry (convergent–divergent)",
          "Axisymmetric CFD validated flow characteristics and losses",
          "Mach distribution and pressure profile along the duct"
        ],
        links: [
          { label: "Full report (PDF)", url: "assets/projects/rocket-nozzle/report.pdf" },
          { label: "LinkedIn post", url: "https://www.linkedin.com/posts/ahmad-el-shazly_ansys-cfd-simulation-ugcPost-7349146564868636672-PABc" }
        ]
      },
      {
        id: "cooling-system",
        title: "Cooling System for an Aluminium Block",
        org: "Independent project",
        year: "Mar 2025 – Apr 2025",
        role: "Thermal Analysis",
        tags: ["CFD", "Thermal"],
        cover: "assets/projects/cooling-system/cover.webp",
        summary:
          "Three thermal configurations compared — free convection, forced convection, and forced convection with fins — analysed analytically and then simulated.",
        highlights: [
          "Transient free convection solved with the lumped capacitance model",
          "Validation against Ansys Transient Thermal results",
          "Fin geometry trade-off: surface area vs. pressure drop",
          "Temperature maps of each configuration for comparison"
        ],
        links: [
          { label: "LinkedIn post", url: "https://www.linkedin.com/posts/ahmad-el-shazly_design-insulation-ansys-activity-7321907423462473728-flXq" }
        ]
      },
      {
        id: "air-powered-car",
        title: "Air-Powered Car",
        org: "University project",
        year: "Sep 2025 – Feb 2026",
        role: "Design & Analysis",
        tags: ["CAD", "FEA"],
        cover: "assets/projects/air-powered-car/cover.webp",
        summary:
          "Chassis, powertrain and propulsion system for a compressed-air vehicle — designed for manufacture and verified under load before fabrication.",
        highlights: [
          "SolidWorks Weldments + Design Accelerator for the frame",
          "GD&T and strict tolerancing on production-ready assembly drawings",
          "Structural integrity validated with FEA in Autodesk Inventor",
          "Pressure tank packaging and propulsion layout"
        ],
        links: [
          { label: "LinkedIn post", url: "https://www.linkedin.com/posts/ahmad-el-shazly_race-car-pneumatics-ugcPost-7422647213354475521-QAko" }
        ]
      },
      {
        id: "solar-tracker",
        title: "Pneumatic Solar Tracker",
        org: "Independent project",
        year: "Feb 2026 – Mar 2026",
        role: "Mechanism Design",
        tags: ["Mechanisms", "CAD"],
        cover: "assets/projects/solar-tracker/cover.webp",
        summary:
          "3-DOF solar tracker whose mechanism is built on spherical and universal joints, modelled as a full CAD assembly with manufacturing drawings extracted.",
        highlights: [
          "3-DOF architecture using spherical and universal joints",
          "Full CAD assembly with manufacturing drawings in SolidWorks",
          "Non-linear stress analysis on 3D-printed spherical joints",
          "Failure prevention on the custom printed parts"
        ],
        links: [
          { label: "LinkedIn post", url: "https://www.linkedin.com/posts/ahmad-el-shazly_solidworks-solidworks-fea-ugcPost-7462647278567108608-OSdk" }
        ]
      },
      {
        id: "component-design",
        title: "Mechanical Component Design",
        org: "University project",
        year: "Sep 2024 – Feb 2025",
        role: "Design",
        tags: ["CAD", "Drawings"],
        cover: "assets/projects/component-design/cover.webp",
        summary:
          "Hand press, Oldham coupling and crane hook — three classic components modelled parametrically so variants can be spun out without rebuilding them.",
        highlights: [
          "Crane hook and Oldham coupling in SolidWorks, hand press in Inventor",
          "Parametric modelling techniques for rapid product variance",
          "Strict tolerance stack-ups on every mating feature",
          "Complete working / technical drawings"
        ],
        links: [
          { label: "LinkedIn post", url: "https://www.linkedin.com/posts/ahmad-el-shazly_cad-solidworks-inventor-activity-7350937027351085057-HLGU" }
        ]
      }
    ]
  },

  skills: {
    heading: "Technical Skills",
    intro: "Grouped the way an engineering recruiter scans them.",
    groups: [
      {
        name: "CFD & Thermal Analysis",
        items: ["Ansys Fluent", "Ansys CFX", "Turbulence modelling (y+)", "Mesh independence studies",
                "Heat transfer", "Axisymmetric modelling", "Transient thermal analysis"]
      },
      {
        name: "Aerodynamics",
        items: ["Lift & drag (CL, CD, Cm)", "Stall behaviour", "Flow separation", "Downwash",
                "Oswald efficiency", "Aircraft performance curves", "Flow5"]
      },
      {
        name: "Mechanical Design & CAD",
        items: ["SolidWorks (CSWP)", "Autodesk Inventor", "GD&T", "Tolerancing",
                "Technical / working drawings", "Stress concentration", "Fatigue", "Buckling"]
      },
      {
        name: "Tools & Others",
        items: ["EES — Engineering Equation Solver", "Microsoft Office (equations, graphs, data)",
                "FEA in Inventor", "Arabic (native)", "English (fluent)"]
      }
    ]
  },

  timeline: {
    heading: "Experience & Education",
    items: [
      {
        kind: "work",
        title: "Head of Aerodynamics Team",
        org: "Aero ASU · Cairo",
        period: "Feb 2025 – Present",
        detail: "Founded the aerodynamics subsystem from scratch and set up standardised engineering workflows. Runs technical onboarding and training in aerodynamics and aircraft design fundamentals; led the aerodynamic design and optimisation of the team's ICMTC aircraft.",
        link: { label: "Post", url: "https://www.linkedin.com/posts/ahmad-el-shazly_icmtc-xflr5-flow5-ugcPost-7463213077958860800-U32G" }
      },
      {
        kind: "work",
        title: "Automotive Maintenance Intern",
        org: "Dynamics Distribution (Fiat & Alfa Romeo) · Al-Obour",
        period: "Sep 2024",
        detail: "Hands-on vehicle diagnostics and servicing: engine oil/filter changes, steering corrections, fuel pump and brake drum replacement, turbocharger replacement and full engine overhauls.",
        link: { label: "Letter", url: "https://drive.google.com/file/d/1M93X4pXslLTvaAFll397YDjybl7imokj/view" }
      },
      {
        kind: "work",
        title: "Airframe and Powerplant Intern",
        org: "EgyptAir Academy · Cairo Airport",
        period: "Jul – Aug 2024",
        detail: "Studied aircraft systems and aerodynamics — HVAC, powerplants, fuel systems, airframes, landing gear and APUs — and observed overhaul procedures for Boeing and Airbus aircraft across Hangar 7000 and 8000.",
        link: { label: "Post", url: "https://www.linkedin.com/posts/ahmad-el-shazly_tbt-throwbackthursday-egyptair-activity-7342960869158322177-8KzS" }
      },
      {
        kind: "work",
        title: "Independent Tutor & Content Creator",
        org: "Mathematics tutoring · Elmokattam",
        period: "Aug 2021 – Present",
        detail: "Teaches Egyptian Secondary Education and SAT students, and co-authored a specialised mathematics textbook for secondary education."
      },
      {
        kind: "education",
        title: "B.Sc. Mechanical Power Engineering",
        org: "Ain Shams University · Cairo",
        period: "Undergraduate · CGPA 2.7",
        detail: "Mechanical power engineering with focus on fluid mechanics, aerodynamics and thermal systems."
      },
      {
        kind: "education",
        title: "Egyptian Secondary Education",
        org: "El-Mokattam Language and International School (MILS)",
        period: "Grade 86.1%",
        detail: "Ranked 1st at school and top 20 in the district."
      }
    ]
  },

  badges: [
    {
      title: "Certifications",
      note: "All verifiable via Dassault Systèmes 3DEXPERIENCE",
      items: [
        { name: "CSWP — Certified SolidWorks Professional", detail: "Nov 2025",
          url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-AE8BSZJYPD" },
        { name: "CSWA — Certified SolidWorks Associate", detail: "Nov 2025",
          url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-35TBWYK6H4" },
        { name: "CSWPA-WD — Weldments", detail: "Dec 2025",
          url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-FTNQ72JLHD" },
        { name: "CSWPA-SUR — Surfacing", detail: "Dec 2025",
          url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-FU4HSM8X5C" },
        { name: "CSWPA-SM — Sheet Metal", detail: "Dec 2025",
          url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-MXJRP6WAFN" },
        { name: "CSWPA-DT — Drawing Tools", detail: "Dec 2025",
          url: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-FEBQANPLC5" }
      ]
    },
    {
      title: "Recognition",
      items: [
        { name: "Ranked 1st at school", detail: "MILS · top 20 in the district" },
        { name: "ICMTC Aviation Engineering Conference", detail: "Aircraft design competition, 2025" },
        { name: "Co-authored mathematics textbook", detail: "Secondary education · since 2021" }
      ]
    }
  ],

  contact: {
    heading: "Get in touch",
    intro:
      "Working on something aerodynamic, thermal or flow-related? I'm open to internships, collaboration and entry-level engineering roles.",
    note: "Open to CFD / aerodynamics opportunities"
  }
};
