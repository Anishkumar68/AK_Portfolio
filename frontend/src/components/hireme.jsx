import React from "react";
import HighlightBox from "./Notification";
const HireMe = () => {
	const services = [
		{
			title: "Free Consultation",
			description:
				"Nothing is free, but I'm free for your technical support! Get help with consulting, advisory, roadmaps, technical issues, courses, and programming guidance.",
			price: "₹0",
		},
		{
			title: "Wix Site Development",
			description:
				"Custom Wix website development with flexible pricing: project-based, hourly, or update-based.",
			price: "Custom Pricing",
		},
		{
			title: "WordPress Development & Troubleshooting",
			description:
				"Build a WordPress site or fix issues, optimize performance, and troubleshoot errors.",
			price: "Starts at ₹5,000",
		},
		{
			title: "Personal AI Chatbot",
			description:
				"Get an LLM-based chatbot trained on your personal data for support, automation, and technical assistance.",
			price: "Custom Pricing",
		},
		{
			title: "Code-Based Web App Creation",
			description:
				"From full-stack applications to custom web tools, I can develop tailored solutions.",
			price: "Starts at ₹15,000",
		},
		{
			title: "Hire Me - Resume & Portfolio",
			description:
				"Check my resume and portfolio to see my expertise and past work.",
			price: "Available on Request",
		},
	];

	return (
		<section className="py-16 text-white">
			<div className="max-w-6xl mx-auto px-6">
				{/* Title & Action Line */}
				<div className="text-center mb-10">
					<h2 className="title mb-2">Hire Me</h2>
					<span
						className="relative bg-[#383525] text-white font-medium  px-3 py-1 transition-all duration-300  rounded-t-lg inline-block
    after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] 
    after:bg-[#ffcc00] after:opacity-50 after:transition-all after:duration-500 
    hover:after:opacity-100 hover:after:shadow-[0_0_10px_#ffcc00]"
					>
						Let's build something amazing together. Choose a service that fits
						your needs!
					</span>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-gray-800 flex flex-col justify-between p-6 rounded-2xl shadow-md border border-gray-700 hover:shadow-lg transition"
						>
							<h3 className="text-xl font-semibold text-yellow-400">
								{service.title}
							</h3>
							<p className="text-gray-300 mt-2">{service.description}</p>
							<div className="mt-4 flex justify-between items-center">
								<span className="text-lg font-semibold text-white">
									{service.price}
								</span>
								<button className="hireme-btn">Hire Me</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HireMe;
