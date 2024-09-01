import React from "react";
import { useQuery } from "react-query";

function fetchPosts() {
	return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
		res.json()
	);
}

function PostsComponent() {
	const { data, isError, error, isLoading, refetch } = useQuery(
		"posts",
		fetchPosts,
		{
			staleTime: 5000, // Data is considered fresh for 5 seconds
			cacheTime: 300000, // Data is cached for 5 minutes
			refetchOnWindowFocus: true, // Refetches data when the window regains focus
			keepPreviousData: true, // Keep showing the old data for better user experience during new data fetching
		}
	);

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>An error occurred: {error.message}</div>;

	return (
		<div>
			<h1>Posts</h1>
			<button onClick={() => refetch()}>Refetch Posts</button>
			<ul>
				{data &&
					data.map((post) => <li key={post.id}>{post.title}</li>)}
			</ul>
		</div>
	);
}

export default PostsComponent;
