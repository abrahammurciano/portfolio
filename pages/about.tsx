import React, { CSSProperties } from "react";
import coding_indoors from "../public/images/coding_indoors.jpg";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import Biography from "../components/Biography";
import Skills from "../components/Skills";

export default function About() {

	const textStyle: CSSProperties = {
		color: "var(--light-2)",
		textShadow: "0px 0px 15px var(--dark-1), 0px 0px 50px var(--dark-1)",
	}

	return (
		<>
			<TitleSection title="A Bit About Myself" backgroundImage={`url(${coding_indoors})`} textStyle={textStyle} />
			<Section>
				<Biography />
			</Section>
			<Section>
				<Skills />
			</Section>
		</>
	);
}