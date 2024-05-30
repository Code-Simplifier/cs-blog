/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: [
		"text-slate-800",
		"text-slate-300",
		"text-slate-100",
		{
			pattern:
				/bg-(red|rose|green|lime|emerald|blue|indigo|cyan|teal|sky|orange|yellow|amber|purple|violet|slate)-(100|200|300|400|500|600|700|800|900)/
		},
		{
			pattern:
				/bg-gradient-to-r from-(red|rose|green|lime|emerald|blue|indigo|cyan|teal|sky|orange|yellow|amber|purple|violet|slate)-(100|200|300|400|500|600|700|800|900)  via-(red|rose|green|lime|emerald|blue|indigo|cyan|teal|sky|orange|yellow|amber|purple|violet|slate)-(100|200|300|400|500|600|700|800|900)/
		}
	],
	theme: {
		extend: {
			colors: {
				primary: "#99f6e4",
				secondary: "#16141d",
				accent: "#4DB1B0",
				dark: "#010319",
				light: "#EBFEF3",
				success: "#6CF597",
				info: "#66CCFC",
				warning: "#FBF777",
				error: "#FF546D"
			}
		}
	},
	plugins: []
};
