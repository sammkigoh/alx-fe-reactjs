import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState(null);

	useEffect(() => {
		const selectedRecipe = recipeData.find((r) => r.id === parseInt(id));
		if (selectedRecipe) {
			setRecipe(selectedRecipe);
		}
	}, [id]);

	if (!recipe) {
		return <div>Loading...</div>;
	}
	return (
		<div className="container mx-auto p-4 shadow-lg transform transition duration-300">
			<h1 className="text-3xl font-bold text-center mb-4">
				{recipe.title}
			</h1>
			<img
				src={recipe.image}
				alt={recipe.title}
				className="w-full h-64 object-cover mb-4 rounded"
			/>
			<div className="mb-6">
				<h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
				<ul className="list-disc pl-6 space-y-2">
					{recipe.ingredients.map((ingredient, index) => (
						<li key={index} className="text-lg mb-1">
							{ingredient}
						</li>
					))}
				</ul>
			</div>
			<div>
				<h2 className="text-2xl font-semibold mb-2">Instructions</h2>
				<p className="text-lg leading-relaxed">{recipe.instructions}</p>
			</div>
		</div>
	);
};

export default RecipeDetail;
