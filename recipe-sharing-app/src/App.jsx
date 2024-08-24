import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import useRecipeStore from "./components/recipeStore";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";
import "./App.css";

function App() {
	return (
		<Router>
			<div>
				<h1>Recipe Sharing App</h1>
				<SearchBar />
				<FavoritesList />
				<RecommendationsList />
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
