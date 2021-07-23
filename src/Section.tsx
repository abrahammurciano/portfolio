import React from "react";
import "./Section.css"

class Section extends React.Component {
	render() {
		return (
			<section className="Section">
				{this.props.children}
			</section>
		);
	}
}

export default Section;