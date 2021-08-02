import WrapperProps from "./WrapperProps";
import css from "../styles/Section.module.css"

export interface SectionProps extends WrapperProps {
	backgroundImage?: string;
}

export default function Section(props: SectionProps) {
	return (
		<section className={css.Section} style={{ backgroundImage: props.backgroundImage }}>
			<div className={css.Section__Contents}>
				{props.children}
			</div>
		</section>
	);
}