import NavBarItem from "./NavBarItem";
import css from "../styles/NavBar.module.css";
import pages from "../data/pages.json";

export default function NavBar() {
	return (
		<div className={css.NavBar}>
			{pages.map((page, index) => (
				<NavBarItem page={page} key={index} />
			))}
		</div>
	);
}