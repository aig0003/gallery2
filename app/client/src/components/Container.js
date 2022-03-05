import React from "react";

export default function Container(props) {
	const {id} = props;
	return (
		<div className="container" id={id}>
			{props.children}
		</div>
	);
}