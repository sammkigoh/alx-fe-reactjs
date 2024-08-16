import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav
			style={{
				backgroundColor: "#f8f9fa",
				display: "flex",
				justifyContent: "center",
				padding: "10px",
				borderBottom: "1px solid #ccc",
			}}
		>
			<Link to="/" style={{ margin: "10px" }}>
				Home
			</Link>
			<Link to="/about" style={{ margin: "10px" }}>
				About
			</Link>
			<Link to="/services" style={{ margin: "10px" }}>
				Services
			</Link>
			<Link to="/contact" style={{ margin: "10px" }}>
				Contact
			</Link>
		</nav>
	);
}
export default Navbar;
