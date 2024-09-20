import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY; // If using API key, ensure it's set correctly
const BASE_URL = "https://api.github.com/search/users";

export const fetchAdvancedUserSearch = async ({
	searchTerm,
	location,
	minRepos,
}) => {
	try {
		// Construct query parameters
		let query = searchTerm ? `${searchTerm}` : "";
		if (location) {
			query += `+location:${location}`;
		}
		if (minRepos) {
			query += `+repos:>${minRepos}`;
		}

		// Make the API request using the GitHub Search API
		const response = await axios.get(`${BASE_URL}?q=${query}`, {
			headers: {
				Authorization: `Bearer ${API_KEY}`, // If you're using an API key, include it here
			},
		});

		return response.data.items; // Return the array of users from the search results
	} catch (error) {
		console.error("Error fetching user data:", error);
		return null;
	}
};
