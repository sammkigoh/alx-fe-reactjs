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
		fetchPosts
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
