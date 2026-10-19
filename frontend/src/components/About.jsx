import React from "react";
import { FiDownload, FiCheckCircle, FiAward, FiBookOpen, FiArrowRight, FiMapPin, FiMail, FiPhone, FiCloud } from "react-icons/fi";
import { FaPython, FaReact, FaDocker, FaGitAlt, FaLinux, FaAws } from "react-icons/fa";
import { SiFastapi, SiDjango, SiFlask, SiTailwindcss, SiMysql, SiRedis, SiMongodb, SiPostgresql, SiOpenai } from "react-icons/si";

const About = ({ onSelectTab, onOpenContact }) => {
	const skillCategories = [
		{
			title: "Backend & Serverless",
			description: "Scalable APIs, event-driven pipelines & microservices",
			skills: [
				{ name: "Python", level: "Expert", icon: FaPython, color: "#3776AB" },
				{ name: "FastAPI", level: "Advanced", icon: SiFastapi, color: "#009688" },
				{ name: "AWS Lambda", level: "Advanced", icon: FaAws, color: "#FF9900" },
				{ name: "Django & Flask", level: "Advanced", icon: SiDjango, color: "#092E20" },
			],
		},
		{
			title: "Cloud & AWS Ecosystem",
			description: "Production serverless, queues & monitoring",
			skills: [
				{ name: "AWS (S3, SQS, CloudWatch)", level: "Advanced", icon: FaAws, color: "#FF9900" },
				{ name: "Serverless Framework", level: "Advanced", icon: FiCloud, color: "#FD5750" },
				{ name: "API Gateway & IAM", level: "Proficient", icon: FaAws, color: "#FF9900" },
				{ name: "Docker & Linux", level: "Advanced", icon: FaDocker, color: "#2496ED" },
			],
		},
		{
			title: "AI, LLM & RAG",
			description: "Intelligent agents, retrieval & document pipelines",
			skills: [
				{ name: "LangChain & RAG", level: "Advanced", icon: SiOpenai, color: "#10A37F" },
				{ name: "OpenAI & DeepSeek", level: "Advanced", icon: SiOpenai, color: "#c5ff41" },
				{ name: "PaddleOCR & Vision", level: "Proficient", icon: FaPython, color: "#38bdf8" },
				{ name: "Prompt Engineering", level: "Expert", icon: SiOpenai, color: "#a855f7" },
			],
		},
		{
			title: "Databases & Full-Stack",
			description: "NoSQL, relational, caching & client UIs",
			skills: [
				{ name: "DynamoDB & Redis", level: "Advanced", icon: SiRedis, color: "#DC382D" },
				{ name: "MySQL & PostgreSQL", level: "Advanced", icon: SiMysql, color: "#4479A1" },
				{ name: "React.js & Tailwind", level: "Proficient", icon: FaReact, color: "#61DAFB" },
				{ name: "Git & Bitbucket", level: "Advanced", icon: FaGitAlt, color: "#F05032" },
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
					Software Engineer with 3+ years of experience building scalable backend systems, serverless architectures, and AI integrations using Python, FastAPI, and AWS.
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
							3+ Years Commercial Experience • Available Immediately
						</div>
						<h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
							Anish Kumar
						</h2>
						<div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-zinc-400 mt-2">
							<span className="flex items-center gap-1">
								<FiMapPin className="text-[#c5ff41]" />
								Gurugram, Haryana
							</span>
							<span className="flex items-center gap-1">
								<FiMail className="text-[#c5ff41]" />
								anishkumar231999@gmail.com
							</span>
							<span className="flex items-center gap-1">
								<FiPhone className="text-[#c5ff41]" />
								+91 63787 57007
							</span>
						</div>

						<p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed font-normal">
							Software Engineer with hands-on commercial experience across high-growth engineering environments including <strong className="text-white">Thoughts2Binary</strong>, <strong className="text-white">Yuva Health</strong>, and <strong className="text-white">Nihal Software</strong>. Specialized in connecting complex e-commerce platforms, building event-driven microservices on AWS, and engineering practical AI/RAG systems.
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
								<span>See Career History</span>
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
						Core Strengths & Engineering Value
					</h3>
					<p className="text-xs sm:text-sm text-zinc-400 mt-1">
						What I bring to fast-moving backend and full-stack product squads
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-white/20 transition-all">
						<div className="w-9 h-9 rounded-xl bg-[#c5ff41]/10 text-[#c5ff41] flex items-center justify-center font-black text-sm mb-3">
							01
						</div>
						<h4 className="text-base font-bold text-white">Event-Driven Serverless & AWS</h4>
						<p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
							Proven experience building serverless workflows with AWS Lambda, DynamoDB, SQS, S3, and Serverless Framework for e-commerce and high-throughput systems.
						</p>
					</div>

					<div className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-white/20 transition-all">
						<div className="w-9 h-9 rounded-xl bg-[#c5ff41]/10 text-[#c5ff41] flex items-center justify-center font-black text-sm mb-3">
							02
						</div>
						<h4 className="text-base font-bold text-white">Practical AI & Document RAG</h4>
						<p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
							Shipped production AI agents combining LangChain, RAG pipelines, OpenAI, DeepSeek, and PaddleOCR for automated fraud detection and verification.
						</p>
					</div>

					<div className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-white/20 transition-all">
						<div className="w-9 h-9 rounded-xl bg-[#c5ff41]/10 text-[#c5ff41] flex items-center justify-center font-black text-sm mb-3">
							03
						</div>
						<h4 className="text-base font-bold text-white">Production Reliability & APIs</h4>
						<p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
							Built resilient APIs for Shopify, WooCommerce, ERPs, and healthcare platforms with Redis caching, CloudWatch monitoring, and zero-downtime releases.
						</p>
					</div>
				</div>
			</div>

			{/* Categorized Technical Toolkit */}
			<div className="mb-14">
				<div className="mb-6">
					<span className="text-xs font-bold text-[#c5ff41] uppercase tracking-wider">
						Technical Arsenal
					</span>
					<h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
						Technologies & Cloud Tools
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

			{/* Education & Academic Credentials */}
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
								09/2023 – 04/2026
							</span>
							<span className="text-xs font-semibold text-[#c5ff41]">GPA: 7.90</span>
						</div>
						<h4 className="text-base font-bold text-white mt-3">
							B.Tech. in Computer Science
						</h4>
						<div className="text-xs text-zinc-400 mt-1">
							Yagyavalkya Institute of Technology (RTU Kota), Jaipur
						</div>
						<p className="text-xs text-zinc-400 mt-3 leading-relaxed">
							Coursework in Distributed Systems, Cloud Computing, Database Engineering, Algorithms, and Artificial Intelligence.
						</p>
					</div>

					<div className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.08]">
						<div className="flex items-start justify-between">
							<span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/[0.06] text-white">
								08/2021 – 04/2023
							</span>
							<span className="text-xs font-semibold text-[#c5ff41]">GPA: 8.04</span>
						</div>
						<h4 className="text-base font-bold text-white mt-3">
							Diploma in Computer Science & Engineering
						</h4>
						<div className="text-xs text-zinc-400 mt-1">
							Govt. Polytechnic College, Neemrana
						</div>
						<p className="text-xs text-zinc-400 mt-3 leading-relaxed">
							First Class Distinction. Solid grounding in Data Structures, Web Development, C/C++, Operating Systems, and Linux.
						</p>
					</div>
				</div>
			</div>

			{/* Bottom CTA Banner */}
			<div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 text-center">
				<h3 className="text-xl sm:text-2xl font-bold text-white">
					Looking for a Software Engineer (Python / AWS / AI)?
				</h3>
				<p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto mt-2">
					I am available immediately for full-time on-site, hybrid, or remote positions. Let's discuss how I can add immediate value to your backend or product team.
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
