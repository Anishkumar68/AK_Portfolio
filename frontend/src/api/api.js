import axios from "axios";

const api_url = "http://127.0.0.1:8000";

export const api = axios.create({
	baseURL: api_url,
	headers: {
		"Content-Type": "application/json",
	},
});

// Fetch all projects
export const getProjects = async () => {
	try {
		const response = await api.get("/projects/"); // Added leading `/`
		return response.data; // Return the fetched data
	} catch (error) {
		console.error("Error fetching projects:", error);
		return null; // Return null to handle errors gracefully
	}
};

// Fetch all blogs
export const getBlog = async () => {
	try {
		const response = await api.get("/blog/"); // Added leading `/`
		return response.data;
	} catch (error) {
		console.error("Error fetching blog:", error);
		return null;
	}
};

// Fetch all testimonials
export const getTestimonial = async () => {
	try {
		const response = await api.get("/testimonials/"); // Added leading `/`
		return response.data;
	} catch (error) {
		console.error("Error fetching testimonials:", error);
		return null;
	}
};
