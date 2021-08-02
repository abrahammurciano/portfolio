import NavBarItem from "./NavBarItem";
import "../styles/NavBar.module.css";
import pages from "../data/pages";

export default function NavBar() {
	return (
		<div className="NavBar">
			{pages.map((page, index) => (
				<NavBarItem page={page} key={index} />
			))}
		</div>
	);
}