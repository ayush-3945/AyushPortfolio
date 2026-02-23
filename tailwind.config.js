/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8b5cf6", // neon purple
        secondary: "#a78bfa",
        dark: "#0f0f1a",
        card: "rgba(30, 30, 46, 0.7)",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #8b5cf6, 0 0 10px #8b5cf6" },
          "100%": { boxShadow: "0 0 20px #a78bfa, 0 0 40px #8b5cf6" },
        },
      },
    },
  },
  plugins: [],
};