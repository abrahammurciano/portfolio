import Link from "next/link";
import css from "../styles/ButtonLink.module.css";
import WrapperProps from "../WrapperProps";

export interface ButtonLinkProps extends WrapperProps {
	href: string;
	leftIcon?: string;
	rightIcon?: string;
}

export default function ButtonLink(props: ButtonLinkProps) {
	return (
		<Link href={props.href}>
			<div className={css.ButtonLink}>
				{props.leftIcon !== undefined && (<img className={`${css.ButtonLink__Icon} ${css.left}`} src={props.leftIcon} alt="" />)}
				{props.children}
				{props.rightIcon !== undefined && (<img className={`${css.ButtonLink__Icon} ${css.right}`} src={props.rightIcon} alt="" />)}
			</div>
		</Link>
	);
}