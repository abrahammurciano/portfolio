import Section from "../components/Section";
import CoverSection from "../components/CoverSection";
import PagePreviews from "../components/PagePreviews";

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