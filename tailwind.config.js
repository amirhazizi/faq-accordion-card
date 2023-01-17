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
      dropShadow: {
        "3xl": "0 25px 0 rgba(0, 0, 0, .07)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      height: {
        152: "37rem",
      },
      width: {
        240: "60rem",
      },
      maxWidth: {
        240: "60rem",
      },
    },
  },
  plugins: [],
};
