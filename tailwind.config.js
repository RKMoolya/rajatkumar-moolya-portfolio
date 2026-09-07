/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#08090D',
        'dark-secondary': '#0E1016',
        'dark-card': '#12141B',
        'dark-border': '#242733',
        'text-primary': '#F5F5F5',
        'text-secondary': '#9A9FAA',
        'accent': {
          DEFAULT: '#6366F1',
          light: '#818CF8',
          dark: '#4F46E5',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
