/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'hsl(4, 100%, 67%)',
				greyslate: 'hsl(234, 29%, 20%)',
				Grey: 'hsl(231, 7%, 60%)',
				charcoalgrey: 'hsl(235, 18%, 26%)',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
