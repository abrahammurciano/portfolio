import React from "react";
import Circle from "./Circle";
import "./BubblePhoto.css";

export interface BubblePhotoProps {
	image: string;
	size: string;
}

class BubblePhoto extends React.Component<BubblePhotoProps, {}> {
	render() {
		return (
			<div className="BubblePhoto" style={{ width: this.props.size, height: this.props.size }}>
				<div className="BubblePhoto__Circle">
					<Circle diameter={this.props.size} backgroundImage={`url(${this.props.image})`} />
				</div>
				<div className="BubblePhoto__Circle BubblePhoto__Border">
					<Circle diameter={this.props.size} backgroundColor="var(--light-1)" />
				</div>
				<div className="BubblePhoto__Background BubblePhoto__Circle">
					<Circle diameter={this.props.size} backgroundImage="linear-gradient(to top right, var(--primary-dark), var(--accent-dark) 90%, var(--accent-light))" />
				</div>
			</div>
		);
	}
}

export default BubblePhoto;