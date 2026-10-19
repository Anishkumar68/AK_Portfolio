import React, { useState } from "react";
import { FiX, FiMail, FiPhone, FiMapPin, FiCopy, FiCheck, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactModal = ({ isOpen, onClose }) => {
	const [copied, setCopied] = useState(false);
	const [name, setName] = useState("");
	const [senderEmail, setSenderEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sentFeedback, setSentFeedback] = useState(false);

	if (!isOpen) return null;

	const handleCopyEmail = () => {
		navigator.clipboard.writeText("anishkumar231999@gmail.com");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const subject = encodeURIComponent(`Portfolio Inquiry from ${name || "Recruiter"}`);
		const body = encodeURIComponent(
			`Hi Anish,\n\nName: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
		);
		window.location.href = `mailto:anishkumar231999@gmail.com?subject=${subject}&body=${body}`;
		setSentFeedback(true);
		setTimeout(() => {
			setSentFeedback(false);
			onClose();
		}, 2500);
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
					className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white transition-colors"
					title="Close"
				>
					<FiX className="text-lg" />
				</button>

				{/* Title */}
				<div className="mb-6">
					<div className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[#c5ff41]/10 text-[#c5ff41] border border-[#c5ff41]/30 mb-2">
						Open for Opportunities
					</div>
					<h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
						Let's Work Together
					</h3>
					<p className="text-xs sm:text-sm text-zinc-400 mt-1">
						Directly reach out for job opportunities, interview requests, or project discussions.
					</p>
				</div>

				{/* Direct Contact Pills */}
				<div className="space-y-2.5 mb-6">
					{/* Email Pill */}
					<div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
						<div className="flex items-center gap-2.5 overflow-hidden">
							<div className="w-8 h-8 rounded-xl bg-[#c5ff41]/10 text-[#c5ff41] flex items-center justify-center flex-shrink-0">
								<FiMail className="text-sm" />
							</div>
							<div className="truncate">
								<div className="text-[10px] text-zinc-500 font-medium">Email Address</div>
								<a
									href="mailto:anishkumar231999@gmail.com"
									className="text-xs sm:text-sm font-semibold text-white hover:text-[#c5ff41] transition-colors truncate block"
								>
									anishkumar231999@gmail.com
								</a>
							</div>
						</div>
						<button
							onClick={handleCopyEmail}
							className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-all ml-2 flex-shrink-0"
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

					{/* Phone Pill */}
					<div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
						<div className="flex items-center gap-2.5">
							<div className="w-8 h-8 rounded-xl bg-[#c5ff41]/10 text-[#c5ff41] flex items-center justify-center flex-shrink-0">
								<FiPhone className="text-sm" />
							</div>
							<div>
								<div className="text-[10px] text-zinc-500 font-medium">Direct Phone & WhatsApp</div>
								<a
									href="tel:+916378757007"
									className="text-xs sm:text-sm font-semibold text-white hover:text-[#c5ff41] transition-colors"
								>
									+91 6378757007
								</a>
							</div>
						</div>
						<a
							href="tel:+916378757007"
							className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300 hover:text-white transition-all"
						>
							Call
						</a>
					</div>

					{/* Location */}
					<div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
						<div className="w-8 h-8 rounded-xl bg-[#c5ff41]/10 text-[#c5ff41] flex items-center justify-center flex-shrink-0">
							<FiMapPin className="text-sm" />
						</div>
						<div>
							<div className="text-[10px] text-zinc-500 font-medium">Current Location</div>
							<div className="text-xs sm:text-sm font-semibold text-white">
								Gurugram, Haryana / Neemrana (Open to Remote & On-site)
							</div>
						</div>
					</div>
				</div>

				{/* Quick Email Form */}
				<form onSubmit={handleSubmit} className="space-y-3">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
						<div>
							<label className="block text-[11px] font-semibold text-zinc-400 mb-1">
								Your Name / Company
							</label>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="e.g. Alex (HR Tech Co.)"
								required
								className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5ff41] transition-colors"
							/>
						</div>
						<div>
							<label className="block text-[11px] font-semibold text-zinc-400 mb-1">
								Your Email
							</label>
							<input
								type="email"
								value={senderEmail}
								onChange={(e) => setSenderEmail(e.target.value)}
								placeholder="you@company.com"
								required
								className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5ff41] transition-colors"
							/>
						</div>
					</div>

					<div>
						<label className="block text-[11px] font-semibold text-zinc-400 mb-1">
							Message / Job Details
						</label>
						<textarea
							rows="3"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="We have an opening for a Software Engineer / Python / AWS developer..."
							required
							className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#c5ff41] transition-colors resize-none"
						/>
					</div>

					<button
						type="submit"
						className="w-full py-3 rounded-full text-xs sm:text-sm font-bold bg-[#c5ff41] text-[#0c0c0f] hover:bg-[#b0eb31] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95 cursor-pointer"
					>
						<FiSend className="text-sm" />
						<span>{sentFeedback ? "Opening Email Client..." : "Send Email to Anish"}</span>
					</button>
				</form>

				{/* Social links row */}
				<div className="flex items-center justify-center gap-4 mt-5 pt-4 border-t border-white/[0.06] text-zinc-400">
					<a
						href="https://linkedin.com/in/anishkumar-python"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 text-xs hover:text-[#0A66C2] transition-colors"
					>
						<FaLinkedin />
						<span>LinkedIn</span>
					</a>
					<span className="text-zinc-600">•</span>
					<a
						href="https://github.com/anishkumar68"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 text-xs hover:text-white transition-colors"
					>
						<FaGithub />
						<span>GitHub</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactModal;
