import React from "react";

export default function Banner(props) {
	const {id} = props;
	const style = {
		backgroundImage: `url(${props.image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "300px",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "center",
	};
	return (
		<>
			<div className="container" id={id} style={style}>
				<h3>{props.heading}</h3>
				<p>{props.description}</p>
			</div>
		</>
	);
}