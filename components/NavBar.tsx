import NavBarItem from "./NavBarItem";
import css from "../styles/NavBar.module.css";
import pages from "../data/pages.json";

export interface NavBarProps {
	onClick: () => void;
}

export default function NavBar({ onClick }: NavBarProps) {
	return (
		<div className={css.NavBar}>
			{pages.map((page, index) => (
				<NavBarItem page={page} key={index} onClick={onClick} />
			))}
		</div>
	);
}