import WrapperProps from "./WrapperProps";
import "../styles/MainBar.module.css"

export default function MainBar(props: WrapperProps) {
	return (
		<div className="MainBar">
			{props.children}
		</div>
	);
}
