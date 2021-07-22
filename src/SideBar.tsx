import classNames from "classnames";
import React, { CSSProperties } from "react";
import HamburgerButton from "./HamburgerButton";
import "./SideBar.css"

interface SideBarProps {
	opened?: boolean;
	expandedWidth?: string;
}

interface SideBarState {
	opened: boolean;
}

class SideBar extends React.Component<SideBarProps, SideBarState> {
	style: CSSProperties;

	constructor(props: SideBarProps) {
		super(props);
		this.state = { opened: props.opened || true };
		this.style = {
			["--expanded-width" as any]: props.expandedWidth || "320px",
		};
	}

	toggle() {
		this.setState({ opened: !this.state.opened });
	}

	render() {
		return (
			<div className={classNames("SideBar", { "opened": this.state.opened })} style={this.style}>
				<div className="SideBar__ButtonWrapper">
					<HamburgerButton onClick={() => this.toggle()} opened={this.state.opened} />
				</div>
				<div className="SideBar__OuterWrapper">
					<div className="SideBar__InnerWrapper">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default SideBar;