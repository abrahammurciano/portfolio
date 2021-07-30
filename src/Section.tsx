import ChildrenOnlyProps from "./ChildrenOnlyProps";
import "./Section.css"

export default function Section(props: ChildrenOnlyProps) {
	return (
		<section className="Section">
			{props.children}
		</section>
	);
}