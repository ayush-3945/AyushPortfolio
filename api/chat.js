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
          maxOutputTokens: 300
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

// Smart, instant first-person local knowledge matcher for zero-downtime offline fallback
function fallbackReply(userQuery) {
  const q = userQuery.toLowerCase();

  if (q.includes('skill') || q.includes('strongest') || q.includes('stack')) {
    return "My core stack centers around **React 19, Node.js, TypeScript, Tailwind CSS**, and **Google Gemini AI**. I specialize in building real-time distributed web apps with Socket.IO and high-performance frontend interfaces!";
  }
  if (q.includes('coaldarpan') || q.includes('coal')) {
    return "I built **CoalDarpan** during a national hackathon! It's a smart hazard-response PWA featuring Google Gemini AI for automated image hazard analysis, sub-50ms WebSocket alert sync, and role-based JWT access control.";
  }
  if (q.includes('devpulse')) {
    return "**DevPulse** is my AI-powered GitHub analytics platform! It visualizes commit rhythms with interactive heatmaps, tracks top languages, and uses Google Gemini AI to analyze coding styles into shareable developer archetypes.";
  }
  if (q.includes('interview') || q.includes('agent')) {
    return "My **AI Interview Agent** is a real-time mock interview simulator. It uses Gemini AI prompt pipelines for dynamic technical question chains and the Web Speech API for voice response evaluation.";
  }
  if (q.includes('hire') || q.includes('available') || q.includes('job') || q.includes('opportunity') || q.includes('intern')) {
    return "Yes! I'm actively available for **Full Stack, Frontend, and AI Engineering roles** and internships. Feel free to drop me a message via the Contact section or email me directly at ayushpandey23042006@gmail.com!";
  }
  if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('abes')) {
    return "I'm currently a **3rd-year B.Tech CSE student at ABES Engineering College**, Ghaziabad (2024-2028 batch). I also serve as the Public Relations (PR) Head for the CodeChef ABESEC Chapter!";
  }
  if (q.includes('github') || q.includes('commit') || q.includes('repo')) {
    return "You can check out my open-source work on GitHub at [github.com/ayush-3945](https://github.com/ayush-3945)! I have over **500+ commits** across my production builds and hackathon repos.";
  }

  return "I'm Ayush Pandey, a Full Stack & AI Systems Engineer! Feel free to ask me about my projects like **CoalDarpan**, **DevPulse**, or **AI Interview Agent**, my tech stack, or my availability for roles!";
}
