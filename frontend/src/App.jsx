import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState } from "react";

// components
import Projects from "./components/project";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/blog";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Pattern from "./components/Pattern";
import Contact from "./components/Contact";
import About from "./components/About";
import HighlightBox from "./components/Notification";

function App() {
	// ✅ State to control visibility of HighlightBox
	const [showHighlightBox, setShowHighlightBox] = useState(true);

	return (
		<Pattern>
			<Router>
				<Navbar />

				{/* ✅ Render HighlightBox only if showHighlightBox is true */}
				{showHighlightBox && (
					<HighlightBox
						title="🚀 Special Offer!"
						message="Get a free consultation on your project today!"
						setShowHighlightBox={setShowHighlightBox}
					/>
				)}

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/blog" element={<Blogs />} />
					<Route path="/testimonials" element={<Testimonials />} />
				</Routes>
			</Router>
		</Pattern>
	);
}

export default App;
