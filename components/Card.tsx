import React from "react";
import WrapperProps from "../models/WrapperProps";
import css from "../styles/Card.module.css";

export interface CardProps extends WrapperProps, React.HTMLProps<HTMLDivElement> {
	borderRadius: string;
	width?: string;
	height?: string;
	shadowBlur: string;
	shadowOpacity: number;
}

export default function Card(props: CardProps) {
	const cssVars = {
		["--border-radius" as any]: props.borderRadius,
		["--shadow-blur" as any]: props.shadowBlur,
		["--shadow-opacity" as any]: props.shadowOpacity,
	};

	const style = {
		...cssVars,
		...props.style,
		...(props.width && { width: props.width }),
		...(props.height && { height: props.height }),
	}

	return (
		<div {...props} className={`${css.Card} ${props.className}`} style={style}>
			{props.children}
		</div >
	);
}

Card.defaultProps = {
	borderRadius: "4px",
	shadowBlur: "10px",
	shadowOpacity: 0.6,
	className: "",
}