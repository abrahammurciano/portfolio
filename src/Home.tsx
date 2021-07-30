import Section from "./Section";
import CoverSection from "./CoverSection";
import PagePreviews from "./PagePreviews";

export default function Home() {
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