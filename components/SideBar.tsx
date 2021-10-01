import classNames from "classnames";
import { CSSProperties, Dispatch, SetStateAction, useRef, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import css from "../styles/SideBar.module.css"
import WrapperProps from "../models/WrapperProps";
import useOnClickOutside from "use-onclickoutside";

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
	const sideBarRef = useRef(null);

	useOnClickOutside(sideBarRef, () => setOpened(false));

	return (
		<div className={classNames(css.SideBar, { [css.opened]: opened })} style={style} ref={sideBarRef}>
			<div className={css.ButtonWrapper}>
				<HamburgerButton onClick={() => setOpened(!opened)} opened={opened} />
			</div>
			<div className={css.OuterWrapper}>
				<div className={css.InnerWrapper}>
					{props.children}
				</div>
			</div>
		</div>
	);
}

SideBar.defaultProps = {
	expandedWidth: "320px"
}