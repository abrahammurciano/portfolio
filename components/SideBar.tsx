import classNames from "classnames";
import { CSSProperties, Dispatch, SetStateAction, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import css from "../styles/SideBar.module.css"
import WrapperProps from "../WrapperProps";

interface SideBarProps extends WrapperProps {
	openedState?: [boolean, Dispatch<SetStateAction<boolean>>];
	expandedWidth: string;
}

export default function SideBar(props: SideBarProps) {
	const style: CSSProperties = {
		["--expanded-width" as any]: props.expandedWidth,
	}

	const state = useState(false);
	const [opened, setOpened] = props.openedState || state;

	return (
		<div className={classNames(css.SideBar, { [css.opened]: opened })} style={style}>
			<div className={css.SideBar__ButtonWrapper}>
				<HamburgerButton onClick={() => setOpened(!opened)} opened={opened} />
			</div>
			<div className={css.SideBar__OuterWrapper}>
				<div className={css.SideBar__InnerWrapper}>
					{props.children}
				</div>
			</div>
		</div>
	);
}

SideBar.defaultProps = {
	expandedWidth: "320px"
}