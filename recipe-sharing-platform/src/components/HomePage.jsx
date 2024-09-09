import React, { useState, useEffect } from "react";
import recipeData from "../data.json"; // Correct the import path

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		// Since we're importing the data directly, no need for fetch
		setRecipes(recipeData);
	}, []);

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold text-center mb-8">
				Recipe Sharing Platform
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{recipes.map((recipe) => (
					<div
						key={recipe.id}
						className="border rounded-lg shadow-lg p-4 transform transition duration-300 hover:shadow-xl hover:scale-105"
					>
						<img
							src={recipe.image}
							alt={recipe.title}
							className="w-full h-48 object-cover mb-4 rounded-t-lg"
						/>
						<h2 className="text-xl font-bold mb-2">
							{recipe.title}
						</h2>
						<p className="text-gray-700">{recipe.summary}</p>
						<button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
							View Recipe
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
export default HomePage;
