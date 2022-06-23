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
      }
    },
  },
  plugins: [],
}
