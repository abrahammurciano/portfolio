import { CSSProperties } from "react";
import "../styles/Title.module.css";
import WrapperProps from "./WrapperProps";

export interface TitleProps extends WrapperProps {
	style?: CSSProperties;
}

export default function Title(props: TitleProps) {
	return (
		<h1 className="Title" style={props.style}>
			{props.children}
		</h1>
	)
}