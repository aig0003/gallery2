import {React, useState, useEffect} from "react";

import $ from "jquery";

var bannerID;

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



export default function Banner(props) {
	const {id} = props;
	
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

	let clock, timer;
	//const initialCount = 0;
	const [count, setCount] = useState(() => { return 0; });
	const [clockOn, setClock] = useState(() => { return true; });

	useEffect(() => {

		clock = setInterval(() => {	
			setCount((count >= images.length - 1) ? 0 : count + 1);
		}, 3000);

		$(`.image`).css({"opacity":"0"});
		$(`#image-${count}`).css({"opacity":"1"});
		$(`.pip`).removeClass("active-pip");
		$(`#pip-${count}`).addClass("active-pip");

		if(!clockOn) {
			clearInterval(clock);
			clearTimeout(timer)
			console.log("clearing timer")
			timer = setTimeout(()=>{
				setClock(true);
				setCount(prevCount=> {return prevCount})
				console.log("Resetting timer")
			}, 10000);
		}
		console.log("counter: " + count);

		return () => clearInterval(clock);

	}, [count, clockOn]);

	function Pips(props) {
		const style = {
			width:"10px",
			height:"5px",
			outline:"none",
			border:"none",
			margin:"0 5px",
			boxShadow:"0px 0px 1px black",
			cursor: "pointer",
		}
		return(
			<>
				<div className="pips-container" style={{position:"absolute",backgroundColor:"none", padding:"10px",}}>
					{images.map((image, i) => (
						<button className="pip" id={`pip-${i}`} key={i} style={style}
								onClick={ ()=> {
									setCount(i);
									setClock(false);
								}}>
						</button>	
					))}
				</div>
			</>
		);
	}

	function Arrows(props) {

		const styles = {
			width: "100%",
			height: "100%",
			position: "absolute",
			display: "flex",
			justifyContent: "space-between",
		}	

		const arrowStyles = {
			backgroundColor: "#0000",
			color: "#f66",
			outline: "none",
			border: "none",
			textShadow:"0px 0px 1px black",
		}

		return(<>
			<div className="arrows-container" style={styles}>
				<button onClick={() => setCount((prev) => { return (prev-1 < 0) ? images.length - 1 : prev - 1;})} style={arrowStyles}>LEFT</button>
				<button onClick={() => setCount((prev) => { return (prev+1 > images.length - 1) ? 0 : prev + 1;})} style={arrowStyles}>RIGHT</button>
			</div>
		</>);
	}

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
					<Arrows></Arrows>
					<Pips></Pips>
					
				</div>
			</div>
		</>
	);
}
