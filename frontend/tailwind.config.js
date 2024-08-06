/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          DEFAULT: "#131921"
        },
        icons: {
          main: '#F3A847'
        }
      },
      scale: {
        '15': '0.15', // Add 20% scale
      },
      maxWidth: {
        homebody: '1500px'
      },
      width: {
        checkoutMain: '1500px'
      },
      zIndex: {
        '-1' : -1
      }
    },
  },
  plugins: [],
}