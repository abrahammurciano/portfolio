import { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./ButtonLink.css";

export interface ButtonLinkProps {
	to: string;
	leftIcon?: string;
	rightIcon?: string;
	children?: ReactNode;
}

export default function ButtonLink(props: ButtonLinkProps) {
	return (
		<Link to={props.to} style={{ textDecoration: 'none' }}>
			<div className="ButtonLink">
				{props.leftIcon !== undefined && (<img className="ButtonLink__Icon left" src={props.leftIcon} alt="" />)}
				{props.children}
				{props.rightIcon !== undefined && (<img className="ButtonLink__Icon right" src={props.rightIcon} alt="" />)}
			</div>
		</Link>
	);
}