export const portfolioData = {
  personal: {
    name: "Ayush Pandey",
    role: "Full Stack & AI Systems Engineer",
    tagline: "I specialize in architecting autonomous AI incident engines and real-time distributed web systems. Creator of Dispatch OS.",
    location: "Ghaziabad / Delhi NCR, India",
    status: "Available for new opportunities",
    email: "ayushpandey23042006@gmail.com",
    github: "https://github.com/ayush-3945",
    linkedin: "https://linkedin.com/in/ayush-kumar-pandey-a6880532b",
    twitter: "https://twitter.com/PandeyAyush2304",
    resumeUrl: "/Ayush_Pandey_Resume.pdf"
  },

  songs: [
    {
      title: "After Hours",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "6:01",
      genre: "Synthwave / R&B",
      cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&auto=format&fit=crop&q=80"
    },
    {
      title: "Save Your Tears",
      artist: "The Weeknd",
      album: "After Hours",
      duration: "3:35",
      genre: "Synthpop",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80"
    },
    {
      title: "Hola Amigo",
      artist: "KR$NA ft. Seedhe Maut",
      album: "Time Will Tell",
      duration: "3:18",
      genre: "Desi Hip Hop",
      cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80"
    },
    {
      title: "Nanchaku",
      artist: "Seedhe Maut ft. MC Stan",
      album: "Nayaab",
      duration: "3:42",
      genre: "Desi Hip Hop",
      cover: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=300&auto=format&fit=crop&q=80"
    },
    {
      title: "Naksha",
      artist: "Seedhe Maut",
      album: "Lunch Break",
      duration: "2:54",
      genre: "Desi Hip Hop",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=80"
    }
  ],

  quotes: [
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
    { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
    { text: "Tu chaahe jo bol, apna rap game high hai.", author: "KR$NA" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" }
  ],

  projects: [
    {
      id: "dispatch-os",
      title: "Dispatch OS",
      subtitle: "Autonomous Incident Triage & Operations Platform",
      badge: "Flagship Production SaaS",
      year: "2026",
      featured: true,
      description: "Enterprise incident triage platform leveraging Google Gemini 1.5 Flash for autonomous semantic routing, dynamic priority badging, and bilingual diagnostic briefs (EN/HI) with 98%+ precision, cutting triage turnaround from days to <2 minutes. Features real-time bi-directional WebSockets, 7-day predictive surge forecasting with in-memory TTL caching, and native PWA installation.",
      techStack: ["React 19", "Node.js", "Express", "MongoDB Atlas", "Gemini 1.5 Flash", "Socket.io", "Recharts", "Cloudinary", "PWA"],
      liveUrl: "https://ai-smart-issue-routing-jbb8.vercel.app",
      githubUrl: "https://github.com/ayush-3945/ai-smart-issue-routing",
      stats: {
        latency: "<2s Turnaround",
        precision: "98.4% Confidence",
        realtime: "50ms Socket Sync",
        deployment: "Vercel + Railway"
      }
    },
    {
      id: "interview-agent",
      title: "AI Interview Agent",
      subtitle: "Real-Time Voice Mock Interview Simulator",
      badge: "Multimodal AI Tool",
      year: "2026",
      featured: true,
      description: "Interactive mock interview simulator conducting real-time technical rounds with dynamic role-based question generation across custom difficulty presets using Gemini AI prompt chains. Integrated Web Speech API for real-time voice-to-text response capturing and instant automated evaluation scoring.",
      techStack: ["React.js", "Node.js", "Web Speech API", "Google Gemini AI", "Tailwind CSS", "Vite"],
      liveUrl: "https://github.com/ayush-3945/AI-Interview-Agent",
      githubUrl: "https://github.com/ayush-3945/AI-Interview-Agent",
      stats: {
        mode: "Voice + NLP",
        latency: "Real-time TTS",
        eval: "Automated Rubric"
      }
    },
    {
      id: "flashmon",
      title: "Flashmon CLI",
      subtitle: "High-Performance AST File Watcher & Dev Tool",
      badge: "Systems Tooling",
      year: "2026",
      featured: false,
      description: "Ultra-lightweight developer CLI alternative to nodemon built with TypeScript and Node.js child processes. Features debounced filesystem event watching, AST-aware dependency invalidation, and sub-50ms process hot-restarting.",
      techStack: ["TypeScript", "Node.js", "Chokidar", "Child Process", "CLI"],
      liveUrl: "https://github.com/ayush-3945",
      githubUrl: "https://github.com/ayush-3945",
      stats: {
        startup: "<40ms Cold Start",
        memory: "<15MB Footprint"
      }
    }
  ],

  experience: [
    {
      role: "Bachelor of Technology — Computer Science (CSE)",
      org: "ABES Engineering College",
      location: "Ghaziabad, U.P",
      period: "Sep 2024 – June 2028",
      details: "Relevant Coursework: Data Structures & Algorithms, OOP Concepts, Operating Systems, Database Management (DBMS), Computer Networks, System Architecture."
    },
    {
      role: "Public Relations (PR) Head",
      org: "CodeChef ABESEC Chapter",
      location: "ABES Engineering College",
      period: "Sep 2025 – Present",
      details: "Organized coding events, workshops, and competitive programming sessions for 800+ students. Led outreach and developer community initiatives."
    },
    {
      role: "Web & Mobile Development Virtual Intern",
      org: "IBM PBEL Virtual Internship",
      location: "Remote",
      period: "Aug 2025",
      details: "Completed IBM's PBEL Equivalent Internship program with distinction. Gained hands-on experience in full-stack web architecture and scalable API design."
    }
  ],

  techStack: {
    languages: [
      { name: "JavaScript (ESNext)", level: "Advanced", icon: "⚡" },
      { name: "TypeScript", level: "Intermediate", icon: "🔷" },
      { name: "Python", level: "Proficient", icon: "🐍" },
      { name: "C / C++", level: "DSA / Systems", icon: "⚙️" },
      { name: "SQL", level: "Queries & Indexing", icon: "🗄️" }
    ],
    frameworks: [
      { name: "React 19 & Vite 8", category: "Frontend" },
      { name: "Node.js & Express.js", category: "Backend" },
      { name: "Socket.io (WebSockets)", category: "Real-time" },
      { name: "Tailwind CSS & Framer", category: "UI/UX" },
      { name: "Next.js", category: "Full-stack" }
    ],
    databases: [
      { name: "MongoDB Atlas", type: "NoSQL / Aggregations" },
      { name: "Redis Caching", type: "In-Memory TTL" },
      { name: "Cloudinary CDN", type: "Media Storage" }
    ],
    aiAndTools: [
      { name: "Google Gemini 1.5 Flash SDK", type: "LLM Reasoning" },
      { name: "Git & GitHub CI/CD", type: "Version Control" },
      { name: "Postman & REST API Design", type: "API Testing" },
      { name: "Vercel Global Edge & Railway", type: "Cloud Deployment" },
      { name: "PWA & TWA Store Packaging", type: "Mobile Distribution" }
    ]
  },

  articles: [
    {
      title: "Why Autonomous Triage is the Future of Enterprise IT Operations",
      excerpt: "A reflection on eliminating manual ticket triage through Gemini 1.5 Flash structured reasoning, real-time WebSockets, and 7-day predictive surge forecasting.",
      date: "Aug 2026",
      readTime: "4 min read",
      link: "https://github.com/ayush-3945/ai-smart-issue-routing"
    }
  ]
};
