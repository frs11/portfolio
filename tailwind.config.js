/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: "'Rajdhani', sans-serif",
        Rivage: "'Beau Rivage', sans-serif",
        Orbitron: "Orbitron, sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
