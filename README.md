# 🛡️ Shrushti Itgampalli — Cybersecurity Engineering Portfolio

> **"Exploring Cybersecurity, AI, IoT & Blockchain to Build a Smarter and Safer Digital Future."**

A premium, futuristic, and responsive personal portfolio website built for **Shrushti Itgampalli**, Computer Science Engineering Student specializing in Cybersecurity at **Guru Nanak Dev Engineering College, Bidar**.

---

## ⚡ Live Features & Highlights

- **Futuristic Black & Neon Purple Aesthetic:** Designed with `#080810` deep space canvas, glassmorphic panels, and neon purple glows (`#A855F7`, `#C084FC`, `#9333EA`).
- **Original Facial Identity Preservation:** Features Shrushti's actual photograph encased in a circular glowing cyber radar frame with rotating tech orbits.
- **Dynamic Typing Terminal:** Real-time typewriter effect cycling through her professional specializations.
- **Interactive Cyber CLI Terminal:** Visitors can open `[CLI]` via navbar or shortcut (`Ctrl + \``) to run `whoami`, `skills`, `projects`, `certs`, `contact`, and `matrix`.
- **Canvas Particle Network:** High-performance particle connection mesh reacting dynamically to cursor interactions.
- **Categorized Competencies:** Programming, Web Development, Cybersecurity, Tools, and Emerging Tech with zero fabricated percentages.
- **Project Showcase:** 6 proposed cybersecurity & emerging tech prototypes (clearly marked as *Planned / In Design* as requested) alongside real full-stack web projects with an architectural inspector modal.
- **Credentials & NCC Honors:** Verified certifications from Oracle, Infosys, and Cisco alongside NCC 'A' Certificate leadership honors and editable placeholder slots.
- **Vertical Glowing Education Timeline:** Academic progression at GNDEC Bidar with core computer science and security coursework.
- **Interactive Learning Journey:** Real-time mastery meters that can be updated manually.
- **Live GitHub Integration:** Public repo telemetry, language breakdowns, and contribution activity grid connected to `Shrishti-nova`.
- **Professional LinkedIn Connection Card:** Direct networking callout linking to her official profile.
- **Secure Transmission Contact Form:** TLS-themed dispatch terminal with client-side validation and instant email fallback.
- **Turnkey Resume Download:** Direct link to her authentic `resume.pdf`.

---

## 🛠️ Technology Stack

- **Framework:** React.js 18
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Animations:** Custom CSS Keyframes & Canvas 2D API
- **Deployment:** Vercel / Netlify ready

---

## 📂 Project Directory Structure

```text
portfolioS/
├── public/
│   ├── photo.jpg             # High-resolution original portrait photograph
│   ├── shrushti.jpg          # Profile image reference
│   └── resume.pdf            # Authentic downloadable resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation, theme toggle & CLI launcher
│   │   ├── Hero.jsx          # Hero screen with circular neon photo & typing text
│   │   ├── About.jsx         # "Beyond the Code, Into the Digital World" & telemetry
│   │   ├── Specializations.jsx# 8 interactive specialization cards
│   │   ├── Skills.jsx        # Categorized skills matrix
│   │   ├── Projects.jsx      # Proposed prototypes & implemented projects with modal
│   │   ├── Certifications.jsx# Credentials gallery & editable slots
│   │   ├── Education.jsx     # Vertical glowing timeline (GNDEC Bidar)
│   │   ├── LearningJourney.jsx# Mastery progress sliders
│   │   ├── GitHubSection.jsx # Live GitHub repo feed & commit visualizer
│   │   ├── LinkedInSection.jsx# Professional networking card
│   │   ├── Contact.jsx       # Secure message dispatch form
│   │   ├── CyberTerminal.jsx # Interactive CLI terminal
│   │   ├── ParticleBackground.jsx # HTML5 interactive cyber mesh
│   │   ├── Footer.jsx        # Brand statement, social links & copyright
│   │   └── BackToTop.jsx     # Scroll percentage button
│   ├── data/
│   │   └── portfolioData.js  # 🌟 CENTRAL CONFIGURATION (Edit all content here!)
│   ├── App.jsx               # Main application container
│   ├── index.css             # Tailwind styling & glassmorphism classes
│   └── main.jsx              # React DOM entry point
├── package.json              # Dependencies and build scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Custom palette & typography
├── vercel.json               # Vercel SPA routing rewrite
└── netlify.toml              # Netlify SPA routing redirect
```

---

## ⚙️ How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The compiled, production-ready static assets will be output in the `dist/` directory.

---

## ✏️ How to Edit & Update Content

All website text, projects, certificates, and skills are organized in a single file:
**`src/data/portfolioData.js`**

- **Update Projects:** Edit the `projects` array to change project titles, add GitHub links, or switch status from `"Planned / In Design"` to `"Implemented Project"`.
- **Update Certifications:** Edit the `certifications` array to add newly earned certificates, dates, or verification links.
- **Update Learning Progress:** Adjust the `progress` integers in `learningJourney`.
- **Update Academic Year:** Change `academicYear` under `personalInfo` or `education`.

---

## 🚀 Deployment Guide

### Option 1: Deploy to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Shrushti Cybersecurity Portfolio"
   git branch -M main
   git remote add origin https://github.com/Shrishti-nova/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Vite** (auto-detected).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**. Your website is live worldwide with automatic SSL!

### Option 2: Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect with GitHub and select your repository.
4. Netlify will auto-detect the `netlify.toml` file included in this project.
5. Click **"Deploy site"**.

---

## 🛡️ Brand Identity Summary
- **Name:** Shrushti Itgampalli
- **Core Domains:** Cybersecurity × AI × IoT × Blockchain
- **Tagline:** *"Securing Tomorrow Through Technology."*

