import React from "react";

export default function ImagePreview(props) {
	const {color, label} = props;
	const style = {
		borderRadius: "25px",
		backgroundColor: `${color}`,
		outline: "none",
		border: "none",
		cursor: "pointer",
		padding: "10px 50px",
		color: "white",
		minWidth:"150px",
		margin: "10px 5px"
	};
	return (
		<>
			<button style={style} 
					onMouseEnter={(e) => e.target.style.filter = "brightness(0.8)"}
					onMouseLeave={(e) => e.target.style.filter = "none"}>
				{props.children}
			</button>
		</>
	);
}