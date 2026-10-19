import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import portfolioData from "../data/portfolioData.json";

const Footer = ({ onSelectTab, onOpenContact }) => {
	const { personal, socials } = portfolioData;

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="border-t border-white/[0.08] bg-[#09090c] pt-12 pb-16">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
					{/* Brand & status */}
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<div className="flex items-center gap-2.5">
							<img
								src={personal.avatar}
								alt={personal.name}
								className="w-7 h-7 rounded-full object-cover border border-white/20"
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = personal.logo;
								}}
							/>
							<span className="font-bold text-white text-base tracking-tight">
								{personal.name}
							</span>
						</div>
						<p className="text-xs text-zinc-500 mt-1">
							{personal.role} ({personal.specialization}) • {personal.location}
						</p>
					</div>

					{/* Navigation Links */}
					<div className="flex items-center gap-6 text-xs font-semibold text-zinc-400">
						<button
							onClick={() => onSelectTab("home")}
							className="hover:text-white transition-colors cursor-pointer"
						>
							Home
						</button>
						<button
							onClick={() => onSelectTab("about")}
							className="hover:text-white transition-colors cursor-pointer"
						>
							About
						</button>
						<button
							onClick={() => onSelectTab("career")}
							className="hover:text-white transition-colors cursor-pointer"
						>
							Career
						</button>
						<a
							href={personal.resumePdf}
							download={personal.resumeFilename}
							className="text-[#c5ff41] hover:underline"
						>
							Resume (PDF)
						</a>
						<button
							onClick={onOpenContact}
							className="hover:text-white transition-colors cursor-pointer"
						>
							Contact
						</button>
					</div>

					{/* Socials & Back to Top */}
					<div className="flex items-center gap-3">
						<a
							href={socials.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full glass-card hover:text-[#0A66C2] transition-colors"
							title="LinkedIn"
						>
							<FaLinkedin className="text-sm" />
						</a>
						<a
							href={socials.github}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full glass-card hover:text-white transition-colors"
							title="GitHub"
						>
							<FaGithub className="text-sm" />
						</a>
						<button
							onClick={scrollToTop}
							className="p-2 rounded-full glass-card hover:text-[#c5ff41] transition-colors ml-2 cursor-pointer"
							title="Back to Top"
						>
							<FiArrowUp className="text-sm" />
						</button>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-[11px] text-zinc-500">
					<div>
						© {new Date().getFullYear()} {personal.name}. Built for high performance & clean readability.
					</div>
					<div className="flex items-center gap-2">
						<span className="w-1.5 h-1.5 rounded-full bg-[#c5ff41]" />
						<span className="text-zinc-400">{personal.status}</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
