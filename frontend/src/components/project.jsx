import React from "react";
import { useEffect, useState } from "react";
import { getProjects } from "../api/api";

const Projects = () => {
	const [projects, setprojects] = useState([]);

	useEffect(() => {
		const fetechprojects = async () => {
			try {
				const data = await getProjects();
				setprojects(data || []);
			} catch (error) {
				console.log(error);
			}
		};
		fetechprojects();
	}, []);

	return (
		<>
			<div className="p-8">
				<h2 className="text-3xl font-bold mb-4 text-yellow-500">My projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-gray-100 p-4 rounded-lg shadow-md"
						>
							<h3 className="text-xl font-semibold">{project.title}</h3>
							<p className="text-gray-700">{project.description}</p>
							{project.repo_link && (
								<a
									href={project.repo_link}
									className="text-blue-500"
									target="_blank"
									rel="noopener noreferrer"
								>
									View Repo
								</a>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Projects;
