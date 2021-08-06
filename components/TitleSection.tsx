import { CSSProperties } from "react";
import Section, { SectionProps } from "./Section";
import Title from "./Title";

export interface TitleSectionProps extends SectionProps {
	title: string;
	textColor?: "light" | "dark";
	textShadow?: boolean;
}

export default function TitleSection(props: TitleSectionProps) {

	const textStyle: CSSProperties = {
		color: `var(--${props.textColor || "light"}-2)`,
		textShadow: props.textShadow !== false ? "0px 0px 15px var(--dark-1), 0px 0px 50px var(--dark-1)" : undefined,
	}

	return (
		<Section {...props} backgroundImage={props.backgroundImage}>
			<Title style={textStyle}>{props.title}</Title>
		</Section>
	);
}