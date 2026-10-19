/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "Poppins", "sans-serif"],
				heading: ["Poppins", "Inter", "sans-serif"],
			},
			colors: {
				surface: {
					DEFAULT: "#0d0d11",
					card: "#141419",
					cardHover: "#1a1a22",
					border: "rgba(255, 255, 255, 0.08)",
					borderHover: "rgba(255, 255, 255, 0.18)",
				},
				accent: {
					DEFAULT: "#c5ff41", // Sawad signature neon lime
					hover: "#b0eb31",
					dim: "#88b81d",
				},
				muted: {
					DEFAULT: "#9696a0",
					dark: "#656570",
				},
			},
			keyframes: {
				textShine: {
					"0%": { backgroundPosition: "0% 50%" },
					"100%": { backgroundPosition: "200% 50%" },
				},
				marquee: {
					"0%": { transform: "translateX(0%)" },
					"100%": { transform: "translateX(-50%)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-6px)" },
				},
			},
			animation: {
				shine: "textShine 4s linear infinite",
				marquee: "marquee 25s linear infinite",
				float: "float 6s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
