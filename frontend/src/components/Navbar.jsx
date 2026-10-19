import React from "react";
import { FiDownload, FiMail } from "react-icons/fi";
import portfolioData from "../data/portfolioData.json";

const Navbar = ({ activeTab, onSelectTab, onOpenContact }) => {
	const { personal } = portfolioData;

	return (
		<header className="fixed top-3 sm:top-5 inset-x-0 mx-auto z-50 w-[94%] max-w-4xl transition-all duration-300">
			<nav className="glass-card rounded-full px-3.5 sm:px-6 py-2.5 sm:py-3 shadow-2xl shadow-black/60 flex items-center justify-between border border-white/10 backdrop-blur-xl">
				{/* Brand / Logo Button - Home Page Trigger */}
				<button
					onClick={() => onSelectTab("home")}
					className="group flex items-center gap-2.5 text-left focus:outline-none transition-transform active:scale-95 cursor-pointer"
					title="Click to go to Home"
				>
					<div className="relative">
						<img
							src={personal.logo}
							alt={personal.name}
							className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-white/20 group-hover:border-[#c5ff41] transition-all duration-300 shadow-md"
							onError={(e) => {
								e.target.onerror = null;
								e.target.src = personal.logo;
							}}
						/>
						<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#c5ff41] ring-2 ring-[#0c0c0f]" />
					</div>
					<div className="flex flex-col">
						<span className="text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-[#c5ff41] transition-colors">
							{personal.name}
						</span>
						<span className="hidden sm:inline-block text-[10px] text-zinc-400 font-medium tracking-wide">
							{personal.role} • {personal.specialization}
						</span>
					</div>
				</button>

				{/* 2 Menu Buttons (About, Career) */}
				<div className="flex items-center gap-1 sm:gap-2 bg-white/[0.04] p-1 rounded-full border border-white/[0.06]">
					<button
						onClick={() => onSelectTab("about")}
						className={`px-3.5 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
							activeTab === "about"
								? "bg-white text-black font-semibold shadow-sm"
								: "text-zinc-300 hover:text-white hover:bg-white/[0.06]"
						}`}
					>
						About
					</button>

					<button
						onClick={() => onSelectTab("career")}
						className={`px-3.5 sm:px-5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
							activeTab === "career"
								? "bg-white text-black font-semibold shadow-sm"
								: "text-zinc-300 hover:text-white hover:bg-white/[0.06]"
						}`}
					>
						Career
					</button>
				</div>

				{/* Action CTAs */}
				<div className="flex items-center gap-2">
					{/* Resume Download CTA */}
					<a
						href={personal.resumePdf}
						download={personal.resumeFilename}
						className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-200 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-95"
						title="Download Resume (PDF)"
					>
						<FiDownload className="text-xs text-[#c5ff41]" />
						<span>CV</span>
					</a>

					{/* Contact / Hire Me CTA */}
					<button
						onClick={onOpenContact}
						className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-[#c5ff41] text-[#0c0c0f] hover:bg-[#b0eb31] transition-all duration-200 shadow-md shadow-[#c5ff41]/20 active:scale-95 cursor-pointer"
					>
						<FiMail className="text-xs" />
						<span>Hire Me</span>
					</button>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
