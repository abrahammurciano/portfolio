import React, { CSSProperties } from "react";
import "./Circle.css";

export interface CircleProps {
	diameter: string;
	backgroundImage?: string;
	backgroundColor?: string;
}

class Circle extends React.Component<CircleProps, {}> {
	style: CSSProperties;

	constructor(props: CircleProps) {
		super(props);
		this.style = {
			backgroundImage: props.backgroundImage,
			backgroundColor: props.backgroundColor,
			width: props.diameter,
			height: props.diameter,
		}
	}

	render() {
		return (
			<div className="Circle" style={this.style}></div>
		);
	}
}

export default Circle;