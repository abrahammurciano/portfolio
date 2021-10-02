import classNames from "classnames";
import WrapperProps from "../models/WrapperProps";
import css from "../styles/Pill.module.css";

export interface PillProps extends WrapperProps {
	padding: string;
	isButton: boolean;
}

export default function Pill(props: PillProps) {
	return (
		<div className={classNames(css.Pill, { [css.isButton]: props.isButton })} style={{ padding: props.padding }}>
			{props.children}
		</div>
	)
}

Pill.defaultProps = {
	padding: "10px 20px",
	isButton: false,
}