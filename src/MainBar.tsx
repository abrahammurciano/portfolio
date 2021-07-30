import WrapperProps from "./WrapperProps";
import "./MainBar.css"

export default function MainBar(props: WrapperProps) {
	return (
		<div className="MainBar">
			{props.children}
		</div>
	);
}
