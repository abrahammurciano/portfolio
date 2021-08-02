import AboutPreview from "./AboutPreview";
import PortfolioPreview from "./PortfolioPreview";
import ContactPreview from "./ContactPreview";

export default function PagePreviews() {
	return (
		<div>
			<AboutPreview imageSide="left" />
			<PortfolioPreview imageSide="right" />
			<ContactPreview imageSide="left" />
		</div>
	);
}