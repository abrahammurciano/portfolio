import React from "react";
import "./Introduction.css"

class Introduction extends React.Component {
	render() {
		return (
			<div className="Introduction">
				<div className="Introduction__Greeting">Hello there!</div>
				<div className="Introduction__Name">I'm Abraham.</div>
				<div className="Introduction__Trade">Software Engineer, Graphic Designer, and Web Developer.</div>
			</div>
		);
	}
}

export default Introduction;