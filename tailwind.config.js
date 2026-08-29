/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5A623", // warm amber gold
        secondary: "#FFC15E",
        dark: "#06090e",
        card: "rgba(10, 15, 23, 0.75)",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px #F5A623, 0 0 10px #F5A623" },
          "100%": { boxShadow: "0 0 20px #FFC15E, 0 0 40px #F5A623" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};