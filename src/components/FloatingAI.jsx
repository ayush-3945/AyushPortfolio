import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaMicrophone } from "react-icons/fa";

const FloatingAI = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi Ayush 👋 Ask me anything about this portfolio!" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);

  // 🔥 Smart Reply Logic
  const generateReply = (userText) => {
  const lower = userText.toLowerCase();

  if (lower.includes("resume"))
    return "You can download my resume from the hero section 📄";

  if (lower.includes("project"))
    return "I have built multiple projects like Tic Tac Toe, Rock Paper Scissors and more. Check the Projects section 💼";

  if (lower.includes("skills"))
    return "My core skills include React, JavaScript, Node.js and UI/UX design 🚀";

  if (lower.includes("contact") || lower.includes("email"))
    return "You can reach me at ayushpandey23042006@gmail.com 📧";

  if (lower.includes("help"))
    return "Of course! Tell me what you need help with 😊";

  if (lower.includes("hello") || lower.includes("hi"))
    return "Hello Ayush 👋 How can I assist you today?";

  // 🔥 Random intelligent fallback responses
  const randomReplies = [
    "That's interesting! Tell me more 🤖",
    "Can you explain that a bit more?",
    "I'm here to help! What would you like to know?",
    "Nice question 👀 Let me know more details.",
    "Sounds good! What specifically are you looking for?"
  ];

  return randomReplies[Math.floor(Math.random() * randomReplies.length)];
};

  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const reply = generateReply(text);
      setMessages((prev) => [...prev, { role: "ai", text: reply }]);
      setTyping(false);
    }, 1200);
  };

  // 🎙️ Voice Recognition
  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      sendMessage(voiceText);
    };
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 
                     text-white flex items-center justify-center shadow-xl 
                     hover:scale-110 transition duration-300"
        >
          {open ? <FaTimes size={20} /> : <FaRobot size={22} />}
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-96 h-[520px] 
                       bg-card/95 backdrop-blur-xl border border-white/10 
                       rounded-2xl shadow-2xl flex flex-col z-50"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 font-semibold text-white">
              🤖 AI Assistant
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`max-w-[80%] px-4 py-2 rounded-xl text-sm ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white ml-auto"
                      : "bg-dark/60 text-gray-300"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}

              {/* Typing Animation */}
              {typing && (
                <div className="bg-dark/60 px-4 py-2 rounded-xl w-fit">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef}></div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 px-3 py-2 rounded-lg bg-dark/50 
                           border border-white/10 text-white 
                           focus:outline-none focus:border-primary"
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              />

              {/* Voice Button */}
              <button
                onClick={startListening}
                className="px-3 bg-dark/50 border border-white/10 rounded-lg hover:bg-primary/20 transition"
              >
                <FaMicrophone />
              </button>

              <button
                onClick={() => sendMessage(input)}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 
                           text-white rounded-lg hover:scale-105 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingAI;