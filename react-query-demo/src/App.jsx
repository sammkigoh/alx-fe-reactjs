import { useState } from "react";
import PostsComponent from "./components/PostsComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<PostsComponent />
		</QueryClientProvider>
	);
}

export default App;
