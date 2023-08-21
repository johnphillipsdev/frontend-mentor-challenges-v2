/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        'libre-baskerville': 'Libre Baskerville',
      },
      colors: {
        'dark-gray': '#7D7D7D',
        gray: '#E5E5E5',
        'light-gray': '#F3F3F3',
      },
    },
  },
  plugins: [],
};
