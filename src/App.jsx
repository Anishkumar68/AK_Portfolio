import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Career from "./components/Career";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

function App() {
	const [activeTab, setActiveTab] = useState("home");
	const [contactOpen, setContactOpen] = useState(false);

	// Sync with URL hash if present
	useEffect(() => {
		const hash = window.location.hash.replace("#", "").toLowerCase();
		if (hash === "about" || hash === "career" || hash === "home") {
			setActiveTab(hash);
		}

		const handleHashChange = () => {
			const currentHash = window.location.hash.replace("#", "").toLowerCase();
			if (currentHash === "about" || currentHash === "career" || currentHash === "home") {
				setActiveTab(currentHash);
			}
		};

		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	const handleSelectTab = (tab) => {
		setActiveTab(tab);
		window.location.hash = tab === "home" ? "" : `#${tab}`;
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="min-h-screen bg-[#0c0c0f] text-zinc-100 flex flex-col justify-between selection:bg-[#c5ff41] selection:text-black">
			{/* Floating Top Bar (Logo -> Home, 2 Menu buttons: About, Career, Hire Me CTA) */}
			<Navbar
				activeTab={activeTab}
				onSelectTab={handleSelectTab}
				onOpenContact={() => setContactOpen(true)}
			/>

			{/* Main Content Area */}
			<main className="flex-1">
				{activeTab === "home" && (
					<Hero
						onSelectTab={handleSelectTab}
						onOpenContact={() => setContactOpen(true)}
					/>
				)}

				{activeTab === "about" && (
					<About
						onSelectTab={handleSelectTab}
						onOpenContact={() => setContactOpen(true)}
					/>
				)}

				{activeTab === "career" && (
					<Career
						onOpenContact={() => setContactOpen(true)}
					/>
				)}
			</main>

			{/* Recruiter Contact Drawer / Modal */}
			<ContactModal
				isOpen={contactOpen}
				onClose={() => setContactOpen(false)}
			/>

			{/* Footer */}
			<Footer
				onSelectTab={handleSelectTab}
				onOpenContact={() => setContactOpen(true)}
			/>
		</div>
	);
}

export default App;
