import classNames from "classnames";
import { useEffect, useState } from "react";
import Link from "next/link";
import css from "../styles/NavBarItem.module.css";
import { useRouter } from "next/router";

export interface NavBarItemProps {
	page: { title: string; path: string; };
	onClick: () => void;
}

export default function NavBarItem({ page, onClick }: NavBarItemProps) {
	const [active, setActive] = useState(false);
	let router = useRouter();

	function onLocationChange() {
		setActive(router.pathname === page.path);
	}

	useEffect(onLocationChange, [router, page.path]);

	return (
		<div className={classNames(css.NavBarItem, { [css.active]: active })} onClick={onClick}>
			<Link href={page.path}>
				{page.title}
			</Link>
		</div>
	);
}