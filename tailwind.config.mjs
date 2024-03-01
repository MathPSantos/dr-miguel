const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			}
		},
	},
	plugins: [
		plugin(function ({ addComponents, matchUtilities, theme }) {
			addComponents({
        ".max-w-content": {
          padding: "0 16px",
          margin: "0 auto",
          maxWidth: "1216px",
          width: "100%",
        },
      });

			matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
			);
		})
	],
}
