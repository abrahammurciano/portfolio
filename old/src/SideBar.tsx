import classNames from "classnames";
import { CSSProperties, useState } from "react";
import HamburgerButton from "./HamburgerButton";
import "../styles/SideBar.module.css"
import WrapperProps from "./WrapperProps";

interface SideBarProps extends WrapperProps {
	opened?: boolean;
	expandedWidth?: string;
}

export default function SideBar(props: SideBarProps) {
	const [opened, setOpened] = useState<boolean>(props.opened || true);
	const style: CSSProperties = {
		["--expanded-width" as any]: props.expandedWidth || "320px",
	}

	return (
		<div className={classNames("SideBar", { "opened": opened })} style={style}>
			<div className="SideBar__ButtonWrapper">
				<HamburgerButton onClick={() => setOpened(!opened)} opened={opened} />
			</div>
			<div className="SideBar__OuterWrapper">
				<div className="SideBar__InnerWrapper">
					{props.children}
				</div>
			</div>
		</div>
	);
}