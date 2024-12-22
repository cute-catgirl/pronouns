/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		{
		  pattern: /bg-*-.+/,
		}
	],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['"Lexend"', ...defaultTheme.fontFamily.sans],
			},
		}
	},

	plugins: []
};
