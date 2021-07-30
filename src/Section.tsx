import WrapperProps from "./WrapperProps";
import "./Section.css"

export interface SectionProps extends WrapperProps {
	backgroundImage?: string;
}

export default function Section(props: SectionProps) {
	return (
		<section className="Section" style={{ backgroundImage: props.backgroundImage }}>
			<div className="Section__Contents">
				{props.children}
			</div>
		</section>
	);
}