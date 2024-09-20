import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";
import "./App.css";

function App() {
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	//how we handle the search request
	const handleSearch = async (username) => {
		setLoading(true);
		setError(false);

		const data = await fetchUserData(username); //calling the api service
		if (data) {
			setUserData(data); //set user data if successfule
		} else {
			setError(true); //setting error state if the user is not found
		}
		setLoading(false); //set loading state to falsw when done
	};
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-center text-2xl font-bold mb-6">
				GitHub User Search
			</h1>
			<Search onSearch={handleSearch} />
			{/* displaying stuff based on the different states */}
			{loading && <p className="text-center">Loading...</p>}
			{error && (
				<p className="text-center text-red-500">
					["Looks like we cant find the user"]{" "}
				</p>
			)}
			{userData && (
				<div className="text-center mt-4">
					<img
						src={userData.avatar_url}
						alt={`${userData.login}'s avatar`}
						className="w-24 h-24 rounded-full mx-auto mb-4"
					/>
					<h2 className="text-xl font-bold">
						{userData.name || userData.login}
					</h2>
					<p className="text-gray-600">
						{userData.bio || "No bio available."}
					</p>
					<a
						href={userData.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-500 hover:underline mt-2 inline-block"
					>
						Visit GitHub Profile
					</a>
				</div>
			)}
		</div>
	);
}

export default App;
