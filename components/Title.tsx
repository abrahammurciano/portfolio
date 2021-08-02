import { CSSProperties } from "react";
import css from "../styles/Title.module.css";
import WrapperProps from "../WrapperProps";

export interface TitleProps extends WrapperProps {
	style?: CSSProperties;
}

export default function Title(props: TitleProps) {
	return (
		<h1 className={css.Title} style={props.style}>
			{props.children}
		</h1>
	)
}