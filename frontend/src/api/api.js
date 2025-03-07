import axios from "axios";
const api_url = "http://127.0.0.1:8000";

export const api = axios.create({
	baseURL: api_url,
	headers: {
		"Content-Type": "application/json",
	},
});

// fetch all project

export const getProjects = async () => {
	try {
		const response = await api.get("projects/");
	} catch (error) {
		console.log(error);
	}
};
// fetch all project

export const getBlog = async () => {
	try {
		const response = await api.get("blog/");
	} catch (error) {
		console.log(error);
	}
};
// fetch all project

export const getTestimonial = async () => {
	try {
		const response = await api.get("testimonials/");
	} catch (error) {
		console.log(error);
	}
};
