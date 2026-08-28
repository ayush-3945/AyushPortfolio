import { AI_KNOWLEDGE_BASE } from '../data/aiKnowledgeBase';

// Simple in-memory session rate limiter (max 10 messages per minute)
const MAX_REQUESTS_PER_MIN = 10;
let requestTimestamps = [];

export async function sendChatMessage(userMessage, conversationHistory = []) {
  const now = Date.now();
  requestTimestamps = requestTimestamps.filter((t) => now - t < 60000);

  if (requestTimestamps.length >= MAX_REQUESTS_PER_MIN) {
    return {
      success: false,
      reply: "Rate limit reached (max 10 queries/min). Please wait a few seconds before asking another question!"
    };
  }

  requestTimestamps.push(now);

  // Attempt 1: Call Vercel Serverless Function `/api/chat`
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: userMessage,
        history: conversationHistory
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.reply) {
        return { success: true, reply: data.reply };
      }
    }
  } catch (err) {
    console.log('/api/chat endpoint not reachable, switching to client engine');
  }

  // Attempt 2: Direct Gemini Client Call if VITE_GEMINI_API_KEY is present
  const clientKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (clientKey) {
    try {
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${clientKey}`;
      const contents = [
        {
          role: 'user',
          parts: [{ text: `SYSTEM INSTRUCTION:\n${AI_KNOWLEDGE_BASE.systemPrompt}\n\nUser Question: ${userMessage}` }]
        }
      ];

      const res = await fetch(geminiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents })
      });

      if (res.ok) {
        const data = await res.json();
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (replyText) {
          return { success: true, reply: replyText.trim() };
        }
      }
    } catch (err) {
      console.log('Client Gemini call failed, falling back to local knowledge engine');
    }
  }

  // Attempt 3: Smart Local Offline Knowledge Engine (Guarantees Instant 100% Reliability)
  return {
    success: true,
    reply: getLocalSmartAnswer(userMessage)
  };
}

function getLocalSmartAnswer(userQuery) {
  const q = userQuery.toLowerCase();

  if (q.includes('skill') || q.includes('strongest')) {
    return "My strongest technical skills are **React 19, Node.js, TypeScript, Google Gemini AI**, and **real-time WebSockets**. I excel at architecting high-throughput frontend UIs and autonomous backend incident engines!";
  }
  if (q.includes('coaldarpan') || q.includes('coal')) {
    return "I built **CoalDarpan** during a national hackathon! It's a smart hazard-response PWA featuring Google Gemini AI for image hazard analysis, sub-50ms WebSocket alert sync, and role-based JWT dashboards. Check it out at [coaldarpan.vercel.app](https://coaldarpan.vercel.app)!";
  }
  if (q.includes('devpulse')) {
    return "**DevPulse** is my GitHub analytics & Developer DNA platform! It aggregates cross-repo metrics, visualizes commit rhythms with Chart.js heatmaps, and uses Google Gemini AI to analyze coding styles into shareable developer archetypes. Live at [dev-pulse-kohl-theta.vercel.app](https://dev-pulse-kohl-theta.vercel.app)!";
  }
  if (q.includes('interview') || q.includes('agent') || q.includes('mock')) {
    return "My **AI Interview Agent** conducts real-time technical mock interviews! It uses Gemini AI prompt pipelines for dynamic role-based question chains and the Web Speech API for voice response capturing and automated rubric scoring.";
  }
  if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('abes') || q.includes('degree')) {
    return "I'm currently a **3rd-year B.Tech CSE student at ABES Engineering College**, Ghaziabad (2024-2028 batch). My core coursework includes DSA, OOP, OS, DBMS, and Networks. I also hold an **IBM PBEL Certificate** in enterprise web architecture with distinction!";
  }
  if (q.includes('outside') || q.includes('hobby') || q.includes('hobbies') || q.includes('music') || q.includes('free time')) {
    return "Outside coding, I love listening to **Synthwave & R&B** (huge fan of *The Weeknd*) and **Desi Hip Hop** (*KR$NA & Seedhe Maut*). I'm also deeply inspired by **Cristiano Ronaldo's** work ethic and **Marcus Aurelius'** Stoic philosophy!";
  }
  if (q.includes('prefer') || q.includes('stack') || q.includes('why')) {
    return "I prefer **React 19 + TypeScript + Tailwind CSS** on the frontend for reactive type-safe UIs, paired with **Node.js + Express + MongoDB + Socket.IO** on the backend for non-blocking real-time event streaming and Gemini AI integrations!";
  }
  if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
    return "You can reach me directly via email at **ayushpandey23042006@gmail.com**, connect on LinkedIn at [linkedin.com/in/ayush-kumar-pandey-a6880532b](https://linkedin.com/in/ayush-kumar-pandey-a6880532b), or check my code on GitHub at [github.com/ayush-3945](https://github.com/ayush-3945)!";
  }
  if (q.includes('challenge') || q.includes('technical challenge') || q.includes('problem')) {
    return "A major technical challenge I solved in **CoalDarpan** was handling zero-connectivity underground coal mines. I implemented PWA Service Worker caching with indexed data queueing so incident reports queue offline and auto-sync via WebSockets the moment connectivity is restored!";
  }
  if (q.includes('hire') || q.includes('available') || q.includes('job') || q.includes('internship') || q.includes('role')) {
    return "Yes! I'm actively available for **Full Stack, Frontend, and AI Engineering roles** and internships. I'm ready to contribute to high-impact teams immediately!";
  }

  return "I'm Ayush Pandey, a Full Stack & AI Systems Engineer! Feel free to ask me about my projects (**CoalDarpan**, **DevPulse**, **AI Interview Agent**), my tech stack, education, or availability for roles!";
}
