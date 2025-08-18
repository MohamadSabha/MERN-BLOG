// tailwind.config.mjs
import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#171717", // dark blue
        secondary: "#1e293b", // slightly lighter
        accent: "#facc15", // yellow
      },
      boxShadow: {
        darkBlueGlow: "0 4px 10px rgba(25, 25, 112, 0.6)",

        yellowGlow: "0 4px 12px rgba(250, 204, 21, 0.4)", // yellow-400 glow
        // redGlow: "0 4px 12px rgba(230, 57, 70, 0.4)",
      },
    },
  },
  darkMode: "class",
  plugins: [flowbite],
};
