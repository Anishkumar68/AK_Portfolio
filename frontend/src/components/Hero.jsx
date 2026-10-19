import React from "react";
import { FiDownload, FiArrowRight, FiMail, FiPhone, FiExternalLink } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaPython, FaReact } from "react-icons/fa";
import portfolioData from "../data/portfolioData.json";
import { resolveImage, getResumeInfo, DEFAULT_FALLBACK_AVATAR } from "../utils/assetHelper";

const Hero = ({ onSelectTab, onOpenContact }) => {
	const { personal, socials, hero } = portfolioData;
	const resumeInfo = getResumeInfo(personal);

	return (
		<div className="relative pt-24 sm:pt-28 pb-16 overflow-hidden">
			{/* Ambient background light glows */}
			<div className="absolute top-12 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[450px] bg-[#c5ff41]/[0.06] rounded-full blur-[120px] pointer-events-none -z-10" />
			<div className="absolute top-64 right-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-purple-500/[0.04] rounded-full blur-[100px] pointer-events-none -z-10" />

			<div className="max-w-6xl mx-auto px-4 sm:px-6">
				{/* Top Status Pill */}
				<div className="flex justify-center mb-6 sm:mb-8">
					<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/10 text-xs sm:text-sm text-zinc-300 shadow-lg">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5ff41] opacity-75" />
							<span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5ff41]" />
						</span>
						<span className="font-medium">
							{hero.badge}
						</span>
					</div>
				</div>

				{/* Hero Typography & Center Image Section */}
				<div className="relative flex flex-col items-center justify-center text-center my-4 sm:my-8 select-none">
					{/* Top Word of H1 */}
					<h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-shine leading-none">
						{hero.headingTop}
					</h1>

					{/* Center Image Container with Glow & Floating Badges */}
					<div className="relative my-3 sm:my-5 flex items-center justify-center">
						{/* Ambient circular glow behind avatar */}
						<div className="absolute inset-0 m-auto w-36 sm:w-56 h-36 sm:h-56 rounded-full bg-gradient-to-tr from-[#c5ff41]/30 via-white/10 to-[#c5ff41]/20 blur-xl -z-10 animate-pulse" />

						{/* Avatar Circle */}
						<div className="relative w-36 h-36 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full p-1.5 bg-gradient-to-b from-white/30 via-white/5 to-[#c5ff41]/40 shadow-2xl transition-transform duration-500 hover:scale-105 group bg-[#16161c]">
							<img
								src={resolveImage(personal.avatar)}
								alt={personal.name}
								className="w-full h-full rounded-full object-cover border-2 border-[#121216] shadow-inner"
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = DEFAULT_FALLBACK_AVATAR;
								}}
							/>

							{/* Floating Pill Badges from JSON */}
							{hero.floatingBadges && hero.floatingBadges[0] && (
								<div className="absolute -left-4 sm:-left-8 top-1/4 glass-card px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white flex items-center gap-1.5 shadow-xl border border-white/10 animate-float">
									<FaPython className="text-[#c5ff41]" />
									<span>{hero.floatingBadges[0].text}</span>
								</div>
							)}

							{hero.floatingBadges && hero.floatingBadges[1] && (
								<div
									className="absolute -right-4 sm:-right-8 bottom-1/4 glass-card px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white flex items-center gap-1.5 shadow-xl border border-white/10 animate-float"
									style={{ animationDelay: "1.5s" }}
								>
									<FaReact className="text-[#61dafb]" />
									<span>{hero.floatingBadges[1].text}</span>
								</div>
							)}
						</div>
					</div>

					{/* Bottom Word of H1 */}
					<h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-shine leading-none">
						{hero.headingBottom}
					</h2>
				</div>

				{/* Professional Bio Statement */}
				<div className="max-w-2xl mx-auto text-center mt-6 sm:mt-8">
					<p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed">
						{hero.bio}
					</p>
					<p className="text-xs sm:text-sm text-zinc-500 mt-2 font-medium">
						{hero.bioLocation}
					</p>
				</div>

				{/* Primary Call to Action Buttons */}
				<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
					{/* Resume Link/Download Button (Google Drive URL or PDF) */}
					<a
						href={resumeInfo.url}
						target={resumeInfo.isExternal ? "_blank" : undefined}
						rel={resumeInfo.isExternal ? "noopener noreferrer" : undefined}
						download={resumeInfo.isExternal ? undefined : resumeInfo.filename}
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-semibold bg-[#c5ff41] text-[#0c0c0f] hover:bg-[#b0eb31] transition-all duration-200 shadow-xl shadow-[#c5ff41]/20 active:scale-95"
					>
						<FiDownload className="text-lg" />
						<span>{resumeInfo.isDrive ? "Open Resume (Drive)" : "Download Resume (PDF)"}</span>
						{resumeInfo.isExternal && <FiExternalLink className="text-xs text-black/70" />}
					</a>

					{/* View Career & Work */}
					<button
						onClick={() => onSelectTab("career")}
						className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-95 cursor-pointer"
					>
						<span>View Experience & Projects</span>
						<FiArrowRight className="text-sm text-[#c5ff41]" />
					</button>

					{/* Get in touch */}
					<button
						onClick={onOpenContact}
						className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm sm:text-base font-medium text-zinc-300 hover:text-white transition-colors cursor-pointer"
					>
						<FiMail className="text-base" />
						<span>Contact Me</span>
					</button>
				</div>

				{/* Social Media & Contact Links Bar */}
				<div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 text-zinc-400">
					<a
						href={socials.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="p-2.5 rounded-full glass-card hover:text-[#0A66C2] hover:border-white/30 transition-all"
						title="LinkedIn Profile"
					>
						<FaLinkedin className="text-lg" />
					</a>
					<a
						href={socials.github}
						target="_blank"
						rel="noopener noreferrer"
						className="p-2.5 rounded-full glass-card hover:text-white hover:border-white/30 transition-all"
						title="GitHub Profile"
					>
						<FaGithub className="text-lg" />
					</a>
					<a
						href={`mailto:${personal.email}`}
						className="p-2.5 rounded-full glass-card hover:text-[#c5ff41] hover:border-white/30 transition-all"
						title={`Email: ${personal.email}`}
					>
						<FiMail className="text-lg" />
					</a>
					<a
						href={`tel:${personal.phoneRaw}`}
						className="p-2.5 rounded-full glass-card hover:text-[#c5ff41] hover:border-white/30 transition-all"
						title={`Phone: ${personal.phone}`}
					>
						<FiPhone className="text-lg" />
					</a>
				</div>

				{/* Metrics / Stats Row */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-14 sm:mt-20">
					{hero.stats.map((stat, idx) => (
						<div key={idx} className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 text-center">
							<div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
								{stat.value.replace(/[%+]/g, "")}
								<span className="text-[#c5ff41]">{stat.value.match(/[%+]/)?.[0] || ""}</span>
							</div>
							<div className="text-xs sm:text-sm font-semibold text-zinc-400 uppercase tracking-wider mt-1">
								{stat.label}
							</div>
							<div className="text-[11px] text-zinc-500 mt-1">{stat.sub}</div>
						</div>
					))}
				</div>

				{/* Continuous Scrolling Marquee Ribbon */}
				<div className="relative mt-12 sm:mt-16 py-4 overflow-hidden border-y border-white/[0.08] bg-black/40">
					<div className="flex w-max animate-marquee space-x-8">
						{[...hero.marquee, ...hero.marquee, ...hero.marquee].map((item, idx) => (
							<div
								key={idx}
								className="flex items-center space-x-3 text-xs sm:text-sm font-bold tracking-widest text-zinc-400 uppercase whitespace-nowrap"
							>
								<span>{item}</span>
								<span className="text-[#c5ff41] text-xs">•</span>
							</div>
						))}
					</div>
				</div>

				{/* Fast Recruiter Teaser Grid */}
				<div className="mt-14 sm:mt-20 glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
						<div>
							<span className="text-xs font-bold text-[#c5ff41] uppercase tracking-wider">
								Quick Overview for Recruiters
							</span>
							<h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
								Production Systems & Cloud Architecture
							</h3>
						</div>
						<button
							onClick={() => onSelectTab("career")}
							className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-all self-start md:self-auto cursor-pointer"
						>
							<span>Explore Full Experience</span>
							<FiArrowRight />
						</button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
						{hero.quickOverview.map((item, idx) => (
							<div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
								<div className="text-xs font-semibold text-[#c5ff41] uppercase">{item.label}</div>
								<div className="text-base font-bold text-white mt-1">{item.title}</div>
								<div className="text-xs text-zinc-400 mt-0.5">{item.meta}</div>
								<p className="text-xs text-zinc-400 mt-2 leading-relaxed">
									{item.desc}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
