import React from "react";
import PillButton from './PillButton.js'

export default function ImagePreview(props) {
	const {id, image, aspect, heading, content} = props;
	const container_style = {
		backgroundImage: `url(${image})`,
		backgroundColor: "#222",
		backgroundSize: "cover",
		backgroundPosition: "center",
		width: "33%",
		aspectRatio: `${aspect}`,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems:"center",
		textShadow:"0 2px 4px black",
		
	};
	const heading_style = {
		fontSize:"36px",
	};
	const content_style = {
		fontSize:"24px",
	}
	return (
		<>
			<div className="container" id={id} style={container_style}>
				{heading && <h3 style={heading_style}>{heading}</h3>}
				{content && <p style={content_style}>{content}</p>}
				<PillButton color="#f66">View</PillButton>
			</div>
		</>
	);
}