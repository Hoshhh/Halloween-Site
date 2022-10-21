/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    fontFamily: {
      default: ['Raleway']
    },
    extend: {
      colors: {
        'black': '#000000',
        'dark-orange': '#F75F1C',
        'light-orange': '#FF9A00',
        'purple': '#881EE4',
        'green': '#85E21F',
      }
    },
  },
  plugins: [],
}
