import NavBarItem from "./NavBarItem";
import "./NavBar.css";
import pages from "./data/pages";

export default function NavBar() {
	return (
		<div className="NavBar">
			{pages.map((page, index) => (
				<NavBarItem label={page.title} page={page.path} key={index} />
			))}
		</div>
	);
}