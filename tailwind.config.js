/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 🌙 Dark mode için class-based toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // Modern font
      },
      colors: {
        brand: {
          DEFAULT: "#2563eb", // Ana mavi
          dark: "#1e40af",
          light: "#60a5fa",
        },
        neutral: {
          light: "#f9fafb",
          dark: "#1f2937",
        },
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)", // Kartlarda daha yumuşak gölge
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bounceIn: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        bounceIn: "bounceIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
}
