/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-100': '#0B3B3C',
        'primary-200': '#6D8A83',
        'primary-300': '#BDCDC5',
        'primary-400': '#E8EFE9',
        'secondary-100': '#7E0707',
        'secondary-200': '#A83232', // New color
        'secondary-300': '#D15454', // New color
        'tertiary-100': '#F3F7F4',
      },
      fontFamily: {
        'tt-norms': ['TT Norms'],
      },
      backgroundImage: {
        background: "url('/src/assets/background.png')",
      },
    },
  },
  plugins: [],
};
