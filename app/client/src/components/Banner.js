import {React, useState, useEffect} from "react";
import $ from "jquery";

var bannerID;

export default function Banner(props) {
	const {id} = props;
	const images = [{
			image: "https://www.thesprucepets.com/thmb/lqDqQz52oagIxea9ptgY1xzXQW4=/2121x1414/filters:fill(auto,1)/Pug-GettyImages-1140575734-5262294c43ff4ec993395d780fb0ee16.jpg",
			heading: "Heading 1",
			description: "Description 1",
		}, {
			image: "https://aboutpug.com/wp-content/uploads/2014/10/grumpy-sleeping-pug.jpg",
			heading: "Heading 1",
			description: "Description 1",
		}, {
			image: "http://4.bp.blogspot.com/-VERExHECTxQ/UWUuN9JAjKI/AAAAAAAAAkE/SgAHrqaCCTA/s1600/sad+pug.jpg",
			heading: "Heading 1",
			description: "Description 1",
		}]
	bannerID = id
	const style = {
		backgroundColor: "#111",
		backgroundSize: "cover",
		backgroundPosition: "center",
		height: "300px",
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "center",
	};

	const bannerStyle = {
		width: "100%",
		display: "flex",
		justifyContent:"center",
		alignItems:"flex-end",
		minHeight: "100%",
		overflow: "hidden",
		position: "relative",
	}

	const imageStyle = {
	 	
	}

	const heading_style = {
		fontSize: "2em",
	}
	const description_style = {
		fontSize: "1.5em",
	}
	let timer;
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);
	const [timerOn, setTimer] = useState(true);
	useEffect(() => {
		if(timerOn) {
			$(`.image`).css({"opacity":"0"});
			$(`#image-${count}`).css({"opacity":"1"});
			timer = setInterval(() => {	
				setCount((count >= images.length - 1) ? 0 : count + 1);
				$(`.image`).css({"opacity":"0"});
				$(`#image-${count}`).css({"opacity":"1"});
			}, 3000);
		} else {
			clearInterval(timer);
			$(`.image`).css({"opacity":"0"});
			$(`#image-${count}`).css({"opacity":"1"});	
		}
		console.log("counter: " + count);
		
		$(`.pip`).removeClass("active-pip");
		$(`#pip-${count}`).addClass("active-pip");
		return () => clearInterval(timer);

	}, [count]);

	return (
		<>
			<div className="container" id={id} style={style}>
				<div id="banner-images-container" style={bannerStyle}>
					{images.map((image, i) => (
						<div className="image"
							 id={`image-${i}`} key={i}
							 style={
							  {
							 	backgroundImage: `url("${image.image}")`,
								position:"absolute",
							 	width:"100%", 
							 	minHeight:"100%",
							 	backgroundSize: "cover",
							 	backgroundPosition:"center",
							 	transition: "1s all ease",
							 }}>
						</div>
					))}
					<div className="pips-container" style={{position:"absolute",backgroundColor:"none", padding:"10px",}}>
						{images.map((image, i) => (
							<button className="pip" id={`pip-${i}`} key={i}
									onClick={ ()=> {
										setCount(i);
										setTimer(false);
									}}
									style={{
										width:"10px",
										height:"5px",
										outline:"none",
										border:"none",
										margin:"0 5px",
										boxShadow:"0px 0px 1px black",
										cursor: "pointer",
									}}></button>
						))}
					</div>
				</div>
			</div>
		</>
	);
	/*return (
		<>
			<div className="container" id={id} style={style}>
				<div id="banner-images-container" style={bannerStyle}>
					{images.map((image, i) => (
						<div className="image" key={i}>
							<h1>TESTING</h1>
						</div>
					))}
					{props.heading && <h3 style={heading_style}>{props.heading}</h3>}
					{props.description && <p style={description_style}>{props.description}</p>}
				</div>
			</div>
		</>
	);*/
}
