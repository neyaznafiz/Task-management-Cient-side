/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],

  daisyui: {
    themes: [
      "dark",
      "light",
    ],
  },

  plugins: [
    require("daisyui"),
  ],
  
}
