import React from "react";

export const Footer = () => {
	return (
		<div>
			<footer
				style={{
					backgroundColor: "#282c34",
					color: "#ffffff",
					textAlign: "center",
					padding: "20px",
					position: "fixed",
					left: "0",
					bottom: "0",
					width: "100%",
					fontSize: "16px",
				}}
			>
				<p style={{ fontWeight: "bold" }}>© 2023 City Lovers</p>
			</footer>
		</div>
	);
};
export default Footer;
