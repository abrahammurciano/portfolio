import React from "react";
import classNames from "classnames"
import "./HamburgerButton.css"

type HamburgerMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

export interface HamburgerButtonProps {
	opened: boolean;
	onClick: (event: HamburgerMouseEvent) => void;
}

class HamburgerButton extends React.Component<HamburgerButtonProps, {}> {
	onClick(e: HamburgerMouseEvent) {
		this.props.onClick(e);
	}

	render() {
		return (
			<button className={classNames("HamburgerButton", { "opened": this.props.opened })} onClick={(e) => this.onClick(e)} type="button">
				<span className="HamburgerBox">
					<span className="HamburgerInner"></span>
				</span>
			</button>
		);
	}
}

export default HamburgerButton;