/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 'primary-blue': '#5F46F8',
        // 'primary-cyan': '#00D4C8',
        // 'secondary-blue': '#0C77F5',
        // 'secondary-purple': '#6764FC',
        // 'secondary-cyan': '#B1E3E2',
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
