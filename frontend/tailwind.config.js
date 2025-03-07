/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				// Loading Animation (Polygon Bounce & Particles)
				bounce1: {
					"0%, 100%": { transform: "translateY(36px)" },
					"50%": { transform: "translateY(46px)" },
				},
				bounce2: {
					"0%, 100%": { transform: "translateY(46px)" },
					"50%": { transform: "translateY(56px)" },
				},
				umbral: {
					"0%": { stopColor: "rgba(211, 165, 16, 0.18)" },
					"50%": { stopColor: "rgba(211, 165, 16, 0.52)" },
					"100%": { stopColor: "rgba(211, 165, 16, 0.18)" },
				},
				particles: {
					"0%, 100%": { transform: "translateY(16px)" },
					"50%": { transform: "translateY(6px)" },
				},

				// Scroll Down Animation
				scrollDown: {
					"0%": { transform: "translateY(5px)", opacity: "0" },
					"50%": { transform: "translateY(20px)", opacity: "1" },
					"100%": { transform: "translateY(35px)", opacity: "0" },
				},
			},
			animation: {
				// Loading Effect
				bounce1: "bounce1 4s ease-in-out infinite",
				bounce2: "bounce2 4s ease-in-out infinite",
				umbral: "umbral 4s infinite",
				particles: "particles 4s ease-in-out infinite",

				// Scroll Down Indicator
				scrollDown: "scrollDown 1.5s infinite ease-in-out",
			},
		},
	},
	plugins: [],
};
