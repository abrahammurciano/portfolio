import classNames from "classnames";
import React, { CSSProperties, ReactNode } from "react";
import { withResizeDetector } from "react-resize-detector";
import "./ImageTextSplit.css";

interface ImageTextSplitInnerProps {
	imageSide?: "left" | "right";
	imageSrc: string;
	width?: number;
	children?: ReactNode;
}

interface ImageTextSplitInnerState {
	smallScreen: boolean;
}

class ImageTextSplitInner extends React.Component<ImageTextSplitInnerProps, ImageTextSplitInnerState> {
	style: CSSProperties;
	imageStyle: CSSProperties;

	constructor(props: ImageTextSplitInnerProps) {
		super(props);
		this.state = {
			smallScreen: false,
		};
		this.style = {
			flexDirection: props.imageSide === "left" ? "row" : "row-reverse",
		};
		this.imageStyle = {
			backgroundImage: `url(${props.imageSrc})`,
		};
	}

	checkSize() {
		this.setState({ smallScreen: this.props.width !== undefined && this.props.width < 600 });
	}

	componentDidUpdate(prevProps: ImageTextSplitInnerProps) {
		if (this.props.width !== prevProps.width) {
			this.checkSize();
		}
	}

	render() {
		return (
			<div className={classNames("ImageTextSplit", { "small": this.state.smallScreen })} style={this.style}>
				<div className="ImageTextSplit__Image" style={this.imageStyle} />
				<div className="ImageTextSplit__Text">
					{this.props.children}
				</div>
			</div>
		);
	}
}

const ImageTextSplit = withResizeDetector(ImageTextSplitInner);

export default ImageTextSplit;