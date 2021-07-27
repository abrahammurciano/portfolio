import React from "react";
import ImageTextSplit from "./ImageTextSplit";
import coding_outdoors from "./images/coding_outdoors.jpg";
import ButtonLink from "./ButtonLink";
import DividerLine from "./DividerLine";
import next from "./images/next.svg";

export interface AboutPreviewProps {
	imageSide?: "left" | "right";
}

class AboutPreview extends React.Component {
	render() {
		return (
			<ImageTextSplit imageSrc={coding_outdoors} imageSide="left">
				<h1>A bit about me...</h1>
				<DividerLine width="120px" align="left" />
				<p>
					I'm a passionate software engineer, full stack web developer, and graphic designer offering {new Date().getFullYear() - 2015} years of programming and design experience combined with an aptitude for quickly adopting new skills. I am hardworking and thorough with a passion for learning and gaining more experience in this field.
				</p>
				<ButtonLink to="/about" rightIcon={next}>About Me</ButtonLink>
			</ImageTextSplit>
		);
	}
}

export default AboutPreview;