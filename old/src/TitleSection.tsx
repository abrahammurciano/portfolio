import { CSSProperties } from "react";
import Section, { SectionProps } from "./Section";
import Title from "./Title";

export interface TitleSectionProps extends SectionProps {
	title: string;
	textStyle?: CSSProperties;
}

export default function TitleSection(props: TitleSectionProps) {
	return (
		<Section backgroundImage={props.backgroundImage}>
			<Title style={props.textStyle}>{props.title}</Title>
		</Section>
	);
}