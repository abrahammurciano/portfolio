import React from "react";
import Pill from "./Pill";
import css from "../styles/Tag.module.css";

export interface TagProps {
	label: string;
	link?: string;
}

export default function Tag({ label, link }: TagProps) {
	const pill = (
		<Pill padding="8px 16px" isButton={link !== undefined}>
			{label}
		</Pill>
	);

	return link === undefined ? pill : (
		<a href={link} className={css.Link}>
			{pill}
		</a>
	)
}