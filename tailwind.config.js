module.exports = {
  content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'light': '#ffffff',
          'purple': '#3f3cbb',
          'midnight': '#121063',
          'metal': '#565584',
          'tahiti': '#3ab7bf',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
          'yellow-lvl':' rgba(248, 169, 16, 0.1)',
          'blue':'rgba(37, 181, 213, 0.1)',
          'yellow': 'rgba(248, 169, 16, 0.1)',
          'green':'rgba(11, 241, 173, 0.1)',
          'nft':'rgba(0, 0, 0, 0.5)',
      },
      screens: {
          sm: '638px',
          md: '766px',
          lg: '1022px',
          xl: '1278px',
          '2xl': '1534px',
          hd: '1918px'
      },
      extend: {
          fontFamily: {
              montserrat: 'Montserrat',
              lato: 'Lato'
          },
          gridTemplateRows: {
              7: 'repeat(7, minmax(0, 1fr))',
              8: 'repeat(8, minmax(0, 1fr))',
              9: 'repeat(9, minmax(0, 1fr))',
              10: 'repeat(10, minmax(0, 1fr))',
              11: 'repeat(11, minmax(0, 1fr))',
              12: 'repeat(12, minmax(0, 1fr))'
          },
          gridTemplateColumns: {
              7: 'repeat(7, minmax(0, 1fr))',
              8: 'repeat(8, minmax(0, 1fr))',
              9: 'repeat(9, minmax(0, 1fr))',
              10: 'repeat(10, minmax(0, 1fr))',
              11: 'repeat(11, minmax(0, 1fr))',
              12: 'repeat(12, minmax(0, 1fr))'
          },

          height: {
              10: '10%',
              20: '20%',
              30: '30%',
              40: '40%',
              50: '50%',
              60: '60%',
              70: '70%',
              80: '80%',
              90: '90%',
              100: '100%'
          },
          width: {
              10: '10%',
              20: '20%',
              23: '23%',
              30: '30%',
              35: '35%',
              40: '40%',
              50: '50%',
              60: '60%',
              68: '68%',
              70: '70%',
              80: '80%',
              90: '90%',
              100: '100%'
          }
      }
  },
  plugins: [],
}