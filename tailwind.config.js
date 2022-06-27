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
  plugins: [],
}
