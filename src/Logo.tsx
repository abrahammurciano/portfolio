import React from "react";
import logo from "./images/logo.svg"

class Logo extends React.Component {
	render() {
		return (
			<img src={logo} alt="Logo" />
		);
	}
}

export default Logo;