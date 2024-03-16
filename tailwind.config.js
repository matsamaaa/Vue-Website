/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        up_fog_1: {
          from: { transform: 'scale(1.4) translateY(-30%)' },
          to: { transform:  'scale(1.45) translateY(-30%)' }
        },
        up_fog_2: {
          from: { transform: 'scale(3.0)' },
          to: { transform:  'scale(3.25)' }
        },
      },
      animation: {
        'scale-fog-1': 'up_fog_1 8s alternate infinite ease-in-out',
        'scale-fog-2': 'up_fog_2 8s alternate infinite ease-in-out',
      }
    },
  },
  plugins: [],
}