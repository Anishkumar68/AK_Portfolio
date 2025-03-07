import React from "react";

const LoadingAnimation = () => {
	return (
		<div className="flex items-center justify-center h-screen bg-[#414141]">
			<svg xmlns="http://www.w3.org/2000/svg" height="200" width="200">
				<g>
					<polygon
						transform="rotate(45 100 100)"
						strokeWidth="1"
						stroke="#d3a410"
						fill="none"
						points="70,70 148,50 130,130 50,150"
						className="animate-bounce1"
					></polygon>

					<polygon
						transform="rotate(45 100 100)"
						strokeWidth="1"
						stroke="#d3a410"
						fill="none"
						points="70,70 148,50 130,130 50,150"
						className="animate-bounce2"
					></polygon>

					<polygon
						strokeWidth="2"
						fill="url(#gradiente)"
						points="100,70 150,100 100,130 50,100"
						className="animate-umbral"
					></polygon>

					<polygon
						transform="rotate(45 100 100) translate(80, 95)"
						strokeWidth="2"
						fill="#ffe4a1"
						points="5,0 5,5 0,5 0,0"
						className="animate-particles"
					></polygon>
				</g>
			</svg>
		</div>
	);
};

export default LoadingAnimation;
