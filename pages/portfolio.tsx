import React from "react";
import TitleSection from "../components/TitleSection";
import lines_background from "../public/images/lines_background.jpg";

export default function Portfolio() {
	return (
		<>
			<TitleSection title="My Portfolio" backgroundImage={lines_background} backgroundDim={0.3} />
		</>
	);
}