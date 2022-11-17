/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#001233',
        'secondary':'#001845',
        'tertiary':'#023e7d',
        'html':'#e34c26',
        'css':'#264de4',
        'javascript':'#f0db4f',
        'react':'#61DBFB'
      }
    },
  },
  plugins: [],
}