import React from "react";
import NavBarItem from "./NavBarItem";
import "./NavBar.css";

export interface NavBarState {
	selected_item: number;
}

const nav_bar_items = [
	{ label: "Home" },
	{ label: "Portfolio" },
	{ label: "About" },
	{ label: "Contact" },
];

class NavBar extends React.Component<{}, NavBarState> {
	constructor(props: {}) {
		super(props);
		this.state = { selected_item: 0 };
	}
	render() {
		return (
			<div className="NavBar">
				{nav_bar_items.map((item, index) => (
					<NavBarItem label={item.label} active={index === this.state.selected_item} key={index} />
				))}
			</div>
		);
	}
}

export default NavBar;