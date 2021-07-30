import red_phone from "./images/red_phone.jpg";
import PagePreview from "./PagePreview";

export default function ContactPreview({ imageSide }: { imageSide: "left" | "right" }) {
	const text = (
		<div>
			<p>
				If you'd like to get a quote for some graphic design or programming job, or if you just want to talk, please feel free to get in touch with me.
			</p>
		</div>
	);

	return (
		<PagePreview heading="Get in Touch..." imageSrc={red_phone} page="/contact" text={text} imageSide={imageSide} buttonText="Contact Me" />
	);
}