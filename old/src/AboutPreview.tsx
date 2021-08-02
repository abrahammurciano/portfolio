import coding_outdoors from "../public/images/coding_outdoors.jpg";
import PagePreview from "./PagePreview";

export default function AboutPreview({ imageSide }: { imageSide: "left" | "right" }) {
	const text = (
		<p>
			I'm a passionate software engineer, full stack web developer, and graphic designer offering ${new Date().getFullYear() - 2015} years of programming and design experience combined with an aptitude for quickly adopting new skills. I am hardworking and thorough with a passion for learning and gaining more experience in this field.
		</p>
	);

	return (
		<PagePreview heading="A bit about me..." imageSrc={coding_outdoors} page="/about" text={text} imageSide={imageSide} buttonText="About Me" />
	);
}