import React from "react";
import { Link } from "react-router-dom";
import "./ButtonLink.css";

export interface ButtonLinkProps {
	to: string;
	leftIcon?: string;
	rightIcon?: string;
}

class ButtonLink extends React.Component<ButtonLinkProps, {}> {
	render() {
		return (
			<Link to={this.props.to} style={{ textDecoration: 'none' }}>
				<div className="ButtonLink">
					{this.props.leftIcon !== undefined && (<img className="ButtonLink__Icon left" src={this.props.leftIcon} alt="" />)}
					{this.props.children}
					{this.props.rightIcon !== undefined && (<img className="ButtonLink__Icon right" src={this.props.rightIcon} alt="" />)}
				</div>
			</Link>
		);
	}
}

export default ButtonLink;