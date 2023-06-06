/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1/5': '20%',
        '4/5':'80%'
      }
    },
    fontFamily:{
      'stroke':['stroke']
    }
  },
  plugins: [],
}

