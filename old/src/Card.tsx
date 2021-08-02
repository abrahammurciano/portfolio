import { CSSProperties, useEffect, useState } from "react";
import "../styles/Card.module.css";
import WrapperProps from "./WrapperProps";

export interface CardProps extends WrapperProps {
	borderRadius?: string;
	width?: string;
	height?: string;
	shadowBlur?: string;
	shadowOpacity?: number;
	maxWidth?: string;
	maxHeight?: string;
	snapThreshold?: string;
}

export default function Card(props: CardProps) {
	const media_query = window.matchMedia(`(max-width: ${props.snapThreshold}), (max-height: ${props.snapThreshold})`);
	const [snap, setSnap] = useState(props.snapThreshold === undefined ? false : media_query.matches);

	const style: CSSProperties = {
		"borderRadius": snap ? "0px" : props.borderRadius || "4px",
		"width": snap ? "100%" : props.width || "95%",
		"height": snap ? "100%" : props.height || "95%",
		"boxShadow": `0px 0px ${props.shadowBlur || "25px"} rgba(0, 0, 0, ${props.shadowOpacity || 0.6})`,
		"maxWidth": props.maxWidth,
		"maxHeight": props.maxHeight,
	};

	const updateSnap = (e: MediaQueryListEvent) => {
		setSnap(e.matches);
	}

	useEffect(() => {
		media_query.addEventListener("change", updateSnap);
		return () => media_query.removeEventListener("change", updateSnap);
	}, [media_query]);

	return (
		<div className="CardWrapper">
			<div className="Card" style={style}>
				{props.children}
			</div>
		</div>
	);
}