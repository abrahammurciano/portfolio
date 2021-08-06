import React from "react";
import coding_indoors from "../public/images/coding_indoors.jpg";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import Biography from "../components/Biography";
import Skills from "../components/Skills";

export default function About() {
	return (
		<>
			<TitleSection title="A Bit About Myself" backgroundImage={coding_indoors} backgroundDim={0.1} textColor="light" textShadow />
			<Section>
				<Biography />
			</Section>
			<Section>
				<Skills />
			</Section>
		</>
	);
}