import React, { CSSProperties } from "react";
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
}

export interface CardState {
	snap: boolean;
}

class Card extends React.Component<CardProps, CardState> {
	media_query: MediaQueryList;

	constructor(props: CardProps) {
		super(props);
		this.media_query = window.matchMedia(`(max-width: ${props.snapThreshold}), (max-height: ${props.snapThreshold})`);
		this.state = { snap: props.snapThreshold === undefined ? false : this.media_query.matches };
	}

	updateSnap = (e: MediaQueryListEvent) => {
		this.setState({ snap: e.matches });
	}

	componentDidMount() {
		this.media_query.addEventListener("change", this.updateSnap);
	}

	componentWillUnmount() {
		this.media_query.removeEventListener("change", this.updateSnap);
	}

	style(): CSSProperties {
		return {
			"borderRadius": this.state.snap ? "0px" : this.props.borderRadius || "4px",
			"width": this.state.snap ? "100%" : this.props.width || "95%",
			"height": this.state.snap ? "100%" : this.props.height || "95%",
			"boxShadow": `0px 0px ${this.props.shadowBlur || "25px"} rgba(0, 0, 0, ${this.props.shadowOpacity || 0.6})`,
			"maxWidth": this.props.maxWidth,
			"maxHeight": this.props.maxHeight,
		};
	}

	render() {
		return (
			<div className="CardWrapper">
				<div className="Card" style={this.style()}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Card;