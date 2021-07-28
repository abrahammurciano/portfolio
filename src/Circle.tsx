import React, { CSSProperties } from "react";
import "./Circle.css";

export interface CircleProps {
	diameter: string;
	backgroundImage?: string;
	backgroundColor?: string;
}

export default function Circle(props: CircleProps) {
	const style: CSSProperties = {
		backgroundImage: props.backgroundImage,
		backgroundColor: props.backgroundColor,
		width: props.diameter,
		height: props.diameter,
	}

	return (
		<div className="Circle" style={style}></div>
	);
}
