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
      },
      dropShadow: {
        'svg': '0 0 15px rgba(247,95,28, 0.75)',
      }, 
      boxShadow: {
        'button': '0 0 15px rgba(247,95,28, 0.75)'
      },
      animation: {
        'animate-pulse': 'pulse 1s cubic-bezier(0.6,0,0.4, 1)'
      },
      keyframes: {
        pulse: {
          '0%, 100%': {opacity: '1'},
          '50%': {opacity: '0.70'}
        },
      },
    },
  },
  plugins: [],
}
