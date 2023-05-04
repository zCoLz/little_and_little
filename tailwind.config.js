/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '2rem',
      full: '9999px',
      large: '12px',
      'border-right': '56px',

      '3xl': '100px 100px 100px 100px',
      'border-custom': '0px 0px 35% 35%',
      customMd: '30px',
      'border-custom-bottom-left-right': '0px 0px 100px 100px',
    },

    extend: {
      fontFamily: {
        sans: ['iCiel Koni Black', 'sans-serif'],
      },
    },
    colors: {
      box: '#FDE8B3',
      boxShadow: '#FFCA7B',
      whiteText: '#FFFFFF',
      blackText: '#000000',
    },
    backgroundImage: {
      bgImg: "url('./img/bg.png')",
      bgGradient:
        'radial-gradient(97.91% 60.14% at 50% 50%, #FFDB7E 0%, #FF7A00 100%)',
    },

    backgroundColor: {
      bgCustom: 'rgb(255 246 212 / var(--tw-bg-opacity));',
      bgCard: '#FFFFFF',
    },
  },
  plugins: [],
};
