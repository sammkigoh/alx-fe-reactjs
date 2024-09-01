// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

function BlogPost() {
	const { postId } = useParams(); // The dynamic segment of the route is named 'postId'

	return (
		<div>
			<h1>Blog Post</h1>
			<p>Loading blog post for ID: {postId}</p>
			{/* Additional logic to fetch and display blog post data based on `postId` could go here */}
		</div>
	);
}

export default BlogPost;
