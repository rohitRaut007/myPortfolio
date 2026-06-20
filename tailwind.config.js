/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Roboto Mono", "monospace"],
        titleFont: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        bodyColor: "#04070a",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #0f140f, #131a13)",
        designColor: "#3DDC84",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #050a05, -10px -10px 19px #0f170f",
        glowGreen: "0 0 20px rgba(61,220,132,0.25), 0 0 60px rgba(61,220,132,0.08)",
      },
    },
  },
  plugins: [],
};
