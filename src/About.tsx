import { CSSProperties } from "react";
import coding_indoors from "./images/coding_indoors.jpg";
import Section from "./Section";
import TitleSection from "./TitleSection";

export default function About() {

	const textStyle: CSSProperties = {
		color: "var(--light-2)",
		textShadow: "0px 0px 15px var(--dark-1), 0px 0px 50px var(--dark-1)",
	}

	return (
		<div className="About">
			<TitleSection title="A Bit About Myself" backgroundImage={`url(${coding_indoors})`} textStyle={textStyle} />
			<Section>
				<h1>Hello There!</h1>
				<p>
					I was born in Torremolinos, Spain in the year 1998. At a young age my family moved to Gibraltar, where I grew up. Throughout my years in primary school, two of my favourite classes were art and computers.
				</p>
				<p>

				</p>
			</Section>
		</div>
	);
}