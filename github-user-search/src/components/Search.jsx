import React, { useState } from "react";
import { fetchAdvancedUserSearch } from "../services/githubService";

function Search() {
	const [searchTerm, setSearchTerm] = useState("");
	const [location, setLocation] = useState("");
	const [minRepos, setMinRepos] = useState("");
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError(false);
		setUserData(null);

		const data = await fetchAdvancedUserSearch({
			searchTerm,
			location,
			minRepos,
		});

		if (data) {
			setUserData(data);
		} else {
			setError(true);
		}
		setLoading(false);
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-center text-4xl font-bold mb-8">
				GitHub User Search
			</h1>

			{/* Search Form */}
			<form
				onSubmit={handleSubmit}
				className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto mt-12"
			>
				<div className="space-y-6">
					<div className="flex flex-col md:flex-row md:space-x-4">
						<div className="w-full md:w-1/2">
							<label
								htmlFor="username"
								className="block font-medium text-gray-700"
							>
								GitHub Username
							</label>
							<input
								id="username"
								type="text"
								className="border rounded-lg p-2 w-full"
								placeholder="Enter GitHub Username"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
						<div className="w-full md:w-1/2">
							<label
								htmlFor="location"
								className="block font-medium text-gray-700"
							>
								Location
							</label>
							<input
								id="location"
								type="text"
								className="border rounded-lg p-2 w-full"
								placeholder="Enter Location"
								value={location}
								onChange={(e) => setLocation(e.target.value)}
							/>
						</div>
					</div>

					<div className="w-full">
						<label
							htmlFor="repos"
							className="block font-medium text-gray-700"
						>
							Minimum Repos
						</label>
						<input
							id="repos"
							type="number"
							className="border rounded-lg p-2 w-full"
							placeholder="Enter minimum number of repositories"
							value={minRepos}
							onChange={(e) => setMinRepos(e.target.value)}
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
					>
						Search
					</button>
				</div>
			</form>

			{/* Display Results */}
			{loading && <p className="text-center">Loading...</p>}
			{error && (
				<p className="text-center text-red-500">
					Looks like we cant find the user
				</p>
			)}
			{userData && userData.length > 0 && (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
					{userData.map((user) => (
						<div key={user.id} className="text-center mt-4">
							<img
								src={user.avatar_url}
								alt={`${user.login}'s avatar`}
								className="w-24 h-24 rounded-full mx-auto mb-4"
							/>
							<h2 className="text-xl font-bold">{user.login}</h2>
							<a
								href={user.html_url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:underline mt-2 inline-block"
							>
								Visit GitHub Profile
							</a>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default Search;
