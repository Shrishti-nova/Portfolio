/**
 * Central Portfolio Data Configuration for Shrushti Itgampalli
 * Strictly adheres to Shrushti's Master Specification:
 * - 100% Shrushti's personal credentials & academic details
 * - 6 Proposed Cybersecurity & Emerging Tech project architectures marked as planned
 * - Authentic editable placeholders for certifications, hackathons, and technical events
 * - No external or unrelated projects/experience
 */

export const personalInfo = {
  fullName: "Shrushti Itgampalli",
  displayName: "Shrushti",
  professionalTitle: "Cybersecurity Engineering Student | Aspiring Security Analyst | Technology Enthusiast",
  college: "Guru Nanak Dev Engineering College, Bidar, Karnataka.",
  degree: "Bachelor of Engineering",
  branch: "Computer Science Engineering – Cybersecurity",
  academicYear: "2023 - 2027",
  location: "Bidar, Karnataka, India",
  
  // Official Links
  github: "https://github.com/Shrishti-nova",
  githubUsername: "Shrishti-nova",
  linkedin: "https://www.linkedin.com/in/shrishti-itgampalli-669bb144a/",
  email: "shrishtiitgampalli@gmail.com",
  
  // Master Taglines & Branding
  tagline: "Exploring Cybersecurity, AI, IoT & Blockchain to Build a Smarter and Safer Digital Future.",
  brandStatement: "SHRUSHTI ITGAMPALLI | CYBERSECURITY × AI × IoT × BLOCKCHAIN",
  brandSubtitle: "Securing Tomorrow Through Technology.",
  footerTagline: "Code. Secure. Innovate.",
  
  // Hero Section
  heroGreeting: "HELLO, I'M",
  heroDescription: "I'm passionate about exploring technology, securing digital systems, and creating innovative solutions through emerging technologies.",
  
  // Animated Typing Phrases
  typingPhrases: [
    "Cybersecurity Enthusiast",
    "Aspiring Security Analyst",
    "AI Explorer",
    "IoT Enthusiast",
    "Blockchain Learner",
    "Technology Innovator"
  ],
  
  // Asset Paths
  profileImage: "/shrushti.jpg",
  resumePath: "/resume.pdf",
  
  // Status Indicator
  status: {
    availableFor: "Cybersecurity Internships & Research",
    securityClearance: "Cyber Defense Track Active",
    nodeStatus: "ONLINE // DEFENSE PROTOCOL ACTIVE"
  }
};

export const aboutMe = {
  heading: "Beyond the Code, Into the Digital World.",
  paragraphs: [
    "I'm Shrushti Itgampalli, a Computer Science Engineering student at Guru Nanak Dev Engineering College, Bidar, with a strong interest in cybersecurity and emerging technologies.",
    "I am passionate about understanding how digital systems work, exploring security challenges, and discovering innovative technological solutions.",
    "My interests include Cybersecurity, Artificial Intelligence, Internet of Things, Blockchain Technology, Network Security, and Software Development.",
    "I believe that the future of technology depends on combining innovation with security. I am continuously learning, improving my technical knowledge, and exploring opportunities to transform ideas into meaningful projects."
  ],
  stats: [
    { label: "Engineering Major", value: "B.E. CSE", sub: "Cybersecurity Specialization" },
    { label: "Institution", value: "GNDEC", sub: "Bidar, Karnataka" },
    { label: "Core Domains", value: "4 Key Pillars", sub: "Cyber, AI, IoT, Blockchain" },
    { label: "Commitment", value: "100%", sub: "Defensive & Ethical Mindset" }
  ],
  keyAttributes: [
    { title: "Defensive Threat Mindset", desc: "Analyzing attack vectors, security risks, vulnerabilities, and countermeasures." },
    { title: "Ethical Integrity", desc: "Committed to responsible security research and safeguarding digital systems." },
    { title: "Emerging Tech Synergies", desc: "Connecting cybersecurity with AI automation, IoT smart devices, and Blockchain ledgers." },
    { title: "Continuous Learning", desc: "Relentlessly expanding knowledge through hands-on technical labs and experimentation." }
  ]
};

