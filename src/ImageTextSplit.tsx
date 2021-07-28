import classNames from "classnames";
import { CSSProperties, ReactNode } from "react";
import { useResizeDetector } from "react-resize-detector";
import "./ImageTextSplit.css";

interface ImageTextSplitInnerProps {
	imageSide?: "left" | "right";
	imageSrc: string;
	width?: number;
	children?: ReactNode;
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
		<div className={classNames("ImageTextSplit", { "small": width !== undefined && width < 600 })} style={style} ref={ref}>
			<div className="ImageTextSplit__Image" style={imageStyle} />
			<div className="ImageTextSplit__Text">
				{props.children}
			</div>
		</div>
	);
}