import React from "react";
import NavBarItem from "./NavBarItem";
import "./NavBar.css";

const nav_bar_items = [
	{ label: "Home", page: "/" },
	{ label: "Portfolio", page: "/portfolio" },
	{ label: "About Me", page: "/about" },
	{ label: "Contact", page: "/contact" },
];

class NavBar extends React.Component {
	render() {
		return (
			<div className="NavBar">
				{nav_bar_items.map((item, index) => (
					<NavBarItem label={item.label} page={item.page} key={index} />
				))}
			</div>
		);
	}
}

export default NavBar;