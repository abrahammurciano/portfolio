import classNames from "classnames";
import { CSSProperties } from "react";
import { useResizeDetector } from "react-resize-detector";
import WrapperProps from "../models/WrapperProps";
import css from "../styles/ImageTextSplit.module.css";

interface ImageTextSplitInnerProps extends WrapperProps {
	imageSide?: "left" | "right";
	imageSrc: string;
	width?: number;
}

export default function ImageTextSplit(props: ImageTextSplitInnerProps) {
	const style: CSSProperties = {
		flexDirection: props.imageSide === "left" ? "row" : "row-reverse",
	};
	const imageStyle: CSSProperties = {
		backgroundImage: `url(${props.imageSrc})`,
	};

	const { width, ref } = useResizeDetector();

	return (
		<div className={classNames(css.ImageTextSplit, { [css.small]: width !== undefined && width < 600 })} style={style} ref={ref}>
			<div className={css.Image} style={imageStyle} />
			<div className={css.Text}>
				{props.children}
			</div>
		</div>
	);
}