import React, { useEffect, useState } from "react";
import { getTestimonial } from "../api/api";

export default function Testimonials() {
	const [testimonials, setTestimonials] = useState([]);

	useEffect(() => {
		const fetchTestimonials = async () => {
			try {
				const data = await getTestimonial();
				setTestimonials(data || []);
			} catch (error) {
				console.log(error);
			}
		};
		fetchTestimonials();
	}, []);

	const renderStars = (rating) => {
		const fullStar = "⭐";
		return fullStar.repeat(rating);
	};

	return (
		<div className="p-8 w-full flex flex-col justify-center items-center">
			<h2 className="title ">Testimonials</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{testimonials.map((testimonial) => (
					<div
						key={testimonial.id}
						className="bg-gray-800 text-white p-6 rounded-lg shadow-md"
					>
						<img
							src={testimonial.image}
							alt={testimonial.name}
							className="w-16 h-16 rounded-full mx-auto mb-3"
						/>
						<h3 className="text-xl font-semibold text-yellow-400 text-center">
							{testimonial.name}
						</h3>
						<p className="text-gray-300 text-center">{testimonial.role}</p>
						<p className="text-yellow-400 text-center">
							{renderStars(testimonial.rating)}
						</p>
						<p className="text-gray-400 mt-3 text-center">
							{testimonial.feedback}
						</p>
						<p className="text-gray-500 text-center text-sm">
							{new Date(testimonial.created_at).toDateString()}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
