const fs = require('fs');

function createResumePDF() {
  const lines = [
    { font: '/F1', size: 18, text: 'SHRUSHTI ITGAMPALLI', dy: 0, x: 50, y: 780 },
    { font: '/F2', size: 10, text: 'Cybersecurity Engineering Student | Aspiring Security Analyst | Technology Enthusiast', dy: -18 },
    { font: '/F3', size: 8.5, text: 'Email: shrishtiitgampalli@gmail.com  |  GitHub: https://github.com/Shrishti-nova', dy: -14 },
    { font: '/F3', size: 8.5, text: 'LinkedIn: https://www.linkedin.com/in/shrishti-itgampalli-669bb144a/  |  Bidar, Karnataka, India', dy: -12 },
    { font: '/F3', size: 8.5, text: 'Guru Nanak Dev Engineering College, Bidar, Karnataka', dy: -12 },
    
    // Line separator
    { font: '/F2', size: 11, text: '---------------------------------------------------------------------------------------------------------------------', dy: -14 },
    
    // Tagline / Statement
    { font: '/F2', size: 10, text: 'PROFESSIONAL OBJECTIVE', dy: -16 },
    { font: '/F3', size: 8.5, text: '"Exploring Cybersecurity, AI, IoT and Blockchain to Build a Smarter and Safer Digital Future."', dy: -14 },
    { font: '/F3', size: 8.5, text: 'Passionate Computer Science Engineering student specializing in Cybersecurity at GNDEC Bidar, dedicated to', dy: -12 },
    { font: '/F3', size: 8.5, text: 'understanding digital system architectures, uncovering vulnerabilities, and building robust, defensive solutions.', dy: -12 },
    
    // Education
    { font: '/F2', size: 10, text: 'EDUCATION', dy: -20 },
    { font: '/F2', size: 9, text: 'Guru Nanak Dev Engineering College, Bidar, Karnataka', dy: -14 },
    { font: '/F3', size: 8.5, text: 'Degree: Bachelor of Engineering (B.E.) in Computer Science Engineering - Cybersecurity', dy: -12 },
    { font: '/F3', size: 8.5, text: 'Academic Duration: 2023 - 2027 (Undergraduate)', dy: -11 },
    { font: '/F3', size: 8.5, text: 'Relevant Coursework: Cybersecurity Fundamentals, Computer Networks, Operating Systems, Data Structures, DBMS, OOP', dy: -11 },

    // Technical Skills
    { font: '/F2', size: 10, text: 'TECHNICAL SKILLS', dy: -20 },
    { font: '/F3', size: 8.5, text: 'Programming Languages: C, Python, JavaScript', dy: -14 },
    { font: '/F3', size: 8.5, text: 'Web Development: HTML, CSS, JavaScript (Client-side logic and interface design)', dy: -12 },
    { font: '/F3', size: 8.5, text: 'Cybersecurity: Cybersecurity Fundamentals, Network Security Fundamentals, Ethical Hacking Concepts, Information Security', dy: -12 },
    { font: '/F3', size: 8.5, text: 'Tools and Environments: Git, GitHub, Linux (Command line and permissions), VS Code', dy: -12 },
    { font: '/F3', size: 8.5, text: 'Emerging Technologies: Artificial Intelligence (AI), Machine Learning (ML), Internet of Things (IoT), Blockchain', dy: -12 },

    // Proposed Projects
    { font: '/F2', size: 10, text: 'PROPOSED INNOVATIONS AND RESEARCH PROJECTS (PLANNED / IN DESIGN)', dy: -20 },
    { font: '/F2', size: 8.5, text: '1. AI-Based Phishing Detection System', dy: -13 },
    { font: '/F3', size: 8, text: '   Machine Learning model analyzing suspicious emails, redirect chains, and domain spoofing in real time.', dy: -10 },
    { font: '/F2', size: 8.5, text: '2. IoT-Based Smart Security System', dy: -12 },
    { font: '/F3', size: 8, text: '   Physical and digital intrusion monitoring combining microcontrollers, encrypted sensor feeds, and secure MQTT.', dy: -10 },
    { font: '/F2', size: 8.5, text: '3. Blockchain-Based Secure Document Verification', dy: -12 },
    { font: '/F3', size: 8, text: '   Decentralized academic credential audit platform utilizing SHA-256 cryptographic hashing and immutable ledgers.', dy: -10 },
    { font: '/F2', size: 8.5, text: '4. Password Strength Analyzer', dy: -12 },
    { font: '/F3', size: 8, text: '   Cryptographic entropy evaluation tool assessing passphrase resilience against dictionary attacks and NIST metrics.', dy: -10 },
    { font: '/F2', size: 8.5, text: '5. Network Traffic Analysis Dashboard', dy: -12 },
    { font: '/F3', size: 8, text: '   Live packet telemetry inspection engine monitoring protocols (TCP/UDP/ICMP) and reconnaissance port sweep scans.', dy: -10 },
    { font: '/F2', size: 8.5, text: '6. Secure Login Authentication System', dy: -12 },
    { font: '/F3', size: 8, text: '   Hardened auth service featuring salted bcrypt password hashing, TOTP Two-Factor Authentication, and rate limiting.', dy: -10 },

    // Learning Tracks
    { font: '/F2', size: 10, text: 'LEARNING JOURNEY', dy: -18 },
    { font: '/F3', size: 8.5, text: 'Active Specialization Tracks: C, Python, Cybersecurity Fundamentals, Linux, Computer Networks, AI, IoT, Blockchain', dy: -13 }
  ];

  let stream = 'BT\n';
  lines.forEach((line) => {
    stream += `${line.font} ${line.size} Tf\n`;
    if (line.x !== undefined && line.y !== undefined) {
      stream += `${line.x} ${line.y} Td\n`;
    } else {
      stream += `0 ${line.dy} Td\n`;
    }
    const escaped = line.text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    stream += `(${escaped}) Tj\n`;
  });
  stream += 'ET\n';

  const streamBuf = Buffer.from(stream, 'utf8');

  const pdf = Buffer.concat([
    Buffer.from('%PDF-1.4\n'),
    Buffer.from('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n'),
    Buffer.from('2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n'),
    Buffer.from('3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R /F3 7 0 R >> >> >>\nendobj\n'),
    Buffer.from(`4 0 obj\n<< /Length ${streamBuf.length} >>\nstream\n`),
    streamBuf,
    Buffer.from('\nendstream\nendobj\n'),
    Buffer.from('5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n'),
    Buffer.from('6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n'),
    Buffer.from('7 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n'),
    Buffer.from('xref\n0 8\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000257 00000 n \n0000000000 00000 n \n0000000000 00000 n \n0000000000 00000 n \ntrailer\n<< /Size 8 /Root 1 0 R >>\nstartxref\n500\n%%EOF\n')
  ]);

  fs.writeFileSync('public/resume.pdf', pdf);
  console.log('Successfully created Shrushti Itgampalli authentic resume at public/resume.pdf');
}

createResumePDF();
