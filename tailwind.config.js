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
        bodyColor: "var(--c-bg)",
        lightText: "var(--c-text-2)",
        boxBg: "var(--c-bg-card)",
        designColor: "var(--c-accent)",
      },
      boxShadow: {
        shadowOne: "10px 10px 19px var(--c-shadow), -10px -10px 19px var(--c-shadow-inv)",
        glowGreen: "0 0 20px rgba(61,220,132,0.25), 0 0 60px rgba(61,220,132,0.08)",
      },
    },
  },
  plugins: [],
};
