const defaultTheme = require("tailwindcss/defaultTheme");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

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
            maxWidth: "inherit",
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
            'ul': {
              paddingLeft: '0',
            },
            'li': {
              marginTop: '0',
              marginBottom: '0'
            },
            blockquote: {
              // fontWeight: '500',
              // fontStyle: 'italic',
              // color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
              // borderLeftWidth: '0.25rem',
              // borderLeftColor: theme('colors.gray.200', defaultTheme.colors.gray[200]),
              quotes: "none",
            }
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
          neo4j: "#008CC2"
        },
        green: {
          neo4j: "#63b345",
          dark: "#386627",
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
  variants: {
    extend: {
      ringWidth: ['hover'],
      backgroundOpacity: ['hover'],
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
