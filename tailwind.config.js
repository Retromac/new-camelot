/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#fbeb01',
        'yellowS': '#FFFDC0',
        'redC': '#f92300',
        'blue': '#115efc',
        'blueS': '#1358e8',
        'blueL': '#1992fb',
        'blueXL': '#43c1fc',
        'blueW': '#edf9ff',
        'blackL': '#1e3040',
        'border': '#336def',
        'footer-gray': '#51565c',
        'footer-gray-2': '#595d64',

      },
      maxWidth: {
        'box': '1140px',
      },
      flexGrow: {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
      }
    },
    screens: {
      'xs': '320px',
      // => @media (min-width: 320px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1235px',
      // => @media (min-width: 1235px) { ... }

      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [],
}
