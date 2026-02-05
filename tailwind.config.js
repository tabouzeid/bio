/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a0daff',
          DEFAULT: '#60b5e8',
          dark: '#2c5282',
        },
        accent: {
          red: '#ff6b6b',
          gold: '#ffd93d',
          green: '#6bcf7f',
          bronze: '#cd7f32',
        },
        // Soft background tints (5-8% opacity of accent colors)
        'bg-tint': {
          red: '#fff5f5',      // Very soft red tint
          gold: '#fffbf0',     // Very soft gold tint
          green: '#f6fdf7',    // Very soft green tint
          bronze: '#fdf9f5',   // Very soft bronze tint
          neutral: '#f9fafb',  // Light neutral gray
        }
      },
      fontFamily: {
        sans: [
          'brandon-grotesque',
          'HelveticaNeue-Light',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        cursive: ['Montez', 'cursive'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 8vw + 1rem, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['clamp(1.75rem, 4vw + 1rem, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section-title': ['clamp(1.5rem, 3vw + 0.5rem, 2rem)', { lineHeight: '1.3' }],
        'body-lg': ['clamp(1.125rem, 1vw + 0.5rem, 1.25rem)', { lineHeight: '1.6' }],
      },
      spacing: {
        'section-y': 'clamp(3rem, 8vw, 5rem)',
        'section-y-lg': 'clamp(4rem, 10vw, 8rem)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
}
