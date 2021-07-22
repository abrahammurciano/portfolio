import classNames from "classnames";
import React from "react";
import "./NavBarItem.css";

export interface NavBarItemProps {
	label: string;
	active: boolean;
}

class NavBarItem extends React.Component<NavBarItemProps, {}> {
	render() {
		return (
			<div className={classNames("NavBarItem", { "active": this.props.active })}>
				{this.props.label}
			</div>
		);
	}
}

export default NavBarItem;