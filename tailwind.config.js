module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      serif: ['Roboto Slab', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}