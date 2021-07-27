import React, { CSSProperties } from "react";
import "./DividerLine.css";

export interface DividerLineProps {
	width?: string;
	align?: "left" | "right" | "center";
}

class DividerLine extends React.Component<DividerLineProps> {
	style: CSSProperties;

	constructor(props: DividerLineProps) {
		super(props);
		this.style = {
			width: props.width || "50%",
			marginLeft: props.align === "left" ? "0px" : "auto",
			marginRight: props.align === "right" ? "0px" : "auto",
		};
	}

	render() {
		return (
			<div className="DividerLine" style={this.style} />
		);
	}
}

export default DividerLine;