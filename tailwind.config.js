/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      lx: "1440px",
    },
    extend: {
      colors: {
        vdarkdesturatedblue: "hsl(238, 29%, 16%)",
        softred: "hsl(14, 88%, 65%)",
      },
    },
  },
  plugins: [],
};
