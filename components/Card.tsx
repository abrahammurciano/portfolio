import { CSSProperties } from "react";
import css from "../styles/Card.module.css";
import WrapperProps from "../WrapperProps";
import { useResizeDetector } from "react-resize-detector";

export interface CardProps extends WrapperProps {
	borderRadius: string;
	width: string;
	height: string;
	shadowBlur: string;
	shadowOpacity: number;
	maxWidth?: string;
	maxHeight?: string;
	snapThreshold?: number;
}

export default function Card(props: CardProps) {
	const { width, height, ref } = useResizeDetector();

	function shouldSnap(w?: number, h?: number) {
		if (props.snapThreshold === undefined || w === undefined || h === undefined) {
			return false;
		}
		return w < props.snapThreshold || h < props.snapThreshold;
	}

	const snap = shouldSnap(width, height);

	const style: CSSProperties = {
		"borderRadius": snap ? "0px" : props.borderRadius,
		"width": snap ? "100%" : props.width,
		"height": snap ? "100%" : props.height,
		"boxShadow": `0px 0px ${props.shadowBlur} rgba(0, 0, 0, ${props.shadowOpacity})`,
		"maxWidth": props.maxWidth,
		"maxHeight": props.maxHeight,
	};

	return (
		<div className={css.CardWrapper} ref={ref}>
			<div className={css.Card} style={style}>
				{props.children}
			</div>
		</div>
	);
}

Card.defaultProps = {
	borderRadius: "4px",
	width: "95%",
	height: "95%",
	shadowBlur: "25px",
	shadowOpacity: 0.6
}