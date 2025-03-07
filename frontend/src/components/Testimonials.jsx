import React, { useEffect, useState } from "react";

import { getTestimonial } from "../api/api";

export default function Testimonials() {
	const [Testimonials, setTestimonials] = useState([]);

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

	return (
		<>
			<div className="p-8">
				<h2 className="text-3xl font-bold mb-4 text-yellow-500">
					Testimonials
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{Testimonials.map((Testimonials) => (
						<div
							key={Testimonials.id}
							className="bg-gray-100 p-4 rounded-lg shadow-md"
						>
							<img src="{Testimonials.image}" alt="Testimonials Image" />
							<h3 className="text-xl font-semibold">{Testimonials.name}</h3>
							<p className="text-gray-700">{Testimonials.feedback}</p>
							<p className="text-gray-700">{Testimonials.role}</p>
							<p className="text-gray-700">{Testimonials.created_at}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
