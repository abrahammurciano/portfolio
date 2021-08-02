import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Page } from "../data/pages";
import "../styles/NavBarItem.module.css";

export interface NavBarItemProps {
	page: Page;
}

export default function NavBarItem({ page }: NavBarItemProps) {
	const [active, setActive] = useState(false);
	let location = useLocation();

	function onLocationChange() {
		setActive("/" + window.location.pathname.split("/", 2)[1] === page.path);
	}

	useEffect(onLocationChange, [location, page.path]);

	return (
		<Link className={classNames("NavBarItem", { "active": active })} href={page.path}>
			{page.title}
		</Link>
	);
}