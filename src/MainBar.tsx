import React from "react";
import "./MainBar.css"


class MainBar extends React.Component {
	render() {
		return (
			<div className="MainBar">
				{this.props.children}
			</div>
		);
	}
}

export default MainBar;