/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      title: 'Old English ,Times',
      subHead: 'Times ,serif',
      headline: 'BebasNeue , Arial ,sans-serif',
      content: 'Arial ,sans-serif',
    },
    extend: {
      height: { screen: '100dvh' },
    },
  },
  plugins: [],
};
