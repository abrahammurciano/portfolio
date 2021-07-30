import portfolio from "./images/portfolio.jpg";
import PagePreview from "./PagePreview";

export default function AboutPreview({ imageSide }: { imageSide: "left" | "right" }) {
	const text = (
		<div>
			<p>
				Ever since I was young I had a slightly artistic side. As I grew older, I found enjoyment in graphic design. I started by making logos and posters for friends. Soon after, I started dabbling in web design.
			</p>
			<p>
				What started out as a mere hobby during high school quickly turned into my passion. While my graphic design skills steadily improved, I learned programming languages one after another. This educational journey left behind a collection of my creations.
			</p>
		</div>
	);

	return (
		<PagePreview heading="Some of my Projects..." imageSrc={portfolio} page="/portfolio" text={text} imageSide={imageSide} buttonText="My Portfolio" />
	);
}