import React from "react";
import { FiDownload, FiArrowUp, FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = ({ onSelectTab, onOpenContact }) => {
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
								src="/ak_pic.png"
								alt="Anish Kumar"
								className="w-7 h-7 rounded-full object-cover border border-white/20"
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = "/aksvglogo.png";
								}}
							/>
							<span className="font-bold text-white text-base tracking-tight">
								Anish Kumar
							</span>
						</div>
						<p className="text-xs text-zinc-500 mt-1">
							Software Engineer (Python, FastAPI & AWS) • Gurugram, India
						</p>
					</div>

					{/* Navigation Links */}
					<div className="flex items-center gap-6 text-xs font-semibold text-zinc-400">
						<button
							onClick={() => onSelectTab("home")}
							className="hover:text-white transition-colors"
						>
							Home
						</button>
						<button
							onClick={() => onSelectTab("about")}
							className="hover:text-white transition-colors"
						>
							About
						</button>
						<button
							onClick={() => onSelectTab("career")}
							className="hover:text-white transition-colors"
						>
							Career
						</button>
						<a
							href="/Anish_Kumar_One_Page_Resume.pdf"
							download="Anish_Kumar_Resume.pdf"
							className="text-[#c5ff41] hover:underline"
						>
							Resume (PDF)
						</a>
						<button
							onClick={onOpenContact}
							className="hover:text-white transition-colors"
						>
							Contact
						</button>
					</div>

					{/* Socials & Back to Top */}
					<div className="flex items-center gap-3">
						<a
							href="https://linkedin.com/in/anishkumar-python"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full glass-card hover:text-[#0A66C2] transition-colors"
							title="LinkedIn"
						>
							<FaLinkedin className="text-sm" />
						</a>
						<a
							href="https://github.com/anishkumar68"
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-full glass-card hover:text-white transition-colors"
							title="GitHub"
						>
							<FaGithub className="text-sm" />
						</a>
						<button
							onClick={scrollToTop}
							className="p-2 rounded-full glass-card hover:text-[#c5ff41] transition-colors ml-2"
							title="Back to Top"
						>
							<FiArrowUp className="text-sm" />
						</button>
					</div>
				</div>

				<div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-[11px] text-zinc-500">
					<div>
						© {new Date().getFullYear()} Anish Kumar. Built for high performance & clean readability.
					</div>
					<div className="flex items-center gap-2">
						<span className="w-1.5 h-1.5 rounded-full bg-[#c5ff41]" />
						<span className="text-zinc-400">Actively interviewing & open for roles</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
