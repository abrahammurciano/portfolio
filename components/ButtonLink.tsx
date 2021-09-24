import Link from "next/link";
import css from "../styles/ButtonLink.module.css";
import WrapperProps from "../models/WrapperProps";
import ButtonIcon from "./ButtonIcon";

export interface ButtonLinkProps extends WrapperProps {
	href: string;
	leftIcon?: string;
	rightIcon?: string;
}

export default function ButtonLink(props: ButtonLinkProps) {
	return (
		<Link href={props.href} passHref>
			<div className={css.ButtonLink}>
				{props.leftIcon !== undefined && (<ButtonIcon src={props.leftIcon} side="left" />)}
				{props.children}
				{props.rightIcon !== undefined && (<ButtonIcon src={props.rightIcon} side="right" />)}
			</div>
		</Link>
	);
}