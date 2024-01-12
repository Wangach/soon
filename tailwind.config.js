/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        selection: 'rgba(0, 0, 0, 0.75)',
      },
    },
  },
  plugins: [],
}

