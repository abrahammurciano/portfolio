import WrapperProps from "../models/WrapperProps";
import css from "../styles/Section.module.css"
import Background from "./Background";

export interface SectionProps extends WrapperProps {
	backgroundImage?: string;
	backgroundDim?: number;
}

export default function Section(props: SectionProps) {
	const sectionContents = (
		<section className={css.Section}>
			<div className={css.Contents}>
				{props.children}
			</div>
		</section>
	);

	if (props.backgroundImage === undefined) {
		return sectionContents
	}

	return (
		<Background image={props.backgroundImage} dim={props.backgroundDim}>
			{sectionContents}
		</Background>
	);
}