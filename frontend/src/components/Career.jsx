import React from "react";
import { FiDownload, FiExternalLink, FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiFolder } from "react-icons/fi";
import { FaGithub, FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiOpenai, SiTailwindcss, SiMysql } from "react-icons/si";

const Career = ({ onOpenContact }) => {
	const experiences = [
		{
			role: "Python Developer",
			company: "Nihal Software",
			period: "09/2023 – Present",
			location: "Gurugram, Haryana",
			status: "Current Commercial Role",
			description: "Core member of engineering team developing AI-powered web solutions and conversational chatbots.",
			achievements: [
				"Architected & developed LLM and NLP-based conversational chatbots integrated into the StudentSpace.AI platform.",
				"Engineered performance optimizations elevating web performance score from 60% to 94% with 100% SEO audit score.",
				"Trained and mentored LearningSpace.AI interns on Python development, REST API design, and chatbot prompt architectures.",
				"Assisted recruitment efforts by technically screening software developer candidates and evaluating code exercises.",
			],
			skills: ["Python", "Django", "LLMs", "NLP", "React", "REST APIs", "Chatbot Dev"],
		},
		{
			role: "IT Technical Support",
			company: "UK-India Business Council",
			period: "06/2023 – 08/2023",
			location: "Gurugram, Haryana",
			status: "Completed",
			description: "Provided enterprise technical infrastructure, diagnostic, and systems operations support.",
			achievements: [
				"Diagnosed and resolved critical hardware, software, and local network connectivity challenges for international staff.",
				"Maintained system uptime and assisted staff with digital workflows and security standards.",
			],
			skills: ["IT Support", "Networking", "System Diagnostics", "Troubleshooting"],
		},
		{
			role: "Web Development Intern",
			company: "Code Session Academy",
			period: "12/2021 – 01/2022",
			location: "Remote / Haryana",
			status: "Completed",
			description: "Hands-on intensive internship on web fundamentals, responsive styling, and modern JavaScript.",
			achievements: [
				"Built interactive, mobile-responsive web pages with vanilla JavaScript, modern CSS, and HTML5 semantic structure.",
				"Adopted version control workflows with Git and GitHub in a collaborative developer team environment.",
			],
			skills: ["HTML5", "CSS3", "JavaScript", "Git & GitHub", "Responsive Design"],
		},
	];

	const projects = [
		{
			title: "StudentSpace.AI Web Platform",
			tagline: "AI-Powered Educational Discovery Portal",
			description: "Engineered a high-performance web platform integrating intelligent conversational chatbots to assist students in finding programs, campus info, and college admissions resources.",
			impact: "Boosted performance score from 60% to 94% and achieved 100% SEO optimization score.",
			image: "/portfolio_img.png",
			tech: ["Python", "Django", "React", "NLP/LLM", "Tailwind CSS"],
			github: "https://github.com/Anishkumar68",
			live: "https://studentspace.ai",
		},
		{
			title: "CampusBot - US College Assistant",
			tagline: "Conversational AI for University Campuses",
			description: "Designed and trained an intelligent chatbot specifically for USA-based universities to handle high-volume inquiries regarding campus maps, financial aid, coursework, and departmental contact directories.",
			impact: "Automated 80%+ of repetitive student inquiries with instant accurate responses.",
			image: "/blog-img.jpg",
			tech: ["Python", "OpenAI API", "spaCy NLP", "Botpress", "REST APIs"],
			github: "https://github.com/Anishkumar68",
			live: null,
		},
		{
			title: "Sewa Bharat Operations Dashboard",
			tagline: "Enterprise Analytics with Microsoft Fabric",
			description: "Engineered an analytics dashboard featuring live synchronization of organizational operational data, hierarchy-based role logins, and Microsoft Fabric administration panels.",
			impact: "Streamlined multi-tier management reporting with secure role-based data isolation.",
			image: "/git code pushing map.png",
			tech: ["Power BI", "Microsoft Fabric", "Python", "Data Sync"],
			github: "https://github.com/Anishkumar68",
			live: null,
		},
		{
			title: "FinTech Digital Bank Application",
			tagline: "Secure Online Banking & Transaction Portal",
			description: "Developed a digital banking interface with secure user authentication, real-time balance queries, instant fund transfers, and ledger history logging.",
			impact: "Clean transaction management with atomic database updates and responsive user UI.",
			image: "/digitalbank.png",
			tech: ["Python", "Django", "SQLite", "JavaScript", "Tailwind CSS"],
			github: "https://github.com/Anishkumar68",
			live: null,
		},
		{
			title: "Interactive Game & Utility Hub",
			tagline: "JavaScript State & DOM Manipulation Suite",
			description: "A fast, interactive web suite including a number guessing game and utility tools designed to demonstrate precision DOM operations, state handlers, and animations.",
			impact: "Lightweight, zero-dependency, ultra-fast client-side execution.",
			image: "/guess the number.png",
			tech: ["JavaScript (ES6+)", "CSS3", "HTML5", "Vite"],
			github: "https://github.com/Anishkumar68",
			live: "https://anishkumar68.github.io/AK_Portfolio/",
		},
	];

	return (
		<div className="pt-24 sm:pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
			{/* Page Header */}
			<div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
				<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold text-[#c5ff41] uppercase tracking-wider mb-3">
					Proven Track Record
				</div>
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
					Career & <span className="text-shine">Work</span>
				</h1>
				<p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
					Commercial work experience, quantifiable engineering achievements, and featured project implementations.
				</p>
			</div>

			{/* Resume Download Feature Card */}
			<div className="glass-card rounded-3xl p-6 sm:p-8 mb-14 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
				<div className="flex items-center gap-4">
					<div className="w-12 h-12 rounded-2xl bg-[#c5ff41]/10 text-[#c5ff41] flex items-center justify-center flex-shrink-0 border border-[#c5ff41]/20">
						<FiFolder className="text-2xl" />
					</div>
					<div>
						<div className="text-xs font-bold text-[#c5ff41] uppercase tracking-wider">
							Official Document
						</div>
						<h3 className="text-lg sm:text-xl font-extrabold text-white">
							Anish Kumar — One Page Resume (PDF)
						</h3>
						<p className="text-xs text-zinc-400 mt-0.5">
							Updated September 2024 • Tailored for Python & Full-Stack Engineering roles
						</p>
					</div>
				</div>

				<div className="flex items-center gap-3 w-full md:w-auto">
					<a
						href="/Anish_Kumar_One_Page_Resume.pdf"
						download="Anish_Kumar_Resume.pdf"
						className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#c5ff41] text-[#0c0c0f] hover:bg-[#b0eb31] transition-all shadow-lg active:scale-95"
					>
						<FiDownload className="text-base" />
						<span>Download Resume</span>
					</a>
					<a
						href="/Anish_Kumar_One_Page_Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/10 transition-all"
					>
						<span>Preview</span>
						<FiExternalLink className="text-xs" />
					</a>
				</div>
			</div>

			{/* Work Experience Section */}
			<div className="mb-16">
				<div className="mb-8">
					<span className="text-xs font-bold text-[#c5ff41] uppercase tracking-wider">
						Work History
					</span>
					<h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1 flex items-center gap-2.5">
						<FiBriefcase className="text-[#c5ff41]" />
						Commercial Experience
					</h2>
				</div>

				<div className="space-y-6">
					{experiences.map((exp, idx) => (
						<div
							key={idx}
							className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] hover:border-white/20 transition-all shadow-xl"
						>
							<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
								<div>
									<div className="flex items-center gap-2">
										<h3 className="text-xl sm:text-2xl font-black text-white">
											{exp.role}
										</h3>
										<span className="text-zinc-500">•</span>
										<span className="text-base sm:text-lg font-bold text-[#c5ff41]">
											{exp.company}
										</span>
									</div>
									<div className="flex items-center gap-4 text-xs text-zinc-400 mt-1">
										<span className="flex items-center gap-1">
											<FiCalendar className="text-zinc-500" />
											{exp.period}
										</span>
										<span className="flex items-center gap-1">
											<FiMapPin className="text-zinc-500" />
											{exp.location}
										</span>
									</div>
								</div>

								<div className="self-start sm:self-auto">
									<span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
										exp.status.includes("Current")
											? "bg-[#c5ff41]/10 text-[#c5ff41] border border-[#c5ff41]/30"
											: "bg-white/[0.05] text-zinc-400 border border-white/10"
									}`}>
										{exp.status}
									</span>
								</div>
							</div>

							<p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed">
								{exp.description}
							</p>

							{/* Key Achievements Bullet points */}
							<div className="mt-4 space-y-2.5">
								{exp.achievements.map((ach, aIdx) => (
									<div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
										<FiCheckCircle className="text-[#c5ff41] text-sm mt-0.5 flex-shrink-0" />
										<span className="leading-relaxed">{ach}</span>
									</div>
								))}
							</div>

							{/* Skills Used in this Role */}
							<div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/[0.04]">
								{exp.skills.map((s, sIdx) => (
									<span
										key={sIdx}
										className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
									>
										{s}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Featured Projects Grid */}
			<div className="mb-14">
				<div className="mb-8">
					<span className="text-xs font-bold text-[#c5ff41] uppercase tracking-wider">
						Portfolio Showcase
					</span>
					<h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
						Featured Projects
					</h2>
					<p className="text-xs sm:text-sm text-zinc-400 mt-1">
						Real applications with production architectures, clean code, and measurable performance.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project, idx) => (
						<div
							key={idx}
							className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/[0.08] flex flex-col group"
						>
							{/* Project Visual Thumbnail */}
							<div className="relative h-48 sm:h-52 w-full bg-[#111116] overflow-hidden border-b border-white/[0.06]">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
									onError={(e) => {
										e.target.onerror = null;
										e.target.src = "/digitalbank.png";
									}}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#141419] via-transparent to-transparent opacity-90" />
								
								<div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
									<span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-black/70 backdrop-blur-md text-[#c5ff41] border border-white/10">
										{project.tagline}
									</span>
								</div>
							</div>

							{/* Card Body */}
							<div className="p-6 flex-1 flex flex-col justify-between">
								<div>
									<h3 className="text-xl font-bold text-white group-hover:text-[#c5ff41] transition-colors">
										{project.title}
									</h3>
									<p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
										{project.description}
									</p>

									{/* Impact callout */}
									<div className="mt-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs text-zinc-300 flex items-start gap-2">
										<span className="text-[#c5ff41] font-bold">Impact:</span>
										<span>{project.impact}</span>
									</div>
								</div>

								{/* Tech Stack Pills & Links */}
								<div className="mt-5 pt-4 border-t border-white/[0.06]">
									<div className="flex flex-wrap gap-1.5 mb-4">
										{project.tech.map((t, tIdx) => (
											<span
												key={tIdx}
												className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
											>
												{t}
											</span>
										))}
									</div>

									<div className="flex items-center gap-3">
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.06] text-white hover:bg-white/[0.12] transition-colors"
											>
												<FaGithub className="text-sm" />
												<span>Source Code</span>
											</a>
										)}

										{project.live && (
											<a
												href={project.live}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#c5ff41] text-[#0c0c0f] hover:bg-[#b0eb31] transition-colors"
											>
												<span>Live Demo</span>
												<FiExternalLink className="text-xs" />
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Callout & Recruiter Contact Action */}
			<div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/10 text-center relative overflow-hidden">
				<h3 className="text-2xl sm:text-3xl font-black text-white">
					Want to Discuss an Opportunity?
				</h3>
				<p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto mt-2 leading-relaxed">
					Whether you have an open Full-Stack, Python backend, or AI role, I would love to hear from you. Let's set up a technical chat.
				</p>
				<div className="flex items-center justify-center gap-4 mt-6">
					<button
						onClick={onOpenContact}
						className="px-7 py-3 rounded-full text-sm font-bold bg-[#c5ff41] text-black hover:bg-[#b0eb31] transition-all shadow-lg active:scale-95"
					>
						Contact Anish Directly
					</button>
				</div>
			</div>
		</div>
	);
};

export default Career;
