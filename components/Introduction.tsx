import css from "../styles/Introduction.module.css"
import Title from "./Title";

export default function Introduction() {
	return (
		<div className={css.Introduction}>
			<div className={css.Greeting}>Hello there!</div>
			<Title style={{ marginBlock: "0px" }}>I&apos;m Abraham.</Title>
			<div className={css.Trade}>Software Engineer, Graphic Designer, and Web Developer.</div>
		</div>
	);
}