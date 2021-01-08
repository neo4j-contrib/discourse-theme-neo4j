const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    // './common/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.serif],
        mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
      },
      typography: {
        DEFAULT: {
          css: {
            "h1,h2,h3,h4": {
              fontWeight: "inherit",
            },
            code: {
              backgroundColor: defaultTheme.colors.gray[100],
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          light: "#85d7ff",
          DEFAULT: "#1fb6ff",
          dark: "#009eeb",
        },
        pink: {
          light: "#ff7ce5",
          DEFAULT: "#ff49db",
          dark: "#ff16d1",
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#30333a",
          DEFAULT: "#45484e",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
