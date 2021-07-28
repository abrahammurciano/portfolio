import ButtonLink from "./ButtonLink";
import DividerLine from "./DividerLine";
import ImageTextSplit from "./ImageTextSplit";
import next from "./images/next.svg";
import { ReactNode } from "react";

export interface PagePreviewProps {
	text: ReactNode;
	buttonText: string;
	page: string;
	heading: string;
	imageSrc: string;
	imageSide?: "left" | "right";
}

export default function PagePreview(props: PagePreviewProps) {
	return (
		<ImageTextSplit imageSrc={props.imageSrc} imageSide={props.imageSide}>
			<h1>{props.heading}</h1>
			<DividerLine width="120px" align="left" />
			{props.text}
			<ButtonLink to={props.page} rightIcon={next}>{props.buttonText}</ButtonLink>
		</ImageTextSplit>
	);
}