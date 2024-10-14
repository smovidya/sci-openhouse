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
			fontFamily: {
				'SilverStone-Regular':['SilverStone-Regular', 'sans-serif'],
				'SilverStone-Rough': ['SilverStone-Rough', 'sans-serif'],
				'ibm-plex-thai': ['"IBM Plex Sans Thai"', 'sans-serif'],
			}, fontWeight: {
				thin: 100,
				extralight: 200,
				light: 300,
				regular: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
			},
		},
	},
	plugins: [],
};