export const specializations = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Exploring digital protection, information security, and secure systems.",
    type: "Demonstrated Skill",
    isCore: true,
    icon: "ShieldAlert",
    highlights: ["Information Security", "Defense in Depth", "Access Control Policies"]
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking",
    description: "Learning responsible security testing and vulnerability assessment.",
    type: "Learning & Exploration",
    isCore: false,
    icon: "Bug",
    highlights: ["Vulnerability Assessment", "Responsible Testing", "Threat Mitigation"]
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Exploring intelligent applications and machine learning.",
    type: "Learning & Exploration",
    isCore: false,
    icon: "Cpu",
    highlights: ["Pattern Detection", "Predictive Analytics", "Intelligent Systems"]
  },
  {
    id: "iot",
    title: "IoT",
    description: "Understanding connected devices and smart technology.",
    type: "Learning & Exploration",
    isCore: false,
    icon: "Radio",
    highlights: ["Smart Devices", "Connected Sensors", "Edge Security"]
  },
  {
    id: "blockchain",
    title: "Blockchain",
    description: "Exploring decentralized systems and secure digital transactions.",
    type: "Learning & Exploration",
    isCore: false,
    icon: "Blocks",
    highlights: ["Decentralized Systems", "Secure Transactions", "Cryptographic Ledgers"]
  },
  {
    id: "network-security",
    title: "Network Security",
    description: "Learning secure communication and network protection.",
    type: "Demonstrated Skill",
    isCore: true,
    icon: "Network",
    highlights: ["Secure Communication", "Network Defense", "Protocol Protection"]
  },
  {
    id: "web-security",
    title: "Web Security",
    description: "Understanding website vulnerabilities and secure development.",
    type: "Demonstrated Skill",
    isCore: true,
    icon: "Lock",
    highlights: ["Website Vulnerabilities", "Secure Development", "Authentication"]
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Building creative digital applications.",
    type: "Demonstrated Skill",
    isCore: true,
    icon: "Code2",
    highlights: ["Creative Applications", "Clean Architecture", "Problem Solving"]
  }
];

export const technicalSkills = [
  {
    category: "Programming",
    icon: "Terminal",
    description: "Fundamental languages for problem solving, algorithmic logic, and system security scripting.",
    skills: [
      { name: "C", level: "Core Language", type: "Systems Programming" },
      { name: "Python", level: "Scripting & Security", type: "Security & AI" },
      { name: "JavaScript", level: "Web & Logic", type: "Application Logic" }
    ]
  },
  {
    category: "Web Development",
    icon: "Globe",
    description: "Modern foundational web technologies for building responsive, accessible digital interfaces.",
    skills: [
      { name: "HTML", level: "Semantic Structure", type: "Frontend Core" },
      { name: "CSS", level: "Styling & Responsive UI", type: "Layouts & Design" },
      { name: "JavaScript", level: "Client-side Logic", type: "Dynamic Scripting" }
    ]
  },
  {
    category: "Cybersecurity",
    icon: "ShieldCheck",
    description: "Principles of defensive security, network isolation, and proactive threat assessment.",
    skills: [
      { name: "Cybersecurity Fundamentals", level: "Core Discipline", type: "System Defense" },
      { name: "Network Security Fundamentals", level: "Academic Coursework", type: "Network Defense" },
      { name: "Ethical Hacking Concepts", level: "Active Study", type: "Vulnerability Assessment" },
      { name: "Information Security", level: "Core Discipline", type: "Data Protection" }
    ]
  },
  {
    category: "Tools",
    icon: "Wrench",
    description: "Industry-standard development tools, command line environments, and version control.",
    skills: [
      { name: "Git", level: "Version Control", type: "Workflow" },
      { name: "GitHub", level: "Repository Collaboration", type: "Platform" },
      { name: "Linux", level: "Command Line & OS", type: "Environment" },
      { name: "VS Code", level: "Primary IDE", type: "Development" }
    ]
  },
  {
    category: "Emerging Technologies",
    icon: "Sparkles",
    description: "Next-generation frontiers shaping intelligent, connected, and tamper-resistant architectures.",
    skills: [
      { name: "Artificial Intelligence", level: "Active Exploration", type: "Intelligent Systems" },
      { name: "Machine Learning", level: "Foundational Study", type: "Data Models" },
      { name: "IoT (Internet of Things)", level: "Smart Connected Devices", type: "Hardware & Edge" },
      { name: "Blockchain", level: "Decentralized Architecture", type: "Cryptographic Ledgers" }
    ]
  }
];

