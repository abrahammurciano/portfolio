import WrapperProps from "./WrapperProps";
import css from "../styles/MainBar.module.css"

export default function MainBar(props: WrapperProps) {
	return (
		<div className={css.MainBar}>
			{props.children}
		</div>
	);
}
