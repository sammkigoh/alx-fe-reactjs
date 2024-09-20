import { useState } from "react";
import Search from "./components/Search";
import { fetchAdvancedUserSearch } from "./services/githubService";
import "./App.css";

function App() {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	// Handle advanced search
	const handleSearch = async (searchParams) => {
		setLoading(true);
		setError(false);

		const data = await fetchAdvancedUserSearch(searchParams);
		if (data) {
			setUsers(data);
		} else {
			setError(true);
		}

		setLoading(false);
	};

	return (
		<div className="container mx-auto p-4">
			{/* <h1 className="text-center text-2xl font-bold mb-6">
				GitHub User Search
			</h1> */}
			<Search onSearch={handleSearch} />

			{/* Display loading, error, or search results */}
			{loading && <p className="text-center">Loading...</p>}
			{error && (
				<p className="text-center text-red-500">
					Error fetching users.
				</p>
			)}

			{users.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
					{users.map((user) => (
						<div
							key={user.id}
							className="p-4 border rounded-lg shadow-md"
						>
							<img
								src={user.avatar_url}
								alt={`${user.login}'s avatar`}
								className="w-24 h-24 rounded-full mx-auto mb-4"
							/>
							<h2 className="text-xl font-bold text-center">
								{user.login}
							</h2>
							{user.location && (
								<p className="text-center text-gray-600">
									Location: {user.location}
								</p>
							)}
							<p className="text-center text-gray-600">
								Repositories: {user.public_repos}
							</p>
							<a
								href={user.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="block text-center text-blue-500 hover:underline mt-2"
							>
								View Profile
							</a>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
