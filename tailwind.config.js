const colors = require("tailwindcss/colors");
const {
  blueGray,
  coolGray,
  gray,
  trueGray,
  warmGray,
  amber,
  lime,
  emerald,
  teal,
  cyan,
  indigo,
  violet,
  fuchsia,
  rose,
} = colors;
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueGray,
        coolGray,
        gray,
        trueGray,
        warmGray,
        amber,
        lime,
        emerald,
        teal,
        cyan,
        indigo,
        violet,
        fuchsia,
        rose,
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "4rem",
          "2xl": "4rem",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
