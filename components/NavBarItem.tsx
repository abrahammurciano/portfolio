import classNames from "classnames";
import { useEffect, useState } from "react";
import Link from "next/link";
import css from "../styles/NavBarItem.module.css";
import { useRouter } from "next/dist/client/router";

export interface NavBarItemProps {
	page: { title: string; path: string; };
}

export default function NavBarItem({ page }: NavBarItemProps) {
	const [active, setActive] = useState(false);
	let router = useRouter();

	function onLocationChange() {
		setActive(router.pathname === page.path);
	}

	useEffect(onLocationChange, [router, page.path]);

	return (
		<div className={classNames(css.NavBarItem, { [css.active]: active })}>
			<Link href={page.path}>
				{page.title}
			</Link>
		</div>
	);
}