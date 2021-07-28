import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBarItem.css";

export interface NavBarItemProps {
	label: string;
	page: string;
}

export default function NavBarItem(props: NavBarItemProps) {
	let [active, setActive] = useState(false);
	let location = useLocation();

	function onLocationChange() {
		setActive(window.location.pathname === props.page);
	}

	useEffect(onLocationChange, [location]);

	return (
		<Link className={classNames("NavBarItem", { "active": active })} to={props.page}>
			{props.label}
		</Link>
	);
}