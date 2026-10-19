import React from "react";
import { FiDownload, FiCheckCircle, FiBookOpen, FiArrowRight, FiMapPin, FiMail, FiPhone, FiCloud } from "react-icons/fi";
import { FaPython, FaReact, FaDocker, FaGitAlt, FaAws } from "react-icons/fa";
import { SiFastapi, SiDjango, SiMysql, SiRedis, SiOpenai } from "react-icons/si";
import portfolioData from "../data/portfolioData.json";

const ICON_MAP = {
	python: FaPython,
	fastapi: SiFastapi,
	aws: FaAws,
	django: SiDjango,
	cloud: FiCloud,
	docker: FaDocker,
	openai: SiOpenai,
	redis: SiRedis,
	mysql: SiMysql,
	react: FaReact,
	git: FaGitAlt,
};

const About = ({ onSelectTab, onOpenContact }) => {
	const { personal, about } = portfolioData;

	return (
		<div className="pt-24 sm:pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
			{/* Page Header */}
			<div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
				<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold text-[#c5ff41] uppercase tracking-wider mb-3">
					{about.headline}
				</div>
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
					About <span className="text-shine">Me</span>
				</h1>
				<p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
					{about.subtitle}
				</p>
			</div>

			{/* Main Pitch Card / Executive Summary */}
			<div className="glass-card rounded-3xl p-6 sm:p-10 mb-12 border border-white/10 shadow-2xl relative overflow-hidden">
				<div className="flex flex-col md:flex-row gap-8 items-center">
					<div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-white/10 p-1 bg-white/[0.03]">
						<img
							src={personal.avatar}
							alt={personal.name}
							className="w-full h-full object-cover rounded-xl"
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = personal.logo;
							}}
						/>
					</div>

					<div className="flex-1 text-center md:text-left">
						<div className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-[#c5ff41]/10 text-[#c5ff41] border border-[#c5ff41]/30 mb-2">
							{personal.status}
						</div>
						<h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
							{personal.name}
						</h2>
						<div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-zinc-400 mt-2">
							<span className="flex items-center gap-1">
								<FiMapPin className="text-[#c5ff41]" />
								{personal.location}
							</span>
							<span className="flex items-center gap-1">
								<FiMail className="text-[#c5ff41]" />
								{personal.email}
							</span>
							<span className="flex items-center gap-1">
								<FiPhone className="text-[#c5ff41]" />
								{personal.phone}
							</span>
						</div>

						<p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed font-normal">
							{about.pitch}
						</p>

						<div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6">
							<a
								href={personal.resumePdf}
								download={personal.resumeFilename}
								className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#c5ff41] text-[#0c0c0f] hover:bg-[#b0eb31] transition-all"
							>
								<FiDownload />
								<span>Download Resume</span>
							</a>

							<button
								onClick={() => onSelectTab("career")}
								className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/[0.08] text-white hover:bg-white/[0.15] border border-white/10 transition-all cursor-pointer"
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
					{about.whyHireMe.map((item, idx) => (
						<div key={idx} className="glass-card rounded-2xl p-5 border border-white/[0.08] hover:border-white/20 transition-all">
							<div className="w-9 h-9 rounded-xl bg-[#c5ff41]/10 text-[#c5ff41] flex items-center justify-center font-black text-sm mb-3">
								{item.id}
							</div>
							<h4 className="text-base font-bold text-white">{item.title}</h4>
							<p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">
								{item.desc}
							</p>
						</div>
					))}
				</div>
			</div>

			{/* Categorized Technical Toolkit from JSON */}
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
					{about.skills.map((cat, idx) => (
						<div key={idx} className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.08]">
							<h4 className="text-base font-bold text-white">{cat.category}</h4>
							<p className="text-xs text-zinc-400 mb-4">{cat.description}</p>

							<div className="grid grid-cols-2 gap-3">
								{cat.items.map((skill, sIdx) => {
									const Icon = ICON_MAP[skill.iconKey] || FaPython;
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
					{about.education.map((edu, idx) => (
						<div key={idx} className="glass-card rounded-2xl p-5 sm:p-6 border border-white/[0.08]">
							<div className="flex items-start justify-between">
								<span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/[0.06] text-white">
									{edu.period}
								</span>
								<span className="text-xs font-semibold text-[#c5ff41]">{edu.badge}</span>
							</div>
							<h4 className="text-base font-bold text-white mt-3">
								{edu.degree}
							</h4>
							<div className="text-xs text-zinc-400 mt-1">
								{edu.institution}
							</div>
							<p className="text-xs text-zinc-400 mt-3 leading-relaxed">
								{edu.description}
							</p>
						</div>
					))}
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
						className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#c5ff41] text-black hover:bg-[#b0eb31] transition-all cursor-pointer"
					>
						Get In Touch
					</button>
					<button
						onClick={() => onSelectTab("career")}
						className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/[0.06] text-white hover:bg-white/[0.12] transition-all cursor-pointer"
					>
						View Career History
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
