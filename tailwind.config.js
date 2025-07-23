/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    extend: {
      colors: {
        base: '#fdfaf6',
        text: '#1e1e1e',
        olive: {
          50: '#f5f7f2',
          100: '#e6e9df',
          200: '#d4dbc7',
          300: '#bbcaa7',
          400: '#9daf85',
          500: '#819264',
          600: '#6a7c4f', // your original olive
          700: '#586643',
          800: '#495537',
          900: '#3b452c',
        },
        sand: {
          100: '#f7f5f2',
          200: '#ece7df',
          300: '#e3ded7',
          600: '#c0bbb2',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        serif: ['Charter', 'Georgia', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            fontFamily: theme('fontFamily.serif').join(', '),
            a: {
              color: theme('colors.olive.700'),
              textDecoration: 'underline',
              '&:hover': { color: theme('colors.olive.900') },
            },
            h1: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontSize: '2.25rem',
              lineHeight: '1.25',
              fontWeight: '600',
            },
            h2: {
              fontFamily: theme('fontFamily.sans').join(', '),
              fontSize: '1.5rem',
              lineHeight: '1.4',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    'ti-player-play',
    'ti-player-pause',
    'ti-brand-github',
    'ti-brand-linkedin',
    'ti-brand-x',
    'ti-brand-youtube',
  ],
};
