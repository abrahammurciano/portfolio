import ChildrenOnlyProps from "./ChildrenOnlyProps";
import "./MainBar.css"

export default function MainBar(props: ChildrenOnlyProps) {
	return (
		<div className="MainBar">
			{props.children}
		</div>
	);
}
