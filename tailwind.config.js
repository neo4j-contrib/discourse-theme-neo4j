const defaultTheme = require("tailwindcss/defaultTheme");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

const neo4jColors = {
  transparent: "transparent",
  current: "currentColor",
  blue: {
    lightest: "#ccE8fd",
    light: "#80C5fc",
    neo4j: "#018BFF",
    dark: "#00457f",
    darkest: "#00223f",
  },
  red: {
    neo4j: "#ED1253",
    dark: "#760929",
    darkest: "#3b0414",
  },
  yellow: {
    neo4j: "#FFDE63",
    dark: "#7f6F31",
    darkest: "#3f3718",
  },
  teal: {
    neo4j: "#55F9E2",
    dark: "#1a4E46",
    darkest: "#153E38",
  },
  indigo: {
    light: "#103Dbe",
    neo4j: "#0B287D",
    dark: "#0B287D",
    darkest: "#05143e",
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
  }
};

module.exports = {
  content: [
    './common/*.html',
  ],
  blocklist: [
    'not-prose',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
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
              color: neo4jColors.gray.darkest,
              fontWeight: "inherit",
              backgroundColor: neo4jColors.gray.light,
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
            },
            "::selection": {
              backgroundColor: neo4jColors.blue.lightest,
            }
          },
        },
        dark: {
          css: {
            color: "#FFF",
            a: {
              color: "#e9E9e9",
              "&:hover": {
                color: "#e9E9e9",
              },
            },

            h1: {
              color: "#FFF",
            },
            h2: {
              color: "#FFF",
            },
            h3: {
              color: "#FFF",
            },
            h4: {
              color: "#FFF",
            },
            h5: {
              color: "#FFF",
            },
            h6: {
              color: "#FFF",
            },

            strong: {
              color: "#FFF",
            },
            blockquote: {
              color: "#FFF"
            },
            code: {
              color: neo4jColors.yellow.neo4j,
              backgroundColor: "inherit"
            },
            "::selection": {
              backgroundColor: neo4jColors.blue.lightest,
            },
          },
        },
      },
      colors: neo4jColors
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover'],
      backgroundOpacity: ['hover'],
      textColor: ['visited'],
    },
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    backgroundOpacity: false,
    borderOpacity: false,
    opacity: false,
    textOpacity: false,
    preflight: false
  }
};
