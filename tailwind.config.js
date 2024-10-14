/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkNavyBlue: '#031d5e',
				mediumPurple: '#9064bf',
				goldenYellow: '#F9CD2F',
				deepBlue: '#333996',
				lightSkyBlue: '#9fdaf8',
				brickRed: '#c85848',
			},
		},
	},
	plugins: [],
};
