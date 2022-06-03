const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const opacity = {
  10: ".1",
  15: ".15",
  33: ".33",
};

const spacing = {
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "2.5rem",
};

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...defaultTheme,
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      danger: colors.rose,
      warning: colors.amber,
      info: colors.blue,
      success: colors.green,
      neutral: "#313131",
    },
    extend: {
      ...defaultTheme,
      opacity,
      spacing,
      minWidth: {
        ...defaultTheme.spacing,
        ...spacing,
      },
      minHeight: {
        ...defaultTheme.spacing,
        ...spacing,
      },
    },
  },
  plugins: [],
};
