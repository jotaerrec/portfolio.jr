// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme =>({
        'wave-pattern': `url(https://i.imgur.com/mUH9XF9.png)`
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}