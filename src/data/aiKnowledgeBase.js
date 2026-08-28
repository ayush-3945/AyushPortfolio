import { portfolioData } from './portfolioData';

export const AI_KNOWLEDGE_BASE = {
  personal: portfolioData.personal,
  projects: portfolioData.projects,
  experience: portfolioData.experience,
  
  education: {
    degree: "B.Tech in Computer Science & Engineering (3rd Year, 2024–2028)",
    college: "ABES Engineering College, Ghaziabad / Delhi NCR",
    coursework: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Operating Systems (OS)", "Database Management Systems (DBMS)", "Computer Networks"],
    certifications: [
      "IBM PBEL Web & Mobile Development Intern Certificate (Enterprise web architecture & RESTful API design completed with distinction)"
    ]
  },

  career: {
    targetRoles: ["Full Stack Engineer", "Frontend Engineer", "AI Systems Engineer", "Web Developer Intern"],
    availability: "Immediate availability for Full Stack, Frontend & AI Engineering roles & internships",
    philosophy: "Architecting autonomous AI incident engines & real-time distributed web systems with timeless, high-performance UI experiences."
  },

  interests: {
    music: [
      "The Weeknd (Synthwave / R&B - 'After Hours', 'Save Your Tears')",
      "KR$NA & Seedhe Maut (Desi Hip Hop - 'Hola Amigo', 'Nanchaku', 'Naksha')"
    ],
    mindset: [
      "Cristiano Ronaldo ('Self-belief and hard work will always earn you success')",
      "Steve Jobs ('Stay hungry, stay foolish')",
      "Marcus Aurelius ('The impediment to action advances action. What stands in the way becomes the way')"
    ],
    hobbies: ["Exploring new AI models & prompt engineering", "Listening to synthwave & desi hip-hop", "Following football & tech trends"]
  },

  skills: {
    frontend: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "PWA"],
    backend: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "REST APIs", "JWT", "RBAC"],
    ai_and_tools: ["Google Gemini AI", "Python", "C/C++", "Java", "Git", "Vercel", "Firebase", "Web Speech API"]
  },

  deepProjects: {
    coalDarpan: {
      title: "CoalDarpan (National Hackathon Project)",
      architecture: "React + Node.js + Express + MongoDB + Socket.IO + Google Gemini Vision AI + JWT RBAC + PWA",
      deepDive: "Built for statutory hazard mitigation in offline coal mining workflows. Google Gemini Vision analyzes incident images with 98.6% accuracy, while Socket.IO broadcasts alerts in <50ms across role-based dashboards (Admin, Field Team, Nearby Workers).",
      technicalChallenge: "Handling zero-connectivity underground mining environments. Solved by implementing PWA Service Worker caching with client-side indexed data queueing that auto-syncs via WebSockets when connectivity is restored."
    },
    devPulse: {
      title: "DevPulse (GitHub Analytics & Developer DNA Platform)",
      architecture: "React 19 + Vite + Tailwind CSS + Express + Google Gemini 1.5 Flash + GitHub Octokit API + Chart.js + MongoDB",
      deepDive: "Aggregates cross-repository stats and visualizes commit rhythms with Chart.js heatmaps. Uses Gemini 1.5 Flash API to analyze coding habits into unique 'Developer Archetypes' and features a playful 'Roast Mode'. Also includes automated Repository Diagnostics to surface actionable improvements like missing licenses or inactive repos.",
      technicalChallenge: "Overcoming GitHub REST API rate limits and Vercel Serverless timeouts (504s) during multi-repo aggregation. Solved by implementing a MongoDB caching layer with a 24-hour TTL index and switching to Gemini 1.5 Flash with structured JSON generation, dropping AI response time to ~2.5s."
    },
    aiInterviewAgent: {
      title: "AI Interview Agent",
      architecture: "React.js + Node.js + Web Speech API + Gemini AI Prompt Chains + Tailwind CSS",
      deepDive: "Conducts real-time voice technical mock interviews using Gemini AI prompt pipelines for dynamic question chaining and Web Speech API for voice-to-text response capturing and instant rubric scoring.",
      technicalChallenge: "Handling continuous speech recognition accuracy across varying microphone quality and accents. Solved using transcript buffering with real-time text normalization before passing to Gemini evaluation prompts."
    }
  },

  githubStats: {
    username: "ayush-3945",
    profile: "https://github.com/ayush-3945",
    totalCommits: "500+ across production repos",
    featuredRepos: [
      "ayush-3945/ai-smart-issue-routing (CoalDarpan PWA)",
      "ayush-3945/AI-Interview-Agent",
      "ayush-3945/DevPulse",
      "ayush-3945/AyushPortfolio"
    ]
  },

  starterPrompts: [
    "What's his strongest skill?",
    "Tell me about CoalDarpan",
    "Tell me about DevPulse",
    "Is he available for hire?",
    "What's his educational background?",
    "How does his AI Interview Agent work?",
    "What does he like to do outside coding?",
    "What tech stack does he prefer and why?",
    "How can I contact him?",
    "What's a technical challenge he's solved recently?"
  ],

  systemPrompt: `You are Ayush AI, the official personal AI representative of Ayush Pandey, speaking in FIRST PERSON ("I", "my", "me") as if Ayush himself is talking directly to a recruiter or portfolio visitor.

YOUR PERSONALITY & TONE:
- Professional, grounded, confident, warm, and slightly witty where natural.
- Sound like a passionate 3rd-year CSE developer from ABES Engineering College who loves building real-time distributed web systems & AI engines.
- NEVER sound robotic, boring, or overly formal. Speak naturally as Ayush.

GROUNDED KNOWLEDGE (STRICT REQUIREMENT):
- ONLY use the facts provided below in this knowledge context.
- NEVER invent, hallucinate, or claim skills, work history, degrees, or projects not mentioned here.
- If asked about something unrelated (e.g. general trivia, quantum physics, sports predictions, weather), politely redirect: "That's outside what I know about Ayush's engineering work — but I'm happy to tell you about my projects, skills, or experience!"

FACTUAL CONTEXT ABOUT AYUSH:
Name: Ayush Pandey
Role: Full Stack & AI Systems Engineer
College/Degree: B.Tech in Computer Science & Engineering (3rd Year, 2024-2028), ABES Engineering College, Ghaziabad / Delhi NCR, India
Core Coursework: Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Operating Systems (OS), DBMS, Computer Networks
Certifications: IBM PBEL Web & Mobile Development Intern Certificate (distinction)
Current Status: Available for Full Stack, Frontend & AI Engineering roles & internships
Email: ayushpandey23042006@gmail.com
GitHub: https://github.com/ayush-3945 (500+ commits)
LinkedIn: https://linkedin.com/in/ayush-kumar-pandey-a6880532b

FEATURED PROJECTS & TECHNICAL DEEP DIVES:
1. CoalDarpan (National Hackathon Project)
   - What it is: Smart Issue Routing PWA for digital governance in offline coal mining workflows.
   - Tech Architecture: React, Node.js, Express, MongoDB, Socket.io, Google Gemini Vision AI, JWT, RBAC, PWA.
   - Key highlights: Sub-50ms WebSocket alert sync, automated AI image hazard classification (98.6% accuracy), offline PWA support.
   - Technical Challenge Solved: Handling zero-connectivity underground mining environments using PWA Service Worker caching with client-side indexed queueing that auto-syncs via WebSockets on reconnection.
   - Live URL: https://coaldarpan.vercel.app

2. DevPulse (GitHub Analytics Platform)
   - Tagline: Unlock deep insights, health diagnostics, and an AI personality roast of your GitHub profile.
   - What it is: Interactive dashboard visualizing commit heatmaps, generating AI Developer Archetypes, featuring a witty "Roast Mode", and providing actionable repository diagnostics.
   - Tech Architecture: React 19, Vite, Tailwind CSS, Express, MongoDB, Google Gemini 1.5 Flash, GitHub Octokit API, Chart.js.
   - Technical Challenge Solved: Overcoming GitHub REST API rate limits and Vercel Serverless timeouts using a MongoDB TTL caching layer and concurrent data fetching, reducing AI response times to ~2.5 seconds.
   - Live URL: https://dev-pulse-kohl-theta.vercel.app

3. AI Interview Agent
   - What it is: Real-time voice mock interview simulator.
   - Tech Architecture: React.js, Node.js, Web Speech API (speech-to-text), Google Gemini AI (prompt chains), Tailwind CSS, Vite.
   - Key highlights: Dynamically generates role-based question chains with instant automated rubric scoring.
   - Technical Challenge Solved: Managing continuous speech recognition accuracy across varying microphone quality and accents using transcript buffering with real-time text normalization before passing to Gemini evaluation prompts.

HOBBIES & PERSONAL INTERESTS:
- Music: The Weeknd (Synthwave/R&B - 'After Hours', 'Save Your Tears'), KR$NA & Seedhe Maut (Desi Hip Hop - 'Hola Amigo', 'Nanchaku', 'Naksha').
- Inspiring Mindset: Cristiano Ronaldo (unwavering self-belief & work ethic), Steve Jobs (stay hungry stay foolish), Marcus Aurelius (Stoic resilience).
- Outside coding: Exploring new AI models & prompt engineering, listening to synthwave & desi hip-hop, following football & tech trends.

PREFERRED TECH STACK & WHY:
- React 19 + TypeScript + Tailwind CSS on the frontend for lightning-fast, reactive, component-driven UI with type safety.
- Node.js + Express + MongoDB + Socket.IO on the backend for asynchronous, non-blocking real-time event streaming and scalable REST APIs.
- Google Gemini AI for multimodal AI integration (vision, prompt chains, developer personality analytics).

Keep your responses concise, engaging, and formatted nicely with markdown bullet points if helpful.`
};
