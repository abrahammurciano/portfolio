import React from "react";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";
import PortfolioItems from "../components/PortfolioItems";
import lines_background from "../public/images/lines_background.jpg";

export default function Portfolio() {
	return (
		<>
			<TitleSection title="My Portfolio" backgroundImage={lines_background} backgroundDim={0.3} />
			<Section>
				<PortfolioItems />
			</Section>
		</>
	);
}