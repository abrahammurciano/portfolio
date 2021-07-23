import React from "react";
import BubblePhoto from "./BubblePhoto";
import "./CoverSection.css";
import profile_photo from "./images/profile_photo.jpg";

class CoverSection extends React.Component {
	render() {
		return (
			<div className="CoverSection">
				<div className="CoverSection__Photo">
					<BubblePhoto image={profile_photo} size="300px"></BubblePhoto>
				</div>
				<h1>
					Hi! I'm Abraham Murciano.
				</h1>
			</div>
		);
	}
}

export default CoverSection;