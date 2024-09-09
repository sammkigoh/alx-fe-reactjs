import React, { useState } from "react";

const AddRecipeForm = () => {
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [steps, setSteps] = useState("");
	const [errors, setErrors] = useState({});

	const validate = () => {
		const validationErrors = {};

		if (!title) validationErrors.title = "Recipe title is requred";
		if (!ingredients)
			validationErrors.ingredients = "Ingredients are requred";
		if (!steps) validationErrors.steps = "Steps are requred";
		if (ingredients.split(",").length < 2)
			validationErrors.ingredients =
				"Please provide at least two ingredients";

		return validationErrors;
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			console.log({
				title,
				ingredients: ingredients.split(","),
				steps,
			});

			//clearing the form after submission
			setTitle("");
			setIngredients(",");
			setSteps(",");
			setErrors({});
			alert("Recipe submitted successfully!");
		}
	};
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold text-center mb-8">
				Add New Recipe
			</h1>
			<form
				onSubmit={handleSubmit}
				className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
			>
				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2">
						Recipe Title
					</label>
					<input
						type="text"
						className="w-full p-2 border rounded"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					></input>

					{errors.title && (
						<p className="text-red-500 text-sm">{errors.title}</p>
					)}
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2">
						Ingredients (comma-separated)
					</label>
					<textarea
						type="text"
						className="w-full p-2 border rounded"
						value={ingredients}
						onChange={(e) => setIngredients(e.target.value)}
					></textarea>
					{errors.ingredients && (
						<p className="text-red-500 text-sm">
							{errors.ingredients}
						</p>
					)}
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-bold mb-2">
						Preparation Steps
					</label>
					<textarea
						type="text"
						className="w-full p-2 border rounded"
						value={steps}
						onChange={(e) => setSteps(e.target.value)}
					></textarea>
					{errors.steps && (
						<p className="text-red-500 text-sm">{errors.steps}</p>
					)}
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
				>
					Submit Recipe
				</button>
			</form>
		</div>
	);
};

export default AddRecipeForm;
