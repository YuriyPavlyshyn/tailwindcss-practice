/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  /* darkMode: 'class', */  /* для додавання темної теми на сторінку */
  theme: {
    extend: {
      colors: {
        'logo-main': '#73117c',
      },
      fontFamily: {
        main: ['Bruno Ace'],
      },
    },
  },
  plugins: [],
}

