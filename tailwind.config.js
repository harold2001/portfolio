/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "title": "#4F4F4F",
        "paragraph": "#828282"
      }
    },
  },
  plugins: [],
}