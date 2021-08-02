import { CSSProperties, useEffect, useState } from "react";
import "../styles/Card.module.css";
import WrapperProps from "./WrapperProps";
import { useResizeDetector } from "react-resize-detector";

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
	const { width, height, ref } = useResizeDetector();

	const [snap, setSnap] = useState(props.snapThreshold === undefined ? false : width < props.snapThreshold || height < props.snapThreshold);

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
