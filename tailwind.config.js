/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public//index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        'myBlack' : ['#140f07'],
        'myBlue' : ['#172c57'],
        'myIndigo' : ['#4e61b2'],
        'myIndiLight' : ['#9b9efa'],
        'myLight' : ['#ffe6f4']
      }
    }
  },
  plugins: [],
}
