/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          saffron: '#FF6F00',   // Vibrance of spiritual flags & sunrise
          maroon: '#6A0B12',    // Deep temple brick & traditional vermilion
          gold: '#D4AF37',      // Sacred brass bells & illumination
          sand: '#FDF6E2',      // Clean ghat steps & ancient parchment bg
          charcoal: '#1C1C1C',  // Deep contrast for readability
        }
      },
      fontFamily: {
        heritage: ['"Playfair Display"', 'serif'], // Elegant, historical look
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
