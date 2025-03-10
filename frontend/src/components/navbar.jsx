import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for Hamburger menu
import ak_logo from "../assets/ak_logo.png";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<nav className="sticky top-0 left-0 w-full bg-[#383525] bg-opacity-80 z-50 shadow-md">
				<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
					{/* Logo */}
					<div className="w-10 h-10 bg-white rounded-full border-2 border-white">
						<img
							src={ak_logo}
							alt="Anish Kumar"
							className="w-full h-full rounded-full object-cover"
						/>
					</div>

					{/* Desktop Navigation */}
					<ul className="hidden md:flex space-x-8">
						{[
							{ name: "Home", path: "/" },
							{ name: "About", path: "/about" },
							{ name: "Projects", path: "/projects" },
							{ name: "Blog", path: "/blog" },
							{ name: "Testimonials", path: "/testimonials" },
							{ name: "Contact", path: "/contact" },
						].map((item) => (
							<li key={item.path}>
								<NavLink
									to={item.path}
									className={({ isActive }) =>
										`text-lg font-bold transition-all duration-300 ${
											isActive
												? "text-yellow-400 border-b-2 border-yellow-400"
												: "text-white hover:text-yellow-400"
										}`
									}
								>
									{item.name}
								</NavLink>
							</li>
						))}
					</ul>

					{/* Mobile Menu Button */}
					<div className="md:hidden">
						<button
							onClick={() => setMenuOpen(!menuOpen)}
							className="text-white"
						>
							{menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{menuOpen && (
					<div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90">
						<ul className="flex flex-col items-center py-4 space-y-4">
							{[
								{ name: "Home", path: "/" },
								{ name: "About", path: "/about" },
								{ name: "Projects", path: "/projects" },
								{ name: "Blog", path: "/blog" },
								{ name: "Testimonials", path: "/testimonials" },
								{ name: "Contact", path: "/contact" },
							].map((item) => (
								<li key={item.path}>
									<NavLink
										to={item.path}
										onClick={() => setMenuOpen(false)}
										className="text-white text-lg font-semibold hover:text-yellow-400 transition-all duration-300"
									>
										{item.name}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				)}
			</nav>
		</>
	);
};

export default Navbar;
