import css from "../styles/FullScreenCard.module.css";
import WrapperProps from "../models/WrapperProps";
import Card from "./Card"
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

export default function FullScreenCard(props: CardProps) {
	const { width, height, ref } = useResizeDetector();

	function shouldSnap(w?: number, h?: number) {
		if (props.snapThreshold === undefined || w === undefined || h === undefined) {
			return false;
		}
		return w < props.snapThreshold || h < props.snapThreshold;
	}

	const snap = shouldSnap(width, height);

	return (
		<div className={css.CardWrapper} ref={ref}>
			<Card
				className={css.FullScreenCard}
				borderRadius={snap ? "0px" : props.borderRadius}
				width={snap ? "100%" : props.width}
				height={snap ? "100%" : props.height}
				shadowBlur={props.shadowBlur}
				shadowOpacity={props.shadowOpacity}
				style={{
					"maxWidth": props.maxWidth,
					"maxHeight": props.maxHeight,
				}}
			>
				{props.children}
			</Card>
		</div>
	);
}

FullScreenCard.defaultProps = {
	borderRadius: "4px",
	width: "95%",
	height: "95%",
	shadowBlur: "25px",
	shadowOpacity: 0.6
}