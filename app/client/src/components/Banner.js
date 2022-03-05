import React from "react";

export default function Banner(props) {
	const {id} = props;
	const style = {
		"background-image": props.image
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