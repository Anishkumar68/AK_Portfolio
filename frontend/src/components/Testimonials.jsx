import React, { useEffect, useState } from "react";
import { getTestimonial } from "../api/api";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion"; // ✅ Animation library

export default function Testimonials() {
	const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		const fetchTestimonials = async () => {
			try {
				const data = await getTestimonial();
				setTestimonials(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchTestimonials();
	}, []);

	const renderStars = (rating) => {
		return Array.from({ length: rating }, (_, i) => (
			<motion.span
				key={i}
				className="text-yellow-400 transition-all duration-300"
				whileHover={{ textShadow: "0px 0px 10px #ffcc00" }} // ✅ Star Glow Effect
			>
				<FaStar />
			</motion.span>
		));
	};

	return (
		<section className="py-16 text-white">
			<div className="max-w-6xl mx-auto px-6 ">
				<div className="text-center mb-10">
					<h2 className="title mb-2 ">Testimonals</h2>

					<span
						className="relative bg-[#383525] text-white font-medium  px-3 py-1 transition-all duration-300  rounded-t-lg inline-block
    after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] 
    after:bg-[#ffcc00] after:opacity-50 after:transition-all after:duration-500 
    hover:after:opacity-100 hover:after:shadow-[0_0_10px_#ffcc00]"
					>
						See how our customers have benefited from our services!
					</span>
				</div>

				{/* Testimonial Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.id}
							className="p-8 h-fit w-full relative bg-slate-800 text-white px-6 rounded-2xl shadow-lg overflow-hidden group 
						hover:scale-105 transition-all duration-500 border border-gray-500 ease-in-out hover:border-[#ffcc00]   "
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							whileHover={{ scale: 1.05, rotate: [0, 1, -1, 0] }}
						>
							{/* Floating Silver Glow Effect */}

							<div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_#7e61ff,_transparent)] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

							{/* User Avatar */}
							<div className="flex flex-col items-center">
								<motion.img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-16 h-16 rounded-full mb-3 border-2 border-gray-500 shadow-lg group-hover:border-[#ffe600]"
									whileHover={{ scale: 1.1 }}
								/>
								<h3 className="text-xl font-semibold text-[#ffcc00]">
									{testimonial.name}
								</h3>
								<p className="text-gray-400">{testimonial.role}</p>

								{/* ✅ Stars with Glow Effect on Hover */}
								<motion.div className="flex mt-2" whileHover={{ scale: 1.1 }}>
									{renderStars(testimonial.rating)}
								</motion.div>
							</div>

							{/* Testimonial Text */}
							<motion.p
								className="text-gray-300 mt-4 text-center italic opacity-80 transition-opacity duration-500 group-hover:opacity-100"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								"{testimonial.feedback}"
							</motion.p>

							{/* ✅ Gradient Divider Line */}
							<div className="w-full h-[3px] my-4 bg-gradient-to-r from-[#2eadff] via-[#3d83ff] to-[#7e61ff] rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

							{/* Date */}
							<p className="text-gray-500 text-center text-sm mt-3">
								{new Date(testimonial.created_at).toLocaleString()}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
