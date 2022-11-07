/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
      },
    colors : {
      'primary': '#16A1EB',
      'secondary' : '#9EB2CC',
      'background': '#CCF0EA'
    }
  }
  },
  plugins: [],
}
