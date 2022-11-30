/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0B0D17',
        'lilac': '#D0D6F9',
        'white': '#FFFFFF',
        'dark-gray': '#383B4B'
      },
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'bellefair': ['Bellefair', 'serif']
      }
    },
  },
  plugins: [],
}
