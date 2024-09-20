import React, { useState } from "react";

function SearchBar({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState(""); //state to hold the input value

	//handling form submission

	const handleSubmit = (e) => {
		e.preventDefault();
		if (searchTerm.trim()) {
			onSearch(searchTerm); //call the onSearch function passed as a prop
		}
	};

	return (
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
	);
}

export default SearchBar;
