import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Projects from "./components/project";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/blog";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Pattern from "./components/Pattern";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
	return (
		<Pattern>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Hero />} />
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
