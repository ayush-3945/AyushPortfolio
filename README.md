# 🚀 Ayush Pandey - Portfolio

> Backend & Systems Engineering. Building fast, reliable systems and shipping production-grade products.

![Terminal Aesthetic](https://img.shields.io/badge/Aesthetic-Terminal-F5A623?style=for-the-badge&logo=gnometerminal&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-%234285F4.svg?style=for-the-badge&logo=google&logoColor=white)

A modern, highly interactive, and uniquely designed personal portfolio built with React and Tailwind CSS. It features a custom "True Non-Blocking Multi-Window Desktop Manager", live GitHub integrations, and an AI-powered assistant.

🔗 **Live Demo:** [https://ayush-portfolio-gamma-mocha.vercel.app](https://ayush-portfolio-gamma-mocha.vercel.app) *(Custom `.tech` domain coming soon!)*

---

## ✨ Features

- 💻 **True Multi-Window Desktop Manager:** A Mac-like dock at the bottom of the screen allows users to open and interact with multiple non-blocking, draggable window modals simultaneously.
- 📡 **Live System Logs (GitHub Activity):** A dedicated `/#/activity` route that fetches live commit history directly from the GitHub API and renders it in a reverse-chronological syslog format.
- 🤖 **Gemini AI Integration:** Includes an AI-powered assistant ("Ask Ayush AI") utilizing the Google Gemini API to answer questions about my skills and experience.
- 🎨 **Terminal Aesthetic:** A cohesive dark-mode design system with amber/gold accents, monospace typography, glowing glassmorphism effects, and terminal-style micro-interactions.
- 🚦 **Single Page Application Routing:** Fully implemented with `react-router-dom` using `<HashRouter>` for seamless GitHub Pages and Vercel deployments without 404 errors.
- 📱 **Fully Responsive:** Smooth experience across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM (HashRouter)
- **Styling:** Tailwind CSS (with custom theme extensions)
- **Icons:** Lucide React
- **APIs:** GitHub REST API, Google Gemini 1.5 API
- **Deployment:** Vercel

## 🚀 Getting Started Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayush-3945/AyushPortfolio.git
   ```

2. **Navigate to the directory**
   ```bash
   cd AyushPortfolio/codezenith
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
