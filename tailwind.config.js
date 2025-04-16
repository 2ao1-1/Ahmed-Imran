/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      title: 'Old English ,Times',
      // subHead: 'Times ,serif',
      headline: 'BebasNeue , Arial ,sans-serif',
      content: 'Arial ,sans-serif',
    },
    extend: {
      height: { screen: '100dvh' },
      colors: {
        primary: '#222222',
        secondary: '#7b7b7b',
        tertiory: '#f8f8f8',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