export const projects = [
  {
    id: "ai-phishing",
    title: "AI-Based Phishing Detection System",
    category: "Cybersecurity & AI",
    status: "Planned / In Design",
    isProposed: true,
    description: "An intelligent security model designed to analyze suspicious email contents, deceptive domains, and spoofed URLs using Machine Learning classification algorithms.",
    technologies: ["Python", "Machine Learning", "NLP", "Security Heuristics"],
    githubUrl: "https://github.com/Shrishti-nova",
    liveDemoUrl: null,
    architecture: "Ingests raw message payloads and domain attributes, tokenizes deceptive linguistic cues, and evaluates fraud probability against known malicious signatures.",
    keyFeatures: [
      "Automated URL redirect & domain spoof checking",
      "Heuristic feature extraction for deceptive text",
      "Explainable security risk scores for end-users"
    ]
  },
  {
    id: "iot-smart-security",
    title: "IoT-Based Smart Security System",
    category: "IoT & Security",
    status: "Planned / In Design",
    isProposed: true,
    description: "A connected physical and digital intrusion monitoring system integrating embedded sensor nodes, tamper detection, and encrypted alert broadcasts.",
    technologies: ["IoT", "Microcontrollers", "Python", "MQTT", "C"],
    githubUrl: "https://github.com/Shrishti-nova",
    liveDemoUrl: null,
    architecture: "Edge sensor modules communicate with a centralized gateway using TLS-encrypted MQTT messages to trigger real-time incident notifications.",
    keyFeatures: [
      "Hardware-level physical tamper detection",
      "Encrypted event telemetry over secure channels",
      "Instant automated incident alert dispatches"
    ]
  },
  {
    id: "blockchain-doc-verification",
    title: "Blockchain-Based Secure Document Verification",
    category: "Blockchain & Cryptography",
    status: "Planned / In Design",
    isProposed: true,
    description: "A decentralized credential verification framework utilizing cryptographic SHA-256 hashing and immutable distributed ledgers to prevent counterfeit certificates.",
    technologies: ["Blockchain", "Smart Contracts", "SHA-256", "JavaScript"],
    githubUrl: "https://github.com/Shrishti-nova",
    liveDemoUrl: null,
    architecture: "Digital document digests are cryptographically anchored on-chain; auditors verify authenticity with instant zero-knowledge hash comparison.",
    keyFeatures: [
      "Immutable timestamped audit trails on ledger",
      "Elimination of centralized single points of failure",
      "Instant tamper-evident verification audit"
    ]
  },
  {
    id: "password-strength-analyzer",
    title: "Password Strength Analyzer",
    category: "Cybersecurity & Web",
    status: "Planned / In Design",
    isProposed: true,
    description: "A cryptographic entropy analyzer evaluating credential strength against dictionary attacks, common breach databases, and entropy metrics.",
    technologies: ["Python", "JavaScript", "Information Entropy", "Web Security"],
    githubUrl: "https://github.com/Shrishti-nova",
    liveDemoUrl: null,
    architecture: "Client-side mathematical entropy assessment calculates bit-strength and crack time estimates without ever transmitting the plaintext secret.",
    keyFeatures: [
      "Shannon entropy calculation engine",
      "Common password and dictionary pattern matching",
      "Actionable recommendations for resilient passphrases"
    ]
  },
  {
    id: "network-traffic-dashboard",
    title: "Network Traffic Analysis Dashboard",
    category: "Network Security",
    status: "Planned / In Design",
    isProposed: true,
    description: "A network telemetry monitoring dashboard designed to inspect packet distribution, identify suspicious bandwidth spikes, and flag port sweep reconnaissance.",
    technologies: ["Python", "Network Protocols", "Linux Networking", "JavaScript"],
    githubUrl: "https://github.com/Shrishti-nova",
    liveDemoUrl: null,
    architecture: "Packet capture engine parses protocol headers (TCP/UDP/ICMP) and generates real-time telemetry alerts on abnormal traffic anomalies.",
    keyFeatures: [
      "Live protocol distribution telemetry",
      "Automated alert flags for port scan sweeps",
      "Throughput anomaly detection indicators"
    ]
  },
  {
    id: "secure-login-auth",
    title: "Secure Login Authentication System",
    category: "Web Security",
    status: "Planned / In Design",
    isProposed: true,
    description: "A hardened user authentication system incorporating bcrypt password hashing, Two-Factor Authentication (2FA), session security, and brute-force mitigation.",
    technologies: ["Python / JavaScript", "Bcrypt", "Two-Factor Auth (2FA)", "Web Security"],
    githubUrl: "https://github.com/Shrishti-nova",
    liveDemoUrl: null,
    architecture: "Zero-trust session architecture enforcing salted hashing, rate-limited login queues, and HTTP-only session cookie controls.",
    keyFeatures: [
      "Bcrypt password salting with adaptive cost factors",
      "Time-based One-Time Password (TOTP) 2FA support",
      "Rate-limiting protection against brute-force attacks"
    ]
  }
];

