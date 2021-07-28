import AboutPreview from "./AboutPreview";
import PortfolioPreview from "./PortfolioPreview";

export default function PagePreviews() {
	return (
		<div>
			<AboutPreview imageSide="left" />
			<PortfolioPreview imageSide="right" />
			{/* <PagePreview /> */}
			{/* <PagePreview /> */}
		</div>
	);
}