import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import useRecipeStore from "./components/recipeStore";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import "./App.css";
import RecipeDetails from "./components/RecipeDetails";

function App() {
	return (
		<Router>
			<div>
				<h1>Recipe Sharing App</h1>
				<Routes>
					<Route path="/" element={<RecipeList />} />
					<Route
						path="/recipe/:recipeId"
						element={<RecipeDetails />}
					/>
				</Routes>
				<AddRecipeForm />
			</div>
		</Router>
	);
}
export default App;
