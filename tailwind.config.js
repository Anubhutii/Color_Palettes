/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      keyframes: {
        rotateZoom: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '100%': { transform: 'scale(0.9) rotate(-360deg)' },
        },
      },
      animation: {
        rotateZoom: 'rotateZoom 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
