import React from "react";
import { FiDownload, FiCheckCircle, FiAward, FiBookOpen, FiArrowRight, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaPython, FaReact, FaDocker, FaGitAlt, FaLinux, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiDjango, SiFlask, SiTailwindcss, SiMysql, SiOpenai, SiFigma } from "react-icons/si";

const About = ({ onSelectTab, onOpenContact }) => {
	const skillCategories = [
		{
			title: "Languages & Core",
			description: "Programming languages used in production & systems",
			skills: [
				{ name: "Python 3", level: "Advanced", icon: FaPython, color: "#3776AB" },
				{ name: "JavaScript (ES6+)", level: "Proficient", icon: FaJs, color: "#F7DF1E" },
				{ name: "SQL (MySQL)", level: "Proficient", icon: SiMysql, color: "#4479A1" },
				{ name: "HTML5 & CSS3", level: "Expert", icon: FaHtml5, color: "#E34F26" },
			],
		},
		{
			title: "Frontend Engineering",
			description: "Modern, performant, mobile-first web interfaces",
			skills: [
				{ name: "React.js", level: "Advanced", icon: FaReact, color: "#61DAFB" },
				{ name: "Tailwind CSS", level: "Expert", icon: SiTailwindcss, color: "#06B6D4" },
				{ name: "Responsive UI/UX", level: "Expert", icon: FaCss3Alt, color: "#1572B6" },
				{ name: "Framer Motion", level: "Intermediate", icon: FaReact, color: "#F012BE" },
			],
		},
		{
			title: "Backend & Architecture",
			description: "RESTful APIs, microservices & data modeling",
			skills: [
				{ name: "Django", level: "Advanced", icon: SiDjango, color: "#092E20" },
				{ name: "Flask", level: "Proficient", icon: SiFlask, color: "#ffffff" },
				{ name: "REST APIs", level: "Advanced", icon: FaPython, color: "#c5ff41" },
				{ name: "Database Design", level: "Proficient", icon: SiMysql, color: "#00758F" },
			],
		},
		{
			title: "AI & Modern Tooling",
			description: "Conversational agents, DevOps & productivity",
			skills: [
				{ name: "OpenAI & LLMs", level: "Proficient", icon: SiOpenai, color: "#10A37F" },
				{ name: "NLP & spaCy", level: "Intermediate", icon: FaPython, color: "#09A3D5" },
				{ name: "Docker & Linux", level: "Proficient", icon: FaDocker, color: "#2496ED" },
				{ name: "Git & GitHub", level: "Advanced", icon: FaGitAlt, color: "#F05032" },
			],
		},
	];

	return (
		<div className="pt-24 sm:pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
			{/* Page Header */}
			<div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
				<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold text-[#c5ff41] uppercase tracking-wider mb-3">
					Professional Background
				</div>
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
					About <span className="text-shine">Me</span>
				</h1>
				<p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
					Passionate Python Full-Stack Developer with hands-on commercial experience building AI chatbots, web APIs, and scalable user interfaces.
				</p>
			</div>

			{/* Main Pitch Card / Executive Summary */}
			<div className="glass-card rounded-3xl p-6 sm:p-10 mb-12 border border-white/10 shadow-2xl relative overflow-hidden">
				<div className="flex flex-col md:flex-row gap-8 items-center">
					<div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white/10 p-1 bg-white/[0.03]">
						<img
							src="/ak_pic.png"
							alt="Anish Kumar"
							className="w-full h-full object-cover rounded-xl"
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = "/aksvglogo.png";
							}}
						/>
					</div>

					<div className="flex-1 text-center md:text-left">
						<div className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-[#c5ff41]/10 text-[#c5ff41] border border-[#c5ff41]/30 mb-2">
							Available for Immediate Joining
						</div>
						<h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
							Anish Kumar
						</h2>
						<div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-zinc-400 mt-2">
							<span className="flex items-center gap-1">
								<FiMapPin className="text-[#c5ff41]" />
								Gurugram, Haryana / Neemrana, RJ
							</span>
							<span className="flex items-center gap-1">
								<FiMail className="text-[#c5ff41]" />
								anishkumar231999@gmail.com
							</span>
							<span className="flex items-center gap-1">
								<FiPhone className="text-[#c5ff41]" />
								+91 6378757007
							</span>
						</div>

						<p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed font-normal">
							I am a software engineer focused on building robust, maintainable full-stack web applications and conversational AI systems. Currently contributing to LLM and NLP-based solutions at <strong className="text-white">Nihal Software</strong>. I enjoy untangling complex problems, collaborating across agile teams, and shipping fast, high-performance software.
						</p>

						<div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6">
							<a
								href="/Anish_Kumar_One_Page_Resume.pdf"
								download="Anish_Kumar_Resume.pdf"
								className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#c5ff41] text-[#0c0c0f] hover:bg-[#b0eb31] transition-all"
							>
								<FiDownload />
								<span>Download Resume</span>
							</a>

							<button
								onClick={() => onSelectTab("career")}
								className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/[0.08] text-white hover:bg-white/[0.15] border border-white/10 transition-all"
							>
								<span>See Work & Projects</span>
								<FiArrowRight className="text-xs text-[#c5ff41]" />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Why Hire Me - Recruiter Checklist */}
			<div className="mb-14">
				<div className="mb-6">
					<h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
						<FiCheckCircle className="text-[#c5ff41]" />
						Why I'm a Strong Addition to Your Team
					</h3>
					<p className="text-xs sm:text-sm text-zinc-400 mt-1">
						Key strengths and value I bring to engineering squads
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-white/20 transition-all">
						<div className="w-9 h-9 rounded-xl bg-[#c5ff41]/10 text-[#c5ff41] flex items-center justify-center font-black text-sm mb-3">
							01
						</div>
						<h4 className="text-base font-bold text-white">Full-Stack Versatility</h4>
						<p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
							Seamlessly navigate between frontend React/Tailwind interfaces and backend Python/Django REST APIs with clean data models and authentication.
						</p>
					</div>

					<div className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-white/20 transition-all">
						<div className="w-9 h-9 rounded-xl bg-[#c5ff41]/10 text-[#c5ff41] flex items-center justify-center font-black text-sm mb-3">
							02
						</div>
						<h4 className="text-base font-bold text-white">Practical AI & LLM Experience</h4>
						<p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
							Hands-on experience developing real-world conversational chatbots, prompt architectures, and NLP pipelines that serve actual college users.
						</p>
					</div>

					<div className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-white/20 transition-all">
						<div className="w-9 h-9 rounded-xl bg-[#c5ff41]/10 text-[#c5ff41] flex items-center justify-center font-black text-sm mb-3">
							03
						</div>
						<h4 className="text-base font-bold text-white">Speed & Autonomy</h4>
						<p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
							Self-starter who independently digs through documentation, resolves bugs quickly, writes readable code, and adapts to existing codebases rapidly.
						</p>
					</div>
				</div>
			</div>

			{/* Categorized Technical Toolkit (Sawad style) */}
			<div className="mb-14">
				<div className="mb-6">
					<span className="text-xs font-bold text-[#c5ff41] uppercase tracking-wider">
						Technical Arsenal
					</span>
					<h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
						Technologies & Frameworks
					</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					{skillCategories.map((cat, idx) => (
						<div key={idx} className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.08]">
							<h4 className="text-base font-bold text-white">{cat.title}</h4>
							<p className="text-xs text-zinc-400 mb-4">{cat.description}</p>

							<div className="grid grid-cols-2 gap-3">
								{cat.skills.map((skill, sIdx) => {
									const Icon = skill.icon;
									return (
										<div
											key={sIdx}
											className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] transition-colors"
										>
											<Icon className="text-lg flex-shrink-0" style={{ color: skill.color }} />
											<div className="overflow-hidden">
												<div className="text-xs font-semibold text-white truncate">
													{skill.name}
												</div>
												<div className="text-[10px] text-zinc-500 font-medium">
													{skill.level}
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Education & Academic Background */}
			<div className="mb-14">
				<div className="mb-6">
					<h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
						<FiBookOpen className="text-[#c5ff41]" />
						Education & Academic Credentials
					</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
					<div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.08]">
						<div className="flex items-start justify-between">
							<span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/[0.06] text-white">
								08/2023 – Present
							</span>
							<span className="text-xs font-semibold text-[#c5ff41]">Pursuing</span>
						</div>
						<h4 className="text-base font-bold text-white mt-3">
							B.Tech in Computer Science & Engineering
						</h4>
						<div className="text-xs text-zinc-400 mt-1">
							Yagyavalkya Institute of Technology (RTU), Jaipur
						</div>
						<p className="text-xs text-zinc-400 mt-3 leading-relaxed">
							Focus on Advanced Algorithms, Database Management Systems, Software Engineering, and Artificial Intelligence.
						</p>
					</div>

					<div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.08]">
						<div className="flex items-start justify-between">
							<span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/[0.06] text-white">
								10/2021 – 06/2023
							</span>
							<span className="text-xs font-semibold text-[#c5ff41]">GPA: 8.04</span>
						</div>
						<h4 className="text-base font-bold text-white mt-3">
							Polytechnic Diploma in Computer Science & Engineering
						</h4>
						<div className="text-xs text-zinc-400 mt-1">
							Govt. Polytechnic College, Neemrana (Rajasthan)
						</div>
						<p className="text-xs text-zinc-400 mt-3 leading-relaxed">
							Lateral entry program graduating with First Class Distinction. Strong core in C, Data Structures, Web Development, and Linux.
						</p>
					</div>
				</div>
			</div>

			{/* Certifications & Training */}
			<div className="mb-12">
				<div className="mb-6">
					<h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
						<FiAward className="text-[#c5ff41]" />
						Certifications & Industry Training
					</h3>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
					<div className="p-4 rounded-xl glass-card border border-white/[0.06]">
						<div className="text-xs font-bold text-[#c5ff41]">Ducat Gurugram</div>
						<div className="text-sm font-semibold text-white mt-1">Python Full Stack Dev</div>
						<div className="text-[11px] text-zinc-500 mt-1">1-Year Intensive Program (2022-2023)</div>
					</div>

					<div className="p-4 rounded-xl glass-card border border-white/[0.06]">
						<div className="text-xs font-bold text-[#c5ff41]">MSME Technology</div>
						<div className="text-sm font-semibold text-white mt-1">Python Programming</div>
						<div className="text-[11px] text-zinc-500 mt-1">Govt. Recognized Certification</div>
					</div>

					<div className="p-4 rounded-xl glass-card border border-white/[0.06]">
						<div className="text-xs font-bold text-[#c5ff41]">Udemy</div>
						<div className="text-sm font-semibold text-white mt-1">Front-End Web Dev</div>
						<div className="text-[11px] text-zinc-500 mt-1">HTML5, CSS3, JavaScript, React</div>
					</div>

					<div className="p-4 rounded-xl glass-card border border-white/[0.06]">
						<div className="text-xs font-bold text-[#c5ff41]">Code Session Academy</div>
						<div className="text-sm font-semibold text-white mt-1">Web Dev Internship</div>
						<div className="text-[11px] text-zinc-500 mt-1">Production Web Architecture</div>
					</div>
				</div>
			</div>

			{/* Bottom CTA Banner */}
			<div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 text-center">
				<h3 className="text-xl sm:text-2xl font-bold text-white">
					Looking for a Dedicated Full-Stack / Python Developer?
				</h3>
				<p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto mt-2">
					I am available immediately for full-time on-site, hybrid, or remote positions. Let's build something exceptional together.
				</p>
				<div className="flex items-center justify-center gap-3 mt-5">
					<button
						onClick={onOpenContact}
						className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#c5ff41] text-black hover:bg-[#b0eb31] transition-all"
					>
						Get In Touch
					</button>
					<button
						onClick={() => onSelectTab("career")}
						className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/[0.06] text-white hover:bg-white/[0.12] transition-all"
					>
						View Career History
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
