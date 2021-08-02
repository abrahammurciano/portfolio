import { CSSProperties } from "react";
import css from "../styles/Circle.module.css";

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
		<div className={css.Circle} style={style}></div>
	);
}
