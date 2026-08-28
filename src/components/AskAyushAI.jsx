import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Send, X, Bot, User, Minimize2, RefreshCw } from 'lucide-react';
import { AI_KNOWLEDGE_BASE } from '../data/aiKnowledgeBase';
import { sendChatMessage } from '../services/aiChatService';

export default function AskAyushAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hey! 👋 I'm **Ayush AI**, Ayush Pandey's personal assistant. Ask me anything about my projects (**CoalDarpan**, **DevPulse**), tech stack, or availability for hire!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = async (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg = { id: Date.now(), sender: 'user', text: query, time: userTime };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    try {
      // Send message to AI service
      const history = messages.map((m) => ({ sender: m.sender, text: m.text }));
      const result = await sendChatMessage(query, history);

      const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const aiMsg = {
        id: Date.now() + 1,
        sender: 'ai',
        text: result.reply || "Something went wrong, please try asking again!",
        time: aiTime
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: "Sorry, I encountered a temporary issue. Feel free to ask me again!",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Helper to render bold markdown and clickable links safely
  const renderFormattedText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-[#FFC15E]">{part.slice(2, -2)}</strong>;
      }
      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        return (
          <a
            key={index}
            href={linkMatch[2]}
            target="_blank"
            rel="noreferrer"
            className="text-[#F5A623] underline font-medium hover:text-[#FFC15E] transition-colors"
          >
            {linkMatch[1]}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      {/* 1. Floating Circular Trigger Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-50 select-none">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#F5A623] via-[#FFC15E] to-amber-300 text-black shadow-[0_10px_30px_rgba(245,166,35,0.4),0_0_20px_rgba(245,166,35,0.2)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            title="Ask Ayush AI"
            aria-label="Open Ask Ayush AI Chatbot"
          >
            {/* Pulsing Outer Ring */}
            <span className="absolute inset-0 rounded-full bg-[#F5A623]/40 animate-ping pointer-events-none"></span>

            {/* Sparkles / Bot Icon */}
            <Sparkles className="w-6 h-6 text-black group-hover:rotate-12 transition-transform duration-300" />

            {/* Unread Badge Dot */}
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#06090e] shadow-[0_0_8px_#10b981]"></span>
            )}

            {/* Hover Tooltip Pill */}
            <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-[#0c1017] border border-[#F5A623]/30 text-[#FFC15E] font-mono-code text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
              ⚡ Ask Ayush AI
            </span>
          </button>
        )}
      </div>

      {/* 2. Expanded Chatbot Panel Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[390px] h-[540px] max-h-[85vh] bg-[#090d14]/95 backdrop-blur-2xl border border-[#F5A623]/35 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(245,166,35,0.2)] flex flex-col overflow-hidden animate-scaleUp">
          
          {/* Header */}
          <div className="px-5 py-4 bg-[#0c1017] border-b border-white/[0.08] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F5A623]/20 border border-[#F5A623]/40 flex items-center justify-center text-[#FFC15E] shadow-[0_0_12px_rgba(245,166,35,0.3)]">
                <Sparkles className="w-5 h-5 text-[#F5A623]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-wide">Ask Ayush AI</h3>
                  <span className="flex items-center gap-1 text-[10px] font-mono-code text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online
                  </span>
                </div>
                <p className="text-[10px] font-mono-code text-white/50">Personal Portfolio Assistant</p>
              </div>
            </div>

            {/* Actions: Reset & Close */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setMessages([messages[0]])}
                title="Reset Chat"
                className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Message Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-subtle">
            
            {/* Messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 max-w-[88%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                    msg.sender === 'user'
                      ? 'bg-[#F5A623] text-black shadow-[0_0_10px_rgba(245,166,35,0.4)]'
                      : 'bg-white/10 border border-white/15 text-[#FFC15E]'
                  }`}
                >
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Bubble */}
                <div className="space-y-1">
                  <div
                    className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#F5A623]/20 border border-[#F5A623]/40 text-white rounded-tr-none shadow-[0_4px_15px_rgba(245,166,35,0.15)]'
                        : 'bg-[#0c1017] border border-white/[0.08] text-white/90 rounded-tl-none shadow-md'
                    }`}
                  >
                    {renderFormattedText(msg.text)}
                  </div>
                  <div
                    className={`text-[9px] font-mono-code text-white/30 px-1 ${
                      msg.sender === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 max-w-[85%] mr-auto items-center">
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#FFC15E]">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3 rounded-2xl bg-[#0c1017] border border-white/[0.08] text-xs text-[#FFC15E] flex items-center gap-1.5">
                  <span className="text-[11px] font-mono-code font-bold">Ayush AI is thinking</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>
            )}

            {/* Starter Prompt Pills (Shown initially or when history is short) */}
            {messages.length <= 2 && !isTyping && (
              <div className="pt-2 space-y-1.5">
                <div className="text-[10px] font-mono-code text-white/40 font-bold uppercase tracking-wider px-1">
                  Suggested Prompts:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {AI_KNOWLEDGE_BASE.starterPrompts.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(prompt)}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#F5A623]/50 hover:bg-[#F5A623]/10 text-white/80 hover:text-[#FFC15E] text-[11px] font-mono-code transition-all cursor-pointer text-left shadow-sm"
                    >
                      💡 {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-[#0c1017] border-t border-white/[0.08] flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about Ayush..."
              className="flex-1 bg-white/[0.04] border border-white/10 focus:border-[#F5A623]/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 outline-none transition-all font-sans"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isTyping}
              className={`p-2.5 rounded-xl transition-all flex items-center justify-center cursor-pointer ${
                input.trim() && !isTyping
                  ? 'bg-[#F5A623] text-black shadow-[0_0_12px_rgba(245,166,35,0.4)] hover:bg-[#FFC15E] active:scale-95'
                  : 'bg-white/[0.05] text-white/20 border border-white/[0.05] cursor-not-allowed'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
}
