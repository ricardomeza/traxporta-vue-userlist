/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'traxporta-green': '#e8f076',
        'traxporta-blue': '#5ab5e4'
      }
    }
  },
  plugins: []
}
