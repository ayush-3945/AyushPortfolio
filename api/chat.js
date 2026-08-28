import { AI_KNOWLEDGE_BASE } from '../src/data/aiKnowledgeBase.js';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history = [] } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message parameter is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(200).json({
        success: true,
        reply: fallbackReply(message),
        source: 'local_engine'
      });
    }

    // Format conversation history for Gemini API
    const contents = [
      {
        role: 'user',
        parts: [{ text: `SYSTEM INSTRUCTION:\n${AI_KNOWLEDGE_BASE.systemPrompt}\n\nUser Question: ${message}` }]
      }
    ];

    if (Array.isArray(history) && history.length > 0) {
      const formattedHistory = history.slice(-6).map((item) => ({
        role: item.sender === 'user' ? 'user' : 'model',
        parts: [{ text: item.text }]
      }));
      contents.unshift(...formattedHistory);
    }

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 350
        }
      })
    });

    if (!response.ok) {
      console.warn('Gemini API returned status:', response.status);
      return res.status(200).json({
        success: true,
        reply: fallbackReply(message),
        source: 'local_engine'
      });
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (replyText) {
      return res.status(200).json({
        success: true,
        reply: replyText.trim(),
        source: 'gemini_api'
      });
    } else {
      return res.status(200).json({
        success: true,
        reply: fallbackReply(message),
        source: 'local_engine'
      });
    }
  } catch (err) {
    console.error('Chat API Error:', err);
    return res.status(200).json({
      success: true,
      reply: fallbackReply(req.body?.message || ''),
      source: 'local_engine'
    });
  }
}

// Smart, instant first-person local knowledge matcher covering all 10 topics
function fallbackReply(userQuery) {
  const q = userQuery.toLowerCase();

  if (q.includes('skill') || q.includes('strongest')) {
    return "My strongest technical skills are **React 19, Node.js, TypeScript, Google Gemini AI**, and **real-time WebSockets**. I excel at architecting high-throughput frontend UIs and autonomous backend incident engines!";
  }
  if (q.includes('coaldarpan') || q.includes('coal')) {
    return "I built **CoalDarpan** during a national hackathon! It's a smart hazard-response PWA featuring Google Gemini AI for image hazard analysis, sub-50ms WebSocket alert sync, and role-based JWT dashboards. Check it out at [coaldarpan.vercel.app](https://coaldarpan.vercel.app)!";
  }
  if (q.includes('devpulse') || q.includes('roast') || q.includes('diagnostic')) {
    return "**DevPulse** is my AI-powered GitHub analytics & Developer DNA platform! It aggregates cross-repo metrics, visualizes commit rhythms with heatmaps, features automated Repository Diagnostics, and uses Gemini 1.5 Flash to generate unique Developer Archetypes and a witty 'Roast Mode'. Live at [dev-pulse-kohl-theta.vercel.app](https://dev-pulse-kohl-theta.vercel.app)!";
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
  if (q.includes('challenge') || q.includes('technical challenge') || q.includes('problem') || q.includes('timeout') || q.includes('rate limit')) {
    return "Two major technical challenges I solved: In **DevPulse**, I overcame GitHub API rate limits and Vercel 504 timeouts by implementing a MongoDB TTL caching layer and switching to Gemini 1.5 Flash structured JSON. In **CoalDarpan**, I handled zero-connectivity underground mines using PWA Service Worker caching with offline data queueing that auto-syncs via WebSockets!";
  }
  if (q.includes('hire') || q.includes('available') || q.includes('job') || q.includes('internship') || q.includes('role')) {
    return "Yes! I'm actively available for **Full Stack, Frontend, and AI Engineering roles** and internships. I'm ready to contribute to high-impact teams immediately!";
  }

  return "I'm Ayush Pandey, a Full Stack & AI Systems Engineer! Feel free to ask me about my projects (**CoalDarpan**, **DevPulse**, **AI Interview Agent**), my tech stack, education, or availability for roles!";
}
