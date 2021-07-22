import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import "./NavBarItem.css";

export interface NavBarItemProps {
	label: string;
	page: string;
	active: boolean;
	onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

class NavBarItem extends React.Component<NavBarItemProps, {}> {
	render() {
		return (
			<Link className={classNames("NavBarItem", { "active": this.props.active })} to={this.props.page} onClick={this.props.onClick}>
				{this.props.active && <div className="NavBarItem__ActiveIndicator"></div>}
				{this.props.label}
			</Link>
		);
	}
}

export default NavBarItem;