export const certifications = [
  {
    id: "cyber-cert-placeholder",
    title: "Cybersecurity Certification [Editable Placeholder]",
    issuer: "Accredited Security Body",
    category: "Cybersecurity Certifications",
    date: "Planned Milestone",
    isPlaceholder: true,
    description: "Placeholder for upcoming industry cybersecurity certification (e.g. CompTIA Security+, CEH, or equivalent). Ready to update as credentials are achieved.",
    skillsCovered: ["Threat Analysis", "Network Defense", "Security Operations"]
  },
  {
    id: "ai-ml-course-placeholder",
    title: "AI and Machine Learning Course [Editable Placeholder]",
    issuer: "Academic / Technical Platform",
    category: "AI and ML Courses",
    date: "Planned Milestone",
    isPlaceholder: true,
    description: "Placeholder for specialized coursework in artificial intelligence and machine learning applications. Editable with issuing platform and completion date.",
    skillsCovered: ["Machine Learning", "Pattern Recognition", "AI Algorithms"]
  },
  {
    id: "iot-workshop-placeholder",
    title: "IoT Hands-On Workshop [Editable Placeholder]",
    issuer: "Engineering Workshop / Technical Fest",
    category: "IoT Workshops",
    date: "Planned Milestone",
    isPlaceholder: true,
    description: "Slot reserved for hands-on embedded systems and Internet of Things workshop participation. Update with certificate details and event verification.",
    skillsCovered: ["Smart Sensors", "Connected Devices", "Embedded Logic"]
  },
  {
    id: "blockchain-workshop-placeholder",
    title: "Blockchain Technology Workshop [Editable Placeholder]",
    issuer: "Web3 / Academic Forum",
    category: "Blockchain Workshops",
    date: "Planned Milestone",
    isPlaceholder: true,
    description: "Placeholder for decentralized ledger, cryptography, and smart contract workshop verification.",
    skillsCovered: ["Cryptographic Hashing", "Decentralized Systems", "Smart Contracts"]
  },
  {
    id: "hackathon-placeholder",
    title: "National Hackathon Participation [Editable Placeholder]",
    issuer: "Hackathon Organizing Committee",
    category: "Hackathons",
    date: "Planned Milestone",
    isPlaceholder: true,
    description: "Reserved slot for hackathon competitions and cybersecurity capture-the-flag (CTF) events. Add project submissions and honors as they conclude.",
    skillsCovered: ["Rapid Prototyping", "Collaborative Problem Solving", "System Defense"]
  },
  {
    id: "competition-placeholder",
    title: "College Technical Competition [Editable Placeholder]",
    issuer: "Guru Nanak Dev Engineering College",
    category: "College Competitions",
    date: "Planned Milestone",
    isPlaceholder: true,
    description: "Dedicated placeholder for departmental and collegiate technical competition honors, project exhibitions, and symposium presentations.",
    skillsCovered: ["Technical Presentation", "Peer Collaboration", "Engineering Design"]
  },
  {
    id: "tech-events-placeholder",
    title: "Technical Conference / Event [Editable Placeholder]",
    issuer: "Engineering Institution",
    category: "Technical Events",
    date: "Planned Milestone",
    isPlaceholder: true,
    description: "Placeholder for attending technology seminars, security summits, and developer community events.",
    skillsCovered: ["Emerging Trends", "Cybersecurity Landscape", "Industry Insights"]
  },
  {
    id: "coding-achievements-placeholder",
    title: "Coding Achievements & Milestones [Editable Placeholder]",
    issuer: "Coding Platform / University",
    category: "Coding Achievements",
    date: "Planned Milestone",
    isPlaceholder: true,
    description: "Editable slot for algorithmic problem-solving milestones, coding challenges, and repository achievements.",
    skillsCovered: ["Algorithmic Thinking", "C & Python Programming", "Data Structures"]
  }
];

