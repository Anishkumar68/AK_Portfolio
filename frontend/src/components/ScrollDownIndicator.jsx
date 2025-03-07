import React from "react";

const ScrollDownIndicator = () => {
	return (
		<div className="absolute right-8 bottom-12 flex flex-col items-center">
			{/* Animated Scroll Dot */}
			<div className="mt-3 w-8 h-14 border-2 border-white rounded-full flex justify-center items-start relative">
				<span className="w-2 h-2 bg-white rounded-full absolute animate-scrollDown "></span>
			</div>
		</div>
	);
};

export default ScrollDownIndicator;
