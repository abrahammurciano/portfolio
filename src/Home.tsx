import React from "react";
import Section from "./Section";
import CoverSection from "./CoverSection";
import PagePreviews from "./PagePreviews";

class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<Section>
					<CoverSection />
				</Section>
				<Section>
					<PagePreviews />
				</Section>
			</div>
		);
	}
}

export default Home;