export const education = {
  institution: "Guru Nanak Dev Engineering College",
  location: "Bidar, Karnataka, India",
  degree: "Bachelor of Engineering",
  branch: "Computer Science Engineering – Cybersecurity",
  academicYear: "2023 - 2027",
  status: "Undergraduate Engineering Student",
  overview: "Pursuing rigorous computer science engineering education focused on computer systems, security principles, network defenses, and emerging computing architectures.",
  coursework: [
    "Cybersecurity Fundamentals",
    "Computer Networks",
    "Operating Systems",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming (C / Python)",
    "Artificial Intelligence Foundations",
    "Software Development Practices"
  ],
  milestones: [
    {
      year: "Year 1 (Foundations)",
      title: "Foundations of Engineering & Programming",
      desc: "Mastered fundamental computing principles, structured programming in C, mathematical foundations, and digital logic."
    },
    {
      year: "Year 2 (Core Systems)",
      title: "Core Computer Science & Web Fundamentals",
      desc: "Delved into Object-Oriented concepts, Data Structures, Database Systems, Computer Networks, and Python scripting."
    },
    {
      year: "Year 3 (Specialization)",
      title: "Cybersecurity & Emerging Technologies Specialization",
      desc: "Deepening practical knowledge in network security, ethical hacking concepts, AI exploration, IoT systems, and blockchain architectures."
    },
    {
      year: "Year 4 (Capstone & Launch)",
      title: "Capstone Engineering & Security Research",
      desc: "Focusing on major cybersecurity project implementation, security analyst career launch, and innovative emerging tech research."
    }
  ]
};

export const learningJourney = [
  {
    topic: "C Programming",
    status: "Foundation Mastered",
    progress: 88,
    category: "Programming",
    focus: "Memory concepts, pointers, core algorithmic logic, and low-level data structures."
  },
  {
    topic: "Python Programming",
    status: "Active Exploration",
    progress: 85,
    category: "Programming",
    focus: "Security scripting, automation, socket communication, and machine learning foundations."
  },
  {
    topic: "Cybersecurity Fundamentals",
    status: "Core Specialization",
    progress: 82,
    category: "Cybersecurity",
    focus: "Information security principles, CIA triad, threat modeling, and defense-in-depth."
  },
  {
    topic: "Linux",
    status: "Active Learning",
    progress: 78,
    category: "Systems & Tools",
    focus: "Command line operations, file permissions, shell environments, and security utilities."
  },
  {
    topic: "Computer Networks",
    status: "Academic Coursework",
    progress: 80,
    category: "Networking",
    focus: "OSI and TCP/IP models, routing protocols, DNS, packet transmission, and network defense."
  },
  {
    topic: "Artificial Intelligence",
    status: "Active Exploration",
    progress: 70,
    category: "Emerging Technologies",
    focus: "Intelligent systems, machine learning models, and security anomaly detection."
  },
  {
    topic: "Internet of Things (IoT)",
    status: "Active Exploration",
    progress: 68,
    category: "Emerging Technologies",
    focus: "Connected smart sensors, embedded microcontrollers, and lightweight secure protocols."
  },
  {
    topic: "Blockchain Technology",
    status: "Active Exploration",
    progress: 65,
    category: "Emerging Technologies",
    focus: "Decentralized architectures, cryptographic hashing, immutable ledgers, and transactions."
  },
  {
    topic: "Ethical Hacking Concepts",
    status: "Active Exploration",
    progress: 72,
    category: "Cybersecurity",
    focus: "Responsible vulnerability assessment, reconnaissance, and defensive countermeasures."
  }
];

export const githubConfig = {
  profileUrl: "https://github.com/Shrishti-nova",
  username: "Shrishti-nova",
  heading: "Explore My Code",
  subheading: "Public repositories, cybersecurity scripts, and technical explorations on GitHub."
};

export const linkedinConfig = {
  profileUrl: "https://www.linkedin.com/in/shrishti-itgampalli-669bb144a/",
  headline: "Cybersecurity Engineering Student | Aspiring Security Analyst | Technology Enthusiast",
  connectionPitch: "Open to connecting with cybersecurity analysts, engineering mentors, fellow students, and tech innovators. Let's collaborate on building a smarter and safer digital future.",
  highlights: [
    "Computer Science Engineering student specializing in Cybersecurity at GNDEC Bidar",
    "Passionate about combining innovation with security across AI, IoT, and Blockchain",
    "Committed to continuous learning, ethical security research, and engineering excellence"
  ]
};
