import { CSSProperties } from "react";
import "../styles/DividerLine.module.css";

export interface DividerLineProps {
	width?: string;
	align?: "left" | "right" | "center";
}

export default function DividerLine(props: DividerLineProps) {
	const style: CSSProperties = {
		width: props.width || "50%",
		marginLeft: props.align === "left" ? "0px" : "auto",
		marginRight: props.align === "right" ? "0px" : "auto",
	};

	return (
		<div className="DividerLine" style={style} />
	);
}