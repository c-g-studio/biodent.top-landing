import type { Config } from 'tailwindcss';
import {PluginAPI} from "tailwindcss/types/config";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1rem',
          lg: '1rem',
          xl: '1rem',
        },
      },
      screens: {
        // sm: '100%',
        // md: '768px',
        // lg: '1200px',
        // xl: '1440px',
        // '2xl': '1440px',
      },
      backgroundImage: {
        'hero-bgc': "url(/img/hero_image.webp)",
        'hero-tablet': "url(/img/hero_image_tablet.webp)",
        'hero-mobile': "url(/img/hero_image_mobile.webp)",
        'custom-gradient': 'linear-gradient(to right, #E6F2FF 0%, #FAF1ED 100%)',
      },
      // #0F0F0F
      colors: {
        'blue-extra-light': '#38BCEA',
        blue: '#01678A',
        'blue-dark': '#12354B',
        'blue-extra-dark': '#1A3444',
        'grey-light': '#AAAAAA',
        grey: '#6F6F6F',
        'grey-dark': '#474747',
        'black-light': '#222222',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'second-background': 'var(--second-background)',
      },
      fontFamily: {
        arial: ['Arial', 'Helvetica', 'sans-serif'],
        inter: 'var(--font-inter)',
        roboto: 'var(--font-roboto_mono)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-motion'),function ({ addUtilities }: PluginAPI) {
    addUtilities({
      ".base-text-style": {
        "line-height": "1.16",
        "letter-spacing": "0.03em",
      },
      ".calc": {
        "flex-basis": "calc((100% - 2 * 24px) / 3)",
      },
    });
  },],
} satisfies Config;
