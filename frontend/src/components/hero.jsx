import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollDownIndicator from "./ScrollDownIndicator";
import ak_logo from "../assets/ak_logo.png";

const Hero = () => {
	return (
		<section className="flex items-center justify-around h-screen mx-auto p-56 text-zinc-100">
			{/* Left Section: 3D Image with Orbit */}
			<div className="flex flex-col items-center">
				<div className="w-52 h-52 rounded-full border-2 border-white/20 flex items-center justify-center transition-all duration-300 ease-in-out hover:border-[#ffcc00]">
					<motion.img
						src={ak_logo}
						alt="Anish Kumar"
						className="w-4/5 h-4/5 object-cover rounded-full transition-transform duration-300 ease-in-out"
						whileHover={{ scale: 1.1 }} // Image grows on hover
					/>
				</div>
				{/* Social Media Icons */}
				<div className="flex mt-4 gap-3">
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white text-2xl p-2 rounded-full transition-all duration-300 ease-in-out hover:text-[#0A66C2] hover:bg-white"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://github.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white text-2xl p-2 rounded-full transition-all duration-300 ease-in-out  hover:bg-white hover:text-black"
					>
						<FaGithub />
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white text-2xl p-2 rounded-full transition-all duration-300 ease-in-out hover:text-[#fd5949] hover:bg-white"
					>
						<FaInstagram />
					</a>
				</div>
			</div>

			{/* Right Section: Text & Buttons */}
			<div className="text-center">
				<h1 className="text-5xl font-bold">
					Hi, I'm{" "}
					<span className="text-[#ffcc00] hover:text-[#8502ff] ">
						Anish Kumar
					</span>
				</h1>
				<h2 className="text-3xl font-light mt-2 text-white/80">
					Full-Stack Developer
				</h2>
				<div className="mt-5 flex gap-4 justify-center">
					<button className="hireme-btn ">Hire Me</button>
					<button className="px-6 py-3 font-semibold bg-transparent text-white border border-white rounded-md transition-all duration-300 hover:bg-white hover:text-black">
						Contact Me
					</button>
				</div>
			</div>

			{/* Scroll Down Indicator */}
			<ScrollDownIndicator />
		</section>
	);
};

export default Hero;
