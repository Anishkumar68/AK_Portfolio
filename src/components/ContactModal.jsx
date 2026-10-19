import React, { useState } from "react";
import { FiX, FiMail, FiPhone, FiMapPin, FiCopy, FiCheck, FiExternalLink, FiBriefcase } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import portfolioData from "../data/portfolioData.json";

const ContactModal = ({ isOpen, onClose }) => {
	const [copied, setCopied] = useState(false);
	const { personal, socials } = portfolioData;

	if (!isOpen) return null;

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(personal.email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
			{/* Backdrop click to close */}
			<div className="absolute inset-0" onClick={onClose} />

			{/* Modal Card */}
			<div className="relative w-full max-w-lg glass-card rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl z-10 overflow-hidden">
				{/* Top ambient glow */}
				<div className="absolute -top-16 -right-16 w-40 h-40 bg-[#c5ff41]/20 rounded-full blur-3xl pointer-events-none" />

				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors cursor-pointer"
					title="Close"
				>
					<FiX className="text-lg" />
				</button>

				{/* Header */}
				<div className="mb-6">
					<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#c5ff41]/10 text-[#c5ff41] border border-[#c5ff41]/30 mb-2">
						<span className="w-1.5 h-1.5 rounded-full bg-[#c5ff41] animate-ping" />
						{personal.status}
					</div>
					<h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
						Quick Connect
					</h3>
					<p className="text-xs sm:text-sm text-zinc-400 mt-1">
						Direct recruiter channels. No contact form needed — reach out directly via email, phone, or LinkedIn.
					</p>
				</div>

				{/* Direct 1-Click Action Buttons */}
				<div className="space-y-3 mb-6">
					{/* Primary 1-Click Email Trigger */}
					<a
						href={`mailto:${personal.email}?subject=Job%20Opportunity%20Discussion&body=Hi%20${encodeURIComponent(personal.name)},%0D%0A%0D%0AWe%20came%20across%20your%20profile%20and%20would%20like%20to%20discuss%20a%20Software%20Engineer%20role%20with%20our%20team.`}
						className="w-full py-3.5 px-4 rounded-2xl bg-[#c5ff41] text-[#0c0c0f] hover:bg-[#b0eb31] transition-all flex items-center justify-between font-bold text-sm shadow-lg shadow-[#c5ff41]/20 active:scale-95 group"
					>
						<div className="flex items-center gap-2.5">
							<FiMail className="text-base text-black" />
							<span>Send Direct Email</span>
						</div>
						<FiExternalLink className="text-sm group-hover:translate-x-0.5 transition-transform" />
					</a>

					{/* Email Copy Pill */}
					<div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
						<div className="flex items-center gap-2.5 overflow-hidden">
							<div className="w-8 h-8 rounded-xl bg-white/[0.05] text-[#c5ff41] flex items-center justify-center flex-shrink-0">
								<FiMail className="text-sm" />
							</div>
							<div className="truncate">
								<div className="text-[10px] text-zinc-500 font-medium">Email Address</div>
								<div className="text-xs sm:text-sm font-semibold text-white truncate">
									{personal.email}
								</div>
							</div>
						</div>
						<button
							onClick={handleCopyEmail}
							className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-all ml-2 flex-shrink-0 cursor-pointer"
						>
							{copied ? (
								<>
									<FiCheck className="text-[#c5ff41]" />
									<span className="text-[#c5ff41]">Copied</span>
								</>
							) : (
								<>
									<FiCopy className="text-xs" />
									<span>Copy</span>
								</>
							)}
						</button>
					</div>

					{/* Direct Phone / WhatsApp */}
					<div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
						<div className="flex items-center gap-2.5">
							<div className="w-8 h-8 rounded-xl bg-white/[0.05] text-[#c5ff41] flex items-center justify-center flex-shrink-0">
								<FiPhone className="text-sm" />
							</div>
							<div>
								<div className="text-[10px] text-zinc-500 font-medium">Phone & WhatsApp</div>
								<a
									href={`tel:${personal.phoneRaw}`}
									className="text-xs sm:text-sm font-semibold text-white hover:text-[#c5ff41] transition-colors"
								>
									{personal.phone}
								</a>
							</div>
						</div>
						<a
							href={`tel:${personal.phoneRaw}`}
							className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-all cursor-pointer"
						>
							Call
						</a>
					</div>

					{/* Location & Relocation */}
					<div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
						<div className="w-8 h-8 rounded-xl bg-white/[0.05] text-[#c5ff41] flex items-center justify-center flex-shrink-0">
							<FiMapPin className="text-sm" />
						</div>
						<div>
							<div className="text-[10px] text-zinc-500 font-medium">Location & Preference</div>
							<div className="text-xs sm:text-sm font-semibold text-white">
								{personal.location} • {personal.openTo}
							</div>
						</div>
					</div>
				</div>

				{/* Social Links Row */}
				<div className="flex items-center justify-center gap-6 pt-4 border-t border-white/[0.06] text-zinc-400">
					<a
						href={socials.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-xs font-medium hover:text-[#0A66C2] transition-colors"
					>
						<FaLinkedin className="text-base" />
						<span>LinkedIn Profile</span>
					</a>
					<span className="text-zinc-600">•</span>
					<a
						href={socials.github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-xs font-medium hover:text-white transition-colors"
					>
						<FaGithub className="text-base" />
						<span>GitHub Repos</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;
