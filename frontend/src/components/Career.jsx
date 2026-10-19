import React from "react";
import { FiDownload, FiExternalLink, FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiFolder } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import portfolioData from "../data/portfolioData.json";
import { resolveImage, getResumeInfo, DEFAULT_FALLBACK_BANNER } from "../utils/assetHelper";

const Career = ({ onOpenContact }) => {
	const { personal, career } = portfolioData;
	const resumeInfo = getResumeInfo(personal);

	return (
		<div className="pt-24 sm:pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
			{/* Page Header */}
			<div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
				<div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-pill text-xs font-semibold text-[#c5ff41] uppercase tracking-wider mb-3">
					{career.headline}
				</div>
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
					Career & <span className="text-shine">Work</span>
				</h1>
				<p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
					{career.subtitle}
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
							{personal.name} — Resume {resumeInfo.isDrive ? "(Google Drive)" : "(PDF)"}
						</h3>
						<p className="text-xs text-zinc-400 mt-0.5">
							{personal.role} • {personal.specialization}
						</p>
					</div>
				</div>

				<div className="flex items-center gap-3 w-full md:w-auto">
					<a
						href={resumeInfo.url}
						target={resumeInfo.isExternal ? "_blank" : undefined}
						rel={resumeInfo.isExternal ? "noopener noreferrer" : undefined}
						download={resumeInfo.isExternal ? undefined : resumeInfo.filename}
						className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#c5ff41] text-[#0c0c0f] hover:bg-[#b0eb31] transition-all shadow-lg active:scale-95"
					>
						<FiDownload className="text-base" />
						<span>{resumeInfo.isDrive ? "Open Drive Resume" : "Download Resume"}</span>
						{resumeInfo.isExternal && <FiExternalLink className="text-xs text-black/70" />}
					</a>
					<a
						href={resumeInfo.url}
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
					{career.experiences.map((exp, idx) => (
						<div
							key={idx}
							className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08] hover:border-white/20 transition-all shadow-xl"
						>
							<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
								<div>
									<div className="flex items-center gap-2 flex-wrap">
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
										exp.status.includes("Latest")
											? "bg-[#c5ff41]/10 text-[#c5ff41] border border-[#c5ff41]/30"
											: "bg-white/[0.05] text-zinc-400 border border-white/10"
									}`}>
										{exp.status}
									</span>
								</div>
							</div>

							<p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed font-normal">
								{exp.description}
							</p>

							{/* Key Achievements Bullet points from JSON */}
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
						Featured Projects & Systems
					</h2>
					<p className="text-xs sm:text-sm text-zinc-400 mt-1">
						Enterprise integrations, serverless microservices, and AI-powered automation platforms.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{career.projects.map((project, idx) => (
						<div
							key={idx}
							className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-white/[0.08] flex flex-col group"
						>
							{/* Project Visual Thumbnail */}
							<div className="relative h-48 sm:h-52 w-full bg-[#111116] overflow-hidden border-b border-white/[0.06]">
								<img
									src={resolveImage(project.image, DEFAULT_FALLBACK_BANNER)}
									alt={project.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
									onError={(e) => {
										e.target.onerror = null;
										e.target.src = DEFAULT_FALLBACK_BANNER;
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
									<div className="flex items-center justify-between text-xs text-zinc-500 mb-1">
										<span>{project.period}</span>
									</div>
									<h3 className="text-xl font-bold text-white group-hover:text-[#c5ff41] transition-colors">
										{project.title}
									</h3>
									<p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
										{project.description}
									</p>

									{/* Impact callout */}
									<div className="mt-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs text-zinc-300 flex items-start gap-2">
										<span className="text-[#c5ff41] font-bold">Key Contribution:</span>
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
												<span>GitHub</span>
											</a>
										)}

										{project.live && (
											<a
												href={project.live}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#c5ff41] text-[#0c0c0f] hover:bg-[#b0eb31] transition-colors"
											>
												<span>Live System</span>
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
					Whether you have an opening for a Python Developer, Backend/AWS Engineer, or AI Systems specialist, I would love to connect.
				</p>
				<div className="flex items-center justify-center gap-4 mt-6">
					<button
						onClick={onOpenContact}
						className="px-7 py-3 rounded-full text-sm font-bold bg-[#c5ff41] text-black hover:bg-[#b0eb31] transition-all shadow-lg active:scale-95 cursor-pointer"
					>
						Quick Connect With Anish
					</button>
				</div>
			</div>
		</div>
	);
};

export default Career;
