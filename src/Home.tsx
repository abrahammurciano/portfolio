import React from "react";
import Section from "./Section";
import CoverSection from "./CoverSection";

class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<Section>
					<CoverSection />
				</Section>
			</div>
		);
	}
}

export default Home;