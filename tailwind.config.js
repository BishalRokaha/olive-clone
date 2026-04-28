/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f0f5ef',
          100: '#deeadc',
          200: '#c0d9bb',
          300: '#96be8e',
          400: '#6b9f62',
          500: '#4a8041',
          600: '#376530',
          700: '#2d5128',
          800: '#264422',
          900: '#1f3a1c',
          950: '#0f1f0e',
        },
        forest: {
          DEFAULT: '#1a3522',
          dark: '#142a1b',
          light: '#2d5a3d',
        },
        cream: {
          DEFAULT: '#eef3ef',
          light: '#f5f8f5',
          dark: '#e4ece5',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(26, 53, 34, 0.08)',
        'card': '0 2px 16px rgba(26, 53, 34, 0.06)',
        'phone': '0 24px 60px rgba(26, 53, 34, 0.18), 0 8px 24px rgba(26, 53, 34, 0.10)',
        'btn': '0 4px 20px rgba(26, 53, 34, 0.35)',
      }
    },
  },
  plugins: [],
}
