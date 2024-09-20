import axios from "axios";

const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const BASE_URL = "https://api.gihub.com";

export const fetchUserData = async (username) => {
	try {
		const response = await axios.get(
			`https://api.github.com/users/${username}`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching user data:", error);
		return null;
	}
};
