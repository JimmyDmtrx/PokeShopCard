/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  extends: {
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        colorless: '#F2EAE6',
        darkness: '#425151',
        dragon: '#B7A63D',
        fairy: '#DF578B',
        fighting: '#D29867',
        fire: '#E02A2E',
        grass: '#66B975',
        lightning: '#FDE794',
        metal: '#8B8B83',
        psychic: '#9C7CB8',
        water: '#6EC3EF',
      },
    },
  },
  plugins: [],
};
