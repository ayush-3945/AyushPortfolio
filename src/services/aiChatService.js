import { AI_KNOWLEDGE_BASE } from '../data/aiKnowledgeBase';

// Simple in-memory session rate limiter (max 10 messages per minute)
const MAX_REQUESTS_PER_MIN = 10;
let requestTimestamps = [];

export async function sendChatMessage(userMessage, conversationHistory = []) {
  const now = Date.now();
  // Filter timestamps within last 60 seconds
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

function getLocalSmartAnswer(query) {
  const q = query.toLowerCase();

  if (q.includes('skill') || q.includes('strongest') || q.includes('stack') || q.includes('tech')) {
    return "My core stack centers around **React 19, Node.js, TypeScript, Tailwind CSS**, and **Google Gemini AI**. I specialize in building real-time distributed web apps with Socket.IO and high-performance frontend interfaces!";
  }
  if (q.includes('coaldarpan') || q.includes('coal') || q.includes('hazard')) {
    return "I built **CoalDarpan** during a national hackathon! It's a smart hazard-response PWA featuring Google Gemini AI for automated image hazard analysis, sub-50ms WebSocket alert sync, and role-based JWT access control.";
  }
  if (q.includes('devpulse') || q.includes('github analytics')) {
    return "**DevPulse** is my AI-powered GitHub analytics platform! It visualizes commit rhythms with interactive heatmaps, tracks top languages, and uses Google Gemini AI to analyze coding styles into shareable developer archetypes.";
  }
  if (q.includes('interview') || q.includes('agent') || q.includes('mock')) {
    return "My **AI Interview Agent** is a real-time mock interview simulator. It uses Gemini AI prompt pipelines for dynamic technical question chains and the Web Speech API for voice response evaluation.";
  }
  if (q.includes('hire') || q.includes('available') || q.includes('job') || q.includes('opportunity') || q.includes('intern') || q.includes('work')) {
    return "Yes! I'm actively available for **Full Stack, Frontend, and AI Engineering roles** and internships. Feel free to drop me a message via the Contact section or email me directly at **ayushpandey23042006@gmail.com**!";
  }
  if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('abes') || q.includes('degree')) {
    return "I'm currently a **3rd-year B.Tech CSE student at ABES Engineering College**, Ghaziabad (2024-2028 batch). I also serve as the Public Relations (PR) Head for the CodeChef ABESEC Chapter!";
  }
  if (q.includes('github') || q.includes('commit') || q.includes('repo')) {
    return "You can check out my open-source work on GitHub at [github.com/ayush-3945](https://github.com/ayush-3945)! I have over **500+ commits** across my production builds and hackathon repos.";
  }
  if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('who are you')) {
    return "Hey there! 👋 I'm **Ayush AI**, Ayush Pandey's personal portfolio assistant. Ask me anything about my projects like CoalDarpan, DevPulse, my tech stack, or my availability for hire!";
  }

  return "I'm Ayush Pandey, a Full Stack & AI Systems Engineer! That question is a bit outside my portfolio context, but I'm happy to tell you about my projects (**CoalDarpan**, **DevPulse**, **AI Interview Agent**), my tech stack, or my availability for roles!";
}
