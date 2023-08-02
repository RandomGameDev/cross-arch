/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        pc: '1024px',
        sp: '425px',
      },
    },
  },
  plugins: [],
}
