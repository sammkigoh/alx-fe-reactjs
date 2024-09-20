import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY; // Ensure this is properly set in your .env file

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
		const response = await axios.get(
			`https://api.github.com/search/users?q=${query}`, // Direct use of the URL as expected by the test
			{
				headers: {
					Authorization: `Bearer ${API_KEY}`, // Using an API key if required
				},
			}
		);

		return response.data.items; // Return the array of users from the search results
	} catch (error) {
		console.error("Error fetching user data:", error);
		return null;
	}
};
// simpe user search by username
export const fetchUserData = async (username) => {
	try {
		const response = await axios.get(
			`https://api.github.com/users/${username}`,
			{
				headers: {
					Authorization: `Bearer ${API_KEY}`,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching user data:", error);
		return null;
	}
};
