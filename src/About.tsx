import { CSSProperties } from "react";
import coding_indoors from "./images/coding_indoors.jpg";
import Section from "./Section";
import TitleSection from "./TitleSection";

export default function About() {

	const textStyle: CSSProperties = {
		color: "var(--light-2)",
		textShadow: "0px 0px 15px var(--dark-1), 0px 0px 50px var(--dark-1)",
	}

	return (
		<div className="About">
			<TitleSection title="A Bit About Myself" backgroundImage={`url(${coding_indoors})`} textStyle={textStyle} />
			<Section>
				<h1>Hello There!</h1>
				<p>
					I was born in Torremolinos, Spain in the year 1998. At a young age my family moved to Gibraltar, where I grew up. Because of this, I now speak both English and Spanish fluently. Throughout my years in primary school, two of my favourite classes were art and computers.
				</p>
				<p>
					During high school, I recieved my own laptop. I spent much of my free time with it, exploring its functions and learning how to use it to design posters and logos.
				</p>
				<p>
					One day, a friend of mine send me a link to an app, and told me, "Here's something you might enjoy." It was an app to learn C++. I began learning the C++ course, at first finding it interesting, but as my first exposure to programmin, it quickly became a little bit dull. Especially when I reached pointers. (Spoiler alert; C++ is now my favourite language.)
				</p>
				<p>
					In search of something more interesting to replace the time I was spending learning C++, I found a similar app to learn HTML. While I was learning HTML, I decided to put my newly acquired knowledge to use by volunteering to make a website for a summer camp I was participating in at the time.
				</p>
				<p>
					While I worked on that website, I inevitably picked up CSS on my own while trying to make the website look more appealing.
				</p>
				<p>
					The next languages I learned were JavaScript and PHP, which I used to make two websites for my father's business. Soon after that I learned SQL to be able to add databases to my websites.
				</p>
			</Section>
		</div>
	);
}