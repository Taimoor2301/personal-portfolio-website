/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkP: "#131313",
				pinkP: "#b21eb2",
				greyP: "#8d8b8e",
				blueP: "#100686",
				purpleP: "#301158",
			},
		},
	},
	plugins: [],
};
