import { CSSProperties } from "react";
import coding_indoors from "../public/images/coding_indoors.jpg";
import Section from "../components/Section";
import TitleSection from "../components/TitleSection";

export default function About() {

	const textStyle: CSSProperties = {
		color: "var(--light-2)",
		textShadow: "0px 0px 15px var(--dark-1), 0px 0px 50px var(--dark-1)",
	}

	return (
		<>
			<TitleSection title="A Bit About Myself" backgroundImage={`url(${coding_indoors})`} textStyle={textStyle} />
			<Section>
				<h1>Hello There!</h1>
				<p>
					I was born in Torremolinos, Spain in the year 1998. At a young age my family moved to Gibraltar, where I grew up. Now, I speak both English and Spanish fluently. Throughout my years in primary school, two of my favourite classes were art and computers.
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
				<p>
					That was when I picked up my first big project. I was contacted by a businessman with a mutual friend who was looking for someone to build a sort of social network. Needless to say, I was completely out of my depth at the time although I didn't yet know it. I bravely took on the task, mostly as an opportunity to put my knowledge into practice, and as a chance to learn something new.
				</p>
				<p>
					What I thought would be a project of a couple of months turned into my full time side-project throughput the last year of high school. I learned a lot about object oriented programming and database management during this project, not to mention sharpening my JS and PHP skills.
				</p>
				<p>
					Unfortunately I had to drop the project when I finished high school, since I then went to Israel where I joined Yeshivas Toras Moshe. While I was there, although I was mostly isolated from computers, I managed to keep my graphic design in practice by making hand-drawn posters for some of my friends' businesses. I also designed the yeshiva hoodies for two years running.
				</p>
				<p>
					When I finished yeshiva, I wanted to take my programming skills to the next level. I joined the Jerusalem College of Technology, also known as Machon Lev, to get a degree in computer science. In our very first semester we were introduced to C++ by one of our best professors. C++ quickly became my favourite language due to its ability to control low level memory to allow for very fast and efficient programs. Ironically, what first turned me away from C++ (that is, pointers) was the very thing I love about it most.
				</p>
				<p>
					In my last summer before I finish my degree, I decided to learn to use React. I had for a long time been meaning to make a website to showcase my graphic design projects, but I'd been pushing that off for a while. So I decided to kill two birds with one stone and write my website with React. If you're reading this now, you can clearly see it was a great success!
				</p>
			</Section>
		</>
	);
}