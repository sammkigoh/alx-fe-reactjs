import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState(""); //state to hold the input value
	const [userData, setUserData] = useState(null); //to holde the data of user from Github
	const [loading, setLoading] = useState(false); //the loading state
	const [error, setError] = useState(false); //error state

	//handling form submission

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true); //to start loading
		setError(false); // to reset the errors
		setUserData(null); //clear previous data

		const data = await fetchUserData(searchTerm); //calling the api to fetch user data

		if (data) {
			setUserData(data); //call the onSearch function passed as a prop
		} else {
			setError(true);
		}
		setLoading(false);
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-center text-2xl font-bold mb-6">
				GitHub User Search
			</h1>
			{/* the search input */}

			<form onSubmit={handleSubmit} className="text-center mb-6">
				<input
					type="text"
					className="border rounded-lg p-2 w-full md:w-1/2"
					placeholder="Enter GitHub Username"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white px-4 py-2 rounded-lg ml-4 hover:bg-blue-600"
				>
					Search
				</button>
			</form>
			{/* conditional rendering for when there are errors or success */}
			{loading && <p className="text-center">Loading...</p>}
			{error && (
				<p className="text-center text-red-500">
					["Looks like we cant find the user"]
				</p>
			)}
			{userData && (
				<div className="text-center mt-4">
					<img
						src={userData.avatar_url}
						alt={`${userData.login}'s avatar`}
						className="w-24 h-24 rounded-full mx-auto mb-4"
					/>
					<h2 className="text-xl font-bold">{userData.login}</h2>
					<a
						href={userData.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:underline mt-2 inline-block"
					>
						{" "}
						Visit GitHub Profile
					</a>
				</div>
			)}
		</div>
	);
}

export default Search;
