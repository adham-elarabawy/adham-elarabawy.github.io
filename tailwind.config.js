/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    extend: {
      colors: {
        base: '#ffffff',
        text: '#1e1e1e',
        accent: {
          50: '#f0f4f9',
          100: '#dae4f1',
          200: '#b8cce4',
          300: '#8badd3',
          400: '#6b93c4',
          500: '#4a6fa5',
          600: '#3d5c8a',
          700: '#334d73',
          800: '#2b3f5e',
          900: '#1e3a5f',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Charter', 'Georgia', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            fontFamily: theme('fontFamily.serif').join(', '),
            a: {
              color: theme('colors.accent.600'),
              textDecoration: 'underline',
              '&:hover': { color: theme('colors.accent.800') },
            },
            h1: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontSize: '2.25rem',
              lineHeight: '1.25',
              fontWeight: '600',
            },
            h2: {
              fontFamily: theme('fontFamily.serif').join(', '),
              fontSize: '1.5rem',
              lineHeight: '1.4',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
