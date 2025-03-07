import React, { useEffect, useState } from "react";
import { getBlog } from "../api/api";

export default function Blogs() {
	const [blog, setBlog] = useState([]);

	useEffect(() => {
		const fetchBlog = async () => {
			try {
				const data = await getBlog();
				setBlog(data || []);
			} catch (error) {
				console.log(error);
			}
		};
		fetchBlog();
	}, []);

	return (
		<>
			<div className="p-8">
				<h2 className="text-3xl font-bold mb-4 text-yellow-500">Blog</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{blog.map((blog) => (
						<div key={blog.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
							<img src="{blog.image}" alt="Blog Image" />
							<h3 className="text-xl font-semibold">{blog.title}</h3>
							<p className="text-gray-700">{blog.content}</p>
							<p className="text-gray-700">{blog.created_at}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
