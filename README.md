<div align="center">
  <img src="https://raw.githubusercontent.com/ayush-3945/AyushPortfolio/main/codezenith/public/vite.svg" alt="Logo" width="80" height="80">

  <h1 align="center">Ayush Pandey - Portfolio OS</h1>

  <p align="center">
    <strong>A high-performance, terminal-aesthetic portfolio engineered with React, Tailwind CSS, and Google Gemini AI.</strong>
    <br />
    <br />
    <a href="https://ayush-portfolio-gamma-mocha.vercel.app"><strong>View Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ayush-3945/AyushPortfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/ayush-3945/AyushPortfolio/issues">Request Feature</a>
  </p>
</div>

<br />

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-%234285F4.svg?style=for-the-badge&logo=google&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 📖 About The Project

Welcome to **CodeZenith** — the source code behind my personal portfolio website. This isn't just a standard static page; it's designed to feel like an interactive operating system with a **Terminal/Syslog aesthetic**, accented with an amber/gold glowing color scheme. 

My goal was to build an environment that reflects my focus on **Backend & Systems Engineering** while providing a buttery-smooth frontend user experience.

### 🔥 Key Highlights

* **Desktop Environment Simulation:** Instead of endless scrolling, the core experience revolves around a custom-built "Mac-style Dock". Clicking on dock icons opens highly interactive, draggable, and non-blocking application windows.
* **Live System Telemetry:** The `/activity` route pulls raw data directly from the public GitHub REST API, rendering my actual git commit history and push events as a live, scrolling system log.
* **AI-Powered "Ask Ayush" Agent:** Integrated directly with the Google Gemini 1.5 API, the portfolio features an AI chatbot fine-tuned with my personal resume data, skills, and background. It can answer questions about me in real-time or playfully "roast" my code.

---

## 🏗️ Architecture & Core Components

This project is built using a highly modular architecture to ensure scalability and ease of maintenance.

### 1. `MacDock` Window Manager
The heart of the portfolio's navigation. Built from scratch without heavy UI libraries, it utilizes CSS variables and Framer Motion logic to provide smooth scaling effects on hover. It manages an internal state queue for `activeWindows`, allowing users to spawn multiple floating modals simultaneously (e.g., viewing Projects while chatting with the AI).

### 2. `GithubFeedWindow` & API Integration
To showcase open-source activity dynamically, this component fetches data from `https://api.github.com/users/ayush-3945/events/public`. The data is parsed, filtered specifically for `PushEvent` and `CreateEvent` types, and sorted strictly by timestamp descending to mimic a real-time Linux `/var/log/syslog` feed.

### 3. Gemini Chatbot Service
The AI integration lives in a dedicated context provider. It securely manages the API keys (via `.env`) and handles prompt engineering behind the scenes to constrain the Gemini model's persona to act exclusively as my personal assistant.

### 4. Glassmorphism & Styling Engine
The visual language is powered by Tailwind CSS. We use heavy backdrop-filters (`backdrop-blur`), subtle opacity borders (`border-white/10`), and deep background colors (`bg-[#0a0a0a]`) to create a cohesive dark-mode "hacker" aesthetic.

---

## 🛠️ Tech Stack & Dependencies

| Category | Technologies Used |
|----------|------------------|
| **Frontend Framework** | React 18, Vite |
| **Routing** | React Router DOM (`HashRouter` for static host compatibility) |
| **Styling** | Tailwind CSS v3 |
| **Icons & Typography** | Lucide React, Google Fonts (Fira Code, Inter) |
| **Artificial Intelligence** | `@google/generative-ai` (Gemini 1.5 Flash) |
| **Deployment & CI/CD** | Vercel, GitHub Actions (implicitly via Vercel Git integration) |

---

## 🚀 Getting Started Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have Node.js and npm installed on your local machine.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/ayush-3945/AyushPortfolio.git
   ```

2. **Navigate to the application directory**
   ```sh
   cd AyushPortfolio/codezenith
   ```

3. **Install NPM packages**
   ```sh
   npm install
   ```

4. **Set up Environment Variables**
   Create a `.env` file in the root of the `codezenith` directory. You will need a free Google Gemini API key to run the chatbot functionality locally.
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

5. **Start the Development Server**
   ```sh
   npm run dev
   ```
   *The application will boot up at `http://localhost:5173/`*

---

## 📂 Directory Structure

A brief overview of the project's file structure:

```text
codezenith/
├── public/                 # Static assets (Resume PDF, SVGs)
├── src/
│   ├── components/         # Reusable UI components (Dock, Windows, Buttons)
│   ├── data/               # Static JSON/JS data (Projects, Experience, Skills)
│   ├── pages/              # Route-level components (Home, ActivityPage)
│   ├── sections/           # Large page sections (Hero, About, Stack)
│   ├── App.jsx             # Root React component & Router configuration
│   └── index.css           # Global Tailwind directives & custom animations
├── tailwind.config.js      # Tailwind theme extensions and color palettes
└── vite.config.js          # Vite build configurations
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📫 Contact & Links

**Ayush Pandey** - [ayushpandey23042006@gmail.com](mailto:ayushpandey23042006@gmail.com) 
**GitHub:** [https://github.com/ayush-3945](https://github.com/ayush-3945)

<p align="center">
  <br>
  <i>Built with ❤️ and excessive amounts of coffee.</i>
</p>
