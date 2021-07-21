import classNames from "classnames";
import React from "react";
import HamburgerButton from "./HamburgerButton";
import "./SideBar.css"

interface SideBarProps {
	opened?: boolean;
}

interface SideBarState {
	opened: boolean;
}

class SideBar extends React.Component<SideBarProps, SideBarState> {
	constructor(props: SideBarProps) {
		super(props);
		this.state = { opened: props.opened || true };
	}

	toggle() {
		this.setState({ opened: !this.state.opened });
	}

	render() {
		return (
			<div className={classNames("SideBar", { "opened": this.state.opened })}>
				<HamburgerButton onClick={() => this.toggle()} opened={this.state.opened} />
				{this.props.children}
			</div>
		);
	}
}

export default SideBar;