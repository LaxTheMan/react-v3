/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			colors: {
				"red": "#f87171",
				"yellow": "#fcd34d",
				"green": "#86efac",
				"light": "#f9fafb",
				"outer-container": "#e4e4e7"
			},
		},
	},
	plugins: [],
};
