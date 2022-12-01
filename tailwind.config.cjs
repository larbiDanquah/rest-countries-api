/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-mode-bg': '#202C36',
        'dark-mode-lighter': '#2B3844',
        'light-mode-bg': '#FAFAFA'
      }
    },
  },

  plugins: [],
}
