/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        black: '#121212',
        white: '#ffffff',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};