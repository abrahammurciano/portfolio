import React from "react";
import classNames from "classnames";
import css from "../styles/HamburgerButton.module.css";

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
		<button className={classNames(css.HamburgerButton, { [css.opened]: props.opened })} onClick={(e) => onClick(e)} type="button">
			<span className={css.HamburgerBox}>
				<span className={css.HamburgerInner}></span>
			</span>
		</button>
	);
}