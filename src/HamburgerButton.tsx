import React from "react";
import classNames from "classnames"
import "./HamburgerButton.css"

type DivMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>

export interface HamburgerButtonProps {
	opened: boolean;
	onClick: (event: DivMouseEvent) => void;
}

class HamburgerButton extends React.Component<HamburgerButtonProps, {}> {
	onClick(e: DivMouseEvent) {
		this.props.onClick(e);
	}

	render() {
		return (
			<div className={classNames("HamburgerButton", { "opened": this.props.opened })} onClick={(e) => this.onClick(e)}>
				<div className="HamburgerButton__bar bar1"></div>
				<div className="HamburgerButton__bar bar2"></div>
				<div className="HamburgerButton__bar bar3"></div>
			</div>
		);
	}
}

export default HamburgerButton;