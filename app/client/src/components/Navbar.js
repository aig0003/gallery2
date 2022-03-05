import React from "react";

export default function Navbar(props) {
	const {id} = props;
	return (<>
		<div className="navbar" id={id}>
			<h1>{props.heading}</h1>
			{props.children}
		</div>
	</>);
}