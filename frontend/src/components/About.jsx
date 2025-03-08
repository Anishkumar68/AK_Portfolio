import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function About() {
	return (
		<div className="mx-auto flex flex-col justify-center items-center text-white p-10">
			<h1 className="text-5xl uppercase font-semibold mb-6 text-yellow-400">
				About me
			</h1>
			<p className="mb-6 text-2xl w-2/4">
				Hi, I'm
				<span className="text-yellow-400 hover:text-[#8502ff] font-bold">
					{" "}
					Anish Kumar,{" "}
				</span>
				Python Full Stack Developer with 1+ years of experience building
				scalable web applications and AI-driven solutions for educational
				platforms. Proficient in Python, Django, Flask, JavaScript, React JS,
				and MySQL. Experienced in managing version control using Git and GitHub,
				ensuring efficient collaboration and code integrity. Passionate about
				leveraging full stack expertise to create innovative web solutions.I'm
				also interested in machine learning and artificial intelligence.
			</p>
			<div className="flex justify-center">
				<a
					href="https://www.linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white text-4xl p-2 rounded-full transition-all duration-300 ease-in-out hover:text-[#0A66C2] hover:bg-white"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white text-4xl p-2 rounded-full transition-all duration-300 ease-in-out  hover:bg-white hover:text-black"
				>
					<FaGithub />
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className="text-white text-4xl p-2 rounded-full transition-all duration-300 ease-in-out hover:text-[#fd5949] hover:bg-white"
				>
					<FaInstagram />
				</a>
			</div>
		</div>
	);
}
