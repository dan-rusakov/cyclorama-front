const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    screens: {
      'screen-lg': {'max': '1920px'},
      'screen-md': {'max': '1400px'},
      'screen-sm': {'max': '1240px'},
      'tablet-lg': {'max': '991px'},
      'tablet-md': {'max': '768px'},
      'tablet-sm': {'max': '601px'},
      'phone-lg': {'max': '480px'},
      'phone-md': {'max': '400px'},
      'phone-sm': {'max': '374px'},
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'black-light': '#040404',
      'gray-light': '#adadad',
      'transparent': 'transparent',
    },
    fontFamily: {
      sans: ['PlayfairDisplay', 'sans-serif'],
    },
    fontWeight: {
      medium: 500,
      semibold: 600,
      extrabold: 800,
    },
    container: {
      center: true,
      padding: '30px',
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1620px"
     }
    },
    extend: {},
  },
  plugins: [
    plugin(
      function ({addUtilities, theme, e}) {
        const values = theme('textStrokeWidth');
        const utilities = Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`text-stroke-width-${key}`)}`]: {'-webkit-text-stroke-width': `${value}`},
          }
        })
        addUtilities(utilities)
      },
      {
        theme: {
          textStrokeWidth: {
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
          },
        },
      },
    ),
    plugin(
      function ({addUtilities, theme, e}) {
        const values = theme('colors');
        const utilities = Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`text-stroke-color-${key}`)}`]: {'-webkit-text-stroke-color': `${value}`},
          }
        })
        addUtilities(utilities)
      },
    ),
  ],
}
