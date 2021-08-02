import "../styles/Introduction.module.css"
import Title from "./Title";

export default function Introduction() {
	return (
		<div className="Introduction">
			<div className="Introduction__Greeting">Hello there!</div>
			<Title style={{ marginBlock: "0px" }}>I'm Abraham.</Title>
			<div className="Introduction__Trade">Software Engineer, Graphic Designer, and Web Developer.</div>
		</div>
	);
}