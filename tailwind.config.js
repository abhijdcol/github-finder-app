/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cyberpunk"],
  },
  plugins: [require("daisyui")],
};
