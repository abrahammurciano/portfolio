import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import "./Card.css";

export interface CardProps {
	borderRadius?: string;
	width?: string;
	height?: string;
	shadowBlur?: string;
	shadowOpacity?: number;
	maxWidth?: string;
	maxHeight?: string;
	snapThreshold?: string;
	children?: ReactNode;
}

export default function Card(props: CardProps) {
	const media_query = window.matchMedia(`(max-width: ${props.snapThreshold}), (max-height: ${props.snapThreshold})`);
	let [snap, setSnap] = useState(props.snapThreshold === undefined ? false : media_query.matches);

	const updateSnap = (e: MediaQueryListEvent) => {
		setSnap(e.matches);
	}

	useEffect(() => {
		media_query.addEventListener("change", updateSnap);
		return () => media_query.removeEventListener("change", updateSnap);
	}, []);

	const style: CSSProperties = {
		"borderRadius": snap ? "0px" : props.borderRadius || "4px",
		"width": snap ? "100%" : props.width || "95%",
		"height": snap ? "100%" : props.height || "95%",
		"boxShadow": `0px 0px ${props.shadowBlur || "25px"} rgba(0, 0, 0, ${props.shadowOpacity || 0.6})`,
		"maxWidth": props.maxWidth,
		"maxHeight": props.maxHeight,
	};

	return (
		<div className="CardWrapper">
			<div className="Card" style={style}>
				{props.children}
			</div>
		</div>
	);
}