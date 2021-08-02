import { Link } from "react-router-dom";
import "../styles/ButtonLink.module.css";
import WrapperProps from "./WrapperProps";

export interface ButtonLinkProps extends WrapperProps {
	to: string;
	leftIcon?: string;
	rightIcon?: string;
}

export default function ButtonLink(props: ButtonLinkProps) {
	return (
		<Link href={props.to} style={{ textDecoration: 'none' }}>
			<div className="ButtonLink">
				{props.leftIcon !== undefined && (<img className="ButtonLink__Icon left" src={props.leftIcon} alt="" />)}
				{props.children}
				{props.rightIcon !== undefined && (<img className="ButtonLink__Icon right" src={props.rightIcon} alt="" />)}
			</div>
		</Link>
	);
}