/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        gabceal: 'url(assets/gabceal-cursor.gif), crosshair',
        gabcdeer: 'url(assets/gabcdeer-cursor.png), crosshair',
      },
    },
  },
  plugins: [],
}
