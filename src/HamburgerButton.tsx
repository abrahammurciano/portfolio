import React from "react";
import classNames from "classnames";
import "./HamburgerButton.css";

type HamburgerMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

export interface HamburgerButtonProps {
	opened: boolean;
	onClick: (event: HamburgerMouseEvent) => void;
}

export default function HamburgerButton(props: HamburgerButtonProps) {
	function onClick(e: HamburgerMouseEvent) {
		props.onClick(e);
	}

	return (
		<button className={classNames("HamburgerButton", { "opened": props.opened })} onClick={(e) => onClick(e)} type="button">
			<span className="HamburgerBox">
				<span className="HamburgerInner"></span>
			</span>
		</button>
	);
}