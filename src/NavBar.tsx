import React from "react";
import NavBarItem from "./NavBarItem";
import "./NavBar.css";

export interface NavBarState {
	selected_item: number;
}

const nav_bar_items = [
	{ label: "Home", page: "/" },
	{ label: "Portfolio", page: "/portfolio" },
	{ label: "About Me", page: "/about" },
	{ label: "Contact", page: "/contact" },
];

class NavBar extends React.Component<{}, NavBarState> {
	constructor(props: {}) {
		super(props);
		this.state = { selected_item: 0 };
	}

	setSelectedItem(index: number) {
		this.setState({ selected_item: index })
	}

	render() {
		console.log(this);
		return (
			<div className="NavBar">
				{nav_bar_items.map((item, index) => (
					<NavBarItem label={item.label} page={item.page} active={index === this.state.selected_item} key={index} onClick={(e) => this.setSelectedItem(index)} />
				))}
			</div>
		);
	}
}

export default NavBar;