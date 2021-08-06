import WrapperProps from "../WrapperProps";
import css from "../styles/Section.module.css"
import Image from "next/image";
import Background from "./Background";

export interface SectionProps extends WrapperProps {
	backgroundImage?: string;
	backgroundDim?: number;
}

export default function Section(props: SectionProps) {
	const sectionContents = (
		<section className={css.Section}>
			<div className={css.Section__Contents}>
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